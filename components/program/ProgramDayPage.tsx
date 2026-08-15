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
    pageLabel: "PROGRAM PAGE",
    videoLabel: "Forum perspective",
  },
  "zh-cn": {
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
    pageLabel: "专题页面",
    videoLabel: "论坛视角",
  },
} as const;

export function ProgramDayPage({ dayId }: { dayId: ProgramDay }) {
  const { locale } = useTranslation();
  const c = copy[locale];
  const day = getProgramDay(dayId);
  const otherDay = getProgramDay(dayId === "open" ? "enterprise" : "open");
  const accentClass = day.id === "open" ? "text-day-one" : "text-enterprise";
  const blockClass = day.id === "open" ? "bg-day-one text-white" : "bg-enterprise text-white";
  const ctaBorderClass = day.id === "open" ? "border-day-one" : "border-enterprise";
  const compactDate = (programDay: typeof day) => locale === "zh-cn"
    ? `${programDay.shortName[locale]} · 10月${programDay.dateNumber}日`
    : `${programDay.shortName[locale]} · ${programDay.dateNumber} OCT`;

  return (
    <main className={`program-day-page program-day-page-${day.id} text-foreground`}>
      <section className={`program-subhero program-subhero-${day.id}`}>
        <div className="program-subhero-shell">
          <div className="program-subhero-topline">
            <Link href={`/${locale}/#programs`} className="link-arrow">
              <ArrowLeft className="h-4 w-4" /> {c.back}
            </Link>
            <span>{day.dateLabel[locale]} · {c.pageLabel}</span>
          </div>

          <div className="program-subhero-grid">
            <div className="program-subhero-copy">
              <p className="program-subhero-label">
                <span>{day.id === "open" ? "01" : "02"}</span>
                {day.audience[locale]}
              </p>
              <h1>{day.title[locale]}</h1>
              <p className="program-subhero-deck">{day.deck[locale]}</p>
              <a href="#topics" className="button-ink group mt-7">
                {c.topics}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <figure className="program-subhero-media">
              <video autoPlay muted playsInline preload="metadata" poster="/images/hero-video-poster.jpg" aria-hidden="true">
                <source src="/videos/aivf-hero.mp4" type="video/mp4" />
              </video>
              <div className="program-subhero-tint" aria-hidden="true" />
              <figcaption>
                <span>{c.videoLabel}</span>
                <strong>{compactDate(day)}</strong>
              </figcaption>
            </figure>
          </div>

          <div className="program-subhero-tracks">
            <div className="program-subhero-tracks-meta">
              <span>{day.shortName[locale]}</span>
              <strong>02 TRACKS</strong>
            </div>
            <div className="program-subhero-track-grid">
              {day.topics.map((topic, index) => (
                <a
                  key={topic.slug}
                  href={`#${topic.slug}`}
                  className={`group program-subhero-track ${index > 0 ? "border-t border-foreground/15 md:border-l md:border-t-0" : ""}`}
                >
                  <span className={`editorial-type text-5xl leading-none ${accentClass}`}>{topic.number}</span>
                  <span className="min-w-0 flex-1">
                    <strong className="block text-base font-black tracking-[-0.01em]">{topic.title[locale]}</strong>
                    <span className="mt-1 block text-sm leading-snug text-muted-foreground">{topic.subtitle[locale]}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="program-day-context px-5 py-20 md:px-10 md:py-28 lg:px-16">
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

      <section id="topics" className="program-day-topics border-y border-foreground px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex items-end justify-between border-b-2 border-foreground pb-5">
            <h2 className="section-title">{c.topics}</h2>
            <span className="font-mono text-sm font-bold">02</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {day.topics.map((topic) => (
              <article key={topic.slug} id={topic.slug} className="program-day-topic-card flex min-h-[460px] scroll-mt-24 flex-col border border-foreground/45 p-7 md:p-10">
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

      <section id="schedule" className="program-day-schedule px-5 py-20 md:px-10 md:py-28 lg:px-16">
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
            <p className="editorial-type mt-2 text-4xl">{compactDate(otherDay)}</p>
          </div>
          <Link href={`/${locale}${otherDay.route}`} className="button-ink group">
            {otherDay.shortName[locale]} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="border-t border-foreground/30 bg-white px-5 py-20 md:px-10 md:py-24 lg:px-16">
        <div className={`mx-auto grid max-w-[1440px] gap-10 border-2 p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-end ${ctaBorderClass}`}>
          <div>
            <p className={`text-sm font-bold uppercase tracking-[0.16em] ${accentClass}`}>{c.ctaEyebrow}</p>
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
