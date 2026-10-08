// 由 build_site.py 从 source.xlsx 自动生成，请勿手改
window.LOBO = {
 "meta": {
  "sourceSheets": [
   "异想体推荐表",
   "加班计算器",
   "(备份用误点)"
  ],
  "count": 84,
  "builtAt": "",
  "legends": {
   "D": "管理推荐度表示是否推荐主管<长期收容>这个异想体。\n\n高表示该异想体对主管有一定的帮助，且管理难度不高。\n中表示在主管中后期，没什么威胁的异想体。\n低表示即便在中后期，也需要主管耗费精力着重处理的异想体。\n极低为白夜专属，用来警示新人别选",
   "E": "武器推荐中的优良差仅为同级中的比较，同级优>良>差。\n等级高于推荐度，差A>优W，差W>优H，差H>优T。\n极差一般可以被下位等级的优取代，比如优H>极差W。\n极优一般表示有一定功能性的武器。\n\nZ~H级武器主要推荐攻击距离远，抬手速度快的武器。\nW,A级武器主要考虑特殊能力和dps。",
   "F": "防具我这里参考价值并不高，\n护甲的差异也不像武器那么大，\n抗性标出来了，可以自行根据性选择，\n通常情况下，开发数量越少的护甲越强。\n\n我的具体分级标准可以点击本单元格查看批注\n"
  },
  "header": [
   "异想体编号",
   "异想体名称",
   "危险等级",
   "管理推荐度",
   "EGO武器推荐度",
   "EGO防具推荐度",
   "镇压任务小评"
  ],
  "source": {
   "author": "掉落的银杏",
   "sheet": "https://docs.qq.com/sheet/DR0tDUnZmem5EeUdI?tab=BB08J2",
   "wiki": "https://lobotomycorp.fandom.com/zh/wiki/脑叶公司_Wiki"
  }
 },
 "items": [
  {
   "row": 3,
   "id": "F-01-02",
   "name": "焦化少女",
   "danger": "TETH",
   "prefix": "F",
   "mgmtGrades": [
    "中",
    "高"
   ],
   "mgmtGrade": "高",
   "mgmtNote": "要求工作高，出逃稍微有点麻烦",
   "weaponText": "良(T) 【远(15)】\nDPS：5.0  打黄黎明很好用",
   "weaponGrades": [
    "良"
   ],
   "weaponGrade": "良",
   "weaponTypes": [
    "T"
   ],
   "weaponType": "T",
   "rangeLabel": "远",
   "rangeValue": 15,
   "weaponTail": "",
   "weaponDps": 5.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：5.0  打黄黎明很好用",
   "armorText": "良(T)\n0.6 1.0 1.2 2.0 单红抗甲，前期比较适用",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "T"
   ],
   "armorType": "T",
   "armorResist": [
    0.6,
    1.0,
    1.2,
    2.0
   ],
   "armorNote": "0.6 1.0 1.2 2.0 单红抗甲，前期比较适用",
   "suppressText": "可镇压\n容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压",
   "search": "f-01-02 焦化少女 teth 中\n要求工作高，出逃稍微有点麻烦 良(t) 【远(15)】\ndps：5.0  打黄黎明很好用 良(t)\n0.6 1.0 1.2 2.0 单红抗甲，前期比较适用 可镇压\n容易镇压 红 red 2 teth 容易 可镇压\n容易镇压",
   "wiki": {
    "id": "F-01-02",
    "title": "F-01-02 焦化少女",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/F-01-02_%E7%84%A6%E5%8C%96%E5%B0%91%E5%A5%B3",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "如果焦化少女标记的是员工，则最好的镇压方式是把被标记的员工尽可能拉离焦化少女，让其余员工前去镇压。\n\n如果焦化少女标记的是部门内的文职，由于文职的移动路径不可控，最好的镇压方式则是放着它不管，把部门内的员工拉离部门，等它把被标记的文职炸飞之后再让员工归位。\n\n在前中期装备不是特别优秀时，焦化少女的300点 伤害对主管的员工来说是致命的，请主管在收到它的出逃提示后尽量对其多加注意。",
    "toolText": null,
    "ok": true,
    "level": "TETH",
    "tool": null,
    "dmgType": "红",
    "dmgTypeRaw": "red",
    "dmgStat": "2-4",
    "counter": "2",
    "maxPeBox": 12.0,
    "mood": {
     "优": "8-12",
     "良": "5-7",
     "差": "0-4"
    },
    "workSpeed": 0.33,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 0.5,
     "white": 2.0,
     "black": 1.0,
     "pale": 2.0
    },
    "resistWord": {
     "red": "抗性较高",
     "white": "抗性极低",
     "black": "抗性一般",
     "pale": "抗性极低"
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "高",
      "高",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "repression": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "40%",
      "40%",
      "40%",
      "40%",
      "40%"
     ],
     "insight": [
      "60%",
      "60%",
      "50%",
      "50%",
      "50%"
     ],
     "attachment": [
      "30%",
      "15%",
      "0%",
      "-40%",
      "-50%"
     ],
     "repression": [
      "50%",
      "50%",
      "40%",
      "40%",
      "40%"
     ]
    },
    "isTool": false
   },
   "dmgType": "红",
   "counter": "2",
   "isTool": false,
   "type": "TETH"
  },
  {
   "row": 5,
   "id": "O-03-03",
   "name": "一罪与百善",
   "danger": "ZAYIN",
   "prefix": "O",
   "mgmtGrades": [
    "论外"
   ],
   "mgmtGrade": "论外",
   "mgmtNote": "day1必选",
   "weaponText": "良(Z) 【近(3)】\nDPS：3.0  z级尽早淘汰",
   "weaponGrades": [
    "良"
   ],
   "weaponGrade": "良",
   "weaponTypes": [
    "Z"
   ],
   "weaponType": "Z",
   "rangeLabel": "近",
   "rangeValue": 3,
   "weaponTail": "",
   "weaponDps": 3.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：3.0  z级尽早淘汰",
   "armorText": "良(Z)\n0.9 0.8 0.9 2.0 前期过度用",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "Z"
   ],
   "armorType": "Z",
   "armorResist": [
    0.9,
    0.8,
    0.9,
    2.0
   ],
   "armorNote": "0.9 0.8 0.9 2.0 前期过度用",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "o-03-03 一罪与百善 zayin 论外\nday1必选 良(z) 【近(3)】\ndps：3.0  z级尽早淘汰 良(z)\n0.9 0.8 0.9 2.0 前期过度用  白 white x zayin 未填",
   "wiki": {
    "id": "O-03-03",
    "title": "O-03-03 一罪与百善",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-03-03_%E4%B8%80%E7%BD%AA%E4%B8%8E%E7%99%BE%E5%96%84",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "ZAYIN",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "1-2",
    "counter": "X",
    "maxPeBox": 10.0,
    "mood": {
     "优": "8-10",
     "良": "4-7",
     "差": "0-3"
    },
    "workSpeed": 0.3,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "低",
      "低",
      "低"
     ],
     "insight": [
      "高",
      "高",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "高",
      "高",
      "高",
      "高",
      "高"
     ],
     "repression": [
      "一般",
      "一般",
      "低",
      "低",
      "低"
     ]
    },
    "traitStats": {
     "instinct": [
      "50%",
      "40%",
      "30%",
      "30%",
      "30%"
     ],
     "insight": [
      "70%",
      "70%",
      "50%",
      "50%",
      "50%"
     ],
     "attachment": [
      "70%",
      "70%",
      "70%",
      "70%",
      "70%"
     ],
     "repression": [
      "50%",
      "40%",
      "30%",
      "30%",
      "30%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "X",
   "isTool": false,
   "type": "ZAYIN"
  },
  {
   "row": 7,
   "id": "O-01-04",
   "name": "憎恶女王",
   "danger": "WAW",
   "prefix": "O",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "反文保协，机制难搞，容易出逃\n且出逃到处瞬移难镇压",
   "weaponText": "极优(W) 【极远(80)】\nDPS：7.83  特殊机制\n混伤，能奶，远程",
   "weaponGrades": [
    "极优"
   ],
   "weaponGrade": "极优",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "极远",
   "rangeValue": 80,
   "weaponTail": "",
   "weaponDps": 7.83,
   "weaponDpsMax": null,
   "weaponNote": "DPS：7.83  特殊机制\n混伤，能奶，远程",
   "armorText": "良(W)\n0.7 0.8 0.4 2.0\n紫抗甲，三色都不弱注意但蓝抗低于W标准",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "W"
   ],
   "armorType": "W",
   "armorResist": [
    0.7,
    0.8,
    0.4,
    2.0
   ],
   "armorNote": "0.7 0.8 0.4 2.0\n紫抗甲，三色都不弱注意但蓝抗低于W标准",
   "suppressText": "可镇压\n不容易镇压",
   "canSuppress": true,
   "suppressGrade": "较难",
   "suppressNote": "不容易镇压",
   "search": "o-01-04 憎恶女王 waw 低\n反文保协，机制难搞，容易出逃\n且出逃到处瞬移难镇压 极优(w) 【极远(80)】\ndps：7.83  特殊机制\n混伤，能奶，远程 良(w)\n0.7 0.8 0.4 2.0\n紫抗甲，三色都不弱注意但蓝抗低于w标准 可镇压\n不容易镇压 黑 black 2 waw 较难 可镇压\n不容易镇压",
   "wiki": {
    "id": "O-01-04",
    "title": "O-01-04 憎恶女王",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-01-04_%E6%86%8E%E6%81%B6%E5%A5%B3%E7%8E%8B",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "镇压“憎恶女王”的工作并不容易，因为其能力特性，想要在“憎恶女王”造成破坏之前将其镇压是较为困难的，其攻击范围广、攻击伤害高的特点又使得职员很难躲避“憎恶女王”的激光攻击。但因为“憎恶女王”出逃前的标志很明显（计数1，黑化或者融毁），使得主管有充足的时间集结员工并做出应对。因为蛇形态的“憎恶女王”可能会传送到员工聚集地而导致其血量快速下降，这可能会使“憎恶女王”在员工聚集地里来回传送导致低侵蚀抗性的员工死亡，请主管及时的为员工添加反侵蚀力场盾，月光女神的ego在镇压战中也能起到较大的作用，\n\n因为“憎恶女王”的激光持续伤害较高且会为它回复生命值，因而让任何员工处于激光范围内都是十分不明智的。“憎恶女王”在激光开始蓄力时会有较长且明显的蓄力前摇，且开始蓄力后就不会转向，只要主管在这时候把所有的员工移到它的背后就能有效避免激光的伤害。此时就是对“憎恶女王”造成伤害的最佳时机。\n\n因为“憎恶女王”脱力结束后可能会立刻传送到原地造成两次伤害，请主管及时为员工提供反侵蚀力场盾。\n\n不用担心文职可能会为“憎恶女王”提供过多的回复，文职在激光里会被瞬间蒸发，但激光覆盖范围极大，可能会造成大范围的文职伤亡，主管可能需要担心大范围文职伤亡造成的连锁反应。提前用处决子弹将激光范围内的文职人员全部处决会是个不错的选择。\n\n如果主管当前的首要目标并不是进行工作而是处理混乱的出逃场面，且主管已经处理掉了文职，则人形态的憎恶女王提供的回复和伤害都能对主管的镇压工作起到极大的帮助。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "黑",
    "dmgTypeRaw": "black",
    "dmgStat": "3 - 4",
    "counter": "2",
    "maxPeBox": 22.0,
    "mood": {
     "优": "16 - 22",
     "良": "10 - 15",
     "差": "0 - 9"
    },
    "workSpeed": 0.3,
    "workCd": 15.0,
    "fearDamage": "sp",
    "noEscape": null,
    "resist": {
     "red": 0.7,
     "white": 1.2,
     "black": 0.3,
     "pale": 1.5
    },
    "resistWord": {
     "red": "抗性较高",
     "white": "抗性较低",
     "black": "抗性极高",
     "pale": "抗性较低"
    },
    "traits": {
     "instinct": [
      "低",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "高"
     ],
     "repression": [
      "低",
      "低",
      "低",
      "极低",
      "极低"
     ]
    },
    "traitStats": {
     "instinct": [
      "30%",
      "40%",
      "50%",
      "50%",
      "50%"
     ],
     "insight": [
      "45%",
      "45%",
      "45%",
      "45%",
      "45%"
     ],
     "attachment": [
      "50%",
      "50%",
      "55%",
      "55%",
      "60%"
     ],
     "repression": [
      "20%",
      "20%",
      "20%",
      "0%",
      "0%"
     ]
    },
    "isTool": false
   },
   "dmgType": "黑",
   "counter": "2",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 9,
   "id": "T-04-06",
   "name": "快乐泰迪",
   "danger": "HE",
   "prefix": "T",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "机制死，要轮流管，容易鱼脑",
   "weaponText": "差(H) 【极近(2)】\nDPS：7.0  极近前期不推荐",
   "weaponGrades": [
    "差"
   ],
   "weaponGrade": "差",
   "weaponTypes": [
    "H"
   ],
   "weaponType": "H",
   "rangeLabel": "极近",
   "rangeValue": 2,
   "weaponTail": "",
   "weaponDps": 7.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：7.0  极近前期不推荐",
   "armorText": "差(H)\n0.8 1.0 1.0 1.5 T级面板的H甲",
   "armorGrades": [
    "差"
   ],
   "armorGrade": "差",
   "armorTypes": [
    "H"
   ],
   "armorType": "H",
   "armorResist": [
    0.8,
    1.0,
    1.0,
    1.5
   ],
   "armorNote": "0.8 1.0 1.0 1.5 T级面板的H甲",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "t-04-06 快乐泰迪 he 低\n机制死，要轮流管，容易鱼脑 差(h) 【极近(2)】\ndps：7.0  极近前期不推荐 差(h)\n0.8 1.0 1.0 1.5 t级面板的h甲  白 white x he 未填",
   "wiki": {
    "id": "T-04-06",
    "title": "T-04-06 快乐泰迪",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-04-06_%E5%BF%AB%E4%B9%90%E6%B3%B0%E8%BF%AA",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "HE",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "2-4",
    "counter": "X",
    "maxPeBox": 15.0,
    "mood": {
     "优": "11-15",
     "良": "6-10",
     "差": "0-5"
    },
    "workSpeed": 0.25,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "低",
      "低"
     ],
     "attachment": [
      "高",
      "高",
      "高",
      "一般",
      "一般"
     ],
     "repression": [
      "一般",
      "一般",
      "一般",
      "一般",
      "低"
     ]
    },
    "traitStats": {
     "instinct": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "insight": [
      "40%",
      "45%",
      "45%",
      "35%",
      "35%"
     ],
     "attachment": [
      "60%",
      "60%",
      "60%",
      "50%",
      "45%"
     ],
     "repression": [
      "40%",
      "45%",
      "45%",
      "40%",
      "35%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "X",
   "isTool": false,
   "type": "HE"
  },
  {
   "row": 11,
   "id": "O-04-08",
   "name": "红舞鞋",
   "danger": "HE",
   "prefix": "O",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "偷人型里最菜的，前期可能麻烦，员工自律>3后没威胁",
   "weaponText": "差(H) 【极近(2)】\nDPS：6.0  极近前期不推荐，自律<3有增益",
   "weaponGrades": [
    "差"
   ],
   "weaponGrade": "差",
   "weaponTypes": [
    "H"
   ],
   "weaponType": "H",
   "rangeLabel": "极近",
   "rangeValue": 2,
   "weaponTail": "",
   "weaponDps": 6.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：6.0  极近前期不推荐，自律<3有增益",
   "armorText": "良(H)\n0.5 1.2 0.8 1.5 红抗甲，弱白",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "H"
   ],
   "armorType": "H",
   "armorResist": [
    0.5,
    1.2,
    0.8,
    1.5
   ],
   "armorNote": "0.5 1.2 0.8 1.5 红抗甲，弱白",
   "suppressText": "由于被魅惑的职员仍然会受到主管子弹的影响，最简单的镇压方式就是对他脸上来一发处决弹，管杀还管埋，尸体都不留。\n\n如果主管还没能解锁处决弹科技，且被魅惑的是文职，主管可以让高物理抗性的员工顶住伤害，莽过去即可。被魅惑的文职生命值一般不会超过100点，很容易击杀。如果主管的高属性高抗性员工被魅惑且不准备重开这一天，那么灵魂伤害的武器对员工的百分比伤害可以非常有效的削减被魅惑员工极高额的生命值。在没有灵魂伤害的武器时，如若员工属性又不足，主管可以使用远程武器对其进行消耗，但需要确保消耗的速度大于被魅惑职员击杀文职后回复的速度。",
   "canSuppress": true,
   "suppressGrade": "可镇压",
   "suppressNote": "",
   "search": "o-04-08 红舞鞋 he 中\n偷人型里最菜的，前期可能麻烦，员工自律>3后没威胁 差(h) 【极近(2)】\ndps：6.0  极近前期不推荐，自律<3有增益 良(h)\n0.5 1.2 0.8 1.5 红抗甲，弱白  红 red 1 he 未填",
   "wiki": {
    "id": "O-04-08",
    "title": "O-04-08 红舞鞋",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-04-08_%E7%BA%A2%E8%88%9E%E9%9E%8B",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "由于被魅惑的职员仍然会受到主管子弹的影响，最简单的镇压方式就是对他脸上来一发处决弹，管杀还管埋，尸体都不留。\n\n如果主管还没能解锁处决弹科技，且被魅惑的是文职，主管可以让高物理抗性的员工顶住伤害，莽过去即可。被魅惑的文职生命值一般不会超过100点，很容易击杀。如果主管的高属性高抗性员工被魅惑且不准备重开这一天，那么灵魂伤害的武器对员工的百分比伤害可以非常有效的削减被魅惑员工极高额的生命值。在没有灵魂伤害的武器时，如若员工属性又不足，主管可以使用远程武器对其进行消耗，但需要确保消耗的速度大于被魅惑职员击杀文职后回复的速度。",
    "toolText": null,
    "ok": true,
    "level": "HE",
    "tool": null,
    "dmgType": "红",
    "dmgTypeRaw": "red",
    "dmgStat": "4-6",
    "counter": "1",
    "maxPeBox": 16.0,
    "mood": {
     "优": "12-16",
     "良": "8-11",
     "差": "0-7"
    },
    "workSpeed": 0.35,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "高"
     ],
     "insight": [
      "一般",
      "高",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "极高",
      "极高",
      "一般",
      "一般",
      "低"
     ],
     "repression": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ]
    },
    "traitStats": {
     "instinct": [
      "50%",
      "50%",
      "45%",
      "50%",
      "65%"
     ],
     "insight": [
      "50%",
      "60%",
      "55%",
      "55%",
      "55%"
     ],
     "attachment": [
      "99%",
      "99%",
      "50%",
      "40%",
      "30%"
     ],
     "repression": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ]
    },
    "isTool": false
   },
   "dmgType": "红",
   "counter": "1",
   "isTool": false,
   "type": "HE"
  },
  {
   "row": 13,
   "id": "T-09-09",
   "name": "特蕾西娅",
   "danger": "TETH",
   "prefix": "T",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "没什么用也没什么坏处……",
   "weaponText": "-",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "t-09-09 特蕾西娅 teth 中\n没什么用也没什么坏处…… - -  工具型 未填",
   "wiki": {
    "id": "T-09-09",
    "title": "T-09-09 特蕾西娅",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-09-09_%E7%89%B9%E8%95%BE%E8%A5%BF%E5%A8%85",
    "tpl": "Abn Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": "主管可以派遣员工前去聆听特蕾西娅。进入收容单元后，员工会开始播放特蕾西娅，奏出动听的旋律。特蕾西娅所属部门的所有职员将会每5秒回复10点精神值。\n\n和管理须知不同，实际上如果聆听的时间超过了30秒，聆听者会立刻强制陷入恐慌。\n\n值得一提的是，如果聆听特蕾西娅的员工并非来自收容特蕾西娅的部门，则这名员工在使用它时不会回复精神值，但属于特蕾西娅部门的职员仍会正常地恢复精神值。\n\n员工离开收容单元后，陷入恐慌的倒计时会被重置。",
    "ok": true,
    "level": "TETH",
    "tool": "channel",
    "dmgType": null,
    "dmgTypeRaw": null,
    "dmgStat": null,
    "counter": null,
    "maxPeBox": null,
    "mood": {
     "优": null,
     "良": null,
     "差": null
    },
    "workSpeed": null,
    "workCd": null,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {},
    "traitStats": {},
    "isTool": true
   },
   "dmgType": null,
   "counter": null,
   "isTool": true,
   "type": "工具型"
  },
  {
   "row": 15,
   "id": "O-01-12",
   "name": "老妇人",
   "danger": "TETH",
   "prefix": "O",
   "mgmtGrades": [
    "中",
    "高"
   ],
   "mgmtGrade": "高",
   "mgmtNote": "孤独伤害后期不算高，前期多管就没事",
   "weaponText": "优(T) 【远(10)】\nDPS：3.75  白手枪，打怪和恢复员工精神都很好用",
   "weaponGrades": [
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "T"
   ],
   "weaponType": "T",
   "rangeLabel": "远",
   "rangeValue": 10,
   "weaponTail": "",
   "weaponDps": 3.75,
   "weaponDpsMax": null,
   "weaponNote": "DPS：3.75  白手枪，打怪和恢复员工精神都很好用",
   "armorText": "差(T)\n1.5 0.8 0.8 2.0 红抗太低，前期不好用",
   "armorGrades": [
    "差"
   ],
   "armorGrade": "差",
   "armorTypes": [
    "T"
   ],
   "armorType": "T",
   "armorResist": [
    1.5,
    0.8,
    0.8,
    2.0
   ],
   "armorNote": "1.5 0.8 0.8 2.0 红抗太低，前期不好用",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "o-01-12 老妇人 teth 中\n孤独伤害后期不算高，前期多管就没事 优(t) 【远(10)】\ndps：3.75  白手枪，打怪和恢复员工精神都很好用 差(t)\n1.5 0.8 0.8 2.0 红抗太低，前期不好用  白 white 4 teth 未填",
   "wiki": {
    "id": "O-01-12",
    "title": "O-01-12 老妇人",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-01-12_%E8%80%81%E5%A6%87%E4%BA%BA",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "TETH",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "1-3",
    "counter": "4",
    "maxPeBox": 14.0,
    "mood": {
     "优": "11-14",
     "良": "6-10",
     "差": "0-5"
    },
    "workSpeed": 0.2,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "高",
      "高",
      "高",
      "高",
      "高"
     ],
     "repression": [
      "低",
      "低",
      "低",
      "低",
      "低"
     ]
    },
    "traitStats": {
     "instinct": [
      "45%",
      "45%",
      "40%",
      "40%",
      "40%"
     ],
     "insight": [
      "45%",
      "45%",
      "50%",
      "50%",
      "50%"
     ],
     "attachment": [
      "65%",
      "65%",
      "60%",
      "60%",
      "60%"
     ],
     "repression": [
      "30%",
      "30%",
      "30%",
      "30%",
      "30%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "4",
   "isTool": false,
   "type": "TETH"
  },
  {
   "row": 17,
   "id": "O-01-15",
   "name": "无名怪婴",
   "danger": "HE",
   "prefix": "O",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "机制死，HE四大天王之首",
   "weaponText": "优(H) 【远(10)】\nDPS：6.0  抬手快 距离远",
   "weaponGrades": [
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "H"
   ],
   "weaponType": "H",
   "rangeLabel": "远",
   "rangeValue": 10,
   "weaponTail": "",
   "weaponDps": 6.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：6.0  抬手快 距离远",
   "armorText": "良(H)\n1.2 0.5 0.8 1.5 白抗甲，弱红",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "H"
   ],
   "armorType": "H",
   "armorResist": [
    1.2,
    0.5,
    0.8,
    1.5
   ],
   "armorNote": "1.2 0.5 0.8 1.5 白抗甲，弱红",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "o-01-15 无名怪婴 he 低\n机制死，he四大天王之首 优(h) 【远(10)】\ndps：6.0  抬手快 距离远 良(h)\n1.2 0.5 0.8 1.5 白抗甲，弱红  红 red 1 he 未填",
   "wiki": {
    "id": "O-01-15",
    "title": "O-01-15 无名怪婴",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-01-15_%E6%97%A0%E5%90%8D%E6%80%AA%E5%A9%B4",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "HE",
    "tool": null,
    "dmgType": "红",
    "dmgTypeRaw": "red",
    "dmgStat": "4-6",
    "counter": "1",
    "maxPeBox": 18.0,
    "mood": {
     "优": "14-18",
     "良": "7-13",
     "差": "0-6"
    },
    "workSpeed": 0.35,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "高",
      "高",
      "高"
     ],
     "insight": [
      "低",
      "低",
      "低",
      "低",
      "低"
     ],
     "attachment": [
      "低",
      "低",
      "低",
      "低",
      "低"
     ],
     "repression": [
      "低",
      "低",
      "低",
      "低",
      "低"
     ]
    },
    "traitStats": {
     "instinct": [
      "40%",
      "50%",
      "60%",
      "60%",
      "60%"
     ],
     "insight": [
      "20%",
      "30%",
      "30%",
      "30%",
      "30%"
     ],
     "attachment": [
      "20%",
      "30%",
      "30%",
      "30%",
      "30%"
     ],
     "repression": [
      "20%",
      "30%",
      "30%",
      "30%",
      "30%"
     ]
    },
    "isTool": false
   },
   "dmgType": "红",
   "counter": "1",
   "isTool": false,
   "type": "HE"
  },
  {
   "row": 19,
   "id": "F-01-18",
   "name": "面壁女",
   "danger": "TETH",
   "prefix": "F",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "后期这点白伤算不了什么",
   "weaponText": "优(H) 【极远(20)】\nDPS：5.25  远，穿透",
   "weaponGrades": [
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "H"
   ],
   "weaponType": "H",
   "rangeLabel": "极远",
   "rangeValue": 20,
   "weaponTail": "",
   "weaponDps": 5.25,
   "weaponDpsMax": null,
   "weaponNote": "DPS：5.25  远，穿透",
   "armorText": "良(T)\n1.2 0.6 1.0 2.0 单白抗甲",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "T"
   ],
   "armorType": "T",
   "armorResist": [
    1.2,
    0.6,
    1.0,
    2.0
   ],
   "armorNote": "1.2 0.6 1.0 2.0 单白抗甲",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "f-01-18 面壁女 teth 中\n后期这点白伤算不了什么 优(h) 【极远(20)】\ndps：5.25  远，穿透 良(t)\n1.2 0.6 1.0 2.0 单白抗甲  白 white 2 teth 未填",
   "wiki": {
    "id": "F-01-18",
    "title": "F-01-18 面壁女",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/F-01-18_%E9%9D%A2%E5%A3%81%E5%A5%B3",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "TETH",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "2-3",
    "counter": "2",
    "maxPeBox": 14.0,
    "mood": {
     "优": "8-14",
     "良": "4-7",
     "差": "0-3"
    },
    "workSpeed": 0.25,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "一般",
      "一般",
      "极低",
      "极低",
      "极低"
     ],
     "attachment": [
      "极高",
      "极高",
      "极高",
      "极高",
      "极高"
     ],
     "repression": [
      "一般",
      "一般",
      "低",
      "低",
      "低"
     ]
    },
    "traitStats": {
     "instinct": [
      "55%",
      "55%",
      "55%",
      "55%",
      "55%"
     ],
     "insight": [
      "45%",
      "45%",
      "0%",
      "0%",
      "0%"
     ],
     "attachment": [
      "100%",
      "100%",
      "100%",
      "100%",
      "100%"
     ],
     "repression": [
      "55%",
      "55%",
      "30%",
      "30%",
      "30%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "2",
   "isTool": false,
   "type": "TETH"
  },
  {
   "row": 21,
   "id": "O-06-20",
   "name": "“一无所有”",
   "danger": "ALEPH",
   "prefix": "O",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "属性够了一无随便摸，不容易出逃",
   "weaponText": "优(A) 【一般(4)】\nDPS：13.11  伤害高，还吸血",
   "weaponGrades": [
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "A"
   ],
   "weaponType": "A",
   "rangeLabel": "一般",
   "rangeValue": 4,
   "weaponTail": "",
   "weaponDps": 13.11,
   "weaponDpsMax": null,
   "weaponNote": "DPS：13.11  伤害高，还吸血",
   "armorText": "良(A)\n0.2 0.5 0.5 1.0 红抗特化，适合抗伤",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "A"
   ],
   "armorType": "A",
   "armorResist": [
    0.2,
    0.5,
    0.5,
    1.0
   ],
   "armorNote": "0.2 0.5 0.5 1.0 红抗特化，适合抗伤",
   "suppressText": "可镇压\n不容易镇压",
   "canSuppress": true,
   "suppressGrade": "较难",
   "suppressNote": "不容易镇压",
   "search": "o-06-20 “一无所有” aleph 中\n属性够了一无随便摸，不容易出逃 优(a) 【一般(4)】\ndps：13.11  伤害高，还吸血 良(a)\n0.2 0.5 0.5 1.0 红抗特化，适合抗伤 可镇压\n不容易镇压 红 red 1 aleph 较难 可镇压\n不容易镇压",
   "wiki": {
    "id": "O-06-20",
    "title": "O-06-20 「一无所有」",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-06-20_%E3%80%8C%E4%B8%80%E6%97%A0%E6%89%80%E6%9C%89%E3%80%8D",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "镇压「一无所有」是主管需要面对的比较困难的异想体出逃考验。要面对「一无所有」，首先需要明确是否拥有足够的战斗力去与其对抗，尤其是要确认能否在「一无所有」的第三阶段下将其镇压并尽可能减少人员伤亡。如果不能，则建议在「一无所有」出逃后就迅速组织大量员工组成重火力，在「一无所有」的前两个阶段中就将其击杀。但如果主管准备在一阶段镇压「一无所有」，请不要在让生命值较低或者物理抗性较低的员工参与镇压，他们会很容易死于「一无所有」的范围伤害。\n\n如果「一无所有」进入了第三阶段，则建议让单个物理抗性较高的员工吸引「一无所有」的仇恨，而其他的员工在「一无所有」背后进行攻击。因为利用以爱与恨之名对抗伤员工进行回复的方式会因为爪刺的贯穿攻击而较为艰难，且在不额外附加抗性的情况下，给穿着0.2物理抗性护甲的员工提供护盾并不能对其抵抗手刀提供任何帮助。为了能迅速恢复在前方抵抗「一无所有」伤害的员工损失的生命值，建议在部门的主休息室与「一无所有」作战，并频繁通过治疗子弹来回复抗伤员工的生命值。\n\n「一无所有」的手刀攻击虽然前摇较长且明显，但要小心，「一无所有」在使用手刀时可能会进行短距离位移，攻击到原先不在范围内的员工。也可能会在主管拉离正面的抗伤员工后回头攻击那些在其背后的员工。所以在躲避手刀时，务必同时将「一无所有」前后距离较近的员工都拉离它。\n\n「CENSORED」的武器在面对「一无所有」的攻击时显得尤为有效。同时，「一无所有」自己的护甲就很适合用来抵抗它自己的攻击。\n\n使用兔子队镇压「一无所有」的方式较为不稳定且依靠运气。如果兔子队和「一无所有」在电梯间或者情报部主休息室这样的小房间交火，兔子在「一无所有」的范围攻击面前毫无招架之力。只有在能让兔子充分发挥射程优势和人数优势，让一无所有在休息室两头移动花费较长的时间的地形，兔子才有机会胜利。所以如果主管准备呼叫兔子队来处理「一无所有」，可以选择先消耗它的血量或者部署员工待命来进行收尾工作。",
    "toolText": null,
    "ok": true,
    "level": "ALEPH",
    "tool": null,
    "dmgType": "红",
    "dmgTypeRaw": "red",
    "dmgStat": "6-9",
    "counter": "1",
    "maxPeBox": 33.0,
    "mood": {
     "优": "27-33",
     "良": "17-26",
     "差": "0-16"
    },
    "workSpeed": 0.35,
    "workCd": 15.0,
    "fearDamage": "sp",
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": "未知",
     "white": "未知",
     "black": "未知",
     "pale": "未知"
    },
    "traits": {
     "instinct": [
      "极低",
      "极低",
      "低",
      "一般",
      "一般"
     ],
     "insight": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ]
    },
    "traitStats": {
     "instinct": [
      "0%",
      "0%",
      "35%",
      "40%",
      "45%"
     ],
     "insight": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "attachment": [
      "50%",
      "50%",
      "50%",
      "50%",
      "50%"
     ],
     "repression": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ]
    },
    "isTool": false
   },
   "dmgType": "红",
   "counter": "1",
   "isTool": false,
   "type": "ALEPH"
  },
  {
   "row": 23,
   "id": "T-06-27",
   "name": "1.76兆赫",
   "danger": "TETH",
   "prefix": "T",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "计数器基本不会归零，不归零就好处理",
   "weaponText": "-",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "良(T)\n1.2 0.7 0.6 2.0 双抗甲，但弱红，前期难用",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "T"
   ],
   "armorType": "T",
   "armorResist": [
    1.2,
    0.7,
    0.6,
    2.0
   ],
   "armorNote": "1.2 0.7 0.6 2.0 双抗甲，但弱红，前期难用",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "t-06-27 1.76兆赫 teth 中\n计数器基本不会归零，不归零就好处理 - 良(t)\n1.2 0.7 0.6 2.0 双抗甲，但弱红，前期难用  白 white 4 teth 未填",
   "wiki": {
    "id": "T-06-27",
    "title": "T-06-27 1.76兆赫",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-06-27_1.76%E5%85%86%E8%B5%AB",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "TETH",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "2-4",
    "counter": "4",
    "maxPeBox": 12.0,
    "mood": {
     "优": "10-12",
     "良": "6-9",
     "差": "0-5"
    },
    "workSpeed": 0.25,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "一般",
      "低",
      "低",
      "低",
      "低"
     ],
     "attachment": [
      "低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "repression": [
      "一般",
      "一般",
      "高",
      "高",
      "高"
     ]
    },
    "traitStats": {
     "instinct": [
      "40%",
      "40%",
      "40%",
      "40%",
      "40%"
     ],
     "insight": [
      "40%",
      "30%",
      "20%",
      "20%",
      "20%"
     ],
     "attachment": [
      "20%",
      "10%",
      "0%",
      "0%",
      "0%"
     ],
     "repression": [
      "55%",
      "55%",
      "60%",
      "60%",
      "60%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "4",
   "isTool": false,
   "type": "TETH"
  },
  {
   "row": 25,
   "id": "O-05-30",
   "name": "歌唱机",
   "danger": "HE",
   "prefix": "O",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "勇气>3即死，机制死，需要保姆，还会偷人",
   "weaponText": "差(H)【远(15)】\nDPS：8.0(10.4)  打着打着掉血还是忍不了",
   "weaponGrades": [
    "差"
   ],
   "weaponGrade": "差",
   "weaponTypes": [
    "H"
   ],
   "weaponType": "H",
   "rangeLabel": "远",
   "rangeValue": 15,
   "weaponTail": "",
   "weaponDps": 8.0,
   "weaponDpsMax": 10.4,
   "weaponNote": "DPS：8.0(10.4)  打着打着掉血还是忍不了",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "由于歌唱机优先魅惑文职的机制，单个被魅惑的职员并不能给设施带来很大的威胁。但如果主管不能及时将其击杀，就会出现文职打死文职让歌唱机连锁反应扩大化然后波及到员工的情况。所以，主管在收容了歌唱机时，如果左下角出现了奇怪的员工死亡提示，则应该优先检查歌唱机的能力是否触发。如果发现了被魅惑的职员，则应该在连锁反应扩大化之前优先将其镇压。由于歌唱机魅惑的文职生命值一般都不会超过50，且他们使用镇暴棍的前摇较长，主管可以选择骗出前摇后进行攻击，远程消耗，直接让员工上前围殴，或是让拥有较高 抗性的员工吸引了仇恨再围殴。\n\n处决弹永远是处理被歌唱机魅惑的职员最好的方法。",
   "canSuppress": true,
   "suppressGrade": "可镇压",
   "suppressNote": "",
   "search": "o-05-30 歌唱机 he 低\n勇气>3即死，机制死，需要保姆，还会偷人 差(h)【远(15)】\ndps：8.0(10.4)  打着打着掉血还是忍不了 -  白 white 1 he 未填",
   "wiki": {
    "id": "O-05-30",
    "title": "O-05-30 歌唱机",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-05-30_%E6%AD%8C%E5%94%B1%E6%9C%BA",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": "由于歌唱机优先魅惑文职的机制，单个被魅惑的职员并不能给设施带来很大的威胁。但如果主管不能及时将其击杀，就会出现文职打死文职让歌唱机连锁反应扩大化然后波及到员工的情况。所以，主管在收容了歌唱机时，如果左下角出现了奇怪的员工死亡提示，则应该优先检查歌唱机的能力是否触发。如果发现了被魅惑的职员，则应该在连锁反应扩大化之前优先将其镇压。由于歌唱机魅惑的文职生命值一般都不会超过50，且他们使用镇暴棍的前摇较长，主管可以选择骗出前摇后进行攻击，远程消耗，直接让员工上前围殴，或是让拥有较高 抗性的员工吸引了仇恨再围殴。\n\n处决弹永远是处理被歌唱机魅惑的职员最好的方法。",
    "toolText": null,
    "ok": true,
    "level": "HE",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "4-6",
    "counter": "1",
    "maxPeBox": 18.0,
    "mood": {
     "优": "15-18",
     "良": "8-14",
     "差": "0-7"
    },
    "workSpeed": 0.35,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "高",
      "高",
      "高"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "极低",
      "极低",
      "极低",
      "低",
      "低"
     ],
     "repression": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "55%",
      "55%",
      "60%",
      "60%",
      "60%"
     ],
     "insight": [
      "50%",
      "50%",
      "50%",
      "50%",
      "50%"
     ],
     "attachment": [
      "0%",
      "0%",
      "0%",
      "30%",
      "30%"
     ],
     "repression": [
      "40%",
      "40%",
      "40%",
      "40%",
      "40%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "1",
   "isTool": false,
   "type": "HE"
  },
  {
   "row": 27,
   "id": "T-01-31",
   "name": "沉默乐团",
   "danger": "ALEPH",
   "prefix": "T",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "要求工作良，非常容易出逃",
   "weaponText": "良(A) 【一般(4)】\nDPS：18.5  dps很高，然后没了",
   "weaponGrades": [
    "良"
   ],
   "weaponGrade": "良",
   "weaponTypes": [
    "A"
   ],
   "weaponType": "A",
   "rangeLabel": "一般",
   "rangeValue": 4,
   "weaponTail": "",
   "weaponDps": 18.5,
   "weaponDpsMax": null,
   "weaponNote": "DPS：18.5  dps很高，然后没了",
   "armorText": "良(A)\n0.5 0.2 0.5 1.5 白抗特化甲",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "A"
   ],
   "armorType": "A",
   "armorResist": [
    0.5,
    0.2,
    0.5,
    1.5
   ],
   "armorNote": "0.5 0.2 0.5 1.5 白抗特化甲",
   "suppressText": "可镇压\n容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压",
   "search": "t-01-31 沉默乐团 aleph 低\n要求工作良，非常容易出逃 良(a) 【一般(4)】\ndps：18.5  dps很高，然后没了 良(a)\n0.5 0.2 0.5 1.5 白抗特化甲 可镇压\n容易镇压 白 white 2 aleph 容易 可镇压\n容易镇压",
   "wiki": {
    "id": "T-01-31",
    "title": "T-01-31 沉默乐团",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-01-31_%E6%B2%89%E9%BB%98%E4%B9%90%E5%9B%A2",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "相对其他同等级的异想体，“沉默乐团”的生命值并不算高，大约五到六名正义数值较高、持有单个乐章的弱点伤害类型、且为WAW级以上的武器的员工，可以在对应的乐章内迅速杀死乐队指挥。\n\n要注意的是，主管应在“沉默乐团”的前三个阶段就迅速镇压它，否则一旦它进入第四乐章，员工会难以抵挡“沉默乐团”造成的精神伤害，且主管当天获得的能量会被立刻清零。如果乐队的演奏已经成功进入第四乐章，此时再派遣员工镇压它已经没有任何意义，主管应该将所有员工拉离“沉默乐团”所在的部门。\n\n镇压沉默乐团时一般是多人进行镇压，一个人的恐慌会造成其余人的恐惧检定，接着会让同房间内精神值剩余不多的的员工因恐惧伤害而恐慌，这将是极为恐怖的连锁反应。但因为“沉默乐团”出逃时游戏的速度被强制锁定在一倍速，主管有充足的时间调离这些员工，给他们施加护盾和精神值回复子弹来避免上述情况发生。伪善护甲的群体精神恢复效果能在镇压中起到极大的帮助。\n\n在镇压“沉默乐团”时，由于镜头会被幕布遮挡，选取员工后右上角的员工属性面板会被覆盖。这可能会在镇压“沉默乐团”时对主管确定员工的信息造成一定干扰，但主管仍然可以使用鼠标左键框选或选择员工并右键“沉默乐团”来进行对它的镇压。\n\n因为“沉默乐团”的镇压对火力和伤害类型有硬性要求，无法使用异想体的伤害来帮助镇压，呼叫兔子来镇压的方法也因此不可行。兔子对“沉默乐团”的伤害略微不足，如果只使用兔子来镇压的话，在第一乐章开始就呼叫兔子，终章开始时“沉默乐团”会剩下极少的生命值。如果在“沉默乐团”出逃前提前呼叫兔子，兔子可能会因为丢失目标直接离开。就算能成功镇压“沉默乐团”，也是卡着第四乐章的结尾镇压。此时主管已经失去了当天收集的能源，与其选择呼叫兔子队来镇压，不如直接放着出逃的“沉默乐团”不管。",
    "toolText": null,
    "ok": true,
    "level": "ALEPH",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "7-9",
    "counter": "2",
    "maxPeBox": 30.0,
    "mood": {
     "优": "19-30",
     "良": "13-18",
     "差": "0-12"
    },
    "workSpeed": 0.4,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": "未知",
     "white": "未知",
     "black": "未知",
     "pale": "未知"
    },
    "traits": {
     "instinct": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "insight": [
      "极低",
      "极低",
      "低",
      "低",
      "一般"
     ],
     "attachment": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "极低",
      "极低",
      "极低",
      "低",
      "低"
     ]
    },
    "traitStats": {
     "instinct": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "insight": [
      "0%",
      "0%",
      "30%",
      "30%",
      "40%"
     ],
     "attachment": [
      "0%",
      "0%",
      "40%",
      "40%",
      "50%"
     ],
     "repression": [
      "0%",
      "0%",
      "10%",
      "20%",
      "30%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "2",
   "isTool": false,
   "type": "ALEPH"
  },
  {
   "row": 29,
   "id": "F-05-32",
   "name": "热心的樵夫",
   "danger": "HE",
   "prefix": "F",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "机制死，自律>2减计数器，但可以放置",
   "weaponText": "良(H) 【一般(5)】\nDPS：6.0  很一般，有更好的选更好的",
   "weaponGrades": [
    "良"
   ],
   "weaponGrade": "良",
   "weaponTypes": [
    "H"
   ],
   "weaponType": "H",
   "rangeLabel": "一般",
   "rangeValue": 5,
   "weaponTail": "",
   "weaponDps": 6.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：6.0  很一般，有更好的选更好的",
   "armorText": "差(H)\n0.8 1.2 0.8 1.5 双抗甲弱白",
   "armorGrades": [
    "差"
   ],
   "armorGrade": "差",
   "armorTypes": [
    "H"
   ],
   "armorType": "H",
   "armorResist": [
    0.8,
    1.2,
    0.8,
    1.5
   ],
   "armorNote": "0.8 1.2 0.8 1.5 双抗甲弱白",
   "suppressText": "可镇压\n容易镇压，出来需要献祭",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压，出来需要献祭",
   "search": "f-05-32 热心的樵夫 he 低\n机制死，自律>2减计数器，但可以放置 良(h) 【一般(5)】\ndps：6.0  很一般，有更好的选更好的 差(h)\n0.8 1.2 0.8 1.5 双抗甲弱白 可镇压\n容易镇压，出来需要献祭 白 white 1 he 容易 可镇压\n容易镇压，出来需要献祭",
   "wiki": {
    "id": "F-05-32",
    "title": "F-05-32 热心的樵夫",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/F-05-32_%E7%83%AD%E5%BF%83%E7%9A%84%E6%A8%B5%E5%A4%AB",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "在主管的装备和员工质量不足时，和“热心的樵夫”硬碰硬是非常不明智的行为。但如果主管的远程火力也不足，樵夫可能会在设施内大肆屠杀文职并为自己提供持续的恢复，使得它难以被镇压，还可能会导致其余响应文职死亡的异想体出逃。但好在主管的员工质量和装备质量不足时，樵夫反而没有那么容易出逃。\n\n因为出逃的樵夫抗性不高且移动速度较慢，主管有充足的时间对其进行消耗，且它的普通攻击伤害并不算高且有明显的前摇，特殊攻击为多次伤害且可以躲避，建议在熟悉它的攻击方式后，主管花费一定精力操纵近战员工走位来躲避它的伤害。",
    "toolText": null,
    "ok": true,
    "level": "HE",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "3-5",
    "counter": "1",
    "maxPeBox": 18.0,
    "mood": {
     "优": "15-18",
     "良": "9-14",
     "差": "0-8"
    },
    "workSpeed": 0.3,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 1.5,
     "white": 0.8,
     "black": 0.8,
     "pale": 1.0
    },
    "resistWord": {
     "red": "抗性较低",
     "white": "抗性较高",
     "black": "抗性较高",
     "pale": "抗性一般"
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "一般",
      "高",
      "高",
      "极高",
      "极高"
     ],
     "repression": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "45%",
      "45%",
      "45%",
      "45%",
      "45%"
     ],
     "insight": [
      "45%",
      "45%",
      "45%",
      "45%",
      "45%"
     ],
     "attachment": [
      "50%",
      "60%",
      "70%",
      "80%",
      "90%"
     ],
     "repression": [
      "45%",
      "45%",
      "45%",
      "45%",
      "45%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "1",
   "isTool": false,
   "type": "HE"
  },
  {
   "row": 31,
   "id": "F-01-37",
   "name": "冰雪女皇",
   "danger": "HE",
   "prefix": "F",
   "mgmtGrades": [
    "高"
   ],
   "mgmtGrade": "高",
   "mgmtNote": "好管，稳定优秀饰品",
   "weaponText": "极优(H) 【一般(4)】\nDPS：6.0  能减速，功能性强",
   "weaponGrades": [
    "极优"
   ],
   "weaponGrade": "极优",
   "weaponTypes": [
    "H"
   ],
   "weaponType": "H",
   "rangeLabel": "一般",
   "rangeValue": 4,
   "weaponTail": "",
   "weaponDps": 6.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：6.0  能减速，功能性强",
   "armorText": "良(H)\n1.3 0.6 0.8 1.5 白抗甲，弱红",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "H"
   ],
   "armorType": "H",
   "armorResist": [
    1.3,
    0.6,
    0.8,
    1.5
   ],
   "armorNote": "1.3 0.6 0.8 1.5 白抗甲，弱红",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "f-01-37 冰雪女皇 he 高\n好管，稳定优秀饰品 极优(h) 【一般(4)】\ndps：6.0  能减速，功能性强 良(h)\n1.3 0.6 0.8 1.5 白抗甲，弱红  白 white x he 未填",
   "wiki": {
    "id": "F-01-37",
    "title": "F-01-37 冰雪女皇",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/F-01-37_%E5%86%B0%E9%9B%AA%E5%A5%B3%E7%9A%87",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "HE",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "4-5",
    "counter": "X",
    "maxPeBox": 18.0,
    "mood": {
     "优": "14-18",
     "良": "8-13",
     "差": "0-7"
    },
    "workSpeed": 0.33,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "低",
      "低",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "一般",
      "一般",
      "高",
      "高",
      "高"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "高"
     ],
     "repression": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ]
    },
    "traitStats": {
     "instinct": [
      "30%",
      "30%",
      "40%",
      "40%",
      "50%"
     ],
     "insight": [
      "50%",
      "50%",
      "60%",
      "60%",
      "70%"
     ],
     "attachment": [
      "40%",
      "40%",
      "50%",
      "50%",
      "60%"
     ],
     "repression": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "X",
   "isTool": false,
   "type": "HE"
  },
  {
   "row": 33,
   "id": "O-02-40",
   "name": "大鸟",
   "danger": "WAW",
   "prefix": "O",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "文保协，出逃难打",
   "weaponText": "极优(W) 【一般(5)】\nDPS：8.33  紫易伤，dps也可以",
   "weaponGrades": [
    "极优"
   ],
   "weaponGrade": "极优",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "一般",
   "rangeValue": 5,
   "weaponTail": "",
   "weaponDps": 8.33,
   "weaponDpsMax": null,
   "weaponNote": "DPS：8.33  紫易伤，dps也可以",
   "armorText": "优(W)\n0.8 0.7 0.4 1.5 紫抗甲，其余三个也标准",
   "armorGrades": [
    "优"
   ],
   "armorGrade": "优",
   "armorTypes": [
    "W"
   ],
   "armorType": "W",
   "armorResist": [
    0.8,
    0.7,
    0.4,
    1.5
   ],
   "armorNote": "0.8 0.7 0.4 1.5 紫抗甲，其余三个也标准",
   "suppressText": "可镇压\n不容易出来，容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "不容易出来，容易镇压",
   "search": "o-02-40 大鸟 waw 低\n文保协，出逃难打 极优(w) 【一般(5)】\ndps：8.33  紫易伤，dps也可以 优(w)\n0.8 0.7 0.4 1.5 紫抗甲，其余三个也标准 可镇压\n不容易出来，容易镇压 黑 black 5 waw 容易 可镇压\n不容易出来，容易镇压",
   "wiki": {
    "id": "O-02-40",
    "title": "O-02-40 大鸟",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-02-40_%E5%A4%A7%E9%B8%9F",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "镇压“大鸟”的工作在熟练的主管手中一般会进行得较为顺利。虽然“大鸟”拥有瞬间杀死员工和文职的能力，但从标记员工到控制员工所用的时间已足够让主管找到并将被标记的员工拉离所在的部门，而且“大鸟”也并不具备除此之外的攻击方式。同时，因为“大鸟”在标记员工时，会优先标记停电部门内最大生命值最低的员工，因此主管可以在停电的部门边缘安排几个最大生命值较低的员工，而让最大生命值较高的员工前去镇压“大鸟”。这样，“大鸟”就只会标记部门边缘的员工，主管可以较为轻易的解除这些员工身上的标记再把它们拉回作为下一轮标记的诱饵，并让大部队放心镇压“大鸟”。\n\n由于“大鸟”本身没有能直接造成伤害的攻击方式，且攻击方式只有秒杀。因此，除非情况极为混乱，主管一般无需考虑大鸟会斩首生命值低于最大生命值30%的职员，只需专心操控被标记的员工。虽然“大鸟”只会斩首其面前的被标记员工，但鉴于“大鸟”的移动方式，仍然建议将其背后被标记的员工立刻拉离停电区域，否则“大鸟”可能会转身并立刻触发斩首能力。\n\n另外，如果设施内已收容异想体“惩戒鸟”和“审判鸟”，则需要更加警惕“大鸟”的出逃。在设施内无员工装备“薄暝”E.G.O武器或护甲的情况下，鉴于“惩戒鸟”的特性，在“大鸟”出逃后将有可能触发“黑森林”事件，并引来难以对付的“终末鸟”。\n\n使用小红帽雇佣兵和兔子是镇压“大鸟”的好办法。由于“大鸟”只会对职员类单位造成威胁，小红帽雇佣兵和兔子都可以较为轻易的镇压“大鸟”。尽管小红帽雇佣兵镇压“大鸟”的速度较慢，但优点是完全不需要主管多次操纵员工来躲避魅惑，只要主管确保没有任何员工和“大鸟”同部门即可。\n\n最后，请主管镇压“大鸟”时务必等到二级警报解除（即屏幕四角弹出的警报为trumpet1，只有一个感叹号时，代表二级警报已经下降至一级），不然会出现刚回去的“大鸟”又夺门而出的情况，出逃的“大鸟”又会使警报点数增加，这会让对“大鸟”的镇压陷入死循环，从而导致不必要的员工损失或意外情况。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "黑",
    "dmgTypeRaw": "black",
    "dmgStat": "2-6",
    "counter": "5",
    "maxPeBox": 20.0,
    "mood": {
     "优": "14-20",
     "良": "8-13",
     "差": "0-7"
    },
    "workSpeed": 0.33,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 0.8,
     "white": 1.2,
     "black": 0.5,
     "pale": 1.5
    },
    "resistWord": {
     "red": "抗性较高",
     "white": "抗性较低",
     "black": "抗性较高",
     "pale": "抗性较低"
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "低",
      "低",
      "低",
      "低",
      "低"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "低",
      "低",
      "极低",
      "极低",
      "极低"
     ]
    },
    "traitStats": {
     "instinct": [
      "45%",
      "45%",
      "45%",
      "50%",
      "50%"
     ],
     "insight": [
      "35%",
      "35%",
      "35%",
      "35%",
      "35%"
     ],
     "attachment": [
      "40%",
      "45%",
      "50%",
      "55%",
      "55%"
     ],
     "repression": [
      "25%",
      "20%",
      "15%",
      "10%",
      "0%"
     ]
    },
    "isTool": false
   },
   "dmgType": "黑",
   "counter": "5",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 35,
   "id": "T-05-41",
   "name": "小帮手",
   "danger": "HE",
   "prefix": "T",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "要求工作优",
   "weaponText": "良(H) 【一般(4)】\nDPS：7.19  dps还不错的武器",
   "weaponGrades": [
    "良"
   ],
   "weaponGrade": "良",
   "weaponTypes": [
    "H"
   ],
   "weaponType": "H",
   "rangeLabel": "一般",
   "rangeValue": 4,
   "weaponTail": "",
   "weaponDps": 7.19,
   "weaponDpsMax": null,
   "weaponNote": "DPS：7.19  dps还不错的武器",
   "armorText": "良(H)\n0.6 1.3 0.9 1.5 红抗甲，弱白",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "H"
   ],
   "armorType": "H",
   "armorResist": [
    0.6,
    1.3,
    0.9,
    1.5
   ],
   "armorNote": "0.6 1.3 0.9 1.5 红抗甲，弱白",
   "suppressText": "可镇压\n容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压",
   "search": "t-05-41 小帮手 he 中\n要求工作优 良(h) 【一般(4)】\ndps：7.19  dps还不错的武器 良(h)\n0.6 1.3 0.9 1.5 红抗甲，弱白 可镇压\n容易镇压 红 red 2 he 容易 可镇压\n容易镇压",
   "wiki": {
    "id": "T-05-41",
    "title": "T-05-41 小帮手",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-05-41_%E5%B0%8F%E5%B8%AE%E6%89%8B",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "由于 单次攻击的间隔时间较长且攻击伤害较低，主管有充足的时间对它进行攻击并操作员工对它的攻击进行躲避。加上它的两次伤害之间间隔时间极长，只要主管的员工不是被一击秒杀，主管都可以让这名员工去其余休息室回复状态后再来参与镇压。\n\n如果主管的员工和护甲质量低到无法承受 单的一次伤害，建议是先把员工移到它所在的房间里再立刻移出以骗出它的蓄力和攻击，在它攻击完宕机时对它进行正义的围殴。最后看它宕机结束准备起身时将员工移出房间以躲避它的伤害。\n\n镇压 时，它所处的房间越小越好，电梯间最好。房间越小越有利于员工躲避它的冲撞，并可以减少赶路的时间以增加宕机时对它的输出。\n\n自己的护甲是前期对抗它的最优选择之一。",
    "toolText": null,
    "ok": true,
    "level": "HE",
    "tool": null,
    "dmgType": "红",
    "dmgTypeRaw": "red",
    "dmgStat": "3-5",
    "counter": "2",
    "maxPeBox": 16.0,
    "mood": {
     "优": "10-16",
     "良": "6-9",
     "差": "0-5"
    },
    "workSpeed": 0.3,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 0.5,
     "white": 1.0,
     "black": 2.0,
     "pale": 2.0
    },
    "resistWord": {
     "red": "抗性较高",
     "white": "抗性一般",
     "black": "抗性极低",
     "pale": "抗性极低"
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "attachment": [
      "低",
      "一般",
      "一般",
      "低",
      "低"
     ],
     "repression": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "50%",
      "55%",
      "55%",
      "50%",
      "45%"
     ],
     "insight": [
      "0%",
      "0%",
      "-30%",
      "-60%",
      "-90%"
     ],
     "attachment": [
      "35%",
      "40%",
      "40%",
      "35%",
      "30%"
     ],
     "repression": [
      "50%",
      "55%",
      "55%",
      "50%",
      "45%"
     ]
    },
    "isTool": false
   },
   "dmgType": "红",
   "counter": "2",
   "isTool": false,
   "type": "HE"
  },
  {
   "row": 37,
   "id": "F-04-42",
   "name": "白雪公主的苹果",
   "danger": "WAW",
   "prefix": "F",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "计数器只有1，五级员工压迫不容易出逃，但出逃很难管",
   "weaponText": "无饰品：良(W)\n有饰品：优(W) 【一般(4)】\nDPS：8.0(11.33)  有饰品以后是很强的w武器",
   "weaponGrades": [
    "良",
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "一般",
   "rangeValue": 4,
   "weaponTail": "无饰品：良(W",
   "weaponDps": 8.0,
   "weaponDpsMax": 11.33,
   "weaponNote": "有饰品：优(W) 【一般(4)】\nDPS：8.0(11.33)  有饰品以后是很强的w武器",
   "armorText": "差(W)\n0.8 1.2 0.6 1.5 紫抗甲，弱白",
   "armorGrades": [
    "差"
   ],
   "armorGrade": "差",
   "armorTypes": [
    "W"
   ],
   "armorType": "W",
   "armorResist": [
    0.8,
    1.2,
    0.6,
    1.5
   ],
   "armorNote": "0.8 1.2 0.6 1.5 紫抗甲，弱白",
   "suppressText": "可镇压\n不容易镇压",
   "canSuppress": true,
   "suppressGrade": "较难",
   "suppressNote": "不容易镇压",
   "search": "f-04-42 白雪公主的苹果 waw 中\n计数器只有1，五级员工压迫不容易出逃，但出逃很难管 无饰品：良(w)\n有饰品：优(w) 【一般(4)】\ndps：8.0(11.33)  有饰品以后是很强的w武器 差(w)\n0.8 1.2 0.6 1.5 紫抗甲，弱白 可镇压\n不容易镇压 黑 black 1 waw 较难 可镇压\n不容易镇压",
   "wiki": {
    "id": "F-04-42",
    "title": "F-04-42 白雪公主的苹果",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/F-04-42_%E7%99%BD%E9%9B%AA%E5%85%AC%E4%B8%BB%E7%9A%84%E8%8B%B9%E6%9E%9C",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "镇压“白雪公主的苹果”的工作通常需要考虑多个方面，既要确保在避免员工伤亡的情况下尽快镇压它，又要防止它过多地散布荆棘，并为今天的后续工作产生更多负面影响。\n\n虽然“白雪公主的苹果”的血量实际上算不上高，但其较高的伤害，散布藤蔓的减速效果都极大限制了员工的输出环境，选择指挥仅仅一支镇压小队去攻击它是缺乏效率且效果不佳的。尤其是携带近战武器、且移动速度较慢的员工，“白雪公主的苹果”很有可能会在受到伤害之前就瞬移离开，或是杀死那些属性不足的员工。所以请装备不足的主管使用远程武器如弩模板，来复枪模板的武器来对其进行消耗，并在藤蔓蔓延至员工脚底之前将他们撤出苹果所在的房间。\n\n鉴于“白雪公主的苹果”的影响，建议最好不要令其出逃。如果出逃，则建议在设施内的多个地方部署数名装备有造成精神或灵魂伤害的武器（最好是远程武器）、且侵蚀抗性较高（最好至少都拥有0.6侵蚀抗性）的员工，并在“白雪公主的苹果”出逃后立刻对其展开攻势，尽早地将其镇压。要注意“白雪公主的苹果”造成的伤害较高，在员工的抗性不足时，反侵蚀力场盾可以较为有效地抵挡它的伤害。\n\n在游戏前期和中期，“白雪公主的苹果”自己的护甲提供的侵蚀抗性很适合用来对付它自己，月光女神E.G.O武器月光特殊攻击附加黑盾的特效，寄生树E.G.O伪善护甲的全房间回蓝（但必须配远程武器因为伪善护甲的侵蚀抗性较低），憎恶女王E.G.O爱与恨之名的群体回复效果和高侵蚀抗性都能对主管的镇压工作提供较大的帮助。\n\n因为兔子队需要时间集合，且“白雪公主的苹果”会瞬移，使用兔子队来镇压它不是一个可行的选择，经常会出现兔子队好不容易集合到目标房间开始输出的时候“白雪公主的苹果”直接瞬移跑路的情况。\n\n雇佣小红帽雇佣兵虽然可以将其镇压，但是“白雪公主的苹果”会在被镇压之前给公司的不少走廊都覆盖上藤蔓，且这种方法会造成极大的文职伤亡，满公司跑的小红帽和一地的文职尸体引起的连锁反应可能要远远麻烦于“白雪公主的苹果”本身。所以请主管自行衡量是否要雇佣小红帽来镇压它。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "黑",
    "dmgTypeRaw": "black",
    "dmgStat": "3-5",
    "counter": "1",
    "maxPeBox": 20.0,
    "mood": {
     "优": "14-20",
     "良": "8-13",
     "差": "0-7"
    },
    "workSpeed": 0.3,
    "workCd": 15.0,
    "fearDamage": "n",
    "noEscape": null,
    "resist": {
     "red": 0.5,
     "white": 1.0,
     "black": 0.0,
     "pale": 1.5
    },
    "resistWord": {
     "red": "抗性较高",
     "white": "抗性一般",
     "black": "免疫",
     "pale": "抗性较低"
    },
    "traits": {
     "instinct": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "极低",
      "低",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "repression": [
      "低",
      "低",
      "一般",
      "一般",
      "高"
     ]
    },
    "traitStats": {
     "instinct": [
      "0%",
      "0%",
      "40%",
      "40%",
      "40%"
     ],
     "insight": [
      "10%",
      "20%",
      "45%",
      "45%",
      "50%"
     ],
     "attachment": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "repression": [
      "20%",
      "30%",
      "55%",
      "55%",
      "60%"
     ]
    },
    "isTool": false
   },
   "dmgType": "黑",
   "counter": "1",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 39,
   "id": "T-02-43",
   "name": "蜘蛛巢",
   "danger": "TETH",
   "prefix": "T",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "很安全的异想体",
   "weaponText": "差(T) 【近(3)】\nDPS：4.0  近距离，伤害不高",
   "weaponGrades": [
    "差"
   ],
   "weaponGrade": "差",
   "weaponTypes": [
    "T"
   ],
   "weaponType": "T",
   "rangeLabel": "近",
   "rangeValue": 3,
   "weaponTail": "",
   "weaponDps": 4.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：4.0  近距离，伤害不高",
   "armorText": "优(T)\n0.8 0.8 0.8 2.0 T级均衡甲",
   "armorGrades": [
    "优"
   ],
   "armorGrade": "优",
   "armorTypes": [
    "T"
   ],
   "armorType": "T",
   "armorResist": [
    0.8,
    0.8,
    0.8,
    2.0
   ],
   "armorNote": "0.8 0.8 0.8 2.0 T级均衡甲",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "t-02-43 蜘蛛巢 teth 中\n很安全的异想体 差(t) 【近(3)】\ndps：4.0  近距离，伤害不高 优(t)\n0.8 0.8 0.8 2.0 t级均衡甲  红 red x teth 未填",
   "wiki": {
    "id": "T-02-43",
    "title": "T-02-43 蜘蛛巢",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-02-43_%E8%9C%98%E8%9B%9B%E5%B7%A2",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "TETH",
    "tool": null,
    "dmgType": "红",
    "dmgTypeRaw": "red",
    "dmgStat": "2-3",
    "counter": "X",
    "maxPeBox": 14.0,
    "mood": {
     "优": "X",
     "良": "7-14",
     "差": "0-6"
    },
    "workSpeed": 0.28,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "高",
      "高",
      "高",
      "高",
      "高"
     ],
     "insight": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "60%",
      "60%",
      "65%",
      "65%",
      "65%"
     ],
     "insight": [
      "-50%",
      "-50%",
      "-50%",
      "-50%",
      "-50%"
     ],
     "attachment": [
      "50%",
      "50%",
      "55%",
      "55%",
      "55%"
     ],
     "repression": [
      "40%",
      "40%",
      "45%",
      "45%",
      "45%"
     ]
    },
    "isTool": false
   },
   "dmgType": "红",
   "counter": "X",
   "isTool": false,
   "type": "TETH"
  },
  {
   "row": 41,
   "id": "F-02-44",
   "name": "美女和野兽",
   "danger": "TETH",
   "prefix": "F",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "需要洞察压迫轮流管，鱼脑杀手",
   "weaponText": "优(T) 【一般(4)】\nDPS：4.76  伤害很高，前期战神",
   "weaponGrades": [
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "T"
   ],
   "weaponType": "T",
   "rangeLabel": "一般",
   "rangeValue": 4,
   "weaponTail": "",
   "weaponDps": 4.76,
   "weaponDpsMax": null,
   "weaponNote": "DPS：4.76  伤害很高，前期战神",
   "armorText": "良(T)\n0.8 0.8 1.5 2.0 黑抗低，但前期红白泛用",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "T"
   ],
   "armorType": "T",
   "armorResist": [
    0.8,
    0.8,
    1.5,
    2.0
   ],
   "armorNote": "0.8 0.8 1.5 2.0 黑抗低，但前期红白泛用",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "f-02-44 美女和野兽 teth 中\n需要洞察压迫轮流管，鱼脑杀手 优(t) 【一般(4)】\ndps：4.76  伤害很高，前期战神 良(t)\n0.8 0.8 1.5 2.0 黑抗低，但前期红白泛用  白 white x teth 未填",
   "wiki": {
    "id": "F-02-44",
    "title": "F-02-44 美女和野兽",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/F-02-44_%E7%BE%8E%E5%A5%B3%E5%92%8C%E9%87%8E%E5%85%BD",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "TETH",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "2-4",
    "counter": "X",
    "maxPeBox": 12.0,
    "mood": {
     "优": "9-12",
     "良": "5-8",
     "差": "0-4"
    },
    "workSpeed": 0.28,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "一般",
      "低",
      "极低",
      "极低",
      "极低"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "低",
      "低"
     ],
     "attachment": [
      "低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "repression": [
      "高",
      "高",
      "高",
      "高",
      "高"
     ]
    },
    "traitStats": {
     "instinct": [
      "40%",
      "20%",
      "-20%",
      "-20%",
      "-20%"
     ],
     "insight": [
      "50%",
      "50%",
      "40%",
      "30%",
      "30%"
     ],
     "attachment": [
      "30%",
      "15%",
      "-50%",
      "-50%",
      "-50%"
     ],
     "repression": [
      "65%",
      "65%",
      "65%",
      "65%",
      "65%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "X",
   "isTool": false,
   "type": "TETH"
  },
  {
   "row": 43,
   "id": "O-01-45",
   "name": "疫医",
   "danger": "ZAYIN",
   "prefix": "O",
   "mgmtGrades": [
    "极低"
   ],
   "mgmtGrade": "极低",
   "mgmtNote": "有审判甲前别碰！！！",
   "weaponText": "极优(A) 【极远(80)】",
   "weaponGrades": [
    "极优"
   ],
   "weaponGrade": "极优",
   "weaponTypes": [
    "A"
   ],
   "weaponType": "A",
   "rangeLabel": "极远",
   "rangeValue": 80,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "收容白夜：极优(A)\n不收容：良(A)",
   "armorGrades": [
    "极优",
    "良"
   ],
   "armorGrade": "极优",
   "armorTypes": [
    "A"
   ],
   "armorType": "A",
   "armorResist": null,
   "armorNote": "收容白夜：极优(A)\n不收容：良(A)",
   "suppressText": "",
   "canSuppress": true,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "o-01-45 疫医 zayin 极低\n有审判甲前别碰！！！ 极优(a) 【极远(80)】 收容白夜：极优(a)\n不收容：良(a) 可镇压 白 white 1 zayin 未填 可镇压",
   "wiki": {
    "id": "O-01-45",
    "title": "O-01-45 疫医",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-01-45_%E7%96%AB%E5%8C%BB",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "ZAYIN",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "1-2",
    "counter": "1",
    "maxPeBox": 10.0,
    "mood": {
     "优": "8-10",
     "良": "4-7",
     "差": "0-3"
    },
    "workSpeed": 0.25,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "高",
      "高",
      "高",
      "高",
      "高"
     ],
     "attachment": [
      "高",
      "高",
      "高",
      "高",
      "高"
     ],
     "repression": [
      "高",
      "高",
      "高",
      "高",
      "高"
     ]
    },
    "traitStats": {
     "instinct": [
      "40%",
      "40%",
      "40%",
      "40%",
      "40%"
     ],
     "insight": [
      "60%",
      "60%",
      "60%",
      "60%",
      "60%"
     ],
     "attachment": [
      "60%",
      "60%",
      "60%",
      "60%",
      "60%"
     ],
     "repression": [
      "60%",
      "60%",
      "60%",
      "60%",
      "60%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "1",
   "isTool": false,
   "type": "ZAYIN"
  },
  {
   "row": 45,
   "id": "T-03-46",
   "name": "白夜",
   "danger": "ALEPH",
   "prefix": "T",
   "mgmtGrades": [],
   "mgmtGrade": null,
   "mgmtNote": "最强A级，需要按时间管",
   "weaponText": "收容前：DPS：12.5(10.5/9.0)\n收容后：DPS：13.3(11.5/10.2)\n强群攻，但要收容白夜才能完全发挥",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": 12.5,
   "weaponDpsMax": 10.5,
   "weaponNote": "收容后：DPS：13.3(11.5/10.2)\n强群攻，但要收容白夜才能完全发挥",
   "armorText": "收容前：0.5 0.5 0.5 0.3\n收容后：0.2 0.2 0.2 0.2\n特殊功能免疫/吸收\n但总的来说没收容白夜的时没那么强",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": [
    0.5,
    0.5,
    0.5,
    0.3
   ],
   "armorNote": "收容前：0.5 0.5 0.5 0.3\n收容后：0.2 0.2 0.2 0.2\n特殊功能免疫/吸收\n但总的来说没收容白夜的时没那么强",
   "suppressText": "不容易镇压",
   "canSuppress": false,
   "suppressGrade": "较难",
   "suppressNote": "不容易镇压",
   "search": "t-03-46 白夜 aleph 最强a级，需要按时间管 收容前：dps：12.5(10.5/9.0)\n收容后：dps：13.3(11.5/10.2)\n强群攻，但要收容白夜才能完全发挥 收容前：0.5 0.5 0.5 0.3\n收容后：0.2 0.2 0.2 0.2\n特殊功能免疫/吸收\n但总的来说没收容白夜的时没那么强 不容易镇压 淡 pale 3 aleph 较难 不容易镇压",
   "wiki": {
    "id": "T-03-46",
    "title": "T-03-46 白夜",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-03-46_%E7%99%BD%E5%A4%9C",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "对“白夜”的镇压工作是目前脑叶公司中主管面临的最难、也最特殊的镇压异想体的考验。首先，“白夜”自身不仅拥有十分优秀的抗性和灵魂伤害能力，还能够将职员直接转化为战斗力颇高且无法被直接杀死的使徒（也包括没有战斗能力的卖主的叛徒），这个转化过程是致命且无法被阻挡的，这很可能导致主管在战斗一开始就损失掉一部分战斗力较高的员工，从而使镇压“白夜”的难度激增。在“白夜”封锁了主管的暂停能力的前提下，“白夜”及其使徒就会对员工造成极大而足以致命的威胁。\n\n“白夜”的特殊性还在于，它出逃时必定会提供大量的警报点数导致设施内拉响高威胁等级的警报，且每个使徒对职员来说都是极为致命的。这会导致响应文职死亡的异想体（尸山，深黯，大鸟，风云）出逃，也会导致响应警报等级的异想体出逃（大鸟，憎恶），接着会引起某些响应其余异想体出逃的异想体出逃（小红帽，狼，炎雀）。虽然“白夜”的使徒可以帮主管处理掉大多数出逃的异想体，但有些异想体（如大鸟，憎恶，狼，深黯）的连锁反应会极大程度影响主管的镇压或威胁到主管的主力员工。在准备镇压“白夜”前，请主管尽量不要收容这些会带来麻烦的异想体。\n\n由于异想体“疫医”在变为“白夜”时，“白夜”只会将被祝福的员工转化成使徒，因此在此时镇压“白夜”是最好的选择。建议在战斗开始之前就将所有被祝福的员工尽量调离异想体“疫医”所在的部门，从而保证镰刀使徒、权杖使徒和长枪使徒在生成后不会来干扰员工与“白夜”的战斗。\n\n“白夜”的使徒会受光圈影响而复活，且每一个使徒的伤害直接命中员工都会对员工造成极大的威胁。所以在主管没有足够离谱（指一次光圈冷却时间内打趴俩守卫使徒然后还能敲“白夜”四五分之一血量）的重火力之前，尽量不要考虑击杀使徒，这会使“白夜”的镇压陷入死循环。同时，由于影响范围过大，不推荐主管使用阴阳合璧来击杀部分使徒。它很可能会导致主管的员工大量死亡或大量异想体的计数器归零，这会对主管镇压白夜的工作造成极大的影响。除使徒外，“白夜”本体的极大范围40灵魂伤害对抗性低于1.0且拥有较高最大生命值的员工来说也有较大的威胁，在主管回血子弹数量不足而员工数量较多时，光圈也可能会造成镇压部队的减员。\n\n使用员工镇压“白夜”一般可以分为下列三种方法：\n\n* 少量精英员工消耗：这种方法是最为推荐的方法，配置为参战员工至少拥有0.8灵魂抗性（即盈泪之剑，正义裁决者，薄暝，失乐园）的护甲来减免光圈的伤害，尽量使用物理，侵蚀伤害且射程较远的的远程武器（伪善，蜕落之皮，黄蜂，蕾蒂西亚，魔弹等）来对“白夜”进行消耗。最适合的部门为安保部和培训部。这两个部门主休息室旁边就是电梯间，且主休息室较小，方便主管操控员工镇压或躲避使徒攻击，也可以发挥远程武器的射程优势。操作流程基本就是看周围的使徒走的稍微远一点就选中员工右键“白夜”，看使徒过来了就立刻缩回电梯间。这种镇压方式的好处在于安全，且较容易躲避各种使徒的攻击，也不用担心守卫使徒的处决。唯一的缺点就是镇压流程又臭又长，十分消耗主管的精力。\n* 近战员工硬抗：这种方法相对于第一种来说，主管的操作量减少了很多，但相比于第一种方法更需要注意躲避其余使徒，尤其是镰刀使徒的处决。配置为一名最大生命值不高于120，失乐园护甲，拟态武器，拥有银河之子饰品和5计数器银河之子鹅卵石的员工（如果有拟态饰品更好）和两名至少拥有灵魂抗性0.8，且装备着以爱与恨之名武器的员工。操作流程是看守卫使徒移动到“白夜”的一侧且距离“白夜”较远时，从另一侧进入主休息室对“白夜”进行攻击。拟态，银河，以爱与恨之名和休息室的回复可以为这名员工抵消守卫使徒的伤害。且因为守卫使徒在选中目标后便不会移动，如果守卫使徒选中这名员工时是使用镰刀攻击而非处决，则它以后所有的处决攻击都将无法命中抗伤员工。这种镇压方式的好处是不需要主管手动走位躲避守卫使徒的攻击，缺点是被使徒（尤其是镰刀使徒或是本部休息室遇到长枪使徒）两面包夹时，员工无法同步撤离或躲避，使得抗伤员工容易吃到处决或辅助员工容易吃到高额伤害直接死亡，且需要较长时间的准备。\n* 重火力碾压：这种方法对主管的装备要求极高，旨在“白夜”的蓝圈消耗完主管的肉体治疗弹之前将其击杀，推荐在安保部或培训部使用这种镇压方式。配置为能在躲避守卫使徒两次攻击左右的时间扬了一个守卫使徒的武器输出，操作流程为简单走位扬了两个守卫使徒之后对“白夜”本体一顿暴揍，看到光圈释放就立刻把员工移到电梯间，打回血弹，重复上述流程。优点是速战速决。缺点是员工无法同步撤离和躲避伤害，且E.G.O护甲的抗性各不相同，很容易因为乱七八糟的原因减员。\n\n兔子在任何情况下都不能直接拿来镇压白夜。他们对上“白夜”的使徒时没有任何还手之力，且物理，精神，侵蚀，灵魂混伤等于1:1:1:1的攻击对于“白夜”来说都是回血（这也是薄暝几乎不能被用来镇压“白夜”的原因）。但他们能在一定时间内牵制使徒的移动，或许能为主管的镇压工作起到些许帮助。",
    "toolText": null,
    "ok": true,
    "level": "ALEPH",
    "tool": null,
    "dmgType": "淡",
    "dmgTypeRaw": "pale",
    "dmgStat": "7-8",
    "counter": "3",
    "maxPeBox": 35.0,
    "mood": {
     "优": "26-35",
     "良": "16-25",
     "差": "0-15"
    },
    "workSpeed": 0.3,
    "workCd": 15.0,
    "fearDamage": "n",
    "noEscape": null,
    "resist": {
     "red": 0.5,
     "white": -2.0,
     "black": 0.5,
     "pale": 0.2
    },
    "resistWord": {
     "red": "抗性较高",
     "white": "吸收",
     "black": "抗性较高",
     "pale": "抗性极高"
    },
    "traits": {
     "instinct": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "insight": [
      "极低",
      "极低",
      "低",
      "低",
      "一般"
     ],
     "attachment": [
      "低",
      "低",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "低",
      "低",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "insight": [
      "0%",
      "0%",
      "30%",
      "30%",
      "40%"
     ],
     "attachment": [
      "30%",
      "30%",
      "35%",
      "40%",
      "45%"
     ],
     "repression": [
      "30%",
      "30%",
      "35%",
      "40%",
      "45%"
     ]
    },
    "isTool": false
   },
   "dmgType": "淡",
   "counter": "3",
   "isTool": false,
   "type": "ALEPH"
  },
  {
   "row": 47,
   "id": "O-05-47",
   "name": "别碰我",
   "danger": "ZAYIN",
   "prefix": "O",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "容易重开，占着位置也没什么收益，不如不要",
   "weaponText": "-",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "o-05-47 别碰我 zayin 低\n容易重开，占着位置也没什么收益，不如不要 - -  未知 ??? x zayin 未填",
   "wiki": {
    "id": "O-05-47",
    "title": "O-05-47 别碰我",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-05-47_%E5%88%AB%E7%A2%B0%E6%88%91",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "ZAYIN",
    "tool": null,
    "dmgType": "未知",
    "dmgTypeRaw": "???",
    "dmgStat": "???",
    "counter": "X",
    "maxPeBox": null,
    "mood": {
     "优": "X",
     "良": "X",
     "差": "X"
    },
    "workSpeed": null,
    "workCd": null,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "X",
      "X",
      "X",
      "X",
      "X"
     ],
     "insight": [
      "X",
      "X",
      "X",
      "X",
      "X"
     ],
     "attachment": [
      "X",
      "X",
      "X",
      "X",
      "X"
     ],
     "repression": [
      "X",
      "X",
      "X",
      "X",
      "X"
     ]
    },
    "traitStats": {
     "instinct": [
      "X",
      "X",
      "X",
      "X",
      "X"
     ],
     "insight": [
      "X",
      "X",
      "X",
      "X",
      "X"
     ],
     "attachment": [
      "X",
      "X",
      "X",
      "X",
      "X"
     ],
     "repression": [
      "X",
      "X",
      "X",
      "X",
      "X"
     ]
    },
    "isTool": false
   },
   "dmgType": "未知",
   "counter": "X",
   "isTool": false,
   "type": "ZAYIN"
  },
  {
   "row": 49,
   "id": "F-02-49",
   "name": "雪橇鲁道夫",
   "danger": "HE",
   "prefix": "F",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "后期不容易跑，还算好镇压，就是长得丑",
   "weaponText": "差(H) 【近(3)】\nDPS：6.0  近，dps又一般",
   "weaponGrades": [
    "差"
   ],
   "weaponGrade": "差",
   "weaponTypes": [
    "H"
   ],
   "weaponType": "H",
   "rangeLabel": "近",
   "rangeValue": 3,
   "weaponTail": "",
   "weaponDps": 6.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：6.0  近，dps又一般",
   "armorText": "良(H)\n0.8 0.6 1.3 1.5 白抗甲，弱紫",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "H"
   ],
   "armorType": "H",
   "armorResist": [
    0.8,
    0.6,
    1.3,
    1.5
   ],
   "armorNote": "0.8 0.6 1.3 1.5 白抗甲，弱紫",
   "suppressText": "可镇压\n容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压",
   "search": "f-02-49 雪橇鲁道夫 he 中\n后期不容易跑，还算好镇压，就是长得丑 差(h) 【近(3)】\ndps：6.0  近，dps又一般 良(h)\n0.8 0.6 1.3 1.5 白抗甲，弱紫 可镇压\n容易镇压 白 white 2 he 容易 可镇压\n容易镇压",
   "wiki": {
    "id": "F-02-49",
    "title": "F-02-49 雪橇鲁道夫",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/F-02-49_%E9%9B%AA%E6%A9%87%E9%B2%81%E9%81%93%E5%A4%AB",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "由于其较短的伤害周期和全房间的伤害范围，通过走位来躲避它的伤害需要极大的操作量，故比较推荐的镇压方式是准备几个最大精神值较高，拥有较高的精神抗性且最好是远程武器的员工对其进行消耗，在员工精神值降低到比较危险的水平后将他们撤出房间进行回复后再让他们加入战斗。\n\n请主管不要让低谨慎或者低精神抗性的员工混进镇压队伍。在员工质量普遍不高时，这样很可能会造成员工的连续恐慌检定导致主力镇压部队直接陷入恐慌。",
    "toolText": null,
    "ok": true,
    "level": "HE",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "3-4",
    "counter": "2",
    "maxPeBox": 18.0,
    "mood": {
     "优": "12-18",
     "良": "6-11",
     "差": "0-5"
    },
    "workSpeed": 0.3,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 1.5,
     "white": 0.5,
     "black": 1.0,
     "pale": 2.0
    },
    "resistWord": {
     "red": "抗性较低",
     "white": "抗性较高",
     "black": "抗性一般",
     "pale": "抗性极低"
    },
    "traits": {
     "instinct": [
      "低",
      "一般",
      "一般",
      "低",
      "极低"
     ],
     "insight": [
      "一般",
      "高",
      "高",
      "一般",
      "一般"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ]
    },
    "traitStats": {
     "instinct": [
      "20%",
      "40%",
      "40%",
      "35%",
      "0%"
     ],
     "insight": [
      "50%",
      "60%",
      "60%",
      "55%",
      "50%"
     ],
     "attachment": [
      "40%",
      "50%",
      "50%",
      "45%",
      "40%"
     ],
     "repression": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "2",
   "isTool": false,
   "type": "HE"
  },
  {
   "row": 51,
   "id": "T-04-50",
   "name": "蜂后",
   "danger": "WAW",
   "prefix": "T",
   "mgmtGrades": [
    "中",
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "感染型中比较好管的，对员工威胁不大，红盾也可以保护员工，文职变成的工蜂也算好打",
   "weaponText": "极优(W) 【极远(25)】\nDPS：7.5  来复枪模板都好用",
   "weaponGrades": [
    "极优"
   ],
   "weaponGrade": "极优",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "极远",
   "rangeValue": 25,
   "weaponTail": "",
   "weaponDps": 7.5,
   "weaponDpsMax": null,
   "weaponNote": "DPS：7.5  来复枪模板都好用",
   "armorText": "优(W)\n0.7 0.7 0.7 1.5 W均衡甲",
   "armorGrades": [
    "优"
   ],
   "armorGrade": "优",
   "armorTypes": [
    "W"
   ],
   "armorType": "W",
   "armorResist": [
    0.7,
    0.7,
    0.7,
    1.5
   ],
   "armorNote": "0.7 0.7 0.7 1.5 W均衡甲",
   "suppressText": "单个工蜂的战斗力不强，当工蜂数量较少时，员工可以较为轻松的清理它们。但当死亡文职较多，工蜂数量快速增加时，一个普通的WAW级护甲员工单挑五六只工蜂可能就没那么容易了，尤其是不和余香这些 抗性较低的WAW护甲。\n\n为了防止公司变成某种蜂群的主巢，在前中期主管的火力不足，无法快速清空工蜂时，请主管集合所有的员工到一个房间内。十几个员工就算只持有TETH级E.G.O武器也能让工蜂瞬间蒸发。因为工蜂清理完文职后会主动向员工聚集地靠拢，员工只需要在这个房间内守株待兔就行了。但如果设施内收容了会响应文职死亡而出逃的异想体，请主管尽量控制工蜂的数量，以防止这些异想体出逃导致局面更加混乱。\n\n一切具有群体伤害效果的E.G.O武器都能在处理工蜂的过程中提供较大的帮助，如魔弹，新星之声，笑靥，甚至是刺耳嚎叫。如果主管已经拥有了一无所有的E.G.O:拟态。那么工蜂就无法对主管的员工造成任何威胁。\n\n请主管在工蜂数量增加时注意保护好 抗性较低的员工，道理很简单，双拳难敌四手。",
   "canSuppress": true,
   "suppressGrade": "可镇压",
   "suppressNote": "",
   "search": "t-04-50 蜂后 waw 中\n感染型中比较好管的，对员工威胁不大，红盾也可以保护员工，文职变成的工蜂也算好打 极优(w) 【极远(25)】\ndps：7.5  来复枪模板都好用 优(w)\n0.7 0.7 0.7 1.5 w均衡甲  红 red 1 waw 未填",
   "wiki": {
    "id": "T-04-50",
    "title": "T-04-50 蜂后",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-04-50_%E8%9C%82%E5%90%8E",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": "单个工蜂的战斗力不强，当工蜂数量较少时，员工可以较为轻松的清理它们。但当死亡文职较多，工蜂数量快速增加时，一个普通的WAW级护甲员工单挑五六只工蜂可能就没那么容易了，尤其是不和余香这些 抗性较低的WAW护甲。\n\n为了防止公司变成某种蜂群的主巢，在前中期主管的火力不足，无法快速清空工蜂时，请主管集合所有的员工到一个房间内。十几个员工就算只持有TETH级E.G.O武器也能让工蜂瞬间蒸发。因为工蜂清理完文职后会主动向员工聚集地靠拢，员工只需要在这个房间内守株待兔就行了。但如果设施内收容了会响应文职死亡而出逃的异想体，请主管尽量控制工蜂的数量，以防止这些异想体出逃导致局面更加混乱。\n\n一切具有群体伤害效果的E.G.O武器都能在处理工蜂的过程中提供较大的帮助，如魔弹，新星之声，笑靥，甚至是刺耳嚎叫。如果主管已经拥有了一无所有的E.G.O:拟态。那么工蜂就无法对主管的员工造成任何威胁。\n\n请主管在工蜂数量增加时注意保护好 抗性较低的员工，道理很简单，双拳难敌四手。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "红",
    "dmgTypeRaw": "red",
    "dmgStat": "4-6",
    "counter": "1",
    "maxPeBox": 22.0,
    "mood": {
     "优": "17-22",
     "良": "10-16",
     "差": "0-9"
    },
    "workSpeed": 0.28,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "极低",
      "极低",
      "一般",
      "一般",
      "高"
     ],
     "attachment": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ]
    },
    "traitStats": {
     "instinct": [
      "0%",
      "0%",
      "45%",
      "45%",
      "50%"
     ],
     "insight": [
      "0%",
      "0%",
      "55%",
      "55%",
      "60%"
     ],
     "attachment": [
      "0%",
      "0%",
      "40%",
      "40%",
      "40%"
     ],
     "repression": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ]
    },
    "isTool": false
   },
   "dmgType": "红",
   "counter": "1",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 53,
   "id": "T-05-51",
   "name": "血浴缸",
   "danger": "TETH",
   "prefix": "T",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "勇气1或自律1机制死，此外很好管",
   "weaponText": "差(T) 【极近(2)】\nDPS：3.75  极近前期不推荐",
   "weaponGrades": [
    "差"
   ],
   "weaponGrade": "差",
   "weaponTypes": [
    "T"
   ],
   "weaponType": "T",
   "rangeLabel": "极近",
   "rangeValue": 2,
   "weaponTail": "",
   "weaponDps": 3.75,
   "weaponDpsMax": null,
   "weaponNote": "DPS：3.75  极近前期不推荐",
   "armorText": "良(T)\n1.0 0.6 1.2 2.0 单白抗甲",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "T"
   ],
   "armorType": "T",
   "armorResist": [
    1.0,
    0.6,
    1.2,
    2.0
   ],
   "armorNote": "1.0 0.6 1.2 2.0 单白抗甲",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "t-05-51 血浴缸 teth 中\n勇气1或自律1机制死，此外很好管 差(t) 【极近(2)】\ndps：3.75  极近前期不推荐 良(t)\n1.0 0.6 1.2 2.0 单白抗甲  白 white x teth 未填",
   "wiki": {
    "id": "T-05-51",
    "title": "T-05-51 血浴缸",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-05-51_%E8%A1%80%E6%B5%B4%E7%BC%B8",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "TETH",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "2-4",
    "counter": "X",
    "maxPeBox": 14.0,
    "mood": {
     "优": "10-14",
     "良": "5-9",
     "差": "0-4"
    },
    "workSpeed": 0.3,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "高",
      "高",
      "高",
      "高",
      "高"
     ],
     "repression": [
      "低",
      "低",
      "极低",
      "极低",
      "极低"
     ]
    },
    "traitStats": {
     "instinct": [
      "55%",
      "55%",
      "50%",
      "50%",
      "50%"
     ],
     "insight": [
      "45%",
      "45%",
      "40%",
      "40%",
      "40%"
     ],
     "attachment": [
      "60%",
      "60%",
      "60%",
      "60%",
      "60%"
     ],
     "repression": [
      "30%",
      "20%",
      "10%",
      "0%",
      "0%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "X",
   "isTool": false,
   "type": "TETH"
  },
  {
   "row": 55,
   "id": "F-05-52",
   "name": "韦尔奇乐牌汽水",
   "danger": "ZAYIN",
   "prefix": "F",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "工作差即死，但一般不会",
   "weaponText": "优(Z) 【远(10)】\nDPS：2.25  Z级手枪，尽早淘汰",
   "weaponGrades": [
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "Z"
   ],
   "weaponType": "Z",
   "rangeLabel": "远",
   "rangeValue": 10,
   "weaponTail": "",
   "weaponDps": 2.25,
   "weaponDpsMax": null,
   "weaponNote": "DPS：2.25  Z级手枪，尽早淘汰",
   "armorText": "良(Z)\n0.8 1.0 1.0 2.0 不如忏悔，过度用",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "Z"
   ],
   "armorType": "Z",
   "armorResist": [
    0.8,
    1.0,
    1.0,
    2.0
   ],
   "armorNote": "0.8 1.0 1.0 2.0 不如忏悔，过度用",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "f-05-52 韦尔奇乐牌汽水 zayin 中\n工作差即死，但一般不会 优(z) 【远(10)】\ndps：2.25  z级手枪，尽早淘汰 良(z)\n0.8 1.0 1.0 2.0 不如忏悔，过度用  红 red x zayin 未填",
   "wiki": {
    "id": "F-05-52",
    "title": "F-05-52 韦尔奇乐牌汽水",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/F-05-52_%E9%9F%A6%E5%B0%94%E5%A5%87%E4%B9%90%E7%89%8C%E6%B1%BD%E6%B0%B4",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "ZAYIN",
    "tool": null,
    "dmgType": "红",
    "dmgTypeRaw": "red",
    "dmgStat": "1-2",
    "counter": "X",
    "maxPeBox": 10.0,
    "mood": {
     "优": "8-10",
     "良": "5-7",
     "差": "0-4"
    },
    "workSpeed": 0.38,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "高",
      "高",
      "高",
      "高",
      "高"
     ],
     "insight": [
      "高",
      "高",
      "高",
      "高",
      "高"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "70%",
      "70%",
      "60%",
      "60%",
      "60%"
     ],
     "insight": [
      "70%",
      "70%",
      "60%",
      "60%",
      "60%"
     ],
     "attachment": [
      "50%",
      "50%",
      "40%",
      "40%",
      "40%"
     ],
     "repression": [
      "50%",
      "50%",
      "40%",
      "40%",
      "40%"
     ]
    },
    "isTool": false
   },
   "dmgType": "红",
   "counter": "X",
   "isTool": false,
   "type": "ZAYIN"
  },
  {
   "row": 57,
   "id": "T-04-53",
   "name": "爱娜温",
   "danger": "WAW",
   "prefix": "T",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "工作要求良，出逃很难打",
   "weaponText": "优(W) 【极远(20)】\nDPS：7.5  远距离",
   "weaponGrades": [
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "极远",
   "rangeValue": 20,
   "weaponTail": "",
   "weaponDps": 7.5,
   "weaponDpsMax": null,
   "weaponNote": "DPS：7.5  远距离",
   "armorText": "差(W)\n1.2 0.6 0.8 1.5 白抗甲，弱红",
   "armorGrades": [
    "差"
   ],
   "armorGrade": "差",
   "armorTypes": [
    "W"
   ],
   "armorType": "W",
   "armorResist": [
    1.2,
    0.6,
    0.8,
    1.5
   ],
   "armorNote": "1.2 0.6 0.8 1.5 白抗甲，弱红",
   "suppressText": "可镇压\n不容易镇压",
   "canSuppress": true,
   "suppressGrade": "较难",
   "suppressNote": "不容易镇压",
   "search": "t-04-53 爱娜温 waw 低\n工作要求良，出逃很难打 优(w) 【极远(20)】\ndps：7.5  远距离 差(w)\n1.2 0.6 0.8 1.5 白抗甲，弱红 可镇压\n不容易镇压 白 white 1 waw 较难 可镇压\n不容易镇压",
   "wiki": {
    "id": "T-04-53",
    "title": "T-04-53 爱娜温",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-04-53_%E7%88%B1%E5%A8%9C%E6%B8%A9",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "因为爱娜温的攻击蓄力时间极长，且单次攻击伤害较高，相比硬抗它的伤害，主管应该在它进行攻击蓄力的时候派遣员工对其进行镇压，并在第三片花瓣完全出现之前将员工撤出它所在的走廊以避免受到它的伤害。远程武器，尤其是 伤害的远程武器能在爱娜温的镇压过程中起到较大的帮助，且可以极大幅度提高主管躲避伤害的容错率。如果主管选择对爱娜温进行围殴，请主管多多关注参加镇压的低级员工。\n\n虽然爱娜温的攻击很容易规避，但爱娜温的随机瞬移可能会对主管的管理工作造成不小的麻烦，尤其是后期公司规模变得很大时。它的瞬移会让主管的主力员工无法及时赶到它所在的房间以对它造成伤害，也可能会导致低级员工的死亡。因此，爱娜温的出逃一般伴随着大量的文职伤亡，请主管务必留意可能会出现的连锁反应。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "4-6",
    "counter": "1",
    "maxPeBox": 22.0,
    "mood": {
     "优": "16-22",
     "良": "8-15",
     "差": "0-7"
    },
    "workSpeed": 0.3,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 1.2,
     "white": 0.0,
     "black": 0.5,
     "pale": 1.5
    },
    "resistWord": {
     "red": "抗性较低",
     "white": "免疫",
     "black": "抗性较高",
     "pale": "抗性较低"
    },
    "traits": {
     "instinct": [
      "极低",
      "极低",
      "一般",
      "一般",
      "高"
     ],
     "insight": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "极低",
      "极低",
      "一般",
      "低",
      "低"
     ],
     "repression": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ]
    },
    "traitStats": {
     "instinct": [
      "0%",
      "0%",
      "40%",
      "50%",
      "60%"
     ],
     "insight": [
      "0%",
      "0%",
      "55%",
      "55%",
      "55%"
     ],
     "attachment": [
      "0%",
      "0%",
      "40%",
      "30%",
      "20%"
     ],
     "repression": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "1",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 59,
   "id": "T-01-54",
   "name": "被遗弃的杀人魔",
   "danger": "TETH",
   "prefix": "T",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "容易出逃，但不难镇压",
   "weaponText": "差(T) 【一般(5)】\nDPS：5.0  距离近，dps一般",
   "weaponGrades": [
    "差"
   ],
   "weaponGrade": "差",
   "weaponTypes": [
    "T"
   ],
   "weaponType": "T",
   "rangeLabel": "一般",
   "rangeValue": 5,
   "weaponTail": "",
   "weaponDps": 5.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：5.0  距离近，dps一般",
   "armorText": "良(T)\n0.7 1.2 0.8 2.0 红抗甲，弱白",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "T"
   ],
   "armorType": "T",
   "armorResist": [
    0.7,
    1.2,
    0.8,
    2.0
   ],
   "armorNote": "0.7 1.2 0.8 2.0 红抗甲，弱白",
   "suppressText": "可镇压\n容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压",
   "search": "t-01-54 被遗弃的杀人魔 teth 中\n容易出逃，但不难镇压 差(t) 【一般(5)】\ndps：5.0  距离近，dps一般 良(t)\n0.7 1.2 0.8 2.0 红抗甲，弱白 可镇压\n容易镇压 红 red 1 teth 容易 可镇压\n容易镇压",
   "wiki": {
    "id": "T-01-54",
    "title": "T-01-54 被遗弃的杀人魔",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-01-54_%E8%A2%AB%E9%81%97%E5%BC%83%E7%9A%84%E6%9D%80%E4%BA%BA%E9%AD%94",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "虽然这是个会出逃的TETH级异想体，但它的低额中等攻速红伤对三四级勇气且物理抗性较高的员工实在是没法造成什么威胁，甚至在安保部抑制后，它在走廊打文职的速度还没有反应堆提供回复的速度快。大多数情况下是出逃一路走一路锤文职，然后走进员工主休息室被蒸发。\n\n如果主管实在是装备不足，则建议让员工对它攻击两下后和他赛跑以争取回复的时间。此时慢慢消耗是要优于所有员工一起冲的。主管也可以选择用远程武器放它风筝，又或是让物理抗性较高且有较高勇气的员工抗住它的伤害，其余员工在它的背后输出。",
    "toolText": null,
    "ok": true,
    "level": "TETH",
    "tool": null,
    "dmgType": "红",
    "dmgTypeRaw": "red",
    "dmgStat": "2-3",
    "counter": "1",
    "maxPeBox": 14.0,
    "mood": {
     "优": "11-14",
     "良": "7-10",
     "差": "0-6"
    },
    "workSpeed": 0.3,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 1.0,
     "white": 1.0,
     "black": 1.5,
     "pale": 2.0
    },
    "resistWord": {
     "red": "抗性一般",
     "white": "抗性一般",
     "black": "抗性较低",
     "pale": "抗性极低"
    },
    "traits": {
     "instinct": [
      "高",
      "高",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "一般",
      "一般",
      "低",
      "低",
      "低"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "低",
      "低",
      "极低",
      "极低",
      "极低"
     ]
    },
    "traitStats": {
     "instinct": [
      "60%",
      "60%",
      "50%",
      "50%",
      "50%"
     ],
     "insight": [
      "40%",
      "40%",
      "30%",
      "30%",
      "30%"
     ],
     "attachment": [
      "50%",
      "50%",
      "40%",
      "40%",
      "40%"
     ],
     "repression": [
      "30%",
      "20%",
      "0%",
      "-80%",
      "-80%"
     ]
    },
    "isTool": false
   },
   "dmgType": "红",
   "counter": "1",
   "isTool": false,
   "type": "TETH"
  },
  {
   "row": 61,
   "id": "O-01-55",
   "name": "银河之子",
   "danger": "HE",
   "prefix": "O",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "鹅卵石buff/饰品很强，但也很容易鱼脑，一切都有代价",
   "weaponText": "良(H) 【一般(8)】\nDPS：6.0  dps一般",
   "weaponGrades": [
    "良"
   ],
   "weaponGrade": "良",
   "weaponTypes": [
    "H"
   ],
   "weaponType": "H",
   "rangeLabel": "一般",
   "rangeValue": 8,
   "weaponTail": "",
   "weaponDps": 6.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：6.0  dps一般",
   "armorText": "差(H)\n0.8 0.8 1.2 1.5 双抗甲弱紫",
   "armorGrades": [
    "差"
   ],
   "armorGrade": "差",
   "armorTypes": [
    "H"
   ],
   "armorType": "H",
   "armorResist": [
    0.8,
    0.8,
    1.2,
    1.5
   ],
   "armorNote": "0.8 0.8 1.2 1.5 双抗甲弱紫",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "o-01-55 银河之子 he 中\n鹅卵石buff/饰品很强，但也很容易鱼脑，一切都有代价 良(h) 【一般(8)】\ndps：6.0  dps一般 差(h)\n0.8 0.8 1.2 1.5 双抗甲弱紫  黑 black 5 he 未填",
   "wiki": {
    "id": "O-01-55",
    "title": "O-01-55 银河之子",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-01-55_%E9%93%B6%E6%B2%B3%E4%B9%8B%E5%AD%90",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "HE",
    "tool": null,
    "dmgType": "黑",
    "dmgTypeRaw": "black",
    "dmgStat": "2-3",
    "counter": "5",
    "maxPeBox": 16.0,
    "mood": {
     "优": "X",
     "良": "9-16",
     "差": "0-8"
    },
    "workSpeed": 0.23,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "45%",
      "45%",
      "45%",
      "45%",
      "45%"
     ],
     "insight": [
      "45%",
      "45%",
      "45%",
      "45%",
      "45%"
     ],
     "attachment": [
      "45%",
      "45%",
      "45%",
      "45%",
      "45%"
     ],
     "repression": [
      "45%",
      "45%",
      "45%",
      "45%",
      "45%"
     ]
    },
    "isTool": false
   },
   "dmgType": "黑",
   "counter": "5",
   "isTool": false,
   "type": "HE"
  },
  {
   "row": 63,
   "id": "O-02-56",
   "name": "惩戒鸟",
   "danger": "TETH",
   "prefix": "O",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "出逃了不用管就行",
   "weaponText": "优(T) 【远(10)】\nDPS：3.75  距离远攻速快",
   "weaponGrades": [
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "T"
   ],
   "weaponType": "T",
   "rangeLabel": "远",
   "rangeValue": 10,
   "weaponTail": "",
   "weaponDps": 3.75,
   "weaponDpsMax": null,
   "weaponNote": "DPS：3.75  距离远攻速快",
   "armorText": "良(T)\n0.7 0.8 1.2 2.0 红抗甲，弱紫",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "T"
   ],
   "armorType": "T",
   "armorResist": [
    0.7,
    0.8,
    1.2,
    2.0
   ],
   "armorNote": "0.7 0.8 1.2 2.0 红抗甲，弱紫",
   "suppressText": "可镇压\n前期不容易镇压，后期还行",
   "canSuppress": true,
   "suppressGrade": "较难",
   "suppressNote": "前期不容易镇压，后期还行",
   "search": "o-02-56 惩戒鸟 teth 中\n出逃了不用管就行 优(t) 【远(10)】\ndps：3.75  距离远攻速快 良(t)\n0.7 0.8 1.2 2.0 红抗甲，弱紫 可镇压\n前期不容易镇压，后期还行 红 red 4 teth 较难 可镇压\n前期不容易镇压，后期还行",
   "wiki": {
    "id": "O-02-56",
    "title": "O-02-56 惩戒鸟",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-02-56_%E6%83%A9%E6%88%92%E9%B8%9F",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "因为惩戒鸟变红后可以近似看做秒杀的极高单次物理伤害，加上它会主动回到收容室和出逃后不会被职员主动攻击的特性，镇压惩戒鸟是没有意义的行为。与其想办法揍鸟大爷一顿还不如在门口放个物理抗性较低的员工让它快点回去。\n\n如果主管为了完成任务决定使用员工镇压惩戒鸟，请使用攻击距离较长且抬手较快的武器，如来复枪模板和弩模板的武器对它进行风筝。或者主管可以用一个高移速员工来触发它的仇恨，接着让这名员工和惩戒鸟赛跑。惩戒鸟的仇恨只会针对让它变红的员工，变红后如果还有员工对它进行攻击，它也不会转移仇恨。\n\n因为惩戒鸟的单次巨额红伤只针对非恐慌员工，受到异想体伤害时的惩戒鸟不会变红。所以雇佣小红帽雇佣兵和魔弹射手来镇压惩戒鸟也是个不错的选择。",
    "toolText": null,
    "ok": true,
    "level": "TETH",
    "tool": null,
    "dmgType": "红",
    "dmgTypeRaw": "red",
    "dmgStat": "2-4",
    "counter": "4",
    "maxPeBox": 12.0,
    "mood": {
     "优": "9-12",
     "良": "5-8",
     "差": "0-4"
    },
    "workSpeed": 0.3,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 2.0,
     "white": 2.0,
     "black": 2.0,
     "pale": 2.0
    },
    "resistWord": {
     "red": "抗性极低",
     "white": "抗性极低",
     "black": "抗性极低",
     "pale": "抗性极低"
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "高",
      "高",
      "高",
      "高",
      "高"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "低",
      "低",
      "极低",
      "极低",
      "极低"
     ]
    },
    "traitStats": {
     "instinct": [
      "40%",
      "40%",
      "45%",
      "45%",
      "45%"
     ],
     "insight": [
      "60%",
      "60%",
      "60%",
      "60%",
      "60%"
     ],
     "attachment": [
      "55%",
      "55%",
      "50%",
      "50%",
      "50%"
     ],
     "repression": [
      "30%",
      "20%",
      "10%",
      "0%",
      "0%"
     ]
    },
    "isTool": false
   },
   "dmgType": "红",
   "counter": "4",
   "isTool": false,
   "type": "TETH"
  },
  {
   "row": 65,
   "id": "F-01-57",
   "name": "小红帽雇佣兵",
   "danger": "WAW",
   "prefix": "F",
   "mgmtGrades": [
    "低",
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "有拟态前：低\n有拟态后：中\n没有拟态前建议不要收容这个异想体，非常棘手\n有拟态后任然需要看门，雇佣实用性其实也一般",
   "weaponText": "良(W) 【极近(2)】（实际为3，可用于镇压绿午夜）\nDPS：8.75(13.13)伤害很高，距离极近，还有友伤\n但由于攻击距离近打不到多少友军，需要斟酌",
   "weaponGrades": [
    "良"
   ],
   "weaponGrade": "良",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "极近",
   "rangeValue": 2,
   "weaponTail": "实际为3，可用于镇压绿午夜",
   "weaponDps": 8.75,
   "weaponDpsMax": 13.13,
   "weaponNote": "DPS：8.75(13.13)伤害很高，距离极近，还有友伤\n但由于攻击距离近打不到多少友军，需要斟酌",
   "armorText": "优(W)\n0.6 0.6 0.6 1.5 W最强均衡甲，还加移速",
   "armorGrades": [
    "优"
   ],
   "armorGrade": "优",
   "armorTypes": [
    "W"
   ],
   "armorType": "W",
   "armorResist": [
    0.6,
    0.6,
    0.6,
    1.5
   ],
   "armorNote": "0.6 0.6 0.6 1.5 W最强均衡甲，还加移速",
   "suppressText": "可镇压\n有拟态容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "有拟态容易镇压",
   "search": "f-01-57 小红帽雇佣兵 waw 有拟态前：低\n有拟态后：中\n没有拟态前建议不要收容这个异想体，非常棘手\n有拟态后任然需要看门，雇佣实用性其实也一般 良(w) 【极近(2)】（实际为3，可用于镇压绿午夜）\ndps：8.75(13.13)伤害很高，距离极近，还有友伤\n但由于攻击距离近打不到多少友军，需要斟酌 优(w)\n0.6 0.6 0.6 1.5 w最强均衡甲，还加移速 可镇压\n有拟态容易镇压 红 red 3 waw 容易 可镇压\n有拟态容易镇压",
   "wiki": {
    "id": "F-01-57",
    "title": "F-01-57 小红帽雇佣兵",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/F-01-57_%E5%B0%8F%E7%BA%A2%E5%B8%BD%E9%9B%87%E4%BD%A3%E5%85%B5",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "因为小红帽极高的贯穿走A伤害和她不低的基础近战伤害，它可以在主管没有任何准备的情况下轻松杀死在休息室内聚集的一群员工。加上小红帽所有攻击抬手均较短，拥有两种远程攻击方式，难以转移标记和它极快的移动速度，被锁定的员工几乎不可能安全和她拉开距离，也几乎没有任何走位的可操作空间。如果此时主管仍未解锁或无法使用反物理力场盾/肉体治疗弹，被打上标记的员工在不能及时进入收容单元消除标记的情况下几乎就可以宣告死亡了。\n\n因此，对小红帽的镇压仍然是对主管装备和科技硬实力的考验。但由于小红帽的物理抗性不高且攻击方式均为物理伤害，一无所有的E.G.O：拟态就成为了针对小红帽的最优解。拟态护甲高达0.2的物理抗性和武器的吸血效果使得同时持有这两件装备的员工可以在较为轻松的前提下镇压小红帽。因而在获得拟态E.G.O后，将持有这套E.G.O的员工常驻在小红帽收容单元所在的走廊可以极大程度减少因小红帽出逃而导致的意外情况发生。\n\n在主管拥有反物理力场盾后，如果出逃的小红帽不幸标记了主管的非主力员工，为被标记的员工提供护盾后尽快集合主力员工来快速镇压小红帽是不错的选择。如果这名员工周围有物理抗性较高的员工，主管可以选择让被标记的员工在护盾的支持下进入收容单元以让小红帽转而标记物理抗性较高的员工。因为小红帽较高的贯穿伤害，在主管的装备不足时，请不要让抗伤员工和主力输出员工同时处在小红帽的攻击方向上。如果小红帽锁定的员工距离较远，请将该员工尽快拉到电梯间或主动靠近小红帽。小红帽在锁定较远目标时使用的走a要远远高于她的近战输出，几乎能两三秒就击破0.8物理抗性员工身上的护盾。请主管尽量避免让小红帽进入走A状态。\n\n如果小红帽和出逃的狼相遇，万一击杀狼的最后一击不是由小红帽完成，它的走A伤害会提升至离谱的30-36点物理伤害，即使是拟态套员工，在面对这样离谱的伤害时也较为吃力。这时候的小红帽如果标记的不是极高红抗的员工，则它必定会对主管的员工造成极大威胁。所以请主管帮助小红帽镇压狼时务必让她亲手完成最后一击。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "红",
    "dmgTypeRaw": "red",
    "dmgStat": "4-6",
    "counter": "3",
    "maxPeBox": 20.0,
    "mood": {
     "优": "17-20",
     "良": "9-16",
     "差": "0-8"
    },
    "workSpeed": 0.3,
    "workCd": 15.0,
    "fearDamage": "sp",
    "noEscape": null,
    "resist": {
     "red": 0.9,
     "white": 0.6,
     "black": 0.8,
     "pale": 1.2
    },
    "resistWord": {
     "red": "抗性较高",
     "white": "抗性较高",
     "black": "抗性较高",
     "pale": "抗性较低"
    },
    "traits": {
     "instinct": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "repression": [
      "低",
      "低",
      "低",
      "低",
      "低"
     ]
    },
    "traitStats": {
     "instinct": [
      "0%",
      "0%",
      "45%",
      "45%",
      "50%"
     ],
     "insight": [
      "45%",
      "50%",
      "50%",
      "55%",
      "55%"
     ],
     "attachment": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "repression": [
      "30%",
      "30%",
      "30%",
      "30%",
      "30%"
     ]
    },
    "isTool": false
   },
   "dmgType": "红",
   "counter": "3",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 67,
   "id": "F-02-58",
   "name": "又大又可能很坏的狼",
   "danger": "WAW",
   "prefix": "F",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "一般情况下不会出逃，但是出逃了很难打",
   "weaponText": "良(W) 【近(3)】\nDPS：7.92(14.45)+2  同上",
   "weaponGrades": [
    "良"
   ],
   "weaponGrade": "良",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "近",
   "rangeValue": 3,
   "weaponTail": "",
   "weaponDps": 7.92,
   "weaponDpsMax": 14.45,
   "weaponNote": "DPS：7.92(14.45)+2  同上",
   "armorText": "良(W)\n0.4 0.8 0.7 2.0 红抗甲，三抗不低注意蓝抗",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "W"
   ],
   "armorType": "W",
   "armorResist": [
    0.4,
    0.8,
    0.7,
    2.0
   ],
   "armorNote": "0.4 0.8 0.7 2.0 红抗甲，三抗不低注意蓝抗",
   "suppressText": "可镇压\n不容易镇压",
   "canSuppress": true,
   "suppressGrade": "较难",
   "suppressNote": "不容易镇压",
   "search": "f-02-58 又大又可能很坏的狼 waw 中\n一般情况下不会出逃，但是出逃了很难打 良(w) 【近(3)】\ndps：7.92(14.45)+2  同上 良(w)\n0.4 0.8 0.7 2.0 红抗甲，三抗不低注意蓝抗 可镇压\n不容易镇压 红 red 2 waw 较难 可镇压\n不容易镇压",
   "wiki": {
    "id": "F-02-58",
    "title": "F-02-58 又大又可能很坏的狼",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/F-02-58_%E5%8F%88%E5%A4%A7%E5%8F%88%E5%8F%AF%E8%83%BD%E5%BE%88%E5%9D%8F%E7%9A%84%E7%8B%BC",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "对“又大又可能很坏的狼”的镇压将是极其具有挑战性的。它的免伤快速移动使得员工难以集合对它进行追击，而单次造成伤害300点的上限使得员工必须多次追击狼才能将其镇压。加上狼的标记附加位置随机，除非主管的运气极好，狼只在两个相邻的主休息室反复横跳，不然主管根本无法快速将狼镇压。\n\n虽然狼的攻击伤害并不算很高，但主管无法让它半血后不嚎叫。无论主管的员工或装备质量有多么好，也几乎无法避免出逃的狼发出嚎叫，有的时候这会导致极为严重且无法避免的连锁反应。在狼出逃后，集合狼所在休息室周围的员工直接冲上去镇压可能是主管唯一的选择。\n\n雇佣小红帽雇佣兵或兔子去镇压狼并不是个好主意。虽然小红帽的战斗力略优于狼，但狼会在血量削减的过程中多次嚎叫，释放出来的高危异想体可能会严重影响主管的日常管理和镇压工作。而迷雾状态下的狼可以突破兔子的封锁直接离开部门，这使得兔子根本无法对出逃的狼造成有效伤害。所以，相比于如何给出它的镇压建议，主管更应该专注于如何不让它出逃。\n\n如果狼已经出逃且主管想尽力挽回局面，那么就赌一赌狼不会在高危异想体所在部门和周围部门的主休息室添加标记吧，对于这种无法快速镇压且移动位置比较看主管运气的异想体，除了追着打，或许真的没有什么特别有用的镇压建议。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "红",
    "dmgTypeRaw": "red",
    "dmgStat": "4-8",
    "counter": "2",
    "maxPeBox": 22.0,
    "mood": {
     "优": "18-22",
     "良": "10-17",
     "差": "0-9"
    },
    "workSpeed": 0.33,
    "workCd": 15.0,
    "fearDamage": "n",
    "noEscape": null,
    "resist": {
     "red": 1.0,
     "white": 0.7,
     "black": 0.7,
     "pale": 1.0
    },
    "resistWord": {
     "red": "抗性一般",
     "white": "抗性较高",
     "black": "抗性较高",
     "pale": "抗性一般"
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "低",
      "低",
      "低",
      "低",
      "低"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ]
    },
    "traitStats": {
     "instinct": [
      "40%",
      "40%",
      "45%",
      "45%",
      "50%"
     ],
     "insight": [
      "30%",
      "30%",
      "30%",
      "20%",
      "20%"
     ],
     "attachment": [
      "45%",
      "50%",
      "50%",
      "55%",
      "55%"
     ],
     "repression": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ]
    },
    "isTool": false
   },
   "dmgType": "红",
   "counter": "2",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 69,
   "id": "O-03-60",
   "name": "宇宙碎片",
   "danger": "TETH",
   "prefix": "O",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "要求工作优，还算好管，出逃后期没压力",
   "weaponText": "优(T) 【一般(4)】\nDPS：4.67  前期战神，还加精神值",
   "weaponGrades": [
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "T"
   ],
   "weaponType": "T",
   "rangeLabel": "一般",
   "rangeValue": 4,
   "weaponTail": "",
   "weaponDps": 4.67,
   "weaponDpsMax": null,
   "weaponNote": "DPS：4.67  前期战神，还加精神值",
   "armorText": "差(T)\n1.0 1.2 0.6 2.0 紫抗甲，红白都不行",
   "armorGrades": [
    "差"
   ],
   "armorGrade": "差",
   "armorTypes": [
    "T"
   ],
   "armorType": "T",
   "armorResist": [
    1.0,
    1.2,
    0.6,
    2.0
   ],
   "armorNote": "1.0 1.2 0.6 2.0 紫抗甲，红白都不行",
   "suppressText": "可镇压\n容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压",
   "search": "o-03-60 宇宙碎片 teth 中\n要求工作优，还算好管，出逃后期没压力 优(t) 【一般(4)】\ndps：4.67  前期战神，还加精神值 差(t)\n1.0 1.2 0.6 2.0 紫抗甲，红白都不行 可镇压\n容易镇压 黑 black 2 teth 容易 可镇压\n容易镇压",
   "wiki": {
    "id": "O-03-60",
    "title": "O-03-60 宇宙碎片",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-03-60_%E5%AE%87%E5%AE%99%E7%A2%8E%E7%89%87",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "TETH",
    "tool": null,
    "dmgType": "黑",
    "dmgTypeRaw": "black",
    "dmgStat": "1-3",
    "counter": "2",
    "maxPeBox": 12.0,
    "mood": {
     "优": "8-12",
     "良": "4-7",
     "差": "0-3"
    },
    "workSpeed": 0.35,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 1.0,
     "white": 1.5,
     "black": 1.0,
     "pale": 2.0
    },
    "resistWord": {
     "red": "抗性一般",
     "white": "抗性较低",
     "black": "抗性一般",
     "pale": "抗性极低"
    },
    "traits": {
     "instinct": [
      "低",
      "低",
      "低",
      "低",
      "低"
     ],
     "insight": [
      "一般",
      "一般",
      "低",
      "低",
      "低"
     ],
     "attachment": [
      "高",
      "高",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "30%",
      "30%",
      "20%",
      "20%",
      "20%"
     ],
     "insight": [
      "40%",
      "40%",
      "30%",
      "30%",
      "30%"
     ],
     "attachment": [
      "60%",
      "60%",
      "50%",
      "50%",
      "50%"
     ],
     "repression": [
      "50%",
      "50%",
      "40%",
      "40%",
      "40%"
     ]
    },
    "isTool": false
   },
   "dmgType": "黑",
   "counter": "2",
   "isTool": false,
   "type": "TETH"
  },
  {
   "row": 71,
   "id": "O-05-61",
   "name": "破裂盔甲",
   "danger": "TETH",
   "prefix": "O",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "压迫会获即死机制的饰品，本能就行",
   "weaponText": "优(H) 【一般(4)】\nDPS：6.03  高贵的蓝伤",
   "weaponGrades": [
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "H"
   ],
   "weaponType": "H",
   "rangeLabel": "一般",
   "rangeValue": 4,
   "weaponTail": "",
   "weaponDps": 6.03,
   "weaponDpsMax": null,
   "weaponNote": "DPS：6.03  高贵的蓝伤",
   "armorText": "优(T)\n0.6 0.9 0.9 2.0 三色都不弱，高红抗",
   "armorGrades": [
    "优"
   ],
   "armorGrade": "优",
   "armorTypes": [
    "T"
   ],
   "armorType": "T",
   "armorResist": [
    0.6,
    0.9,
    0.9,
    2.0
   ],
   "armorNote": "0.6 0.9 0.9 2.0 三色都不弱，高红抗",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "o-05-61 破裂盔甲 teth 中\n压迫会获即死机制的饰品，本能就行 优(h) 【一般(4)】\ndps：6.03  高贵的蓝伤 优(t)\n0.6 0.9 0.9 2.0 三色都不弱，高红抗  红 red x teth 未填",
   "wiki": {
    "id": "O-05-61",
    "title": "O-05-61 破裂盔甲",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-05-61_%E7%A0%B4%E8%A3%82%E7%9B%94%E7%94%B2",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "TETH",
    "tool": null,
    "dmgType": "红",
    "dmgTypeRaw": "red",
    "dmgStat": "2-4",
    "counter": "X",
    "maxPeBox": 12.0,
    "mood": {
     "优": "11-12",
     "良": "6-10",
     "差": "0-5"
    },
    "workSpeed": 0.3,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "高"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "repression": [
      "高",
      "高",
      "高",
      "高",
      "高"
     ]
    },
    "traitStats": {
     "instinct": [
      "50%",
      "50%",
      "55%",
      "55%",
      "60%"
     ],
     "insight": [
      "40%",
      "40%",
      "40%",
      "40%",
      "40%"
     ],
     "attachment": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "repression": [
      "60%",
      "60%",
      "65%",
      "65%",
      "70%"
     ]
    },
    "isTool": false
   },
   "dmgType": "红",
   "counter": "X",
   "isTool": false,
   "type": "TETH"
  },
  {
   "row": 73,
   "id": "O-02-62",
   "name": "审判鸟",
   "danger": "WAW",
   "prefix": "O",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "不难管，但是注意蓝伤，最好有盈泪套再去摸",
   "weaponText": "良(A) 【一般(4)】\nDPS：8.63  抬手慢，dps低，优点在于蓝伤",
   "weaponGrades": [
    "良",
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "A"
   ],
   "weaponType": "A",
   "rangeLabel": "一般",
   "rangeValue": 4,
   "weaponTail": "",
   "weaponDps": 8.63,
   "weaponDpsMax": null,
   "weaponNote": "DPS：8.63  抬手慢，dps低，优点在于蓝伤",
   "armorText": "良(A)\n0.5 0.5 0.5 0.5 稀有的蓝抗甲，摸白夜用",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "A"
   ],
   "armorType": "A",
   "armorResist": [
    0.5,
    0.5,
    0.5,
    0.5
   ],
   "armorNote": "0.5 0.5 0.5 0.5 稀有的蓝抗甲，摸白夜用",
   "suppressText": "可镇压\n容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压",
   "search": "o-02-62 审判鸟 waw 中\n不难管，但是注意蓝伤，最好有盈泪套再去摸 良(a) 【一般(4)】\ndps：8.63  抬手慢，dps低，优点在于蓝伤 良(a)\n0.5 0.5 0.5 0.5 稀有的蓝抗甲，摸白夜用 可镇压\n容易镇压 淡 pale 2 waw 容易 可镇压\n容易镇压",
   "wiki": {
    "id": "O-02-62",
    "title": "O-02-62 审判鸟",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-02-62_%E5%AE%A1%E5%88%A4%E9%B8%9F",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "“审判鸟”的镇压工作通常是较为容易的。对于大多数经验丰富的主管来说，虽然“审判鸟”所造成的灵魂伤害能在缺乏灵魂抗性护甲的游戏前期造成不小威胁，但是“审判鸟”的攻击有很长的前摇，并且释放动作非常明显。一般而言，只要员工的移动速度达到一定程度，且当前所处的房间并不宽时，主管可以通过指挥员工离开当前房间来躲避“审判鸟”的攻击。\n\n“审判鸟”只对职员具有仇恨，“小红帽雇佣兵”和兔子都能有效的镇压出逃的“审判鸟”。\n\n唯一要注意的是，“审判鸟”很有可能会造成大量的文职伤亡，这可能会触发一系列连锁效应，例如异想体“大鸟”的出逃，并瞬间触发“黑森林”事件，从而引来难以对付的“终末鸟”\n\n“审判鸟”自己的武器和护甲就是对抗它的最佳选择，那些来复枪和弩模板的武器所具有的高抬手速度也可以让它们在镇压“审判鸟”时起到较大的帮助。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "淡",
    "dmgTypeRaw": "pale",
    "dmgStat": "5-7",
    "counter": "2",
    "maxPeBox": 24.0,
    "mood": {
     "优": "13-24",
     "良": "7-12",
     "差": "0-6"
    },
    "workSpeed": 0.35,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 0.8,
     "white": 0.8,
     "black": 0.8,
     "pale": 2.0
    },
    "resistWord": {
     "red": "抗性较高",
     "white": "抗性较高",
     "black": "抗性较高",
     "pale": "抗性极低"
    },
    "traits": {
     "instinct": [
      "低",
      "低",
      "低",
      "一般",
      "一般"
     ],
     "insight": [
      "低",
      "低",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "低",
      "低",
      "低",
      "一般",
      "一般"
     ],
     "repression": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ]
    },
    "traitStats": {
     "instinct": [
      "20%",
      "20%",
      "35%",
      "45%",
      "45%"
     ],
     "insight": [
      "20%",
      "20%",
      "40%",
      "50%",
      "50%"
     ],
     "attachment": [
      "20%",
      "20%",
      "35%",
      "45%",
      "45%"
     ],
     "repression": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ]
    },
    "isTool": false
   },
   "dmgType": "淡",
   "counter": "2",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 75,
   "id": "O-02-63",
   "name": "终末鸟",
   "danger": "ALEPH",
   "prefix": "O",
   "mgmtGrades": [
    "论外"
   ],
   "mgmtGrade": "论外",
   "mgmtNote": "",
   "weaponText": "极优(A) 【一般(6)】\nDPS：34.04(68.08)  混伤，适合给战神员工用",
   "weaponGrades": [
    "极优"
   ],
   "weaponGrade": "极优",
   "weaponTypes": [
    "A"
   ],
   "weaponType": "A",
   "rangeLabel": "一般",
   "rangeValue": 6,
   "weaponTail": "",
   "weaponDps": 34.04,
   "weaponDpsMax": 68.08,
   "weaponNote": "DPS：34.04(68.08)  混伤，适合给战神员工用",
   "armorText": "极优(A)\n0.3 0.3 0.3 0.5 适合给战神员工用",
   "armorGrades": [
    "极优"
   ],
   "armorGrade": "极优",
   "armorTypes": [
    "A"
   ],
   "armorType": "A",
   "armorResist": [
    0.3,
    0.3,
    0.3,
    0.5
   ],
   "armorNote": "0.3 0.3 0.3 0.5 适合给战神员工用",
   "suppressText": "镇压“终末鸟”将会是主管遇到的较难的镇压考验之一，尤其是在员工装备尚未成型的游戏前期和中期，“终末鸟”的能力让它可能使一些具有高威胁的异想体出逃，并让场面变得更加混乱。如果难以构成迅速镇压“小喙”，“长臂”和“大眼”的员工火力，则很难在“终末鸟”造成更多麻烦之前将其镇压。因此，如果在保证员工生存率的情况下，主管不应在没有任何准备的前提下急于镇压“终末鸟”。同时，“终末鸟”的魅惑能力和融毁能力的影响会随着设施的开放和高危异想体的收容而逐渐增加。如果主管已经拥有足够的 E.G.O 和员工，更建议在尽可能早的时间点镇压“终末鸟”。以此避免“终末鸟”过多地魅惑职员、魅惑的职员难以到达“终末鸟”的房间以解除魅惑、亦或是来不及处理设施内高危异想体的融毁。\n\n如果决定镇压“终末鸟”，应准备好大量造成精神伤害的 E.G.O 装备的员工来构成重火力，尽可能快地将“大眼”和“长臂”镇压。如果设施内收容有较多高威胁性的异想体，在战斗开始时，建议优先选择镇压“大眼”，然后处理“长臂”，最后再去击杀“小喙”。另外一种对抗“终末鸟”的方法是，在战斗开始前派遣一部分工作员工去镇守那些可能因为“终末鸟”而进入熔毁状态的异想体收容单元，并在战斗开始后派遣所有战斗员工优先镇压“长臂”，来防止在禁用暂停的条件下处理过多的熔毁以及异想体出逃。\n\n在游戏的前中期，主管没有足够的火力输出时，终末鸟的大面积融毁是十分致命的。不处理融毁，在火力不足的情况下很容易造成大规模的异想体出逃或特殊能力触发。而打算处理融毁时，如若不能快速解决掉大眼和长臂，则主管要进行至少三线的操作（处理融毁，拉走刚解除魅惑的员工，关注融毁状况并安排员工镇压），这会极大幅度的消耗主管的精力，加上终末鸟出逃时的掉帧，乱七八糟意外的发生概率会大大增加。因而，在异想体配置较为麻烦且 E.G.O 质量不足时，不建议主管过早尝试镇压终末鸟。",
   "canSuppress": true,
   "suppressGrade": "可镇压",
   "suppressNote": "",
   "search": "o-02-63 终末鸟 aleph 论外 极优(a) 【一般(6)】\ndps：34.04(68.08)  混伤，适合给战神员工用 极优(a)\n0.3 0.3 0.3 0.5 适合给战神员工用 可镇压\n算三个a，不容易但是方便 未知 ??? 0 aleph 未填 可镇压\n算三个a，不容易但是方便",
   "wiki": {
    "id": "O-02-63",
    "title": "O-02-63 终末鸟",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-02-63_%E7%BB%88%E6%9C%AB%E9%B8%9F",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "镇压“终末鸟”将会是主管遇到的较难的镇压考验之一，尤其是在员工装备尚未成型的游戏前期和中期，“终末鸟”的能力让它可能使一些具有高威胁的异想体出逃，并让场面变得更加混乱。如果难以构成迅速镇压“小喙”，“长臂”和“大眼”的员工火力，则很难在“终末鸟”造成更多麻烦之前将其镇压。因此，如果在保证员工生存率的情况下，主管不应在没有任何准备的前提下急于镇压“终末鸟”。同时，“终末鸟”的魅惑能力和融毁能力的影响会随着设施的开放和高危异想体的收容而逐渐增加。如果主管已经拥有足够的 E.G.O 和员工，更建议在尽可能早的时间点镇压“终末鸟”。以此避免“终末鸟”过多地魅惑职员、魅惑的职员难以到达“终末鸟”的房间以解除魅惑、亦或是来不及处理设施内高危异想体的融毁。\n\n如果决定镇压“终末鸟”，应准备好大量造成精神伤害的 E.G.O 装备的员工来构成重火力，尽可能快地将“大眼”和“长臂”镇压。如果设施内收容有较多高威胁性的异想体，在战斗开始时，建议优先选择镇压“大眼”，然后处理“长臂”，最后再去击杀“小喙”。另外一种对抗“终末鸟”的方法是，在战斗开始前派遣一部分工作员工去镇守那些可能因为“终末鸟”而进入熔毁状态的异想体收容单元，并在战斗开始后派遣所有战斗员工优先镇压“长臂”，来防止在禁用暂停的条件下处理过多的熔毁以及异想体出逃。\n\n在游戏的前中期，主管没有足够的火力输出时，终末鸟的大面积融毁是十分致命的。不处理融毁，在火力不足的情况下很容易造成大规模的异想体出逃或特殊能力触发。而打算处理融毁时，如若不能快速解决掉大眼和长臂，则主管要进行至少三线的操作（处理融毁，拉走刚解除魅惑的员工，关注融毁状况并安排员工镇压），这会极大幅度的消耗主管的精力，加上终末鸟出逃时的掉帧，乱七八糟意外的发生概率会大大增加。因而，在异想体配置较为麻烦且 E.G.O 质量不足时，不建议主管过早尝试镇压终末鸟。",
    "toolText": null,
    "ok": true,
    "level": "ALEPH",
    "tool": null,
    "dmgType": "未知",
    "dmgTypeRaw": "???",
    "dmgStat": "???",
    "counter": "0",
    "maxPeBox": null,
    "mood": {
     "优": null,
     "良": null,
     "差": null
    },
    "workSpeed": null,
    "workCd": null,
    "fearDamage": "sp",
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {},
    "traitStats": {},
    "isTool": false
   },
   "dmgType": "未知",
   "counter": "0",
   "isTool": false,
   "type": "ALEPH"
  },
  {
   "row": 77,
   "id": "O-01-64",
   "name": "贪婪女王",
   "danger": "WAW",
   "prefix": "O",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "要求工作优，出逃比较麻烦",
   "weaponText": "良(A) 【极近(2)】\nDPS：12.0(20.5)  极近，有debuff，但伤害高",
   "weaponGrades": [
    "良"
   ],
   "weaponGrade": "良",
   "weaponTypes": [
    "A"
   ],
   "weaponType": "A",
   "rangeLabel": "极近",
   "rangeValue": 2,
   "weaponTail": "",
   "weaponDps": 12.0,
   "weaponDpsMax": 20.5,
   "weaponNote": "DPS：12.0(20.5)  极近，有debuff，但伤害高",
   "armorText": "良(W)\n0.4 0.7 0.8 2.0 红抗甲，三抗好蓝抗低",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "W"
   ],
   "armorType": "W",
   "armorResist": [
    0.4,
    0.7,
    0.8,
    2.0
   ],
   "armorNote": "0.4 0.7 0.8 2.0 红抗甲，三抗好蓝抗低",
   "suppressText": "可镇压\n容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压",
   "search": "o-01-64 贪婪女王 waw 中\n要求工作优，出逃比较麻烦 良(a) 【极近(2)】\ndps：12.0(20.5)  极近，有debuff，但伤害高 良(w)\n0.4 0.7 0.8 2.0 红抗甲，三抗好蓝抗低 可镇压\n容易镇压 红 red 1 waw 容易 可镇压\n容易镇压",
   "wiki": {
    "id": "O-01-64",
    "title": "O-01-64 贪婪女王",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-01-64_%E8%B4%AA%E5%A9%AA%E5%A5%B3%E7%8E%8B",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "因为“贪婪女王”正面极高的伤害，如果主管的员工进入了“贪婪女王”的伤害范围且没有足够高的正义和物理抗性，则这名员工会被瞬间蒸发。因此，如果主管想避免职员的损失，就应该使用远程武器或是从贪婪的后面对其进行镇压。\n\n镇压“贪婪女王”的工作在缺乏重火力时会较为麻烦。由于“贪婪女王”对物理伤害完全免疫，并拥有很高的精神抗性，因此若设施内缺乏造成高侵蚀或高灵魂伤害的员工，则镇压工作会显得较为吃力。建议在缺乏镇压火力时将所有员工调动到较为安全的位置，并集中员工力量，在“贪婪女王”途经附近的走廊时就出动镇压。笑靥、失乐园和霜之碎片等E.G.O武器的减速效果能起到很大作用，减速子弹亦能帮助员工在“贪婪女王”瞬移离开之前对其造成更多的伤害。\n\n“贪婪女王”会对走廊内的员工造成不小的威胁，且员工可能会在镇压它的时候自己走入它的攻击范围。所以“贪婪女王”出逃后，主管应将不参与镇压的员工安排在部门的休息室内并停止对他们安排工作，且时刻关注“贪婪女王”开启传送门的位置。尤其是控制部、研发部和记录部的单向异想体走廊，“贪婪女王”的出现很有可能会将出于其中的员工的逃生路线封死。因此，在“贪婪女王”出逃后，切记将这三个部门走廊上的员工调离。\n\n在主管拥有的火力不够又或是它在较远的走廊之间来回传送时，镇压“贪婪女王”将会是一个十分漫长的过程。如果主管没有提前处理文职，则出逃的“贪婪女王”会造成极大规模的文职伤亡。请主管留意可能会出现的连锁反应并及时做好应对。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "红",
    "dmgTypeRaw": "red",
    "dmgStat": "5 - 7",
    "counter": "1",
    "maxPeBox": 22.0,
    "mood": {
     "优": "16 - 22",
     "良": "8 - 15",
     "差": "0 - 7"
    },
    "workSpeed": 0.35,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 0.0,
     "white": 0.5,
     "black": 1.2,
     "pale": 1.5
    },
    "resistWord": {
     "red": "免疫",
     "white": "抗性较高",
     "black": "抗性较低",
     "pale": "抗性较低"
    },
    "traits": {
     "instinct": [
      "低",
      "低",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "attachment": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "25%",
      "25%",
      "50%",
      "50%",
      "55%"
     ],
     "insight": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "attachment": [
      "0%",
      "0%",
      "50%",
      "50%",
      "55%"
     ],
     "repression": [
      "0%",
      "0%",
      "40%",
      "40%",
      "40%"
     ]
    },
    "isTool": false
   },
   "dmgType": "红",
   "counter": "1",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 79,
   "id": "O-04-66",
   "name": "小王子",
   "danger": "WAW",
   "prefix": "O",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "感染型，不好搞",
   "weaponText": "极优(W) 【一般(4)】\nDPS：8.0  白易伤，dps高",
   "weaponGrades": [
    "极优"
   ],
   "weaponGrade": "极优",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "一般",
   "rangeValue": 4,
   "weaponTail": "",
   "weaponDps": 8.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：8.0  白易伤，dps高",
   "armorText": "差(W)\n0.8 0.6 1.2 1.5 白抗甲，弱紫",
   "armorGrades": [
    "差"
   ],
   "armorGrade": "差",
   "armorTypes": [
    "W"
   ],
   "armorType": "W",
   "armorResist": [
    0.8,
    0.6,
    1.2,
    1.5
   ],
   "armorNote": "0.8 0.6 1.2 1.5 白抗甲，弱紫",
   "suppressText": "由于【小王子-1】除精神抗性外的抗性均较低，伤害频率也不高，且一次只会出现一只。加上它只会在“小王子”收容单元所在的走廊内徘徊，除常规的远程消耗和较高侵蚀抗性员工抗线的方法外，即使主管的装备和员工质量极差，也可以多次撤走员工进行回复后再重新让他们加入战斗。【小王子-1】死后的精神伤害就更不值得一提了，总额才只有5-15点，甚至连健康的文职人员都不一定弄的疯，更何况这个是感染还是概率感染呢。",
   "canSuppress": true,
   "suppressGrade": "可镇压",
   "suppressNote": "",
   "search": "o-04-66 小王子 waw 低\n感染型，不好搞 极优(w) 【一般(4)】\ndps：8.0  白易伤，dps高 差(w)\n0.8 0.6 1.2 1.5 白抗甲，弱紫  黑 black 2 waw 未填",
   "wiki": {
    "id": "O-04-66",
    "title": "O-04-66 小王子",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-04-66_%E5%B0%8F%E7%8E%8B%E5%AD%90",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": "由于【小王子-1】除精神抗性外的抗性均较低，伤害频率也不高，且一次只会出现一只。加上它只会在“小王子”收容单元所在的走廊内徘徊，除常规的远程消耗和较高侵蚀抗性员工抗线的方法外，即使主管的装备和员工质量极差，也可以多次撤走员工进行回复后再重新让他们加入战斗。【小王子-1】死后的精神伤害就更不值得一提了，总额才只有5-15点，甚至连健康的文职人员都不一定弄的疯，更何况这个是感染还是概率感染呢。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "黑",
    "dmgTypeRaw": "black",
    "dmgStat": "3-4",
    "counter": "2",
    "maxPeBox": 24.0,
    "mood": {
     "优": "16-24",
     "良": "9-15",
     "差": "0-8"
    },
    "workSpeed": 0.25,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "低",
      "低",
      "低",
      "一般",
      "一般"
     ],
     "attachment": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "0%",
      "0%",
      "40%",
      "40%",
      "40%"
     ],
     "insight": [
      "25%",
      "30%",
      "35%",
      "40%",
      "45%"
     ],
     "attachment": [
      "0%",
      "0%",
      "50%",
      "50%",
      "55%"
     ],
     "repression": [
      "0%",
      "0%",
      "50%",
      "50%",
      "55%"
     ]
    },
    "isTool": false
   },
   "dmgType": "黑",
   "counter": "2",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 81,
   "id": "O-01-67",
   "name": "蕾蒂希娅",
   "danger": "HE",
   "prefix": "O",
   "mgmtGrades": [
    "中",
    "高"
   ],
   "mgmtGrade": "高",
   "mgmtNote": "成功率高的话基本不会出良",
   "weaponText": "极优(H) 【极远(25)】\nDPS：5.5  来复枪模板都很好用",
   "weaponGrades": [
    "极优"
   ],
   "weaponGrade": "极优",
   "weaponTypes": [
    "H"
   ],
   "weaponType": "H",
   "rangeLabel": "极远",
   "rangeValue": 25,
   "weaponTail": "",
   "weaponDps": 5.5,
   "weaponDpsMax": null,
   "weaponNote": "DPS：5.5  来复枪模板都很好用",
   "armorText": "优(H)\n0.7 0.7 0.7 1.5 H级均衡甲",
   "armorGrades": [
    "优"
   ],
   "armorGrade": "优",
   "armorTypes": [
    "H"
   ],
   "armorType": "H",
   "armorResist": [
    0.7,
    0.7,
    0.7,
    1.5
   ],
   "armorNote": "0.7 0.7 0.7 1.5 H级均衡甲",
   "suppressText": "由于“小女孩的朋友”只拥有一种近战攻击方式，且只能对单个目标造成伤害。主管可以选择用远程武器消耗它或者几个物理抗性较高的员工轮流前去镇压。但是“小女孩的朋友”出现时，代表主管已经出现了不必要的人员伤亡，所以相比于镇压它，更建议不要让它出现。",
   "canSuppress": true,
   "suppressGrade": "可镇压",
   "suppressNote": "",
   "search": "o-01-67 蕾蒂希娅 he 中\n成功率高的话基本不会出良 极优(h) 【极远(25)】\ndps：5.5  来复枪模板都很好用 优(h)\n0.7 0.7 0.7 1.5 h级均衡甲  黑 black x he 未填",
   "wiki": {
    "id": "O-01-67",
    "title": "O-01-67 蕾蒂希娅",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-01-67_%E8%95%BE%E8%92%82%E5%B8%8C%E5%A8%85",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": "由于“小女孩的朋友”只拥有一种近战攻击方式，且只能对单个目标造成伤害。主管可以选择用远程武器消耗它或者几个物理抗性较高的员工轮流前去镇压。但是“小女孩的朋友”出现时，代表主管已经出现了不必要的人员伤亡，所以相比于镇压它，更建议不要让它出现。",
    "toolText": null,
    "ok": true,
    "level": "HE",
    "tool": null,
    "dmgType": "黑",
    "dmgTypeRaw": "black",
    "dmgStat": "2-4",
    "counter": "X",
    "maxPeBox": 16.0,
    "mood": {
     "优": "11-16",
     "良": "7-10",
     "差": "0-6"
    },
    "workSpeed": 0.25,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "高",
      "高",
      "高",
      "高",
      "高"
     ],
     "repression": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ]
    },
    "traitStats": {
     "instinct": [
      "40%",
      "45%",
      "50%",
      "50%",
      "50%"
     ],
     "insight": [
      "40%",
      "40%",
      "40%",
      "40%",
      "40%"
     ],
     "attachment": [
      "60%",
      "60%",
      "60%",
      "65%",
      "65%"
     ],
     "repression": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ]
    },
    "isTool": false
   },
   "dmgType": "黑",
   "counter": "X",
   "isTool": false,
   "type": "HE"
  },
  {
   "row": 83,
   "id": "T-01-68",
   "name": "亡蝶葬仪",
   "danger": "HE",
   "prefix": "T",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "容易出逃也容易镇压",
   "weaponText": "良(W) 【远(10)】\nDPS：4+4  混伤，再W级里比较一般",
   "weaponGrades": [
    "良"
   ],
   "weaponGrade": "良",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "远",
   "rangeValue": 10,
   "weaponTail": "",
   "weaponDps": 4.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：4+4  混伤，再W级里比较一般",
   "armorText": "良(H)\n1.2 0.8 0.5 1.5 紫抗甲，弱红",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "H"
   ],
   "armorType": "H",
   "armorResist": [
    1.2,
    0.8,
    0.5,
    1.5
   ],
   "armorNote": "1.2 0.8 0.5 1.5 紫抗甲，弱红",
   "suppressText": "可镇压\n容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压",
   "search": "t-01-68 亡蝶葬仪 he 中\n容易出逃也容易镇压 良(w) 【远(10)】\ndps：4+4  混伤，再w级里比较一般 良(h)\n1.2 0.8 0.5 1.5 紫抗甲，弱红 可镇压\n容易镇压 白 white 2 he 容易 可镇压\n容易镇压",
   "wiki": {
    "id": "T-01-68",
    "title": "T-01-68 亡蝶葬仪",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-01-68_%E4%BA%A1%E8%9D%B6%E8%91%AC%E4%BB%AA",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "虽然亡蝶葬仪的普通攻击伤害不高，但由于它的攻击是即时起效，主管在不熟悉它的攻击机制时难以走位来躲避它的普通攻击。也就是说，亡蝶葬仪会对锁定的低谨慎又或是护甲精神抗性较低的员工造成一定的威胁。加上它范围攻击伤害的白伤总量其实不低，且覆盖范围较大，如果主管准备镇压亡蝶葬仪，请尽量不要让那些低谨慎又或是低白抗的员工参战。\n\n当熟悉了亡蝶葬仪的攻击机制后，主管可以操纵员工在亡蝶葬仪的攻击前摇开始时走到它的背后。这样即使亡蝶葬仪攻击动画完成，它也无法对员工造成伤害。这可以大幅度减小亡蝶葬仪的镇压难度。\n\n但因为亡蝶葬仪的抗性实际上偏低，一些高dps的精神伤害或侵蚀伤害武器能够在它对低属性员工造成威胁前就将其镇压，而中后期这样的武器十分常见，甚至Da capo这样极高dps的武器能够直接把它摁死在收容室内，所以亡蝶葬仪就有了丢人蝶哥的称号。但请新主管不要因为这个称号忽略了它本身HE的危险等级，对于新主管来说，它仍然能造成一定的威胁。",
    "toolText": null,
    "ok": true,
    "level": "HE",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "4-6",
    "counter": "2",
    "maxPeBox": 16.0,
    "mood": {
     "优": "11-16",
     "良": "7-10",
     "差": "0-6"
    },
    "workSpeed": 0.35,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 0.5,
     "white": 1.5,
     "black": 1.0,
     "pale": 2.0
    },
    "resistWord": {
     "red": "抗性较高",
     "white": "抗性较低",
     "black": "抗性一般",
     "pale": "抗性极低"
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "极低",
      "极低"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "repression": [
      "极低",
      "极低",
      "高",
      "高",
      "高"
     ]
    },
    "traitStats": {
     "instinct": [
      "50%",
      "45%",
      "40%",
      "0%",
      "0%"
     ],
     "insight": [
      "50%",
      "50%",
      "50%",
      "50%",
      "50%"
     ],
     "attachment": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "repression": [
      "0%",
      "0%",
      "60%",
      "60%",
      "60%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "2",
   "isTool": false,
   "type": "HE"
  },
  {
   "row": 85,
   "id": "F-01-69",
   "name": "魔弹射手",
   "danger": "HE",
   "prefix": "F",
   "mgmtGrades": [
    "高"
   ],
   "mgmtGrade": "高",
   "mgmtNote": "魔弹的枪清文职好用",
   "weaponText": "优(W) 【极远(50)】\nDPS：9.0(10.3/11.6)  很强的武器，缺点是有友伤",
   "weaponGrades": [
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "极远",
   "rangeValue": 50,
   "weaponTail": "",
   "weaponDps": 9.0,
   "weaponDpsMax": 10.3,
   "weaponNote": "DPS：9.0(10.3/11.6)  很强的武器，缺点是有友伤",
   "armorText": "优(H)\n0.7 0.7 0.7 1.5 H级均衡甲",
   "armorGrades": [
    "优"
   ],
   "armorGrade": "优",
   "armorTypes": [
    "H"
   ],
   "armorType": "H",
   "armorResist": [
    0.7,
    0.7,
    0.7,
    1.5
   ],
   "armorNote": "0.7 0.7 0.7 1.5 H级均衡甲",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "f-01-69 魔弹射手 he 高\n魔弹的枪清文职好用 优(w) 【极远(50)】\ndps：9.0(10.3/11.6)  很强的武器，缺点是有友伤 优(h)\n0.7 0.7 0.7 1.5 h级均衡甲  黑 black 3 he 未填",
   "wiki": {
    "id": "F-01-69",
    "title": "F-01-69 魔弹射手",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/F-01-69_%E9%AD%94%E5%BC%B9%E5%B0%84%E6%89%8B",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "HE",
    "tool": null,
    "dmgType": "黑",
    "dmgTypeRaw": "black",
    "dmgStat": "3-4",
    "counter": "3",
    "maxPeBox": 18.0,
    "mood": {
     "优": "12-18",
     "良": "7-11",
     "差": "0-6"
    },
    "workSpeed": 0.33,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "低",
      "低",
      "低",
      "低",
      "低"
     ],
     "repression": [
      "极低",
      "极低",
      "高",
      "高",
      "高"
     ]
    },
    "traitStats": {
     "instinct": [
      "40%",
      "40%",
      "40%",
      "40%",
      "40%"
     ],
     "insight": [
      "50%",
      "50%",
      "50%",
      "50%",
      "50%"
     ],
     "attachment": [
      "30%",
      "30%",
      "30%",
      "30%",
      "30%"
     ],
     "repression": [
      "0%",
      "0%",
      "60%",
      "60%",
      "60%"
     ]
    },
    "isTool": false
   },
   "dmgType": "黑",
   "counter": "3",
   "isTool": false,
   "type": "HE"
  },
  {
   "row": 87,
   "id": "F-02-70",
   "name": "黑天鹅之梦",
   "danger": "WAW",
   "prefix": "F",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "不太会出逃的类型",
   "weaponText": "良(W) 【近(3)】\nDPS：7.97  有反伤，但不实用，有时还有反作用",
   "weaponGrades": [
    "良"
   ],
   "weaponGrade": "良",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "近",
   "rangeValue": 3,
   "weaponTail": "",
   "weaponDps": 7.97,
   "weaponDpsMax": null,
   "weaponNote": "DPS：7.97  有反伤，但不实用，有时还有反作用",
   "armorText": "差(W)\n0.6 1.2 0.8 1.5 红抗甲，弱白",
   "armorGrades": [
    "差"
   ],
   "armorGrade": "差",
   "armorTypes": [
    "W"
   ],
   "armorType": "W",
   "armorResist": [
    0.6,
    1.2,
    0.8,
    1.5
   ],
   "armorNote": "0.6 1.2 0.8 1.5 红抗甲，弱白",
   "suppressText": "因为伊利亚出现的位置完全随机，它可能会直接出现在某些低计数器高危异想体如一无所有，贪婪女王的门口并使得这些异想体直接出逃。加上伊利亚撑伞时必定会进行位移，且移动速度不低。如果主管不能较快的将它镇压，则它可能引起的连锁反应将是极为恐怖的。因此如果伊利亚出现在了设施内，请主管谨慎对待可能的连锁反应并优先对其进行处理。\n\n伊利亚本身攻击力实在不像是个WAW，所以镇压它的主要难点并不是怎么避免伊利亚击杀员工，而是在于如何在它造成较大的连锁反应之前将其尽快击杀。因为它拥有反伤的能力，无脑围殴并不是个好选择。\n\n如果伊利亚出逃，请主管尽量调集周围的员工并对其进行重火力压制。在它撑伞时，请主管及时操纵员工移动到伊利亚的后方并保持对它的输出。由于无论主管拥有多重的火力，伊莉亚都至少能撑开一次伞并向某个方向前进一段距离，这使得伊利亚必定会使它出现位置周围的异想体计数器减少且无法规避。所以相对于如何镇压伊利亚，更建议主管对黑天鹅之梦的收容单元多加注意，防止其出逃才是最好的选择。",
   "canSuppress": true,
   "suppressGrade": "可镇压",
   "suppressNote": "",
   "search": "f-02-70 黑天鹅之梦 waw 中\n不太会出逃的类型 良(w) 【近(3)】\ndps：7.97  有反伤，但不实用，有时还有反作用 差(w)\n0.6 1.2 0.8 1.5 红抗甲，弱白  白 white 5 waw 未填",
   "wiki": {
    "id": "F-02-70",
    "title": "F-02-70 黑天鹅之梦",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/F-02-70_%E9%BB%91%E5%A4%A9%E9%B9%85%E4%B9%8B%E6%A2%A6",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": "因为伊利亚出现的位置完全随机，它可能会直接出现在某些低计数器高危异想体如一无所有，贪婪女王的门口并使得这些异想体直接出逃。加上伊利亚撑伞时必定会进行位移，且移动速度不低。如果主管不能较快的将它镇压，则它可能引起的连锁反应将是极为恐怖的。因此如果伊利亚出现在了设施内，请主管谨慎对待可能的连锁反应并优先对其进行处理。\n\n伊利亚本身攻击力实在不像是个WAW，所以镇压它的主要难点并不是怎么避免伊利亚击杀员工，而是在于如何在它造成较大的连锁反应之前将其尽快击杀。因为它拥有反伤的能力，无脑围殴并不是个好选择。\n\n如果伊利亚出逃，请主管尽量调集周围的员工并对其进行重火力压制。在它撑伞时，请主管及时操纵员工移动到伊利亚的后方并保持对它的输出。由于无论主管拥有多重的火力，伊莉亚都至少能撑开一次伞并向某个方向前进一段距离，这使得伊利亚必定会使它出现位置周围的异想体计数器减少且无法规避。所以相对于如何镇压伊利亚，更建议主管对黑天鹅之梦的收容单元多加注意，防止其出逃才是最好的选择。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "5-6",
    "counter": "5",
    "maxPeBox": 24.0,
    "mood": {
     "优": "17-24",
     "良": "9-16",
     "差": "0-8"
    },
    "workSpeed": 0.3,
    "workCd": 15.0,
    "fearDamage": "sp",
    "noEscape": null,
    "resist": {
     "red": 1.0,
     "white": 0.8,
     "black": 1.5,
     "pale": 1.0
    },
    "resistWord": {
     "red": "抗性一般",
     "white": "抗性较高",
     "black": "抗性较低",
     "pale": "抗性一般"
    },
    "traits": {
     "instinct": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "repression": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "0%",
      "0%",
      "45%",
      "50%",
      "55%"
     ],
     "insight": [
      "0%",
      "0%",
      "40%",
      "45%",
      "50%"
     ],
     "attachment": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "repression": [
      "0%",
      "0%",
      "45%",
      "50%",
      "55%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "5",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 89,
   "id": "T-02-71",
   "name": "梦中的洋流",
   "danger": "WAW",
   "prefix": "T",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "基本不会出逃",
   "weaponText": "极差(W) 【远(10)】\nDPS：3.6  dps过低，远距离高攻速都救不了",
   "weaponGrades": [
    "极差"
   ],
   "weaponGrade": "极差",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "远",
   "rangeValue": 10,
   "weaponTail": "",
   "weaponDps": 3.6,
   "weaponDpsMax": null,
   "weaponNote": "DPS：3.6  dps过低，远距离高攻速都救不了",
   "armorText": "差(W)\n0.8 0.8 0.8 1.5 不太行的均衡甲",
   "armorGrades": [
    "差"
   ],
   "armorGrade": "差",
   "armorTypes": [
    "W"
   ],
   "armorType": "W",
   "armorResist": [
    0.8,
    0.8,
    0.8,
    1.5
   ],
   "armorNote": "0.8 0.8 0.8 1.5 不太行的均衡甲",
   "suppressText": "可镇压\n不容易出来,也不容易镇压",
   "canSuppress": true,
   "suppressGrade": "较难",
   "suppressNote": "不容易出来,也不容易镇压",
   "search": "t-02-71 梦中的洋流 waw 中\n基本不会出逃 极差(w) 【远(10)】\ndps：3.6  dps过低，远距离高攻速都救不了 差(w)\n0.8 0.8 0.8 1.5 不太行的均衡甲 可镇压\n不容易出来,也不容易镇压 白 white 2 waw 较难 可镇压\n不容易出来,也不容易镇压",
   "wiki": {
    "id": "T-02-71",
    "title": "T-02-71 梦中的洋流",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-02-71_%E6%A2%A6%E4%B8%AD%E7%9A%84%E6%B4%8B%E6%B5%81",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "梦中的洋流只会在初始选定的走廊和最后冲刺至的走廊停下休息并蓄力，主管可以在它第一次冲刺后就判断它下一次冲刺结束和开始时会停留的位置，这使得主管有充足的时间召集员工，避开它所标记的走廊并前往洋流下一次停留的位置。因为梦中的洋流的生命值实在是低的可怜，即使主管的员工和装备质量均较差，也不会过于影响洋流的镇压过程。但因为洋流的泡泡会使处于其中的员工移动速度大幅度降低，如果它休息的位置都是单向走廊的尽头，则洋流可能会对主管的日常工作造成较大的影响，此时建议用那些射程极远的武器对其慢慢进行消耗，并让员工在它开始蓄力时进入走廊里异想体的收容单元或是离开走廊以躲避它的冲锋。\n\n但因为梦中的洋流的冲锋速度较快，且第一次冲锋时标记的走廊随机，可能会出现即将冲锋的洋流正好标记了刚工作完正在前往休息室的员工所在的走廊，这使得洋流可能会对主管的员工造成一定威胁。但因为洋流的管理须知实在是过于友好，它几乎不可能在正常的工作中出逃，主管大可不必过于担心这种情况发生。\n\n雇佣魔弹射手来对它进行镇压是最为简单有效且安全的方式。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "3-6",
    "counter": "2",
    "maxPeBox": 20.0,
    "mood": {
     "优": "11-20",
     "良": "6-10",
     "差": "0-5"
    },
    "workSpeed": 0.25,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 1.5,
     "white": 0.5,
     "black": 1.0,
     "pale": 2.0
    },
    "resistWord": {
     "red": "抗性较低",
     "white": "抗性较高",
     "black": "抗性一般",
     "pale": "抗性极低"
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "高",
      "一般",
      "一般"
     ],
     "insight": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "50%",
      "50%",
      "60%",
      "55%",
      "55%"
     ],
     "insight": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "attachment": [
      "45%",
      "45%",
      "45%",
      "50%",
      "55%"
     ],
     "repression": [
      "45%",
      "45%",
      "45%",
      "45%",
      "45%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "2",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 91,
   "id": "O-04-72",
   "name": "穿刺乐园",
   "danger": "WAW",
   "prefix": "O",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "要一直盯着看，不是很推荐",
   "weaponText": "良(W) 【一般(4)】\nDPS：8.0  dps还可以",
   "weaponGrades": [
    "良"
   ],
   "weaponGrade": "良",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "一般",
   "rangeValue": 4,
   "weaponTail": "",
   "weaponDps": 8.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：8.0  dps还可以",
   "armorText": "差(W)\n1.2 0.8 0.6 1.5 紫抗甲，弱红",
   "armorGrades": [
    "差"
   ],
   "armorGrade": "差",
   "armorTypes": [
    "W"
   ],
   "armorType": "W",
   "armorResist": [
    1.2,
    0.8,
    0.6,
    1.5
   ],
   "armorNote": "1.2 0.8 0.6 1.5 紫抗甲，弱红",
   "suppressText": "可镇压\n非融毁出来需要献祭，容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "非融毁出来需要献祭，容易镇压",
   "search": "o-04-72 穿刺乐园 waw 低\n要一直盯着看，不是很推荐 良(w) 【一般(4)】\ndps：8.0  dps还可以 差(w)\n1.2 0.8 0.6 1.5 紫抗甲，弱红 可镇压\n非融毁出来需要献祭，容易镇压 黑 black 3 waw 容易 可镇压\n非融毁出来需要献祭，容易镇压",
   "wiki": {
    "id": "O-04-72",
    "title": "O-04-72 穿刺乐园",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-04-72_%E7%A9%BF%E5%88%BA%E4%B9%90%E5%9B%AD",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "因为“穿刺乐园”造成的侵蚀伤害极为高额，且频率较高，除非主管的员工穿着极高侵蚀抗性的E.G.O护甲，不在视野内的“穿刺乐园”对员工来说是十分致命的，没有多少E.G.O能支撑员工吃下两次以上它的伤害，所以请主管在日常工作和多线操作时尽量保持对“穿刺乐园”的注意，在它出逃后第一时间暂停并缩小屏幕来寻找它的位置，以便将其镇压。\n\n值得一提的是，“穿刺乐园”造成的范围侵蚀伤害会将自己囊括在内。这使得“穿刺乐园”成为了唯一一个能通过造成伤害把自己镇压回去的异想体。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "黑",
    "dmgTypeRaw": "black",
    "dmgStat": "4-5",
    "counter": "3",
    "maxPeBox": 24.0,
    "mood": {
     "优": "21-24",
     "良": "13-20",
     "差": "0-12"
    },
    "workSpeed": 0.35,
    "workCd": 15.0,
    "fearDamage": "n",
    "noEscape": null,
    "resist": {
     "red": 0.0,
     "white": 1.2,
     "black": 0.5,
     "pale": 1.5
    },
    "resistWord": {
     "red": "免疫",
     "white": "抗性较低",
     "black": "抗性较高",
     "pale": "抗性较低"
    },
    "traits": {
     "instinct": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "insight": [
      "极低",
      "极低",
      "低",
      "一般",
      "一般"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "insight": [
      "0%",
      "0%",
      "35%",
      "40%",
      "45%"
     ],
     "attachment": [
      "50%",
      "50%",
      "50%",
      "55%",
      "55%"
     ],
     "repression": [
      "0%",
      "0%",
      "45%",
      "50%",
      "55%"
     ]
    },
    "isTool": false
   },
   "dmgType": "黑",
   "counter": "3",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 93,
   "id": "O-01-73",
   "name": "绝望骑士",
   "danger": "WAW",
   "prefix": "O",
   "mgmtGrades": [
    "高"
   ],
   "mgmtGrade": "高",
   "mgmtNote": "可以给员工上buff",
   "weaponText": "优(W) 【一般(4)】\nDPS：9.5  不吃攻速，前期员工正义低时dps很高\n员工正义高了建议换掉",
   "weaponGrades": [
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "一般",
   "rangeValue": 4,
   "weaponTail": "",
   "weaponDps": 9.5,
   "weaponDpsMax": null,
   "weaponNote": "DPS：9.5  不吃攻速，前期员工正义低时dps很高\n员工正义高了建议换掉",
   "armorText": "优(W)\n0.8 0.8 0.8 0.8 蓝抗甲，摸高鸟用",
   "armorGrades": [
    "优"
   ],
   "armorGrade": "优",
   "armorTypes": [
    "W"
   ],
   "armorType": "W",
   "armorResist": [
    0.8,
    0.8,
    0.8,
    0.8
   ],
   "armorNote": "0.8 0.8 0.8 0.8 蓝抗甲，摸高鸟用",
   "suppressText": "可镇压\n不容易镇压 , 也不建议镇压",
   "canSuppress": true,
   "suppressGrade": "较难",
   "suppressNote": "不容易镇压 , 也不建议镇压",
   "search": "o-01-73 绝望骑士 waw 高\n可以给员工上buff 优(w) 【一般(4)】\ndps：9.5  不吃攻速，前期员工正义低时dps很高\n员工正义高了建议换掉 优(w)\n0.8 0.8 0.8 0.8 蓝抗甲，摸高鸟用 可镇压\n不容易镇压 , 也不建议镇压 白 white x waw 较难 可镇压\n不容易镇压 , 也不建议镇压",
   "wiki": {
    "id": "O-01-73",
    "title": "O-01-73 绝望骑士",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-01-73_%E7%BB%9D%E6%9C%9B%E9%AA%91%E5%A3%AB",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "绝望骑士的攻击几乎不可能躲避，且其高额灵魂伤害对员工的威胁极大。在主管运气不好时，绝望骑士会直接瞬移至某些低灵魂抗性护甲的员工周围并将他们一剑插穿，所以，相对于及时止损时常使用的镇压方式，更推荐不获取绝望祝福或是让主管战斗力最强的员工获取绝望祝福以避免它的出逃。\n\n如果主管仍然打算镇压绝望骑士，请主管在绝望骑士随机瞬移时将所有的员工集合至电梯间，等绝望骑士瞬移到较近的位置时，让所有的员工一拥而上。绝望骑士的抗性和血量都不算高，加上它的攻击目标随机，不一定会盯着一名员工打，如果运气好的话，主管可以在它击杀员工之前用重火力直接将其镇压。\n\n由于高额的灵魂伤害，反灵魂力场盾在绝望骑士的镇压中几乎起不到任何作用，所以请主管准备好足够数量的肉体治疗弹，防止员工的血量降低至会被绝望骑士一剑击杀的程度。\n\n绝望骑士对员工造成的威胁高于大多数ALEPH级异想体。而且出逃一般代表着主力员工的死亡，这时候与其考虑怎么挽回局面，还不如直接重新开始这一天。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "4-6",
    "counter": "X",
    "maxPeBox": 22.0,
    "mood": {
     "优": "14-22",
     "良": "8-13",
     "差": "0-7"
    },
    "workSpeed": 0.25,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 1.2,
     "white": 1.0,
     "black": 0.8,
     "pale": 0.5
    },
    "resistWord": {
     "red": "抗性较低",
     "white": "抗性一般",
     "black": "抗性较高",
     "pale": "抗性较高"
    },
    "traits": {
     "instinct": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "高"
     ],
     "repression": [
      "一般",
      "一般",
      "一般",
      "低",
      "低"
     ]
    },
    "traitStats": {
     "instinct": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "insight": [
      "45%",
      "45%",
      "45%",
      "45%",
      "45%"
     ],
     "attachment": [
      "50%",
      "50%",
      "55%",
      "55%",
      "60%"
     ],
     "repression": [
      "40%",
      "40%",
      "40%",
      "35%",
      "30%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "X",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 95,
   "id": "O-02-74",
   "name": "裸巢",
   "danger": "WAW",
   "prefix": "O",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "感染型，属性红抗够了基本不会感染",
   "weaponText": "极优(W) 【远(15)】\nDPS：8.5  红易伤，dps凑合",
   "weaponGrades": [
    "极优"
   ],
   "weaponGrade": "极优",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "远",
   "rangeValue": 15,
   "weaponTail": "",
   "weaponDps": 8.5,
   "weaponDpsMax": null,
   "weaponNote": "DPS：8.5  红易伤，dps凑合",
   "armorText": "差(W)\n0.6 0.8 1.2 1.5 红抗甲，弱紫",
   "armorGrades": [
    "差"
   ],
   "armorGrade": "差",
   "armorTypes": [
    "W"
   ],
   "armorType": "W",
   "armorResist": [
    0.6,
    0.8,
    1.2,
    1.5
   ],
   "armorNote": "0.6 0.8 1.2 1.5 红抗甲，弱紫",
   "suppressText": "裸巢-1仍受主管子弹的影响，于是惩戒部的科技：处决弹就成了镇压衍生物的最好方式。单个裸巢-1的战斗力并不强，但它在转变前可能会造成文职的大量感染并让感染传播到其余员工身上。请主管在镇压裸巢-1时，尽量处理掉周围的文职，并确保让员工前去镇压时，周围没有被感染的文职且被感染的员工已经完全转变为裸巢-1。",
   "canSuppress": true,
   "suppressGrade": "可镇压",
   "suppressNote": "",
   "search": "o-02-74 裸巢 waw 中\n感染型，属性红抗够了基本不会感染 极优(w) 【远(15)】\ndps：8.5  红易伤，dps凑合 差(w)\n0.6 0.8 1.2 1.5 红抗甲，弱紫  红 red x waw 未填",
   "wiki": {
    "id": "O-02-74",
    "title": "O-02-74 裸巢",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-02-74_%E8%A3%B8%E5%B7%A2",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": "裸巢-1仍受主管子弹的影响，于是惩戒部的科技：处决弹就成了镇压衍生物的最好方式。单个裸巢-1的战斗力并不强，但它在转变前可能会造成文职的大量感染并让感染传播到其余员工身上。请主管在镇压裸巢-1时，尽量处理掉周围的文职，并确保让员工前去镇压时，周围没有被感染的文职且被感染的员工已经完全转变为裸巢-1。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "红",
    "dmgTypeRaw": "red",
    "dmgStat": "5-7",
    "counter": "X",
    "maxPeBox": 22.0,
    "mood": {
     "优": "15-22",
     "良": "9-14",
     "差": "0-8"
    },
    "workSpeed": 0.3,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "attachment": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "40%",
      "45%",
      "50%",
      "50%",
      "55%"
     ],
     "insight": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "attachment": [
      "0%",
      "0%",
      "45%",
      "45%",
      "50%"
     ],
     "repression": [
      "40%",
      "40%",
      "40%",
      "40%",
      "40%"
     ]
    },
    "isTool": false
   },
   "dmgType": "红",
   "counter": "X",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 97,
   "id": "T-01-75",
   "name": "微笑的尸山",
   "danger": "ALEPH",
   "prefix": "T",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "文保协，出逃基本一个拟态就能揍回去",
   "weaponText": "优(A) 【一般(5)】\nDPS：17.82  高伤，还可以减移速",
   "weaponGrades": [
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "A"
   ],
   "weaponType": "A",
   "rangeLabel": "一般",
   "rangeValue": 5,
   "weaponTail": "",
   "weaponDps": 17.82,
   "weaponDpsMax": null,
   "weaponNote": "DPS：17.82  高伤，还可以减移速",
   "armorText": "良(A)\n0.5 0.5 0.2 1.0 紫抗特化甲，还可以清尸体",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "A"
   ],
   "armorType": "A",
   "armorResist": [
    0.5,
    0.5,
    0.2,
    1.0
   ],
   "armorNote": "0.5 0.5 0.2 1.0 紫抗特化甲，还可以清尸体",
   "suppressText": "可镇压\n容易镇压（一阶段）",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压（一阶段）",
   "search": "t-01-75 微笑的尸山 aleph 低\n文保协，出逃基本一个拟态就能揍回去 优(a) 【一般(5)】\ndps：17.82  高伤，还可以减移速 良(a)\n0.5 0.5 0.2 1.0 紫抗特化甲，还可以清尸体 可镇压\n容易镇压（一阶段） 黑 black 2 aleph 容易 可镇压\n容易镇压（一阶段）",
   "wiki": {
    "id": "T-01-75",
    "title": "T-01-75 微笑的尸山",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-01-75_%E5%BE%AE%E7%AC%91%E7%9A%84%E5%B0%B8%E5%B1%B1",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "微笑的尸山本体的战斗力在ALEPH级中并不强大，但每个副体都会大大强化其战斗力，尤其是三阶段时。所以在当天游戏一开始就用处决弹把微笑的尸山所在部门以及周围部门的文职全部清空可以大大削弱微笑的尸山的战斗力。\n\n因为微笑的尸山的第一阶段攻击速度极快加上其需要一定时间使用记录部和研发部的电梯，如果主管在记录部和研发部收容了它，只要主管处理干净这两个部门里的文职并在部门出口的电梯间内安排员工，它在出逃后就会因为其攻击机制不断尝试攻击员工而无法使用电梯。这使得收容在这两个部门内的微笑的尸山更容易被镇压。如果主管装备不足或是认为它过于麻烦，将微笑的尸山收容在这两个部门会是不错的选择。\n\n单就伤害来论，120-150点侵蚀伤害虽然高额，对于有一定侵蚀抗性且属性较高的员工来说却并不致命。但是，三阶段微笑的尸山由于不会再主动寻找尸体，此时它在设施内的行动是毫无规律的，主管永远也不知道它下一步是要回头还是前进。且它这个阶段的攻击前摇较短，范围较大同时存在对后方判定，攻击方式也毫无规律，除非主管对它的攻击极其熟悉，一般情况下在意识到它下一次攻击是什么的时候，很难能让正在攻击它的近战员工躲开，因而派遣近战员工镇压三阶段微笑的尸山是非常不明智的选择。\n\n无论哪个阶段，由于bug实际上微笑的尸山相当于没有任何远程攻击方式，且它的移速会随着阶段的增加而愈加缓慢且抗性不变。因而使用黄蜂，伪善等抬手较快的远程武器或是雇佣小红帽雇佣兵来对其进行消耗会更加的合算。主管需要注意的只有防止它被消耗回二阶段后接触到尸体，立刻变回三阶段。为防止这种情况发生，主管可以选择用远程员工将三阶段微笑的尸山消耗至二阶段后派遣近战员工将其快速击杀，又或是让穿着它自己E.G.O护甲的员工跑在前面以清理路上的尸体。\n\n虽然仍然拥有一些不确定的因素可能干扰兔子队对微笑的尸山的镇压。譬如周围尸体的数量和交火点的空间。若兔子在较小的房间内和微笑的尸山交火，则兔子很容易被喷吐直接团灭；若兔子在较大且没有尸体的房间内和的微笑的尸山交火，则兔子可以轻松将其镇压。总的来说，在主管装备不足时等微笑的尸山移动到空旷区域后，呼叫兔子队来镇压是可行的选择。唯一可惜的是，兔子队不能清理尸体，且一天只能呼叫一次，而微笑的尸山一天出逃的次数可能远远不止一次。\n\n微笑的尸山自己的E.G.O武器的减速效果和护甲的清理尸体能力以及极高的侵蚀抗性都能对它的镇压工作起到极大的帮助。",
    "toolText": null,
    "ok": true,
    "level": "ALEPH",
    "tool": null,
    "dmgType": "黑",
    "dmgTypeRaw": "black",
    "dmgStat": "6-8",
    "counter": "2",
    "maxPeBox": 30.0,
    "mood": {
     "优": "21-30",
     "良": "11-20",
     "差": "0-10"
    },
    "workSpeed": 0.35,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 1.2,
     "white": 0.8,
     "black": 0.8,
     "pale": 0.5
    },
    "resistWord": {
     "red": "抗性较低",
     "white": "抗性较高",
     "black": "抗性较高",
     "pale": "抗性较高"
    },
    "traits": {
     "instinct": [
      "极低",
      "极低",
      "极低",
      "一般",
      "一般"
     ],
     "insight": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "attachment": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "repression": [
      "极低",
      "极低",
      "极低",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "0%",
      "0%",
      "0%",
      "50%",
      "55%"
     ],
     "insight": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "attachment": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "repression": [
      "0%",
      "0%",
      "0%",
      "50%",
      "55%"
     ]
    },
    "isTool": false
   },
   "dmgType": "黑",
   "counter": "2",
   "isTool": false,
   "type": "ALEPH"
  },
  {
   "row": 99,
   "id": "O-05-76",
   "name": "幸灾乐祸",
   "danger": "HE",
   "prefix": "O",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "不能看，比较难处理",
   "weaponText": "优(H) 【一般(4)】\nDPS：7.76+2  H战神，伤害极高",
   "weaponGrades": [
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "H"
   ],
   "weaponType": "H",
   "rangeLabel": "一般",
   "rangeValue": 4,
   "weaponTail": "",
   "weaponDps": 7.76,
   "weaponDpsMax": null,
   "weaponNote": "DPS：7.76+2  H战神，伤害极高",
   "armorText": "优(H)\n视野外：1.0 0.8 1.0 1.5\n视野内：0.8 0.5 0.8 1.5\n视野内就是w属性，还加正义",
   "armorGrades": [
    "优"
   ],
   "armorGrade": "优",
   "armorTypes": [
    "H"
   ],
   "armorType": "H",
   "armorResist": [
    1.0,
    0.8,
    1.0,
    1.5
   ],
   "armorNote": "视野外：1.0 0.8 1.0 1.5\n视野内：0.8 0.5 0.8 1.5\n视野内就是w属性，还加正义",
   "suppressText": "可镇压\n容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压",
   "search": "o-05-76 幸灾乐祸 he 低\n不能看，比较难处理 优(h) 【一般(4)】\ndps：7.76+2  h战神，伤害极高 优(h)\n视野外：1.0 0.8 1.0 1.5\n视野内：0.8 0.5 0.8 1.5\n视野内就是w属性，还加正义 可镇压\n容易镇压 红 red 2 he 容易 可镇压\n容易镇压",
   "wiki": {
    "id": "O-05-76",
    "title": "O-05-76 幸灾乐祸",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-05-76_%E5%B9%B8%E7%81%BE%E4%B9%90%E7%A5%B8",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "幸灾乐祸的戳刺攻击对员工造成的伤害可以说是微乎其微的，但它使用电锯切割的频率很高且伤害极其离谱，离谱到在主管不提供额外回复和护盾的情况下，一些ALEPH级套装的员工单挑它都可能会被锯死。即使幸灾乐祸在屏幕内的抗性较低，但是要在承受这么高伤害的前提下贪图那一点点抗性削弱提高的输出，实在是捡了芝麻丢了西瓜。除非主管装备碾压或者想找点乐子，否则请主管镇压幸灾乐祸时不要盯着它看，以免造成不必要的员工伤亡。\n\n建议主管指派员工对其进行镇压后立刻将幸灾乐祸移出自己的屏幕视野范围。如果局面非常混乱且主管装备不足，无法专门为它移开自己的视野，则应该尽量使用远程武器消耗或尽量躲着它走。",
    "toolText": null,
    "ok": true,
    "level": "HE",
    "tool": null,
    "dmgType": "红",
    "dmgTypeRaw": "red",
    "dmgStat": "3-6",
    "counter": "2",
    "maxPeBox": 18.0,
    "mood": {
     "优": "11-18",
     "良": "6-10",
     "差": "0-5"
    },
    "workSpeed": 0.35,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": "未知",
     "white": "未知",
     "black": "未知",
     "pale": "未知"
    },
    "traits": {
     "instinct": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "insight": [
      "低",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "低",
      "低"
     ],
     "repression": [
      "一般",
      "一般",
      "一般",
      "一般",
      "高"
     ]
    },
    "traitStats": {
     "instinct": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "insight": [
      "30%",
      "40%",
      "40%",
      "50%",
      "50%"
     ],
     "attachment": [
      "40%",
      "40%",
      "40%",
      "30%",
      "20%"
     ],
     "repression": [
      "40%",
      "45%",
      "50%",
      "55%",
      "60%"
     ]
    },
    "isTool": false
   },
   "dmgType": "红",
   "counter": "2",
   "isTool": false,
   "type": "HE"
  },
  {
   "row": 101,
   "id": "T-09-77",
   "name": "渴望之心",
   "danger": "TETH",
   "prefix": "T",
   "mgmtGrades": [
    "高"
   ],
   "mgmtGrade": "高",
   "mgmtNote": "每天领一次，省事好用",
   "weaponText": "-",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "t-09-77 渴望之心 teth 高\n每天领一次，省事好用 - -  工具型 未填",
   "wiki": {
    "id": "T-09-77",
    "title": "T-09-77 渴望之心",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-09-77_%E6%B8%B4%E6%9C%9B%E4%B9%8B%E5%BF%83",
    "tpl": "Abn Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": "主管可以派遣员工去携带渴望之心，使其获得10点最大生命值和10点攻击速度加成。\n\n如果携带渴望之心的员工在携带时间小于30秒，或者并没有进行攻击动作被要求归还，他将会立即陷入恐慌，且恐慌类型和勇气最高的员工陷入恐慌时的类型必然相同，即袭击同僚，获得额外的攻击速度并会主动使用其装备的E.G.O武器攻击其他职员。\n\n在有员工携带渴望之心时直接结束一天并不会对该员工造成任何影响，即使没有满足上述的条件。",
    "ok": true,
    "level": "TETH",
    "tool": "equip",
    "dmgType": null,
    "dmgTypeRaw": null,
    "dmgStat": null,
    "counter": null,
    "maxPeBox": null,
    "mood": {
     "优": null,
     "良": null,
     "差": null
    },
    "workSpeed": null,
    "workCd": null,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {},
    "traitStats": {},
    "isTool": true
   },
   "dmgType": null,
   "counter": null,
   "isTool": true,
   "type": "工具型"
  },
  {
   "row": 103,
   "id": "T-09-78",
   "name": "癫狂研究员的笔记本",
   "danger": "HE",
   "prefix": "T",
   "mgmtGrades": [
    "中",
    "低"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "一般，前期自律低可以用用",
   "weaponText": "-",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "t-09-78 癫狂研究员的笔记本 he 中\n一般，前期自律低可以用用 - -  工具型 未填",
   "wiki": {
    "id": "T-09-78",
    "title": "T-09-78 癫狂研究员的笔记本",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-09-78_%E7%99%AB%E7%8B%82%E7%A0%94%E7%A9%B6%E5%91%98%E7%9A%84%E7%AC%94%E8%AE%B0%E6%9C%AC",
    "tpl": "Abn Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": "当员工使用了笔记本之后，这名员工的自律相关属性会提高20点。如果使用者在使用笔记本的时间达到游戏内的30秒之前就被主管指派将其归还，又或是没有对任何非工具异想体进行工作就被指派将其归还，则这名员工会立刻爆炸。\n\n如果携带笔记本的员工在携带笔记本后承受的伤害使得他的精神值和生命值降低之和累计超过了60点（这里的受到伤害指的是“除侵蚀伤害以外的所有伤害”，包括恐惧伤害），那么这名员工会立刻爆炸。\n\n'''由于代码中伤害类型的选取错误，携带笔记本的员工在受到侵蚀伤害时，仅会将侵蚀伤害造成的精神值损失计入笔记本的承伤累计中，而不会计入侵蚀伤害造成的生命值损失。'''\n\n爆炸的员工会对同房间半径为13.33单位内的所有的单位造成30点 物理伤害，并使笔记本回到收容单元内。员工爆炸或是归还笔记本之后，受到伤害的累计和30秒爆炸的计数器都会重置。",
    "ok": true,
    "level": "HE",
    "tool": "equip",
    "dmgType": null,
    "dmgTypeRaw": null,
    "dmgStat": null,
    "counter": null,
    "maxPeBox": null,
    "mood": {
     "优": null,
     "良": null,
     "差": null
    },
    "workSpeed": null,
    "workCd": null,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {},
    "traitStats": {},
    "isTool": true
   },
   "dmgType": null,
   "counter": null,
   "isTool": true,
   "type": "工具型"
  },
  {
   "row": 105,
   "id": "T-09-79",
   "name": "血肉偶像",
   "danger": "WAW",
   "prefix": "T",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "进去需要过一段时间再出来，容易鱼脑",
   "weaponText": "-",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "t-09-79 血肉偶像 waw 低\n进去需要过一段时间再出来，容易鱼脑 - -  工具型 未填",
   "wiki": {
    "id": "T-09-79",
    "title": "T-09-79 血肉偶像",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-09-79_%E8%A1%80%E8%82%89%E5%81%B6%E5%83%8F",
    "tpl": "Abn Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": "在使用血肉偶像时，使用者会每5秒受到一次来源于血肉偶像的随机类型的5点伤害，根据使用时间的不同会给使用者和其余员工带来不同的效果。这些效果具体表现为：\n\n* 祈祷者祈祷时间少于20秒时停止祈祷，则祈祷者立刻死亡。\n* 祈祷者祈祷时间在21秒-45秒时，每次受到伤害时会为除祈祷者外的所有员工回复5点生命值，\n* 祈祷者在祈祷时间为46-90秒时，每次受到伤害时会为除祈祷者外的所有员工回复5点精神值和生命值。\n* 祈祷者在祈祷时间为90秒时如果还没有离开收容单元，则祈祷者会立刻死亡，且设施内所有异想体的逆卡巴拉计数器都会立刻归零。\n\n注意：如果主管在暂停时指派员工停止使用血肉偶像且在当次暂停时再次指派他前去祈祷，则这名员工会因工作被强制停止被判定为在20秒内结束工作而立刻死亡。",
    "ok": true,
    "level": "WAW",
    "tool": "channel",
    "dmgType": null,
    "dmgTypeRaw": null,
    "dmgStat": null,
    "counter": null,
    "maxPeBox": null,
    "mood": {
     "优": null,
     "良": null,
     "差": null
    },
    "workSpeed": null,
    "workCd": null,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {},
    "traitStats": {},
    "isTool": true
   },
   "dmgType": null,
   "counter": null,
   "isTool": true,
   "type": "工具型"
  },
  {
   "row": 107,
   "id": "T-09-80",
   "name": "巨树汁液",
   "danger": "HE",
   "prefix": "T",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "容易喝死人，别碰就行",
   "weaponText": "-",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "t-09-80 巨树汁液 he 中\n容易喝死人，别碰就行 - -  工具型 未填",
   "wiki": {
    "id": "T-09-80",
    "title": "T-09-80 巨树汁液",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-09-80_%E5%B7%A8%E6%A0%91%E6%B1%81%E6%B6%B2",
    "tpl": "Abn Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": "[]\n员工对巨树汁液工作时会喝下巨树汁液。喝下巨树汁液后，这名员工会立刻将生命值恢复至最大值，且会在接下来的一分钟内每秒回复9-11点生命值。\n\n但喝下树汁的员工有概率在喝下树汁的20秒后 ，并在这之后2秒发生爆炸并死亡，且和使用须知不同，爆炸只会对这名员工周围半径20范围内的单位造成30点 精神伤害。这个概率在初始时为0%，每有员工喝下树汁一次，这个概率就会增加15%，最高增加至60%。\n\n喝下树汁后爆炸的概率对每个员工共同生效，而不是对每个喝下树汁的员工单独生效。这代表着，如果开始一天时，主管让员工A喝下了一口树汁，并且之后让员工B再去喝下一口树汁，此时的员工A不会爆炸，但员工B可能会因爆炸而死，即使员工B喝下的树汁对于他来说是每天喝下的第一口。\n\n当主管结束了一天或是员工触发了爆炸判定，这个概率会重置为0%。\n\n在触发爆炸判定的员工触发20秒后的爆炸动画之前结束一天的工作不会导致该员工死亡；但如果员工已经进入由爆炸判定导致的 状态并开始了爆炸动画 ，则这名员工会在结束一天的工作时被判定为死亡。",
    "ok": true,
    "level": "HE",
    "tool": "single",
    "dmgType": null,
    "dmgTypeRaw": null,
    "dmgStat": null,
    "counter": null,
    "maxPeBox": null,
    "mood": {
     "优": null,
     "良": null,
     "差": null
    },
    "workSpeed": null,
    "workCd": null,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {},
    "traitStats": {},
    "isTool": true
   },
   "dmgType": null,
   "counter": null,
   "isTool": true,
   "type": "工具型"
  },
  {
   "row": 109,
   "id": "O-09-81",
   "name": "转性魔镜",
   "danger": "ZAYIN",
   "prefix": "O",
   "mgmtGrades": [
    "高"
   ],
   "mgmtGrade": "高",
   "mgmtNote": "给员工平衡属性，挺不错的",
   "weaponText": "-",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "o-09-81 转性魔镜 zayin 高\n给员工平衡属性，挺不错的 - -  工具型 未填",
   "wiki": {
    "id": "O-09-81",
    "title": "O-09-81 转性魔镜",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-09-81_%E8%BD%AC%E6%80%A7%E9%AD%94%E9%95%9C",
    "tpl": "Abn Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": "主管可以派遣员工使用转性魔镜。员工使用时，转性魔镜会计算员工的四项属性基础点数（即不包括性格职称，饰品，常驻加成，文职加成，工具异想体和buff增益的属性）的总和作为一个，随后以15一次的数值随机给予员工四项属性的基础点数，直至所有点数用完（如果剩余点数不足15会直接给予某个属性所有剩余点数；如果点数相加时因到达属性上限溢出会返还溢出点数），然后其会根据分配完毕后的属性来为员工重新分配性格和职称加成。分配时四项属性不会低于15点。\n\n若员工使用了转性魔镜随机分配了属性且主管结束这一天时该员工仍存活，则该员工会保留分配后的属性而不是恢复为分配前的。\n\n每天第一次使用转性魔镜时，员工的属性总和不会减少。如果主管在一天内派遣某个员工使用它的次数超过一次，则每次使用时，它都会让使用者的基础属性总和下降20点；但无论使用多少次，魔镜无法使员工的属性总和低于60点（即四项属性各15点）。\n\n若员工",
    "ok": true,
    "level": "ZAYIN",
    "tool": "single",
    "dmgType": null,
    "dmgTypeRaw": null,
    "dmgStat": null,
    "counter": null,
    "maxPeBox": null,
    "mood": {
     "优": null,
     "良": null,
     "差": null
    },
    "workSpeed": null,
    "workCd": null,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {},
    "traitStats": {},
    "isTool": true
   },
   "dmgType": null,
   "counter": null,
   "isTool": true,
   "type": "工具型"
  },
  {
   "row": 111,
   "id": "T-09-82",
   "name": "3月27日的避难所",
   "danger": "HE",
   "prefix": "T",
   "mgmtGrades": [
    "高"
   ],
   "mgmtGrade": "高",
   "mgmtNote": "可以收容一个，打惩戒部可以逃课",
   "weaponText": "-",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "t-09-82 3月27日的避难所 he 高\n可以收容一个，打惩戒部可以逃课 - -  工具型 未填",
   "wiki": {
    "id": "T-09-82",
    "title": "T-09-82 3月27日的避难所",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-09-82_3%E6%9C%8827%E6%97%A5%E7%9A%84%E9%81%BF%E9%9A%BE%E6%89%80",
    "tpl": "Abn Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": "[]\n[]\n当员工进入了3月27日的避难所并开始工作后，该员工将立即获得 、 。此时该员工将无法被绝大多数来源的伤害和特殊能力所选中，同时会每 5秒回复8点生命值和精神值，该效果将在员工停止对避难所的工作时立刻移除，无论该员工此刻是否已经离开了避难所的收容单元。\n\n员工在避难所内进行工作时时永远不会因生命值归零而导致死亡。但该员工若精神值归零则仍然会陷入恐慌，且可能会因恐慌类型的不同而自行跑出避难所。避难所内的员工仍会受到部分魅惑类异想体的影响，受到魅惑影响的员工会主动走出避难所。但避难所会降低里面的员工被异想体的特殊能力选中的优先级，并会保护这名员工免受部分异想体的魅惑能力影响。\n\n同时，避难所给予员工的 状态也会使员工免疫部分的即时死亡特效。如果员工被某些异想体视为仇恨目标或已被标记，则 状态会让这名员工清除身上的标记，并让这些异想体强行转移目标。这些异想体可能会进入避难所，但不会攻击其中的员工。但如果主管此时终止了该员工对避难所的工作状态，该员工依旧会和这些异想体在避难所收容单元里进行战斗，且这种情况下员工也会正常受到来源于这些异想体的伤害。\n\n当员工对避难所的工作状态持续超过 30秒后，设施内随机一个拥有逆卡巴拉计数器且计数器尚未归零的异想体的计数器将会立刻归零，此后每当该员工受到来源于避难所的生命值和精神值回复时，设施内都会随机有一个异想体的计数器归零。当员工停止了对避难所的工作时，这条特效会立刻停止继续生效且 30秒的计时会被重置。\n\n如果员工结束工作时其 为0，则3月27日的避难所会立即将其杀死。\n=== 联动效果 ===\n*异世的肖像可以无视T-09-82 3月27日的避难所提供的 、 效果并转移伤害，但不致死。画像上的员工在对3月27日的避难所工作时不会因为其他员工使用肖像而死亡，但伤害转移标记的显示不会消失，需要根据员工身上的特效判断肖像的效果是否正确生效。正在对3月27日的避难所工作的员工不会被作为随机选择的目标。\n*对3月27日的避难所进行工作的员工身上的来自O-02-40 大鸟的标记效果会被立即清除，无论标记颜色。\n*对3月27日的避难所进行工作的员工身上若带有仍未消失的“蜂后”孢子，则“蜂后”的孢子会立刻被移除。\n*3月27日的避难所可以防止O-01-55 银河之子杀死持有鹅卵石的员工，但银河之子在逆卡巴拉计数器回到1或以上之前会每20秒尝试一次杀死持有鹅卵石的员工。\n*对3月27日的避难所进行工作的员工不会受到阴阳合璧的任何影响。\n*除非接受过紫罗兰的洗礼，白夜发生出逃时正在对3月27日的避难所进行工作的员工不可能变为'''镰刀使徒'''、'''权杖使徒'''、'''长枪使徒'''和守卫使徒。然而，其依然有可能变为'''叛徒'''。\n*在抑制核心 Hokma中，Hokma给予的惩罚会永远排除正在对3月27日的避难所进行工作的员工。",
    "ok": true,
    "level": "HE",
    "tool": "channel",
    "dmgType": null,
    "dmgTypeRaw": null,
    "dmgStat": null,
    "counter": null,
    "maxPeBox": null,
    "mood": {
     "优": null,
     "良": null,
     "差": null
    },
    "workSpeed": null,
    "workCd": null,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {},
    "traitStats": {},
    "isTool": true
   },
   "dmgType": null,
   "counter": null,
   "isTool": true,
   "type": "工具型"
  },
  {
   "row": 113,
   "id": "F-04-83",
   "name": "精灵盛宴",
   "danger": "ZAYIN",
   "prefix": "F",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "机制死，稍微注意一下就行",
   "weaponText": "良(Z) 【短(3)】\nDPS：3.0  z级尽早淘汰",
   "weaponGrades": [
    "良"
   ],
   "weaponGrade": "良",
   "weaponTypes": [
    "Z"
   ],
   "weaponType": "Z",
   "rangeLabel": "短",
   "rangeValue": 3,
   "weaponTail": "",
   "weaponDps": 3.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：3.0  z级尽早淘汰",
   "armorText": "良(Z)\n0.8 0.8 1.0 2.0 z级前期过度用",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "Z"
   ],
   "armorType": "Z",
   "armorResist": [
    0.8,
    0.8,
    1.0,
    2.0
   ],
   "armorNote": "0.8 0.8 1.0 2.0 z级前期过度用",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "f-04-83 精灵盛宴 zayin 中\n机制死，稍微注意一下就行 良(z) 【短(3)】\ndps：3.0  z级尽早淘汰 良(z)\n0.8 0.8 1.0 2.0 z级前期过度用  红 red x zayin 未填",
   "wiki": {
    "id": "F-04-83",
    "title": "F-04-83 精灵盛宴",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/F-04-83_%E7%B2%BE%E7%81%B5%E7%9B%9B%E5%AE%B4",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "ZAYIN",
    "tool": null,
    "dmgType": "红",
    "dmgTypeRaw": "red",
    "dmgStat": "1-2",
    "counter": "X",
    "maxPeBox": 10.0,
    "mood": {
     "优": "6-10",
     "良": "3-5",
     "差": "0-2"
    },
    "workSpeed": 0.38,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "高",
      "高",
      "高",
      "高",
      "高"
     ],
     "insight": [
      "一般",
      "一般",
      "低",
      "低",
      "低"
     ],
     "attachment": [
      "高",
      "高",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "一般",
      "一般",
      "低",
      "低",
      "低"
     ]
    },
    "traitStats": {
     "instinct": [
      "70%",
      "70%",
      "70%",
      "70%",
      "70%"
     ],
     "insight": [
      "50%",
      "40%",
      "30%",
      "30%",
      "30%"
     ],
     "attachment": [
      "70%",
      "60%",
      "50%",
      "50%",
      "50%"
     ],
     "repression": [
      "50%",
      "40%",
      "30%",
      "30%",
      "30%"
     ]
    },
    "isTool": false
   },
   "dmgType": "红",
   "counter": "X",
   "isTool": false,
   "type": "ZAYIN"
  },
  {
   "row": 115,
   "id": "O-04-84",
   "name": "陆生",
   "danger": "TETH",
   "prefix": "O",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "要求工作时间>40s，得找专职保姆",
   "weaponText": "良(T) 【一般(5)】\nDPS：5.0  一般，抬手慢",
   "weaponGrades": [
    "良"
   ],
   "weaponGrade": "良",
   "weaponTypes": [
    "T"
   ],
   "weaponType": "T",
   "rangeLabel": "一般",
   "rangeValue": 5,
   "weaponTail": "",
   "weaponDps": 5.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：5.0  一般，抬手慢",
   "armorText": "优(T)\n0.8 0.7 1.2 2.0 红白甲，弱紫，前期不错",
   "armorGrades": [
    "优"
   ],
   "armorGrade": "优",
   "armorTypes": [
    "T"
   ],
   "armorType": "T",
   "armorResist": [
    0.8,
    0.7,
    1.2,
    2.0
   ],
   "armorNote": "0.8 0.7 1.2 2.0 红白甲，弱紫，前期不错",
   "suppressText": "可镇压\n容易镇压，但得注意一点",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压，但得注意一点",
   "search": "o-04-84 陆生 teth 低\n要求工作时间>40s，得找专职保姆 良(t) 【一般(5)】\ndps：5.0  一般，抬手慢 优(t)\n0.8 0.7 1.2 2.0 红白甲，弱紫，前期不错 可镇压\n容易镇压，但得注意一点 白 white 1 teth 容易 可镇压\n容易镇压，但得注意一点",
   "wiki": {
    "id": "O-04-84",
    "title": "O-04-84 陆生鮟鱇",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-04-84_%E9%99%86%E7%94%9F%E9%AE%9F%E9%B1%87",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "由于陆生鮟鱇会对近身攻击的员工造成极大的威胁，在极为熟悉它的攻击方式前，请主管不要指派除持有攻击距离小于5的武器的员工对其进行镇压。任何远程武器都能有效的处理陆生鮟鱇。\n\n需要注意的是，笑靥和锤模板等攻击距离正好为5的近战武器虽然能在感知范围外攻击陆生鮟鱇，但陆生鮟鱇感知到目标后进行攻击时，持有这些武器的员工是位于陆生鮟鱇的伤害范围内的，请主管及时拉离这些员工，以免造成意料外的员工损失。\n\n如果主管认为寻找陆生鮟鱇比较困难，这里有两个比较便捷的方式，一个是暂停后选择一个员工并将鼠标以中等的速度在所有的走廊地面上划过，鼠标变红的位置就是陆生鮟鱇出逃后的位置（需要放大确认一下是否是陆生鮟鱇）。另一个方式是在兔子的部署界面寻找哪个部门出现了主管没注意到的敌对单位，然后再在那个部门仔细寻找鮟鱇的位置。",
    "toolText": null,
    "ok": true,
    "level": "TETH",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "1-3",
    "counter": "1",
    "maxPeBox": 14.0,
    "mood": {
     "优": "11-14",
     "良": "7-10",
     "差": "0-6"
    },
    "workSpeed": 0.25,
    "workCd": 10.0,
    "fearDamage": "n",
    "noEscape": null,
    "resist": {
     "red": 1.5,
     "white": 0.8,
     "black": 1.0,
     "pale": 2.0
    },
    "resistWord": {
     "red": "抗性较低",
     "white": "抗性较高",
     "black": "抗性一般",
     "pale": "抗性极低"
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "高",
      "高",
      "高",
      "高",
      "高"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "低",
      "低",
      "低",
      "低",
      "低"
     ]
    },
    "traitStats": {
     "instinct": [
      "45%",
      "45%",
      "50%",
      "55%",
      "55%"
     ],
     "insight": [
      "60%",
      "60%",
      "60%",
      "60%",
      "60%"
     ],
     "attachment": [
      "45%",
      "45%",
      "45%",
      "45%",
      "45%"
     ],
     "repression": [
      "30%",
      "30%",
      "30%",
      "30%",
      "30%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "1",
   "isTool": false,
   "type": "TETH"
  },
  {
   "row": 117,
   "id": "T-09-85",
   "name": "我们可以改变一切",
   "danger": "ZAYIN",
   "prefix": "T",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "一般不会拿它发电，放着也没事",
   "weaponText": "-",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "t-09-85 我们可以改变一切 zayin 中\n一般不会拿它发电，放着也没事 - -  工具型 未填",
   "wiki": {
    "id": "T-09-85",
    "title": "T-09-85 我们可以改变一切",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-09-85_%E6%88%91%E4%BB%AC%E5%8F%AF%E4%BB%A5%E6%94%B9%E5%8F%98%E4%B8%80%E5%88%87",
    "tpl": "Abn Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": "这个异想体不会受到融毁影响，无论是融毁警报造成的融毁，还是黑色收尾人，终末鸟，世界的调律者等外来因素造成的特殊融毁。\n\n在主管派遣员工使用这个异想体时，员工会直接进入它的内部。每经过一定时间该员工便会受到一次 物理伤害，同时主管将会获得一定量的能源。有关其伤害量，伤害频率，能源获得量的计算如下：\n\ndamage=\\lfloor \\frac{count^{2}}{30} \\rfloor由于另一个伤害的特性，该值会向下取整\nfreqency = \\left\\{\\begin{array}{cc}2-0.1count & (count\\le19) \\\\0.1 & (count>19)\\end{array}\\right.\nenergy=\\frac{count^{2}}{110}\n其中count为伤害计数，该值在员工进入收容单元后重置为0；damage为造成的伤害；frequency为伤害频率，energy为每次造成伤害时增加的能量。注意energy可以为小数，显示时向下取整。\n\n尽管它的伤害一开始只有0点，但它对员工造成伤害的频率会随着员工进入其中的使用时间增长而逐渐增加，造成的伤害量也会逐渐增加。与此同时，主管获得能源的频率和数额也会随着伤害增加。\n一旦员工进入了这个工具异想体，主管将无法让员工停止使用这件异想体。所以进入这件异想体的员工最后必然死于逐渐增加的物理伤害。就算主管在员工死亡之前结束了这一天，无论该员工处于什么状态，这名员工都会被判定死亡。\n\n若正在使用该异想体的员工陷入了恐慌，则其将直接被击杀。\n=== 联动效果 ===\n*持有O-01-55 银河之子的鹅卵石的员工使用这个异想体会获得debuff，使得鹅卵石的回复变为10秒一次。",
    "ok": true,
    "level": "ZAYIN",
    "tool": "channel",
    "dmgType": null,
    "dmgTypeRaw": null,
    "dmgStat": null,
    "counter": null,
    "maxPeBox": null,
    "mood": {
     "优": null,
     "良": null,
     "差": null
    },
    "workSpeed": null,
    "workCd": null,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {},
    "traitStats": {},
    "isTool": true
   },
   "dmgType": null,
   "counter": null,
   "isTool": true,
   "type": "工具型"
  },
  {
   "row": 119,
   "id": "T-09-86",
   "name": "黄泉列车",
   "danger": "WAW",
   "prefix": "T",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "最难管的工具异想体，不推荐",
   "weaponText": "-",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "t-09-86 黄泉列车 waw 低\n最难管的工具异想体，不推荐 - -  工具型 未填",
   "wiki": {
    "id": "T-09-86",
    "title": "T-09-86 黄泉列车",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-09-86_%E9%BB%84%E6%B3%89%E5%88%97%E8%BD%A6",
    "tpl": "Abn Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": "[]\n黄泉列车售票站上的灯会每30秒亮起一盏，员工可以在任意时刻进入黄泉列车的收容单元进行取票。收容单元内没有灯光亮起时，员工会在极为短暂的停留后走出收容单元（但仍然会增加使用次数）。如果收容单元内有灯光亮起，则进入收容单元的员工会根据灯光亮起的数量而为自己或为更多的员工回复生命值和精神值。\n\n根据灯光亮起的不同，回复量分别为：\n\n* 一盏灯：为取票的员工回复40点生命值和精神值。\n* 两盏灯：为取票的员工回复80点生命值和精神值。\n* 三盏灯：为取票的员工和取票员工所属部门的所有员工回复50点生命值和精神值。\n* 四盏灯：为设施内所有的员工回复50点生命值和精神值。\n\n若是四盏灯完全亮起后30秒内没有任何员工前去取票，则设施的左侧或者右侧会出现一道传送门，黄泉列车将从传送门内以10单位速度的初始速度出现，在2秒内将速度提升至15，并在这之后以80的速度直线行驶，然后消失在另一道传送门中。列车在前进的时候会对路径上所有单位造成100点侵蚀伤害，除非该单位为正在收容单元内进行工作的员工。",
    "ok": true,
    "level": "WAW",
    "tool": "single",
    "dmgType": null,
    "dmgTypeRaw": null,
    "dmgStat": null,
    "counter": null,
    "maxPeBox": null,
    "mood": {
     "优": null,
     "良": null,
     "差": null
    },
    "workSpeed": null,
    "workCd": null,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {},
    "traitStats": {},
    "isTool": true
   },
   "dmgType": null,
   "counter": null,
   "isTool": true,
   "type": "工具型"
  },
  {
   "row": 121,
   "id": "F-01-87",
   "name": "索求智慧的稻草人",
   "danger": "HE",
   "prefix": "F",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "需要工作优，前期比较难打，后期随便镇压",
   "weaponText": "良(H) 【一般(4)】\nDPS：6.0  一般武器",
   "weaponGrades": [
    "良"
   ],
   "weaponGrade": "良",
   "weaponTypes": [
    "H"
   ],
   "weaponType": "H",
   "rangeLabel": "一般",
   "rangeValue": 4,
   "weaponTail": "",
   "weaponDps": 6.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：6.0  一般武器",
   "armorText": "良(H)\n0.6 0.8 1.3 1.5 红抗甲，弱紫",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "H"
   ],
   "armorType": "H",
   "armorResist": [
    0.6,
    0.8,
    1.3,
    1.5
   ],
   "armorNote": "0.6 0.8 1.3 1.5 红抗甲，弱紫",
   "suppressText": "可镇压\n容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压",
   "search": "f-01-87 索求智慧的稻草人 he 中\n需要工作优，前期比较难打，后期随便镇压 良(h) 【一般(4)】\ndps：6.0  一般武器 良(h)\n0.6 0.8 1.3 1.5 红抗甲，弱紫 可镇压\n容易镇压 白 white 1 he 容易 可镇压\n容易镇压",
   "wiki": {
    "id": "F-01-87",
    "title": "F-01-87 索求智慧的稻草人",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/F-01-87_%E7%B4%A2%E6%B1%82%E6%99%BA%E6%85%A7%E7%9A%84%E7%A8%BB%E8%8D%89%E4%BA%BA",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "因为稻草人会主动寻找职员进行攻击，加上它的攻击速度不慢，它很可能会对主管低侵蚀抗性低生命值的员工造成一定威胁。如果主管对其进行远程消耗，又免不了会有前来送血包的文职给稻草人提供回复。如果稻草人击杀的文职过多，可能会引起其余更麻烦的异想体出逃。所以建议主管派遣高侵蚀抗性近战员工抗伤，其余员工尽力输出。\n\n因为总是有胆大的文职拿着他们的小手枪来给稻草人送脑子，建议在他们送脑子之前先处决他们，或是让抗伤员工尽量离稻草人近一点以免稻草人转移仇恨目标。",
    "toolText": null,
    "ok": true,
    "level": "HE",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "2-6",
    "counter": "1",
    "maxPeBox": 18.0,
    "mood": {
     "优": "15-18",
     "良": "9-14",
     "差": "0-8"
    },
    "workSpeed": 0.3,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 0.8,
     "white": 0.5,
     "black": 1.2,
     "pale": 2.0
    },
    "resistWord": {
     "red": "抗性较高",
     "white": "抗性较高",
     "black": "抗性较低",
     "pale": "抗性极低"
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "一般",
      "高",
      "高",
      "极高",
      "极高"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "45%",
      "45%",
      "45%",
      "45%",
      "45%"
     ],
     "insight": [
      "50%",
      "60%",
      "70%",
      "80%",
      "90%"
     ],
     "attachment": [
      "45%",
      "45%",
      "45%",
      "45%",
      "45%"
     ],
     "repression": [
      "45%",
      "45%",
      "45%",
      "45%",
      "45%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "1",
   "isTool": false,
   "type": "HE"
  },
  {
   "row": 123,
   "id": "O-03-88",
   "name": "次元衍射变体",
   "danger": "WAW",
   "prefix": "O",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "不容易出逃，好管",
   "weaponText": "良(W) 【近(3)】\nDPS：8.0  dps不错的武器，距离较近",
   "weaponGrades": [
    "良"
   ],
   "weaponGrade": "良",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "近",
   "rangeValue": 3,
   "weaponTail": "",
   "weaponDps": 8.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：8.0  dps不错的武器，距离较近",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "可镇压\n容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压",
   "search": "o-03-88 次元衍射变体 waw 中\n不容易出逃，好管 良(w) 【近(3)】\ndps：8.0  dps不错的武器，距离较近 - 可镇压\n容易镇压 白 white 2 waw 容易 可镇压\n容易镇压",
   "wiki": {
    "id": "O-03-88",
    "title": "O-03-88 次元衍射变体",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-03-88_%E6%AC%A1%E5%85%83%E8%A1%8D%E5%B0%84%E5%8F%98%E4%BD%93",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "除非主管的员工运气极差，在没受主管控制的情况下主动和次元衍射变体同向移动，次元衍射变体一般只会对主管的员工造成1次伤害，因而不会对员工造成太大的威胁。但如果不及时镇压，次元衍射变体可能会造成大规模的文职死亡，或是导致低生命值员工的意外死亡。所以请主管在收到次元衍射变体的出逃消息后尽快找到它的位置并指派员工对其进行镇压，因为次元衍射变体的伤害判定范围较大，且可能遛弯溜着溜着就转向。如果主管的近战员工物理抗性或最大生命值不高，则请主管尽量用远程武器来镇压次元衍射变体。\n\n在收到次元衍射变体出逃的消息后，主管可以立刻暂停并仔细查看次元衍射变体的收容单元所在部门。如果次元衍射变体已经出逃有一段时间，主管可以通过文职被杀死后漂浮的尸体轨迹来判断次元衍射变体的移动路径。如果这些方法都没法使用，主管可以按下暂停，选中员工并将鼠标以较慢的速度在所有的房间底部划过，鼠标变红的位置就是次元衍射变体的所在位置。\n\n次元衍射变体出逃后会发出全公司均可听见的具有辨识度的低频率声音，且会根据主管屏幕中心的位置调整声音方向和声音大小，因此主管也可以在关闭bgm之后通过声音来判断次元衍射变体的位置。\n\n如果主管已经解锁了惩戒部的科技：兔子，则主管可以直接在部署兔子的界面查看敌对单位的所在部门来寻找次元衍射变体的位置。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "4-7",
    "counter": "2",
    "maxPeBox": 22.0,
    "mood": {
     "优": "17-22",
     "良": "9-16",
     "差": "0-8"
    },
    "workSpeed": 0.35,
    "workCd": 10.0,
    "fearDamage": "n",
    "noEscape": null,
    "resist": {
     "red": 0.0,
     "white": 1.5,
     "black": 0.8,
     "pale": 1.0
    },
    "resistWord": {
     "red": "免疫",
     "white": "抗性较低",
     "black": "抗性较高",
     "pale": "一般"
    },
    "traits": {
     "instinct": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "低",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "0%",
      "0%",
      "40%",
      "40%",
      "40%"
     ],
     "insight": [
      "35%",
      "40%",
      "45%",
      "50%",
      "55%"
     ],
     "attachment": [
      "0%",
      "0%",
      "40%",
      "40%",
      "40%"
     ],
     "repression": [
      "0%",
      "0%",
      "40%",
      "40%",
      "40%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "2",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 125,
   "id": "O-03-89",
   "name": "“CENSORED”",
   "danger": "ALEPH",
   "prefix": "O",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "属性够了基本不会减计数器，还算乖",
   "weaponText": "优(A) 【近(3)】\nDPS：13.9dps一般，受到伤害会回血，功能性很高",
   "weaponGrades": [
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "A"
   ],
   "weaponType": "A",
   "rangeLabel": "近",
   "rangeValue": 3,
   "weaponTail": "",
   "weaponDps": 13.9,
   "weaponDpsMax": null,
   "weaponNote": "DPS：13.9dps一般，受到伤害会回血，功能性很高",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "可镇压\n容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压",
   "search": "o-03-89 “censored” aleph 中\n属性够了基本不会减计数器，还算乖 优(a) 【近(3)】\ndps：13.9dps一般，受到伤害会回血，功能性很高 - 可镇压\n容易镇压 黑 black 2 aleph 容易 可镇压\n容易镇压",
   "wiki": {
    "id": "O-03-89",
    "title": "O-03-89 「CENSORED」",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-03-89_%E3%80%8CCENSORED%E3%80%8D",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "镇压「CENSORED」的难点在于如何避免和其交战的员工陷入恐慌，那么避免受到来自它的直接伤害就是最好的选择。由于「CENSORED」只会近战攻击且移速十分缓慢，只要它接触不到尸体，主管就可以放心的使用远程员工对它进行消耗。同时，由于「CENSORED」对最近的单位具有仇恨且只攻击单一目标，主管可以让侵蚀抗性较高的员工抵抗它的伤害，让其他员工在距离稍远的位置尽快输出。\n\n但只要「CENSORED」接触到了两具以上的尸体并把它们变成了「CENSORED」-1，指派员工进行镇压就变成了很难成功的选项。由于「CENSORED」本体和「CENSORED」-1极高的恐惧等级，当它和两只及更多的「CENSORED」-1出现在一个房间内时，进入它所在房间的员工都会立刻陷入恐慌（不考虑特殊情况）。因而，请主管尽全力避免让「CENSORED」接触到尸体。\n\n如果主管实在没有办法避免「CENSORED」接触到尸体，那么利用恐惧伤害的判定机制则是破局之法之一：员工在该异想体被收容时，每次进入其收容室都会受到一次恐惧伤害检定。而在异想体出逃后，员工只有在第一次遇到该异想体时会受到恐惧伤害检定。在主管没办法处理尸体时，将要参加镇压的员工拉去「CENSORED」跟前走一趟是个不错的选择，这可以防止员工在同时看到「CENSORED」本体和两个以上的「CENSORED」-1时立刻陷入恐慌。\n\n主管也可以让侵蚀抗性较高的员工携带「CENSORED」自己的E.G.O武器，配合反侵蚀力场盾和大量肉体、精神治疗弹前去吸引「CENSORED」本体的仇恨以防止它吸收更多的尸体，并让这名员工优先处理掉「CENSORED」-1，让其余员工能够再次进入战场。因为「CENSORED」武器的回复效果是在受到伤害后立刻起效，它可以保护持有者在同时见到「CENSORED」本体和两只「CENSORED」-1的情况下仍然不陷入恐慌（多了就不行了）。\n\n使用兔子队镇压「CENSORED」并清理「CENSORED」-1是极其有效的方法。兔子免疫恐惧伤害，且较多的人数和较高的输出使兔子能以碾压的姿态清理掉「CENSORED」和「CENSORED」-1。雇佣小红帽雇佣兵来吸引「CENSORED」的仇恨也会是个不错的选择。它可以极大程度的牵制「CENSORED」的移动并吸收大量伤害，并给主管创造大量的输出空间。\n\n伪善护甲的精神值回复效果，以爱与恨之名武器的治疗效果，月光武器提供护盾的能力和「CENSORED」自己武器的受伤后回复的能力都能在常规镇压时起到不错的帮助。",
    "toolText": null,
    "ok": true,
    "level": "ALEPH",
    "tool": null,
    "dmgType": "黑",
    "dmgTypeRaw": "black",
    "dmgStat": "5-10",
    "counter": "2",
    "maxPeBox": 32.0,
    "mood": {
     "优": "X",
     "良": "17-32",
     "差": "0-16"
    },
    "workSpeed": 0.33,
    "workCd": 15.0,
    "fearDamage": "sp",
    "noEscape": null,
    "resist": {
     "red": 0.6,
     "white": 0.8,
     "black": 0.4,
     "pale": 1.0
    },
    "resistWord": {
     "red": "抗性较高",
     "white": "抗性较高",
     "black": "抗性极高",
     "pale": "抗性一般"
    },
    "traits": {
     "instinct": [
      "极高",
      "高",
      "高",
      "一般",
      "一般"
     ],
     "insight": [
      "极高",
      "极高",
      "高",
      "高",
      "一般"
     ],
     "attachment": [
      "高",
      "高",
      "一般",
      "一般",
      "低"
     ],
     "repression": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ]
    },
    "traitStats": {
     "instinct": [
      "80%",
      "70%",
      "60%",
      "50%",
      "40%"
     ],
     "insight": [
      "90%",
      "80%",
      "70%",
      "60%",
      "50%"
     ],
     "attachment": [
      "70%",
      "60%",
      "50%",
      "40%",
      "30%"
     ],
     "repression": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ]
    },
    "isTool": false
   },
   "dmgType": "黑",
   "counter": "2",
   "isTool": false,
   "type": "ALEPH"
  },
  {
   "row": 127,
   "id": "T-09-90",
   "name": "人皮启示录",
   "danger": "TETH",
   "prefix": "T",
   "mgmtGrades": [
    "高"
   ],
   "mgmtGrade": "高",
   "mgmtNote": "可以加精神值，方便早期模数删",
   "weaponText": "-",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "t-09-90 人皮启示录 teth 高\n可以加精神值，方便早期模数删 - -  工具型 未填",
   "wiki": {
    "id": "T-09-90",
    "title": "T-09-90 人皮启示录",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-09-90_%E4%BA%BA%E7%9A%AE%E5%90%AF%E7%A4%BA%E5%BD%95",
    "tpl": "Abn Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": "当员工被指派使用人皮启示录时，其会进入 状态2秒。这会使该员工的最大精神值将会额外提高15点（最多额外提高100点），同时该员工护甲的精神抗性会发生变化，精神抗性变化的数额和员工的初始护甲抗性以及一天内该员工阅读人皮启示录的次数有关。\n\n每天第一次阅读人皮启示录时，该员工的精神抗性会更改为护甲初始精神抗性的1.25倍，第二次时为1.55倍，第三次时为1.9倍，第四次时为2.3倍，之后该员工在这一天内继续阅读人皮启示录时将不再改变精神抗性，但阅读人皮启示录仍然可以提高该员工的精神值直至100点的额外精神值提高上限。\n\n同时装备Da Capo护甲和饰品的员工在阅读人皮启示录后的精神抗性依旧会进行乘算，但由于该员工的精神抗性为-1.0，这会导致该员工在阅读四次人皮启示录后精神抗性被更改至-2.3——远高于初始的精神抗性。\n\n在一天内，若阅读过人皮启示录的员工陷入恐慌，则该员工将被血管组成的笼子拖入地下，并被判定死亡。\n\n人皮启示录对员工精神抗性，精神值的影响和条件杀的限制将在一天结束时清零。",
    "ok": true,
    "level": "TETH",
    "tool": "single",
    "dmgType": null,
    "dmgTypeRaw": null,
    "dmgStat": null,
    "counter": null,
    "maxPeBox": null,
    "mood": {
     "优": null,
     "良": null,
     "差": null
    },
    "workSpeed": null,
    "workCd": null,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {},
    "traitStats": {},
    "isTool": true
   },
   "dmgType": null,
   "counter": null,
   "isTool": true,
   "type": "工具型"
  },
  {
   "row": 129,
   "id": "O-09-91",
   "name": "异世的肖像",
   "danger": "HE",
   "prefix": "O",
   "mgmtGrades": [
    "高"
   ],
   "mgmtGrade": "高",
   "mgmtNote": "抗伤机制，根据需求可以有很好的发挥",
   "weaponText": "-",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "o-09-91 异世的肖像 he 高\n抗伤机制，根据需求可以有很好的发挥 - -  工具型 未填",
   "wiki": {
    "id": "O-09-91",
    "title": "O-09-91 异世的肖像",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-09-91_%E5%BC%82%E4%B8%96%E7%9A%84%E8%82%96%E5%83%8F",
    "tpl": "Abn Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": "当一名员工使用了肖像后，这名员工的画像会出现在肖像上且该员工头上会出现一个标记。同时设施内随机一名未 的存活员工头上也会出现相同的标记。画像上的员工受到非强制击杀造成的伤害时，肖像会记录该次伤害经过E.G.O抗性与O-01-73 绝望骑士的祝福等减伤效果后的最终伤害，并依据此数值判断能否转移伤害：\n· 若受到的伤害为物理伤害且此次伤害大于画像上的员工的最大生命值，则此次伤害不会发生转移。\n· 若受到的伤害为精神伤害且此次伤害大于画像上的员工的最大精神值，则此次伤害不会发生转移。\n· 若受到的伤害为侵蚀伤害且此次伤害大于画像上的员工的最大生命值或是最大精神值，则此次伤害不会发生转移。\n. 灵魂伤害不参与此次计算，无论该次伤害多高均会发生转移。\n若能够转移伤害，肖像会尝试将此次伤害计入转移伤害的累积量，并以计算防御前1.5倍 的伤害量将此次伤害转移给另一名不在画像上的被标记的员工。转移后的伤害不受等级压制影响，属于 伤害，但会计算被标记员工的抗性和buff抗性。如果被标记的承伤员工死亡，则标记会转移至另一名随机员工的身上。肖像不会转移恐惧伤害。\n\n肖像上员工的画像会随着因为转移伤害的累积量增加而逐渐扭曲。当累计转移伤害大于100点但小于200点时，肖像会扭曲，但还能看清人形，此时转移后的伤害会提升至原伤害的2倍。当累计转移伤害大于200点时，肖像会扭曲的不成人样，此时转移后的伤害会提升至原伤害的2.5倍 。\n\n当肖像上仍然有员工的画像时，派遣非画像上的员工去使用肖像会使得画像上的员工立刻被杀死，化成一滩冒着烟的稀泥，同时这也会使得肖像重新选择另一名受标记的员工以承受伤害。如果异世的肖像找不到设施内可作为转移伤害目标的员工，则画像上的员工会立刻被杀死，化成一滩冒着烟的稀泥。派遣画像上的员工对异世的肖像工作不会发生任何事情，但异想体的使用次数会增加。\n\n如果画像上的员工死亡，则肖像会变回空白，可供其余员工正常使用。画像上的员工陷入恐慌并不会影响伤害的转移，这使得画像上的员工一旦陷入恐慌将难以恢复正常。\n\n=== 联动效果 ===\n*异世的肖像可以无视T-09-82 3月27日的避难所提供的 、 效果并转移伤害，但不致死。画像上的员工在对3月27日的避难所工作时或是处于F-02-58 又大又可能很坏的狼的肚子中时不会因为其他员工使用肖像而死亡，但伤害转移标记的显示不会消失，需要根据员工身上的特效判断肖像的效果是否正确生效。正在对3月27日的避难所工作的员工不会被作为随机选择的目标。\n*若肖像标记的承伤员工被F-02-58 又大又可能很坏的狼吞入肚中，亦或是被F-01-37 冰雪女皇冻结从而导致该员工失去控制，亦或是成为了卖主的叛徒，则肖像会重新按照之前的逻辑选择承伤员工；若无其他可选目标，则会杀死画像上的员工。",
    "ok": true,
    "level": "HE",
    "tool": "single",
    "dmgType": null,
    "dmgTypeRaw": null,
    "dmgStat": null,
    "counter": null,
    "maxPeBox": null,
    "mood": {
     "优": null,
     "良": null,
     "差": null
    },
    "workSpeed": null,
    "workCd": null,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {},
    "traitStats": {},
    "isTool": true
   },
   "dmgType": null,
   "counter": null,
   "isTool": true,
   "type": "工具型"
  },
  {
   "row": 131,
   "id": "O-01-92",
   "name": "今天也很害羞",
   "danger": "TETH",
   "prefix": "O",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "前期刷要看脸，没有计数器后期直接可以不管",
   "weaponText": "优(T) 【远(10)】\nDPS：3.75  T级紫手枪，挺不错的",
   "weaponGrades": [
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "T"
   ],
   "weaponType": "T",
   "rangeLabel": "远",
   "rangeValue": 10,
   "weaponTail": "",
   "weaponDps": 3.75,
   "weaponDpsMax": null,
   "weaponNote": "DPS：3.75  T级紫手枪，挺不错的",
   "armorText": "优(T)\n0.7 0.6 1.5 2.0 红白不错，紫抗偏低",
   "armorGrades": [
    "优"
   ],
   "armorGrade": "优",
   "armorTypes": [
    "T"
   ],
   "armorType": "T",
   "armorResist": [
    0.7,
    0.6,
    1.5,
    2.0
   ],
   "armorNote": "0.7 0.6 1.5 2.0 红白不错，紫抗偏低",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "o-01-92 今天也很害羞 teth 中\n前期刷要看脸，没有计数器后期直接可以不管 优(t) 【远(10)】\ndps：3.75  t级紫手枪，挺不错的 优(t)\n0.7 0.6 1.5 2.0 红白不错，紫抗偏低  黑 black x teth 未填",
   "wiki": {
    "id": "O-01-92",
    "title": "O-01-92 今天也很害羞",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-01-92_%E4%BB%8A%E5%A4%A9%E4%B9%9F%E5%BE%88%E5%AE%B3%E7%BE%9E",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "TETH",
    "tool": null,
    "dmgType": "黑",
    "dmgTypeRaw": "black",
    "dmgStat": "2-3",
    "counter": "X",
    "maxPeBox": 12.0,
    "mood": {
     "优": "10-12",
     "良": "7-9",
     "差": "0-6"
    },
    "workSpeed": 0.25,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "50%",
      "45%",
      "45%",
      "40%",
      "40%"
     ],
     "insight": [
      "50%",
      "45%",
      "45%",
      "40%",
      "40%"
     ],
     "attachment": [
      "50%",
      "45%",
      "45%",
      "40%",
      "40%"
     ],
     "repression": [
      "50%",
      "45%",
      "45%",
      "40%",
      "40%"
     ]
    },
    "isTool": false
   },
   "dmgType": "黑",
   "counter": "X",
   "isTool": false,
   "type": "TETH"
  },
  {
   "row": 133,
   "id": "O-03-93",
   "name": "碧蓝新星",
   "danger": "ALEPH",
   "prefix": "O",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "最好管的A级，不容易出逃",
   "weaponText": "优(A) 【极远(25)】\nDPS：3.75(7.5/12.55)  远程攻击，伤害也不错",
   "weaponGrades": [
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "A"
   ],
   "weaponType": "A",
   "rangeLabel": "极远",
   "rangeValue": 25,
   "weaponTail": "",
   "weaponDps": 3.75,
   "weaponDpsMax": 7.5,
   "weaponNote": "DPS：3.75(7.5/12.55)  远程攻击，伤害也不错",
   "armorText": "良(A)\n0.4 0.4 0.4 1.0 A级均衡甲\n特殊效果有BUG不会触发",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "A"
   ],
   "armorType": "A",
   "armorResist": [
    0.4,
    0.4,
    0.4,
    1.0
   ],
   "armorNote": "0.4 0.4 0.4 1.0 A级均衡甲\n特殊效果有BUG不会触发",
   "suppressText": "可镇压\n不容易镇压",
   "canSuppress": true,
   "suppressGrade": "较难",
   "suppressNote": "不容易镇压",
   "search": "o-03-93 碧蓝新星 aleph 中\n最好管的a级，不容易出逃 优(a) 【极远(25)】\ndps：3.75(7.5/12.55)  远程攻击，伤害也不错 良(a)\n0.4 0.4 0.4 1.0 a级均衡甲\n特殊效果有bug不会触发 可镇压\n不容易镇压 白 white 2 aleph 较难 可镇压\n不容易镇压",
   "wiki": {
    "id": "O-03-93",
    "title": "O-03-93 碧蓝新星",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-03-93_%E7%A2%A7%E8%93%9D%E6%96%B0%E6%98%9F",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "鉴于“碧蓝新星”的管理须知在正常工作下非常容易满足，且满足条件时，“碧蓝新星”是完全不会突破收容的。因此，大多数情况下“碧蓝新星”的出逃一般代表设施已经遭受了某些会释放异想体的连锁反应。此时场面较为混乱，可能有其余突破收容的精神或侵蚀伤害类异想体。而“碧蓝新星”的全屏精神伤害又很可能使得主管的力场盾和精神回复弹的消耗速度跟不上补充的速度。如果主管不能及时处理掉碧蓝新星，精神值和精神抗性较低的员工很可能会因为“碧蓝新星”的伤害而陷入恐慌，又或是被部分出逃的异想体攻击至恐慌，并死于“碧蓝新星”的攻击。因此，如果“碧蓝新星”出逃时场面较为混乱，就尽量不要与其余游荡的异想体遭遇，将全部力量用于对抗“碧蓝新星”并将其镇压后，再去镇压其余逃出的异想体。\n\n对“碧蓝新星”的镇压工作取决于设施内员工的综合战斗力，并且常常表现出两极分化的效应：员工部队的综合战斗力较为优秀的主管通常能在“碧蓝新星”造成过多损害或击杀员工之前就将其镇压，而火力不足的主管则常常因为低抗性和低属性员工恐慌和死亡造成的连锁恐惧伤害而蒙受相当大的损失，甚至不得不重新开始当天的工作。\n\n同时，由于“碧蓝新星”的攻击特性，其出逃往往伴随着“微笑的尸山”，“大鸟”，“深黯军团”和“风云法师”的出逃，并有可能因此引发“小红帽雇佣兵”的出逃，从而导致“又大又可能很坏的狼”的出逃。因此，当设施内存在这些异想体时，“碧蓝新星”的又一麻烦之处就在于其产生的连锁反应和次生灾害往往大过其本身。\n\n“碧蓝新星”的抗性很高，且由于出逃后随机瞬移的特性，想要在其造成损失或产生连带效应之前就将其镇压是较为困难的。同时，因为它造成的伤害是无法躲避的全屏伤害，对抗“碧蓝新星”的唯一方式就是尽快将其镇压，且需要随时注意为设施内的员工附带上“反精神力场盾”或使用精神值回复子弹来抵抗其造成的高额伤害。\n\nE.G.O护甲“伪善”的群体精神值回复能极大的减少“碧蓝新星”对穿着这件护甲的员工，以及该员工周围的员工造成的威胁。",
    "toolText": null,
    "ok": true,
    "level": "ALEPH",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "6-9",
    "counter": "2",
    "maxPeBox": 33.0,
    "mood": {
     "优": "28-33",
     "良": "7-27",
     "差": "0-6"
    },
    "workSpeed": 0.32,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 0.4,
     "white": 0.2,
     "black": 0.8,
     "pale": 1.2
    },
    "resistWord": {
     "red": "抗性极高",
     "white": "抗性极高",
     "black": "抗性较高",
     "pale": "抗性较低"
    },
    "traits": {
     "instinct": [
      "低",
      "低",
      "低",
      "低",
      "低"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "repression": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "30%",
      "30%",
      "30%",
      "30%",
      "30%"
     ],
     "insight": [
      "50%",
      "50%",
      "50%",
      "50%",
      "50%"
     ],
     "attachment": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "repression": [
      "40%",
      "40%",
      "40%",
      "40%",
      "40%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "2",
   "isTool": false,
   "type": "ALEPH"
  },
  {
   "row": 135,
   "id": "T-09-94",
   "name": "你必须要幸福",
   "danger": "ZAYIN",
   "prefix": "T",
   "mgmtGrades": [
    "高"
   ],
   "mgmtGrade": "高",
   "mgmtNote": "非常实用的异想体，能增加属性，遇到必选",
   "weaponText": "-",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "t-09-94 你必须要幸福 zayin 高\n非常实用的异想体，能增加属性，遇到必选 - -  工具型 未填",
   "wiki": {
    "id": "T-09-94",
    "title": "T-09-94 你必须要幸福",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-09-94_%E4%BD%A0%E5%BF%85%E9%A1%BB%E8%A6%81%E5%B9%B8%E7%A6%8F",
    "tpl": "Abn Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": "[]\n主管派遣员工使用它时，员工会站到机器中央并接受机器的手术，机器的显示屏上显示的标志将会不断在yes和no中变换，每次变换会使下一次的变换间隔减少 0.04秒，最后完全糊成一片。初始变换速度为 1秒变换一次，变换速度最快为 0.04秒变换一次。\n\n员工停止使用这个异想体时，它会根据显示屏上显示的是yes还是no来为员工提供一个增加或减少四项属性数值的 ，每次获取这个 时效果会被重新覆盖。需要注意的是，如果有员工在使用它时主管暂停了游戏或者使用了esc按钮，该员工将会立刻停止使用这个异想体。\n\n这个异想体给予员工增益/减益效果的具体数值为：该员工使用该异想体的时间²/6。在这个计算公式中，使用时间最多统计30秒，且最终计算结果将向下取整。\n\n该异想体给予的增益和减益会互相覆盖而不是简单的加减。当这个异想体给予员工增益时，不会让员工的单项属性上限超过100。如果员工的所有属性上限已经高于100，则它将无法给予任何增益。同时，这个异想体也无法让员工的单项属性低于15。在计算属性加成时，自律和正义相关属性会取两个分属性的加成平均值。\n\n如果主管在一天内已经派遣一名员工使用了这个异想体5次，则这名员工将会在第6次使用结束时进入被控制状态，并直接被机器在收容室内扯成碎片。动画结束后，该员工将被判定为死亡。\n\n如果某名员工使用它获得了总和超过200点的属性加成，则这名员工会被添加进一个“将要死亡的员工”列表中。在结束这一天时，所有位于列表上的员工都将立刻死亡，无论这名员工在结束这一天时身上存在的增益效果总和是否高于200点。因而，在使用它获得总和超过200点的属性后再降低该员工的属性并不能避免这名员工的死亡。\n\n但该异想体只会在员工停止使用它时才会给予员工增益或减益。因而，若主管指派一名员工一直使用该异想体，并在该员工仍在使用“你必须要幸福”时结束这一天，即使该员工理应获得的属性加成超过了200点，该员工也不会被判定为死亡。（但这样做会让主管在结束这一天前无法暂停）\n\n“你必须要幸福”给予员工的增益和减益会在一天的工作结束后被清空。",
    "ok": true,
    "level": "ZAYIN",
    "tool": "channel",
    "dmgType": null,
    "dmgTypeRaw": null,
    "dmgStat": null,
    "counter": null,
    "maxPeBox": null,
    "mood": {
     "优": null,
     "良": null,
     "差": null
    },
    "workSpeed": null,
    "workCd": null,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {},
    "traitStats": {},
    "isTool": true
   },
   "dmgType": null,
   "counter": null,
   "isTool": true,
   "type": "工具型"
  },
  {
   "row": 137,
   "id": "O-09-95",
   "name": "荧光手镯",
   "danger": "TETH",
   "prefix": "O",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "有bug，根本没加成，debuff倒是很多",
   "weaponText": "-",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "o-09-95 荧光手镯 teth 低\n有bug，根本没加成，debuff倒是很多 - -  工具型 未填",
   "wiki": {
    "id": "O-09-95",
    "title": "O-09-95 荧光手镯",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-09-95_%E8%8D%A7%E5%85%89%E6%89%8B%E9%95%AF",
    "tpl": "Abn Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": "员工佩戴手镯后，他的最大生命值将提高15点。\n\n该异想体本应为佩戴者每3秒回复2.4点生命值。但实际上，它只会在员工佩戴手镯后的第3秒为其回复2.4点生命值 。\n\n在员工佩戴手镯的15秒后，手镯将开始一个时长为60秒的倒计时。在倒计时持续时间内，如果员工的生命值在任意一个时刻小于最大生命值，则这个倒计时将会被重置为60秒。若倒计时归零，员工将立刻死亡。\n\n主管指派员工员工尝试归还荧光手镯时，若 小于 ，则这名员工会立刻死亡。这同样适用于在结束一天的工作的同时员工的 不为满的情况下。",
    "ok": true,
    "level": "TETH",
    "tool": "equip",
    "dmgType": null,
    "dmgTypeRaw": null,
    "dmgStat": null,
    "counter": null,
    "maxPeBox": null,
    "mood": {
     "优": null,
     "良": null,
     "差": null
    },
    "workSpeed": null,
    "workCd": null,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {},
    "traitStats": {},
    "isTool": true
   },
   "dmgType": null,
   "counter": null,
   "isTool": true,
   "type": "工具型"
  },
  {
   "row": 139,
   "id": "O-09-96",
   "name": "行为矫正仪",
   "danger": "TETH",
   "prefix": "O",
   "mgmtGrades": [
    "高"
   ],
   "mgmtGrade": "高",
   "mgmtNote": "每天领一次，省事好用",
   "weaponText": "-",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "o-09-96 行为矫正仪 teth 高\n每天领一次，省事好用 - -  工具型 未填",
   "wiki": {
    "id": "O-09-96",
    "title": "O-09-96 行为矫正仪",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-09-96_%E8%A1%8C%E4%B8%BA%E7%9F%AB%E6%AD%A3%E4%BB%AA",
    "tpl": "Abn Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": "主管可以指派员工携带行为校正仪。员工携带行为校正仪后，正义相关属性会提高15点，但是会减少10点最大精神值。\n\n如果携带行为校正仪的员工陷入了恐慌，或是在携带行为校正仪的30秒内就将其归还，亦或是主管选择在这30秒内结束一天，该员工会在狂笑中挖出自己的眼睛，并被判定死亡。",
    "ok": true,
    "level": "TETH",
    "tool": "equip",
    "dmgType": null,
    "dmgTypeRaw": null,
    "dmgStat": null,
    "counter": null,
    "maxPeBox": null,
    "mood": {
     "优": null,
     "良": null,
     "差": null
    },
    "workSpeed": null,
    "workCd": null,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {},
    "traitStats": {},
    "isTool": true
   },
   "dmgType": null,
   "counter": null,
   "isTool": true,
   "type": "工具型"
  },
  {
   "row": 141,
   "id": "T-09-97",
   "name": "古老的信念与承诺",
   "danger": "ZAYIN",
   "prefix": "T",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "可以强化武器，就是看脸",
   "weaponText": "-",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "t-09-97 古老的信念与承诺 zayin 中\n可以强化武器，就是看脸 - -  工具型 未填",
   "wiki": {
    "id": "T-09-97",
    "title": "T-09-97 古老的信念与承诺",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-09-97_%E5%8F%A4%E8%80%81%E7%9A%84%E4%BF%A1%E5%BF%B5%E4%B8%8E%E6%89%BF%E8%AF%BA",
    "tpl": "Abn Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": "主管可以派遣员工花费少量能量来加强他的E.G.O武器。强化后的武器会有更高的攻击力，强化次数越多，攻击力加成越大。\n\n每次强化都有几率导致E.G.O武器损坏，同一把E.G.O武器强化次数越多，E.G.O武器损坏几率越大。E.G.O强化失败时，该异想体会立刻将强化失败的E.G.O武器从E.G.O武器列表里移除，并对主管当前的E.G.O库进行一次存档。这代表主管将无法通过Binah的抑制奖励，E.G.O修复科技，回到记忆库或“重新开始这一天”来挽回损失的E.G.O，只能通过该E.G.O的原有获得方式重新获得它。（重新研发或镇压特定异想体）\n\n但这也代表，若主管在某一天制作出出了高级的E.G.O装备，但此时不想回到记忆库，又担心接下来的工作失误，重新开始一天后自己当天制作的E.G.O丢失。主管可以选择派遣那些持有低级E.G.O的员工前去使用该异想体并故意让他强化失败，以此来保存当天制作出的E.G.O。\n\n强化成功的E.G.O武器将在结束这一天时恢复为初始的攻击力。\n* 第一次强化时，消耗当前2%的能源，强化成功率为85%，强化成功的E.G.O武器伤害会提升至初始的1.2倍。\n* 第二次强化时，消耗当前2%的能源，强化成功率为70%，强化成功的E.G.O武器伤害会提升至初始的1.4倍。\n* 第三次强化时，消耗当前3%的能源，强化成功率为55%，强化成功的E.G.O武器伤害会提升至初始的1.7倍。\n* 第四次强化时，消耗当前5%的能源，强化成功率为40%，强化成功的E.G.O武器伤害会提升至初始的2.0倍。\n* 第五次及一天内更多次重复强化时，消耗当前12%的能源，E.G.O武器的伤害不再提升，成功率为25%\n这个工具异想体无法强化镇暴棍，同时也无法在主管能源不足时对E.G.O武器进行强化。如果上面两个条件任意一条满足，则被派遣使用它的员工会在进入收容室后立刻走出来且不增加其使用次数。\n\n如果员工的E.G.O武器在强化中被摧毁，则这名员工在当天使用的武器会变为镇暴棍。\n\n即使能源不足或是员工装备了镇暴棍，只要员工进入了其收容单元尝试工作就能解除其收容单元的熔毁。",
    "ok": true,
    "level": "ZAYIN",
    "tool": "single",
    "dmgType": null,
    "dmgTypeRaw": null,
    "dmgStat": null,
    "counter": null,
    "maxPeBox": null,
    "mood": {
     "优": null,
     "良": null,
     "差": null
    },
    "workSpeed": null,
    "workCd": null,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {},
    "traitStats": {},
    "isTool": true
   },
   "dmgType": null,
   "counter": null,
   "isTool": true,
   "type": "工具型"
  },
  {
   "row": 143,
   "id": "O-02-98",
   "name": "棘刺公交",
   "danger": "HE",
   "prefix": "O",
   "mgmtGrades": [
    "中",
    "低",
    "高"
   ],
   "mgmtGrade": "高",
   "mgmtNote": "前期低自律比较麻烦，自律高了随便打",
   "weaponText": "极差(H) 【一般(5)】\nDPS：1.51+2  一些设计失败的武器",
   "weaponGrades": [
    "极差"
   ],
   "weaponGrade": "极差",
   "weaponTypes": [
    "H"
   ],
   "weaponType": "H",
   "rangeLabel": "一般",
   "rangeValue": 5,
   "weaponTail": "",
   "weaponDps": 1.51,
   "weaponDpsMax": null,
   "weaponNote": "DPS：1.51+2  一些设计失败的武器",
   "armorText": "差(H)\n1.2 0.8 0.8 1.5 双抗甲弱红",
   "armorGrades": [
    "差"
   ],
   "armorGrade": "差",
   "armorTypes": [
    "H"
   ],
   "armorType": "H",
   "armorResist": [
    1.2,
    0.8,
    0.8,
    1.5
   ],
   "armorNote": "1.2 0.8 0.8 1.5 双抗甲弱红",
   "suppressText": "可镇压\n容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压",
   "search": "o-02-98 棘刺公交 he 中\n前期低自律比较麻烦，自律高了随便打 极差(h) 【一般(5)】\ndps：1.51+2  一些设计失败的武器 差(h)\n1.2 0.8 0.8 1.5 双抗甲弱红 可镇压\n容易镇压 黑 black 2 he 容易 可镇压\n容易镇压",
   "wiki": {
    "id": "O-02-98",
    "title": "O-02-98 棘刺公交",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-02-98_%E6%A3%98%E5%88%BA%E5%85%AC%E4%BA%A4",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "由于棘刺公交出逃后只会待在一个位置不移动，因而完全不对它进行镇压也是可行的选择之一，它能做的只有清空部门内前来送死的文职而已。但如果主管设施内收容了响应文职死亡的异想体且没有惩戒部的科技：处决弹，那么请主管尽量使用高 且拥有较高最大精神值的员工来镇压它。\n\n棘刺公交对低 的员工造成的伤害是毁灭性的，而对于那些五级 且抗性不弱的员工来说，它还没它的E.G.O武器能打。",
    "toolText": null,
    "ok": true,
    "level": "HE",
    "tool": null,
    "dmgType": "黑",
    "dmgTypeRaw": "black",
    "dmgStat": "1-5",
    "counter": "2",
    "maxPeBox": 18.0,
    "mood": {
     "优": "15-18",
     "良": "9-14",
     "差": "0-8"
    },
    "workSpeed": 0.3,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 1.0,
     "white": 0.5,
     "black": 1.0,
     "pale": 1.5
    },
    "resistWord": {
     "red": "抗性一般",
     "white": "抗性较高",
     "black": "抗性一般",
     "pale": "抗性较低"
    },
    "traits": {
     "instinct": [
      "高",
      "高",
      "高",
      "高",
      "高"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "低",
      "低",
      "低",
      "低",
      "低"
     ]
    },
    "traitStats": {
     "instinct": [
      "60%",
      "60%",
      "60%",
      "60%",
      "60%"
     ],
     "insight": [
      "40%",
      "40%",
      "40%",
      "40%",
      "40%"
     ],
     "attachment": [
      "50%",
      "50%",
      "50%",
      "50%",
      "50%"
     ],
     "repression": [
      "30%",
      "30%",
      "30%",
      "30%",
      "30%"
     ]
    },
    "isTool": false
   },
   "dmgType": "黑",
   "counter": "2",
   "isTool": false,
   "type": "HE"
  },
  {
   "row": 145,
   "id": "T-02-99",
   "name": "空虚之梦",
   "danger": "TETH",
   "prefix": "T",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "并不容易出逃，出逃睡眠有恶性bug，建议别收",
   "weaponText": "优(T) 【一般(8)】\nDPS：4.5  高频伤害",
   "weaponGrades": [
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "T"
   ],
   "weaponType": "T",
   "rangeLabel": "一般",
   "rangeValue": 8,
   "weaponTail": "",
   "weaponDps": 4.5,
   "weaponDpsMax": null,
   "weaponNote": "DPS：4.5  高频伤害",
   "armorText": "良(T)\n1.2 0.8 0.7 2.0 双抗甲弱红",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "T"
   ],
   "armorType": "T",
   "armorResist": [
    1.2,
    0.8,
    0.7,
    2.0
   ],
   "armorNote": "1.2 0.8 0.7 2.0 双抗甲弱红",
   "suppressText": "可镇压\n容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压",
   "search": "t-02-99 空虚之梦 teth 低\n并不容易出逃，出逃睡眠有恶性bug，建议别收 优(t) 【一般(8)】\ndps：4.5  高频伤害 良(t)\n1.2 0.8 0.7 2.0 双抗甲弱红 可镇压\n容易镇压 黑 black 2 teth 容易 可镇压\n容易镇压",
   "wiki": {
    "id": "T-02-99",
    "title": "T-02-99 空虚之梦",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/T-02-99_%E7%A9%BA%E8%99%9A%E4%B9%8B%E6%A2%A6",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "空虚之梦本身的镇压难度并不大，无论是用一个远程员工在收容室门口堵着，让它第一时间变成鸡形态，还是快速点醒设施内陷入沉睡的员工，都可以十分轻松的将其镇压。只要没有被沉睡的员工，鸡形态的空虚之梦战斗力甚至不如波迪。\n\n但由于在上文中提到的恶性bug，相比于镇压它，更建议在会造成融毁的boss战或日常工作中专门安排一个保姆看住它的大门以防止它出逃。",
    "toolText": null,
    "ok": true,
    "level": "TETH",
    "tool": null,
    "dmgType": "黑",
    "dmgTypeRaw": "black",
    "dmgStat": "1-3",
    "counter": "2",
    "maxPeBox": 14.0,
    "mood": {
     "优": "9-14",
     "良": "7-8",
     "差": "0-6"
    },
    "workSpeed": 0.25,
    "workCd": 15.0,
    "fearDamage": "n",
    "noEscape": null,
    "resist": {
     "red": 1.5,
     "white": 0.8,
     "black": 1.2,
     "pale": 2.0
    },
    "resistWord": {
     "red": "抗性较低",
     "white": "抗性较高",
     "black": "抗性较低",
     "pale": "抗性极低"
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "高",
      "高",
      "高",
      "高",
      "高"
     ],
     "repression": [
      "低",
      "低",
      "低",
      "低",
      "低"
     ]
    },
    "traitStats": {
     "instinct": [
      "45%",
      "45%",
      "45%",
      "45%",
      "45%"
     ],
     "insight": [
      "45%",
      "45%",
      "45%",
      "45%",
      "45%"
     ],
     "attachment": [
      "60%",
      "60%",
      "60%",
      "60%",
      "60%"
     ],
     "repression": [
      "20%",
      "20%",
      "20%",
      "20%",
      "20%"
     ]
    },
    "isTool": false
   },
   "dmgType": "黑",
   "counter": "2",
   "isTool": false,
   "type": "TETH"
  },
  {
   "row": 147,
   "id": "O-04-100",
   "name": "樱下墓",
   "danger": "TETH",
   "prefix": "O",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "偷人型，要求工作良差，全图一次偷五个人",
   "weaponText": "良(T) 【一般(5)】\nDPS：4.5  都是高频伤但抬手比上面那个差些",
   "weaponGrades": [
    "良",
    "差"
   ],
   "weaponGrade": "良",
   "weaponTypes": [
    "T"
   ],
   "weaponType": "T",
   "rangeLabel": "一般",
   "rangeValue": 5,
   "weaponTail": "",
   "weaponDps": 4.5,
   "weaponDpsMax": null,
   "weaponNote": "DPS：4.5  都是高频伤但抬手比上面那个差些",
   "armorText": "良(T)\n1.2 0.6 0.7 2.0 双抗甲弱红",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "T"
   ],
   "armorType": "T",
   "armorResist": [
    1.2,
    0.6,
    0.7,
    2.0
   ],
   "armorNote": "1.2 0.6 0.7 2.0 双抗甲弱红",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "o-04-100 樱下墓 teth 低\n偷人型，要求工作良差，全图一次偷五个人 良(t) 【一般(5)】\ndps：4.5  都是高频伤但抬手比上面那个差些 良(t)\n1.2 0.6 0.7 2.0 双抗甲弱红  白 white 3 teth 未填",
   "wiki": {
    "id": "O-04-100",
    "title": "O-04-100 樱下墓",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-04-100_%E6%A8%B1%E4%B8%8B%E5%A2%93",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "TETH",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "2-4",
    "counter": "3",
    "maxPeBox": 12.0,
    "mood": {
     "优": "7-12",
     "良": "4-6",
     "差": "0-3"
    },
    "workSpeed": 0.3,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "低",
      "低",
      "低",
      "低",
      "低"
     ]
    },
    "traitStats": {
     "instinct": [
      "40%",
      "40%",
      "40%",
      "40%",
      "40%"
     ],
     "insight": [
      "55%",
      "55%",
      "55%",
      "55%",
      "55%"
     ],
     "attachment": [
      "55%",
      "55%",
      "55%",
      "55%",
      "55%"
     ],
     "repression": [
      "20%",
      "20%",
      "20%",
      "20%",
      "20%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "3",
   "isTool": false,
   "type": "TETH"
  },
  {
   "row": 149,
   "id": "O-02-101",
   "name": "炎雀",
   "danger": "WAW",
   "prefix": "O",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "工作差涨计数器，不是很好管",
   "weaponText": "良(W) 【远(15)】\nDPS：9.0  低配新星，但实际体验效果一般",
   "weaponGrades": [
    "良"
   ],
   "weaponGrade": "良",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "远",
   "rangeValue": 15,
   "weaponTail": "",
   "weaponDps": 9.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：9.0  低配新星，但实际体验效果一般",
   "armorText": "差(W)\n0.6 0.6 1.3 2.0 弱紫，蓝抗也低",
   "armorGrades": [
    "差"
   ],
   "armorGrade": "差",
   "armorTypes": [
    "W"
   ],
   "armorType": "W",
   "armorResist": [
    0.6,
    0.6,
    1.3,
    2.0
   ],
   "armorNote": "0.6 0.6 1.3 2.0 弱紫，蓝抗也低",
   "suppressText": "可镇压\n不容易镇压",
   "canSuppress": true,
   "suppressGrade": "较难",
   "suppressNote": "不容易镇压",
   "search": "o-02-101 炎雀 waw 低\n工作差涨计数器，不是很好管 良(w) 【远(15)】\ndps：9.0  低配新星，但实际体验效果一般 差(w)\n0.6 0.6 1.3 2.0 弱紫，蓝抗也低 可镇压\n不容易镇压 红 red 3 waw 较难 可镇压\n不容易镇压",
   "wiki": {
    "id": "O-02-101",
    "title": "O-02-101 炎雀",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-02-101_%E7%82%8E%E9%9B%80",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "由于“炎雀”在攻击模式下的俯冲拥有高额的精神伤害，同时会降低所有攻击该异想体的员工的工作速度，又会在游荡一定时间后自动返回收容室，所以镇压这个异想体并非必要。\n\n镇压“炎雀”唯一的理由便是获得它的EGO武器“荣耀之羽”。这个E.G.O武器最多获得三个，每日通过镇压“炎雀”只可获得一个，需要镇压“炎雀”三天（或在一天内连续返回记忆库）才能全部收齐。想要镇压“炎雀”并获得它的E.G.O武器，则需要在“炎雀”返回前完成镇压，否则当“炎雀”开始返回时，它不再受到任何伤害，即镇压失败。相比于派遣员工，提前在“炎雀”部门部署兔子会是个不错的选择。兔子虽然不能稳定击杀“炎雀”，能但对它成有效的杀伤。主管可以通过多次重开反复尝试，直到兔子成功击杀“炎雀”。\n\n如果主管准备派遣员工参与镇压，镇压“炎雀”就成了对E.G.O武器与防具储备的一项检验。E.G.O武器不足时主管将难以在限定时间内击败“炎雀”，同时由于“炎雀”的高额精神伤害与精神值归零将直接导致员工死亡的特性，E.G.O防具乏力会让镇压炎雀的过程有更大的风险，进行规避操作的同时也将降低输出速度，最终导致镇压失败。\n\n利用俯冲技能的冷却时间与“炎雀”的返回时间可以粗略估计“炎雀”大致还有多长时间回到收容室。“炎雀”每次俯冲的时间间隔大约为9秒，而返回收容室将在突破收容后45秒后开始有可能发生，在90秒之前必定返回。那么在“炎雀”突破收容时立即进行镇压的情况下，“炎雀”将在释放'''五次'''俯冲之后随时可能返回。\n\n虽然主管可以操控员工较为轻松的躲避炎雀的冲刺，但为了在限定时间内造成更大的伤害，根据敏感信息，选用侵蚀伤害与灵魂伤害的EGO武器将更为明智。“炎雀”的俯冲是以加速后的移动进行计算，能给攻击目标施加减速状态的E.G.O武器如笑靥，爱慕都能派上用场。\n\n由于“炎雀”会造成房间物理伤害与俯冲精神伤害，镇压“炎雀”的员工应装备这两项抗性均良好的E.G.O防具，因为在镇压“炎雀”时，为了更高的输出速度，需要在承受房间伤害的同时硬吃“炎雀”的俯冲攻击。主管应视情况需给员工提供红白盾，或血蓝弹救急。如果镇压“炎雀”的队伍中有员工携带了E.G.O武器以爱与恨之名，那么可以无视房间物理伤害，伪善护甲的群体回蓝效果和精神治疗弹都可以为员工提供回复。规避“炎雀”的俯冲时，可以选择控制参与镇压的员工穿过正在俯冲的“炎雀”。这虽然会导致他们硬吃一次90-110点精神伤害，但可以避免员工因“卡墙角”的bug致死。\n\n请主管不要在恢复手段不足时派遣最大精神值不足100且精神抗性不足0.6的员工，又或是勇气等级和物理抗性都较低的员工参加镇压，这些员工难以在“炎雀”的冲刺和房间持续伤害中持续战斗，且会很容易因为意外死亡。\n\n最后有一点需要注意，“炎雀”的致盲debuff不会自行消失，请主管不要派遣因致盲而工作速度降低的员工对碧蓝新星，次元衍射变体这两个对工作时间有要求的异想体进行工作。这会导致不必要的员工死亡和意料外的异想体出逃。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "红",
    "dmgTypeRaw": "red",
    "dmgStat": "3-4",
    "counter": "3",
    "maxPeBox": 24.0,
    "mood": {
     "优": "18-24",
     "良": "11-17",
     "差": "0-10"
    },
    "workSpeed": 0.25,
    "workCd": 15.0,
    "fearDamage": "n",
    "noEscape": null,
    "resist": {
     "red": 0.8,
     "white": 0.4,
     "black": 1.2,
     "pale": 2.0
    },
    "resistWord": {
     "red": "抗性较高",
     "white": "抗性较高",
     "black": "抗性较低",
     "pale": "抗性极低"
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "高"
     ],
     "insight": [
      "低",
      "低",
      "低",
      "低",
      "低"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "55%",
      "55%",
      "50%",
      "50%",
      "60%"
     ],
     "insight": [
      "30%",
      "30%",
      "25%",
      "25%",
      "35%"
     ],
     "attachment": [
      "45%",
      "45%",
      "40%",
      "40%",
      "50%"
     ],
     "repression": [
      "45%",
      "45%",
      "40%",
      "40%",
      "50%"
     ]
    },
    "isTool": false
   },
   "dmgType": "红",
   "counter": "3",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 151,
   "id": "O-05-102",
   "name": "阴",
   "danger": "WAW",
   "prefix": "O",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "不太容易减计数器，但出逃了比较麻烦",
   "weaponText": "良(W) 【一般(5)】\nDPS：8.98  伤害还可以",
   "weaponGrades": [
    "良"
   ],
   "weaponGrade": "良",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "一般",
   "rangeValue": 5,
   "weaponTail": "",
   "weaponDps": 8.98,
   "weaponDpsMax": null,
   "weaponNote": "DPS：8.98  伤害还可以",
   "armorText": "差(W)\n1.2 0.8 0.6 1.5 紫抗甲，弱红",
   "armorGrades": [
    "差"
   ],
   "armorGrade": "差",
   "armorTypes": [
    "W"
   ],
   "armorType": "W",
   "armorResist": [
    1.2,
    0.8,
    0.6,
    1.5
   ],
   "armorNote": "1.2 0.8 0.6 1.5 紫抗甲，弱红",
   "suppressText": "阴的激光冷却时间极长，且单次伤害并不算特别高，主管可以较为轻松的轻松操纵员工离开房间以对其进行躲避。相比于激光来说，阴对于员工最大的威胁实际上是冲击波。阴的冲击波释放间隔极短，主管的近战员工如果要对它造成伤害就根本无法对冲击波进行躲避，而近战镇压的员工越多，冲击波造成侵蚀伤害的次数就越多。再加上员工的连锁恐惧机制，冲击波对范围内的职员造成的威胁是致命的，侵蚀抗性最弱的员工死亡或恐慌时就是员工团灭的时刻。\n\n因此，主管只能选择用远程员工或者少量高输出近战员工来对阴进行镇压。如果主管使用远程员工镇压阴。请主管不要让这些员工距离阴过近，尤其是在小房间和阴交战，以免受到过多次冲击波的伤害。如果主管准备使用少量精英近战员工镇压，则请确保这些员工的侵蚀抗性高于0.4，且主管有足够的反侵蚀力场盾或精神，肉体治疗弹以抵消阴的伤害。同时，主管应时刻关注正面战场并操纵员工躲避阴的激光，防止激光和冲击波一起释放秒杀员工的情况出现。\n\n因为阴阳在其中一方被击杀时存在的复活机制，在较短时间内连续镇压阴阳是很有必要的。相对于可以用重火力镇压的阳，阴的镇压难度较高且需要主管的密切关注。建议主管先对阴进行手操镇压以控制阴的血量，再在阳周围安排好那些不适合参与阴的镇压的员工以待阴血量较低时快速击杀阳。在镇压过程中，一切能造成减速效果的E.G.O武器和科技都能起到较大的辅助作用，但切记不要让过多的员工进入阴的冲击波范围。",
   "canSuppress": true,
   "suppressGrade": "可镇压",
   "suppressNote": "",
   "search": "o-05-102 阴 waw 中\n不太容易减计数器，但出逃了比较麻烦 良(w) 【一般(5)】\ndps：8.98  伤害还可以 差(w)\n1.2 0.8 0.6 1.5 紫抗甲，弱红 可镇压\n不推荐镇压（有阳的情况下） 黑 black 2 waw 未填 可镇压\n不推荐镇压（有阳的情况下）",
   "wiki": {
    "id": "O-05-102",
    "title": "O-05-102 阴",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-05-102_%E9%98%B4",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "阴的激光冷却时间极长，且单次伤害并不算特别高，主管可以较为轻松的轻松操纵员工离开房间以对其进行躲避。相比于激光来说，阴对于员工最大的威胁实际上是冲击波。阴的冲击波释放间隔极短，主管的近战员工如果要对它造成伤害就根本无法对冲击波进行躲避，而近战镇压的员工越多，冲击波造成侵蚀伤害的次数就越多。再加上员工的连锁恐惧机制，冲击波对范围内的职员造成的威胁是致命的，侵蚀抗性最弱的员工死亡或恐慌时就是员工团灭的时刻。\n\n因此，主管只能选择用远程员工或者少量高输出近战员工来对阴进行镇压。如果主管使用远程员工镇压阴。请主管不要让这些员工距离阴过近，尤其是在小房间和阴交战，以免受到过多次冲击波的伤害。如果主管准备使用少量精英近战员工镇压，则请确保这些员工的侵蚀抗性高于0.4，且主管有足够的反侵蚀力场盾或精神，肉体治疗弹以抵消阴的伤害。同时，主管应时刻关注正面战场并操纵员工躲避阴的激光，防止激光和冲击波一起释放秒杀员工的情况出现。\n\n因为阴阳在其中一方被击杀时存在的复活机制，在较短时间内连续镇压阴阳是很有必要的。相对于可以用重火力镇压的阳，阴的镇压难度较高且需要主管的密切关注。建议主管先对阴进行手操镇压以控制阴的血量，再在阳周围安排好那些不适合参与阴的镇压的员工以待阴血量较低时快速击杀阳。在镇压过程中，一切能造成减速效果的E.G.O武器和科技都能起到较大的辅助作用，但切记不要让过多的员工进入阴的冲击波范围。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "黑",
    "dmgTypeRaw": "black",
    "dmgStat": "4-6",
    "counter": "2",
    "maxPeBox": 20.0,
    "mood": {
     "优": "16-20",
     "良": "9-15",
     "差": "0-8"
    },
    "workSpeed": 0.3,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 0.5,
     "white": 1.5,
     "black": 0.0,
     "pale": 1.0
    },
    "resistWord": {
     "red": "抗性较高",
     "white": "抗性较低",
     "black": "免疫",
     "pale": "一般"
    },
    "traits": {
     "instinct": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "repression": [
      "极低",
      "极低",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "0%",
      "0%",
      "40%",
      "40%",
      "40%"
     ],
     "insight": [
      "0%",
      "0%",
      "55%",
      "55%",
      "55%"
     ],
     "attachment": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "repression": [
      "0%",
      "0%",
      "40%",
      "40%",
      "40%"
     ]
    },
    "isTool": false
   },
   "dmgType": "黑",
   "counter": "2",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 153,
   "id": "O-07-103",
   "name": "阳",
   "danger": "WAW",
   "prefix": "O",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "阴的伴生物，不好用",
   "weaponText": "-",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "因为阳没有任何攻击方式，且会为周围的员工提供数额不低的回复，故适合阳的镇压方式和阴完全相反，阳更适合多人重火力镇压。利用重火力快速击杀阳并让阳的治愈波同时治愈多个员工能显著提高阳的镇压速度。只要主管参与镇压阳的员工不是碰巧精神抗性较低还持有高伤害的E.G.O武器，阳就无法对主管的职员造成任何威胁。故主管可以集中精力镇压阴，让不适合镇压阴的员工自己镇压阳。",
   "canSuppress": true,
   "suppressGrade": "可镇压",
   "suppressNote": "",
   "search": "o-07-103 阳 waw 中\n阴的伴生物，不好用 - -  工具型 未填",
   "wiki": {
    "id": "O-07-103",
    "title": "O-07-103 阳",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/O-07-103_%E9%98%B3",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": "因为阳没有任何攻击方式，且会为周围的员工提供数额不低的回复，故适合阳的镇压方式和阴完全相反，阳更适合多人重火力镇压。利用重火力快速击杀阳并让阳的治愈波同时治愈多个员工能显著提高阳的镇压速度。只要主管参与镇压阳的员工不是碰巧精神抗性较低还持有高伤害的E.G.O武器，阳就无法对主管的职员造成任何威胁。故主管可以集中精力镇压阴，让不适合镇压阴的员工自己镇压阳。",
    "toolText": "在主管收容了阴后，下一个能选择的工具异想体必定且只能是阳。中央本部例外。主管在开放中央本部时，若在可选择工具异想体的天数选择了阴，阳只会在主管开放新的部门后，于选择工具异想体的天数强制出现。\n\n阳在正常情况下无法单独选择，只能在阴收容后出现。\n\n注：有些时候（bug）阳会出现在正常的选择流程中，但会在随机天数之后变成阴，下一次选择工具异想体时阳仍然会强制出现。如果主管在未收容阴时于异想体选择界面看到了阳，请尽量不要选择它。\n\n在主管指派员工佩戴阳后,在设施内收容了阴时，佩戴者会每秒回复10点'''精神值'''且精神抗性无论高低都会被锁定至0.1，但代价是阴的计数器会每30秒减少1点；在设施内'''没有收容阴时'''，阳不会有'''任何'''作用。\n\n如果有员工佩戴阳进入了阴的收容室，则阴阳将立刻出逃并直接在阴的收容室内合璧并触发阴阳龙。\n\n如果阴阳其中一方的'''生命值'''归零，而另一方仍未被镇压，则生命值归零的那一方将会变回玉佩的形状并在原地悬浮，静止在那并无法对外界造成任何影响。如果在30秒内存活的一方仍未被镇压，则玉佩形态的阴或阳会重新变为出逃状态并将自己的生命值恢复至最大值。当主管击杀其中一个异想体并在其变成玉佩形态后，只有在其复活之前击杀另一个异想体才能完全镇压这两个异想体。\n\n当阴阳成功互相接触时，两者会阴阳合璧。然后一条黑白相间没有爪子的龙会在设施上方出现，以随机的角度自上而下冲出，但必定以极快的速度冲向阴阳合璧的地方并穿过整个设施。它会将路径上所有职员和异想体的'''生命值'''（或'''精神值'''）设定为已损失的'''生命值'''（或'''精神值'''），并将路径上所有未突破收容的异想体收容单元的计数器转换为已损失的计数器。之后阴，阳将视为被镇压（这不能用来完成任务）并直接回到其收容单元。\n\n如果设施内阴的计数器达到0并且出逃。阳也会同时出逃。阳不会在阴未出逃时因为任何原因而独立出逃。它会在其收容单元或者在被携带的员工处生成为一条白色的鲤鱼。\n\n'''出逃的“阳”的生命值为800，基础移动速度为2单位。'''阳的物理抗性一般（1.0），精神抗性一般（1.0），侵蚀抗性一般（1.0），灵魂抗性一般（1.0）。事实上这是一个BUG，因为游戏不能找到阳的抗性数据，所以使用了默认值。\n\n阳没有任何攻击方式。它只会把一切受到的伤害以相同数额的 精神伤害返还给伤害的来源。同时，类似于阴，阳会以3秒为周期在周围释放一道治愈波，所有被治愈波扫到的职员和“兔子”都会回复20点'''生命值'''和'''精神值'''。治愈波的影响范围为动画范围，这使得治愈波可能会影响到相邻房间的职员。\n\n阴阳合体不会对下列单位产生影响：\n*白夜本体，无论其处于收容单元内还是出逃状态\n*终末鸟本体\n*F-02-70 黑天鹅之梦（不包括其衍生异想体“伊利亚”）\n*血雾\n*世界的调律者\n=== 联动效果 ===\n* 阴阳龙不会对正在对T-09-82 3月27日的避难所进行工作的员工生效。\n* 阴阳龙不会对T-03-46 白夜的卖主的叛徒生效。",
    "ok": true,
    "level": "WAW",
    "tool": "equip",
    "dmgType": null,
    "dmgTypeRaw": null,
    "dmgStat": null,
    "counter": null,
    "maxPeBox": null,
    "mood": {
     "优": null,
     "良": null,
     "差": null
    },
    "workSpeed": null,
    "workCd": null,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {},
    "traitStats": {},
    "isTool": true
   },
   "dmgType": null,
   "counter": null,
   "isTool": true,
   "type": "工具型"
  },
  {
   "row": 155,
   "id": "D-09-104",
   "name": "回溯之钟",
   "danger": "WAW",
   "prefix": "D",
   "mgmtGrades": [
    "高"
   ],
   "mgmtGrade": "高",
   "mgmtNote": "打锁妈神器，很方便逃课，推荐选",
   "weaponText": "-",
   "weaponGrades": [],
   "weaponGrade": null,
   "weaponTypes": [],
   "weaponType": null,
   "rangeLabel": null,
   "rangeValue": null,
   "weaponTail": "",
   "weaponDps": null,
   "weaponDpsMax": null,
   "weaponNote": "",
   "armorText": "-",
   "armorGrades": [],
   "armorGrade": null,
   "armorTypes": [],
   "armorType": null,
   "armorResist": null,
   "armorNote": "-",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "d-09-104 回溯之钟 waw 高\n打锁妈神器，很方便逃课，推荐选 - -  工具型 未填",
   "wiki": {
    "id": "D-09-104",
    "title": "D-09-104 回溯之钟",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/D-09-104_%E5%9B%9E%E6%BA%AF%E4%B9%8B%E9%92%9F",
    "tpl": "Abn Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": "“回溯之钟”不会受到任何融毁或特殊融毁的影响。\n\n“回溯之钟”拥有4根真空管，使用它的效果会根据员工等级和已经被点亮的真空管数量而出现不同。1级和2级的员工在使用它时不会对它产生任何效果。派遣三级及三级以上的员工使用它时，它会从左到右开始点亮真空管并且在真空管上显示使用时系统时间的对应数字。当四根真空管被完全点亮时，“回溯之钟”的收容单元会不断有特殊的特效闪烁。此时再使用回溯之钟的效果会根据员工等级而产生极大的不同。\n\n在“回溯之钟”完全充能后派遣五级员工进入使用。则五级员工和“回溯之钟”都会在特效后立刻消失，且主管无法在这一天内再次使用“回溯之钟”，这名五级员工也会被判定死亡。这一次的工作不会被计入“回溯之钟”的使用次数累计中。此时，设施内会产生如下的变化：\n\n# 所有出逃的异想体（除了终末鸟）将会被立刻镇压（对衍生异想体无效，包括但不限于：红舞鞋，伊莉亚，深黯军团出逃时的副体，白夜的使徒和终末鸟的鸟蛋）。“回溯之钟”无法影响血雾和世界的调律者。\n# 所有考验（不包括午夜和考验的衍生物）将会立刻死亡。需要注意的是“回溯之钟”仍然会触发考验的亡语效果或造成bug，在使用它对付惨白色系列的考验时需要主管做好善后工作的人员安排和对亡语的躲避，也请不要使用它处理琥珀色的黄昏（会导致食物链血条消失，在原地抽搐，仍能对经过的职员发起攻击且职员无法对其进行攻击）。\n# 所有收容单元的融毁效果将会立刻被消除。包括融毁警报带来的融毁，异想体如终末鸟的融毁技能，特殊boss如世界的调律者造成的特殊融毁。\n# 所有WAW和ALEPH级异想体因为工作造成的成功率减少将会被立刻重置。（但回溯之钟无法重置部门全灭带来的部门异想体工作成功率-50%减益）\n# 主管此时持有的能源将恢复至当天内已收集能源的最高值。\n* 白夜、深黯军团不受到任何效果，即使并未出逃。\n如果“回溯之钟”完全充能后派遣进入使用的员工不足五级，则除了使用“回溯之钟”的员工以外的职员都会立刻死亡或恐慌 （死亡和恐慌的概率均为50%）。“回溯之钟”的充能将会被重置到没有灯管被点亮时的状态，且这一次的工作会被计入“回溯之钟”的使用次数累计中。\n\n'''“回溯之钟”不能复活已经死亡的员工，也不能让陷入恐慌的员工恢复正常。'''\n\n使用“回溯之钟”击杀考验和异想体不能获得考验通过时的奖励能源，也不能完成培训部，惩戒部和控制部的镇压异想体，击杀考验相关任务。",
    "ok": true,
    "level": "WAW",
    "tool": "single",
    "dmgType": null,
    "dmgTypeRaw": null,
    "dmgStat": null,
    "counter": null,
    "maxPeBox": null,
    "mood": {
     "优": null,
     "良": null,
     "差": null
    },
    "workSpeed": null,
    "workCd": null,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {},
    "traitStats": {},
    "isTool": true
   },
   "dmgType": null,
   "counter": null,
   "isTool": true,
   "type": "工具型"
  },
  {
   "row": 157,
   "id": "D-01-105",
   "name": "月光女神",
   "danger": "WAW",
   "prefix": "D",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "基本不会出逃",
   "weaponText": "极优(W) 【近(3)】\nDPS：7.89  可套全体紫盾，功能性强",
   "weaponGrades": [
    "极优"
   ],
   "weaponGrade": "极优",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "近",
   "rangeValue": 3,
   "weaponTail": "",
   "weaponDps": 7.89,
   "weaponDpsMax": null,
   "weaponNote": "DPS：7.89  可套全体紫盾，功能性强",
   "armorText": "良(W)\n0.8 0.4 0.7 2.0 白抗甲，蓝抗偏低",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "W"
   ],
   "armorType": "W",
   "armorResist": [
    0.8,
    0.4,
    0.7,
    2.0
   ],
   "armorNote": "0.8 0.4 0.7 2.0 白抗甲，蓝抗偏低",
   "suppressText": "虽然“月之泣”拥有较高的生命值，但它的抗性较低，且游荡速度较慢，还不算在异想体镇压任务内。如果主管已经清空了设施内所有的文职，且“月之泣”不是因为演奏工作出逃，放任“月之泣”游荡并待它自行返回收容单元是完全可行的选择。\n\n因为“月之泣”的手杖敲击前摇较短，如果主管打算镇压月之泣，可以选择用远程武器慢慢消耗以躲避它的攻击，又或是派遣物理抗性较高的员工使用“月光女神”自己的武器吸引仇恨并抵挡伤害。因为“月之泣”的特殊攻击能造成较高的侵蚀伤害且为范围攻击，请主管尽量不要派遣侵蚀抗性较低或勇气，谨慎等级过低的近战员工参与对“月之泣”的镇压。\n\n“月光女神”自己的武器，E.G.O“以爱与恨之名”，中央本部的科技：反物理力场盾和反侵蚀力场盾都能在“月之泣”的镇压过程中提供较大的帮助。",
   "canSuppress": true,
   "suppressGrade": "可镇压",
   "suppressNote": "",
   "search": "d-01-105 月光女神 waw 中\n基本不会出逃 极优(w) 【近(3)】\ndps：7.89  可套全体紫盾，功能性强 良(w)\n0.8 0.4 0.7 2.0 白抗甲，蓝抗偏低  白 white 3 waw 未填",
   "wiki": {
    "id": "D-01-105",
    "title": "D-01-105 月光女神",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/D-01-105_%E6%9C%88%E5%85%89%E5%A5%B3%E7%A5%9E",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "虽然“月之泣”拥有较高的生命值，但它的抗性较低，且游荡速度较慢，还不算在异想体镇压任务内。如果主管已经清空了设施内所有的文职，且“月之泣”不是因为演奏工作出逃，放任“月之泣”游荡并待它自行返回收容单元是完全可行的选择。\n\n因为“月之泣”的手杖敲击前摇较短，如果主管打算镇压月之泣，可以选择用远程武器慢慢消耗以躲避它的攻击，又或是派遣物理抗性较高的员工使用“月光女神”自己的武器吸引仇恨并抵挡伤害。因为“月之泣”的特殊攻击能造成较高的侵蚀伤害且为范围攻击，请主管尽量不要派遣侵蚀抗性较低或勇气，谨慎等级过低的近战员工参与对“月之泣”的镇压。\n\n“月光女神”自己的武器，E.G.O“以爱与恨之名”，中央本部的科技：反物理力场盾和反侵蚀力场盾都能在“月之泣”的镇压过程中提供较大的帮助。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "5-7",
    "counter": "3",
    "maxPeBox": 20.0,
    "mood": {
     "优": "13-20",
     "良": "7-12",
     "差": "0-6"
    },
    "workSpeed": 0.25,
    "workCd": 15.0,
    "fearDamage": "sp",
    "noEscape": null,
    "resist": {
     "red": 1.2,
     "white": 0.0,
     "black": 1.0,
     "pale": 2.0
    },
    "resistWord": {
     "red": "抗性较低",
     "white": "免疫",
     "black": "抗性一般",
     "pale": "抗性极低"
    },
    "traits": {
     "instinct": [
      "低",
      "低",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "低",
      "低",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "低",
      "低",
      "低",
      "低",
      "低"
     ]
    },
    "traitStats": {
     "instinct": [
      "20%",
      "30%",
      "40%",
      "50%",
      "55%"
     ],
     "insight": [
      "40%",
      "45%",
      "50%",
      "55%",
      "55%"
     ],
     "attachment": [
      "30%",
      "30%",
      "50%",
      "50%",
      "55%"
     ],
     "repression": [
      "30%",
      "30%",
      "30%",
      "30%",
      "30%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "3",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 159,
   "id": "D-01-106",
   "name": "深黯“军团”",
   "danger": "ZAYIN",
   "prefix": "D",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "文保协",
   "weaponText": "差(A) 【极远(35)】\nDPS：11.0(12.65)  抬手太慢了，使用体验差",
   "weaponGrades": [
    "差",
    "差"
   ],
   "weaponGrade": "差",
   "weaponTypes": [
    "A"
   ],
   "weaponType": "A",
   "rangeLabel": "极远",
   "rangeValue": 35,
   "weaponTail": "",
   "weaponDps": 11.0,
   "weaponDpsMax": 12.65,
   "weaponNote": "DPS：11.0(12.65)  抬手太慢了，使用体验差",
   "armorText": "良(A)\n0.5 0.3 0.4 1.0 白紫甲",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "A"
   ],
   "armorType": "A",
   "armorResist": [
    0.5,
    0.3,
    0.4,
    1.0
   ],
   "armorNote": "0.5 0.3 0.4 1.0 白紫甲",
   "suppressText": "可镇压\n容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压",
   "search": "d-01-106 深黯“军团” zayin 低\n文保协 差(a) 【极远(35)】\ndps：11.0(12.65)  抬手太慢了，使用体验差 良(a)\n0.5 0.3 0.4 1.0 白紫甲 可镇压\n容易镇压 白 white 3 zayin 容易 可镇压\n容易镇压",
   "wiki": {
    "id": "D-01-106",
    "title": "D-01-106 深黯「军团」",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/D-01-106_%E6%B7%B1%E9%BB%AF%E3%80%8C%E5%86%9B%E5%9B%A2%E3%80%8D",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "“深黯「军团」”的单个个体可以说是ALEPH级异想体中战斗力最低的，既没有高额的伤害，也没有高额的抗性和血量，仅仅需要3-4个拿着WAW级武器且护甲侵蚀抗性较高的员工就可以毫无压力的将其快速镇压。但“深黯「军团」”一次在四个随机部门里出现个体，且如果主管没能及时镇压，它的自爆可能会造成本来不在连锁反应中的低计数异想体触发特殊能力。因此在员工集合准备进行针对性镇压时，出逃的“深黯「军团」”会给主管造成较大的麻烦，此时雇佣小红帽雇佣兵和呼叫兔子来处理都是个不错的选择。\n\n“深黯「军团」”的攻击全都是较难躲避的全房间aoe，在火力不足时躲避“深黯「军团」”的攻击会浪费宝贵的输出时间，因此对它的镇压考验的仍然是主管的员工装备总体质量。在主管所拥有的火力和员工质量不足以同时镇压“深黯「军团」”的四个“个体”时，可以先选择暂停来查看“深黯「军团」”的位置，优先镇压存在「一无所有」等低计数高危异想体部门的“个体”，其余的的“个体”可以在主管撤离员工后选择性无视。\n\n无论“深黯「军团」”的个体是被镇压还是自爆，只要四个“个体”全部死亡，“深黯「军团」”就算作被镇压。因而“深黯「军团」”个体所在部门没有任何高危异想体时，主管可以选择完全不管，让它自然自爆。但仍请主管注意文职伤亡可能引起的连锁反应。\n\n尽管深黯军团的危险等级写着ZAYIN，但镇压它依旧会被算作镇压ALEPH级异想体计入惩戒部的任务之中。（只算镇压一个，自爆也算镇压）",
    "toolText": null,
    "ok": true,
    "level": "ZAYIN",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "7-9",
    "counter": "3",
    "maxPeBox": 30.0,
    "mood": {
     "优": "23-30",
     "良": "13-22",
     "差": "0-12"
    },
    "workSpeed": 0.3,
    "workCd": 15.0,
    "fearDamage": "sp",
    "noEscape": null,
    "resist": {
     "red": 1.2,
     "white": 0.6,
     "black": 1.0,
     "pale": 0.8
    },
    "resistWord": {
     "red": "抗性较低",
     "white": "抗性较高",
     "black": "抗性一般",
     "pale": "抗性较高"
    },
    "traits": {
     "instinct": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "低",
      "低",
      "低",
      "低",
      "低"
     ]
    },
    "traitStats": {
     "instinct": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "insight": [
      "40%",
      "40%",
      "40%",
      "50%",
      "50%"
     ],
     "attachment": [
      "50%",
      "50%",
      "50%",
      "55%",
      "55%"
     ],
     "repression": [
      "30%",
      "30%",
      "30%",
      "30%",
      "30%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "3",
   "isTool": false,
   "type": "ZAYIN"
  },
  {
   "row": 161,
   "id": "D-02-107",
   "name": "波迪",
   "danger": "TETH",
   "prefix": "D",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "好管，本能就行",
   "weaponText": "差(T) 【极近(2)】\nDPS：5.0  极近前期超不好用",
   "weaponGrades": [
    "差"
   ],
   "weaponGrade": "差",
   "weaponTypes": [
    "T"
   ],
   "weaponType": "T",
   "rangeLabel": "极近",
   "rangeValue": 2,
   "weaponTail": "",
   "weaponDps": 5.0,
   "weaponDpsMax": null,
   "weaponNote": "DPS：5.0  极近前期超不好用",
   "armorText": "差(T)\n0.8 1.5 0.8 2.0 双抗甲弱白伤",
   "armorGrades": [
    "差"
   ],
   "armorGrade": "差",
   "armorTypes": [
    "T"
   ],
   "armorType": "T",
   "armorResist": [
    0.8,
    1.5,
    0.8,
    2.0
   ],
   "armorNote": "0.8 1.5 0.8 2.0 双抗甲弱白伤",
   "suppressText": "可镇压\n容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压",
   "search": "d-02-107 波迪 teth 中\n好管，本能就行 差(t) 【极近(2)】\ndps：5.0  极近前期超不好用 差(t)\n0.8 1.5 0.8 2.0 双抗甲弱白伤 可镇压\n容易镇压 红 red 2 teth 容易 可镇压\n容易镇压",
   "wiki": {
    "id": "D-02-107",
    "title": "D-02-107 波迪",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/D-02-107_%E6%B3%A2%E8%BF%AA",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "波迪对于毫无装备和走位镇压基础的主管来说，是仍然存在一定威胁的。因为波迪仇恨固定且移动速度较快，如果波迪因为员工出逃且主管员工质量不足，主管可以选择让拥有波迪仇恨的员工在前面跑，其余员工追着波迪揍。由于波迪攻击的前摇较长，就算员工的移速较低，波迪也是很难击中员工的。\n\n如果波迪锁定的目标是文职，主管可以选择让它直接把文职拍死然后让它自己回去。\n\n另：波迪有时候会因为索敌机制的bug在原地做位移0的卡其脱离太，这时候别想太多直接上去抡它就完事了。",
    "toolText": null,
    "ok": true,
    "level": "TETH",
    "tool": null,
    "dmgType": "红",
    "dmgTypeRaw": "red",
    "dmgStat": "2-3",
    "counter": "2",
    "maxPeBox": 12.0,
    "mood": {
     "优": "10-12",
     "良": "7-9",
     "差": "0-6"
    },
    "workSpeed": 0.3,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 1.2,
     "white": 0.8,
     "black": 1.0,
     "pale": 2.0
    },
    "resistWord": {
     "red": "抗性较低",
     "white": "抗性较高",
     "black": "抗性一般",
     "pale": "抗性极低"
    },
    "traits": {
     "instinct": [
      "高",
      "高",
      "高",
      "高",
      "高"
     ],
     "insight": [
      "一般",
      "一般",
      "低",
      "低",
      "低"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "一般",
      "一般",
      "低",
      "低",
      "低"
     ]
    },
    "traitStats": {
     "instinct": [
      "60%",
      "60%",
      "60%",
      "60%",
      "60%"
     ],
     "insight": [
      "40%",
      "40%",
      "30%",
      "30%",
      "30%"
     ],
     "attachment": [
      "40%",
      "40%",
      "40%",
      "40%",
      "40%"
     ],
     "repression": [
      "40%",
      "40%",
      "30%",
      "30%",
      "30%"
     ]
    },
    "isTool": false
   },
   "dmgType": "红",
   "counter": "2",
   "isTool": false,
   "type": "TETH"
  },
  {
   "row": 163,
   "id": "D-04-108",
   "name": "寄生树",
   "danger": "WAW",
   "prefix": "D",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "偷人型终极体，不工作就偷人",
   "weaponText": "优(W) 【极远(25)】\nDPS：7.5  dps优，远程",
   "weaponGrades": [
    "优",
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "极远",
   "rangeValue": 25,
   "weaponTail": "",
   "weaponDps": 7.5,
   "weaponDpsMax": null,
   "weaponNote": "DPS：7.5  dps优，远程",
   "armorText": "极优(W)\n0.7 0.5 1.3 1.5 白抗甲\n特殊能力群体回精神",
   "armorGrades": [
    "极优"
   ],
   "armorGrade": "极优",
   "armorTypes": [
    "W"
   ],
   "armorType": "W",
   "armorResist": [
    0.7,
    0.5,
    1.3,
    1.5
   ],
   "armorNote": "0.7 0.5 1.3 1.5 白抗甲\n特殊能力群体回精神",
   "suppressText": "因为树苗的攻击是间隔较短的房间伤害，难以规避。如果主管的装备不足，建议将员工集合至一个电梯间之类的小房间，分批次少量清理树苗。单个树苗的镇压难度并不大，主管集合员工后可以很轻易的清除那些处于员工集合处的树苗。\n\n但寄生树触发特殊能力一般代表着员工损失。相比于清理树苗，主管更应该担心的是树苗导致的大规模文职死亡和个别员工损失会不会影响接下来的工作流程。",
   "canSuppress": true,
   "suppressGrade": "可镇压",
   "suppressNote": "",
   "search": "d-04-108 寄生树 waw 低\n偷人型终极体，不工作就偷人 优(w) 【极远(25)】\ndps：7.5  dps优，远程 极优(w)\n0.7 0.5 1.3 1.5 白抗甲\n特殊能力群体回精神  白 white 1 waw 未填",
   "wiki": {
    "id": "D-04-108",
    "title": "D-04-108 寄生树",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/D-04-108_%E5%AF%84%E7%94%9F%E6%A0%91",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": "因为树苗的攻击是间隔较短的房间伤害，难以规避。如果主管的装备不足，建议将员工集合至一个电梯间之类的小房间，分批次少量清理树苗。单个树苗的镇压难度并不大，主管集合员工后可以很轻易的清除那些处于员工集合处的树苗。\n\n但寄生树触发特殊能力一般代表着员工损失。相比于清理树苗，主管更应该担心的是树苗导致的大规模文职死亡和个别员工损失会不会影响接下来的工作流程。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "5-6",
    "counter": "1",
    "maxPeBox": 24.0,
    "mood": {
     "优": "15-24",
     "良": "8-14",
     "差": "0-7"
    },
    "workSpeed": 0.33,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "低",
      "低",
      "低",
      "低",
      "低"
     ]
    },
    "traitStats": {
     "instinct": [
      "45%",
      "45%",
      "45%",
      "45%",
      "45%"
     ],
     "insight": [
      "40%",
      "40%",
      "40%",
      "45%",
      "45%"
     ],
     "attachment": [
      "50%",
      "50%",
      "50%",
      "50%",
      "55%"
     ],
     "repression": [
      "20%",
      "20%",
      "20%",
      "20%",
      "20%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "1",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 165,
   "id": "D-03-109",
   "name": "溶解之爱",
   "danger": "ALEPH",
   "prefix": "D",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "感染型",
   "weaponText": "差(A) 【远(15)】\nDPS：9.51+2\n可以降移速，但伤害一般，抬手也慢，使用体验差",
   "weaponGrades": [
    "差",
    "差"
   ],
   "weaponGrade": "差",
   "weaponTypes": [
    "A"
   ],
   "weaponType": "A",
   "rangeLabel": "远",
   "rangeValue": 15,
   "weaponTail": "",
   "weaponDps": 9.51,
   "weaponDpsMax": null,
   "weaponNote": "DPS：9.51+2\n可以降移速，但伤害一般，抬手也慢，使用体验差",
   "armorText": "良(A)\n0.3 0.6 0.3 1.0 双抗甲弱白伤",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "A"
   ],
   "armorType": "A",
   "armorResist": [
    0.3,
    0.6,
    0.3,
    1.0
   ],
   "armorNote": "0.3 0.6 0.3 1.0 双抗甲弱白伤",
   "suppressText": "可镇压\n容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压",
   "search": "d-03-109 溶解之爱 aleph 低\n感染型 差(a) 【远(15)】\ndps：9.51+2\n可以降移速，但伤害一般，抬手也慢，使用体验差 良(a)\n0.3 0.6 0.3 1.0 双抗甲弱白伤 可镇压\n容易镇压 黑 black 3 aleph 容易 可镇压\n容易镇压",
   "wiki": {
    "id": "D-03-109",
    "title": "D-03-109 溶解之爱",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/D-03-109_%E6%BA%B6%E8%A7%A3%E4%B9%8B%E7%88%B1",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "“溶解之爱”的镇压难点一般在于它因为感染出逃时。此时的“溶解之爱”周围一般跟着一大坨 D-03-109-2，前去镇压的员工要面对的不仅是史莱姆的海洋，不断前去送血包的文职，甚至还有可能被感染了还试图混进员工镇压队伍的文职。如果镇压的火力不足，“溶解之爱”又会不断吸取变异的 D-03-109-2 来为自己回复生命值。变异的 D-03-109-2 又会紧跟着“溶解之爱”，难以单独处理。此时贸然派遣员工前去镇压，员工很容易会因承受不住集火而死亡。\n\n在前中期，最适合处理上述情况的武器是魔弹。它的无差别贯穿伤害可以在处理掉 D-03-109-2 的同时处理掉周围的文职，并能有效的消耗“溶解之爱”的生命值。雇佣魔弹射手也可以快速清理掉设施内所有存活的 D-03-109-2。\n\n处理完 D-03-109-2，剩下的 D-03-109-1 和“溶解之爱”的本体就不足为惧了。“溶解之爱”本体抗性在 ALEPH 级异想体中并不算高，仇恨难以转移，也没有穿透或大范围的贯穿伤害。派遣侵蚀抗性较高的员工配合反侵蚀力场盾吸引它的仇恨，其余员工前去背刺输出即可。但因为 D-03-109-1 的死亡会导致“溶解之爱”的狂暴，优先击杀“溶解之爱”会是更明智的选择。\n\n如果装备实在欠佳，主管可以考虑清理文职后用远程武器慢慢消耗“溶解之爱”的生命值，这样员工需要承受的攻击就只剩下黏液喷吐，但很容易导致响应文职死亡的异想体出逃。\n\n“溶解之爱”无法利用尸体，而兔子会无差别伤害“溶解之爱”和文职。再者，兔子不怕感染，人数多，部署位置分散且火力足够，可以有效防止被 D-03-109-2 集火的情况出现。因此兔子队可以较为轻松的处理掉“溶解之爱”。\n\n如果主管打算指派员工去镇压“溶解之爱”，那么月光武器提供的群体反侵蚀力场盾，以爱与恨之名武器的回复效果可以在溶解之爱的镇压中起到较大的辅助作用，而新星之声，笑靥都可以同时承担起清理 D-03-109-2 和吸引溶解之爱本体仇恨的任务。",
    "toolText": null,
    "ok": true,
    "level": "ALEPH",
    "tool": null,
    "dmgType": "黑",
    "dmgTypeRaw": "black",
    "dmgStat": "4-10",
    "counter": "3",
    "maxPeBox": 32.0,
    "mood": {
     "优": "25-32",
     "良": "15-24",
     "差": "0-14"
    },
    "workSpeed": 0.33,
    "workCd": 15.0,
    "fearDamage": "n",
    "noEscape": null,
    "resist": {
     "red": -1.0,
     "white": 1.0,
     "black": 1.5,
     "pale": 0.8
    },
    "resistWord": {
     "red": "吸收",
     "white": "抗性一般",
     "black": "抗性较低",
     "pale": "抗性较高"
    },
    "traits": {
     "instinct": [
      "低",
      "低",
      "一般",
      "一般",
      "一般"
     ],
     "insight": [
      "一般",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "低",
      "低",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ]
    },
    "traitStats": {
     "instinct": [
      "20%",
      "20%",
      "30%",
      "40%",
      "40%"
     ],
     "insight": [
      "40%",
      "40%",
      "40%",
      "45%",
      "45%"
     ],
     "attachment": [
      "20%",
      "30%",
      "40%",
      "50%",
      "55%"
     ],
     "repression": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ]
    },
    "isTool": false
   },
   "dmgType": "黑",
   "counter": "3",
   "isTool": false,
   "type": "ALEPH"
  },
  {
   "row": 167,
   "id": "D-01-110",
   "name": "风云法师",
   "danger": "WAW",
   "prefix": "D",
   "mgmtGrades": [
    "低"
   ],
   "mgmtGrade": "低",
   "mgmtNote": "文保协",
   "weaponText": "极差(W) 【一般(4)】\nDPS：4.51  一些设计失败的武器",
   "weaponGrades": [
    "极差"
   ],
   "weaponGrade": "极差",
   "weaponTypes": [
    "W"
   ],
   "weaponType": "W",
   "rangeLabel": "一般",
   "rangeValue": 4,
   "weaponTail": "",
   "weaponDps": 4.51,
   "weaponDpsMax": null,
   "weaponNote": "DPS：4.51  一些设计失败的武器",
   "armorText": "差(W)\n0.5 1.3 0.7 1.5 双抗甲弱白伤",
   "armorGrades": [
    "差"
   ],
   "armorGrade": "差",
   "armorTypes": [
    "W"
   ],
   "armorType": "W",
   "armorResist": [
    0.5,
    1.3,
    0.7,
    1.5
   ],
   "armorNote": "0.5 1.3 0.7 1.5 双抗甲弱白伤",
   "suppressText": "可镇压\n容易镇压",
   "canSuppress": true,
   "suppressGrade": "容易",
   "suppressNote": "容易镇压",
   "search": "d-01-110 风云法师 waw 低\n文保协 极差(w) 【一般(4)】\ndps：4.51  一些设计失败的武器 差(w)\n0.5 1.3 0.7 1.5 双抗甲弱白伤 可镇压\n容易镇压 白 white 3 waw 容易 可镇压\n容易镇压",
   "wiki": {
    "id": "D-01-110",
    "title": "D-01-110 风云法师",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/D-01-110_%E9%A3%8E%E4%BA%91%E6%B3%95%E5%B8%88",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": true,
    "suppressText": "风云法师的普通攻击伤害并不算太高，因而完全可以选择轮流硬吃或者使用远程武器进行消耗。镇压它时唯一需要注意的点就是它冲刺时的高额伤害。但由于风云法师的冲刺前摇实在是过长，加上前摇开始后风云法师就必定会朝着蓄力的方向冲刺而不会转向，这给了主管十分充分的时间来规避它的冲刺。无论是将员工拉离房间还是拉去它的背后都是可行的选择。\n\nE.G.O“拟态”是镇压风云法师的最好选择。",
    "toolText": null,
    "ok": true,
    "level": "WAW",
    "tool": null,
    "dmgType": "白",
    "dmgTypeRaw": "white",
    "dmgStat": "4-6",
    "counter": "3",
    "maxPeBox": 22.0,
    "mood": {
     "优": "15-22",
     "良": "7-14",
     "差": "0-6"
    },
    "workSpeed": 0.3,
    "workCd": 15.0,
    "fearDamage": null,
    "noEscape": null,
    "resist": {
     "red": 1.2,
     "white": 0.8,
     "black": 0.8,
     "pale": 1.5
    },
    "resistWord": {
     "red": "抗性较低",
     "white": "抗性较高",
     "black": "抗性较高",
     "pale": "抗性较低"
    },
    "traits": {
     "instinct": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "insight": [
      "低",
      "低",
      "一般",
      "一般",
      "一般"
     ],
     "attachment": [
      "低",
      "一般",
      "一般",
      "一般",
      "一般"
     ],
     "repression": [
      "一般",
      "低",
      "一般",
      "一般",
      "一般"
     ]
    },
    "traitStats": {
     "instinct": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "insight": [
      "20%",
      "20%",
      "55%",
      "55%",
      "55%"
     ],
     "attachment": [
      "20%",
      "45%",
      "45%",
      "45%",
      "45%"
     ],
     "repression": [
      "40%",
      "20%",
      "40%",
      "40%",
      "40%"
     ]
    },
    "isTool": false
   },
   "dmgType": "白",
   "counter": "3",
   "isTool": false,
   "type": "WAW"
  },
  {
   "row": 169,
   "id": "秃头-真是-太棒啦!",
   "name": "你是个秃子...",
   "danger": "ZAYIN",
   "prefix": "?",
   "mgmtGrades": [
    "中"
   ],
   "mgmtGrade": "中",
   "mgmtNote": "不难管但也不想对它工作……",
   "weaponText": "优(T) 【远(10)】\nDPS：4.5  手枪很好，但它要秃头才能用啊",
   "weaponGrades": [
    "优"
   ],
   "weaponGrade": "优",
   "weaponTypes": [
    "T"
   ],
   "weaponType": "T",
   "rangeLabel": "远",
   "rangeValue": 10,
   "weaponTail": "",
   "weaponDps": 4.5,
   "weaponDpsMax": null,
   "weaponNote": "DPS：4.5  手枪很好，但它要秃头才能用啊",
   "armorText": "良(Z)\n1.0 1.0 0.8 2.0 估计也没人用",
   "armorGrades": [
    "良"
   ],
   "armorGrade": "良",
   "armorTypes": [
    "Z"
   ],
   "armorType": "Z",
   "armorResist": [
    1.0,
    1.0,
    0.8,
    2.0
   ],
   "armorNote": "1.0 1.0 0.8 2.0 估计也没人用",
   "suppressText": "",
   "canSuppress": false,
   "suppressGrade": "不会突破收容",
   "suppressNote": "",
   "search": "秃头-真是-太棒啦! 你是个秃子... zayin 中\n不难管但也不想对它工作…… 优(t) 【远(10)】\ndps：4.5  手枪很好，但它要秃头才能用啊 良(z)\n1.0 1.0 0.8 2.0 估计也没人用  黑 black x zayin 未填",
   "wiki": {
    "id": "秃头-真是-太棒啦!",
    "title": "你是个秃子...",
    "url": "https://lobotomycorp.fandom.com/zh/wiki/%E4%BD%A0%E6%98%AF%E4%B8%AA%E7%A7%83%E5%AD%90...",
    "tpl": "Abn_Infobox",
    "hasEscapeSec": false,
    "suppressText": null,
    "toolText": null,
    "ok": true,
    "level": "ZAYIN",
    "tool": null,
    "dmgType": "黑",
    "dmgTypeRaw": "black",
    "dmgStat": "1-2",
    "counter": "X",
    "maxPeBox": 6.0,
    "mood": {
     "优": "4-6",
     "良": "2-3",
     "差": "0-1"
    },
    "workSpeed": 0.15,
    "workCd": 10.0,
    "fearDamage": null,
    "noEscape": true,
    "resist": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "resistWord": {
     "red": null,
     "white": null,
     "black": null,
     "pale": null
    },
    "traits": {
     "instinct": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "insight": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "attachment": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ],
     "repression": [
      "极低",
      "极低",
      "极低",
      "极低",
      "极低"
     ]
    },
    "traitStats": {
     "instinct": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "insight": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "attachment": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ],
     "repression": [
      "0%",
      "0%",
      "0%",
      "0%",
      "0%"
     ]
    },
    "isTool": false
   },
   "dmgType": "黑",
   "counter": "X",
   "isTool": false,
   "type": "ZAYIN"
  }
 ],
 "calc": {
  "healthOut": 0.5,
  "pebox": {
   "ZAYIN": 7,
   "TETH": 8,
   "HE": 12,
   "WAW": 16,
   "ALEPH": 23
  },
  "techOn": 1.5,
  "techOff": 1,
  "targetDefault": 20,
  "targets": [
   10,
   20,
   30,
   40,
   50,
   60,
   70,
   80,
   90,
   100
  ],
  "grid": {
   "Ⅰ": {
    "ZAYIN": 0.6,
    "TETH": 0.6,
    "HE": 0.72,
    "WAW": 0.84,
    "ALEPH": 0.6
   },
   "Ⅱ": {
    "ZAYIN": 0.44,
    "TETH": 0.55,
    "HE": 0.55,
    "WAW": 0.66,
    "ALEPH": 0.77
   },
   "Ⅲ": {
    "ZAYIN": 0.3,
    "TETH": 0.4,
    "HE": 0.5,
    "WAW": 0.5,
    "ALEPH": 0.6
   },
   "Ⅳ": {
    "ZAYIN": 0.18,
    "TETH": 0.27,
    "HE": 0.36,
    "WAW": 0.45,
    "ALEPH": 0.45
   },
   "Ⅴ": {
    "ZAYIN": 0.08,
    "TETH": 0.16,
    "HE": 0.24,
    "WAW": 0.32,
    "ALEPH": 0.4
   }
  },
  "notice": "使用须知：本表用来粗略估算员工对异想体进行工作的属性加成，输入区的红底单元格均可操作(科技为打勾，品质和异想体等级为下拉选项)，完成输入后，会自动计算单次工作期望的属性加成和提升20点属性需要的工作次数。\n\n声明：本表用来粗略估算员工对异想体进行工作的属性加成\n很多数值采用的是期望，实际情况可能会有较大差异，但进行一个简单的加班参考还是没问题的\n具体计算公式可以转去wiki职员界面查看：\nhttps://lobotomycorp.fandom.com/zh/wiki/%E8%81%8C%E5%91%98",
  "qualityIndex": 4,
  "levelIndex": 5,
  "labels": {
   "healthOut": "期望健康输出值",
   "tech": "培训部系数",
   "coef": "工作系数",
   "pebox": "期望PE-BOX数"
  }
 },
 "constants": {
  "danger": [
   "ZAYIN",
   "TETH",
   "HE",
   "WAW",
   "ALEPH"
  ],
  "mgmt": [
   "论外",
   "高",
   "中",
   "低",
   "极低"
  ],
  "grade": [
   "极优",
   "优",
   "良",
   "差",
   "极差"
  ],
  "ranges": [
   "极近",
   "近",
   "短",
   "一般",
   "远",
   "极远"
  ],
  "dmgType": [
   "红",
   "白",
   "黑",
   "淡",
   "未知"
  ],
  "suppressGrade": [
   "容易",
   "较难",
   "可镇压",
   "不会突破收容"
  ],
  "type": [
   "ZAYIN",
   "TETH",
   "HE",
   "WAW",
   "ALEPH",
   "工具型"
  ]
 }
};
