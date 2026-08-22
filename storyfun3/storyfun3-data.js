// Storyfun 3 (for Movers) 造句练习 — 结构化数据
// 内容来源：FlowUs「Storyfun 3 造句练习」8 个单元页面
// 故事文本来源：Storyfun 3 Student's Book (Saxby Karen, 2017)
// 使用方式：<script src="storyfun3-data.js"></script> 后读取 window.STORYFUN3

window.STORYFUN3 = [
  {
    id: 1,
    unit: "Story 1",
    title: "Jack and the Penguins",
    emoji: "🐧",
    theme: "love/enjoy + V-ing + Can I...? + How many/How much",
    intro: "🐧 Jack 在动物园帮爸爸喂动物。他喜欢动物，也喜欢学习关于动物的知识！",
    corePatterns: [
      { pattern: "love / enjoy + V-ing", example: "Jack loves feeding the penguins." },
      { pattern: "Can I + 动词?", example: "Can I feed the bats, Dad?" },
      { pattern: "How many + 可数名词?", example: "How many penguins are there?" },
      { pattern: "How much + 不可数名词?", example: "How much pie is in the cupboard?" }
    ],
    rounds: [
      {
        title: "Round 1：love / enjoy + V-ing",
        difficulty: 1,
        rule: "从下面词卡选词，用 love 或 enjoy + V-ing 造句。",
        cards: [
          "词卡 A（人物）：I / Jack / The penguins / My dad",
          "词卡 B（活动）：feed the animals / learn about animals / swim in the sea / eat fish / wash the elephants"
        ],
        answers: [
          "I love feeding the animals at the zoo. 🐘",
          "Jack enjoys learning about animals. 📚",
          "The penguins love eating fish. 🐟",
          "My dad enjoys washing the elephants. 🐘",
          "I love swimming in the sea with dolphins. 🐬"
        ],
        tip: "love/enjoy 后面动词要加 -ing！说成 I love feed 也没关系，先开口再说！"
      },
      {
        title: "Round 2：Can I…?（请求许可）",
        difficulty: 2,
        rule: "用 Can I...? 向爸爸请求做某事，再用一句话说明理由。",
        cards: [
          "词卡：feed the bats / get some juice / wash the elephants / help you / give food to the penguins"
        ],
        answers: [
          "Can I feed the bats? I love bats! 🦇",
          "Can I get some juice for the giraffes? They are thirsty. 🦒",
          "Can I wash the elephants? They enjoy water! 🐘",
          "Can I help you, Dad? I want to learn about animals. 👨‍👦",
          "Can I give food to the penguins? They look hungry. 🐧"
        ],
        tip: "Can I + 动词原形 = 礼貌地请求。加上一句理由，别人更愿意答应你！"
      },
      {
        title: "Round 3：How many / How much（多少）",
        difficulty: 3,
        rule: "看词卡，判断是可数还是不可数，用 How many 或 How much 造句。",
        cards: [
          "词卡：penguins / fish / water / juice / burgers / food / cheese / milkshakes"
        ],
        answers: [
          "How many penguins are there? There are ten. 🐧🔟",
          "How much fish do the penguins eat? They eat a lot. 🐟",
          "How much water do they drink? They drink all the water. 💧",
          "How many burgers does Jack want? He wants four burgers. 🍔",
          "How much food is in the cupboard? There is a big pie. 🥧"
        ],
        tip: "可数名词用 How many（many+复数），不可数名词用 How much（water/juice/food/cheese）。"
      },
      {
        title: "Round 4：动物园对话 — Can I + love/enjoy",
        difficulty: 4,
        rule: "和爸爸在动物园对话。用 Can I...? 提问，用 love/enjoy 回答。",
        cards: [
          "场景A：你想喂企鹅 🐧",
          "场景B：你想给长颈鹿拿果汁 🦒",
          "场景C：你想帮爸爸洗大象 🐘"
        ],
        answers: [
          "场景A：孩子: Dad, can I feed the penguins? 🐧 / 爸爸: Yes, you can. The fish is in the grey cupboard. Do you love feeding them? / 孩子: Yes! I love feeding the penguins! They are so funny! 😄",
          "场景B：孩子: Can I get some juice for the giraffes? 🦒 / 爸爸: Good idea! They enjoy drinking juice. Be careful! / 孩子: I enjoy helping you, Dad! 😊",
          "场景C：孩子: Can I wash the elephants? 🐘 / 爸爸: Of course! The elephants love playing with water. / 孩子: And I enjoy washing them! Let's go! 💪"
        ],
        tip: "对话里来回说 Can I...? 和 love/enjoy，把两轮学的句型串起来，就是一个小故事啦！"
      }
    ],
    retell: {
      summary: "Jack 去 Waterfall Zoo 帮爸爸喂动物。他想喂蝙蝠和长颈鹿，但爸爸让他先喂十只企鹅。Jack 打开了错误的橱柜——但他最后找到了正确的食物，喂饱了企鹅。",
      storyPoints: [
        "Jack loves animals and goes to the zoo.",
        "He asks Dad: 'Can I help you today?'",
        "Dad says: 'Feed the ten penguins first.'",
        "Jack looks in the blue cupboard — wrong!",
        "He finds the penguins' food at last. 🐧"
      ],
      keywords: ["zoo", "penguins", "feed", "cupboard", "love", "help"],
      sentenceStarters: ["First, Jack...", "Then Dad says...", "In the end, he..."],
      challenge: "用 How many/How much 加一句：How much fish do the penguins eat?"
    },
    checkin: [
      "Round 1 (love/enjoy)：写下2个句子",
      "Round 2 (Can I…?)：写下2个句子",
      "Round 3 (How many/much)：写下2个句子",
      "Round 4 (对话)：角色A + 角色B"
    ]
  },
  {
    id: 2,
    unit: "Story 2",
    title: "Jog the Alien",
    emoji: "👽",
    theme: "Shall I...? + 地点介词 (opposite/next to/in) + go to... to...",
    intro: "👽 Jog 是一个外星人，他喜欢数汽车、吃洋葱，还帮助小镇上的人！",
    corePatterns: [
      { pattern: "Shall I + 动词?", example: "Shall I carry your bags?" },
      { pattern: "地点介词", example: "opposite / next to / in" },
      { pattern: "go to + 地点 + to + 动词", example: "I go to the library to read books." }
    ],
    rounds: [
      {
        title: "Round 1：Shall I…？（主动提供帮助）",
        difficulty: 1,
        rule: "用 Shall I...? 主动提出帮助某人。",
        cards: [
          "词卡 A（动词）：carry your bags / help you cross the road / find your book / wash your truck / feed the animals",
          "词卡 B（对象）：you / Miss Kite / Charlie and Lily / your mum"
        ],
        answers: [
          "Shall I carry your bags for you? 👜",
          "Shall I help you cross the road, Miss Kite? 🚶‍♀️",
          "Shall I find your book for you? 📖",
          "Shall I wash your truck? It's very dirty! 🚚",
          "Shall I feed the animals for you? 🐾"
        ],
        tip: "Shall I + 动词原形 = 主动帮忙。比 Can I 更热情，像在说『我来帮你吧！』"
      },
      {
        title: "Round 2：地点介词（opposite / next to / in）",
        difficulty: 2,
        rule: "用 opposite、next to 或 in 来描述两个地点的位置关系。",
        cards: [
          "词卡（地点对）：circus-hospital / supermarket-car park / cinema-funfair / playground-school / hospital-town centre"
        ],
        answers: [
          "The circus is opposite the hospital. 🎪 🏥",
          "The supermarket is next to the car park. 🛒 🅿️",
          "The cinema is in the town centre. 🎬 🏙️",
          "The playground is next to the school. 🛝 🏫",
          "The hospital is opposite the supermarket. 🏥 🛒"
        ],
        tip: "opposite = 正对面，next to = 紧挨着，in = 在……里面。画个地图就明白啦！"
      },
      {
        title: "Round 3：go to… to…（目的表达）",
        difficulty: 3,
        rule: "用 go/goes to [地点] to [动词] 说明去某地的目的。",
        cards: [
          "词卡 A（地点）：supermarket / cinema / hospital / school / park / library",
          "词卡 B（目的）：buy food / watch a film / see a doctor / learn / play / read books"
        ],
        answers: [
          "I go to the supermarket to buy food. 🛒",
          "Jack goes to the cinema to watch a film. 🎬",
          "Miss Kite goes to the hospital to see a doctor. 🏥",
          "We go to school to learn. 🏫",
          "Children go to the park to play. 🌳",
          "I go to the library to read books. 📚"
        ],
        tip: "go to + 地点 + to + 动词原形：第一个 to 是『去』，第二个 to 是『为了』。"
      },
      {
        title: "Round 4：小镇对话 — Shall I…？+ 感谢回应",
        difficulty: 4,
        rule: "扮演外星人 Jog 和小镇居民，用 Shall I...? 提供帮助并回应。",
        cards: [
          "场景A：Jog 帮 Miss Kite 拿包 👜",
          "场景B：Jog 帮 Charlie 和 Lily 停车 🚚",
          "场景C：Jog 帮老奶奶过马路 🚶‍♀️"
        ],
        answers: [
          "场景A：Jog: Shall I carry your bags for you, Miss Kite? 👜 / Miss Kite: Oh, thank you! That's very kind! / Jog: Aliens love carrying bags! 👽",
          "场景B：Jog: Shall I find a place for your truck? 🚚 / Charlie: Yes, please! The car park is opposite the cinema. / Lily: Thank you for asking! 😊",
          "场景C：Jog: Shall I help you cross the road? 🚶‍♀️ / Old lady: Yes, please! You are very kind. / Jog: Aliens love helping people! 👽❤️"
        ],
        tip: "帮完忙记得回应 Thank you! / That's very kind! 做一个有礼貌的外星人！"
      }
    ],
    retell: {
      summary: "外星人 Jog 来到 Skiptown 小镇。他进超市买蔬菜、数汽车、吃洋葱。镇上的居民把他错认成 Charlie 和 Miss Kite，但 Jog 总是热心地帮大家拿包、停车、过马路。",
      storyPoints: [
        "Jog is an alien. He visits Skiptown.",
        "People think he is Charlie or Miss Kite.",
        "Jog says: 'Shall I help you?'",
        "He carries bags and finds parking places.",
        "Everyone says thank you! 👽"
      ],
      keywords: ["alien", "help", "carry", "car park", "thank you", "onions"],
      sentenceStarters: ["This is Jog. He is...", "People say: 'Shall I...?'", "In the end, Jog..."],
      challenge: "加一句地点：The car park is opposite the cinema."
    },
    checkin: [
      "Round 1 (Shall I…?)：写下2个句子",
      "Round 2 (地点介词)：写下2个句子",
      "Round 3 (go to…to…)：写下2个句子",
      "Round 4 (对话)：角色A + 角色B"
    ]
  },
  {
    id: 3,
    unit: "Story 3",
    title: "My Friend Meg",
    emoji: "👧",
    theme: "can/can't + 比较级 (faster/better) + 频率副词 (always/sometimes)",
    intro: "👧 Meg 是我最好的朋友。她总是很开心、很有趣，但是她总是丢东西！",
    corePatterns: [
      { pattern: "can / can't + 动词", example: "Meg can do long sums." },
      { pattern: "比较级 than", example: "Meg is faster than me." },
      { pattern: "always / sometimes / every day", example: "Meg always loses her things!" }
    ],
    rounds: [
      {
        title: "Round 1：can / can't（能力）",
        difficulty: 1,
        rule: "用 can 或 can't 描述 Meg 和自己的能力。",
        cards: [
          "词卡 A（谁）：Meg / I / My friend / My best friend",
          "词卡 B（能力）：do long sums / ride a bike fast / spell long words / find things / swim / sing"
        ],
        answers: [
          "Meg can do long sums very fast. 🧮",
          "I can ride a bike fast, but I can't do long sums. 🚲",
          "My best friend can spell long words. ✍️",
          "Meg can't find her things. She always loses them! 🔍",
          "I can swim, but I can't sing very well. 🏊"
        ],
        tip: "can = 会，can't = 不会。说 But I can't... 表示转折，很实用！"
      },
      {
        title: "Round 2：比较级（-er / better / worse）",
        difficulty: 2,
        rule: "用比较级描述两个人或事物的对比。",
        cards: [
          "词卡 A（形容词）：fast / happy / funny / good / bad / tall",
          "词卡 B（比较对象）：me / my friend / my brother / my sister / my classmate"
        ],
        answers: [
          "Meg is faster than me at riding a bike. 🚲💨",
          "She is happier than me today. 😊",
          "My friend is funnier than my brother. 😂",
          "I am better at spelling than my classmate. ✍️",
          "My dad is worse at singing than me. 🎤",
          "Meg is taller than me now. 📏"
        ],
        tip: "比较级 + than：fast→faster，happy→happier，good→better，bad→worse。"
      },
      {
        title: "Round 3：always / sometimes / every day（频率副词）",
        difficulty: 3,
        rule: "用 always、sometimes 或 every day 描述日常习惯。",
        cards: [
          "词卡：phone my friend / lose things / do my homework / ride my bike / be happy / be angry"
        ],
        answers: [
          "Meg always loses her things! 🔍😅",
          "I sometimes phone my friend after school. 📞",
          "We ride our bikes every day. 🚲",
          "Meg is always happy and funny. 😊",
          "She sometimes gets angry when she can't find things. 😤",
          "I do my homework every day. 📝"
        ],
        tip: "always = 总是（100%），sometimes = 有时（50%），every day = 每天。"
      },
      {
        title: "Round 4：朋友对话 — 描述朋友",
        difficulty: 4,
        rule: "和好朋友对话，用 can、比较级和 always 来描述对方。",
        cards: [
          "场景A：夸朋友跑得快 🏃",
          "场景B：朋友又丢了东西 🔍",
          "场景C：朋友今天不开心 😢"
        ],
        answers: [
          "场景A：你: You can run very fast! You are faster than me! 🏃💨 / 朋友: Thank you! But you are better at drawing! 🎨 / 你: You are always funny. I love playing with you! 😊",
          "场景B：朋友: I can't find my pen! Can you help me? 🖊️ / 你: You always lose things! But I can find it. 🔍 / 朋友: You are better at finding things than me! 😄",
          "场景C：你: You look sad today. Are you OK? 😢 / 朋友: I'm not very happy. I can't do this maths problem. / 你: Don't worry! You are good at maths! I can help you. 💪"
        ],
        tip: "夸朋友用 You are + 比较级 + than me，朋友会超开心！"
      }
    ],
    retell: {
      summary: "Meg 是我最好的朋友。她会做长算式、拼长单词、骑快车，但她总是丢东西！一天她打电话来说找不到铅笔了——我让她看看床底下，果然找到了！",
      storyPoints: [
        "Meg is my best friend.",
        "She can do long sums and ride fast.",
        "But she always loses her things!",
        "One day she can't find her pencils.",
        "I say: 'Look under your bed!' 🔍"
      ],
      keywords: ["best friend", "can", "lose", "pencils", "under the bed", "always"],
      sentenceStarters: ["Meg is my best friend.", "She can... but she can't...", "One day she phones me."],
      challenge: "用比较级加一句：Meg is funnier than me."
    },
    checkin: [
      "Round 1 (can/can't)：写下2个句子",
      "Round 2 (比较级)：写下2个句子",
      "Round 3 (频率副词)：写下2个句子",
      "Round 4 (对话)：角色A + 角色B"
    ]
  },
  {
    id: 4,
    unit: "Story 4",
    title: "High Five!",
    emoji: "✋",
    theme: "现在进行时 (am/is/are + V-ing) + 地点介词 (above/below) + There is/are",
    intro: "✋ 来击掌！Tom 和 Zoe 在 Treetop Park 参加运动周末，发现原来自己比想象中更厉害！",
    corePatterns: [
      { pattern: "am/is/are + V-ing", example: "Tom is playing baseball." },
      { pattern: "above / below / on / in", example: "The bedroom is above the kitchen." },
      { pattern: "There is / There are", example: "There is a big window." }
    ],
    rounds: [
      {
        title: "Round 1：地点介词（above / below / in / on）",
        difficulty: 1,
        rule: "用 above、below、in 或 on 描述物品或房间的位置。",
        cards: [
          "词卡（房间/物品对）：bedroom-kitchen / bathroom-living room / basement-garden / lamp-desk / cat-sofa"
        ],
        answers: [
          "The bedroom is above the kitchen. 🛏️ 🍳",
          "The bathroom is above the living room. 🛁 🛋️",
          "The basement is below the house. 🏠 ⬇️",
          "The lamp is on the desk. 💡 📚",
          "The cat is on the sofa. 🐱 🛋️",
          "There is a TV in the living room. 📺"
        ],
        tip: "above = 在上方（不接触），on = 在……上面（接触），below = 在下方。"
      },
      {
        title: "Round 2：现在进行时（正在做什么）",
        difficulty: 2,
        rule: "用 am/is/are + V-ing 描述每个人正在做的事。",
        cards: [
          "词卡 A（人物）：Mum / Dad / Grandma / I / The cat / My sister",
          "词卡 B（动作）：cook dinner / read a book / watch TV / play / sleep / do homework / sing"
        ],
        answers: [
          "Mum is cooking dinner in the kitchen. 🍳",
          "Dad is reading a book in the living room. 📖",
          "Grandma is watching TV upstairs. 📺",
          "I am doing my homework in my bedroom. 📝",
          "The cat is sleeping on the sofa. 🐱💤",
          "My sister is singing in the bathroom. 🎤"
        ],
        tip: "正在做 = be动词 + 动词-ing。I am / He is / They are，别忘加 -ing！"
      },
      {
        title: "Round 3：There is / There are",
        difficulty: 3,
        rule: "用 There is 或 There are 描述房间里有什么。",
        cards: [
          "词卡（房间物品）：a big window / three chairs / a lamp / two pictures / a carpet / five books"
        ],
        answers: [
          "There is a big window in the living room. 🪟",
          "There are three chairs in the kitchen. 🪑🪑🪑",
          "There is a lamp on my desk. 💡",
          "There are two pictures on the wall. 🖼️🖼️",
          "There is a carpet on the floor. 🟫",
          "There are five books in my bag. 📚"
        ],
        tip: "单数用 There is，复数用 There are。数数看房间里有什么！"
      },
      {
        title: "Round 4：运动周末 — What are you doing?",
        difficulty: 4,
        rule: "在 Treetop Park 和伙伴对话，用现在进行时描述正在做的运动。",
        cards: [
          "场景A：Zoe 在打棒球 🏏",
          "场景B：Tom 在学溜冰 ⛸️",
          "场景C：休息时聊大家正在做什么 ☀️"
        ],
        answers: [
          "场景A：你: What are you doing, Zoe? 🏏 / Zoe: I am playing baseball! Watch me! / 你: Great! You are good at it! / Zoe: And I CAN catch the ball now! ✋",
          "场景B：你: What is Tom doing? ⛸️ / Zoe: He is learning to skate. / 你: Is he good? / Zoe: He is falling! But he is laughing! 😄",
          "场景C：你: Look! Everyone is playing! ☀️ / 伙伴: Yes! Tom is playing baseball and Zoe is dancing. / 你: And we are having fun! Let's high five! ✋"
        ],
        tip: "What are you doing? = 你在做什么？答：I am + V-ing。运动周末玩得开心！"
      }
    ],
    retell: {
      summary: "Tom 和 Zoe 听到广播里 Treetop Park 运动周末的消息。Zoe 一直觉得自己棒球很差，但这次她跑过去接住了球！'I AM good at baseball!' 她发现了自己的厉害之处。",
      storyPoints: [
        "Tom and Zoe go to Treetop Park.",
        "Zoe says she can't catch balls.",
        "She runs and catches the ball!",
        "Everyone shouts: 'Well done, Zoe!'",
        "Zoe thinks: 'I AM good at baseball!' ✋"
      ],
      keywords: ["baseball", "catch", "sports", "park", "well done", "high five"],
      sentenceStarters: ["One day Tom and Zoe...", "At first, Zoe can't...", "But then she..."],
      challenge: "加一句现在进行时：Everyone is playing in the park."
    },
    checkin: [
      "Round 1 (地点介词)：写下2个句子",
      "Round 2 (现在进行时)：写下2个句子",
      "Round 3 (There is/are)：写下2个句子",
      "Round 4 (对话)：角色A + 角色B"
    ]
  },
  {
    id: 5,
    unit: "Story 5",
    title: "The Monster Under My Bed",
    emoji: "👾",
    theme: "must/mustn't + 城市地点 + 地点介词 (near/opposite/next to)",
    intro: "👾 床底下有怪物吗？这个故事关于城市里的各种地方——超市、电影院、医院、游乐场！",
    corePatterns: [
      { pattern: "must / mustn't + 动词", example: "You must be quiet in the library." },
      { pattern: "There is/are + 地点", example: "There is a cinema in my town." },
      { pattern: "地点介词", example: "near / opposite / next to" }
    ],
    rounds: [
      {
        title: "Round 1：must / mustn't（必须和禁止）",
        difficulty: 1,
        rule: "用 must 或 mustn't 说说在不同的地方应该做什么、不应该做什么。",
        cards: [
          "词卡（地点）：library / hospital / cinema / school / zoo / supermarket"
        ],
        answers: [
          "You must be quiet in the library. 🤫 📚",
          "You mustn't run in the hospital. 🏥 🚫",
          "You mustn't talk in the cinema. 🎬 🤫",
          "You must listen to the teacher at school. 🏫👩‍🏫",
          "You mustn't feed the animals at the zoo. 🦁🚫",
          "You must pay for food in the supermarket. 🛒💰"
        ],
        tip: "must = 必须做，mustn't = 禁止做。规则用这两兄弟最合适！"
      },
      {
        title: "Round 2：城市地点 + there is/are",
        difficulty: 2,
        rule: "用 There is / There are 描述你的城市里有什么地方。",
        cards: [
          "词卡（地点）：a big cinema / two supermarkets / a hospital / three schools / a funfair / a swimming pool"
        ],
        answers: [
          "There is a big cinema in my town. 🎬",
          "There are two supermarkets near my house. 🛒🛒",
          "There is a hospital opposite the school. 🏥🏫",
          "There are three schools in my city. 🏫🏫🏫",
          "There is a funfair next to the park. 🎡🌳",
          "There is a swimming pool near the sports centre. 🏊"
        ],
        tip: "介绍城市：There is + 单数，There are + 复数。城市地图一目了然！"
      },
      {
        title: "Round 3：地点介词（near / opposite / next to）",
        difficulty: 3,
        rule: "用 near、opposite 或 next to 描述两个地点的位置。",
        cards: [
          "词卡（地点对）：my house-school / cinema-supermarket / hospital-park / library-swimming pool / funfair-bus station"
        ],
        answers: [
          "My house is near the school. 🏠🏫",
          "The cinema is opposite the supermarket. 🎬🛒",
          "The hospital is next to the park. 🏥🌳",
          "The library is near the swimming pool. 📚🏊",
          "The funfair is opposite the bus station. 🎡🚌"
        ],
        tip: "near = 附近，opposite = 对面，next to = 紧挨着。指路三件套！"
      },
      {
        title: "Round 4：城市对话 — 问路和指路",
        difficulty: 4,
        rule: "扮演问路的人和指路的人，用地点介词描述位置。",
        cards: [
          "场景A：找电影院 🎬",
          "场景B：找医院 🏥",
          "场景C：找游乐场 🎡"
        ],
        answers: [
          "场景A：你: Excuse me, where is the cinema? 🎬 / 路人: It's opposite the supermarket. It's near the park. / 你: Thank you! Is there a restaurant near the cinema? / 路人: Yes, there is. It's next to the cinema! 🍕",
          "场景B：你: Excuse me, is there a hospital near here? 🏥 / 路人: Yes. Go straight. The hospital is opposite the library. / 你: Can I walk there? / 路人: Yes, it's near. About five minutes. 🚶‍♂️",
          "场景C：小孩: Is there a funfair in this town? 🎡 / 你: Yes, there is! It's next to the bus station. / 小孩: Great! Can I go there to have fun? / 你: Yes, but you must be careful! 😊"
        ],
        tip: "问路用 Excuse me, where is...? 指路用 It's opposite/next to/near...。礼貌又清楚！"
      }
    ],
    retell: {
      summary: "一个孩子相信床底下有怪物。他早上跑到衣柜拿衣服、不敢在卧室做作业、睡觉前大声说'我不怕你！'然后数到 100。他说自己从没见过怪物，但知道它就在那里……",
      storyPoints: [
        "There is a monster under my bed!",
        "I run to get my clothes in the morning.",
        "I do my homework in the kitchen.",
        "At night I say: 'You aren't scary!'",
        "I count to 100 and go to sleep. 👾"
      ],
      keywords: ["monster", "bed", "cupboard", "scary", "count", "bedroom"],
      sentenceStarters: ["There is a monster...", "In the morning, I...", "At night, I..."],
      challenge: "加一条规则：You mustn't be scared! It's only a story."
    },
    checkin: [
      "Round 1 (must/mustn't)：写下2个句子",
      "Round 2 (There is/are)：写下2个句子",
      "Round 3 (地点介词)：写下2个句子",
      "Round 4 (对话)：角色A + 角色B"
    ]
  },
  {
    id: 6,
    unit: "Story 6",
    title: "What a Great Grandmother",
    emoji: "👵",
    theme: "一般现在时第三人称 + 频率副词 (always/never) + What time...?",
    intro: "👵 奶奶太棒了！她每天都做很多事情——早起、做操、种花、烤饼干……",
    corePatterns: [
      { pattern: "第三人称单数 + -s/-es", example: "Grandma gets up at six." },
      { pattern: "频率副词", example: "always / sometimes / never" },
      { pattern: "What time + do/does?", example: "What time does Grandma get up?" }
    ],
    rounds: [
      {
        title: "Round 1：一般现在时（第三人称单数）",
        difficulty: 1,
        rule: "用一般现在时描述奶奶（第三人称）每天做的事情。记得加 -s / -es！",
        cards: [
          "词卡：get up at 6 / make breakfast / water the flowers / bake cookies / read the newspaper / take a walk"
        ],
        answers: [
          "Grandma gets up at six o'clock every day. ⏰",
          "She makes breakfast for the family. 🍳",
          "She waters the flowers in the garden. 🌸",
          "She bakes cookies on Sunday. 🍪",
          "She reads the newspaper after breakfast. 📰",
          "She takes a walk in the park. 🚶‍♀️"
        ],
        tip: "He/She 做主语时动词要加 -s/-es：get→gets，make→makes，go→goes。"
      },
      {
        title: "Round 2：频率副词（always / sometimes / never）",
        difficulty: 2,
        rule: "用 always、sometimes 或 never 加上日常动作造句。",
        cards: [
          "词卡（动作）：sing in the morning / visit Grandma / do homework / eat vegetables / watch TV / go to bed late"
        ],
        answers: [
          "Grandma always sings in the morning. 🎵",
          "I sometimes visit Grandma at the weekend. 👵❤️",
          "I never go to bed late on school days. 🛌",
          "Grandma sometimes bakes cookies for me. 🍪",
          "I always do my homework after school. 📝",
          "Grandma never eats fast food. She loves healthy food! 🥗"
        ],
        tip: "频率副词放动词前面：always 100% > sometimes 50% > never 0%。"
      },
      {
        title: "Round 3：What time…?（时间问句）",
        difficulty: 3,
        rule: "用 What time do you...? 或 What time does he/she...? 提问并回答。",
        cards: [
          "词卡（动作）：get up / have breakfast / go to school / come home / do homework / go to bed"
        ],
        answers: [
          "What time do you get up? I get up at seven o'clock. ⏰",
          "What time does Grandma get up? She gets up at six. 👵",
          "What time do you have breakfast? I have breakfast at seven thirty. 🥣",
          "What time do you go to school? I go to school at eight. 🏫",
          "What time does Grandma bake cookies? She bakes cookies in the afternoon. 🍪",
          "What time do you go to bed? I go to bed at nine thirty. 🛌"
        ],
        tip: "问别人 What time do you...? 问奶奶 What time does she...?（动词变原形）"
      },
      {
        title: "Round 4：家庭对话 — 奶奶的一天",
        difficulty: 4,
        rule: "用一般现在时和频率副词聊奶奶的一天。",
        cards: [
          "场景A：奶奶早上做什么 ☀️",
          "场景B：奶奶下午做什么 🌤️",
          "场景C：奶奶晚上做什么 🌙"
        ],
        answers: [
          "场景A：你: Grandma, what time do you get up? 👵 / 奶奶: I get up at six o'clock. I always make breakfast for your grandpa. / 你: That's early! And what do you do after breakfast? / 奶奶: I read the newspaper and then water the flowers. 📰🌸",
          "场景B：你: What do you do in the afternoon, Grandma? / 奶奶: I sometimes bake cookies. You love my cookies, don't you? 🍪 / 你: Yes! You always bake the best cookies! Can I help? / 奶奶: Of course! You can help me mix the flour. 👩‍🍳",
          "场景C：你: What does Grandma do in the evening? 🌙 / 妈妈: She always watches TV with your grandpa. And she never goes to bed late. / 你: She is a great grandmother! 👵❤️"
        ],
        tip: "把奶奶一天的时间表串起来说，就是一个完整的小故事！"
      }
    ],
    retell: {
      summary: "Peter 的奶奶 71 岁，每天在同一时间做同样的事：7 点起床、8 点穿衣服、9 点吃早餐、10 点听音乐。一天 Peter 说：'我们来过疯狂的一天吧！'奶奶一开始不习惯，但最后发现改变也很有趣。",
      storyPoints: [
        "Grandma is 71 years old.",
        "She always does the same things at the same time.",
        "She gets up at seven every day.",
        "Peter says: 'Let's have a crazy day!'",
        "They try new things and laugh! 👵"
      ],
      keywords: ["get up", "always", "breakfast", "crazy day", "cookies", "grandmother"],
      sentenceStarters: ["My grandmother is...", "She always...", "One day, I say: 'Let's...'"],
      challenge: "加一句 What time...?：What time does Grandma get up?"
    },
    checkin: [
      "Round 1 (一般现在时)：写下2个句子",
      "Round 2 (频率副词)：写下2个句子",
      "Round 3 (What time…?)：写下2个句子",
      "Round 4 (对话)：角色A + 角色B"
    ]
  },
  {
    id: 7,
    unit: "Story 7",
    title: "The Old Man and the Jungle",
    emoji: "🌴",
    theme: "must/mustn't + can/can't + have got + 生病",
    intro: "🌴 老人在丛林里冒险。丛林里有很多动物，也有很多规则——必须做什么？不能做什么？",
    corePatterns: [
      { pattern: "must / mustn't + 动词", example: "You must stay with your guide." },
      { pattern: "can / can't + 动词", example: "Parrots can talk." },
      { pattern: "have/has got + 病症", example: "The old man has got a headache." }
    ],
    rounds: [
      {
        title: "Round 1：must / mustn't（丛林规则）",
        difficulty: 1,
        rule: "用 must 或 mustn't 说说在丛林里应该做什么、禁止做什么。",
        cards: [
          "词卡：stay with your guide / drink clean water / touch dangerous animals / shout loudly / follow the path / eat unknown fruits"
        ],
        answers: [
          "You must stay with your guide in the jungle. 🧑‍🤝‍🧑",
          "You must drink clean water. 💧",
          "You mustn't touch dangerous animals. 🐍🚫",
          "You mustn't shout loudly. It may scare the animals. 🤫",
          "You must follow the path. 🚶",
          "You mustn't eat unknown fruits. 🍇🚫"
        ],
        tip: "丛林生存法则：must 保命，mustn't 保命+保护动物！"
      },
      {
        title: "Round 2：can / can't（动物能力）",
        difficulty: 2,
        rule: "用 can 或 can't 描述丛林里不同动物的能力。",
        cards: [
          "词卡（动物+能力）：parrots-talk / snakes-climb trees / monkeys-swim / tigers-fly / elephants-carry heavy things / bats-see in the dark"
        ],
        answers: [
          "Parrots can talk. Some of them can say \"Hello!\" 🦜",
          "Snakes can climb trees. 🐍🌳",
          "Monkeys can swim very well. 🐒🏊",
          "Tigers can't fly. They are big cats! 🐅🚫✈️",
          "Elephants can carry heavy things with their trunks. 🐘",
          "Bats can see in the dark. 🦇🌙"
        ],
        tip: "动物能力卡：can = 会，can't = 不会。老虎会游泳但不会飞！"
      },
      {
        title: "Round 3：have got + 生病（健康表达）",
        difficulty: 3,
        rule: "用 have got 或 has got 描述身体不舒服。",
        cards: [
          "词卡（病症）：a headache / a stomach-ache / a cold / a toothache / a cough / a temperature / a backache"
        ],
        answers: [
          "The old man has got a headache. 🤕",
          "I have got a cold. I feel very tired. 🤧",
          "She has got a stomach-ache from eating too much. 🤢",
          "He has got a toothache. He must see a dentist. 🦷",
          "The boy has got a cough. He must drink warm water. 🤒",
          "I have got a temperature. I must stay in bed. 🌡️🛌"
        ],
        tip: "I/You 用 have got，He/She 用 has got。生病要说 You must see a doctor!"
      },
      {
        title: "Round 4：丛林冒险对话",
        difficulty: 4,
        rule: "扮演丛林向导和探险者，用 must/mustn't 和 can/can't 对话。",
        cards: [
          "场景A：向导告诉探险者丛林规则 🌴",
          "场景B：发现一只鹦鹉 🦜",
          "场景C：有人不舒服 🤒"
        ],
        answers: [
          "场景A：向导: Welcome to the jungle! You must follow me all the time. 🧑‍🤝‍🧑 / 探险者: OK. What mustn't I do? / 向导: You mustn't touch the plants. Some of them are dangerous. 🌿🚫 / 探险者: Can I take photos? / 向导: Yes, you can! But you mustn't use the flash with animals. 📸",
          "场景B：探险者: Look! A parrot! It can talk! 🦜 / 向导: Yes, parrots are very clever. They can learn many words. / 探险者: Can I give it some food? / 向导: No, you mustn't. It's not good for wild animals. 🚫",
          "场景C：探险者: I have got a headache. I feel very hot. 🤒 / 向导: You must drink more water. And we must rest under that tree. / 探险者: I think I have got a temperature. / 向导: Then we must go back to the village. You must see a doctor. 🏥"
        ],
        tip: "丛林对话三件套：must（规则）、can（能力）、have got（生病）。探险家养成记！"
      }
    ],
    retell: {
      summary: "老人和孩子住在丛林里。他们喜欢听鹦鹉唱歌、喝瀑布水、和鳄鱼聊天。一天丛林里没有太阳，老人很难过。孩子问他是不是生病了，但都不是。最后他们坐在树上，等着鹦鹉回来。",
      storyPoints: [
        "The old man and the child live in the jungle.",
        "They love the parrots and the waterfall.",
        "One day there is no sun.",
        "The old man is sad. He doesn't move.",
        "The child asks: 'Have you got a stomach-ache?' 🌴"
      ],
      keywords: ["jungle", "old man", "parrots", "waterfall", "sun", "sad"],
      sentenceStarters: ["In the jungle, they like...", "But one day...", "The child says: 'Have you got...'"],
      challenge: "加一条规则：You mustn't eat unknown fruits!"
    },
    checkin: [
      "Round 1 (must/mustn't)：写下2个句子",
      "Round 2 (can/can't)：写下2个句子",
      "Round 3 (have got+生病)：写下2个句子",
      "Round 4 (对话)：角色A + 角色B"
    ]
  },
  {
    id: 8,
    unit: "Story 8",
    title: "Henry's Holiday",
    emoji: "🌤️",
    theme: "was/were + 天气词汇 + 比较级/最高级",
    intro: "🌤️ Henry 去度假了！天气怎么样？他做了什么？用过去时来讲故事吧！",
    corePatterns: [
      { pattern: "was / were（过去时）", example: "Yesterday was sunny." },
      { pattern: "天气词汇", example: "sunny / rainy / windy / cloudy" },
      { pattern: "比较级/最高级", example: "better than / the best / the hottest" }
    ],
    rounds: [
      {
        title: "Round 1：was / were（过去时）",
        difficulty: 1,
        rule: "用 was、were、wasn't 或 weren't 描述过去的天气和感受。",
        cards: [
          "词卡（过去的状态）：sunny / cloudy / rainy / hot / cold / windy / happy / tired"
        ],
        answers: [
          "Yesterday was a sunny day. ☀️",
          "The clouds were grey in the morning. ☁️",
          "It was very hot at the beach. 🏖️🔥",
          "The children were happy on holiday. 😊",
          "It wasn't rainy. We played outside all day. 🌤️",
          "I was tired in the evening because I swam a lot. 🏊"
        ],
        tip: "过去的事用 was（单数）/ were（复数）。It was... / They were... / It wasn't... "
      },
      {
        title: "Round 2：天气词汇",
        difficulty: 2,
        rule: "用天气词汇描述不同的天气情况。",
        cards: [
          "词卡：rainy / snowy / windy / cloudy / sunny / foggy / stormy"
        ],
        answers: [
          "It was rainy yesterday. We stayed at home. 🌧️",
          "It was snowy in the mountains. We made a snowman. ☃️",
          "It was very windy at the beach. My hat flew away! 💨🎩",
          "It was cloudy in the morning, but sunny in the afternoon. ⛅",
          "It was foggy. I couldn't see the road. 🌫️",
          "It was stormy at night. The thunder was loud! ⛈️"
        ],
        tip: "天气句型：It was + 天气词。今天说 It is，昨天说 It was。"
      },
      {
        title: "Round 3：比较级 + 最高级（假日版）",
        difficulty: 3,
        rule: "用比较级 -er 或 more 以及最高级 the -est 或 the most 造句。",
        cards: [
          "词卡（形容词）：good / bad / hot / cold / happy / sunny / interesting"
        ],
        answers: [
          "This holiday was better than the last one. 👍",
          "Yesterday was the hottest day of the year. 🔥🌡️",
          "The beach was more beautiful than the park. 🏖️",
          "It was the best holiday I ever had! 🎉",
          "The weather today is worse than yesterday. 😕",
          "Swimming in the sea is more interesting than swimming in a pool. 🏊🌊"
        ],
        tip: "比较级 than（hotter than），最高级 the + -est（the hottest）。good→better→the best！"
      },
      {
        title: "Round 4：假日对话 — 聊假期",
        difficulty: 4,
        rule: "和同学聊假期，用 was/were 和天气词汇。",
        cards: [
          "场景A：海边假期 🏖️",
          "场景B：雪山假期 ⛰️",
          "场景C：雨天假期 🏠"
        ],
        answers: [
          "场景A：你: How was your holiday? / 朋友: It was amazing! The weather was sunny every day. / 你: Was the water warm? / 朋友: Yes, it was! It was the best beach holiday ever! 🌊😊",
          "场景B：你: What was the weather like in the mountains? / 朋友: It was cold and snowy. But it was beautiful! / 你: Did you make a snowman? / 朋友: Yes! It was the biggest snowman in the village! ☃️",
          "场景C：你: How was your holiday? / 朋友: It was rainy every day. We stayed at home. / 你: That sounds boring! / 朋友: It wasn't boring! We played board games and watched films. It was fun! 🎲🎬"
        ],
        tip: "How was your holiday? 是聊假期的开场白。答：It was + 天气/感受 + 做了什么。"
      }
    ],
    retell: {
      summary: "Henry 喜欢待在家里，不喜欢去度假——不想沙子在袜子里、不想走长长的路、不想听爸爸打呼噜！但这次他去海边露营，下起了雨，妈妈弄湿了毯子。Henry 帮妈妈捡起毯子……也许他没那么讨厌假期了？",
      storyPoints: [
        "Henry likes being at home.",
        "He doesn't want sand in his socks!",
        "Last Saturday he goes on holiday.",
        "It is cold and rainy.",
        "He helps his mum with the blankets. 🌤️"
      ],
      keywords: ["holiday", "socks", "rain", "tent", "beach", "home"],
      sentenceStarters: ["Henry likes...", "But last Saturday...", "The weather was..."],
      challenge: "加一句比较级：The beach was better than the park."
    },
    checkin: [
      "Round 1 (was/were)：写下2个句子",
      "Round 2 (天气词汇)：写下2个句子",
      "Round 3 (比较级/最高级)：写下2个句子",
      "Round 4 (对话)：角色A + 角色B"
    ]
  }
];
