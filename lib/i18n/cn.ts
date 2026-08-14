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
    invitationOnly: "仅限受邀参加",
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
    subtitle: "当智能体开始构建软件，人如何保有主体性",
    guidingQuestionLabel: "核心问题",
    guidingQuestion: "当 AI 智能体完成大部分软件开发工作，人如何继续掌握目标、决策与责任？",
    guidingQuestionNote: "2026 年论坛：从原则走向实践。",
    whyNowTitle: "为什么是现在：从编写代码到指挥智能体",
    whyNowIntro: "软件生产正在经历第三次范式转变。此前每一次转变，都重新定义了工程实践、组织方式与开源生态。",
    whyNowShifts: [
      {
        title: "时代一：人写代码",
        description: "信任建立在“知道谁写了什么”之上。",
      },
      {
        title: "时代二：AI 辅助编程",
        description: "开发效率大幅提升，但每一次变更仍由人负责。",
      },
      {
        title: "时代三：智能体生产软件",
        description: "智能体依据规范完成交付，信任机制也必须从“谁是作者”转向“全过程可追溯”。",
      },
    ],
    valuePropositionTitle: "论坛的独特之处",
    valueProposition: [
      { title: "从工程到组织", description: "从智能体工程流程谈到随之而来的组织重构，让实践者与研究者在同一场讨论中相互印证。" },
      { title: "恰逢其时", description: "论坛在珠海举行，时间紧接 10 月 16–17 日的 GOSIM 深圳大会。此时欧盟《人工智能法案》实施已满一年，新的智能体 AI 联盟也正在形成，正适合共同梳理下一步议程。" },
      { title: "跨地域对话", description: "携手 GOSIM、开源社（KAIYUANSHE）与欧洲伙伴，这是目前唯一同时讨论美国、欧洲与中国开源生态的论坛。" },
      { title: "关注长期问题", description: "不追逐短期热点，而是围绕具有长期意义的结构性问题，以现实案例和当前证据展开讨论。" },
    ],
    invitedParticipants: "受邀参与者",
    exclusiveAccess: "受邀参加",
    inviteOnly: "仅限受邀",
    colocated: "与 GOSIM 同期",
    chathamHouseTitle: "查塔姆宫规则",
    chathamHouseDescription: "与会者可以自由使用会上获得的信息，但不得透露发言者及其他与会者的身份或所属机构。该规则旨在为敏感议题营造坦诚、开放的交流环境。",
  },

  tracksSection: {
    title: "四个核心议题",
    subtitle: "智能体软件工程、AI 原生组织、智能体时代的开源，以及 Mobile Agentic OS",
    featured: "重点",
    narrativeArc: "构建 → 重组 → 可持续",
    tracks: [
      {
        title: "智能体软件工程",
        subtitle: "理论与实践",
        description: "当智能体承担大部分编码工作，软件工程将如何变化？",
        keywords: ["多智能体协作", "规范驱动开发", "智能体运行框架", "MCP / A2A"],
      },
      {
        title: "AI 原生组织",
        subtitle: "从恐龙到章鱼",
        description: "从层级分明的组织，走向能够感知变化、快速适应的组织。",
        keywords: ["章鱼型组织", "决策权下放", "信息流动", "智能体经济"],
      },
      {
        title: "智能体时代的开源",
        subtitle: "信任与可持续发展",
        description: "当智能体开始贡献代码，开源如何保持可追溯、可持续和值得信任？",
        keywords: ["AI-BOM", "溯源", "维护者可持续性", "可信贡献"],
      },
      {
        title: "Mobile Agentic OS（移动智能体操作系统）",
        subtitle: "智能体移动时代的中立底座",
        description: "构建不依赖 Android、由社区共同治理的移动 Linux 底座，推动不同发行版与社区共建共享基础设施。",
        keywords: ["中立 OS 底座", "发行版协作", "端侧智能体", "移动 Linux"],
      },
    ],
  },

  scheduleSection: {
    title: "日程安排",
    subtitle: "2026 年 10 月 14–15 日 · 日程以最终确认为准",
    note: "所有环节均采用查塔姆宫规则，并提供中英同声传译。",
    items: [
      { time: "10 月 14 日 · 09:00–09:30", title: "签到与咖啡" },
      { time: "10 月 14 日 · 09:30–10:00", title: "开幕主旨演讲：智能体时代，人的主体性何在" },
      { time: "10 月 14 日 · 10:00–11:10", title: "智能体时代的开源", subtitle: "代码托管平台、基金会与社区", format: "主旨演讲 + 圆桌讨论" },
      { time: "10 月 14 日 · 11:30–12:40", title: "Mobile Agentic OS（移动智能体操作系统）", subtitle: "面向智能体移动时代的中立 Linux 底座", format: "主旨演讲 + 圆桌讨论" },
      { time: "10 月 14 日 · 12:40–14:00", title: "午餐" },
      { time: "10 月 14 日 · 14:00–15:30", title: "分组工作坊", subtitle: "智能体参与代码贡献后，开源如何保持可信；不同发行版如何共建移动底座", format: "引导式工作坊" },
      { time: "10 月 14 日 · 16:00–17:00", title: "成果汇报与次日预告" },
      { time: "10 月 14 日 · 18:30", title: "欢迎晚宴" },
      { time: "10 月 15 日 · 09:00–09:20", title: "主旨演讲：智能体经济" },
      { time: "10 月 15 日 · 09:20–10:40", title: "智能体软件工程", subtitle: "多智能体协作、规范驱动与工程管控", format: "主旨演讲 + 圆桌讨论" },
      { time: "10 月 15 日 · 11:10–12:30", title: "AI 原生组织", subtitle: "从层级组织走向自适应组织", format: "主旨演讲 + 圆桌讨论" },
      { time: "10 月 15 日 · 12:30–14:00", title: "午餐与现场演示" },
      { time: "10 月 15 日 · 14:00–15:30", title: "分组工作坊", subtitle: "智能体工程体系；AI 原生组织设计", format: "引导式工作坊" },
      { time: "10 月 15 日 · 16:00–16:40", title: "成果汇报、闭幕总结与 OAIC 介绍" },
      { time: "10 月 15 日 · 17:30–20:30", title: "乘船前往深圳蛇口", subtitle: "船上酒会与简餐，抵达后衔接 GOSIM 深圳大会" },
    ],
  },

  speakersSection: {
    title: "嘉宾",
    subtitle: "来自产业、学术界与开源社区的专家和实践者",
    comingSoon: "嘉宾即将公布",
    comingSoonDescription: "嘉宾阵容正在确认中。我们将邀请来自产业、学术界与开源社区的实践者，共同讨论智能体技术带来的长期变化。",
    comingSoonNote: "嘉宾名单公布后，我们会同步更新；您也可以先提交参会邀请申请。",
  },

  panelistsSection: {
    title: "嘉宾所代表的机构",
    subtitle: "嘉宾来自高校、研究机构、开源基金会，以及正在推动智能体技术落地的 AI 企业。",
  },

  venue: {
    title: "会议地点",
    venueDescription: "珠海凤凰湾悦榕庄位于香洲区，是一座山间温泉度假酒店；会议与住宿均安排在酒店内。",
    colocatedDescription: "10 月 15 日论坛闭幕后，参会者将乘船从珠海前往深圳蛇口，衔接 10 月 16–17 日举行的 GOSIM 深圳大会。",
    accessDescription: "可从珠海（ZUH）、香港（HKG）或深圳（SZX）机场抵达。",
    viewOnMap: "在 Google 地图中查看 →",
    photosComingSoon: "场地照片即将发布",
  },

  cta: {
    title: "加入对话",
    description: "AI Vision Forum 深圳 2026 在珠海举行，仅限受邀参加。如希望参与讨论，欢迎提交邀请申请。",
    button: "申请邀请",
    note: "申请将分批审核",
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
    organizedBy: "由 AI Vision Forum 社区发起 · 仅限受邀参加",
  },

  registerPage: {
    backToHome: "返回首页",
    title: "申请邀请",
    description: "AI Vision Forum 深圳 2026 在珠海举行，仅限受邀参加。请填写以下表格，提交参会申请。",
    fullName: "姓名 *",
    emailAddress: "电子邮箱 *",
    affiliation: "所属机构 / 组织",
    primaryTrack: "最关注的议题 *",
    selectTrack: "选择一个议题",
    trackOptions: [
      "智能体软件工程",
      "AI 原生组织",
      "智能体时代的开源",
      "Mobile Agentic OS",
    ],
    motivation: "您希望参与哪些讨论？ *",
    motivationPlaceholder: "请简要介绍您关注的问题……",
    chathamAgree: "我同意遵守查塔姆宫规则",
    submitButton: "提交申请",
    reviewNote: "我们将分批审核申请，并在两周内回复。",
    placeholderNote: "说明",
    placeholderDescription: "当前表格仅供预览。正式申请通道将于 2026 年第二季度开放，届时会接入邀请管理系统。",
    namePlaceholder: "您的姓名",
    emailPlaceholder: "you@example.com",
    orgPlaceholder: "您的组织",
  },

  contactPage: {
    backToHome: "返回首页",
    title: "联系我们",
    description: "如果您对 AI Vision Forum 深圳 2026 有任何疑问，欢迎联系组委会。",
    generalInquiries: "一般咨询",
    partnership: "合作与赞助",
    pressMedia: "新闻与媒体",
    followUs: "关注我们",
    quickLinks: "快速链接",
    requestInvitation: "申请邀请 →",
    exploreTracks: "浏览议题 →",
    aboutForum: "关于论坛 →",
    noteTitle: "说明",
    noteDescription: "当前邮箱地址仅作占位。正式联系方式将于 2026 年第二季度公布。",
  },

  privacyPage: {
    backToHome: "返回首页",
    title: "隐私政策",
    lastUpdated: "最后更新：2026 年 2 月 10 日",
    overview: "概述",
    overviewText: "AI Vision Forum 深圳 2026 致力于保护活动参与者、嘉宾和网站访问者的隐私。本政策概述了我们如何收集、使用和保护您的信息。",
    infoCollect: "我们收集的信息",
    infoRegistration: "报名信息：姓名、电子邮箱、所属机构和专业背景",
    infoParticipation: "参会信息：出席记录及提问情况（受查塔姆宫规则保护）",
    infoAnalytics: "网站使用情况：通过注重隐私保护的分析工具收集匿名数据",
    chathamTitle: "查塔姆宫规则",
    chathamText: "所有讨论均采用查塔姆宫规则。未经本人明确同意，我们不会公开发言者的身份或其所属机构。",
    dataUsage: "数据使用",
    dataUsageIntro: "您的信息仅用于：",
    dataUsageItems: [
      "安排活动事宜并发送相关通知",
      "在您同意的前提下，协助兴趣相近的参与者建立联系",
      "开展会后调研与后续沟通",
    ],
    dataProtection: "数据保护",
    dataProtectionText: "我们依据适用的数据保护法律（包括 GDPR）处理个人信息。您的数据将被妥善保存，且不会出售给第三方。",
    yourRights: "您的权利",
    yourRightsIntro: "您有权：",
    yourRightsItems: [
      "访问您的个人数据",
      "要求更正或删除个人数据",
      "退订相关通知",
      "请求导出个人数据",
    ],
    contactTitle: "联系方式",
    contactText: "隐私相关咨询：",
  },

  trackDetail: {
    backToTracks: "返回议题",
    keyTopics: "重点议题",
    featuredSpeakers: "特邀嘉宾",
    speakersComingSoon: "嘉宾即将公布",
    speakersCurating: "我们正在确认参与这一议题的嘉宾名单",
    relatedResources: "相关资源",
    interestedInTrack: "对此议题感兴趣？",
    requestInvitationToJoin: "申请邀请以加入讨论",
    requestInvitation: "申请邀请",
  },

  
  trackAgenticSE: {
    title: "智能体软件工程",
    overview: "讨论如何与 AI 智能体共同构建软件，包括多智能体协作、规范驱动开发，以及支撑智能体稳定运行的工程框架。",
    keyTopics: [
      "多智能体协作与编程流程",
      "规范驱动开发：以规范文档为核心交付物",
      "智能体运行框架（Harness）：上下文管理、架构约束与熵控制",
      "MCP、Agent2Agent 与互操作协议",
      "人工签核：明确人在生产流程中的决策节点",
      "编码智能体的基准与评估",
    ],
    spotlightTitle: "核心问题",
    spotlightText: "一套可投入生产的智能体软件工程流程应当是什么样？哪些环节必须由人确认和负责？本议题将汇聚 AI 编程工具厂商、企业实践者、咨询机构与软件工程研究者。",
    outcomesTitle: "工作成果",
    outcomes: [
      "智能体软件工程流程的共同图谱",
      "人工签核与责任划分的参考原则",
      "不同企业规范驱动实践的对比",
    ],
  },

  trackAiNativeOrg: {
    title: "AI 原生组织",
    overview: "讨论组织如何围绕 AI 重新设计：从集中、迟缓的层级结构，走向决策权合理下放、信息顺畅流动的自适应组织。",
    keyTopics: [
      "章鱼型组织：分布式、自愈、自适应的结构",
      "决策权下放与信息流动的设计原则",
      "AI 赋能与 AI 原生：不是局部改造，而是整体重构",
      "智能体经济下的新型工作单元",
      "智能体成为团队成员之后：身份、授权与管理",
      "AI 原生企业的领导力与人才",
    ],
    spotlightTitle: "核心问题",
    spotlightText: "当企业开始围绕 AI 重组，最先失效的会是什么？又应当由什么机制取代？本议题将汇聚组织理论研究者、咨询机构与正在推进转型的企业管理者。",
    outcomesTitle: "工作成果",
    outcomes: [
      "AI 原生组织设计的框架性报告",
      "来自企业转型一线的案例",
      "有待产业界与学术界继续研究的问题",
    ],
  },

  trackOpenSource: {
    title: "智能体时代的开源",
    overview: "当 AI 智能体完成大部分代码贡献，开源社区、代码托管平台与基金会如何保持活力？又该如何通过可追溯机制重新建立信任？",
    keyTopics: [
      "AI-BOM：以可签名、可验证的方式记录代码由人还是 AI 生成——开放参考实现：OpenFab（open-fab.ai）",
      "溯源与供应链信任（SPDX、SLSA、in-toto）",
      "面对大量 AI 生成的贡献，如何保障维护者的长期投入",
      "跨平台的信任机制：GitHub、Gitea、Forgejo 等",
      "代码供给充裕之后的开源经济",
      "基金会与联盟：智能体时代的治理",
    ],
    spotlightTitle: "核心问题",
    spotlightText: "当智能体完成大部分代码贡献，开源社区需要做出哪些改变，才能继续赢得信任？本议题将汇聚代码托管平台维护者、基金会负责人、供应链安全专家与独立维护者。",
    outcomesTitle: "工作成果",
    outcomes: [
      "生态协作工作组章程草案",
      "关于 AI-BOM 与溯源标准的共同立场",
      "维护者可持续性建议",
    ],
  },


  pastEditions: {
    title: "往届活动",
    subtitle: "2024 年起与 GOSIM 同期举办的闭门论坛系列",
    visitSite: "访问网站",
    readReport: "阅读论坛报告",
    editions: [
      {
        name: "AI Vision Forum 巴黎 2026",
        date: "2026 年 5 月 4 日 · 法国巴黎",
        description: "人机协同、治理与开源——已发布完整论坛报告。",
      },
      {
        name: "AI Vision Forum 杭州 2025",
        date: "2025 年 9 月 12 日 · 中国杭州",
        description: "首次以 AI Vision Forum 命名，聚焦 AI 时代人的核心价值。",
      },
      {
        name: "GOSIM 开源 AI 战略论坛",
        date: "2025 年 5 月 5 日 · 法国巴黎",
        description: "AI Vision Forum 的前身：在 Station F 举行的闭门开源 AI 战略对话。",
      },
    ],
  },

  pastOrgs: {
    title: "往届活动参与机构",
    subtitle: "往届参与者来自以下大学、研究机构、基金会与 AI 企业",
  },

  trackMobileLinux: {
    title: "Mobile Agentic OS（移动智能体操作系统）",
    overview: "构建面向移动智能体、不依赖 Android 的中立 Linux 底座。它由社区共同治理，任何厂商和项目都可使用，并能兼容现有应用、连接不同模型。",
    keyTopics: [
      "移动操作系统为何需要中立底座——超越当前双寡头格局",
      "过往“第三种移动操作系统”的经验：Firefox OS、Ubuntu Touch、Sailfish",
      "纯 Linux 底座上的 Android 应用兼容",
      "端侧智能体：本地模型、隐私与智能体手机",
      "不同发行版、移动 Linux 项目与 UI 技术栈如何共建基础设施",
      "共享移动底座的社区治理",
    ],
    spotlightTitle: "核心问题",
    spotlightText: "不同发行版、移动 Linux 项目与硬件厂商，能否围绕一个中立、开放的移动智能体底座展开协作？本议题将汇聚发行版负责人、移动 Linux 项目创始人与社区基金会。",
    outcomesTitle: "工作成果",
    outcomes: [
      "关于共建中立移动底座的意向声明",
      "现有项目可复用组件的梳理",
      "后续工作组安排与协作路线",
    ],
  },

  logo: {
    tagline: "人与智能体，共创未来",
  },
};
