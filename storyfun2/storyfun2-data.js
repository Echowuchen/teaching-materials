// Storyfun 2 (for Starters) 造句练习 — 结构化数据
// 内容来源：FlowUs「Storyfun 2 造句练习」8 个单元页面
// 使用方式：<script src="storyfun2-data.js"></script> 后读取 window.STORYFUN2

window.STORYFUN2 = [
  {
    id: 1,
    unit: "Unit 1",
    title: "沙发上的河马",
    emoji: "🏠",
    theme: "There is/are + 介词 + Where's...?",
    intro: "🏠 沙发上有河马？浴缸里有鸭子？一起用英语描述这个搞笑的家！",
    corePatterns: [
      { pattern: "There is + 单数名词 + 地点", example: "There is a hippo in the bath!" },
      { pattern: "There are + 复数名词 + 地点", example: "There are three frogs in the kitchen." },
      { pattern: "Where's + 物品?", example: "Where's the lamp? It's on the table." },
      { pattern: "介词", example: "on / in / under / behind / next to / between / in front of" }
    ],
    rounds: [
      {
        title: "Round 1：There is / There are",
        rule: "从下面各选一个名词和一个地点，用 There is 或 There are 造一个完整的句子。",
        cards: [
          "词卡 A（名词）：hippo / frog / cat / duck / lizard",
          "词卡 B（地点）：in the bath / on the bed / in the kitchen / under the table / behind the door"
        ],
        answers: [
          "There is a hippo in the bath!",
          "There are three frogs in the kitchen.",
          "There is a cat under the table.",
          "There are two ducks on the bed.",
          "There is a lizard behind the door."
        ],
        tip: "There is + 单数，There are + 复数。说错复数也没关系，先开口再说！"
      },
      {
        title: "Round 2：介词 + Where's...?",
        rule: "用 Where's the...? 提问，用介词回答。从词卡里选物品和位置。",
        cards: [
          "词卡 A（物品）：lamp / mirror / painting / radio / bookcase",
          "词卡 B（介词）：in front of / next to / between / behind / on",
          "词卡 C（位置参照）：the door / the window / the bed / the table / the armchair"
        ],
        answers: [
          "Where's the lamp? It's on the table.",
          "Where's the mirror? It's next to the window.",
          "Where's the painting? It's between the bed and the door.",
          "Where's the radio? It's behind the armchair.",
          "Where's the bookcase? It's in front of the window."
        ],
        tip: "between 要连接两个物品：between A and B。"
      },
      {
        title: "Round 3：描述搞笑的房间（There is/are + 介词）",
        rule: "用 There is/are 开头，再加一个介词短语，描述一个搞笑的房间。想象你打开门看到一个疯狂的场景！",
        cards: [
          "句式模板：There is/are [名词] [介词] [地点]。",
          "词卡（名词 + 位置）：a hippo in the bath / frogs on the table / a cat in the cupboard / ducks on the bed / a lizard behind the mirror"
        ],
        answers: [
          "There is a hippo in the bath. It is reading a book!",
          "There are five frogs on the table. They are wearing hats!",
          "There is a cat in the cupboard. It is sleeping on the shoes.",
          "There are two ducks on the bed. They are watching TV!",
          "There is a lizard behind the mirror. It is smiling at me!"
        ],
        tip: "加一个动作描述（is doing），句子就更有故事感了！"
      },
      {
        title: "Round 4：向朋友介绍你的家",
        rule: "和朋友互相介绍自己的家。用 There is/are 和介词描述房间里的东西。",
        cards: [
          "场景A：你的朋友第一次来你家，你带他参观",
          "场景B：你去了朋友家，看到很多有趣的东西",
          "场景C：你搬家了，在电话里跟奶奶描述新家"
        ],
        answers: [
          "场景A：You: Welcome to my home! This is the living room. / Friend: Wow! There is a big TV on the wall! / You: Yes! And there are books next to the TV. / Friend: Where is your bedroom? You: It's next to the bathroom. Come and see!",
          "场景B：Friend: This is my room. There is a lamp on the desk. / You: Cool! And there is a cat under the bed! / Friend: Haha, yes! That's Milo. He loves sleeping there. / You: Where's the bathroom? Friend: It's between my room and the kitchen.",
          "场景C：You: Grandma, I love my new home! There is a big window in my room. / Grandma: That's wonderful, dear! Is there a garden? / You: Yes! There are flowers next to the garden gate."
        ],
        tip: "用 There is/are 介绍有什么，用介词说明在哪里——别人就能想象你的家啦！"
      }
    ],
    checkin: [
      "Round 1 (There is/are)：写下3个句子",
      "Round 2 (介词 + Where's)：写下2个句子",
      "Round 3 (场景描述)：写下2个句子",
      "Round 4 (对话)：角色A + 角色B"
    ]
  },
  {
    id: 2,
    unit: "Unit 2",
    title: "Jill's jellyfish",
    emoji: "🐠",
    theme: "Have you got...? + 疑问词猜动物",
    intro: "🐠 猜猜我的动物是什么？用英语问问题，猜出对方的动物！",
    corePatterns: [
      { pattern: "Have you got + 名词?", example: "Have you got a dog?" },
      { pattern: "Yes, I have / No, I haven't", example: "No, I haven't. But I've got a cat." },
      { pattern: "疑问词提问", example: "What colour...? / How many...? / Where...? / Has it got...? / Is it...?" }
    ],
    rounds: [
      {
        title: "Round 1：Have you got...?",
        rule: "用 Have you got...? 问对方有没有某个动物，用 Yes, I have / No, I haven't 回答。",
        cards: [
          "词卡（动物）：dog / cat / frog / chicken / horse / zebra / crocodile / giraffe"
        ],
        answers: [
          "A: Have you got a dog? B: No, I haven't. But I've got a cat.",
          "A: Have you got a crocodile? B: No, I haven't! That's scary!",
          "A: Have you got a chicken? B: Yes, I have! I've got three chickens.",
          "A: Have you got a zebra? B: No, I haven't. But I've got a horse.",
          "A: Have you got a giraffe? B: Yes, I have! It's very tall."
        ],
        tip: "回答时可以用 But I've got... 继续说！"
      },
      {
        title: "Round 2：猜动物 — 用疑问词提问",
        rule: "你想一个动物，让对方用疑问词猜。对方只能用疑问句提问。",
        cards: [
          "词卡（动物）：polar bear / jellyfish / tiger / bee / lizard / hippo / cow / frog",
          "疑问词库：What colour...? / How many...? / Where...? / Has it got...? / Is it...?"
        ],
        answers: [
          "A: I have an animal. Can you guess? B: What colour is it? A: It's white. B: Where does it live? A: In the snow. B: Is it a polar bear? A: Yes!",
          "A: I have an animal. Guess! B: How many legs has it got? A: It hasn't got any legs. B: Where does it live? A: In the sea. B: Is it a jellyfish? A: Yes!",
          "A: I have a big animal. Guess! B: Has it got four legs? A: Yes, it has. B: Is it big? A: Very big! B: Is it a hippo? A: Yes!"
        ],
        tip: "和爸爸妈妈一起玩，一人想动物，一人用英语问！"
      },
      {
        title: "Round 3：描述一个神秘的动物",
        rule: "用3-4句话描述一个动物，不要说出它的名字，让对方猜。",
        cards: [
          "句式模板：It has got... / It lives in... / It can... / It likes..."
        ],
        answers: [
          "It has got four legs and a long tail. It is orange and black. It lives in the jungle. It can run very fast. (tiger)",
          "It has got a very long neck. It is yellow and brown. It lives in Africa. It eats leaves from tall trees. (giraffe)",
          "It has got a big mouth and lots of teeth. It is green. It lives in the river. It likes swimming. (crocodile)",
          "It has got six legs. It is very small. It can fly. It likes flowers. (bee)"
        ],
        tip: "描述不能太简单——至少给3个线索！"
      },
      {
        title: "Round 4：猜谜游戏对话",
        rule: "和朋友一起玩猜谜游戏，一个人想动物，一个人用疑问句猜。",
        cards: [
          "场景A：教室里，一人想动物，其他人轮流问问题",
          "场景B：在家和弟弟妹妹玩游戏",
          "场景C：电话里和外公外婆玩猜谜"
        ],
        answers: [
          "场景A：Kim: I've got an animal. Ask me questions! / Tom: What colour is it? Kim: It's green and brown. / Lee: How many legs has it got? Kim: It has got four legs. / Tom: Has it got a long tail? Kim: Yes, it has! / Lee: Where does it live? Kim: In the river. Tom: Is it a crocodile? Kim: Yes!",
          "场景B：You: I've got an animal in my head. Guess! / Brother: Is it big? You: Yes, very big! / Brother: Has it got four legs? You: Yes! Brother: Can it fly? You: No! / Brother: Is it a hippo? You: Yes! Your turn!",
          "场景C：You: Grandpa, let's play a guessing game! I have an animal. / Grandpa: OK! What colour is it? You: It's black and yellow. / Grandpa: Can it fly? You: Yes, it can! Grandpa: Is it a bee? You: Yes! How did you know?"
        ],
        tip: "对话像打乒乓球，一来一回——问问题、给线索、猜答案！"
      }
    ],
    checkin: [
      "Round 1 (Have you got?)：写下2个对话",
      "Round 2 (猜动物——疑问词)：写下2组问答",
      "Round 3 (神秘动物)：写下2个描述",
      "Round 4 (猜谜对话)：角色A + 角色B"
    ]
  },
  {
    id: 3,
    unit: "Unit 3",
    title: "Uncle Fred and me",
    emoji: "🎣",
    theme: "I like/love + doing / He/She likes",
    intro: "🎣 你的家人喜欢做什么？用英语聊一聊大家的爱好吧！",
    corePatterns: [
      { pattern: "I like/love + doing", example: "I love swimming in the sea!" },
      { pattern: "My... likes/loves + doing", example: "My dad likes fishing at the lake." },
      { pattern: "I don't like + doing", example: "I don't like singing in front of people." }
    ],
    rounds: [
      {
        title: "Round 1：I like / I love + doing",
        rule: "从词卡里选一个活动，用 I like 或 I love 造句。说说你喜欢做什么。",
        cards: [
          "词卡（活动）：swimming / fishing / singing / flying a kite / riding a bike / taking photos / playing the guitar / reading"
        ],
        answers: [
          "I love swimming in the sea!",
          "I like flying a kite in the park.",
          "I love riding my bike on sunny days.",
          "I like taking photos of my cat.",
          "I love playing the guitar after school.",
          "I don't like singing in front of people."
        ],
        tip: "like 和 love 后面跟 doing（动词ing形式）。I don't like 也可以，真实的表达！"
      },
      {
        title: "Round 2：He/She likes + doing",
        rule: "说说你的家人喜欢做什么。用 My... likes/loves + doing。",
        cards: [
          "词卡 A（家人）：mum / dad / grandma / grandpa / uncle / aunt / friend",
          "词卡 B（活动）：running / walking / fishing / cooking / watching TV / reading / gardening"
        ],
        answers: [
          "My mum loves cooking delicious food.",
          "My dad likes fishing at the lake.",
          "My grandma loves gardening. She has beautiful flowers.",
          "My grandpa likes reading stories before bed.",
          "My uncle loves walking with his dog.",
          "My friend likes running in the park."
        ],
        tip: "第三人称单数（he/she/it）要用 likes / loves，不要漏掉 s！"
      },
      {
        title: "Round 3：介绍家人的爱好",
        rule: "用3-4句话介绍你的家人分别喜欢做什么。",
        cards: [
          "句式模板：My [家人] likes/loves [doing]. I like/love [doing] too / but I don't like..."
        ],
        answers: [
          "My dad likes fishing at the lake. My mum loves cooking. I like eating her food! I don't like fishing. It's boring.",
          "My sister loves dancing. She dances every day. I like watching her dance. But I don't like dancing. I like singing!",
          "My grandpa loves reading. He reads every evening. My grandma loves gardening. I love visiting them and playing in the garden.",
          "My uncle Fred loves walking with his ducks. He likes going to the park. I love my uncle Fred and my uncle Fred loves me!"
        ],
        tip: "最后一句来自课本故事，非常温暖！你也有这样喜欢的家人吗？"
      },
      {
        title: "Round 4：聊聊周末喜欢做什么",
        rule: "和朋友/家人聊周末喜欢做什么。用 like/love + doing 和 Don't you like...? / I don't like...",
        cards: [
          "场景A：你和朋友在计划周末",
          "场景B：你和妈妈聊爸爸的爱好",
          "场景C：同学问你喜欢做什么"
        ],
        answers: [
          "场景A：A: What do you like doing on weekends? / B: I love going to the park. I like flying a kite there! / A: Cool! I like riding my bike. Let's go together!",
          "场景B：You: Mum, what does Dad like doing? Mum: He loves fishing. / You: I like fishing too! Can I go with him? / Mum: Of course! He loves spending time with you.",
          "场景C：Kim: What do you like doing after school? / You: I like playing football. What about you? / Kim: I love reading comics and drawing pictures."
        ],
        tip: "聊天像打乒乓球：回答完记得反问回去（What about you?）！"
      }
    ],
    checkin: [
      "Round 1 (I like/love)：写下2个句子",
      "Round 2 (He/She likes)：写下2个句子",
      "Round 3 (爱好介绍)：写下1段话",
      "Round 4 (周末对话)：角色A + 角色B"
    ]
  },
  {
    id: 4,
    unit: "Unit 4",
    title: "Mrs Day's garden",
    emoji: "🌽",
    theme: "现在进行时（单/复数）+ There is/are",
    intro: "🌽 动物们在花园里干什么？用现在进行时描述这场闹剧！",
    corePatterns: [
      { pattern: "单数 + is + doing", example: "A cow is eating the potatoes!" },
      { pattern: "复数 + are + doing", example: "The cows are eating all the vegetables!" },
      { pattern: "There is/are + 动物 + doing", example: "There is a goat on the table. It is wearing Mrs Day's hat!" },
      { pattern: "道歉与和解", example: "I'm very sorry. / Would you like to...?" }
    ],
    rounds: [
      {
        title: "Round 1：现在进行时（单数主语）",
        rule: "选一个动物和一个动作，用现在进行时描述它正在做什么。",
        cards: [
          "词卡 A（动物）：a cow / a sheep / a goat / a duck / a chicken",
          "词卡 B（动作）：eating / running / sleeping / swimming / jumping / wearing a hat"
        ],
        answers: [
          "A cow is eating the potatoes!",
          "A sheep is wearing a hat!",
          "A goat is jumping on the table!",
          "A duck is swimming in the water.",
          "A chicken is sleeping in the flowers."
        ],
        tip: "单数动物用 is doing。别忘了 is！"
      },
      {
        title: "Round 2：现在进行时（复数主语）",
        rule: "选一种动物（复数）和一个动作，用 are doing 描述它们正在做什么。",
        cards: [
          "词卡 A（复数动物）：the cows / the sheep / the goats / the ducks / the chickens",
          "词卡 B（动作）：eating vegetables / wearing clothes / running away / making a mess / dancing"
        ],
        answers: [
          "The cows are eating all the vegetables!",
          "The sheep are wearing Mrs Day's clothes!",
          "The goats are running away from the garden!",
          "The ducks are making a mess in the kitchen!",
          "The chickens are dancing on the grass!"
        ],
        tip: "复数动物用 are doing。故事里的动物特别调皮——你的句子也可以很搞笑！"
      },
      {
        title: "Round 3：There is/are + 现在进行时（场景描述）",
        rule: "用 There is/are 开头描述有什么动物，再用现在进行时描述它们在做什么。",
        cards: [
          "句式模板：There is/are [动物]. It/They is/are [doing]."
        ],
        answers: [
          "There are some cows in the garden. They are eating the onions!",
          "There is a goat on the table. It is wearing Mrs Day's hat!",
          "There are five chickens in the kitchen. They are eating the peas!",
          "There is a duck in the bathroom. It is wearing a T-shirt! Oh dear!",
          "There are sheep next to the gate. They are running into the garden! Stop!"
        ],
        tip: "There is/are 告诉别人有什么，现在进行时告诉别人在干什么。两个一起用就像在讲故事！"
      },
      {
        title: "Round 4：道歉与和解对话",
        rule: "用 I'm very sorry 道歉，用 Would you like to...? 提出和解。",
        cards: [
          "场景A：你的宠物跑进邻居的花园，吃了蔬菜",
          "场景B：同学不小心弄坏了你的手工",
          "场景C：你弄丢了朋友的书，你想补偿"
        ],
        answers: [
          "场景A：You: My dog is eating your flowers! I'm very sorry! / Neighbour: I'm very angry! Those are my favourite flowers! / You: Would you like to have dinner with my family? Neighbour: That sounds nice.",
          "场景B：Friend: My painting is on the floor! It's broken! / You: I'm very sorry! I didn't mean to! / Friend: I worked on it all day... I'm very angry! / You: Would you like to make a new one together? I can help!",
          "场景C：You: I'm very sorry. I lost your book. / Friend: What? I loved that book! / You: Would you like to go to the bookshop with me? I can buy you a new one. / Friend: OK, thank you. But please be careful next time! You: I promise!"
        ],
        tip: "做错事说 I'm very sorry，然后提出补救：Would you like to...? 这才是和解的正确打开方式！"
      }
    ],
    checkin: [
      "Round 1 (单数现在进行时)：写下2个句子",
      "Round 2 (复数现在进行时)：写下2个句子",
      "Round 3 (场景描述)：写下2个句子",
      "Round 4 (道歉对话)：角色A + 角色B"
    ]
  },
  {
    id: 5,
    unit: "Unit 5",
    title: "Classmates",
    emoji: "🎨",
    theme: "I can / I can't / So do I",
    intro: "🎨 你会做什么？我不会唱歌但我会画画！每个人都有不同的能力！",
    corePatterns: [
      { pattern: "I can + 动词", example: "I can draw, but I can't paint very well." },
      { pattern: "I can't + 动词", example: "I can't sing, but I love listening to music." },
      { pattern: "So do I / I don't", example: "A: I like swimming. B: So do I!" }
    ],
    rounds: [
      {
        title: "Round 1：I can / I can't",
        rule: "从词卡里选一个能力，用 I can 或 I can't 造句。",
        cards: [
          "词卡（能力）：draw / sing / dance / swim / run fast / ride a bike / play football / fly a kite / write stories / paint"
        ],
        answers: [
          "I can draw, but I can't paint very well.",
          "I can swim in the sea.",
          "I can't sing, but I love listening to music.",
          "I can ride a bike really fast!",
          "I can't fly a kite. It's too hard!",
          "I can play football with my friends."
        ],
        tip: "用 but 连接两个句子，先说会什么，再说不会什么。真实才有意思！"
      },
      {
        title: "Round 2：So do I / I don't",
        rule: "一个人说一个能力或喜好，另一个人用 So do I（我也是）或 I don't（我不是/我不会）回应。",
        cards: [
          "回应库：So do I / I don't / So can I / I can't / So am I / I'm not"
        ],
        answers: [
          "A: I like swimming. B: So do I! Let's go swimming together!",
          "A: I can't sing. B: I can't either! But I love music.",
          "A: I love reading comics. B: So do I! What's your favourite comic?",
          "A: I don't like getting up early. B: I don't either! It's so hard.",
          "A: I can run very fast. B: So can I! Let's have a race!",
          "A: I am good at drawing. B: So am I! Let's draw together."
        ],
        tip: "So do I = 我也是。记得根据前面的动词选对：can → So can I, am → So am I, like → So do I。"
      },
      {
        title: "Round 3：描述同学的能力",
        rule: "用3-4句话描述你和你的同学会什么、不会什么。",
        cards: [
          "句式模板：[Name] can... but he/she can't... I can... too / but I can't..."
        ],
        answers: [
          "Kim can draw beautiful pictures. She can't sing well. I can draw too, but I can't draw as well as Kim.",
          "Sam can run very fast. He can play football too. I can't run fast, but I can swim well.",
          "Pat can spell very well. She can read long books. I can read fast too, but I can't spell.",
          "Lee can dance and sing. He is good at music. I can't dance, but I can play the guitar."
        ],
        tip: "我会的你可能不会，你会的我可能不会——这很正常，每个人都有不同的能力！"
      },
      {
        title: "Round 4：了解同学的能力",
        rule: "和同学/朋友对话，了解对方会什么不会什么。",
        cards: [
          "场景A：新学期，和新闻学互相了解",
          "场景B：老师让你们分组表演节目",
          "场景C：体育课上选队友"
        ],
        answers: [
          "场景A：New student: Hi! I'm new here. Can you draw? / You: Yes, I can! So can my friend Kim. Can you draw? / New student: I can draw a little. But I can't paint.",
          "场景B：Teacher: We need a show! Who can sing? Kim: I can sing! And Lee can dance! / Teacher: Who can play the guitar? You: I can! I love playing the guitar. / Teacher: Perfect! Kim sings, Lee dances, and you play guitar!",
          "场景C：Captain A: I want Sam on my team. He can run fast! / Captain B: I want Lee. He can play football well. / You: Can I be on your team? I can't run fast, but I can throw the ball."
        ],
        tip: "了解别人用 Can you...? 说自己用 I can/can't——一来一回就是对话！"
      }
    ],
    checkin: [
      "Round 1 (I can/I can't)：写下2个句子",
      "Round 2 (So do I / I don't)：写下2组对话",
      "Round 3 (同学描述)：写下2段话",
      "Round 4 (对话)：角色A + 角色B"
    ]
  },
  {
    id: 6,
    unit: "Unit 6",
    title: "I want that game!",
    emoji: "🎮",
    theme: "I want + 名词 / 现在进行时",
    intro: "🎮 我想要那个玩具！在商店里、在街上——大家都在做什么？",
    corePatterns: [
      { pattern: "I want + 名词", example: "I want that board game! It looks so fun!" },
      { pattern: "第三人称单数 wants", example: "He wants a new game." },
      { pattern: "现在进行时", example: "A girl is crying because she wants a toy." }
    ],
    rounds: [
      {
        title: "Round 1：I want + 名词",
        rule: "从词卡里选一样东西，用 I want... 造句。",
        cards: [
          "词卡（物品）：a board game / a computer / a doll / a helicopter / a motorbike / a ship / a racket / a kite / a camera"
        ],
        answers: [
          "I want that board game! It looks so fun!",
          "I want a computer for my birthday.",
          "I want that doll! She is beautiful!",
          "I want a helicopter toy. It can fly!",
          "I want a new racket. My old one is broken.",
          "I don't want a motorbike. It's too scary!"
        ],
        tip: "want 后面直接跟名词。第三人称单数用 wants：He wants a new game."
      },
      {
        title: "Round 2：现在进行时（正在做什么）",
        rule: "选一个人物和动作，用现在进行时描述正在做什么。",
        cards: [
          "词卡 A（人物）：a girl / a boy / a man / a woman / some children",
          "词卡 B（动作）：crying / smiling / riding a bike / playing / running / standing / eating candy"
        ],
        answers: [
          "A girl is crying because she wants a toy.",
          "A boy is smiling. He has got a new game!",
          "Some children are playing in the street.",
          "A man is riding a bike to the shop.",
          "A woman is standing next to the bookshop.",
          "A boy is eating candy. It looks delicious!"
        ],
        tip: "is 配单数，are 配复数。描述正在发生的动作！"
      },
      {
        title: "Round 3：综合场景描述",
        rule: "用 There is/are + 现在进行时描述一个街道或商店场景。",
        cards: [
          "句式模板：There is/are [人物]. He/She/They is/are [doing]."
        ],
        answers: [
          "There is a toy shop on the street. A boy is standing in front of it. He wants a game!",
          "There are some children in the shop. They are looking at the toys.",
          "There is a girl. She is crying because she wants a doll. Her mum says, Don't worry!",
          "There is a man. He is riding a motorbike. He looks cool!",
          "There are two boys. They are playing a board game. They are laughing!"
        ],
        tip: "像在讲一个故事一样描述场景——谁在哪里，正在做什么。"
      },
      {
        title: "Round 4：玩具店里的对话",
        rule: "和爸爸妈妈或朋友在玩具店里对话。用 I want...、Don't worry!、Can I have...?",
        cards: [
          "场景A：你在玩具店看到一个很想要的游戏",
          "场景B：妹妹/弟弟在哭，你安慰她/他",
          "场景C：朋友生日，你帮他选礼物"
        ],
        answers: [
          "场景A：You: Mum! Look! I want that game! It looks so fun! / Mum: But you have many games at home. / You: Please! I really want it! I can play with my friends! / Mum: OK, but only if it's your birthday gift. You: Thank you, Mum!",
          "场景B：You: Why are you crying? What's wrong? / Little brother: I want that toy car, but Mum said no. / You: Don't worry! You can play with my toy cars.",
          "场景C：You: It's Kim's birthday. What does she want? / Friend: She wants a doll. Look at this one! / Friend: How about a board game? We can all play together!"
        ],
        tip: "想要什么就说 I want...，安慰别人说 Don't worry!——实用的日常英语！"
      }
    ],
    checkin: [
      "Round 1 (I want + 名词)：写下2个句子",
      "Round 2 (现在进行时)：写下2个句子",
      "Round 3 (场景描述)：写下2个句子",
      "Round 4 (对话)：角色A + 角色B"
    ]
  },
  {
    id: 7,
    unit: "Unit 7",
    title: "Monkey beach",
    emoji: "🐒",
    theme: "Can you see...? + 介词 / 现在进行时",
    intro: "🐒 沙滩上有一只猴子！它拿了我的平板！用英语描述这场海滩趣事！",
    corePatterns: [
      { pattern: "Can you see + 物品?", example: "Can you see the monkey? Yes, I can!" },
      { pattern: "It's + 介词 + 位置", example: "It's behind that big tree." },
      { pattern: "现在进行时", example: "A monkey is eating a banana on the beach." }
    ],
    rounds: [
      {
        title: "Round 1：Can you see...? + 介词",
        rule: "用 Can you see...? 提问，用 It's [介词]... 回答，描述海滩上的东西在什么位置。",
        cards: [
          "词卡（物品）：the monkey / the ball / the coconut / the banana / the tablet / the bird",
          "词卡（位置）：behind a tree / on the sand / in front of the sea / next to a rock / under a towel"
        ],
        answers: [
          "A: Can you see the monkey? B: Yes, I can! It's behind that big tree.",
          "A: Can you see the ball? B: Yes! It's on the sand next to the water.",
          "A: Can you see the coconut? B: Yes, I can. It's next to the big rock.",
          "A: Can you see the banana? B: No, I can't. A: It's under the towel!",
          "A: Can you see the tablet? B: Yes! The monkey has got it!"
        ],
        tip: "Can you see...? 是问你能看到……吗，回答用 Yes, I can. / No, I can't."
      },
      {
        title: "Round 2：现在进行时 — 海滩上正在做什么",
        rule: "选一个人物和一个动作，用现在进行时描述海滩上正在做什么。",
        cards: [
          "词卡 A（人物）：a monkey / a girl / some children / a man / a bird",
          "词卡 B（动作）：eating a banana / playing in the water / singing a song / taking photos / clapping hands"
        ],
        answers: [
          "A monkey is eating a banana on the beach.",
          "A girl is taking photos of the sea.",
          "Some children are playing in the water. They are laughing!",
          "A man is singing a song next to the sea.",
          "A monkey is having fun on the beach!"
        ],
        tip: "现在进行时 = 正在发生的动作。is 配单数，are 配复数。"
      },
      {
        title: "Round 3：描述海滩场景",
        rule: "用2-3句话描述海滩上的场景。有人、有动物、有动作——像在讲故事一样。",
        cards: [
          "句式模板：There is/are [人物/物品]. [主语] is/are [doing] [地点]."
        ],
        answers: [
          "There is a monkey on the beach. It is sitting under a tree and eating a banana.",
          "There are some children in the sea. They are swimming and laughing.",
          "There is a girl next to a rock. She is taking photos of a monkey. The monkey is waving!",
          "There is a coconut on the sand. A monkey is trying to open it!",
          "There is a monkey behind me. It has got my tablet! Hey! Come back!"
        ],
        tip: "结合 There is/are 和现在进行时，你的句子就能描述任何场景！"
      },
      {
        title: "Round 4：海滩上的对话",
        rule: "和朋友在海滩上看到猴子，一起讨论。用 Look!、Can you see...?、It has got...、Let's...",
        cards: [
          "场景A：你们在海滩上看到一只猴子",
          "场景B：猴子拿走了你们的东西",
          "场景C：你们想给猴子拍照"
        ],
        answers: [
          "场景A：You: Look! There is a monkey on the beach! / Friend: Wow! Can you see what it is doing? / You: It is eating a banana! It looks so happy! Friend: Let's take a photo!",
          "场景B：Friend: Hey! The monkey has got my sandwich! / You: Oh no! Run after it! / Friend: It is running behind that tree! / You: Don't worry. I have more food. Let's share!",
          "场景C：You: The monkey is sitting on the rock. Let's take a photo! / Friend: OK, but don't get too close! / You: Can you see the monkey? It is smiling!"
        ],
        tip: "看到有趣的事说 Look! 提议一起做说 Let's...——海滩之旅的必备口语！"
      }
    ],
    checkin: [
      "Round 1 (Can you see + 介词)：写下2组问答",
      "Round 2 (现在进行时)：写下2个句子",
      "Round 3 (场景描述)：写下2个句子",
      "Round 4 (对话)：角色A + 角色B"
    ]
  },
  {
    id: 8,
    unit: "Unit 8",
    title: "Winners!",
    emoji: "🏀",
    theme: "现在进行时（运动）+ good at + doing",
    intro: "🏀 我们在打篮球！传球、投篮、得分——团队合作最重要！",
    corePatterns: [
      { pattern: "现在进行时（运动）", example: "He is bouncing the ball down the court." },
      { pattern: "be good at + doing", example: "Sam is very good at throwing the ball." },
      { pattern: "鼓励队友", example: "You are amazing! / Don't worry! We are a team!" }
    ],
    rounds: [
      {
        title: "Round 1：现在进行时 — 运动动作",
        rule: "选一个动作，用现在进行时描述正在做什么运动动作。",
        cards: [
          "词卡（动作）：throwing the ball / catching the ball / bouncing the ball / running / scoring / jumping / stopping the ball"
        ],
        answers: [
          "I am throwing the ball to you! Catch it!",
          "He is bouncing the ball down the court.",
          "She is running very fast. She is going to score!",
          "They are catching the ball and passing it.",
          "He is jumping high! He is amazing!",
          "We are scoring! We are winning!"
        ],
        tip: "运动动作用现在进行时描述，就像现场解说员一样！"
      },
      {
        title: "Round 2：good at + doing",
        rule: "说一个人擅长做什么运动动作。用 is/are good at + doing。",
        cards: [
          "词卡 A（名字）：Sam / Kim / Pat / Lee / Jo / Alex",
          "词卡 B（能力）：good at throwing / good at catching / good at running / good at scoring / good at bouncing / good at jumping"
        ],
        answers: [
          "Sam is very good at throwing the ball.",
          "Kim is good at catching. She never drops the ball!",
          "Pat is good at running. He is the fastest in our team.",
          "Lee is good at scoring. He scores lots of points!",
          "Jo is good at jumping. She can jump really high!",
          "Alex is good at bouncing the ball. He can bounce and run at the same time!"
        ],
        tip: "good at 后面跟 doing。要说擅长做某事就用 be good at + doing。"
      },
      {
        title: "Round 3：描述一场球赛",
        rule: "用3-4句话描述一场篮球比赛。你们队在做什么？谁很厉害？",
        cards: [
          "句式模板：It's a game! [Name] is [doing]. He/She is good at [doing]. We are [doing]."
        ],
        answers: [
          "It's a basketball game! Sam is throwing the ball to Kim. Kim is catching it. She is good at catching. She scores! We are winning!",
          "We are playing basketball. Lee is running with the ball. He is very fast. Pat is good at stopping. We are a great team!",
          "The game is exciting! Jo is bouncing the ball. She passes to me. I am throwing. YES! We score! We are winners!",
          "Our team is playing well. Everyone is running and passing. Alex is good at scoring. He scores 10 points! We love playing basketball!"
        ],
        tip: "描述比赛时可以用很多现在进行时的动词——让人感觉比赛正在进行！"
      },
      {
        title: "Round 4：团队合作对话",
        rule: "和队友在比赛中对话。鼓励队友、传球、庆祝！",
        cards: [
          "场景A：比赛中，你给队友传球",
          "场景B：队友得分了，你祝贺他",
          "场景C：输了比赛，你鼓励大家"
        ],
        answers: [
          "场景A：You: I am throwing the ball to you! Catch it! / Sam: I've got it! I am running to the basket! / You: You are good at running! Go, Sam! Sam: YES! I scored!",
          "场景B：Kim: I scored again! That's 5 points! / You: You are amazing! You are so good at scoring! / Kim: Thank you! You are good at passing. You helped me!",
          "场景C：You: We didn't win. But we played well! / Pat: I'm sad. I wanted to win. / You: Don't worry! We are a team. We can practise more! / Lee: You're right. You are good at catching, and I am good at running. / You: Let's practise again next week! We will be winners next time!"
        ],
        tip: "团队合作的关键词：传球（pass）、鼓励（You are good at...!）、不放弃（We can practise more!）"
      }
    ],
    checkin: [
      "Round 1 (现在进行时—运动)：写下2个句子",
      "Round 2 (good at + doing)：写下2个句子",
      "Round 3 (球赛描述)：写下2个句子",
      "Round 4 (对话)：角色A + 角色B"
    ]
  }
];
