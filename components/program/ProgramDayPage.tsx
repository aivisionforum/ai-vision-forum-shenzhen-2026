"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { getProgramDay, type ProgramDay } from "@/lib/program";

const copy = {
  en: {
    back: "Both program days",
    question: "The working question",
    who: "Who should be in the room",
    topics: "Working themes",
    topicLink: "Read the topic brief",
    schedule: "Day program",
    scheduleNote: "Program subject to confirmation. Simultaneous interpretation in English and Chinese.",
    ctaEyebrow: "INVITATION-ONLY WORKING FORUM",
    ctaTitle: "Join the room where your decisions are being shaped.",
    ctaBody: "100–150 participants · Chatham House Rule · Zhuhai, China",
    ctaButton: "Request an invitation",
    nextDay: "Continue to the other day",
  },
  cn: {
    back: "返回两日议程",
    question: "本日核心问题",
    who: "参与者",
    topics: "专题议题",
    topicLink: "查看专题详情",
    schedule: "当日议程",
    scheduleNote: "日程以最终确认为准，并提供中英同声传译。",
    ctaEyebrow: "仅限受邀参加的工作论坛",
    ctaTitle: "参与讨论，把问题带进现场。",
    ctaBody: "100–150 位受邀嘉宾 · 查塔姆宫规则 · 中国珠海",
    ctaButton: "申请邀请",
    nextDay: "继续查看另一天",
  },
} as const;

export function ProgramDayPage({ dayId }: { dayId: ProgramDay }) {
  const { locale } = useTranslation();
  const c = copy[locale];
  const day = getProgramDay(dayId);
  const otherDay = getProgramDay(dayId === "open" ? "enterprise" : "open");
  const accentClass = day.id === "open" ? "text-open" : "text-enterprise";
  const blockClass = day.id === "open" ? "bg-open text-white" : "bg-enterprise text-white";

  return (
    <main className="bg-background pt-24 text-foreground">
      <section className="border-b border-foreground px-5 pb-16 pt-10 md:px-10 md:pb-24 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <Link href="/#programs" className="link-arrow mb-16">
            <ArrowLeft className="h-4 w-4" /> {c.back}
          </Link>

          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
            <div>
              <span className={`editorial-type block text-[clamp(4.5rem,9vw,7rem)] leading-[0.82] ${accentClass}`}>
                {day.dateNumber}
              </span>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em]">{day.dateLabel[locale]}</p>
            </div>
            <div>
              <p className={`mb-5 text-sm font-black uppercase tracking-[0.16em] ${accentClass}`}>{day.audience[locale]}</p>
              <h1 className="editorial-type text-[clamp(3.2rem,6vw,5.8rem)] leading-[0.98] tracking-[-0.03em]">
                {day.shortName[locale]}
              </h1>
              <p className="mt-8 max-w-3xl text-xl font-medium leading-relaxed md:text-2xl">{day.deck[locale]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2">
          <div className={`${blockClass} flex min-h-[360px] flex-col justify-between p-7 md:p-10`}>
            <p className="text-sm font-black uppercase tracking-[0.16em] opacity-80">{c.question}</p>
            <p className="editorial-type text-[clamp(2.1rem,3.8vw,3.4rem)] leading-[1.08] tracking-[-0.02em]">“{day.question[locale]}”</p>
          </div>
          <div className="flex min-h-[360px] flex-col justify-between border border-foreground bg-white p-7 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-muted-foreground">{c.who}</p>
            <p className="editorial-type text-[clamp(2.1rem,3.8vw,3.4rem)] leading-tight tracking-[-0.02em]">{day.participants[locale]}</p>
          </div>
        </div>
      </section>

      <section id="topics" className="border-y border-foreground bg-paper px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex items-end justify-between border-b-2 border-foreground pb-5">
            <h2 className="section-title">{c.topics}</h2>
            <span className="font-mono text-sm font-bold">02</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {day.topics.map((topic) => (
              <article key={topic.slug} className="flex min-h-[460px] flex-col border border-foreground/45 bg-background p-7 md:p-10">
                <div className="flex items-start justify-between">
                  <span className={`editorial-type text-6xl ${accentClass}`}>{topic.number}</span>
                  <span className="text-sm font-bold uppercase tracking-[0.12em] text-muted-foreground">{topic.subtitle[locale]}</span>
                </div>
                <div className="mt-auto pt-16">
                  <h3 className="editorial-type max-w-xl text-[clamp(2.3rem,4vw,3.4rem)] leading-[1.05] tracking-[-0.025em]">{topic.title[locale]}</h3>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{topic.description[locale]}</p>
                  <ul className="mt-8 border-t border-foreground">
                    {topic.prompts[locale].map((prompt) => (
                      <li key={prompt} className="border-b border-foreground/25 py-3 text-sm font-semibold">{prompt}</li>
                    ))}
                  </ul>
                  <Link href={`/tracks/${topic.slug}`} className="link-arrow mt-8">
                    {c.topicLink} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className={`section-kicker ${accentClass}`}>{day.dateLabel[locale]}</p>
            <h2 className="section-title mt-5">{c.schedule}</h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">{c.scheduleNote}</p>
          </div>
          <div className="border-t-2 border-foreground">
            {day.schedule.map((session) => (
              <div key={session.time} className="grid grid-cols-[76px_1fr] border-b border-foreground py-5 md:grid-cols-[110px_1fr]">
                <time className="font-mono text-sm font-bold tabular-nums">{session.time}</time>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:gap-8">
                  <span className="text-lg font-bold">{session.title[locale]}</span>
                  {session.note && <span className="text-sm text-muted-foreground sm:text-right">{session.note[locale]}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-foreground bg-white px-5 py-16 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">{c.nextDay}</p>
            <p className="editorial-type mt-2 text-4xl">{otherDay.shortName[locale]} · {otherDay.dateNumber} OCT</p>
          </div>
          <Link href={otherDay.route} className="button-ink group">
            {otherDay.shortName[locale]} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="border-t border-foreground/30 bg-white px-5 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 border-2 border-open p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-open">{c.ctaEyebrow}</p>
            <h2 className="editorial-type mt-6 max-w-5xl text-[clamp(2.75rem,5vw,4.5rem)] leading-[1.04] tracking-[-0.025em]">{c.ctaTitle}</h2>
            <p className="mt-8 text-muted-foreground">{c.ctaBody}</p>
          </div>
          <a href="https://register.gosim.org/" target="_blank" rel="noopener noreferrer" className="button-ink group">
            {c.ctaButton}
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </main>
  );
}
