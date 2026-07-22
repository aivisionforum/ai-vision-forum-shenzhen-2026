import type { Translations } from "./types";

export const cn: Translations = {
  nav: {
    home: "首页",
    tracks: "议题",
    schedule: "日程",
    speakers: "嘉宾",
    venue: "场地",
    register: "报名",
    language: "语言",
  },

  hero: {
    tagline: "构建人机协同新范式",
    dateDisplay: "2026 年 10 月 14–15 日",
    colocatedWith: "联合举办",
    requestInvitation: "申请邀请",
    learnMore: "了解更多",
    invitationOnly: "仅限受邀者",
    chathamHouseRule: "查塔姆宫规则",
  },

  countdown: {
    days: "天",
    hours: "时",
    minutes: "分",
    seconds: "秒",
  },

  about: {
    title: "关于 AI Vision Forum",
    subtitle: "汇聚远见者，共同塑造智能体软件工程、AI 原生组织与智能体时代的开源",
    guidingQuestionLabel: "核心问题",
    guidingQuestion: "当 AI 智能体编写大部分软件时，人如何保有意图、决策与问责？",
    guidingQuestionNote: "在深圳 2026，人的主体性从原则走向实践：工程流水线、组织结构与开源社区都需要给出答案。",
    whyNowTitle: "为什么是现在：从写代码到指挥智能体",
    whyNowIntro: "软件生产正跨越第三个门槛。每个时代都改变了由谁——或由什么——来生产软件，也随之重新定义了工程、组织与开源。智能体时代迫使我们直面本论坛存在的意义：在一个能自我构建的系统里，人的主体性安放在哪里？",
    whyNowShifts: [
      {
        title: "时代一：人写代码",
        description: "我们熟悉的开源——维护者、代码评审，以及建立在“知道谁写了什么”之上的信任。组织靠增加工程师来扩张。",
      },
      {
        title: "时代二：AI 辅助编程",
        description: "补全与副驾驶工具让每个开发者更快，但仍由人来编写、评审并对每次变更负责。组织架构基本未变。",
      },
      {
        title: "时代三：智能体生产软件",
        description: "智能体集群依据规范进行规划、编写、测试与交付。工程变成驾驭工程与规范纪律；组织围绕判断力与上下文重构；开源必须在溯源而非作者身份之上重建信任。",
      },
    ],
    valuePropositionTitle: "我们的独特价值",
    valueProposition: [
      { title: "从工程到组织", description: "同一现场贯通智能体工程流水线与它所迫使的组织重构——实践者与理论者同堂对话。" },
      { title: "时机优势", description: "紧邻 GOSIM 深圳（10 月 16–17 日）之前，欧盟 AI 法案执法满一年，新的智能体 AI 联盟正在形成。我们可以定义议程。" },
      { title: "跨文化桥梁", description: "携手 GOSIM、开源社（KAIYUANSHE）与欧洲伙伴，我们是唯一同时探讨美/欧/中开源动态的论坛。" },
      { title: "持久框架而非炒作", description: "我们不追逐当下热点，而是提出持久的结构性问题，用当前证据作为例证。" },
    ],
    invitedParticipants: "受邀参与者",
    exclusiveAccess: "专属参与",
    inviteOnly: "仅限邀请",
    colocated: "联合举办",
    chathamHouseTitle: "查塔姆宫规则",
    chathamHouseDescription: "参与者可以自由使用所获得的信息，但不得透露发言者或任何其他参与者的身份或所属机构。这一规则鼓励就敏感话题进行开放和坦诚的讨论。",
  },

  tracksSection: {
    title: "三大议题",
    subtitle: "智能体软件工程、AI 原生组织，以及智能体时代的开源",
    featured: "重点",
    narrativeArc: "构建 → 重组 → 可持续",
    tracks: [
      {
        title: "智能体软件工程",
        subtitle: "理论与实践",
        description: "Agent swarm（智能体集群）、agentic coding（智能体编程）、spec-driven development（规范驱动开发）与 harness engineering（驾驭工程）——当智能体承担大部分编码时，工程学科将是什么样。",
        keywords: ["智能体集群", "规范驱动开发", "驾驭工程", "MCP / A2A"],
      },
      {
        title: "AI 原生组织",
        subtitle: "从恐龙到章鱼",
        description: "判断力分布、上下文流动，以及能够感知与自适应的组织结构——与重新定义智能体时代企业管理的思想者同场对话。",
        keywords: ["章鱼型组织", "判断力分布", "上下文流动", "智能体经济"],
      },
      {
        title: "智能体时代的开源",
        subtitle: "生存与繁荣",
        description: "社区、代码托管平台与基金会如何生存与繁荣：AI-BOM 与溯源、维护者可持续性，以及 AI 生成贡献的信任机制。",
        keywords: ["AI-BOM", "溯源", "维护者可持续性", "可信贡献"],
      },
    ],
  },

  scheduleSection: {
    title: "日程安排",
    subtitle: "两个工作日——2026 年 10 月 14–15 日（日程以最终确认为准）",
    note: "所有环节遵循查塔姆宫规则，提供中英同传。",
    items: [
      { time: "10月14日 · 12:00–13:30", title: "签到与欢迎午餐" },
      { time: "10月14日 · 13:30–14:00", title: "开幕主旨演讲：智能体时代的人的主体性" },
      { time: "10月14日 · 14:00–15:15", title: "圆桌：智能体时代的开源", subtitle: "托管平台、基金会与社区", format: "圆桌" },
      { time: "10月14日 · 15:45–17:00", title: "工作会议：当智能体编写代码时，开源如何保持可信", format: "主持式工作会议" },
      { time: "10月14日 · 17:00–17:30", title: "成果汇报与次日预告" },
      { time: "10月14日 · 18:30", title: "欢迎晚宴" },
      { time: "10月15日 · 09:00–09:20", title: "主旨演讲：智能体经济" },
      { time: "10月15日 · 09:20–10:40", title: "智能体软件工程", subtitle: "集群、规范与驾驭工程", format: "主旨 + 圆桌" },
      { time: "10月15日 · 11:10–12:30", title: "成为章鱼型组织", subtitle: "设计 AI 原生企业", format: "主旨 + 圆桌" },
      { time: "10月15日 · 12:30–14:00", title: "午餐与现场演示" },
      { time: "10月15日 · 14:00–15:30", title: "分组工作议题", subtitle: "智能体工程流水线 · AI 原生组织重构", format: "主持式工作会议" },
      { time: "10月15日 · 16:00–16:40", title: "成果汇报 · 闭幕综述 · OAIC 介绍" },
      { time: "10月15日 · 17:30–20:30", title: "闭幕游船：珠海 → 深圳蛇口", subtitle: "船上酒会与冷餐——抵达后衔接 GOSIM 深圳大会" },
    ],
  },

  speakersSection: {
    title: "嘉宾",
    subtitle: "世界级专家、研究者和实践者",
    comingSoon: "嘉宾即将公布",
    comingSoonDescription: "我们正在策划一支杰出的阵容，包括思想领袖、学者和行业先驱，共同探讨塑造智能代理 AI 的结构性变革。",
    comingSoonNote: "请持续关注或申请邀请以在嘉宾公布时获得通知。",
  },

  panelistsSection: {
    title: "嘉宾所代表的机构",
    subtitle: "我们的小组成员来自顶尖大学、研究机构、开源基金会和引领智能代理 AI 发展的人工智能企业。",
  },

  venue: {
    title: "会议地点",
    venueDescription: "珠海度假式会议环境（具体场地待公布）——单一会场加酒店住宿，适合专注的封闭工作研讨。",
    colocatedDescription: "与 GOSIM 深圳 2026（10 月 16–17 日）联动举办：论坛以珠海九洲港至深圳蛇口的游船酒会闭幕，抵达后正逢 GOSIM 开幕。",
    accessDescription: "可从珠海金湾机场（ZUH）、经港珠澳大桥的香港国际机场（HKG）及深圳宝安国际机场（SZX）抵达。",
    viewOnMap: "在 Google 地图上查看 →",
    photosComingSoon: "场地照片即将发布",
  },

  cta: {
    title: "加入对话",
    description: "AI Vision Forum Paris 2026 仅限受邀者参加。提交您的邀请申请，共同塑造智能代理 AI 的未来。",
    button: "申请邀请",
    note: "申请持续滚动审核中",
  },

  footer: {
    quickLinks: "快速链接",
    about: "关于",
    tracks: "议题",
    schedule: "日程",
    speakers: "嘉宾",
    legal: "法律信息",
    privacyPolicy: "隐私政策",
    contact: "联系我们",
    mainSite: "AI Vision Forum 主站",
    paris2026: "巴黎 2026 回顾",
    underChathamHouseRule: "遵循查塔姆宫规则",
    connect: "关注我们",
    colocatedWith: "联合举办",
    copyright: "AI Vision Forum 版权所有",
    organizedBy: "由 AI Vision Forum 社区组织 • 仅限邀请活动",
  },

  registerPage: {
    backToHome: "返回首页",
    title: "申请邀请",
    description: "AI Vision Forum Paris 2026 为仅限邀请活动。请填写以下表格申请您的邀请。",
    fullName: "姓名 *",
    emailAddress: "电子邮箱 *",
    affiliation: "所属机构 / 组织",
    primaryTrack: "主要感兴趣的议题 *",
    selectTrack: "选择一个议题",
    trackOptions: [
      "智能体软件工程",
      "AI 原生组织",
      "智能体时代的开源",
    ],
    motivation: "您为什么想参加？ *",
    motivationPlaceholder: "请介绍您对论坛的兴趣...",
    chathamAgree: "我同意在查塔姆宫规则下参与",
    submitButton: "提交申请",
    reviewNote: "申请持续滚动审核中。我们将在2周内回复。",
    placeholderNote: "说明",
    placeholderDescription: "这是一个占位表单。完整注册将于2026年第二季度开放，届时将集成我们的邀请管理系统。",
    namePlaceholder: "您的姓名",
    emailPlaceholder: "you@example.com",
    orgPlaceholder: "您的组织",
  },

  contactPage: {
    backToHome: "返回首页",
    title: "联系我们",
    description: "对 AI Vision Forum Paris 2026 有疑问？我们很乐意为您解答。",
    generalInquiries: "一般咨询",
    partnership: "合作与赞助",
    pressMedia: "新闻与媒体",
    followUs: "关注我们",
    quickLinks: "快速链接",
    requestInvitation: "申请邀请 →",
    exploreTracks: "浏览议题 →",
    aboutForum: "关于论坛 →",
    noteTitle: "说明",
    noteDescription: "邮箱地址为占位信息。官方联系方式将于2026年第二季度公布。",
  },

  privacyPage: {
    backToHome: "返回首页",
    title: "隐私政策",
    lastUpdated: "最后更新：2026年2月10日",
    overview: "概述",
    overviewText: "AI Vision Forum Paris 2026 致力于保护活动参与者、嘉宾和网站访问者的隐私。本政策概述了我们如何收集、使用和保护您的信息。",
    infoCollect: "我们收集的信息",
    infoRegistration: "注册数据：姓名、电子邮箱、所属机构、专业背景",
    infoParticipation: "活动参与：会议出席、提问（受查塔姆宫规则保护）",
    infoAnalytics: "网站分析：通过尊重隐私的工具收集的匿名使用数据",
    chathamTitle: "查塔姆宫规则",
    chathamText: "所有活动讨论均受查塔姆宫规则约束。未经明确同意，我们不会公开将发言归属于个人或其所属组织。",
    dataUsage: "数据使用",
    dataUsageIntro: "您的信息仅用于：",
    dataUsageItems: [
      "活动后勤和通讯",
      "连接有共同兴趣的参与者（仅限选择加入）",
      "活动后调查和跟进",
    ],
    dataProtection: "数据保护",
    dataProtectionText: "我们遵守 GDPR 和法国数据保护法律。您的数据安全存储，绝不出售给第三方。",
    yourRights: "您的权利",
    yourRightsIntro: "您有权：",
    yourRightsItems: [
      "访问您的个人数据",
      "请求更正或删除",
      "退出通讯",
      "导出您的数据",
    ],
    contactTitle: "联系方式",
    contactText: "隐私相关咨询：",
  },

  trackDetail: {
    backToTracks: "返回议题",
    keyTopics: "核心主题",
    featuredSpeakers: "特邀嘉宾",
    speakersComingSoon: "嘉宾即将公布",
    speakersCurating: "我们正在为此议题策划一支杰出的专家阵容",
    relatedResources: "相关资源",
    interestedInTrack: "对此议题感兴趣？",
    requestInvitationToJoin: "申请邀请以加入讨论",
    requestInvitation: "申请邀请",
  },

  
  trackAgenticSE: {
    title: "智能体软件工程",
    overview: "与 AI 智能体共同构建软件的理论与实践——智能体集群、智能体编程、规范驱动开发与驾驭工程。",
    keyTopics: [
      "智能体集群与多智能体编程工作流",
      "规范驱动开发：规范成为第一工件",
      "驾驭工程：上下文工程、架构约束、熵管理",
      "MCP、Agent2Agent 与互操作协议",
      "人工签核：生产流水线中人的位置",
      "编码智能体的基准与评估",
    ],
    spotlightTitle: "核心问题",
    spotlightText: "生产级的智能体工程流水线是什么样——人类在哪些环节签核？本议题汇聚 AI 编程工具厂商、企业实践者、咨询公司与软件工程学者。",
    outcomesTitle: "工作成果",
    outcomes: [
      "智能体软件工程流水线的共同图谱",
      "人工签核与问责的参考基准",
      "规范驱动实践的跨企业对比",
    ],
  },

  trackAiNativeOrg: {
    title: "AI 原生组织",
    overview: "组织如何围绕 AI 重构——从集中、迟缓的层级结构，走向判断力分布、上下文自由流动的自适应结构。",
    keyTopics: [
      "章鱼型组织：分布式、自愈、自适应的结构",
      "判断力分布与上下文流动作为设计原则",
      "AI 赋能 vs AI 原生：重新设计而非修补",
      "智能体经济与组织工作的新单元",
      "智能体作为团队成员：身份、授权与管控",
      "AI 原生企业的领导力与人才",
    ],
    spotlightTitle: "核心问题",
    spotlightText: "企业围绕 AI 重组时，什么最先失效——用什么取而代之？本议题汇聚组织理论学者、咨询公司与正在推进转型的企业高管。",
    outcomesTitle: "工作成果",
    outcomes: [
      "AI 原生组织设计的框架文件",
      "转型进行时企业的案例证据",
      "留给研究界的开放问题",
    ],
  },

  trackOpenSource: {
    title: "智能体时代的开源",
    overview: "当 AI 智能体产出大部分贡献时，开源社区、代码托管平台与基金会如何生存与繁荣——以及信任如何围绕溯源重建。",
    keyTopics: [
      "AI-BOM：可签名验证的代码作者记录（人还是 AI）",
      "溯源与供应链信任（SPDX、SLSA、in-toto）",
      "AI 生成贡献洪流下的维护者可持续性",
      "不绑定平台的信任：GitHub、Gitea、Forgejo 等",
      "代码泛滥时代的开源经济学",
      "基金会与联盟：智能体时代的治理",
    ],
    spotlightTitle: "核心问题",
    spotlightText: "当智能体编写大部分代码时，开源社区必须做出哪些改变才能保持可信？本议题汇聚托管平台维护者、基金会负责人、供应链安全专家与独立维护者。",
    outcomesTitle: "工作成果",
    outcomes: [
      "生态工作组章程草案",
      "关于 AI-BOM 与溯源标准的共同立场",
      "维护者可持续性建议",
    ],
  },


  pastEditions: {
    title: "往届活动",
    subtitle: "AI Vision Forum 源于 2024 年以来与 GOSIM 大会同期举办的一系列闭门论坛",
    visitSite: "访问网站",
    readReport: "阅读论坛报告",
    editions: [
      {
        name: "AI Vision Forum 巴黎 2026",
        date: "2026 年 5 月 4 日 · 法国巴黎",
        description: "聚焦智能体转型的软件层——人机协同、治理与开源——并依据查塔姆宫规则发布了完整论坛报告。",
      },
      {
        name: "GOSIM AI Vision Forum 杭州 2025",
        date: "2025 年 9 月 12 日 · 中国杭州",
        description: "首次以 AI Vision Forum 命名——70–100 位受邀者围绕 AI 时代的人类核心价值展开对话，与 GOSIM 杭州大会同期举办。",
      },
      {
        name: "GOSIM 开源 AI 战略论坛",
        date: "2025 年 5 月 5 日 · 法国巴黎",
        description: "前身论坛，于 Station F 举行——依据查塔姆宫规则的闭门开源 AI 战略对话，与 GOSIM AI 巴黎大会同期举办。",
      },
    ],
  },

  pastOrgs: {
    title: "往届活动参与机构",
    subtitle: "往届活动的参与者来自以下大学、研究机构、基金会与 AI 企业",
  },

  logo: {
    tagline: "智能代理塑造明天",
  },
};
