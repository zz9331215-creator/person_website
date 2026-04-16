import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'
import nawaerCover from '../assets/nawaer.png'

type Topic = {
  id: string
  zh: string
  en: string
}

export type Note = {
  id: string
  topicId: string
  date: string
  title: { zh: string; en: string }
  kind: { zh: string; en: string }
  summary: { zh: string; en: string }
  content: { zh: string; en: string }
  cover?: string
}

const topics: Topic[] = [
  { id: 'reading', zh: '读书', en: 'Reading' },
  { id: 'frontend', zh: '嵌入式学习', en: 'Embedded learning' },
  { id: 'backend', zh: '软件和网站', en: 'Software and website' },
]

export const notes: Note[] = [
  { 
    id: 'note-reading-1',
    topicId: 'reading',
    date: '2026-04-08',
    kind: { zh: '读书笔记', en: 'Reading note' },
    title: { zh: '《纳瓦尔宝典》读书笔记', en: 'Narvalist notes' },
    summary: {
      zh: '赚钱是一门技能，财富是在睡觉时也能为你赚钱的资产。',
      en: 'Chapter 1: Accumulating Wealth. Making money is a skill; wealth is assets that earn while you sleep.',
    },
    cover: nawaerCover,
    content: {
      zh: `
# 《纳瓦尔宝典》读书笔记

## 第一章 积累财富
1. 赚钱不是一件想做就能做的事情，而是一门需要学习的技能。
2. 赚钱跟工作的努力程度没什么必然联系。
3. 要想获得财富，你就必须知道做什么、和谁一起做、什么时候做。与埋头苦干相比，更重要的是理解和思考。当然，努力非常重要，不能吝啬自己的努力，但必须选择正确的方式。
4. 假设有一天，我创业失败，身无分文，这时把我随意丢到任何一个说英语的国家的街道上，我相信自己会在5年或10年内重新变得富有，因为我已经掌握了"赚钱"这门技巧，而这门技巧人人都能学会。
5. 如果还不知道自己应该做什么，那么你先要弄清楚这个问题。在这之前，不要盲目发力。
6. "把自己产品化"很难。所以我才说"把自己产品化"要花几十年——并不是要花几十年执行，而是要把大部分时间用于思考：我能提供什么独特的价值？
7. 金钱是我们转移财富的方式。金钱是社会的信用符号，具有调用别人时间的能力。
8. 财富就是在你睡觉时也可以帮你赚钱的资产。财富是可以进行生产的工厂和机器人。财富是不分昼夜为客户服务的计算机程序。财富也可以是银行里被投资于其他资产或业务的钱。
9. 我对财富的定义是在睡觉时也能带来收入的企业和资产。
10. 要想在社会上赚到钱，就要为社会提供其有需求但无从获得的东西。如果社会已经创造出需要的产品和服务，你也就不被需要了。
11. 如果想变得富有，你就要弄清楚你能为社会提供哪些其有需求但无从获得的东西，而提供这些东西对你来说又是轻松自然的事情，在你的技术和能力范围内。
12. 下一步是思考如何规模化，因为只提供一个产品或一项服务是远远不够的，必须提供成千上万个，甚至几十万、几百万、几十亿个，最好人手一个。
13. 找到天赋所在，积累专长。
14. 专长无法被教授，但可以被学习。
15. 在"成为自己"这件事情上，没有人能比得过你。其实，人生大部分时间都是在寻找，寻找那些最需要你的人，寻找那些最需要你的事情。
16. 但是我独一无二的长处是什么？我最终把时间花在了哪里？回顾过去，我发现我做得更多的都是围绕着赚钱，与技术打交道，与人打交道，推销产品，谈经论道，兜售理念。
17. 有些人觉得销售很难，想知道怎样才能做到口齿伶俐、善于推销。事实上，如果你在现阶段仍不擅长做销售，或者对销售确实没什么兴趣，那么销售这个行业也许并不适合你，你还是要专注于自己真正喜欢的事情。
18. 通过互联网，每个人都可以找到自己的受众。只要在网上进行独特的自我表达，你就有机会传播快乐，累积财富，打造产品，创立企业。
19. "只有独辟蹊径，才能避开竞争。"从本质上看，竞争就是模仿，与他人竞争，是因为你跟别人在做一样的事情。但是，每个人都是独一无二的，不要模仿他人。
20. 最好的工作与委任或学位无关。最好的工作是终身学习者在自由市场中的创造性表达。
21. 在生活中，基本的算术能力比微积分更重要。同样，能够用简单的英语词汇清楚地表达比能够写诗、词汇量丰富或者说7种不同的语言重要得多。
22. 一个人员只能在一两件事上做到精通，而这一两件事通常是让你痴迷的事情。
23. 生活中所有的回报，无论是财富、人际关系，还是知识，都来自复利。
24. 在商业关系中，有了彼此的信任，所有的常规谈判都可以化繁为简，因为你知道合作定能成功。
25. 出发点并不重要，行为本身才重要。因此，遵守道德标准并非易事。
26. 99%的努力终将白费。
27. 至少从以目标为导向的现实社会的角度看，你在学校里付出的努力只有1%得到了回报。
28. 你应该在经过深思熟虑后，清醒地认识到自己需要从大多数事情（人际关系、工作、学习）中找到可以尽全力去付出的那部分，以充分获取复利效应。
29. 把精力用在无用的东西上是浪费时间，浪费脑力。
30. 努力找到不会被浪费的1%。这1%对你是有意义的，值得你用余生去追求。一旦找到，你就要心无旁骛，全力以赴。
31. 勇于以个人名义承担商业风险。社会将根据责任、股权和杠杆效应回报你。
32. 获得财富需要杠杆。杠杆可以来自劳动力、资本、代码或媒体。
33. 那些有能力以个人名义在公众面前承担失败风险的人，会获得很大的原动力。
34. 当以个人名义公开发表看法时，你就是在为某些观点和做法承担风险。同时，你也会因此得到回报，从中获益。
35. 失败真的没有那么可怕，所以我们都应该勇于承担更多责任。
36. 没有股权，就没有通往财务自由的路径。
37. 如果拥有企业股权，你就可以获得被动收入——即使你在度假，企业也在帮你赚钱。
38. 如果拥有企业股权，你就可以获得被动收入——即使你在度假，企业也在帮你赚钱。
39. 从本质上看，上班就是给人打工。而企业所有者在承担风险和责任的同时也拥有知识产权和品牌效应。所以，他们支付给你的报酬一定低于你创造的价值。
40. 要努力工作，直到有能力拥有企业股权。你可以买入企业的股票，成为小股东，也可以创办一家属于自己的企业。总而言之，要想方设法拥有企业的所有权，这一点真的非常重要。
41. 真正的财富是通过创建公司或者通过投资创造出来的。投资公司也是买入企业的股权。这些都是获得财富的途径。总之，真正的财务自由都不是靠单纯地投入大量时间来实现的。
42. 想要打造良好的职业基础，就要追随自己真正的求知欲上下求索，而不是盲目跟风眼下赚钱的热门行业。
43. 如果一件事物一开始让你兴致盎然，后来又让你觉得索然无味，那么它只是暂时分散了你的注意力，并不是你心智上真正的好奇所在。请继续寻找。
44. 无论是创业、健身还是恋爱、交友，我始终都认为生命的意义在于专注于事情本身，体验过程，享受当下。
45. 对一件事情的欲望越小，顾虑就越少，执念就越少，反而越会顺其自然，遵循内心。你会以自己擅长的方式，始终不渝地做下去，工作质量也会因此提高。
46. 不要追逐所谓的"热门"，而要追求自己真正感兴趣的事情。如果在追随好奇心和求知欲的过程中又满足了社会需求，你就能得到优厚的经济回报。
47. 如果社会可以培训你，那么总有一天，社会也可以编写代码，用计算机取代你。
48. 认真想一想，社会上还有哪些尚未得到满足的需求，而你怎样才能成为第一个提供相关产品或服务的人，并将其规模化。这才是赚钱真正的挑战。
49. 总体而言，杠杆有三种。第一种是劳动力杠杆，资本是第二种相对较好的杠杆形式。
50. 最后一种杠杆是最新出现的，也是普通人最触手可及的。这种杠杆就是"复制边际成本为零的产品"。其中包括书籍、媒体、电影、代码。在所有不需要他人许可就能使用的杠杆中，代码可以说是最强大的一种——只需要一台计算机就够了。
51. 编程、写书、录播客、发推特、拍视频这些事情不需要经过任何人的许可。由此可见，新杠杆就像一个均衡器，极大地缩小了人与人之间的差距，让社会变得更平等。
52. 靠出租自己的时间是永远无法致富的。
53. 无论处于人生的哪个阶段，努力的目标都是不断提高自己的独立性，而不是升职加薪。拥有独立性，为自己独特的产出成果负责（而不是像打工一样为投入的时间负责），这才是最理想的状态。
54. 对利用杠杆的劳动者而言，判断力的重要性远超投入时间的长短和工作的努力程度。
55. 任务的一大目标应该是掌控自己的时间。
56. 每周工作40小时是工业时代的产物。知识劳动者的时间安排与运动员如出一辙，有训练和冲刺的时间，也有休息和重新评估的时间。
57. 世界上的工作本质上分为两种：存在杠杆的工作和不存在杠杆的工作。
58. 投入和产出之所以脱节，是因为工具和杠杆的存在。一个职业的创造性越高，其投入与产出的不匹配性越高。而投入和产出高度相关的职业很难创造财富，从事这种职业也很难给自己带来财富。
59. 学会销售，学会构建。同时掌握这两种技能的人会势不可当。
60. 用头脑赚钱，而不是用时间赚钱。
61. 出售自己的技能、出租自己的时间，得到的报酬只能比最低工资略高一点儿。
62. 以领取月薪的打工者为起点，志存高远，不断提升目标，努力获得更多杠杆效应，承担更多责任，学习更多专长。将这些结合起来，再加上复利效应的神奇作用，假以时日，你就可以变得非常富有。
63. 不要做任何违法违纪的事情，任何事都不值得拿自己的自由和声誉去冒险。要避免一败涂地的灾难性损失。避免身败名裂也意味着不要做那些可能会威胁自身安全或健康的事情。你必须照顾好自己的身体。
64. 不要做可能会让你全盘皆输的事情。不要孤注一掷、铤而走险。相反，要把赌注押在那些胜算较大、能带来巨大利益的事情上。
65. 首席执行官的报酬之所以很高，就是因为杠杆效应。在判断力和能力上，毫厘之差都会有天壤之别。
66. 巴菲特之所以被称为"股神"，是因为他的可信度极高。他对自己的业务极为负责，一次又一次在公开场合做出正确的判断。他以高度正直著称，赢得了社会的充分信任，加上他判断力出色，所以人们敢在他身上押上不计其数的筹码。
67. 在杠杆时代，在自己的领域做到极致非常重要。
68. 普通人把时间浪费在短期思考上，浪费在毫无价值的繁重工作上。而巴菲特会用一年斟酌判断，然后用一天采取行动。他一天的行动可以影响未来几十年。
69. 我的个人财富也不是在关键的一年迅速累积起来的，而是积水成渊：持续创造更多选择、更多业务、更多投资，探索更多在我能力范围内的事情。
70. 我的个人财富也不是在关键的一年迅速累积起来的，而是积水成渊：持续创造更多选择、更多业务、更多投资，探索更多在我能力范围内的事情。
71. 在做决策时，你要把时间作为一个考虑因素。做这件事需要多长时间？假设一个东西需要花费你一小时车程才能拿到，如果你给自己设定的时薪是100美元，那么这一趟基本上等于花掉100美元，你还要亲自去拿吗？
72. 要从时间成本的角度做决策，如果做某件事外包的成本低于时薪，那就外包；如果不做的损失低于时薪，那就不做；如果花钱请人的成本低于时薪，那就花钱请人。甚至做饭也是同样的道理，你可能想吃健康的家常菜，但是如果可以外包，那就外包吧。
73. 大胆地为自己设定一个很高的时薪，并坚持执行。
74. 如果你内心鄙视财富创造，财富就会对你避而远之。
75. 与别人进行商业合作，如果你对对方有任何负面的想法或评价，他们就会感受到。人类与生俱来就能感知其他人内心深处的感受。因此，做人必须摆脱攀比心态。
76. 在商业世界里，大多数人在玩零和游戏，少数人在玩正和游戏，他们在人群中寻找志同道合者。
77. 金钱不能解决所有问题，但可以解决所有和金钱有关的问题。
78. 在人类进化史上，财富创造是近代才出现的活动，是一个正和游戏。而地位之争自古有之，是一个零和游戏。那些攻击财富创造的人往往只是为了追求地位。
79. 这就是为什么应该避免在生活中玩地位游戏，因为这个钩心斗角、损人利己的游戏会让人变得心态失衡、易怒好斗，你会一直以贬低对手、打败他人为己任，从而让自己和自己喜欢的人上位。
80. 玩愚蠢的游戏，就只能赢得愚蠢的奖品。
81. 最重要的是，要在重大决定上花更多时间。人生早期有三个重大决定：在哪里生活，和谁在一起，从事什么职业。
82. 居住的城市几乎可以完全决定一个人的生活轨迹，但我们很少花时间认真思考哪个城市更宜居。
83. 找到自己擅长的领域，然后用自己的技能去帮助他人：提供免费的产品或服务，主动向世界传递善意。好人终有好报。只要始终如一，假以时日，付出就一定能获得相应的回报。但不要计较自己付出了多少——一旦开始计较，耐心就会被消耗殆尽。
84. 曾有上司告诫我："你永远发不了大财。因为你的聪明显而易见、有目共睹，所以一直会有人给你提供'刚刚好'的工作机会，让你觉得弃之可惜。"
85. 我知道有些人从未想过自己创业。社会的普遍共识是，给别人打工才符合常理，才是明智的选择。但仔细想想，这种长久存在的观点究竟是如何产生的？这种想法本身就带有明显的等级色彩。
86. 我宁愿成为一个失败的创业者，也不愿成为一个从未尝试过创业的人。因为，即使是一个失败的创业者，也拥有独立打拼的技能。
87. 我学会了如何赚钱，因为钱是生活必需品。当赚钱的必要性消失后，我就不再关心钱的问题了。至少对我个人来说，工作是达到目的的一种手段。当然，赚钱也是达到目的的一种手段。但跟赚钱相比，我对解决问题更感兴趣。
88. 生活就是由一个又一个游戏组成的。一个人不断成长，从小到大玩上学游戏，玩社交游戏，玩赚钱游戏，玩地位游戏。至少对我而言，这些都是某种意义上的游戏，只是游戏的影响愈加深远。
89. 生命中最宝贵的是自由。
90. 退休就是不再为了想象中的明天而牺牲今天。当你能活在当下，内心充盈地度过每一天时，你就达到了退休的状态。
91. 如果你真的热爱一个事物，那就追随本心，努力找到利用它满足社会真实需求的切入点，利用杠杆效应扩大规模，以个人名义担起责任。
92. 生活中有哪些事情能像艺术创作那样只是以其本身为目的，而没有任何其他目的？我可以想到三个例子：毫无保留地爱，随心所欲地创造，无忧无虑地玩耍。
93. 人之所以永远不会感到满足，是因为欲望这个开关一旦被打开，就不会在某个具体数字面前自动关停，正所谓欲壑难填。所以，不要以为赚到某个数额的钱，人自然就会满足了、停手了。
94. 摆脱金钱贪念最好的办法就是，赚了钱之后不要升级自己的生活方式。
95. 赚到钱的人往往会自然而然地提高生活水准。假设你一次性赚到一大笔钱，而不是靠日积月累。此时你依然保持着原有的生活方式，还没来得及升级，你的金钱就会远远超出你的实际需求和欲望，这反而让你达到一种财务自由的状态。
96. 我把自由看得高于一切。我说的自由是多种多样的：想做什么就做什么的自由，不想做什么就不去做的自由，不受自我情绪或外界影响的自由，等等。自由是我最珍视的价值。
97. 我在硅谷见过的最成功的人往往在职业生涯早期就实现了突破，比如被提升为副总裁、董事或首席执行官，有些人转去创业也很快就实现了良好的发展。如果年轻时没有在职务上有所突破，职业生涯后期就很难后来居上。
98. 对刚刚开启职业生涯的人来说（甚至稍晚阶段的人也一样），最重要的资源是公司能给你带来的人脉资源。要思考一下自己会跟什么样的人共事，他们将来会如何发展。
99. 在获得财富的过程中，你要排除"运气"这个不可控因素。
100. 第一种运气是不期而遇的运气，一个人的好运完全源于他控制范围之外、意料之外的事情，比如获得意外之财、遇到贵人等等。第二种运气源于坚持不懈、孜孜不倦、屡败屡战、不断尝试，是靠个人主动创造机会获得的。你释放了大量能量，使出浑身解数，移山倒海，一往无前。就好像在做科学实验，把不同的试剂混合在一起，看看能产生什么结果。因为你不懈地努力，不停地奋进，不断地释放能量、积蓄力量，所以好运找到了你。第三种获得好运的方式就是善于发现好运。如果你在某个领域技艺娴熟、经验丰富，那么当这个领域实现了意外突破时，你就会在第一时间洞悉，这时，其他不熟悉这个领域的人会无动于衷。这就是增加对好运的敏感性，幸运会眷顾有准备的大脑。第四种运气是最奇妙、最难得的一种，那就是打造独特的个性、独特的品牌、独特的心态，让运气找到你。
101. 获得好运的方法：·希望好运不期而至。·不停地折腾，直到撞上大运。·做好心理准备，对别人错过的机会保持敏感。·把你所做的事情做到极致。精益求精，直到名副其实。让机会自动找到你，让运气成为必然。
102. 获得好运的方法：·希望好运不期而至。·不停地折腾，直到撞上大运。·做好心理准备，对别人错过的机会保持敏感。·把你所做的事情做到极致。精益求精，直到名副其实。让机会自动找到你，让运气成为必然。
103. 再进一步，如果你值得信赖，做事靠谱，诚信正直，目光长远，那么其他人在跟陌生人合作时，保险起见，他们会选择通过你来达成交易。他们会主动找到你，分给你一部分好处，仅仅因为你已经建立了诚信可靠的声誉。
104. "做一个创造者，创造出人们想要的有趣的东西。展示你的技能，练习你的技能，最终会有合适的人找到你。"
105. 你的失德会深刻影响你的心智模式，你的过往对你是清晰可见的。如果你有太多道德缺陷，你就不会尊重自己。人活在这个世界上最糟糕的结果就是没有自尊。如果连你都不爱自己，那么还有谁会爱你呢？
106. 随着年龄和阅历的增长，我逐渐发现，只要有足够的耐心，优秀的人就会成就一番大事业。
107. 成功需要时间。即使万事俱备——你已经把成功所需的各个要素收入囊中，需要投入的时间也具有不确定性。而如果一直在掐算时间，在成功真正到来之前，你的耐心就会被消磨殆尽。
108. 对自己热爱的事物孜孜不倦，乐此不疲，不断精进，日积月累。不要去计算自己投入的时间和精力，因为一旦开始计算，你就会失去耐心。
109. 亲身实践是获得真才实学的唯一途径。
110. 江山易改，本性难移。所谓"性格决定命运"，就是一个人不断重复自己的行为模式，好的坏的、优点缺点，最终会得到与自己的行为相对应的结果。
111. 始终主动付出、不断奉献，不要斤斤计较、患得患失。
112. 在物质世界里，金钱不能给人带来快乐，不能解决人的健康问题，不能让所有家庭变得美满和睦，不能让人免受情绪波动的困扰。但金钱可以买到自由，可以解决许多外在的问题。所以，赚钱是一个合情合理的奋斗目标。
113. 为新的社会需求提供解决方案。
      `,
      en: `
# Notes on The Almanack of Naval Ravikant

## Chapter 1: Accumulating Wealth
1. Making money is not something you can just decide to do; it is a skill that needs to be learned.
2. Making money has no necessary connection to how hard you work.
3. To acquire wealth, you must know what to do, with whom, and when. Compared to working hard, understanding and thinking are more important. Of course, hard work is very important, but you must choose the right approach.
4. Suppose one day I fail in business, penniless. If I were randomly dropped onto the streets of any English-speaking country, I believe I would become wealthy again in 5 or 10 years, because I have mastered the skill of "making money," and this skill can be learned by anyone.
5. If you don't know what you should do yet, you need to figure out this problem first. Before that, don't exert yourself blindly.
6. "Productize yourself" is hard. That's why I say "productize yourself" takes decades—not decades to execute, but to spend most of your time thinking: what unique value can I provide?
7. Money is our way of transferring wealth. Money is society's credit symbol, with the ability to call upon others' time.
8. Wealth is assets that can earn money for you even while you sleep. Wealth can be factories and robots that produce. Wealth is computer programs that serve customers day and night. Wealth can also be money in banks invested in other assets or businesses.
9. My definition of wealth is businesses and assets that bring in income while you sleep.
10. To make money in society, you must provide something that society needs but cannot obtain. If society has already created the needed products and services, you are not needed.
11. If you want to become wealthy, you must figure out what you can provide to society that is needed but unobtainable, and providing these things should be easy and natural for you, within your technical and ability range.
12. The next step is to think about how to scale, because providing just one product or service is far from enough; you must provide thousands, even hundreds of thousands, millions, billions, ideally one for everyone.
13. Find your talent, accumulate expertise.
14. Expertise cannot be taught, but it can be learned.
15. In the matter of "being yourself," no one can surpass you. In fact, most of life is spent searching, searching for those who need you most, searching for things that need you most.
16. But what is my unique strength? Where did I ultimately spend my time? Looking back, I find that most of what I do revolves around making money, dealing with technology, dealing with people, selling products, discussing theories, promoting ideas.
17. Some people find sales difficult and want to know how to be articulate and good at selling. In fact, if you are not yet good at sales at this stage, or if you really have no interest in sales, then the sales industry may not be suitable for you; you should focus on what you truly love.
18. Through the internet, everyone can find their audience. As long as you express yourself uniquely online, you have the opportunity to spread happiness, accumulate wealth, create products, and start businesses.
19. "Only by blazing a new trail can you avoid competition." In essence, competition is imitation. Competing with others means you are doing the same things as others. But everyone is unique; don't imitate others.
20. The best work has nothing to do with appointments or degrees. The best work is creative expression of lifelong learners in the free market.
21. In life, basic arithmetic skills are more important than calculus. Similarly, being able to express yourself clearly with simple English vocabulary is more important than being able to write poetry, having a rich vocabulary, or speaking 7 different languages.
22. A person can only master one or two things, and these one or two things are usually what you are obsessed with.
23. All returns in life, whether wealth, relationships, or knowledge, come from compound interest.
24. In business relationships, with mutual trust, all routine negotiations can be simplified, because you know cooperation will surely succeed.
25. The starting point doesn't matter; behavior itself matters. Therefore, adhering to moral standards is not easy.
26. 99% of effort will be wasted.
27. At least from the perspective of goal-oriented realistic society, only 1% of the effort you put in at school gets rewarded.
28. You should, after careful consideration, clearly recognize that you need to find the part you can fully dedicate yourself to from most things (relationships, work, learning), to fully obtain the compound interest effect.
29. Putting energy into useless things is wasting time and wasting brainpower.
30. Strive to find the 1% that won't be wasted. This 1% is meaningful to you and worth pursuing for the rest of your life. Once found, you must be single-minded and go all out.
31. Be brave enough to take business risks in your personal name. Society will reward you based on responsibility, equity, and leverage effects.
32. Acquiring wealth requires leverage. Leverage can come from labor, capital, code, or media.
33. Those who can take the risk of failure in public in their personal name will gain great momentum.
34. When you publicly express your views in your personal name, you are taking risks for certain views and practices. At the same time, you will also be rewarded and benefit from it.
35. Failure is really not that terrible, so we should all be brave enough to take more responsibility.
36. Without equity, there is no path to financial freedom.
37. If you own business equity, you can earn passive income—even when you're on vacation, the business is making money for you.
38. If you own business equity, you can earn passive income—even when you're on vacation, the business is making money for you.
39. In essence, working for someone else is working for others. While business owners take risks and responsibilities, they also own intellectual property and brand effects. Therefore, the compensation they pay you must be lower than the value you create.
40. Work hard until you have the ability to own business equity. You can buy company stock and become a minority shareholder, or start your own business. In short, find ways to own business ownership; this is really important.
41. True wealth is created by starting companies or through investment. Investing in companies is also buying business equity. These are all paths to acquiring wealth. In short, true financial freedom cannot be achieved by simply investing a lot of time.
42. To build a good career foundation, follow your true curiosity and explore, rather than blindly following the hot industries that make money right now.
43. If something interests you at first but then becomes boring, it just temporarily distracted your attention; it's not where your true curiosity lies. Please keep searching.
44. Whether starting a business, exercising, dating, or making friends, I always believe that the meaning of life lies in focusing on the thing itself, experiencing the process, and enjoying the present.
45. The less desire you have for something, the fewer concerns you have, the less obsession you have, and the more naturally you follow your heart. You will do it consistently in your own way, and work quality will improve.
46. Don't chase so-called "hot topics," but pursue what you're truly interested in. If while following curiosity and thirst for knowledge you also meet social needs, you can get generous economic returns.
47. If society can train you, then one day society can also write code and replace you with computers.
48. Think seriously: what unmet needs are there in society, and how can you be the first to provide related products or services and scale them? This is the real challenge of making money.
49. Overall, there are three types of leverage. The first is labor leverage, and capital is the second relatively better form of leverage.
50. The last type of leverage is the newest and most accessible to ordinary people. This type of leverage is "products with zero marginal cost of replication." This includes books, media, movies, code. Among all levers that don't require others' permission, code is arguably the most powerful—you only need a computer.
51. Programming, writing books, recording podcasts, posting tweets, shooting videos—these things don't require anyone's permission. Thus, new levers act as equalizers, greatly narrowing the gap between people and making society more equal.
52. You can never get rich by renting out your time.
53. Whatever stage of life you're in, the goal of effort is to continuously improve your independence, not to get promoted or get a raise. Having independence, being responsible for your unique output (rather than being responsible for invested time like an employee), this is the ideal state.
54. For laborers using leverage, judgment is far more important than the length of time invested and the effort of work.
55. One major goal of tasks should be to master your own time.
56. Working 40 hours a week is a product of the industrial age. Knowledge workers' time schedules are like athletes': there are times for training and sprinting, and times for rest and re-evaluation.
57. Work in the world is essentially divided into two types: work with leverage and work without leverage.
58. The reason input and output are disconnected is because of tools and leverage. The more creative a profession is, the greater the mismatch between input and output. Professions where input and output are highly correlated are hard to create wealth, and engaging in such professions is also hard to bring wealth to yourself.
59. Learn to sell, learn to build. People who master both skills will be unstoppable.
60. Make money with your brain, not with your time.
61. Selling your skills and renting out your time will only get you slightly above minimum wage.
62. Start as a salaried employee, aim high, continuously improve your goals, strive to get more leverage effects, take more responsibility, learn more expertise. Combine these, add the magical effect of compound interest, and given time, you can become very wealthy.
63. Don't do anything illegal or against discipline; nothing is worth risking your freedom and reputation. Avoid catastrophic losses that ruin everything. Avoiding ruin also means not doing things that might threaten your own safety or health. You must take good care of your body.
64. Don't do things that could make you lose everything. Don't go all in, take desperate risks. Instead, bet on things with high odds of success that can bring huge benefits.
65. The reason CEOs are paid so well is because of the leverage effect. In terms of judgment and ability, a tiny difference makes a huge difference.
66. The reason Buffett is called the "stock god" is because his credibility is extremely high. He is extremely responsible for his business, making correct judgments in public again and again. He is known for high integrity, winning society's full trust, plus his excellent judgment, so people dare to bet countless chips on him.
67. In the age of leverage, it's very important to be extreme in your field.
68. Ordinary people waste time on short-term thinking, wasting it on useless heavy work. Buffett spends a year deliberating and judging, then takes action in a day. His one day of action can influence decades into the future.
69. My personal wealth wasn't accumulated quickly in a key year either; it accumulated drop by drop: continuously creating more choices, more businesses, more investments, exploring more things within my ability.
70. My personal wealth wasn't accumulated quickly in a key year either; it accumulated drop by drop: continuously creating more choices, more businesses, more investments, exploring more things within my ability.
71. When making decisions, you must consider time as a factor. How long does it take to do this? Suppose something requires a one-hour drive to get; if you set your hourly rate at $100, then this trip basically costs $100—do you still want to go get it yourself?
72. Make decisions from the perspective of time cost. If outsourcing something costs less than your hourly rate, outsource it; if not doing it costs less than your hourly rate, don't do it; if paying someone costs less than your hourly rate, pay someone. Even cooking is the same principle; you might want to eat healthy home-cooked food, but if you can outsource it, outsource it.
73. Boldly set a high hourly rate for yourself and stick to it.
74. If you despise wealth creation in your heart, wealth will avoid you.
75. When doing business with others, if you have any negative thoughts or evaluations about them, they will feel it. Humans can innately perceive the deep feelings of others. Therefore, in life, you must get rid of the comparison mentality.
76. In the business world, most people play zero-sum games, while a few play positive-sum games, looking for like-minded people in the crowd.
77. Money can't solve all problems, but it can solve all money-related problems.
78. In human evolutionary history, wealth creation is a recent activity, a positive-sum game. Status struggles have existed since ancient times and are a zero-sum game. Those who attack wealth creation are often just pursuing status.
79. This is why you should avoid playing status games in life, because this scheming, self-interested game makes people mentally unbalanced, irritable and aggressive. You will always aim to belittle opponents and defeat others, thereby letting yourself and those you like rise.
80. If you play stupid games, you can only win stupid prizes.
81. Most importantly, spend more time on major decisions. There are three major decisions early in life: where to live, who to be with, and what career to pursue.
82. The city you live in can almost completely determine a person's life trajectory, but we rarely spend time seriously thinking about which city is more livable.
83. Find what you're good at, then use your skills to help others: provide free products or services, actively spread kindness to the world. Good will be rewarded. As long as you're consistent, given time, your efforts will surely be rewarded accordingly. But don't keep track of how much you give—once you start keeping track, your patience will be exhausted.
84. A boss once warned me: "You'll never make big money. Because your intelligence is obvious and obvious to everyone, so people will always offer you 'just right' job opportunities that make you feel reluctant to give up."
85. I know some people have never thought about starting their own business. The social consensus is that working for others is sensible and wise. But think carefully: how did this long-standing view come about? This idea itself carries obvious hierarchical colors.
86. I'd rather be a failed entrepreneur than someone who never tried entrepreneurship. Because even a failed entrepreneur has the skills to work independently.
87. I learned how to make money because money is a life necessity. When the necessity of making money disappears, I no longer care about money. At least for me personally, work is a means to an end. Of course, making money is also a means to an end. But compared to making money, I'm more interested in solving problems.
88. Life consists of one game after another. A person grows up continuously, playing school games, social games, money-making games, status games from childhood to adulthood. At least for me, these are all games in some sense, just that the influence of games becomes more profound.
89. The most precious thing in life is freedom.
90. Retirement means no longer sacrificing today for an imagined tomorrow. When you can live in the present and spend each day with inner fullness, you have reached the state of retirement.
91. If you truly love something, follow your heart, strive to find the entry point where you can use it to meet real social needs, use leverage to scale, and take responsibility in your personal name.
92. What things in life are like artistic creation, existing only for themselves without any other purpose? I can think of three examples: loving without reservation, creating as you please, playing without worry.
93. The reason humans never feel satisfied is that once the desire switch is turned on, it won't automatically turn off at a specific number, as the saying goes: desires are endless. So don't think that once you earn a certain amount of money, you will naturally be satisfied and stop.
94. The best way to get rid of money greed is: don't upgrade your lifestyle after making money.
95. People who make money often naturally improve their living standards. Suppose you earn a large sum of money at once, rather than accumulating over time. At this point, you still maintain your original lifestyle and haven't had time to upgrade yet; your money will far exceed your actual needs and desires, which instead makes you reach a state of financial freedom.
96. I value freedom above all else. The freedom I speak of is diverse: freedom to do whatever you want, freedom not to do what you don't want, freedom not to be influenced by your own emotions or the outside world, etc. Freedom is the value I cherish most.
97. The most successful people I've seen in Silicon Valley often achieve breakthroughs early in their careers, such as being promoted to vice president, director, or CEO. Some switch to entrepreneurship and quickly achieve good development. If you don't make breakthroughs in your position when young, it's hard to catch up later in your career.
98. For those just starting their careers (and even at later stages), the most important resource is the network resources the company can bring you. Think about what kind of people you'll work with and how they'll develop in the future.
99. In the process of acquiring wealth, you must exclude the uncontrollable factor of "luck."
100. The first type of luck is unexpected luck; a person's good luck comes entirely from things outside their control and unexpected, such as getting unexpected wealth, meeting noble people, etc. The second type of luck comes from persistence, diligence, repeated failures, continuous attempts, obtained by personally creating opportunities. You release a lot of energy, use all your skills, move mountains and seas, press forward. It's like doing scientific experiments, mixing different reagents to see what results can be produced. Because of your unremitting efforts, continuous progress, continuous release of energy and accumulation of strength, good luck finds you. The third way to get good luck is to be good at discovering good luck. If you are skilled and experienced in a certain field, then when that field achieves an unexpected breakthrough, you will be the first to realize it. At this time, others unfamiliar with this field will be indifferent. This is increasing sensitivity to good luck; luck favors prepared minds. The fourth type of luck is the most wonderful and rare: creating a unique personality, unique brand, unique mindset that lets luck find you.
101. Ways to get good luck: ·Hope for unexpected good luck. ·Keep trying until you hit big luck. ·Be mentally prepared and stay sensitive to opportunities others miss. ·Do what you do to the extreme. Strive for perfection until you are worthy of the name. Let opportunities find you automatically, make luck inevitable.
102. Ways to get good luck: ·Hope for unexpected good luck. ·Keep trying until you hit big luck. ·Be mentally prepared and stay sensitive to opportunities others miss. ·Do what you do to the extreme. Strive for perfection until you are worthy of the name. Let opportunities find you automatically, make luck inevitable.
103. Furthermore, if you are trustworthy, reliable, honest and upright, and far-sighted, then when others cooperate with strangers, for safety, they will choose to conduct transactions through you. They will actively find you and give you a portion of the benefits, just because you have established a reputation for honesty and reliability.
104. "Be a creator, create interesting things that people want. Show your skills, practice your skills, and eventually the right person will find you."
105. Your moral failings will profoundly affect your mental model; your past is clearly visible to you. If you have too many moral defects, you won't respect yourself. The worst result of living in this world is having no self-esteem. If even you don't love yourself, who else will love you?
106. With age and experience, I gradually discovered that with enough patience, excellent people will achieve great things.
107. Success takes time. Even when everything is ready—you've gathered all the elements needed for success—the time required is uncertain. And if you keep calculating time, your patience will be exhausted before success truly arrives.
108. Be tireless and enjoy what you love, continuously improve, accumulate over time. Don't calculate the time and energy you invest, because once you start calculating, you'll lose patience.
109. Personal practice is the only way to acquire true knowledge.
110. Rivers and mountains are easy to change, but nature is hard to move. The so-called "character determines destiny" means a person constantly repeats their behavioral patterns, good and bad, strengths and weaknesses, and ultimately gets results corresponding to their behavior.
111. Always give actively and continuously contribute, don't haggle and worry about gains and losses.
112. In the material world, money cannot bring happiness, cannot solve people's health problems, cannot make all families harmonious, cannot make people immune to emotional fluctuations. But money can buy freedom and solve many external problems. So making money is a reasonable goal to strive for.
113. Provide solutions for new social needs.
      `,
    },
  },
  {
    id: 'note-frontend-1',
    topicId: 'frontend',
    date: '2026-04-09',
    kind: { zh: '学习笔记', en: 'Learning note' },
    title: { zh: '嵌入式学习笔记（示例）', en: 'Embedded learning notes (example)' },
    summary: {
      zh: '记录你学到的知识点、常见坑，以及一段最小可运行示例。',
      en: 'Capture what you learned, common pitfalls, and a minimal working example.',
    },
    content: {
      zh: `
# 嵌入式学习笔记

## 核心知识点
- 掌握寄存器操作和内存映射。
- 理解中断处理机制和低功耗设计。

## 常见坑
- 忽略看门狗复位。
- 堆栈溢出导致系统崩溃。

## 示例代码
\`\`\`c
void main() {
  // 初始化
  SystemInit();
  while(1) {
    // 主循环
  }
}
\`\`\`
      `,
      en: `
# Embedded Learning Notes

## Key Concepts
- Master register operations and memory mapping.
- Understand interrupt handling and low-power design.

## Common Pitfalls
- Ignoring watchdog reset.
- Stack overflow leading to system crashes.

## Example Code
\`\`\`c
void main() {
  // Initialization
  SystemInit();
  while(1) {
    // Main loop
  }
}
\`\`\`
      `,
    },
  },
  {
    id: 'note-reading-2',
    topicId: 'reading',
    date: '2026-04-11',
    kind: { zh: '读书笔记', en: 'Reading note' },
    title: { zh: '《穷查理宝典》读书笔记', en: 'Poor Charlie\'s Almanack notes' },
    summary: {
      zh: '查理·芒格说："如果你只有一把锤子，你会发现所有问题都像钉子。"',
      en: 'Charlie Munger\'s wisdom: worldly wisdom, mental models, and multidisciplinary learning.',
    },
    content: {
      zh: `
# 《穷查理宝典》读书笔记

## 摘抄
- 如果我要有拥有一种观点，如果我不能够比全世界最聪明、最有能力，最有资格反驳这个观点的人更能够证否自己，我就不配拥有这个观点。
- 三个人也能保守秘密，前提是其中俩个已经死掉。
- 我只想找到将来我会死在什么地方，这样我就不去那儿了。如果要明白人生如何得到幸福，查理首先是研究人生如何才能变得痛苦；要研究企业如何做强做大，查理首先研究企业是如何衰败的；大部分人更关心如何在股市投资上成功，查理最关心的是为什么在股市投资上大部分人都失败了。
- 要学习所有学科中真正重要的理论，并在此基础上形成所谓的"普世智慧"，以此为利器去研究商业投资领域的的重要问题。
- 空麻袋立不起来。
- 讲价最怕急需时。
- 不把事管好，就要被事管。
- 凡是敌人，均须重视。
- 人自爱，必无敌。
- 获取普世的智慧，并相应地调整你的行为，即使你的特立独行让你在人群中不受欢迎，那就随他们去吧。
- 一个人的成功并不是偶然，时机固然重要，但人的内在品质更重要。
- 人家不把等待看作等待，在做自己的事情，顺便等待。
- 我一辈子想要的就是融入生活，而不希望自己被孤立。
- 我手里只要有一本书，就不会觉得浪费时间。
- 他一个人的旅行，无论公务私务都搭乘经济舱，但与太太和家人一起旅行时，查理便会搭乘自己的私人飞机。他解释说：太太一辈子为我抚育这么多孩子，付出甚多，身体又不好，我一定要照顾好她。
- 查理一旦确定了做一件事，他可以去做一辈子。
- 有人问查理如何才能找到一个优秀的配偶，查理说最好的方式就是让自己配得上她，因为优秀配偶都不是傻瓜。
- 《大学》曰：正心，修身，齐家，治国，平天下。
- 无论顺境、逆境，都保持客观积极的心态。

## 普世智慧
- 掌握多种思维模型。如果你只有一把锤子，你会发现所有问题都像钉子。
- 逆向思维：反过来想，总是反过来想。
- 坚持凡事看长远。

## 投资原则
- 待在你的"能力圈"内。
- 投资就是寻找价格低于价值的机会。

## 总结
通过跨学科学习，构建一套完整的思维模型，才能在复杂的世界中做出正确的决策。
      `,
      en: `
# Notes on Poor Charlie's Almanack

## Excerpts
- If I were to have a view, if I cannot be more capable than the smartest, most capable, most qualified person in the world to refute this view, I am not worthy of holding this view.
- Three people can also keep a secret, provided that two of them are already dead.
- I just want to find where I will die in the future, so I won't go there. To understand how to get happiness in life, Charlie first studies how life can become painful; to study how to make enterprises strong and big, Charlie first studies how enterprises fail; most people care more about how to succeed in stock market investment, while Charlie cares most about why most people fail in stock market investment.
- To learn the truly important theories in all disciplines, and on this basis form the so-called "worldly wisdom," using this as a sharp tool to study important issues in the field of commercial investment.
- An empty sack cannot stand up.
- Bargaining is most afraid when urgently needed.
- If you don't manage things well, you will be managed by things.
- Whoever is an enemy must be taken seriously.
- If you love yourself, you will be invincible.
- Acquire worldly wisdom and adjust your behavior accordingly, even if your maverick makes you unpopular in the crowd, then let them go.
- A person's success is not accidental; timing is certainly important, but a person's inner qualities are more important.
- Others don't see waiting as waiting; they do their own things while waiting.
- What I want all my life is to integrate into life, and I don't want to be isolated.
- As long as I have a book in my hand, I won't feel like I'm wasting time.
- When he travels alone, whether for official or private business, he takes economy class, but when traveling with his wife and family, Charlie will take his private plane. He explains: My wife has raised so many children for me all her life, giving a lot, and her health is not good, so I must take good care of her.
- Once Charlie decides to do something, he can do it for a lifetime.
- Someone asked Charlie how to find an excellent spouse, and Charlie said the best way is to make yourself worthy of her, because excellent spouses are not fools.
- "The Great Learning" says: Rectify the mind, cultivate oneself, regulate the family, govern the country, bring peace to the world.
- Whether in favorable or adverse circumstances, maintain an objective and positive attitude.

## Worldly Wisdom
- Master multiple mental models. If you only have a hammer, you will find that all problems look like nails.
- Inversion: Invert, always invert.
- Always look at things from a long-term perspective.

## Investment Principles
- Stay within your "circle of competence."
- Investing is finding opportunities where price is below value.

## Conclusion
Build a complete set of mental models through multidisciplinary learning to make correct decisions in a complex world.
      `,
    },
  },
]

export default function NotesPage() {
  const { lang, t } = useI18n()
  const [activeTopicId, setActiveTopicId] = useState<string>('all')

  const filtered = useMemo(() => {
    if (activeTopicId === 'all') return notes
    return notes.filter((n) => n.topicId === activeTopicId)
  }, [activeTopicId])

  return (
    <div className="max-w-6xl mx-auto px-4 space-y-6">
      <header className="text-center">
        <h1 className="art-title text-3xl font-semibold tracking-tight md:text-4xl">
          {t('notes.title')}
        </h1>
        <p className="mt-2 max-w-2xl mx-auto text-[color:var(--muted)]">{t('notes.subtitle')}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-[220px_1fr]">
        <aside className="md:sticky md:top-6 md:self-start">
          <div className="glass-card rounded-3xl p-4">
            <div className="text-sm font-medium text-[color:var(--ink)]">{t('notes.topics')}</div>
            <div className="mt-3 grid gap-1">
              <button
                type="button"
                onClick={() => setActiveTopicId('all')}
                className={`w-full rounded-xl px-3 py-2 text-left text-sm transition hover:bg-white/10 ${
                  activeTopicId === 'all'
                    ? 'bg-white/10 text-[color:var(--ink)]'
                    : 'text-[color:var(--muted)]'
                }`}
              >
                {t('notes.all')}
              </button>

              {topics.map((tp) => (
                <button
                  key={tp.id}
                  type="button"
                  onClick={() => setActiveTopicId(tp.id)}
                  className={`w-full rounded-xl px-3 py-2 text-left text-sm transition hover:bg-white/10 ${
                    activeTopicId === tp.id
                      ? 'bg-white/10 text-[color:var(--ink)]'
                      : 'text-[color:var(--muted)]'
                  }`}
                >
                  {lang === 'zh' ? tp.zh : tp.en}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <main className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.length > 0 ? (
            filtered.map((note) => (
              <Link
                key={note.id}
                to={`/notes/${note.id}`}
                className="glass-card group flex flex-col rounded-3xl p-5 transition hover:-translate-y-0.5 hover:border-white/20"
              >
                {note.cover && (
                  <div className="mb-4 overflow-hidden rounded-xl">
                    <img 
                      src={note.cover} 
                      alt={lang === 'zh' ? note.title.zh : note.title.en}
                      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[color:var(--muted)]">
                  <span>{lang === 'zh' ? note.kind.zh : note.kind.en}</span>
                  <span>{note.date}</span>
                </div>
                <h3 className="art-title mt-3 text-base font-semibold text-[color:var(--ink)] group-hover:text-white transition-colors">
                  {lang === 'zh' ? note.title.zh : note.title.en}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[color:var(--muted)] line-clamp-3">
                  {lang === 'zh' ? note.summary.zh : note.summary.en}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span>{t('blog.readMore')}</span>
                  <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 stroke-current">
                    <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-sm text-[color:var(--muted)]">
              {t('notes.empty')}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
