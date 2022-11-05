/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    ", but they need 20m": ", 但他们需要 20m",
    ", people will pay for 10m": ", 人们会为 10m 买单",
    "% in the bank from income,": "银行收入的百分比，",
    "% of the profits are transfered to the bank account": "% 的利润转入银行账户",
    "1 new houses have been built": "1新房已建成",
    "About": "关于",
    "add your suggestion": "添加您的建议",
    "address.": "地址。",
    "Alertify": "提醒",
    "All inputs for numbers(except the percentage one in bank) can get abbreviations (1.541Qa, 95.47t, 54.31Q). It is case insensitive(1t and 1T is the same number)": "数字的所有输入（除了银行中的百分比一）都可以得到缩写（1.541Qa，95.47t，54.31Q）。不区分大小写（1t 和 1T 是同一个数字）",
    "Apply style": "应用样式",
    "Auto buy pipes every day toggle": "每天自动购买管道切换",
    "Balance\n": "余额\n",
    "Balance: houses are increased by the coresponding percent every day/7(ie the increase is weekly)": "平衡：房屋每天增加相应的百分比/7（即每周增加）",
    "Balance: max interest rate is 25% now": "余额：现在最高利率为 25%",
    "Bank": "银行",
    "Bank now gives 1/31 of the interest rate per day": "银行现在每天提供 1/31 的利率",
    "Better number shortening system": "更好的数字缩短系统",
    "Big heat pump:": "大热水泵：",
    "Big heat pump:      $": "大热水泵：$",
    "Big heat water pump": "大热水泵",
    "Big heating plant:": "大型供暖厂：",
    "Big heating water plant": "大型供暖水厂",
    "Big pump": "大泵",
    "Big pump:": "大泵：",
    "Big pump:      $": "大泵：$",
    "Big storage": "大存储",
    "Big storage:": "大存储：",
    "Big storage:      $": "大存储：$",
    "Big treatment plant": "大型处理厂",
    "Big treatment plant:": "大型处理厂：",
    "Big treatment plant:      $": "大型处理厂：$",
    "Bootstrap": "引导程序",
    "Bugfixes": "Bug修复",
    "Buttons for buying and placing max pipes": "用于购买和放置最大管道的按钮",
    "Buy": "买",
    "Buy & place": "购买和放置",
    "Buy max heat pipes every day if possible\n\t\t": "如果可能，每天购买最大热水管\n\t\t",
    "Buy max pipes every day if possible\n\t\t": "如果可能，每天购买最大管道\n\t\t",
    "Cerulean": "蔚蓝",
    "Change log": "更新日志",
    "Changed notification system": "更改通知系统",
    "Changed postion of the weather bar(what do you think?)": "改变了天气栏的位置（你怎么看？）",
    "Changed prices for buying buildings": "更改购买建筑物的价格",
    "Changed save system": "更改保存系统",
    "City": "城市",
    "Cloudy without rain": "多云无雨",
    "Code optimisation": "代码优化",
    "Cold water": "冷水",
    "Cosmo": "科斯莫",
    "Cost for buying one pipe: $": "购买一根管子的成本：$",
    "Cost for placing one pipe: $": "放置一根管子的成本：$",
    "Current balance": "当前余额",
    "Current loan/max loan": "当前贷款/最大贷款",
    "Current tax for loan": "当前的贷款税",
    "Custon inputs for buying/selling": "用于购买/出售的自定义输入",
    "Cyborg": "电子人",
    "Dark": "黑暗的",
    "Darkly": "黑暗",
    "Day:": "天：",
    "Decrease": "减少",
    "Decrease cost of buying heat pipes by 5% - $": "将购买热水管的成本降低 5% - $",
    "Decrease cost of buying pipes by 2.5% - $": "将购买管道的成本降低 2.5% - $",
    "Decrease cost of pacing heat pipes by 5% - $": "将起搏热水管的成本降低 5% - $",
    "Decrease cost of placing pipes by 2.5% - $": "将放置管道的成本降低 2.5% - $",
    "Decrease operating costs": "降低运营成本",
    "Decrease operating costs of heat pumps by 10% - $": "将热水泵的运营成本降低 10% - $",
    "Decrease operating costs of pumps by 10% - $": "将泵的运行成本降低 10% - $",
    "Decrease operating costs of storage tanks by 10% - $": "将储罐的运营成本降低 10% - $",
    "Decrease operating costs of treatment plants by 10% - $": "将处理厂的运营成本降低 10% - $",
    "Decreased rate of building new houses": "新房建设率下降",
    "Everything has a operating cost(exept pipes). Even if you don't use it or you use it very little, the operating cost won't change.": "一切都有运营成本（管道除外）。即使不使用或使用很少，运营成本也不会改变。",
    "Expenditures daily": "每日支出",
    "Extra water": "额外的水",
    "fabien-d": "fabien-d",
    "FAQ": "常问问题",
    "Finance": "金融",
    "Fines": "罚款",
    "for": "为了",
    "From interest(in bank account)": "来自利息（银行账户）",
    "Game balance": "游戏平衡",
    "Get": "得到",
    "Get loan": "获得贷款",
    "Hard Reset(press 3 times)": "硬复位（按 3 次）",
    "Heat pipe buy/place cost:": "热水管购买/放置成本：",
    "Heat pipes": "热水管",
    "Heat pipes are special pipes. They are insulated and more thicker so they don't melt and the water doesn't cool down so fast. They are also much more expensive. They treansport the hot water to homes from the CPP.": "热水管是特殊的管道。它们是绝缘的并且更厚，因此它们不会融化，水也不会冷却得那么快。它们也贵得多。他们将热水从 CPP 运输到家庭。",
    "Heat pipes owned": "拥有的热水管",
    "Heat pipes owned:": "拥有的热水管：",
    "Heat pipes placed": "放置的热水管",
    "Heat pipes placed:": "热水管放置：",
    "Heat pumps": "热水泵",
    "Heat pumps work like regular pumps. They pump water from the river and pump it to the heating facilyties.": "热水泵像普通泵一样工作。他们从河里抽水并将其泵送到供暖设施。",
    "Heat water price": "热水价格",
    "Heating plant": "供热厂",
    "Heating plants": "供暖设备",
    "Heating plants use fuel(coal, gas, sun) to heat water and pump the heated water to the houses.": "供热厂使用燃料（煤、天然气、太阳）加热水并将加热的水泵入房屋。",
    "here": "这里",
    "Hot water": "热水",
    "hot water pipes": "热水管",
    "Hot water pumped": "抽热水",
    "Hot water used": "使用的热水",
    "Houses": "房屋",
    "houses at a time.": "房子一次。",
    "Houses supplied with heated water": "提供热水的房屋",
    "How are operating costs defined?": "运营成本是如何定义的？",
    "How does the bank account work?": "银行账户如何运作？",
    "How does the bank loan system work?": "银行贷款系统如何运作？",
    "I want to get x money via loan but I can't. Why?": "我想通过贷款获得x钱，但我做不到。为什么？",
    "I've found a bug. What should I do?": "我发现了一个错误。我应该怎么办？",
    "I've got a suggestion/feature for the game. Where can I share my idea?": "我有游戏的建议/功能。我在哪里可以分享我的想法？",
    "In the bank you can manage your money. You can invest in bank account and get a fixed interest every day or if you need money you can take out a loan.": "在银行你可以管理你的钱。您可以投资银行账户并每天获得固定利息，或者如果您需要钱，您可以贷款。",
    "Income daily": "每日收入",
    "Increase": "增加",
    "Increase capacity of water storage units by 10% - $": "将储水单元的容量增加 10% - $",
    "Increase interest rate by 0.25% - $": "加息 0.25% - $",
    "Increase max loan": "增加最高贷款",
    "Increase max loan by 100% - $": "将最高贷款增加 100% - $",
    "Increase price of cold water by 5% - $": "将冷水价格提高 5% - $",
    "Increase price of hot water by 5% - $": "将热水价格提高 5% - $",
    "Increase production of heat pumps by 10% - $": "将热水泵的产量提高 10% - $",
    "Increase production of heating plants by 10% - $": "将供暖设备的产量提高 10% - $",
    "Increase rate of building of new houses by 0.25% - $": "新房开工率提高0.25% - $",
    "Increase treatment plant production by 10% - $": "将处理厂产量提高 10% - $",
    "Increase water needed per house by 2.5% - $": "将每间房屋所需的水量增加 2.5% - $",
    "Increase water production from pumps by 10% - $": "将泵的产水量提高 10% - $",
    "Increased effect of some upgrades": "一些升级的效果增加",
    "Increased operating costs": "运营成本增加",
    "Interest rate and bank balance": "利率和银行余额",
    "Invest": "投资",
    "Invest everything in the bank button": "将一切投资于银行按钮",
    "Invest max": "最大投资",
    "jquery": "jQuery",
    "Loan interest": "贷款利息",
    "Loan system with up to $100k loan": "贷款系统高达 10 万美元",
    "Loans": "贷款",
    "Lowered effects and/or price for some upgrades": "降低某些升级的效果和/或价格",
    "Lowered the size of the javascript files": "降低了 javascript 文件的大小",
    "Maximum loan: $": "最高贷款：$",
    "Medium heat pump:": "中型热水泵：",
    "Medium heat pump:   $": "中型热水泵：$",
    "Medium heat water pump": "中热水泵",
    "Medium heating plant:": "中型供热设备：",
    "Medium heating water plant": "中型供暖水厂厂",
    "Medium pump": "中型泵",
    "Medium pump:": "中型泵：",
    "Medium pump:   $": "中型泵：$",
    "Medium storage": "中等存储",
    "Medium storage:": "中等存储：",
    "Medium storage:   $": "中等存储：$",
    "Medium treatment plant": "培养基处理厂",
    "Medium treatment plant:": "中处理厂：",
    "Medium treatment plant:   $": "中等处理厂：$",
    "Money": "钱",
    "Month:": "月：",
    "Monthly interest": "每月利息",
    "New upgrades\n": "新升级\n",
    "not treated water.": "未经处理的水。",
    "Notifications": "通知",
    "OK": "好的",
    "on reddit.": "在reddit上。",
    "On the next day on 00:00 the bank will take 1/100 of the loan from your money. If you don't have enough money, your loan will increase by the percentage of the loan interest.": "第二天 00:00，银行将从您的资金中提取 1/100 的贷款。如果您没有足够的钱，您的贷款将按贷款利息的百分比增加。",
    "only.": "只要。",
    "Operating cost": "运营成本",
    "Operating costs heated water": "运营成本热水",
    "Operating costs total": "总运营成本",
    "Operating costs water": "运营成本水",
    "Optimized game loading speed": "优化游戏加载速度",
    "Options": "选项",
    "or you can open a new issue in github on": "或者你可以在 github 上打开一个新问题",
    "Overview": "概述",
    "Owned": "拥有",
    "pipe(s) for $": "$ 管道",
    "Pipes": "管道",
    "Pipes are the most important thing for your company. Without them you can't supply people with water. They are the main source of money. Each pipe supplies": "管道对您的公司来说是最重要的。没有它们，您将无法为人们提供水。他们是主要的资金来源。每管供应",
    "Pipes you have:": "您拥有的管道：",
    "Place": "地方",
    "Placed pipes:": "放置管道：",
    "Price": "价格",
    "Profit": "利润",
    "Pump": "泵",
    "Pumps": "泵",
    "Put money from interest in the bank": "把利息存入银行",
    "Redesign of city tab": "重新设计城市选项卡",
    "Redesign of upgrades tab": "重新设计升级选项卡",
    "Redesigned options tab": "重新设计的选项选项卡",
    "Redesigned upgrades tab": "重新设计的升级选项卡",
    "Redesigned water menus": "重新设计的水菜单",
    "Redraw city map": "重绘城市地图",
    "Reset Focus": "重设焦点",
    "Return": "返回",
    "Return loan": "归还贷款",
    "Return max loan": "返还最高贷款",
    "Save setting function": "保存设置功能",
    "Save settings": "保存设置",
    "Sell": "卖",
    "Sell button are now red": "卖出按钮现在是红色的",
    "Selling heated water": "卖热水",
    "Selling water": "卖水",
    "Selling water total": "卖水总量",
    "Semi natural increase in houses over time": "随着时间的推移，房屋的半自然增长",
    "Simply people will pay fo the water you supplied. If you supply 10m": "很简单，人们会为您提供的水付费。如果你提供 10m",
    "Small heat pump:": "小型热水泵：",
    "Small heat pump:    $": "小型热水泵：$",
    "Small heat water pump": "小型热水泵",
    "Small heating plant:": "小型供暖设备：",
    "Small heating water plant": "小型供暖水厂",
    "Small pump": "小泵",
    "Small pump:": "小泵：",
    "Small pump:    $": "小泵：$",
    "Small storage": "小存储",
    "Small storage:": "小存储：",
    "Small storage:    $": "小存储：$",
    "Small treatment plant": "小型处理厂",
    "Small treatment plant:": "小型处理厂：",
    "Small treatment plant:    $": "小型处理厂：$",
    "Solar": "太阳的",
    "Some little changes here and there": "这里和那里的一些小变化",
    "Standart": "标准",
    "Storage type": "存储类型",
    "Stored water/max": "储水量/最大值",
    "Sunny": "晴天",
    "Suplied houses(map):": "提供房屋（地图）：",
    "Supplied houses": "供应房屋",
    "Sync option for pipes": "管道的同步选项",
    "Synchronise\n\t\t": "同步\n\t\t",
    "Thanks to the treatment plant you don't need to pay fines for dirty water being disposed. Be aware that for every 1000 m": "多亏了处理厂，您无需为处理脏水支付罚款。请注意，每 1000 m",
    "The game is autosaved every 30 seconds.": "游戏每 30 秒自动保存一次。",
    "The treatment plant cleans the water from sawage. If you let not treated water to the river, you will pay a fine of $1000 for every 10000m": "处理厂从锯材中清除水。如果你让未经处理的水流入河流，你将每 10000m 支付 1000 美元的罚款",
    "this": "这个",
    "This game is made using the folowing libraries:": "该游戏是使用以下库制作的：",
    "this reddit post": "这个reddit帖子",
    "Toggable percentage of income in the bank": "银行收入的可转换百分比",
    "Total": "总计",
    "Total heated water": "总热水",
    "Total max stored water": "总最大储存水量",
    "Total operating cost": "总运营成本",
    "Total price": "总价",
    "Total pumped water": "总抽水",
    "Total treated water": "总处理水",
    "Treatment plant": "处理厂",
    "Treatment plants": "处理厂",
    "Turn off autosave": "关闭自动保存",
    "Turn off notifications for number of builded house": "关闭已建房屋数量的通知",
    "Turn off notifications for payed loan tax": "关闭已付贷款税的通知",
    "Turn off notifications for the received bank interest": "关闭收到银行利息的通知",
    "Turn on/off investments": "开启/关闭投资",
    "twbs": "twbs",
    "Typos": "错别字",
    "United": "团结的",
    "Upgrade to increase the interest rate": "升级以提高利率",
    "Upgrades": "升级",
    "Upgrades for treatment plants and pumps": "处理厂和泵的升级",
    "version 0.3.4.1 Beta - 8 June 2017": "0.3.4.1 Beta 版 - 2017 年 6 月 8 日",
    "Very big heat pump:": "巨型热水泵：",
    "Very big heat pump: $": "巨型热水泵：$",
    "Very big heat water pump": "巨型热水泵",
    "Very big heating plant:": "巨型供暖厂：",
    "Very big heating water plant": "巨型供暖水厂",
    "Very big pump": "巨型泵",
    "Very big pump:": "巨型泵：",
    "Very big pump: $": "巨型泵：$",
    "Very big storage": "巨型存储空间",
    "Very big storage:": "巨型存储空间：",
    "Very big storage: $": "巨型存储空间：$",
    "Very big treatment plant": "巨型处理厂",
    "Very big treatment plant:": "巨型处理厂：",
    "Very big treatment plant: $": "巨型处理厂：$",
    "Water": "水",
    "Water Company": "自来水公司",
    "Water heated": "水加热",
    "Water max stored": "最大储存水量",
    "Water needed per house": "每户需要的水",
    "Water price": "水价",
    "Water pumped": "抽水",
    "Water Pumped": "抽水",
    "Water pumps": "水泵",
    "Water storage": "储水",
    "Water storage is used to store water like water towers. Whene there is too much water, it is stored if possible. When there is a shortage of water, the water from the tower is used.": "蓄水是用来储存水的，就像水塔一样。当水过多时，尽可能将其储存起来。当缺水时，使用塔中的水。",
    "Water treated": "水处理",
    "Water Treated": "水处理",
    "Water Used": "用水量",
    "Weather today:": "今天天气：",
    "What will happen if I can't supply enough water?": "如果我不能提供足够的水会怎样？",
    "While you were away, you gained $0.00": "当您离开时，您获得了 0.00 美元",
    "Why do I need treatment plant and what will happen if I don't have?": "为什么我需要处理厂，如果我没有会发生什么？",
    "Withdraw": "提取",
    "Withdraw max": "最大提款",
    "Without pumps you can't supply water to the homes and you won't get money. They are pretty expensive so think before you buy one.": "没有水泵，你就不能给家里供水，你也拿不到钱。它们非常昂贵，因此在购买之前请三思。",
    "Year:": "年：",
    "Yeti": "雪人",
    "You can": "你可以",
    "You can put money in it. Every day at 00:00 you get interest for your money in your cash on hand.": "你可以把钱放进去。每天 00:00，您可以从手头现金中获得利息。",
    "You can try version 0.4. Just click": "你可以试试0.4版。只需点击",
    "You can't have a loan bigger than 100k. It can go higher if you don't have enough money to pay the tax.": "你不能有超过100k的贷款。如果你没有足够的钱来缴纳税款，它可能会更高。",
    "you dispose in river you need to pay $100.": "您在河中处置需要支付 100 美元。",
    "You should report it in": "你应该报告它",
    "Added bank\n": "添加银行\n",
    "Sunny with clouds": "晴天有云",
    "Cloudy with light rain": "多云有小雨",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 0.4
    "per in game hour, so they have enough water. You can supply more houses by buying and placing more pipes. That is good, but after some time your income will not go up. Why? You can't supply enough water. You need to buy another pump. But then you see in finance tab there is fines. What is that thing? Why am I getting fined? You supply people with water, but your treatment plant can't treat all the water. The untreated water is send back in river and it is polluting it. How to fix this? Buy a treatment plant. A note: treatment plants have double the price of a pump and double operating costs compared to a pump.": "每个游戏小时，所以他们有足够的水。 您可以通过购买和放置更多管道来供应更多房屋。 这很好，但一段时间后你的收入不会增加。 为什么？ 你不能提供足够的水。 你需要再买一个泵。 但是然后您会在财务选项卡中看到罚款。 那个东西是什么？ 为什么我会被罚款？ 你为人们提供水，但你的处理厂不能处理所有的水。 未经处理的水被送回河里，污染了它。 如何解决这个问题？ 购买处理厂。 注意：与泵相比，处理厂的价格是泵的两倍，运营成本也是泵的两倍。",
    "    Big treatment plant": "大型处理厂",
    "    Medium treatment plant": "    培养基处理厂",
    "    Very bigtreatment plant": "    巨型处理厂",
    "Bank account interest": "银行账户利息",
    "Bank balance": "银行存款余额",
    "Basic tutorial": "基础教程",
    "Big cold water pump": "大冷水泵",
    "Big cold water pump $": "大冷水泵 $",
    "Big storage unit": "大储物单元",
    "Big storage unit      $": "大存储单元 $",
    "Big treatment plant     $": "大型处理厂 $",
    "Buying hot water pipes $": "购买热水管 $",
    "Buying price $": "购买价格 $",
    "Cold water price": "冷水价格",
    "Cold water supplied": "供应冷水",
    "Cold water usage": "冷水的使用",
    "Cold water used per house": "每家使用的冷水",
    "Cold water utilities": "冷水设施",
    "Daily expenditure": "日常开支",
    "Daily income": "每日收入",
    "Day": "天",
    "Decrease operating cost of cold water pumps by 10%": "冷水泵运行成本降低10%",
    "Decrease operating cost of hot water pumps by 10%": "热水泵运行成本降低10%",
    "Decrease operating cost of storage units by 10%": "将存储单元的运营成本降低 10%",
    "Decrease operating cost of treatment plants by 10%": "将处理厂的运营成本降低 10%",
    "Decrease operating cost of water heating plants by 10%": "将热水厂的运营成本降低 10%",
    "Decrease price for buying hot water pipes by 5%": "将购买热水管的价格降低 5%",
    "Decrease price for placing hot water pipes by 5%": "放置热水管的价格降低5%",
    "Decrease the price for buying pipes by 2.5%": "将购买管道的价格降低 2.5%",
    "Decrease the price for placing pipes by 2.5%": "放置管道的价格降低 2.5%",
    "Everything has an operating cost(except pipes). Even if you don't use it or you use it very little, the operating cost won't change.": "一切都有运营成本（管道除外）。即使不使用或使用很少，运营成本也不会改变。",
    "for $": "$",
    "Frequently Asked Questions": "经常问的问题",
    "Get $": "获得美元",
    "Get max": "获得最大值",
    "gityx": "吉蒂克斯",
    "heating plant": "供热厂",
    "heating plant $": "供暖厂 $",
    "Hot water heating plant": "热水供暖设备",
    "Hot water pipes": "热水管",
    "Hot water price": "热水价格",
    "hot water pump": "热水泵",
    "Hot water pump": "热水泵",
    "hot water pump $": "热水泵 $",
    "Hot water supplied": "供应热水",
    "Hot water usage": "热水使用",
    "Hot water used per house": "每户用热水",
    "Hot water utilities": "热水公用事业",
    "Hour": "小时",
    "How are operating costs calculated?": "运营成本如何计算？",
    "How does the bank balance work?": "银行余额如何运作？",
    "I want to get x money via loan, but I can't. Why?": "我想通过贷款获得x钱，但我做不到。为什么？",
    "If there weren't, that will cause a mess in the code because of an infinite loop and that is easier for me :P": "如果没有，那会因为无限循环而导致代码混乱，这对我来说更容易：P",
    "Increase interest rate by 0.5%(max 25%)": "加息0.5%（最高25%）",
    "Increase maximum loan by 100%": "将最高贷款额提高 100%",
    "Increase maximum storage of storage units by 10%": "存储单元的最大存储量增加 10%",
    "Increase price of cold water by 5%": "冷水涨价5%",
    "Increase price of hot water by 5%": "热水价格上涨5%",
    "Increase production of cold water pumps by 10%": "冷水泵产量增加10%",
    "Increase production of hot water pumps by 10%": "热水泵产量增加10%",
    "Increase production of treatment plants by 10%": "将处理厂的产量提高 10%",
    "Increase production of water heating plants by 10%": "将热水厂的产量提高 10%",
    "Increase the rate of building new houses by 0.1%(max 10%)": "增加新建房屋率0.1%（最高10%）",
    "Increase the use of cold water by 2.5%": "冷水使用量增加 2.5%",
    "Increase the use of hot water by 2.5%": "热水使用量增加 2.5%",
    "Interest": "兴趣",
    "Interest rate": "利率",
    "Invest $": "投资$",
    "Loan": "贷款",
    "Max loan": "最高贷款",
    "Maximum loan $": "最高贷款 $",
    "Medium cold water pump": "中冷水泵",
    "Medium cold water pump $": "中冷水泵 $",
    "Medium storage unit": "中型存储单元",
    "Medium storage unit   $": "中型存储单元 $",
    "Medium treatment plant  $": "中型处理厂 $",
    "Month": "月",
    "On the next day at 00:00 the bank will take 1/100 of the loan from your money. If you don't have enough money, your loan will increase by the percentage of the loan interest.": "第二天 00:00，银行将从您的资金中提取 1/100 的贷款。如果您没有足够的钱，您的贷款将按贷款利息的百分比增加。",
    "per in game hour. With your pump, you pump 100m": "每在游戏时间。用你的泵，你泵100m",
    "Pipes are the most important thing for your company. Without them you can't supply people with water. They are the main source of money. Each pipe supplies 2 houses at a time.": "管道对您的公司来说是最重要的。没有它们，您将无法为人们提供水。他们是主要的资金来源。每根管道一次供应 2 个房屋。",
    "Placed": "放置",
    "Placing hot water pipes $": "放置热水管 $",
    "Placing pipes $": "放置管道 $",
    "Population": "人口",
    "Population covered with cold water pipes": "用冷水管盖的人口",
    "Population covered with hot water pipes": "热水管覆盖的人口",
    "Population growth (monthly)": "人口增长（月度）",
    "Price & usage": "价格和使用情况",
    "Price of cold water $": "冷水价格 $",
    "Price of hot water $": "热水价格 $",
    "Production": "生产",
    "Profit statement": "利润表",
    "Rate of building houses": "建房率",
    "Rename city": "重命名城市",
    "Reset game": "重置游戏",
    "Return $": "返回 $",
    "Return max": "返回最大值",
    "Selling cold water": "卖冷水",
    "Selling hot water": "卖热水",
    "Simply people will pay for the water you supplied. If you supply 10m": "很简单，人们会为您提供的水付费。如果你提供 10m",
    "Small cold water pump": "小型冷水泵",
    "Small cold water pump $": "小型冷水泵 $",
    "Small storage unit": "小型储物单元",
    "Small storage unit    $": "小型储物单元 $",
    "Small treatment plant   $": "小型处理厂 $",
    "Storage unit": "存储单元",
    "Thanks to the treatment plant you don't need to pay fines for dirty water being disposed. Be aware that for every 1000 m3 you dispose in river you need to pay $100.": "多亏了处理厂，您无需为处理脏水支付罚款。请注意，每 1000 立方米排放到河中，您需要支付 100 美元。",
    "The game is autosaved every ingame day.\n": "游戏每天都会自动保存。\n",
    "The treatment plant cleans the water from sewage. If you let not treated water to the river, you will pay a fine of $1000 for every 10000m": "处理厂净化污水中的水。如果你让未经处理的水流入河流，你将每 10000m 支付 1000 美元的罚款",
    "Time": "时间",
    "to reddit.": "到reddit。",
    "Total expenditure": "总共花费",
    "Total income": "总收入",
    "Total production": "总产量",
    "Total water stored": "总储水量",
    "Total water treated": "总水处理",
    "Tutorial": "教程",
    "Very big cold water pump": "巨型冷水泵",
    "Very big cold water pump $": "巨型冷水泵 $",
    "Very big storage unit": "巨型存储单元",
    "Very big storage unit $": "巨型存储单元 $",
    "Very bigtreatment plant $": "巨型处理厂 $",
    "Water Company: Recoded": "自来水公司：重新编码",
    "Water coverage": "水覆盖",
    "Water storage is used to store water like water towers. When there is too much water, it is stored if possible. When there is a shortage of water, the water from the tower is used.": "蓄水是用来储存水的，就像水塔一样。当水过多时，尽可能将其储存起来。当缺水时，使用塔中的水。",
    "Water stored": "储存的水",
    "Water used": "用水量",
    "water(if you haven't bought the upgrade for increasing the required water in upgrades tab > houses). So you need to supply 10*2*2 = 40m": "水（如果您还没有购买升级以在升级选项卡 > 房屋中增加所需的水）。所以你需要供应10*2*2 = 40m",
    "Why do I have one hot water pipe placed from the beginnings?": "为什么我一开始就放一根热水管？",
    "Withdraw $": "提现 $",
    "Year": "年",
    "You can put money in it. Every day at 00:00 you get interest for your money in your cash on hand(or back in the bank depends on the option selected).": "你可以把钱放进去。每天 00:00，您可以从手头的现金中获得利息（或回到银行取决于所选的选项）。",
    "You start with 10 placed pipes for cold water. Each pipe can supply 2 houses. Each house requires 2m": "你从 10 根放置冷水的管道开始。每根管道可供应 2 个房屋。每间房子需要2m",
    "Not enough money": "没有足够的资金",
    "You can not invest negative money": "您不能投资负资金",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "t": "t",
    "m": "m",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t\t": "\t\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t\t\t": "\t\t\t",
    "\t\t": "\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Your bank balance has been increased by ": "您的银行余额增加了 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^Added(.+)$/,
    /^Fixed(.+)$/,
    /^version(.+)$/,
    /^Version(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\$([\d\.]+)M$/,
    /^\$([\d\.]+)K$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) m$/,
    /^([\d\.]+)K m$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^You got (.+) from interest from your bank balance$/, '您从银行余额中获得了 $1 利息'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) new houses have been built$/, '$1 新房子已经建成'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);