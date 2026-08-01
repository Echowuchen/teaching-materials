#!/usr/bin/env python3
"""RAZ Week 1 Web Server - serves pages + proxies Baidu Netdisk media"""
import json, os, requests, time, hashlib, threading
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
from pathlib import Path
import re

BASE = os.path.dirname(os.path.abspath(__file__))
CREDS_PATH = os.path.join(BASE, ".baidu_netdisk", "credentials.json")
CACHE_DIR = os.path.join(BASE, "media_cache")

# Dlink cache (expire in 1h)
DLINK_CACHE = {}
CACHE_LOCK = threading.Lock()

# File mapping: URL path -> (fs_id, baidu_path)
MEDIA_MAP = {}

BAIDU_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "Referer": "https://pan.baidu.com/",
}

DAY_MAP = {
    "day1": "1-1", "day2": "1-2", "day3": "1-3", "day4": "1-4",
    "day5": "1-5", "day6": "1-6", "day7": "1-7",
}


def get_baidu_token():
    with open(CREDS_PATH) as f:
        return json.load(f)["access_token"]


def build_media_map():
    """Fetch file list from Baidu API and build path -> (fs_id, baidu_path) mapping"""
    token = get_baidu_token()
    base = "/我的资源/RAZ AA-C喂饭包/第 1 周"
    count = 0
    for local_dir, day_num in DAY_MAP.items():
        for sub, sub_en in [("视频", "videos"), ("音频", "audio")]:
            baidu_dir = f"{base}/{day_num}/{day_num} {sub}"
            try:
                r = requests.get("https://pan.baidu.com/rest/2.0/xpan/file", params={
                    "method": "list", "access_token": token,
                    "dir": baidu_dir, "order": "name", "limit": 50,
                }, timeout=15)
                data = r.json()
                if data.get("errno") != 0:
                    print(f"  Warning listing {baidu_dir}: errno={data.get('errno')}")
                    continue
                for f in data.get("list", []):
                    name = f["server_filename"]
                    fs_id = f["fs_id"]
                    baidu_path = f"{baidu_dir}/{name}"
                    url_path = f"/{local_dir}/{sub_en}/{name}"
                    MEDIA_MAP[url_path] = (fs_id, baidu_path)
                    count += 1
            except Exception as e:
                print(f"  Error listing {baidu_dir}: {e}")
    print(f"Built media map: {count} entries")


def get_dlink(fs_id):
    """Get a fresh dlink for a file, with caching"""
    with CACHE_LOCK:
        if fs_id in DLINK_CACHE:
            cached_time, cached_url = DLINK_CACHE[fs_id]
            if time.time() - cached_time < 3600:
                return cached_url

    token = get_baidu_token()
    r = requests.get("https://pan.baidu.com/rest/2.0/xpan/file", params={
        "method": "filemetas", "access_token": token,
        "fsids": f"[{fs_id}]", "dlink": 1,
    }, timeout=15)
    data = r.json()
    if data.get("errno") != 0:
        return None
    dlink = data.get("info", [{}])[0].get("dlink", "")
    if dlink:
        # Append access_token for download
        if "access_token" not in dlink:
            dlink += "&access_token=" + token
        with CACHE_LOCK:
            DLINK_CACHE[fs_id] = (time.time(), dlink)
    return dlink


def get_local_cache_path(url_path: str) -> str:
    """Get local file path for cached media"""
    safe = url_path.lstrip("/").replace("/", "_")
    return os.path.join(CACHE_DIR, safe)


def _guess_media_type(filepath: str) -> str:
    ext = os.path.splitext(filepath)[1].lower()
    return {
        ".mp4": "video/mp4",
        ".mp3": "audio/mpeg",
        ".wav": "audio/wav",
        ".ogg": "audio/ogg",
        ".webm": "video/webm",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".png": "image/png",
    }.get(ext, "application/octet-stream")


def _serve_range_from_file(filepath: str, range_header: str, self) -> None:
    """Serve a partial file for Range requests"""
    file_size = os.path.getsize(filepath)
    m = re.match(r"bytes=(\d+)-(\d*)", range_header)
    if not m:
        self.send_error(416)
        return
    start = int(m.group(1))
    end_str = m.group(2)
    end = int(end_str) if end_str else file_size - 1
    length = end - start + 1

    content_type = _guess_media_type(filepath)
    self.send_response(206)
    self.send_header("Content-Type", content_type)
    self.send_header("Content-Range", f"bytes {start}-{end}/{file_size}")
    self.send_header("Content-Length", str(length))
    self.send_header("Accept-Ranges", "bytes")
    self.end_headers()
    with open(filepath, "rb") as f:
        f.seek(start)
        remaining = length
        while remaining > 0:
            chunk_size = min(65536, remaining)
            data = f.read(chunk_size)
            if not data:
                break
            self.wfile.write(data)
            remaining -= len(data)


class RazHandler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        print(f"[RAZ] {self.address_string()} - {format % args}")

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path

        # API: proxy media files from Baidu
        if path.startswith("/api/media"):
            qs = parse_qs(parsed.query)
            media_path = qs.get("path", [None])[0]
            if not media_path or media_path not in MEDIA_MAP:
                self.send_error(404, "Media not found in map")
                print(f"  Media not in map: {media_path} (map has {len(MEDIA_MAP)} entries)")
                return

            fs_id, baidu_path = MEDIA_MAP[media_path]
            dlink = get_dlink(fs_id)
            if not dlink:
                self.send_error(502, "Failed to get download link from Baidu")
                return

            cache_path = get_local_cache_path(media_path)
            range_header = self.headers.get("Range", "")

            # Serve from local cache if available
            if os.path.exists(cache_path):
                if range_header:
                    _serve_range_from_file(cache_path, range_header, self)
                else:
                    file_size = os.path.getsize(cache_path)
                    content_type = _guess_media_type(cache_path)
                    self.send_response(200)
                    self.send_header("Content-Type", content_type)
                    self.send_header("Content-Length", str(file_size))
                    self.send_header("Accept-Ranges", "bytes")
                    self.end_headers()
                    with open(cache_path, "rb") as f:
                        self.wfile.write(f.read())
                return

            # Stream from Baidu (first access)
            try:
                baidu_headers = {**BAIDU_HEADERS}
                if range_header:
                    baidu_headers["Range"] = range_header

                resp = requests.get(dlink, headers=baidu_headers, stream=True, timeout=120)
                resp.raise_for_status()

                # Pass through partial content
                if resp.status_code == 206:
                    self.send_response(206)
                    for h in ("Content-Range", "Content-Length", "Content-Type"):
                        if h in resp.headers:
                            self.send_header(h, resp.headers[h])
                    self.send_header("Accept-Ranges", "bytes")
                    self.end_headers()
                    for chunk in resp.iter_content(chunk_size=65536):
                        if chunk:
                            self.wfile.write(chunk)
                    return

                content_type = resp.headers.get("Content-Type", "application/octet-stream")
                content_length = resp.headers.get("Content-Length")

                self.send_response(200)
                self.send_header("Content-Type", content_type)
                if content_length:
                    self.send_header("Content-Length", content_length)
                self.send_header("Accept-Ranges", "bytes")
                self.end_headers()

                # Stream + cache simultaneously
                os.makedirs(os.path.dirname(cache_path), exist_ok=True)
                tmp_path = cache_path + ".tmp"
                with open(tmp_path, "wb") as cf:
                    for chunk in resp.iter_content(chunk_size=65536):
                        if chunk:
                            cf.write(chunk)
                            self.wfile.write(chunk)
                os.rename(tmp_path, cache_path)
                print(f"  Cached: {baidu_path} -> {cache_path}")

            except requests.exceptions.RequestException as e:
                print(f"  Error proxying {baidu_path}: {e}")
                self.send_error(502, f"Baidu proxy error: {e}")
            return

        # Serve static files
        if path == "/" or path == "/index.html":
            file_path = os.path.join(BASE, "index.html")
        elif path.startswith("/day") and path.endswith(".html"):
            day = path.replace("/", "").replace(".html", "")
            file_path = os.path.join(BASE, f"{day}.html")
        else:
            self.send_error(404)
            return

        if not os.path.exists(file_path):
            self.send_error(404)
            return

        content_type = "text/html; charset=utf-8" if file_path.endswith(".html") else "application/octet-stream"
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.end_headers()
        with open(file_path, "rb") as f:
            self.wfile.write(f.read())


def main():
    print("Building media map from Baidu Netdisk...")
    build_media_map()
    port = int(os.environ.get("PORT", 8080))
    server = HTTPServer(("0.0.0.0", port), RazHandler)
    print(f"\nRAZ server running on http://localhost:{port}")
    print(f"Media cache: {CACHE_DIR}")
    print(f"Open http://localhost:{port} in your browser")
    server.serve_forever()


if __name__ == "__main__":
    main()
