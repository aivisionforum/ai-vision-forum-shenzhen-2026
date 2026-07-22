// AI Vision Forum Shenzhen 2026 - Event Constants
// Forked from the Paris 2026 template — themed for the Shenzhen edition
// (Robotics & AI Hardware). Most copy is placeholder pending program-committee
// curation; the constants shape is preserved so components reuse cleanly.

export const EVENT_CONFIG = {
  name: "AI Vision Forum Shenzhen 2026",
  tagline: "Human Agency in the Agent Era",
  guidingQuestion:
    "When AI agents write most of the software, how do humans retain intent, decision-making, and accountability?",
  date: "2026-10-14",
  dateDisplay: "October 14–15, 2026",
  location: {
    city: "Zhuhai · Shenzhen",
    country: "China",
    venue: "Venue to be announced",
    colocated: "GOSIM Shenzhen 2026",
  },
  scale: "100–150 invited participants",
  format: "Invitation-only",
  rule: "Chatham House Rule",
  domain: "shenzhen2026.visionforum.ai",
  // Lifecycle state — flip to 'completed' post-event so the components in
  // /components/{media,report,tracks/PostEventPanelContent}.tsx light up.
  status: "upcoming" as "upcoming" | "completed",
  // Post-event asset placeholders (paths only — files don't exist until after the event)
  // PDF only — Word/.docx versions intentionally not produced.
  reportUrl: "/reports/forum-report.pdf",
  deepDiveAudioUrl: "/media/shenzhen-2026-deep-dive.mp3",
  recapVideoUrl: "/media/shenzhen-2026-overview.mp4",
  recapPosterUrl: "/images/og.png",
  ogImageUrl: "/images/og.png",
} as const;

export const TRACKS = [
  {
    id: 1,
    slug: "agentic-engineering",
    title: "Agentic Software Engineering",
    subtitle: "Theory and practice",
    icon: "laptop",
    description:
      "Agent swarms, agentic coding, spec-driven development, and harness engineering — what engineering discipline looks like when agents write most of the code.",
    color: "secondary" as const,
    keywords: ["Agent Swarms", "Spec-Driven Development", "Harness Engineering", "MCP / A2A"] as const,
    highlight: true,
  },
  {
    id: 2,
    slug: "ai-native-org",
    title: "The AI-Native Organization",
    subtitle: "From dinosaur to octopus",
    icon: "graduation-cap",
    description:
      "Judgment distribution, context flow, and organizational structures that sense and adapt — redefining enterprise management for the agent era.",
    color: "primary" as const,
    keywords: ["Octopus Organization", "Judgment Distribution", "Context Flow", "Agentic Economy"] as const,
    highlight: false,
  },
  {
    id: 3,
    slug: "open-source",
    title: "Open Source in the Agent Era",
    subtitle: "Survival and prosperity",
    icon: "globe",
    description:
      "How communities, forges, and foundations survive and thrive: AI-BOM and provenance, maintainer sustainability, and trust in AI-generated contributions.",
    color: "accent" as const,
    keywords: ["AI-BOM", "Provenance", "Maintainer Sustainability", "Trusted Contributions"] as const,
    highlight: false,
  },
] as const;

// Why Now: From digital agents to physical ones
export const WHY_NOW = {
  title: "Why Now: From Digital Agents to Physical Ones",
  intro:
    "Paris 2026 mapped the agentic transition at the software layer. Shenzhen 2026 follows that thread into hardware — embodied agents, open silicon, and the manufacturing capacity that decides who actually builds the next decade of AI.",
  shifts: [
    {
      id: 1,
      title: "Era 1 (2010s): Cloud-Hosted Models",
      description:
        "Frontier capability lived in a handful of hyperscaler data centres. Hardware was a procurement problem, not a strategic one.",
    },
    {
      id: 2,
      title: "Era 2 (Early 2020s): The Agentic Software Stack",
      description:
        "Open weights, agent orchestration, and the CLAW stack (Compute, LLMs, Agents, Workflow) democratised access to capability — but only on the chips of the moment.",
    },
    {
      id: 3,
      title: "Era 3 (Now): Physical AI",
      description:
        "Robotics, embodied agents, and edge inference push the centre of gravity back into the physical world. The next ten years' AI advantage will be set as much by manufacturing and silicon as by model architecture.",
    },
  ],
  coreInsight: {
    title: "The Core Question: Who Owns the Stack from Wafer to Workflow?",
    lamp: "The Paris forum established that open source must extend to all seven pillars (science, data, standards, source, weights, platform, hardware).",
    claw: "Shenzhen asks the harder question: when AI moves into physical systems, what does \"open\" mean for fabs, accelerators, sensors, and supply chains?",
    governanceGap:
      "Cryptographic verification and identity primitives developed for software agents need new forms when the agent is a physical machine acting on the world.",
  },
} as const;

export const VALUE_PROPOSITION = [
  {
    id: 1,
    title: "From software to silicon",
    description:
      "Extending the open-AI conversation from models and agents to the hardware substrate that runs them.",
  },
  {
    id: 2,
    title: "East–West dialogue",
    description:
      "Shenzhen is the world's manufacturing capital. The forum convenes engineers, founders, and policymakers across the silicon supply chain.",
  },
  {
    id: 3,
    title: "Continuity from Paris",
    description:
      "Carrying the CLAW stack, Seven Pillars of Open, and Paris Initiative forward into the hardware era.",
  },
  {
    id: 4,
    title: "Practical, not speculative",
    description:
      "Focused on what works in deployment now — sim-to-real, edge inference, verifiable identity for physical agents.",
  },
] as const;

export const REFERENCE_SITES = {
  mainSite: "https://visionforum.ai/",
  paris2026: "https://paris2026.visionforum.ai/",
  hangzhou2025: "https://forum.gosim.org/en/",
} as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/aivisionforum",
  twitter: "https://twitter.com/aivisionforum",
  linkedin: "https://www.linkedin.com/company/ai-vision-forum",
} as const;

export const EXPECTED_OUTCOMES = [
  "Joint position on open standards for embodied AI safety cases",
  "Working-group commitments around open accelerator interoperability",
  "Cross-border pilots for verifiable identity in physical AI systems",
  "Continuation of the Paris Initiative into the hardware layer",
] as const;

export const KEY_REFERENCES = [
  { title: "AI Vision Forum Paris 2026 — Forum Report", url: "https://paris2026.visionforum.ai/report/" },
  { title: "Open Compute Project", url: "https://www.opencompute.org/" },
  { title: "RISC-V International", url: "https://riscv.org/" },
  { title: "Embodied AI Workshop (CVPR)", url: "https://embodied-ai.org/" },
] as const;

// Countdown target — refined to a precise time once the venue is confirmed.
export const COUNTDOWN_TARGET = new Date("2026-10-14T12:00:00+08:00");

export const SCHEDULE_OUTLINE = [
  { time: "Oct 14 · 12:00–13:30", title: "Registration & Welcome Lunch" },
  { time: "Oct 14 · 13:30–14:00", title: "Opening Keynote: Human Agency in the Agent Era" },
  { time: "Oct 14 · 14:00–15:15", title: "Panel: Open Source in the Agent Era", subtitle: "Forges, foundations, communities", format: "Panel" },
  { time: "Oct 14 · 15:45–17:00", title: "Working Session: Trustworthy Open Source When Agents Write the Code", format: "Facilitated working session" },
  { time: "Oct 14 · 17:00–17:30", title: "Report-back & Day 2 Preview" },
  { time: "Oct 14 · 18:30", title: "Welcome Dinner" },
  { time: "Oct 15 · 09:00–09:20", title: "Keynote: The Agentic Economy" },
  { time: "Oct 15 · 09:20–10:40", title: "Agentic Software Engineering", subtitle: "Swarms, specs, and harnesses", format: "Keynote + Panel" },
  { time: "Oct 15 · 11:10–12:30", title: "Become an Octopus Organization", subtitle: "Designing the AI-native enterprise", format: "Keynote + Panel" },
  { time: "Oct 15 · 12:30–14:00", title: "Lunch & Live Demos" },
  { time: "Oct 15 · 14:00–15:30", title: "Split Working Tracks", subtitle: "Agentic engineering pipeline · AI-native reorganization", format: "Facilitated working sessions" },
  { time: "Oct 15 · 16:00–16:40", title: "Report-backs · Closing Synthesis · OAIC Introduction" },
  { time: "Oct 15 · 17:30–20:30", title: "Closing Cruise: Zhuhai → Shenzhen Shekou", subtitle: "Reception & buffet — arriving for GOSIM Shenzhen" },
] as const;

export const CORE_TOPICS = [
  { id: 1, topic: "Sim-to-Real", concept: "Embodiment", implication: "Closing the gap between simulator-trained agents and physical deployment" },
  { id: 2, topic: "Open Silicon", concept: "Hardware Openness", implication: "Extending open-source principles down to the accelerator layer" },
  { id: 3, topic: "Verifiable Physical AI", concept: "Trust", implication: "Cryptographic attestation for agents acting on the physical world" },
  { id: 4, topic: "Supply-Chain Openness", concept: "Public Goods", implication: "Robotics platforms as shared infrastructure, not vendor capture" },
  { id: 5, topic: "Edge Inference", concept: "Architecture", implication: "Sovereign and private AI workloads outside the hyperscaler" },
  { id: 6, topic: "Safety Cases", concept: "Governance", implication: "Translating EU AI Act-style obligations into physical-AI evidence" },
  { id: 7, topic: "Manufacturing Capacity", concept: "Geopolitics", implication: "Who actually builds the next decade of AI hardware" },
  { id: 8, topic: "Continuation of Paris Initiative", concept: "Continuity", implication: "Bringing the Open Token agenda into the hardware era" },
] as const;
