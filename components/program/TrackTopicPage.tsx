"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { PROGRAM_DAYS } from "@/lib/program";

const copy = {
  en: {
    kicker: "TOPIC BRIEF",
    prompts: "Working questions",
    backToDay: "Back to",
    ctaEyebrow: "INVITATION-ONLY WORKING FORUM",
    ctaButton: "Request an invitation",
  },
  "zh-cn": {
    kicker: "专题简介",
    prompts: "工作议题",
    backToDay: "返回",
    ctaEyebrow: "仅限受邀参加的工作论坛",
    ctaButton: "申请邀请",
  },
} as const;

export function TrackTopicPage({ slug }: { slug: string }) {
  const { locale } = useTranslation();
  const c = copy[locale];

  const match = PROGRAM_DAYS.flatMap((day) =>
    day.topics.map((topic) => ({ day, topic }))
  ).find(({ topic }) => topic.slug === slug);

  if (!match) return null;
  const { day, topic } = match;

  return (
    <main className="px-5 py-20 md:px-10 md:py-28 lg:px-16">
      <div className="mx-auto max-w-[1080px]">
        <p className="section-kicker">{c.kicker} · {day.dateLabel[locale]}</p>
        <div className="mt-6 flex items-start justify-between gap-6">
          <h1 className="editorial-type text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.04] tracking-[-0.025em]">
            {topic.title[locale]}
          </h1>
          <span className="editorial-type hidden text-7xl text-muted-foreground md:block">{topic.number}</span>
        </div>
        <p className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-muted-foreground">
          {topic.subtitle[locale]}
        </p>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed">{topic.description[locale]}</p>

        <h2 className="section-title mt-16 border-b-2 border-foreground pb-4">{c.prompts}</h2>
        <ul className="border-t border-foreground">
          {topic.prompts[locale].map((prompt) => (
            <li key={prompt} className="border-b border-foreground/25 py-4 text-base font-semibold">
              {prompt}
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-wrap items-center gap-6">
          <Link href={`/${locale}${day.route}`} className="link-arrow">
            <ArrowLeft className="h-4 w-4" /> {c.backToDay} {day.shortName[locale]}
          </Link>
          <a href="https://register.gosim.org/" target="_blank" rel="noopener noreferrer" className="button-ink group">
            {c.ctaButton} <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{c.ctaEyebrow}</p>
      </div>
    </main>
  );
}
