import type { Locale } from "@/lib/i18n";

export type ProgramDay = "open" | "enterprise";

type LocalizedText = Record<Locale, string>;

export interface ProgramSession {
  time: string;
  title: LocalizedText;
  note?: LocalizedText;
}

export interface ProgramTopic {
  slug: string;
  number: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  prompts: Record<Locale, string[]>;
}

export interface ProgramDayContent {
  id: ProgramDay;
  route: string;
  dateNumber: string;
  dateLabel: LocalizedText;
  audience: LocalizedText;
  shortName: LocalizedText;
  title: LocalizedText;
  deck: LocalizedText;
  question: LocalizedText;
  participants: LocalizedText;
  topics: ProgramTopic[];
  schedule: ProgramSession[];
}

export const PROGRAM_DAYS: ProgramDayContent[] = [
  {
    id: "open",
    route: "/day-one/",
    dateNumber: "14",
    dateLabel: { en: "OCTOBER 14 · WEDNESDAY", "zh-cn": "10 月 14 日 · 星期三" },
    audience: { en: "DAY ONE · THE OPEN COMMONS", "zh-cn": "第一日 · 开放共同体" },
    shortName: { en: "Day One", "zh-cn": "第一日" },
    title: {
      en: "AVF’26 Surviving and Thriving: Open Source in the Agentic Era",
      "zh-cn": "AVF’26 生存与繁荣：智能体时代的开源",
    },
    deck: {
      en: "A day about what open source must preserve — and what it must become — as agents move from tools to participants, platforms, and operating environments.",
      "zh-cn": "当智能体从工具变成参与者、平台与运行环境，开源必须守住什么，又必须成长为什么？",
    },
    question: {
      en: "Can open source hold its ground, renew its social contract, and become the foundation for the next device frontier?",
      "zh-cn": "开源能否守住阵地、重建协作契约，并成为下一代设备前沿的基础？",
    },
    participants: {
      en: "Maintainers · Foundation leaders · Mobile Linux builders · CTOs · Researchers",
      "zh-cn": "维护者 · 基金会负责人 · 移动 Linux 建设者 · CTO · 研究者",
    },
    topics: [
      {
        slug: "open-source",
        number: "01",
        title: {
          en: "Roots: Open Source Holding Ground in the Agentic Era",
          "zh-cn": "根系：智能体时代，开源如何守住阵地",
        },
        subtitle: { en: "PROVENANCE · TRUST · STEWARDSHIP", "zh-cn": "溯源 · 信任 · 守护" },
        description: {
          en: "Revisit the foundations that make open source credible when agents generate, review, and maintain an expanding share of the world’s software.",
          "zh-cn": "当智能体生成、审查并维护越来越多的软件，重新审视开源可信赖的根基。",
        },
        prompts: {
          en: ["AI-BOM and verifiable provenance", "Trusted contribution pipelines", "Maintainer agency and sustainability"],
          "zh-cn": ["AI-BOM 与可验证溯源", "可信贡献流程", "维护者的主体性与可持续性"],
        },
      },
      {
        slug: "mobile-agentic-os",
        number: "02",
        title: {
          en: "Bloom: Mobile Agentic OS and the New Device Frontier",
          "zh-cn": "绽放：Mobile Agentic OS 与新设备前沿",
        },
        subtitle: { en: "MOBILE · AMBIENT · OPEN", "zh-cn": "移动 · 环境智能 · 开放" },
        description: {
          en: "Imagine a vendor-neutral mobile base where on-device agents can act across new form factors without surrendering user control.",
          "zh-cn": "构想一个厂商中立的移动底座，让端侧智能体跨越全新设备形态，同时不牺牲用户控制权。",
        },
        prompts: {
          en: ["A neutral agentic OS base", "On-device intelligence and privacy", "Distro and device ecosystem alignment"],
          "zh-cn": ["中立的智能体 OS 底座", "端侧智能与隐私", "发行版与设备生态协同"],
        },
      },
    ],
    schedule: [
      { time: "09:00–09:30", title: { en: "Registration & coffee", "zh-cn": "签到与咖啡" } },
      { time: "09:30–10:00", title: { en: "Opening keynote: Human Agency in the Agent Era", "zh-cn": "开幕主旨演讲：智能体时代，人的主体性何在" } },
      { time: "10:00–11:10", title: { en: "Roots: Open Source Holding Ground in the Agentic Era", "zh-cn": "根系：智能体时代，开源如何守住阵地" }, note: { en: "Keynote + panel", "zh-cn": "主旨演讲 + 圆桌讨论" } },
      { time: "11:30–12:40", title: { en: "Bloom: Mobile Agentic OS and the New Device Frontier", "zh-cn": "绽放：Mobile Agentic OS 与新设备前沿" }, note: { en: "Keynote + panel", "zh-cn": "主旨演讲 + 圆桌讨论" } },
      { time: "12:40–14:00", title: { en: "Lunch", "zh-cn": "午餐" } },
      { time: "14:00–15:30", title: { en: "Two working rooms", "zh-cn": "两场专题工作坊" }, note: { en: "Open-source trust · Shared mobile base", "zh-cn": "开源信任 · 共享移动底座" } },
      { time: "16:00–17:00", title: { en: "Report-backs & Day 2 preview", "zh-cn": "成果汇报与次日预告" } },
      { time: "18:30", title: { en: "Welcome dinner", "zh-cn": "欢迎晚宴" } },
    ],
  },
  {
    id: "enterprise",
    route: "/day-two/",
    dateNumber: "15",
    dateLabel: { en: "OCTOBER 15 · THURSDAY", "zh-cn": "10 月 15 日 · 星期四" },
    audience: { en: "DAY TWO · THE ENTERPRISE", "zh-cn": "第二日 · 企业" },
    shortName: { en: "Day Two", "zh-cn": "第二日" },
    title: {
      en: "The Enterprise: Reshape and Rebuild in the Agentic Era",
      "zh-cn": "企业：在智能体时代重塑与重建",
    },
    deck: {
      en: "A day for leaders redesigning the operating system of the firm — its governance, engineering discipline, decision rights, and organizational form.",
      "zh-cn": "为正在重新设计企业操作系统的领导者而设：治理方式、工程纪律、决策权与组织形态。",
    },
    question: {
      en: "How do we govern the transition without freezing it — and engineer an organization designed for intelligence from inception?",
      "zh-cn": "如何在不扼杀转型的前提下治理转型，并从源头打造为智能而生的组织？",
    },
    participants: {
      en: "CTOs · CIOs · Engineering leaders · Organization designers · Founders · Researchers",
      "zh-cn": "CTO · CIO · 工程负责人 · 组织设计者 · 创始人 · 研究者",
    },
    topics: [
      {
        slug: "agentic-engineering",
        number: "01",
        title: {
          en: "Rewire: Governing the Agentic Transformation of the Enterprise",
          "zh-cn": "重连：治理企业的智能体转型",
        },
        subtitle: { en: "GOVERNANCE · CONTROL · TRANSFORMATION", "zh-cn": "治理 · 控制 · 转型" },
        description: {
          en: "Redesign the controls, incentives, and delivery systems that let capable agents move from experiments into accountable enterprise operations.",
          "zh-cn": "重新设计控制、激励与交付体系，让高能力智能体从实验走向可问责的企业运营。",
        },
        prompts: {
          en: ["Intent-driven engineering", "Human and agent decision rights", "Evidence, controls, and accountability"],
          "zh-cn": ["意图驱动工程", "人与智能体的决策权", "证据、控制与问责"],
        },
      },
      {
        slug: "ai-native-org",
        number: "02",
        title: {
          en: "Inception: Engineering the AI-Native Organization",
          "zh-cn": "初始：打造 AI 原生组织",
        },
        subtitle: { en: "DESIGN · CONTEXT · ADAPTATION", "zh-cn": "设计 · 上下文 · 适应" },
        description: {
          en: "Build the organization around continuous intelligence from day one: fast context flow, distributed judgment, and clear human responsibility.",
          "zh-cn": "从第一天就围绕持续智能构建组织：让上下文快速流动、判断分布协作，并明确人的责任。",
        },
        prompts: {
          en: ["Context as infrastructure", "Adaptive teams and agent capacity", "The new shape of management"],
          "zh-cn": ["作为基础设施的上下文", "自适应团队与智能体能力", "管理的新形态"],
        },
      },
    ],
    schedule: [
      { time: "09:00–09:20", title: { en: "The Agentic Economy", "zh-cn": "智能体经济" }, note: { en: "Opening keynote", "zh-cn": "开场主旨演讲" } },
      { time: "09:20–10:40", title: { en: "Rewire: Governing the Agentic Transformation of the Enterprise", "zh-cn": "重连：治理企业的智能体转型" }, note: { en: "Keynote + panel", "zh-cn": "主旨演讲 + 圆桌讨论" } },
      { time: "11:10–12:30", title: { en: "Inception: Engineering the AI-Native Organization", "zh-cn": "初始：打造 AI 原生组织" }, note: { en: "Keynote + panel", "zh-cn": "主旨演讲 + 圆桌讨论" } },
      { time: "12:30–14:00", title: { en: "Lunch & live demos", "zh-cn": "午餐与现场演示" } },
      { time: "14:00–15:30", title: { en: "Two working rooms", "zh-cn": "两场专题工作坊" }, note: { en: "Engineering systems · Organization design", "zh-cn": "工程体系 · 组织设计" } },
      { time: "16:00–16:40", title: { en: "Report-backs & closing synthesis", "zh-cn": "成果汇报与闭幕总结" } },
      {
        time: "17:30–20:30",
        title: {
          en: "Coach transfer to GOSIM Shenzhen 2026",
          "zh-cn": "会务大巴前往 GOSIM Shenzhen 2026 会场",
        },
        note: {
          en: "Zhuhai → GOSIM Shenzhen 2026 venue",
          "zh-cn": "珠海 → 深圳 · 会务组统一接驳",
        },
      },
    ],
  },
];

export function getProgramDay(id: ProgramDay) {
  return PROGRAM_DAYS.find((day) => day.id === id)!;
}
