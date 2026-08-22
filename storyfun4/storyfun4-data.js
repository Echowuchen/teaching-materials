// Storyfun 4 (for Movers) 造句练习 — 结构化数据
// 内容来源：Storyfun 4 Teacher's Book (Saxby Karen & Emily Hird, 2017) 语法点 + 故事正文
// 使用方式：<script src="storyfun4-data.js"></script> 后读取 window.STORYFUN4

window.STORYFUN4 = [
  {
    id: 1,
    unit: "Story 1",
    title: "Jane's Clever Idea",
    emoji: "💡",
    theme: "Would you like...? + I'd like/love + I like...more than... + 不规则过去式",
    intro: "💡 Jane 和朋友们在湖边野餐，她用一个聪明的办法——和大家交换东西，让每个人都开心！",
    corePatterns: [
      { pattern: "Would you like + 名词?", example: "Would you like a sandwich?" },
      { pattern: "I'd like / I'd love + 名词", example: "I'd love some juice, please." },
      { pattern: "I like ... more than ...", example: "I like apples more than bananas." },
      { pattern: "不规则过去式 (swap→swapped, give→gave)", example: "Jane swapped her hat for a scarf." }
    ],
    rounds: [
      {
        title: "Round 1：Would you like…？（礼貌询问）",
        difficulty: 1,
        rule: "用 Would you like...? 礼貌地问对方想要什么，再用 I'd like/love 回答。",
        cards: [
          "词卡 A（食物/物品）：a sandwich / some juice / a hat / a scarf / some fruit",
          "词卡 B（回应）：Yes, please / No, thank you"
        ],
        answers: [
          "Would you like a sandwich? Yes, please! 🥪",
          "Would you like some juice? I'd love some juice. 🧃",
          "Would you like a hat? No, thank you. 🧢",
          "Would you like a scarf? I'd like a scarf, please. 🧣",
          "Would you like some fruit? Yes, I'd love some! 🍎"
        ],
        tip: "Would you like...? 比 Do you want...? 更礼貌。回答用 I'd like = I would like，读成 I'd。"
      },
      {
        title: "Round 2：I like … more than …（比较喜好）",
        difficulty: 2,
        rule: "用 I like A more than B 说出你更喜欢哪一个。",
        cards: [
          "词卡（成对物品）：apples-bananas / tea-juice / dogs-cats / swimming-running / books-toys"
        ],
        answers: [
          "I like apples more than bananas. 🍎🍌",
          "I like tea more than juice. 🍵",
          "I like dogs more than cats. 🐶🐱",
          "I like swimming more than running. 🏊",
          "I like books more than toys. 📚"
        ],
        tip: "more than 放在两个东西中间：I like A more than B。比 like A better 更常用。"
      },
      {
        title: "Round 3：不规则过去式（swap / give / bring）",
        difficulty: 3,
        rule: "用不规则动词的过去式说昨天发生的事。",
        cards: [
          "词卡（动词）：swap→swapped / give→gave / bring→brought / eat→ate / drink→drank / have→had"
        ],
        answers: [
          "Jane swapped her hat for a scarf. 🧢🧣",
          "I gave my friend a present. 🎁",
          "We brought sandwiches to the lake. 🥪",
          "They ate all the fruit. 🍎",
          "She drank some juice. 🧃",
          "We had a lovely picnic. 🧺"
        ],
        tip: "这些动词的过去式没有规律，要一个个记：swap-swapped, give-gave, bring-brought, eat-ate, drink-drank, have-had。"
      },
      {
        title: "Round 4：湖边野餐对话 — Would you like + 过去式",
        difficulty: 4,
        rule: "扮演 Jane 和朋友在湖边野餐，用 Would you like...? 分享，用过去式说说刚才做了什么。",
        cards: [
          "场景A：分享三明治 🥪",
          "场景B：交换帽子 🧢",
          "场景C：回忆野餐 🧺"
        ],
        answers: [
          "场景A：Jane: Would you like a sandwich? 🥪 / Friend: Yes, please! I'd love one! / Jane: Here you are!",
          "场景B：Jane: I like your scarf more than my hat. Would you like to swap? 🧣 / Friend: Great idea! I swapped it with you!",
          "场景C：Jane: We had a lovely picnic. I brought juice and sandwiches. 🧃 / Friend: I ate two sandwiches! They were great!"
        ],
        tip: "把 Would you like...? 和过去式串起来：先礼貌分享，再回忆刚做过的事，就是一个小故事！"
      }
    ],
    retell: {
      summary: "Jane 和朋友们在湖边野餐。Jane 有个聪明的办法：她喜欢朋友的围巾，就用帽子和他交换。大家互相交换食物和物品，每个人都得到了自己喜欢的东西。",
      storyPoints: [
        "Jane and her friends have a picnic by the lake.",
        "Jane says: 'Would you like to swap?'",
        "She swaps her hat for a scarf.",
        "Everyone shares sandwiches and juice.",
        "Jane's clever idea makes everyone happy. 💡"
      ],
      keywords: ["lake", "picnic", "swap", "sandwich", "scarf", "clever"],
      sentenceStarters: ["First, Jane...", "Then she says: 'Would you like...?'", "In the end, everyone..."],
      challenge: "用过去式加一句：We had a lovely picnic by the lake."
    },
    checkin: [
      "Round 1 (Would you like…?)：写下2个句子",
      "Round 2 (I like…more than…)：写下2个句子",
      "Round 3 (不规则过去式)：写下2个句子",
      "Round 4 (湖边对话)：角色A + 角色B"
    ]
  },
  {
    id: 2,
    unit: "Story 2",
    title: "The Perfect Present",
    emoji: "🎁",
    theme: "关系从句 that + 比较级 (nicer/more beautiful)",
    intro: "🎁 一个男孩想送给妈妈一份完美的生日礼物，他发现最好的礼物其实就在身边——美丽的风景！",
    corePatterns: [
      { pattern: "关系从句 that", example: "This is the present that I made." },
      { pattern: "比较级 -er", example: "This flower is nicer than that one." },
      { pattern: "比较级 more + 形容词", example: "The lake is more beautiful than the town." },
      { pattern: "It's so beautiful here!", example: "It's so beautiful here!" }
    ],
    rounds: [
      {
        title: "Round 1：关系从句 that",
        difficulty: 1,
        rule: "用 that 把两个句子连成一句，描述一个人或东西。",
        cards: [
          "词卡（组合）：the present-that I made / the flower-that I picked / the picture-that I drew / the song-that I like"
        ],
        answers: [
          "This is the present that I made for Mum. 🎁",
          "This is the flower that I picked in the park. 🌸",
          "This is the picture that I drew. 🖼️",
          "This is the song that I like. 🎵",
          "This is the cake that I bought. 🎂"
        ],
        tip: "that 就像胶水，把两个句子粘在一起：This is the present + I made it → This is the present that I made."
      },
      {
        title: "Round 2：比较级 -er（nicer / bigger）",
        difficulty: 2,
        rule: "用形容词加 -er 比较两个东西。",
        cards: [
          "词卡（比较）：flower-nicer / house-bigger / park-smaller / day-hotter / boy-taller"
        ],
        answers: [
          "This flower is nicer than that one. 🌸",
          "Our house is bigger than your house. 🏠",
          "This park is smaller than the zoo. 🌳",
          "Today is hotter than yesterday. ☀️",
          "The boy is taller than his sister. 🧍"
        ],
        tip: "短的形容词直接加 -er：nice→nicer, big→bigger（双写 g）, hot→hotter（双写 t）。别忘了 than！"
      },
      {
        title: "Round 3：more + 形容词（more beautiful）",
        difficulty: 3,
        rule: "长的形容词用 more 来比较。",
        cards: [
          "词卡（比较）：lake-more beautiful / present-more expensive / garden-more colourful / story-more interesting / sea-more amazing"
        ],
        answers: [
          "The lake is more beautiful than the town. 🏞️",
          "This present is more expensive than that one. 🎁",
          "The garden is more colourful in spring. 🌷",
          "This story is more interesting than the last one. 📖",
          "The sea is more amazing than the river. 🌊"
        ],
        tip: "长形容词（三个音节以上）用 more：beautiful→more beautiful, interesting→more interesting。不可以说 beautifuler！"
      },
      {
        title: "Round 4：选礼物对话 — that + 比较级",
        difficulty: 4,
        rule: "扮演男孩和妈妈，用 that 描述礼物，用比较级说哪个更好。",
        cards: [
          "场景A：选花 🌸",
          "场景B：选画 🖼️",
          "场景C：看风景 🏞️"
        ],
        answers: [
          "场景A：Boy: Mum, this is the flower that I picked. 🌸 / Mum: It's nicer than the flowers in the shop!",
          "场景B：Boy: This is the picture that I drew for you. 🖼️ / Mum: It's more beautiful than any picture!",
          "场景C：Boy: Look at the lake! It's so beautiful here! 🏞️ / Mum: The best present is being here with you!"
        ],
        tip: "用 that 把礼物说清楚，用比较级夸一夸，妈妈一定很开心！"
      }
    ],
    retell: {
      summary: "一个男孩想给妈妈买完美的生日礼物。他去商店看，但都觉得不够好。最后他带妈妈来到湖边，看到美丽的风景——原来陪在妈妈身边、分享美丽的大自然，就是最好的礼物。",
      storyPoints: [
        "The boy wants to buy the perfect present.",
        "He looks at flowers and pictures in the shop.",
        "Nothing is nice enough for Mum.",
        "He takes Mum to the beautiful lake.",
        "Being together is the best present. 🎁"
      ],
      keywords: ["present", "flower", "picture", "beautiful", "lake", "together"],
      sentenceStarters: ["The boy wants to...", "He sees...", "In the end, the best present is..."],
      challenge: "用关系从句加一句：The present that I love best is being with you."
    },
    checkin: [
      "Round 1 (that 从句)：写下2个句子",
      "Round 2 (-er 比较级)：写下2个句子",
      "Round 3 (more 比较级)：写下2个句子",
      "Round 4 (选礼物对话)：角色A + 角色B"
    ]
  },
  {
    id: 3,
    unit: "Story 3",
    title: "Daisy's Tiger Dream",
    emoji: "🐯",
    theme: "can + could/couldn't + be good at",
    intro: "🐯 Daisy 梦见自己是一只老虎。在梦里她能做到平时做不到的事，醒来后她明白做一个好朋友才是最重要的！",
    corePatterns: [
      { pattern: "can + 动词原形", example: "Daisy can climb trees." },
      { pattern: "could（过去能）", example: "In her dream she could fly." },
      { pattern: "couldn't（过去不能）", example: "She couldn't swim before." },
      { pattern: "be good at + 名词/V-ing", example: "Daisy is good at making friends." }
    ],
    rounds: [
      {
        title: "Round 1：can（能力）",
        difficulty: 1,
        rule: "用 can 说出你会做什么。",
        cards: [
          "词卡（动作）：climb trees / swim / ride a bike / sing / draw / run fast"
        ],
        answers: [
          "I can climb trees. 🌳",
          "Daisy can swim very well. 🏊",
          "I can ride a bike. 🚲",
          "She can sing English songs. 🎵",
          "I can draw a tiger. 🐯",
          "He can run fast. 🏃"
        ],
        tip: "can + 动词原形，所有人称都用 can，第三人称不加 s：She can swim（不是 cans）。"
      },
      {
        title: "Round 2：could / couldn't（过去能/不能）",
        difficulty: 2,
        rule: "用 could 说过去能做到，couldn't 说过去做不到。",
        cards: [
          "词卡（过去的能力）：fly / talk to animals / be a tiger / swim / ride a bike"
        ],
        answers: [
          "In her dream, Daisy could fly. 🦋",
          "She could talk to animals. 🦜",
          "She couldn't swim before, but now she can. 🏊",
          "I couldn't ride a bike when I was four. 🚲",
          "In the dream she could be a tiger. 🐯"
        ],
        tip: "could 是 can 的过去式，couldn't = could not。说『以前不会、现在会』就用 couldn't... but now I can。"
      },
      {
        title: "Round 3：be good at（擅长）",
        difficulty: 3,
        rule: "用 be good at + 名词/V-ing 说某人擅长什么。",
        cards: [
          "词卡（擅长的事）：making friends / climbing / drawing / singing / helping people"
        ],
        answers: [
          "Daisy is good at making friends. 🤝",
          "I am good at climbing trees. 🌳",
          "She is good at drawing animals. 🎨",
          "He is good at singing. 🎤",
          "We are good at helping people. ❤️"
        ],
        tip: "be good at 后面的动词要加 -ing：be good at drawing（不是 draw）。"
      },
      {
        title: "Round 4：梦见老虎对话 — can + could",
        difficulty: 4,
        rule: "扮演 Daisy 和朋友聊她的梦，用 can 说现在，用 could 说梦里。",
        cards: [
          "场景A：梦见会飞 🦋",
          "场景B：梦见和动物说话 🦜",
          "场景C：醒来做朋友 🤝"
        ],
        answers: [
          "场景A：Friend: What did you dream? / Daisy: I was a tiger and I could fly! 🦋 / Friend: Wow! I can't fly, but I can run fast!",
          "场景B：Daisy: In my dream I could talk to animals! 🦜 / Friend: That's amazing! Can you talk to my cat now?",
          "场景C：Daisy: A tiger can be strong, but I am good at making friends. 🤝 / Friend: That's the best thing!"
        ],
        tip: "can 说现在、could 说过去或梦里，两两对比就能讲清 Daisy 的梦啦！"
      }
    ],
    retell: {
      summary: "Daisy 梦见自己变成一只老虎。在梦里她会飞、能和动物说话，能做到很多平时做不到的事。醒来后她发现，虽然不能真的变成老虎，但做一个会关心朋友的好朋友，比做老虎更棒。",
      storyPoints: [
        "Daisy dreams that she is a tiger.",
        "In the dream she can fly and talk to animals.",
        "She couldn't do these things before.",
        "She wakes up and feels happy.",
        "Daisy is good at making friends. 🐯"
      ],
      keywords: ["tiger", "dream", "fly", "could", "friend", "good at"],
      sentenceStarters: ["Daisy dreams that...", "In the dream, she can...", "When she wakes up, she..."],
      challenge: "用 couldn't 加一句：She couldn't fly before, but in her dream she could."
    },
    checkin: [
      "Round 1 (can)：写下2个句子",
      "Round 2 (could/couldn't)：写下2个句子",
      "Round 3 (be good at)：写下2个句子",
      "Round 4 (梦境对话)：角色A + 角色B"
    ]
  },
  {
    id: 4,
    unit: "Story 4",
    title: "A Busy Monday",
    emoji: "📅",
    theme: "must + 一般过去式(规则/不规则) + How about...?",
    intro: "📅 一个忙碌的星期一，一家人待在家里。他们要打扫、做饭、做很多事——但忙起来也很快乐！",
    corePatterns: [
      { pattern: "must + 动词原形", example: "We must clean the house." },
      { pattern: "一般过去式（规则 -ed）", example: "Mum cooked lunch." },
      { pattern: "一般过去式（不规则）", example: "Dad made the beds." },
      { pattern: "How about + V-ing?", example: "How about helping me?" }
    ],
    rounds: [
      {
        title: "Round 1：must（必须做）",
        difficulty: 1,
        rule: "用 must 说出必须做的事。",
        cards: [
          "词卡（家务）：clean the house / wash the dishes / make the beds / tidy the toys / do homework"
        ],
        answers: [
          "We must clean the house. 🧹",
          "I must wash the dishes. 🍽️",
          "You must make the beds. 🛏️",
          "The children must tidy their toys. 🧸",
          "I must do my homework. ✏️"
        ],
        tip: "must + 动词原形，语气很强 = 必须。比 should（应该）更严格。"
      },
      {
        title: "Round 2：一般过去式（规则 -ed）",
        difficulty: 2,
        rule: "用规则动词加 -ed 说昨天做的事。",
        cards: [
          "词卡（动词）：clean→cleaned / wash→washed / cook→cooked / tidy→tidied / help→helped"
        ],
        answers: [
          "Mum cooked lunch yesterday. 🍲",
          "I cleaned my room. 🧹",
          "Dad washed the car. 🚗",
          "The girl tidied her toys. 🧸",
          "We helped Mum. ❤️"
        ],
        tip: "规则动词加 -ed；以 y 结尾去 y 加 ied：tidy→tidied。注意 cook→cooked 直接加 ed。"
      },
      {
        title: "Round 3：不规则过去式（make / do / eat）",
        difficulty: 3,
        rule: "用不规则动词的过去式说做的事。",
        cards: [
          "词卡（动词）：make→made / do→did / eat→ate / go→went / see→saw / write→wrote"
        ],
        answers: [
          "Dad made the beds. 🛏️",
          "I did my homework. ✏️",
          "We ate dinner together. 🍽️",
          "Mum went to the shops. 🛒",
          "I saw a film on TV. 📺",
          "She wrote a letter. ✉️"
        ],
        tip: "这些过去式没规律，逐个记：make-made, do-did, eat-ate, go-went, see-saw, write-wrote。"
      },
      {
        title: "Round 4：忙碌星期一对话 — must + 过去式",
        difficulty: 4,
        rule: "扮演一家人，用 must 分配任务，用过去式说做完了什么。",
        cards: [
          "场景A：打扫房间 🧹",
          "场景B：做饭 🍲",
          "场景C：收拾玩具 🧸"
        ],
        answers: [
          "场景A：Mum: We must clean the house today. / Child: OK! I cleaned my room. 🧹 / Mum: Well done!",
          "场景B：Mum: I must cook lunch. How about helping me? 🍲 / Child: Sure! I helped you make the salad!",
          "场景C：Dad: The children must tidy their toys. 🧸 / Child: We tidied them this morning! What a busy Monday!"
        ],
        tip: "must 布置任务，过去式汇报结果，一问一答，忙而不乱！"
      }
    ],
    retell: {
      summary: "一个下雪的星期一，一家人不能出门，就在家里忙起来。他们打扫房间、做饭、收拾玩具。虽然很忙，但全家一起做事，大家都觉得这一天过得很充实、很快乐。",
      storyPoints: [
        "It snows on Monday, so the family stays home.",
        "They must clean the house.",
        "Mum cooked lunch and Dad made the beds.",
        "The children tidied their toys.",
        "They had a busy but happy day. 📅"
      ],
      keywords: ["Monday", "busy", "clean", "cook", "tidy", "help"],
      sentenceStarters: ["On Monday, the family...", "They must...", "In the end, they..."],
      challenge: "用 How about 加一句：How about tidying the toys together?"
    },
    checkin: [
      "Round 1 (must)：写下2个句子",
      "Round 2 (-ed 过去式)：写下2个句子",
      "Round 3 (不规则过去式)：写下2个句子",
      "Round 4 (家务对话)：角色A + 角色B"
    ]
  },
  {
    id: 5,
    unit: "Story 5",
    title: "The Tomango Tree",
    emoji: "🌳",
    theme: "一般过去式 + 关系代词 where + could/couldn't + too + 形容词",
    intro: "🌳 一个孩子种下一棵特别的树——tomango 树（tomato+芒果）。虽然现在它很小，但孩子梦想它长大后的样子！",
    corePatterns: [
      { pattern: "一般过去式", example: "Grandpa planted a tree." },
      { pattern: "关系代词 where", example: "This is the garden where we planted the tree." },
      { pattern: "could / couldn't", example: "The little tree couldn't stand tall." },
      { pattern: "too + 形容词", example: "The tree is too small now." }
    ],
    rounds: [
      {
        title: "Round 1：一般过去式（种树）",
        difficulty: 1,
        rule: "用过去式说种树那天发生的事。",
        cards: [
          "词卡（动词）：plant→planted / dig→dug / water→watered / grow→grew / make→made"
        ],
        answers: [
          "Grandpa planted a tomango tree. 🌳",
          "I dug a hole in the garden. 🕳️",
          "We watered the little tree. 💧",
          "The tree grew taller every day. 🌱",
          "Mum made a sign for the tree. 🪧"
        ],
        tip: "规则动词加 -ed（plant→planted）；不规则的要记：dig-dug, grow-grew, make-made。"
      },
      {
        title: "Round 2：关系代词 where（地点）",
        difficulty: 2,
        rule: "用 where 说明事情发生的地点。",
        cards: [
          "词卡（地点）：the garden-where we planted / the park-where we play / the farm-where Grandpa works / the house-where I live"
        ],
        answers: [
          "This is the garden where we planted the tree. 🌳",
          "This is the park where we play football. ⚽",
          "This is the farm where Grandpa works. 🚜",
          "This is the house where I live. 🏠",
          "This is the beach where we swim. 🏖️"
        ],
        tip: "where 用来连接地点：the garden + we planted the tree there → the garden where we planted the tree。"
      },
      {
        title: "Round 3：too + 形容词（太……）",
        difficulty: 3,
        rule: "用 too + 形容词说某样东西『太……了』。",
        cards: [
          "词卡（形容词）：small / heavy / hot / young / tall"
        ],
        answers: [
          "The tree is too small now. 🌱",
          "This box is too heavy for me. 📦",
          "The water is too hot to drink. 🔥",
          "The plant is too young to pick. 🌿",
          "The ladder is too tall. 🪜"
        ],
        tip: "too + 形容词 = 太……（有『过头了』的意思）。别和 very 混：very small 只是『很小』，too small 是『太小了不行』。"
      },
      {
        title: "Round 4：梦想对话 — where + could + too",
        difficulty: 4,
        rule: "扮演孩子和爷爷聊 tomango 树，用 where 说地点、could 说梦想、too 说现在太小。",
        cards: [
          "场景A：种树 🌳",
          "场景B：浇水 💧",
          "场景C：梦想长大 🍅"
        ],
        answers: [
          "场景A：Child: Grandpa, this is the garden where we planted the tree! 🌳 / Grandpa: Yes, but the tree is too small now.",
          "场景B：Child: I watered the tree, but it couldn't grow in one day. 💧 / Grandpa: Be patient! It will grow.",
          "场景C：Child: One day the tree will be tall, and we could pick tomangoes from it! 🍅 / Grandpa: That's a lovely dream!"
        ],
        tip: "where 说地点、could 说梦想、too 说现在的限制，三个句型串成一个关于梦想的小故事！"
      }
    ],
    retell: {
      summary: "孩子和爷爷在花园里种下一棵 tomango 树。小树现在太小、太矮，还不能结果。但孩子每天浇水，梦想着有一天树长大，他们能一起摘下甜甜的 tomango。",
      storyPoints: [
        "The child and Grandpa plant a tomango tree.",
        "This is the garden where they planted it.",
        "The tree is too small and couldn't grow fast.",
        "The child waters it every day.",
        "One day they will pick tomangoes. 🌳"
      ],
      keywords: ["tree", "garden", "plant", "water", "grow", "dream"],
      sentenceStarters: ["First, they...", "The tree is too...", "One day, the child hopes..."],
      challenge: "用 where 加一句：This is the garden where our dream grows."
    },
    checkin: [
      "Round 1 (过去式)：写下2个句子",
      "Round 2 (where)：写下2个句子",
      "Round 3 (too+形容词)：写下2个句子",
      "Round 4 (梦想对话)：角色A + 角色B"
    ]
  },
  {
    id: 6,
    unit: "Story 6",
    title: "Do Whales Have Stomach-ache?",
    emoji: "🐋",
    theme: "最高级 (-est/most) + have to + must",
    intro: "🐋 孩子们好奇鲸鱼会不会肚子疼。为了找到答案，他们查书、问老师，还学到很多关于海洋动物的知识！",
    corePatterns: [
      { pattern: "最高级 -est", example: "The blue whale is the biggest animal." },
      { pattern: "最高级 most + 形容词", example: "Whales are the most amazing animals." },
      { pattern: "have to + 动词原形", example: "We have to learn about animals." },
      { pattern: "must + 动词原形", example: "We must protect the whales." }
    ],
    rounds: [
      {
        title: "Round 1：最高级 -est（最大/最高）",
        difficulty: 1,
        rule: "用形容词加 -est 说出『最……』。",
        cards: [
          "词卡（动物之最）：whale-biggest / giraffe-tallest / cheetah-fastest / elephant-heaviest / mouse-smallest"
        ],
        answers: [
          "The blue whale is the biggest animal. 🐋",
          "The giraffe is the tallest animal. 🦒",
          "The cheetah is the fastest runner. 🐆",
          "The elephant is the heaviest animal. 🐘",
          "The mouse is the smallest. 🐭"
        ],
        tip: "最高级前面要加 the：the biggest。短的形容词加 -est：big→biggest（双写 g）, heavy→heaviest（y 变 i）。"
      },
      {
        title: "Round 2：most + 形容词（最……）",
        difficulty: 2,
        rule: "长的形容词用 the most 表示最高级。",
        cards: [
          "词卡（形容词）：amazing / beautiful / interesting / dangerous / intelligent"
        ],
        answers: [
          "Whales are the most amazing animals. 🐋",
          "The coral reef is the most beautiful place. 🪸",
          "This book is the most interesting. 📖",
          "Sharks are the most dangerous fish. 🦈",
          "Dolphins are the most intelligent animals. 🐬"
        ],
        tip: "长形容词用 the most：the most beautiful（不是 beautifulest）。"
      },
      {
        title: "Round 3：have to / must（必须）",
        difficulty: 3,
        rule: "用 have to 说『不得不』，用 must 说『必须』（更强烈）。",
        cards: [
          "词卡（动作）：learn about animals / protect the whales / read the book / ask the teacher / find the answer"
        ],
        answers: [
          "We have to learn about animals. 📚",
          "We must protect the whales. 🐋",
          "I have to read this book for homework. 📖",
          "You must ask the teacher. 👩‍🏫",
          "We have to find the answer. 🔍"
        ],
        tip: "have to 和 must 意思相近，但 must 语气更强、更严肃。第三人称 have to 变 has to：She has to go。"
      },
      {
        title: "Round 4：动物问答对话 — 最高级 + must",
        difficulty: 4,
        rule: "扮演好奇的孩子和老师，用最高级描述动物，用 must/have to 说要怎么做。",
        cards: [
          "场景A：最大的动物 🐋",
          "场景B：查书找答案 📚",
          "场景C：保护鲸鱼 🐋"
        ],
        answers: [
          "场景A：Child: Do whales have stomach-ache? / Teacher: Whales are the biggest animals, but they eat small food, so no! 🐋",
          "场景B：Child: I have to read the book to find the answer. 📚 / Teacher: Good! The most interesting facts are in this book.",
          "场景C：Child: Whales are the most amazing animals. We must protect them! 🐋 / Teacher: Yes! We must keep the sea clean."
        ],
        tip: "最高级把话说得又准又漂亮，must 表达你的决心——既能提问又能表达观点！"
      }
    ],
    retell: {
      summary: "孩子们很好奇：鲸鱼会不会肚子疼？他们查书、问老师，发现鲸鱼虽然是最大的动物，却只吃很小的食物。孩子们还学到，鲸鱼是最神奇的动物，我们一定要保护它们和海洋。",
      storyPoints: [
        "The children ask: 'Do whales have stomach-ache?'",
        "They read books to find the answer.",
        "The blue whale is the biggest animal.",
        "Whales are the most amazing animals.",
        "We must protect the whales. 🐋"
      ],
      keywords: ["whale", "biggest", "stomach-ache", "learn", "protect", "sea"],
      sentenceStarters: ["The children want to know...", "They find out that...", "In the end, they learn..."],
      challenge: "用最高级加一句：The blue whale is the biggest animal in the sea."
    },
    checkin: [
      "Round 1 (-est 最高级)：写下2个句子",
      "Round 2 (most 最高级)：写下2个句子",
      "Round 3 (have to/must)：写下2个句子",
      "Round 4 (动物问答)：角色A + 角色B"
    ]
  },
  {
    id: 7,
    unit: "Story 7",
    title: "The Grey Cloud",
    emoji: "☁️",
    theme: "比较级副词/形容词 (bad-worse-worst / good-better-best)",
    intro: "☁️ 一朵灰色的云很伤心，一个小女孩想办法逗它开心。云开心起来，天空也放晴了！",
    corePatterns: [
      { pattern: "good → better → best", example: "The rainbow is better than the rain." },
      { pattern: "bad → worse → worst", example: "The rain is worse than the wind." },
      { pattern: "比较级副词", example: "The cloud smiles more happily now." },
      { pattern: "That's better!", example: "That's better!" }
    ],
    rounds: [
      {
        title: "Round 1：good / better / best",
        difficulty: 1,
        rule: "用 good、better、best 比较三个程度。",
        cards: [
          "词卡（场景）：good day / better day / best day"
        ],
        answers: [
          "Today is a good day. ☀️",
          "Tomorrow will be better than today. 🌈",
          "This is the best day of all! 🎉",
          "A rainbow is better than rain. 🌈",
          "Sunshine is the best weather. ☀️"
        ],
        tip: "good 的不规则变化：good（好）→ better（更好）→ best（最好）。没有 gooder、goodest！"
      },
      {
        title: "Round 2：bad / worse / worst",
        difficulty: 2,
        rule: "用 bad、worse、worst 说坏的程度。",
        cards: [
          "词卡（天气）：bad weather / worse weather / worst storm"
        ],
        answers: [
          "The rain is bad today. 🌧️",
          "The wind is worse than the rain. 🌬️",
          "That was the worst storm ever! ⛈️",
          "A grey cloud looks bad, but rain helps flowers. 🌧️🌷",
          "The cloud felt worse before the girl came. ☁️"
        ],
        tip: "bad 的不规则变化：bad（坏）→ worse（更坏）→ worst（最坏）。"
      },
      {
        title: "Round 3：比较级副词（more happily / louder）",
        difficulty: 3,
        rule: "用比较级副词描述动作做得『更……』。",
        cards: [
          "词卡（副词）：smile more happily / sing louder / dance better / play more slowly / talk more quietly"
        ],
        answers: [
          "The cloud smiles more happily now. ☁️😊",
          "The girl sings louder. 🎵",
          "The children dance better today. 💃",
          "The rain plays more slowly now. 🌧️",
          "The wind talks more quietly. 🌬️"
        ],
        tip: "副词比较级：短的加 -er（loud→louder），长的用 more（more happily）。注意 happily 拼写。"
      },
      {
        title: "Round 4：逗云开心对话 — better / worse",
        difficulty: 4,
        rule: "扮演小女孩和灰云，用 better/worse 让云开心起来。",
        cards: [
          "场景A：灰云伤心 ☁️",
          "场景B：小女孩唱歌 🎵",
          "场景C：云放晴 🌈"
        ],
        answers: [
          "场景A：Grey Cloud: I'm so sad. The rain is bad. ☁️ / Girl: Don't be sad! A rainbow is better than rain! 🌈",
          "场景B：Girl: I'll sing for you! 🎵 / Grey Cloud: That's better! I feel happier now. 😊",
          "场景C：Grey Cloud: Look! The sun came out, and I made a rainbow! 🌈 / Girl: That's the best thing ever!"
        ],
        tip: "用 better/worse 说心情变化，再加一句 That's better! 让云开心起来，你也是最棒的朋友！"
      }
    ],
    retell: {
      summary: "一朵灰色的云很伤心，它觉得自己的雨很讨厌。一个小女孩唱歌给它听，告诉它彩虹比雨更美。云开心起来，露出太阳、变出彩虹，天空也放晴了。",
      storyPoints: [
        "A grey cloud is very sad.",
        "It thinks the rain is bad.",
        "A girl sings to the cloud.",
        "The cloud feels better and smiles.",
        "It makes a rainbow. 🌈"
      ],
      keywords: ["cloud", "grey", "sad", "better", "rainbow", "smile"],
      sentenceStarters: ["The grey cloud is...", "The girl says: '...'", "In the end, the cloud..."],
      challenge: "用 worse 加一句：The cloud felt worse before the girl helped it."
    },
    checkin: [
      "Round 1 (good/better/best)：写下2个句子",
      "Round 2 (bad/worse/worst)：写下2个句子",
      "Round 3 (比较级副词)：写下2个句子",
      "Round 4 (逗云对话)：角色A + 角色B"
    ]
  },
  {
    id: 8,
    unit: "Story 8",
    title: "The Fancy-dress Shop",
    emoji: "👗",
    theme: "How about...? + What about...?",
    intro: "👗 一个小女孩要去参加化装舞会，她走进化装服商店挑衣服。一开始有点害怕，最后找到了最喜欢的那件！",
    corePatterns: [
      { pattern: "How about + 名词/V-ing?", example: "How about this dress?" },
      { pattern: "What about + 名词/V-ing?", example: "What about that hat?" },
      { pattern: "This is getting scary!", example: "This is getting scary!" },
      { pattern: "What shall I wear?", example: "What shall I wear to the party?" }
    ],
    rounds: [
      {
        title: "Round 1：How about...?（提建议）",
        difficulty: 1,
        rule: "用 How about...? 提出建议。",
        cards: [
          "词卡（衣服）：this dress / that hat / these shoes / a pirate costume / a princess dress"
        ],
        answers: [
          "How about this dress? 👗",
          "How about that hat? 👒",
          "How about these shoes? 👠",
          "How about a pirate costume? 🏴‍☠️",
          "How about a princess dress? 👑"
        ],
        tip: "How about + 名词 = 提建议，读起来很自然。后面接动词要用 -ing：How about trying it on?"
      },
      {
        title: "Round 2：What about...?（另一个建议）",
        difficulty: 2,
        rule: "用 What about...? 再提一个建议，避免重复。",
        cards: [
          "词卡（选择）：the blue one / the green one / this mask / that wig / a clown costume"
        ],
        answers: [
          "What about the blue one? 💙",
          "What about the green dress? 💚",
          "What about this mask? 🎭",
          "What about that wig? 💇",
          "What about a clown costume? 🤡"
        ],
        tip: "How about 和 What about 意思几乎一样，可以换着用，听起来更自然不重复。"
      },
      {
        title: "Round 3：This is getting scary!（表达感受）",
        difficulty: 3,
        rule: "用 This is getting + 形容词 说出越来越……的感受。",
        cards: [
          "词卡（感受）：scary / exciting / funny / hard / dark"
        ],
        answers: [
          "This is getting scary! 👻",
          "This is getting exciting! 🎉",
          "This is getting funny! 😂",
          "This is getting hard! 💪",
          "It is getting dark in the shop. 🌙"
        ],
        tip: "be getting + 形容词 = 变得越来越……。This is getting scary = 越来越吓人。"
      },
      {
        title: "Round 4：化装服商店对话 — How about + What about",
        difficulty: 4,
        rule: "扮演小女孩和店员，用 How about/What about 挑衣服，用 getting 说感受。",
        cards: [
          "场景A：挑裙子 👗",
          "场景B：试帽子 👒",
          "场景C：决定造型 ✨"
        ],
        answers: [
          "场景A：Girl: What shall I wear to the party? / Shopkeeper: How about this lovely dress? 👗 / Girl: It's nice, but this is getting hard to choose!",
          "场景B：Girl: What about that big hat? 👒 / Shopkeeper: Great! How about trying it on? / Girl: OK! This is getting exciting!",
          "场景C：Girl: I'll wear the princess dress! 👑 / Shopkeeper: Perfect! How about this magic wand? ✨ / Girl: Yes! I love it!"
        ],
        tip: "How about / What about 轮换着提建议，getting 说心情变化，购物对话就活了！"
      }
    ],
    retell: {
      summary: "小女孩要去参加化装舞会，她走进化装服商店。商店里有很多奇怪的服装，一开始她有点害怕，但店员耐心帮她挑选。最后她选中了公主裙和魔法棒，开心地去参加舞会。",
      storyPoints: [
        "The girl goes to a fancy-dress shop.",
        "She asks: 'What shall I wear?'",
        "The shop has many costumes.",
        "She tries on dresses and hats.",
        "She chooses a princess dress. 👑"
      ],
      keywords: ["fancy-dress", "shop", "costume", "wear", "party", "choose"],
      sentenceStarters: ["The girl goes to...", "She asks: 'How about...?'", "In the end, she chooses..."],
      challenge: "用 What about 加一句：What about wearing the princess dress to the party?"
    },
    checkin: [
      "Round 1 (How about...?)：写下2个句子",
      "Round 2 (What about...?)：写下2个句子",
      "Round 3 (getting+形容词)：写下2个句子",
      "Round 4 (商店对话)：角色A + 角色B"
    ]
  }
];
