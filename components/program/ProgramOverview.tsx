"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { PROGRAM_DAYS } from "@/lib/program";

const copy = {
  en: { splitKicker: "TWO FOCUSED PROGRAMS", splitTitle: "One forum. Four connected topics across two days.", explore: "Explore this day" },
  "zh-cn": { splitKicker: "两日议题", splitTitle: "一个论坛，四个议题，两天展开。", explore: "进入当天议程" },
};

/** Shared by the homepage and the Chinese typography preview. */
export function ProgramOverview() {
  const { locale } = useTranslation();
  const c = copy[locale];
  return (
<section id="programs" className="border-y border-foreground/20 bg-surface px-5 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div>
            <div>
              <p className="section-kicker">{c.splitKicker}</p>
              <h2 className="subsection-title mt-4 max-w-3xl">{c.splitTitle}</h2>
            </div>
          </div>

          <div className="mt-10 space-y-8">
            {PROGRAM_DAYS.map((day) => (
              <section
                key={day.id}
                id={`${day.id === "open" ? "open-source" : "enterprise"}-day`}
                className={`program-overview-day program-overview-day-${day.id} scroll-mt-24`}
              >
                <header className="program-overview-day-header">
                  <span className={`editorial-type text-[clamp(4rem,7vw,6rem)] leading-[0.8] ${day.id === "open" ? "text-day-one" : "text-enterprise"}`}>
                    {day.dateNumber}
                  </span>
                  <div>
                    <p className={`text-sm font-black uppercase tracking-[0.14em] ${day.id === "open" ? "text-day-one" : "text-enterprise"}`}>
                      {day.dateLabel[locale]} · {day.shortName[locale]}
                    </p>
                    <h3 className="editorial-type mt-3 max-w-4xl text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.04] tracking-[-0.03em]">
                      {day.title[locale]}
                    </h3>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{day.deck[locale]}</p>
                  </div>
                  <Link href={`/${locale}${day.route}`} className="button-ink group self-start">
                    {c.explore}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Link>
                </header>

                <div className="grid gap-4 lg:grid-cols-2">
                  {day.topics.map((topic) => (
                    <Link
                      key={topic.slug}
                      id={`topic-${topic.slug}`}
                      href={`/${locale}${day.route}#${topic.slug}`}
                      className={`topic-card topic-card-${day.id} group flex min-h-[230px] flex-col border border-foreground/20 p-6 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-open md:p-7`}
                    >
                      <div className="flex items-start justify-between gap-5">
                        <span className={`font-mono text-sm font-bold ${day.id === "open" ? "text-day-one" : "text-enterprise"}`}>{topic.number}</span>
                        <ArrowUpRight className={`h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 ${day.id === "open" ? "text-day-one" : "text-enterprise"}`} />
                      </div>
                      <h4 className="editorial-type mt-4 text-[clamp(1.9rem,2.7vw,2.4rem)] leading-[1.04]">{topic.title[locale]}</h4>
                      <p className="mt-3 text-[15px] font-semibold leading-snug text-muted-foreground">{topic.subtitle[locale]}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {topic.prompts[locale].slice(0, 2).map((prompt) => (
                          <li key={prompt} className="border border-foreground/20 px-3 py-1.5 text-sm font-semibold">{prompt}</li>
                        ))}
                      </ul>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
  );
}
