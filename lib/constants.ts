// AI Vision Forum Shenzhen 2026 - Event Constants
// Forked from the Paris 2026 template — themed for the Shenzhen edition
// (Robotics & AI Hardware). Most copy is placeholder pending program-committee
// curation; the constants shape is preserved so components reuse cleanly.

export const EVENT_CONFIG = {
  name: "AI Vision Forum Shenzhen 2026",
  tagline: "Robotics & AI Hardware",
  guidingQuestion:
    "As physical AI moves from laboratory to factory floor, what governance, safety, and openness do we need at the hardware layer?",
  date: "2026-10-15", // placeholder — exact day TBC
  dateDisplay: "October 2026",
  location: {
    city: "Shenzhen",
    country: "China",
    venue: "",
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
    slug: "vibe-coding",
    title: "Embodied Agents",
    subtitle: "From simulation to safe deployment",
    icon: "laptop",
    description:
      "Sim-to-real pipelines, world models, and on-device decision-making for robotic agents operating outside controlled environments.",
    color: "secondary" as const,
    keywords: ["Sim-to-Real", "World Models", "On-Device Inference", "Safety Cases"] as const,
    highlight: true,
  },
  {
    id: 2,
    slug: "education",
    title: "Open Hardware for AI",
    subtitle: "Accelerators, edge silicon, and the open stack",
    icon: "graduation-cap",
    description:
      "Open silicon initiatives, accelerator interoperability, and what it takes to make frontier AI run beyond the latest chip generation.",
    color: "primary" as const,
    keywords: ["Open Silicon", "Edge Inference", "Compilers & DSLs", "Heterogeneous Compute"] as const,
    highlight: false,
  },
  {
    id: 3,
    slug: "governance",
    title: "Trusted Physical AI",
    subtitle: "Verification, identity, and incident response",
    icon: "scale",
    description:
      "Cryptographic verification, agent identity, and incident-response frameworks for AI systems that touch the physical world.",
    color: "accent" as const,
    keywords: ["Proof of Control", "Verifiable Identity", "Incident Response", "Safety Standards"] as const,
    highlight: false,
  },
  {
    id: 4,
    slug: "public-good",
    title: "Robotics as Public Infrastructure",
    subtitle: "Manufacturing, logistics, and shared platforms",
    icon: "globe",
    description:
      "How robotic and hardware platforms can be sustained as shared infrastructure rather than captured by single vendors.",
    color: "primary" as const,
    keywords: ["Open Platforms", "Shared Compute", "Supply-Chain Openness", "Global South Access"] as const,
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
export const COUNTDOWN_TARGET = new Date("2026-10-15T09:00:00+08:00");

// Outline subject to PC curation
export const SCHEDULE_OUTLINE = [
  { time: "08:30–09:00", title: "Registration & Coffee" },
  { time: "09:00–09:15", title: "Opening Remarks" },
  { time: "09:15–10:30", title: "Panel 1: Embodied Agents", subtitle: "From simulation to safe deployment", format: "Keynote + Panel" },
  { time: "10:30–10:45", title: "Break" },
  { time: "10:45–12:00", title: "Panel 2: Open Hardware for AI", subtitle: "Accelerators, edge silicon, and the open stack", format: "Keynote + Panel" },
  { time: "12:00–13:30", title: "Lunch + Hardware Showcase", subtitle: "Live demos from the Shenzhen hardware community" },
  { time: "13:30–14:45", title: "Panel 3: Trusted Physical AI", subtitle: "Verification, identity, and incident response", format: "Keynote + Panel" },
  { time: "14:45–15:00", title: "Break" },
  { time: "15:00–16:15", title: "Panel 4: Robotics as Public Infrastructure", subtitle: "Manufacturing, logistics, and shared platforms", format: "Keynote + Panel" },
  { time: "16:15–16:45", title: "Synthesis & Closing" },
  { time: "17:00–19:30", title: "Networking Dinner", subtitle: "Themed tables" },
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
