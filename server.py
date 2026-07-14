#!/usr/bin/env python3
"""RAZ Week 1 Web Server - serves pages + proxies Baidu Netdisk media"""
import json, os, requests, time, hashlib, threading
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import re

BASE = os.path.dirname(os.path.abspath(__file__))
CREDS_PATH = os.path.expanduser("~/.baidu_netdisk/credentials.json")

# Cache for dlinks (they expire in 8h, we cache for 1h)
DLINK_CACHE = {}
CACHE_LOCK = threading.Lock()

def get_baidu_token():
    with open(CREDS_PATH) as f:
        return json.load(f)["access_token"]

# File mapping: URL path -> Baidu fs_id
# Generated from Baidu API response
MEDIA_MAP = {}

def build_media_map():
    """Fetch file list from Baidu API and build path->fs_id mapping"""
    token = get_baidu_token()
    base = "/我的资源/RAZ AA-C喂饭包/第 1 周"
    days = [
        ("1-1", "day1"), ("1-2", "day2"), ("1-3", "day3"),
        ("1-4", "day4"), ("1-5", "day5"), ("1-6", "day6"),
        ("1-7", "day7"),
    ]
    for day, local_dir in days:
        for sub, sub_en in [("视频", "videos"), ("音频", "audio")]:
            r = requests.get("https://pan.baidu.com/rest/2.0/xpan/file", params={
                "method": "list", "access_token": token,
                "dir": f"{base}/{day}/{day} {sub}",
                "order": "name", "limit": 50
            })
            data = r.json()
            for f in data.get("list", []):
                name = f["server_filename"]
                path = f"/{local_dir}/{sub_en}/{name}"
                MEDIA_MAP[path] = f["fs_id"]

    print(f"Built media map: {len(MEDIA_MAP)} entries")

def get_dlink(fs_id):
    """Get a fresh dlink for a file, with caching"""
    with CACHE_LOCK:
        if fs_id in DLINK_CACHE:
            cached_time, cached_url = DLINK_CACHE[fs_id]
            if time.time() - cached_time < 3600:  # 1 hour cache
                return cached_url

    token = get_baidu_token()
    r = requests.get("https://pan.baidu.com/rest/2.0/xpan/file", params={
        "method": "filemetas", "access_token": token,
        "fsids": f"[{fs_id}]", "dlink": 1
    })
    data = r.json()
    dlink = data.get("info", [{}])[0].get("dlink", "")

    if dlink:
        with CACHE_LOCK:
            DLINK_CACHE[fs_id] = (time.time(), dlink)

    return dlink


class RazHandler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        pass  # Quiet

    def do_GET(self):
        path = urlparse(self.path).path

        # API: proxy media files from Baidu
        if path.startswith("/api/media"):
            qs = parse_qs(urlparse(self.path).query)
            media_path = qs.get("path", [None])[0]
            if media_path and media_path in MEDIA_MAP:
                fs_id = MEDIA_MAP[media_path]
                dlink = get_dlink(fs_id)
                if dlink:
                    self.send_response(302)
                    self.send_header("Location", dlink)
                    self.end_headers()
                    return
            self.send_error(404, "Media not found")
            return

        # Serve static files
        if path == "/" or path == "/index.html":
            file_path = os.path.join(BASE, "index_online.html")
        elif path.startswith("/day") and path.endswith(".html"):
            day = path.replace("/", "").replace(".html", "")
            file_path = os.path.join(BASE, f"{day}_online.html")
        elif path.startswith("/day") and "/audio/" in path:
            # Redirect audio requests to API proxy
            qs_path = path
            self.send_response(302)
            self.send_header("Location", f"/api/media?path={qs_path}")
            self.end_headers()
            return
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
    build_media_map()
    port = int(os.environ.get("PORT", 8080))
    server = HTTPServer(("0.0.0.0", port), RazHandler)
    print(f"Server running on http://localhost:{port}")
    server.serve_forever()

if __name__ == "__main__":
    main()
