"use client";

import Link from "next/link";
import { ArrowLeft, ScrollText, Cpu, Globe2, Network, Users2, ListChecks } from "lucide-react";

const PRINCIPLES = [
  {
    roman: "I.",
    icon: <Cpu className="h-7 w-7 text-primary" />,
    title: "The Agentic Era Requires New Infrastructure",
    body: "We recognize that the world is entering a new computing paradigm — the Agentic Era. The LAMP and Cloud eras assumed humans as the primary actors. Autonomous agents — operating continuously, acting on behalf of others, consuming resources at scale — require new models for identity, authorization, and economics.",
  },
  {
    roman: "II.",
    icon: <Globe2 className="h-7 w-7 text-primary" />,
    title: "AI Compute Should Be a Public Good",
    body: "We believe that AI compute is becoming critical infrastructure — as essential as electricity — and should be broadly accessible to foster innovation, education, and open source sustainability. The Open Token model offers a concrete, operational path toward AI compute as a digital public good: a bridge connecting token donors (LLM providers) with organizations that need compute — open source projects, researchers, educators, and civil society.",
  },
  {
    roman: "III.",
    icon: <Network className="h-7 w-7 text-primary" />,
    title: "A Healthy Agentic Ecosystem Benefits All",
    body: "We observe that a thriving agentic ecosystem creates shared value: LLM providers benefit from increased token consumption and developer adoption; open source projects gain sustainable funding; society benefits from accessible AI infrastructure. This is not a zero-sum dynamic — broader access grows the ecosystem for everyone.",
    extra:
      "Leading AI organizations have already demonstrated that structured compute access programs generate real returns in goodwill, ecosystem development, and community trust. Open Token builds on this precedent with a neutral, open governance model that no single vendor controls.",
  },
  {
    roman: "IV.",
    icon: <Users2 className="h-7 w-7 text-primary" />,
    title: "Multi-Stakeholder Collaboration Is Essential",
    body: "We affirm that building trusted agentic AI infrastructure requires active collaboration across sectors: LLM providers, open source foundations, international organizations, academia, and civil society each bring capabilities the others lack. No single actor can do this alone. Progress comes from working together on concrete programs that demonstrate what collaboration can produce.",
  },
];

const NEXT_STEPS = [
  "Grow Open Token from a community initiative into a structured, sustainable program with clear governance, connecting token donors (LLM providers) with open source projects, educational institutions, and researchers seeking compute support.",
  "Secure sustained, multi-cycle token donation commitments from LLM providers — piloting two or three recurring partnerships with open source foundations as proof of model, building toward a self-sustaining network.",
  "Invite broader participation from additional token donors and recipient organizations across regions and sectors.",
];

const SIGN_LINKS = [
  { label: "aosf.ai", href: "https://aosf.ai" },
  { label: "open-token.org", href: "https://open-token.org" },
  { label: "visionforum.ai", href: "https://visionforum.ai" },
];

export default function ParisInitiativePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative px-4 pt-32 pb-12 overflow-hidden bg-gradient-to-br from-accent/15 via-background to-primary/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="mb-6 flex justify-center">
            <ScrollText className="h-14 w-14 text-accent" />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            The Paris Initiative
          </p>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-gradient-primary">
              Consensus Statement on Agentic AI Infrastructure
            </span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            AI Vision Forum Paris &middot; May 4, 2026
          </p>
        </div>
      </section>

      {/* Preamble */}
      <section className="pt-4 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-8 md:p-12">
            <p className="text-lg text-foreground/90 md:text-xl">
              The following principles reflect consensus reached at AI Vision Forum Paris 2026 on the development of open, trusted, and sustainable agentic AI infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {PRINCIPLES.map((p, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-8 md:p-10 transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3">
                    {p.icon}
                  </div>
                  <div>
                    <p className="mb-1 font-mono text-sm font-bold text-accent">{p.roman}</p>
                    <h2 className="text-2xl font-bold md:text-3xl">{p.title}</h2>
                  </div>
                </div>
                <p className="text-muted-foreground md:text-lg">{p.body}</p>
                {p.extra && (
                  <p className="mt-4 text-muted-foreground md:text-lg">{p.extra}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <div className="mb-6 flex items-center gap-3">
              <ListChecks className="h-7 w-7 text-primary" />
              <h2 className="text-2xl font-bold md:text-3xl">Next Steps</h2>
            </div>
            <p className="mb-8 text-muted-foreground md:text-lg">
              Based on this consensus, participants support the formation of a Preparatory Working Group to pursue the following goals:
            </p>
            <ol className="space-y-5">
              {NEXT_STEPS.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 font-mono text-sm font-bold text-accent">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-muted-foreground md:text-lg">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Signature */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border-2 border-accent/40 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 p-12">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {SIGN_LINKS.map((link, i) => (
                <span key={link.label} className="flex items-center gap-x-6">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-primary hover:underline md:text-lg"
                  >
                    {link.label}
                  </a>
                  {i < SIGN_LINKS.length - 1 && (
                    <span className="text-muted-foreground">|</span>
                  )}
                </span>
              ))}
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Paris &middot; May 4, 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
