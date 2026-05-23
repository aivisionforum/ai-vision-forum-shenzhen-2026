"use client";

import Link from "next/link";
import { ArrowLeft, GraduationCap, FileText, Brain, MessageCircle, Layers } from "lucide-react";

const REPORTS = [
  {
    file: "/reports/05_commonalities_analysis_en.html",
    fileZh: "/reports/05_commonalities_analysis.html",
    titleEn: "Commonalities of Feynman, Socrates, and Piaget",
    summary:
      "A structural analysis of three pedagogical traditions across two and a half millennia, identifying nine shared commitments — learner as active constructor, cognitive conflict as catalyst, metacognition, depth over coverage, individualization, dialogic interaction, simplification through analogy, the teacher as guide, and intrinsic motivation.",
    icon: <Brain className="h-7 w-7 text-primary" />,
    label: "Theory · Comparative Analysis",
  },
  {
    file: "/reports/07_ai_transforming_education_en.html",
    fileZh: "/reports/07_ai_transforming_education.html",
    titleEn: "How AI Transforms Educational Implementation",
    summary:
      "Maps the seven structural barriers that have prevented these theories from scaling — teacher supply, time, assessment, cost, culture — onto specific capabilities of large language models. Argues AI is the first technology able to deliver high-quality, personalized pedagogical interaction without proportional human cost.",
    icon: <MessageCircle className="h-7 w-7 text-primary" />,
    label: "Practice · LLM Capabilities",
  },
  {
    file: "/reports/08_openclaw_architecture_paper_en.html",
    fileZh: "/reports/08_openclaw_architecture_paper.html",
    titleEn: "From Socrates' Daimon to Digital Daimon",
    summary:
      "A technical architecture paper. The Assistant paradigm — stateless, reactive, identity-less — cannot host the relationships these theories require. A Digital Daimon, built as a persistent agent with memory, autonomous intervention, deep learner understanding, and self-evolution, can. Six architectural properties, with their mapping to OpenClaw and to each pedagogical theory.",
    icon: <Layers className="h-7 w-7 text-primary" />,
    label: "Architecture · Persistent Agents",
  },
];

export default function EducationInitiativePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative px-4 pt-32 pb-12 overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/10">
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
            <GraduationCap className="h-14 w-14 text-primary" />
          </div>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-gradient-primary">AI &amp; Education Research</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Why the great theories of learning have never reached every learner — and what changes when the agent, not the assistant, becomes the unit of educational software.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pt-4 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <p className="mb-6 text-lg text-foreground/90">
              For more than two thousand years, our deepest insights about how people learn have come from a small set of traditions: Socrates&apos; dialogic method in 5th-century Athens, Piaget&apos;s constructivist account of cognitive development, Feynman&apos;s &ldquo;teach-it-to-test-it&rdquo; technique. They differ in vocabulary and era, but they converge on the same picture — the learner is an active constructor of knowledge; cognitive conflict drives change; understanding deepens through dialogue; every learner needs an interlocutor who knows them.
            </p>
            <p className="mb-6 text-muted-foreground">
              These ideas are universally admired. They are almost never implemented at scale. The reason is structural, not philosophical: each method requires a sustained one-to-one relationship with someone who knows the learner well, has unbounded patience, and can adapt in real time. Industrial education was built on the opposite assumption — one teacher, many students, fixed pace, standardized assessment. The result is a two-millennia gap between what we know about learning and what classrooms can deliver.
            </p>
            <p className="text-muted-foreground">
              Agentic AI changes the constraint. A persistent agent — one that holds memory, intervenes on its own initiative, deepens its model of the learner over time, and runs at near-zero marginal cost — is the first technology in human history that can host the kind of relationship these theories require. It is not a faster textbook. It is the missing implementation layer. The three reports below trace the argument: from the shared structure of the classical theories, to the specific AI capabilities that unlock each one, to a concrete architecture for the agents that would carry them.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-2 text-3xl font-bold">Featured Reports</h2>
          <p className="mb-10 text-muted-foreground">
            A three-part research arc — theory, practice, architecture. English versions below; the original Chinese is linked from each card.
          </p>

          <div className="space-y-6">
            {REPORTS.map((report, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary hover:shadow-2xl"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3">
                    {report.icon}
                  </div>
                  <div className="flex-1">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-accent">
                      {report.label}
                    </p>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors md:text-2xl">
                      {report.titleEn}
                    </h3>
                  </div>
                </div>

                <p className="mb-5 text-muted-foreground">{report.summary}</p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <a
                    href={report.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Read full report (English)</span>
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </a>
                  <a
                    href={report.fileZh}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                    lang="zh"
                  >
                    <span>中文原版</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 p-12">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              From assistants to daimons
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Education has always been a relationship problem disguised as a content problem. The work of the next decade is not to put more content in front of learners — it is to give every learner a persistent companion that knows them, asks the right question at the right time, and grows with them over years.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
