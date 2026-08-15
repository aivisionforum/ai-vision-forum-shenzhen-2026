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
    route: "#open-source-day",
    dateNumber: "14",
    dateLabel: { en: "OCT · WEDNESDAY", "zh-cn": "10 月 14 日 · 星期三" },
    audience: { en: "PROGRAM LENS · OPEN SOURCE", "zh-cn": "开源议题" },
    shortName: { en: "Open Source Day", "zh-cn": "开源日" },
    title: { en: "Who owns the foundations?", "zh-cn": "谁来共同建设基础设施？" },
    deck: {
      en: "The first program lens examines the shared foundations of the agent era, from open-source trust to a neutral Mobile Agentic OS.",
      "zh-cn": "这一天聚焦智能体时代的公共基础：从开源信任，到中立的 Mobile Agentic OS。",
    },
    question: {
      en: "How can open source remain trustworthy, sustainable, and genuinely open when agents become contributors — and operating systems become agentic?",
      "zh-cn": "当智能体开始贡献代码，操作系统也开始围绕智能体演进，开源如何继续保持可信、可持续和真正开放？",
    },
    participants: {
      en: "Maintainers · CTOs · Foundations · Founders · Researchers · Engineering leaders",
      "zh-cn": "维护者 · CTO · 基金会 · 创始人 · 研究者 · 工程负责人",
    },
    topics: [
      {
        slug: "open-source",
        number: "01",
        title: { en: "Open Source in the Agent Era", "zh-cn": "智能体时代的开源" },
        subtitle: { en: "Trust, provenance, sustainability", "zh-cn": "信任、溯源与可持续性" },
        description: {
          en: "Rebuild the social and technical contract of open source for AI-generated contributions.",
          "zh-cn": "面对大量 AI 生成的代码贡献，重新建立开源社区的技术规范与协作共识。",
        },
        prompts: {
          en: ["AI-BOM and provenance", "Trusted contribution pipelines", "Maintainer sustainability"],
          "zh-cn": ["AI-BOM 与溯源", "可信贡献流程", "维护者可持续性"],
        },
      },
      {
        slug: "mobile-agentic-os",
        number: "02",
        title: { en: "Mobile Agentic OS", "zh-cn": "Mobile Agentic OS（移动智能体操作系统）" },
        subtitle: { en: "A neutral base for agentic mobile computing", "zh-cn": "智能体移动计算的中立底座" },
        description: {
          en: "Align mobile Linux projects and communities around vendor-neutral shared infrastructure.",
          "zh-cn": "让移动 Linux 项目与社区围绕厂商中立的共享基础设施协同。",
        },
        prompts: {
          en: ["Neutral OS base", "On-device agents", "Distro and community alignment"],
          "zh-cn": ["中立 OS 底座", "端侧智能体", "发行版与社区协同"],
        },
      },
    ],
    schedule: [
      { time: "09:00", title: { en: "Registration & coffee", "zh-cn": "签到与咖啡" } },
      { time: "09:30", title: { en: "Opening keynote: Human Agency in the Agent Era", "zh-cn": "开幕主旨演讲：智能体时代，人的主体性何在" } },
      { time: "10:00", title: { en: "Open Source in the Agent Era", "zh-cn": "智能体时代的开源" }, note: { en: "Keynote + panel", "zh-cn": "主旨演讲 + 圆桌讨论" } },
      { time: "11:30", title: { en: "Mobile Agentic OS", "zh-cn": "Mobile Agentic OS（移动智能体操作系统）" }, note: { en: "Keynote + panel", "zh-cn": "主旨演讲 + 圆桌讨论" } },
      { time: "12:40", title: { en: "Lunch", "zh-cn": "午餐" } },
      { time: "14:00", title: { en: "Two working rooms", "zh-cn": "两场专题工作坊" }, note: { en: "Open-source trust · Shared mobile base", "zh-cn": "开源信任 · 共享移动底座" } },
      { time: "16:00", title: { en: "Report-backs & Day 2 preview", "zh-cn": "成果汇报与次日预告" } },
      { time: "18:30", title: { en: "Welcome dinner", "zh-cn": "欢迎晚宴" } },
    ],
  },
  {
    id: "enterprise",
    route: "#enterprise-day",
    dateNumber: "15",
    dateLabel: { en: "OCT · THURSDAY", "zh-cn": "10 月 15 日 · 星期四" },
    audience: { en: "PROGRAM LENS · ENTERPRISE", "zh-cn": "企业议题" },
    shortName: { en: "Enterprise Day", "zh-cn": "企业日" },
    title: { en: "How does the company change?", "zh-cn": "企业如何真正改变？" },
    deck: {
      en: "The enterprise program lens examines how software delivery and organizational design change around capable agents.",
      "zh-cn": "这一天讨论智能体如何改变软件交付，以及企业应如何重新设计组织。",
    },
    question: {
      en: "When agents can plan, build, and operate software, what should engineering leaders redesign — and what remains irreducibly human?",
      "zh-cn": "当智能体能够规划、构建和运行软件，工程负责人需要重新设计什么？又有哪些判断与责任必须由人承担？",
    },
    participants: {
      en: "Maintainers · CTOs · Foundations · Founders · Researchers · Engineering leaders",
      "zh-cn": "维护者 · CTO · 基金会 · 创始人 · 研究者 · 工程负责人",
    },
    topics: [
      {
        slug: "agentic-engineering",
        number: "01",
        title: { en: "Agentic Software Engineering", "zh-cn": "智能体软件工程" },
        subtitle: { en: "From coding assistants to delivery systems", "zh-cn": "从编程助手到交付系统" },
        description: {
          en: "Define the engineering discipline for agents that plan, code, test, and ship against intent.",
          "zh-cn": "探索智能体根据人的目标完成规划、编码、测试和交付所需要的新工程方法。",
        },
        prompts: {
          en: ["Spec-driven development", "Agent swarms", "Harness engineering"],
          "zh-cn": ["规范驱动开发", "多智能体协作", "智能体运行框架"],
        },
      },
      {
        slug: "ai-native-org",
        number: "02",
        title: { en: "AI-Native Organization", "zh-cn": "AI 原生组织" },
        subtitle: { en: "From hierarchy to adaptive systems", "zh-cn": "从层级结构到自适应系统" },
        description: {
          en: "Redesign judgment, context, accountability, and coordination for organizations with agents in the loop.",
          "zh-cn": "当智能体深度参与工作，重新思考组织中的决策、信息流动、责任和协作方式。",
        },
        prompts: {
          en: ["Judgment distribution", "Context flow", "The agentic economy"],
          "zh-cn": ["决策权下放", "信息流动", "智能体经济"],
        },
      },
    ],
    schedule: [
      { time: "09:00", title: { en: "The Agentic Economy", "zh-cn": "智能体经济" }, note: { en: "Opening keynote", "zh-cn": "开场主旨演讲" } },
      { time: "09:20", title: { en: "Agentic Software Engineering", "zh-cn": "智能体软件工程" }, note: { en: "Keynote + panel", "zh-cn": "主旨演讲 + 圆桌讨论" } },
      { time: "11:10", title: { en: "The AI-Native Organization", "zh-cn": "AI 原生组织" }, note: { en: "Keynote + panel", "zh-cn": "主旨演讲 + 圆桌讨论" } },
      { time: "12:30", title: { en: "Lunch & live demos", "zh-cn": "午餐与现场演示" } },
      { time: "14:00", title: { en: "Two working rooms", "zh-cn": "两场专题工作坊" }, note: { en: "Engineering systems · Organization design", "zh-cn": "工程体系 · 组织设计" } },
      { time: "16:00", title: { en: "Report-backs & closing synthesis", "zh-cn": "成果汇报与闭幕总结" } },
      { time: "17:30", title: { en: "Closing cruise to Shenzhen", "zh-cn": "乘船前往深圳" }, note: { en: "Zhuhai → Shekou", "zh-cn": "珠海 → 蛇口" } },
    ],
  },
];

export function getProgramDay(id: ProgramDay) {
  return PROGRAM_DAYS.find((day) => day.id === id)!;
}
