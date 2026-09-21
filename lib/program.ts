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
          en: "Bloom: AgentOS and the New Device Frontier",
          "zh-cn": "绽放：AgentOS 与新设备前沿",
        },
        subtitle: { en: "MOBILE · AMBIENT · OPEN", "zh-cn": "移动 · 环境智能 · 开放" },
        description: {
          en: "Imagine a vendor-neutral mobile base where on-device agents can act across new device form factors without surrendering user control.",
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
      { time: "11:30–12:40", title: { en: "Bloom: AgentOS and the New Device Frontier", "zh-cn": "绽放：AgentOS 与新设备前沿" }, note: { en: "Keynote + panel", "zh-cn": "主旨演讲 + 圆桌讨论" } },
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
      "zh-cn": "如何治理转型而不使其停滞，并让企业从第一天起就是 AI 原生组织？",
    },
    participants: {
      en: "CTOs · CIOs · Engineering leaders · Organization designers · Founders · Researchers",
      "zh-cn": "CTO · CIO · 工程负责人 · 组织设计者 · 创始人 · 研究者",
    },
    topics: [
      {
        slug: "ai-native-org",
        number: "01",
        title: {
          en: "Reshape: Building the AI-Native Organization",
          "zh-cn": "重塑：构建 AI 原生组织",
        },
        subtitle: { en: "DESIGN · CONTEXT · RESPONSIBILITY", "zh-cn": "设计 · 上下文 · 责任" },
        description: {
          en: "Build the organization around continuous intelligence from day one: fast context flow, distributed judgment, and clear human responsibility.",
          "zh-cn": "从第一天就围绕持续智能构建组织：让上下文快速流动、判断分布协作，并明确人的责任。",
        },
        prompts: {
          en: ["Context as infrastructure", "Distributed judgment", "Clear human responsibility"],
          "zh-cn": ["作为基础设施的上下文", "分布式协作判断", "明确人的责任"],
        },
      },
      {
        slug: "agentic-engineering",
        number: "02",
        title: {
          en: "Rewire: Software Engineering Around Agents",
          "zh-cn": "重构：围绕智能体的软件工程",
        },
        subtitle: { en: "GOVERNANCE · EVIDENCE · ACCOUNTABILITY", "zh-cn": "治理 · 证据 · 问责" },
        description: {
          en: "Redesign the relationship between people, agents, and deterministic systems, so agents move from experiments into accountable enterprise operation.",
          "zh-cn": "重新设计人、智能体和确定性系统的关系，让智能体从实验走向可问责的企业运营。",
        },
        prompts: {
          en: ["Intent-driven engineering", "Human and agent decision rights", "Evidence, controls, and accountability"],
          "zh-cn": ["意图驱动工程", "人与智能体的决策权", "证据、控制与问责"],
        },
      },
      {
        slug: "agentic-practice",
        number: "03",
        title: {
          en: "Reconnect: Agentic Engineering in Practice",
          "zh-cn": "重连：智能体工程应用实践",
        },
        subtitle: { en: "DEPLOYMENT · EVALUATION · LESSONS", "zh-cn": "落地 · 评估 · 经验" },
        description: {
          en: "The challenges and hands-on experience of real agentic applications — reports from teams running agents in production.",
          "zh-cn": "智能体应用的挑战和实践体验——来自在生产环境中运行智能体的团队的一线报告。",
        },
        prompts: {
          en: ["What breaks in production", "Evaluation in the wild", "Agents beside deterministic systems"],
          "zh-cn": ["生产环境中什么会坏", "真实环境中的评估", "智能体与确定性系统并肩"],
        },
      },
      {
        slug: "ai-native-startup",
        number: "04",
        title: {
          en: "Native: AI-Native Startups and the One-Person Company",
          "zh-cn": "原生：AI 原生创业与一人公司",
        },
        subtitle: { en: "OPC · DELEGATION · DISTRIBUTION", "zh-cn": "一人公司 · 委托 · 分发" },
        description: {
          en: "Agents enabling AI-native and one-person-company entrepreneurship — the most radical test of the AI-native organization.",
          "zh-cn": "智能体赋能 AI 原生与一人公司（OPC）创业——对 AI 原生组织最极端的检验。",
        },
        prompts: {
          en: ["The one-person-company stack", "What founders never delegate", "What is scarce when execution is cheap"],
          "zh-cn": ["一人公司的技术栈", "创始人绝不委托什么", "当执行廉价，什么稀缺"],
        },
      },
    ],
    schedule: [
      { time: "09:00–09:30", title: { en: "Registration & coffee", "zh-cn": "签到与咖啡" } },
      { time: "09:30–10:30", title: { en: "Reshape: Building the AI-Native Organization", "zh-cn": "重塑：构建 AI 原生组织" }, note: { en: "Panel", "zh-cn": "圆桌讨论" } },
      { time: "10:30–11:00", title: { en: "Coffee break", "zh-cn": "茶歇" } },
      { time: "11:00–12:00", title: { en: "Rewire: Software Engineering Around Agents", "zh-cn": "重构：围绕智能体的软件工程" }, note: { en: "Panel", "zh-cn": "圆桌讨论" } },
      { time: "12:00–14:00", title: { en: "Lunch & live demos", "zh-cn": "午餐与现场演示" } },
      { time: "14:00–15:00", title: { en: "Reconnect: Agentic Engineering in Practice", "zh-cn": "重连：智能体工程应用实践" }, note: { en: "Panel", "zh-cn": "圆桌讨论" } },
      { time: "15:00–15:30", title: { en: "Coffee break", "zh-cn": "茶歇" } },
      { time: "15:30–16:30", title: { en: "Native: AI-Native Startups and the One-Person Company", "zh-cn": "原生：AI 原生创业与一人公司" }, note: { en: "Panel", "zh-cn": "圆桌讨论" } },
      { time: "17:30–19:00", title: { en: "Dinner", "zh-cn": "晚宴" } },
    ],
  },
];

export function getProgramDay(id: ProgramDay) {
  return PROGRAM_DAYS.find((day) => day.id === id)!;
}
