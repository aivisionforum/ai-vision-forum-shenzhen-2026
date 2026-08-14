"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Handshake,
  Landmark,
  Lock,
  MapPin,
  Plane,
  Users,
  X,
} from "lucide-react";
import { ForumJourneyMap } from "@/components/venue/ForumJourneyMap";
import { useTranslation } from "@/lib/i18n";
import type { Translations } from "@/lib/i18n";
import { EVENT_CONFIG } from "@/lib/constants";
import { PAST_ORGANIZATIONS } from "@/lib/past-organizations";
import { PROGRAM_DAYS } from "@/lib/program";

const copy = {
  en: {
    eyebrow: "14–15 OCTOBER 2026 · ZHUHAI, CHINA",
    heroTitle: "Architecting Human-AI Synergy.",
    intro: "Two days and four connected topics across open source, mobile, software engineering, and organizations.",
    primaryCta: "Explore topics",
    secondaryCta: "View schedule",
    dateLabel: "Date",
    placeLabel: "Place",
    formatLabel: "Format",
    dateValue: "14–15 October 2026",
    placeValue: "Zhuhai, China",
    formatValue: "Invitation-only · EN / 中文",
    aboutKicker: "ABOUT THE FORUM",
    guidingQuestion: "The central question",
    whyNow: "Why this conversation, now",
    forumModel: "The forum model",
    facts: "Forum facts",
    splitKicker: "TWO FOCUSED PROGRAMS",
    splitTitle: "One forum. Four connected topics across two days.",
    splitIntro:
      "The four topics are arranged under two program lenses: open source on October 14 and enterprise on October 15.",
    explore: "Explore this day",
    workingThemes: "Working themes",
    topicDetails: "Open brief",
    closeDetails: "Close topic brief",
    fullProgram: "Open the complete schedule",
    scheduleKicker: "PROGRAM HIGHLIGHTS",
    scheduleTitle: "The shape of two working days.",
    scheduleIntro:
      "Complete timings, formats, and working sessions for both days, shown together.",
    viewDay: "Day details",
    pastKicker: "FORUM LINEAGE",
    pastTitle: "A continuing conversation since 2025.",
    collaboratorsKicker: "PAST COLLABORATORS & PARTICIPATING ORGANIZATIONS",
    collaboratorsTitle: "The institutions already in the room.",
    collaboratorsIntro:
      "Universities, research labs, open-source foundations, standards bodies, and AI companies represented across earlier editions.",
    venueKicker: "VENUE & JOURNEY",
    venueTitle: "The forum takes place in Zhuhai.",
    venueLocation: "Zhuhai, China",
    invitationKicker: "14–15 OCTOBER · ZHUHAI, CHINA",
    invitationTitle: "Join a working room, not an audience.",
    invitationBody:
      "AI Vision Forum brings together 100–150 invited participants under the Chatham House Rule, with simultaneous interpretation in English and Chinese.",
    invitationButton: "Request an invitation",
    collaborationLabel: "IN CONJUNCTION WITH",
    collaborationName: "GOSIM SHENZHEN 2026",
  },
  cn: {
    eyebrow: "2026 年 10 月 14–15 日 · 中国珠海",
    heroTitle: "构建人机协同新范式",
    intro: "两天聚焦四个议题：开源、Mobile Agentic OS、智能体软件工程与 AI 原生组织。",
    primaryCta: "查看议题",
    secondaryCta: "查看日程",
    dateLabel: "日期",
    placeLabel: "地点",
    formatLabel: "形式",
    dateValue: "2026 年 10 月 14–15 日",
    placeValue: "中国 · 珠海",
    formatValue: "仅限受邀参加 · 中英同声传译",
    aboutKicker: "关于论坛",
    guidingQuestion: "核心问题",
    whyNow: "为什么是现在",
    forumModel: "讨论方式",
    facts: "论坛信息",
    splitKicker: "两日议题",
    splitTitle: "一个论坛，四个议题，两天展开。",
    splitIntro: "10 月 14 日聚焦开源与移动智能体操作系统；10 月 15 日讨论智能体软件工程与 AI 原生组织。",
    explore: "进入当天议程",
    workingThemes: "工作专题",
    topicDetails: "查看详情",
    closeDetails: "关闭专题详情",
    fullProgram: "展开完整日程",
    scheduleKicker: "议程重点",
    scheduleTitle: "两日完整议程",
    scheduleIntro: "两天的时间安排、讨论形式和工作会议一览。",
    viewDay: "当天详情",
    pastKicker: "论坛脉络",
    pastTitle: "一场始于 2025 年、延续至今的对话。",
    collaboratorsKicker: "往届参与机构",
    collaboratorsTitle: "往届活动参与机构",
    collaboratorsIntro: "往届参与者来自以下大学、研究机构、基金会与 AI 企业",
    venueKicker: "场地与行程",
    venueTitle: "两天论坛，均在珠海举行。",
    venueLocation: "中国 · 珠海",
    invitationKicker: "10 月 14–15 日 · 中国珠海",
    invitationTitle: "欢迎加入讨论。",
    invitationBody: "论坛邀请 100–150 位嘉宾参与，并采用查塔姆宫规则，现场提供中英同声传译。",
    invitationButton: "申请邀请",
    collaborationLabel: "联合举办",
    collaborationName: "GOSIM SHENZHEN 2026",
  },
} as const;

const pastEditions = [
  { url: "https://paris2026.visionforum.ai/", reportUrl: "https://paris2026.visionforum.ai/report/" },
  { url: "https://hangzhou2025.visionforum.ai/", reportUrl: "" },
  { url: "https://paris2025.gosim.org/os-ai-strategy-forum/", reportUrl: "" },
];

const TOPIC_MODAL_EXIT_MS = 420;

export default function Home() {
  const { locale, t } = useTranslation();
  const c = copy[locale];
  const gosimHref = locale === "cn"
    ? "https://shenzhen2026.gosim.org/zh/"
    : "https://shenzhen2026.gosim.org/?lang=en";
  const [activeTopicSlug, setActiveTopicSlug] = useState<string | null>(null);
  const [isTopicModalVisible, setIsTopicModalVisible] = useState(false);
  const [openAboutPanels, setOpenAboutPanels] = useState({ why: false, model: false });
  const topicModalClosingRef = useRef(false);
  const topicModalTimerRef = useRef<number | null>(null);
  const topicModalFrameRef = useRef<number | null>(null);
  const activeTrack = activeTopicSlug
    ? PROGRAM_DAYS.flatMap((day) => day.topics.map((topic) => ({ day, topic }))).find(
        ({ topic }) => topic.slug === activeTopicSlug,
      )
    : undefined;
  const activeDetail = activeTrack ? getTrackDetail(activeTrack.topic.slug, t) : undefined;

  const toggleAboutPanel = (panel: "why" | "model") => {
    setOpenAboutPanels((current) => ({ ...current, [panel]: !current[panel] }));
  };

  const openTopicModal = (slug: string) => {
    if (topicModalTimerRef.current !== null) window.clearTimeout(topicModalTimerRef.current);
    if (topicModalFrameRef.current !== null) window.cancelAnimationFrame(topicModalFrameRef.current);
    topicModalClosingRef.current = false;
    setIsTopicModalVisible(false);
    setActiveTopicSlug(slug);
    topicModalFrameRef.current = window.requestAnimationFrame(() => {
      topicModalFrameRef.current = window.requestAnimationFrame(() => {
        setIsTopicModalVisible(true);
        topicModalFrameRef.current = null;
      });
    });
  };

  const closeTopicModal = useCallback(() => {
    if (!activeTopicSlug || topicModalClosingRef.current) return;

    topicModalClosingRef.current = true;
    setIsTopicModalVisible(false);
    const exitDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : TOPIC_MODAL_EXIT_MS;
    topicModalTimerRef.current = window.setTimeout(() => {
      setActiveTopicSlug(null);
      topicModalClosingRef.current = false;
      topicModalTimerRef.current = null;
    }, exitDelay);
  }, [activeTopicSlug]);

  useLayoutEffect(() => {
    if (!activeTopicSlug) return;

    const root = document.documentElement;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = Math.max(0, window.innerWidth - root.clientWidth);
    const bodyPaddingRight = Number.parseFloat(window.getComputedStyle(document.body).paddingRight) || 0;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeTopicModal();
    };

    if (scrollbarWidth > 0) document.body.style.paddingRight = `${bodyPaddingRight + scrollbarWidth}px`;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      window.removeEventListener("keydown", closeOnEscape);
      if (topicModalTimerRef.current !== null) window.clearTimeout(topicModalTimerRef.current);
      if (topicModalFrameRef.current !== null) window.cancelAnimationFrame(topicModalFrameRef.current);
    };
  }, [activeTopicSlug, closeTopicModal]);

  return (
    <main className="bg-background text-foreground">
      <section className="hero-film">
        <video
          className="hero-film-media"
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster="/images/hero-video-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/aivf-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-film-wash" aria-hidden="true" />

        <div className="hero-film-content">
          <div className="max-w-[700px] pt-2 md:pt-8">
            <p className="section-kicker text-foreground/70">{c.eyebrow}</p>
            <h1 className="hero-event-title mt-5">
              <span className="hero-event-name">AI Vision Forum</span>
              <span className="hero-event-location">Shenzhen 2026</span>
            </h1>
            <p className="mt-6 max-w-[560px] text-[clamp(1.3rem,2vw,1.7rem)] font-semibold leading-[1.25] tracking-[-0.02em]">
              {c.heroTitle}
            </p>
            <p className="mt-3 max-w-[610px] text-base leading-relaxed text-foreground/72 md:text-lg">
              {c.intro}
            </p>
            <div className="hero-collaboration mt-7">
              <span className="hero-collaboration-label">{c.collaborationLabel}</span>
              <a href={gosimHref} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 font-black hover:underline">
                {c.collaborationName}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#programs" className="button-ink group">
                {c.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#schedule" className="button-outline bg-white/35 backdrop-blur-sm">{c.secondaryCta}</a>
            </div>
          </div>

          <div className="hero-program-panel">
            <div className="hero-program-meta">
              <span>{c.placeValue}</span>
              <span>{c.formatValue}</span>
            </div>
            <div className="grid md:grid-cols-2">
              {PROGRAM_DAYS.map((day, index) => (
                <Link
                  key={day.id}
                  href={day.route}
                  className={`group hero-program-day ${index > 0 ? "border-t border-foreground/15 md:border-l md:border-t-0" : ""}`}
                >
                  <span className={`editorial-type text-5xl leading-none ${day.id === "open" ? "text-open" : "text-enterprise"}`}>
                    {day.dateNumber}
                  </span>
                  <span className="min-w-0 flex-1">
                    <strong className="block text-base font-black tracking-[-0.01em]">
                      OCT · {day.shortName[locale]}
                    </strong>
                    <span className="mt-1 block text-sm leading-snug text-muted-foreground">
                      {day.topics.map((topic) => topic.title[locale]).join(" · ")}
                    </span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="section-kicker">{c.aboutKicker}</p>
              <h2 className="section-title mt-5">{t.about.title}</h2>
              <p className="mt-6 max-w-md text-xl font-medium leading-relaxed text-muted-foreground">{t.about.subtitle}</p>
            </div>

            <div className="border-t-2 border-foreground pt-6">
              <p className="section-kicker text-open">{c.guidingQuestion}</p>
              <blockquote className="editorial-type mt-5 text-[clamp(2rem,3.8vw,3.5rem)] leading-[1.08] tracking-[-0.025em]">
                “{t.about.guidingQuestion}”
              </blockquote>
              <p className="mt-5 text-lg text-muted-foreground">{t.about.guidingQuestionNote}</p>
            </div>
          </div>

          <div className="mt-16 border-y border-foreground">
            <section className="border-b border-foreground/30">
              <button
                type="button"
                aria-expanded={openAboutPanels.why}
                aria-controls="about-why-content"
                onClick={() => toggleAboutPanel("why")}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <div>
                  <p className="section-kicker text-open">{c.whyNow}</p>
                  <h3 className="editorial-type mt-2 text-3xl">{t.about.whyNowTitle}</h3>
                </div>
                <span className={`text-3xl font-light transition-transform duration-300 ${openAboutPanels.why ? "rotate-45" : ""}`}>+</span>
              </button>
              <div
                id="about-why-content"
                className={`about-disclosure ${openAboutPanels.why ? "about-disclosure-open" : ""}`}
                aria-hidden={!openAboutPanels.why}
              >
                <div className="about-disclosure-inner">
                  <div className="pb-8">
                    <p className="mb-6 max-w-3xl text-base leading-relaxed text-muted-foreground">{t.about.whyNowIntro}</p>
                    <div className="grid border border-foreground/30 md:grid-cols-3">
                      {t.about.whyNowShifts.map((shift, index) => (
                        <article key={shift.title} className={`p-5 ${index > 0 ? "border-t border-foreground/30 md:border-l md:border-t-0" : ""}`}>
                          <span className="font-mono text-sm font-bold text-open">0{index + 1}</span>
                          <h4 className="mt-5 text-xl font-bold">{shift.title}</h4>
                          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{shift.description}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <button
                type="button"
                aria-expanded={openAboutPanels.model}
                aria-controls="about-model-content"
                onClick={() => toggleAboutPanel("model")}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <div>
                  <p className="section-kicker text-enterprise">{c.forumModel}</p>
                  <h3 className="editorial-type mt-2 text-3xl">{t.about.valuePropositionTitle}</h3>
                </div>
                <span className={`text-3xl font-light transition-transform duration-300 ${openAboutPanels.model ? "rotate-45" : ""}`}>+</span>
              </button>
              <div
                id="about-model-content"
                className={`about-disclosure ${openAboutPanels.model ? "about-disclosure-open" : ""}`}
                aria-hidden={!openAboutPanels.model}
              >
                <div className="about-disclosure-inner">
                  <div className="grid gap-6 pb-8 md:grid-cols-2">
                    {t.about.valueProposition.map((item, index) => (
                      <article key={item.title} className="border-t border-foreground/30 pt-5">
                        <span className="font-mono text-sm font-bold text-enterprise">0{index + 1}</span>
                        <h4 className="mt-3 text-xl font-bold">{item.title}</h4>
                        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-16">
            <p className="section-kicker mb-6">{c.facts}</p>
            <div className="forum-facts grid border-y border-foreground md:grid-cols-4">
              <Fact icon={<Users />} value="100–150" label={t.about.invitedParticipants} />
              <Fact icon={<Lock />} value={t.about.inviteOnly} label={t.about.exclusiveAccess} />
              <Fact icon={<CalendarDays />} value="14–15 OCT" label={c.placeValue} />
              <Fact icon={<Handshake />} value="GOSIM" label={t.about.colocated} />
            </div>
          </div>

          <div className="mt-14 grid gap-6 border border-foreground/30 bg-card p-6 md:grid-cols-[160px_1fr] md:p-8">
            <div className="flex items-center gap-3 font-bold">
              <Lock className="h-5 w-5 text-enterprise" />
              {t.about.chathamHouseTitle}
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">{t.about.chathamHouseDescription}</p>
          </div>
        </div>
      </section>

      <section id="programs" className="border-y border-foreground/20 bg-surface px-5 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div>
            <div>
              <p className="section-kicker">{c.splitKicker}</p>
              <h2 className="subsection-title mt-4 max-w-3xl">{c.splitTitle}</h2>
            </div>
          </div>

          <div className="mt-10 space-y-5">
            {PROGRAM_DAYS.map((day) => (
              <section key={day.id} id={`${day.id === "open" ? "open-source" : "enterprise"}-day`} className="scroll-mt-24">
                <header className={`mb-4 border-b pb-3 program-day-header-${day.id}`}>
                  <div className="flex items-baseline gap-4">
                    <span className={`editorial-type text-5xl leading-none ${day.id === "open" ? "text-open" : "text-enterprise"}`}>{day.dateNumber}</span>
                    <h3 className="text-xl font-black">{day.shortName[locale]}</h3>
                  </div>
                </header>

                <div className="grid gap-4 lg:grid-cols-2">
                  {day.topics.map((topic) => (
                    <button
                      key={topic.slug}
                      id={`topic-${topic.slug}`}
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded={activeTopicSlug === topic.slug}
                      onClick={() => openTopicModal(topic.slug)}
                      className={`topic-card topic-card-${day.id} group flex min-h-[230px] flex-col border border-foreground/20 p-6 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-open md:p-7`}
                    >
                      <div className="flex items-start justify-between gap-5">
                        <span className={`font-mono text-sm font-bold ${day.id === "open" ? "text-open" : "text-enterprise"}`}>{topic.number}</span>
                        <ArrowUpRight className={`h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 ${day.id === "open" ? "text-open" : "text-enterprise"}`} />
                      </div>
                      <h4 className="editorial-type mt-4 text-[clamp(1.9rem,2.7vw,2.4rem)] leading-[1.04]">{topic.title[locale]}</h4>
                      <p className="mt-3 text-[15px] font-semibold leading-snug text-muted-foreground">{topic.subtitle[locale]}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {topic.prompts[locale].slice(0, 2).map((prompt) => (
                          <li key={prompt} className="border border-foreground/20 px-3 py-1.5 text-sm font-semibold">{prompt}</li>
                        ))}
                      </ul>
                    </button>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {activeTrack && activeDetail && (
        <div
          className="topic-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          data-state={isTopicModalVisible ? "open" : "closed"}
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) closeTopicModal();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="topic-dialog-title"
            className={`topic-modal-panel topic-modal-panel-${activeTrack.day.id} max-h-[88vh] w-full max-w-[1040px] overflow-y-auto overscroll-contain border border-foreground/25 bg-background shadow-[0_28px_90px_rgba(20,42,56,0.28)]`}
            data-state={isTopicModalVisible ? "open" : "closed"}
          >
            <header className="sticky top-0 z-10 flex items-start justify-between gap-6 border-b border-foreground/20 bg-background/95 p-5 backdrop-blur-md md:p-7">
              <div>
                <p className={`text-sm font-black uppercase tracking-[0.1em] ${activeTrack.day.id === "open" ? "text-open" : "text-enterprise"}`}>
                  {activeTrack.day.dateNumber} OCT · {activeTrack.day.shortName[locale]}
                </p>
                <h2 id="topic-dialog-title" className="editorial-type mt-3 text-[clamp(2.25rem,5vw,4rem)] leading-[1.02]">
                  {activeTrack.topic.title[locale]}
                </h2>
              </div>
              <button
                type="button"
                autoFocus
                onClick={closeTopicModal}
                className="shrink-0 border border-foreground/25 p-2 transition-colors hover:bg-surface"
                aria-label={c.closeDetails}
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            <div className="p-5 md:p-7">
              <p className="max-w-4xl text-lg leading-relaxed text-muted-foreground">{activeDetail.overview}</p>
              <div className="mt-7 grid gap-8 border-t border-foreground/20 pt-7 md:grid-cols-[1.08fr_0.92fr]">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.1em]">{t.trackDetail.keyTopics}</h3>
                  <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                    {activeDetail.keyTopics.map((item) => <li key={item}>— {item}</li>)}
                  </ul>
                </div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.1em]">{activeDetail.spotlightTitle}</h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">{activeDetail.spotlightText}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.1em]">{activeDetail.outcomesTitle}</h3>
                    <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                      {activeDetail.outcomes.map((item) => <li key={item}>— {item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={`mt-8 flex flex-col gap-5 border-t pt-6 sm:flex-row sm:items-end sm:justify-between ${activeTrack.day.id === "open" ? "border-open/35" : "border-enterprise/35"}`}>
                <div>
                  <h3 className="text-xl font-bold">{t.trackDetail.interestedInTrack}</h3>
                  <p className="mt-1 text-base text-muted-foreground">{t.trackDetail.requestInvitationToJoin}</p>
                </div>
                <a href="https://register.gosim.org/" target="_blank" rel="noopener noreferrer" className="button-ink group shrink-0">
                  {t.trackDetail.requestInvitation}
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </section>
        </div>
      )}

      <section id="schedule" className="px-5 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="section-kicker">{c.scheduleKicker}</p>
              <h2 className="subsection-title mt-4">{c.scheduleTitle}</h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">{c.scheduleIntro}</p>
              <p className="mt-3 text-sm font-semibold">{t.scheduleSection.note}</p>
            </div>
          </div>

          <div className="mt-9 grid border-l border-t border-foreground/20 lg:grid-cols-2">
              {PROGRAM_DAYS.map((day, dayIndex) => {
                const allSessions = dayIndex === 0 ? t.scheduleSection.items.slice(0, 8) : t.scheduleSection.items.slice(8);
                return (
                  <section key={day.id} className={`schedule-day-${day.id} border-b border-r border-foreground/20 bg-card`}>
                    <header className="flex min-h-24 items-center gap-4 border-b border-foreground/20 px-5 py-4">
                      <span className={`editorial-type text-5xl leading-none ${day.id === "open" ? "text-open" : "text-enterprise"}`}>{day.dateNumber}</span>
                      <div>
                        <h3 className="text-lg font-black">{day.shortName[locale]}</h3>
                        <p className="mt-1 text-sm font-semibold text-muted-foreground">{day.dateLabel[locale]}</p>
                      </div>
                    </header>
                    <div>
                      {allSessions.map((session) => (
                        <div key={session.time} className="grid min-h-[66px] grid-cols-[72px_1fr] gap-3 border-b border-foreground/15 px-5 py-3 last:border-b-0">
                          <time className="font-mono text-sm font-bold tabular-nums">{session.time.replace(/^.*?·\s*/, "")}</time>
                          <div>
                            <p className="text-sm font-bold leading-snug">{session.title}</p>
                            {(session.subtitle || session.format) && (
                              <p className="mt-1 text-sm leading-snug text-muted-foreground">
                                {[session.subtitle, session.format].filter(Boolean).join(" · ")}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })}
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/20 bg-card px-5 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <p className="section-kicker">{c.pastKicker}</p>
          <h2 className="subsection-title mt-4">{c.pastTitle}</h2>
          <div className="mt-8 border-t border-foreground">
            {pastEditions.map((edition, index) => {
              const editionCopy = t.pastEditions.editions[index];
              return (
                <div key={edition.url} className="grid gap-4 border-b border-foreground/55 py-5 xl:grid-cols-[280px_200px_minmax(0,1fr)_auto] xl:items-center">
                  <h3 className="text-xl font-black leading-snug tracking-[-0.02em]">{editionCopy.name}</h3>
                  <span className="text-sm font-semibold leading-snug text-muted-foreground">{editionCopy.date}</span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{editionCopy.description}</p>
                  <div className="flex flex-wrap items-center gap-4 xl:justify-self-end">
                    {edition.reportUrl && (
                      <a href={edition.reportUrl} target="_blank" rel="noopener noreferrer" className="inline-flex whitespace-nowrap text-sm font-bold hover:underline">{t.pastEditions.readReport} ↗</a>
                    )}
                    <a href={edition.url} target="_blank" rel="noopener noreferrer" className="inline-flex whitespace-nowrap text-sm font-bold hover:underline">{t.pastEditions.visitSite} ↗</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              {locale === "en" && <p className="section-kicker">{c.collaboratorsKicker}</p>}
              <h2 className={`editorial-type max-w-3xl text-[clamp(2.65rem,4vw,3.65rem)] leading-[1.02] tracking-[-0.03em] ${locale === "en" ? "mt-4" : ""}`}>{c.collaboratorsTitle}</h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:justify-self-end">{c.collaboratorsIntro}</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {PAST_ORGANIZATIONS.map((organization) => (
              <a key={organization.name} href={organization.url} target="_blank" rel="noopener noreferrer" className="group flex min-h-28 flex-col justify-between p-3 transition-colors hover:bg-card/70">
                <div className="flex h-14 items-center justify-center px-2">
                  <img src={organization.logo} alt={organization.name} className="max-h-10 max-w-full object-contain mix-blend-multiply grayscale transition-all group-hover:grayscale-0" />
                </div>
                <span className="mt-2 text-center text-sm font-semibold leading-snug text-muted-foreground">{organization.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="venue" className="border-y border-foreground/30 bg-surface px-5 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="section-kicker">{c.venueKicker}</p>
              <h2 className="section-title mt-5">{c.venueTitle}</h2>
              <h3 className="mt-8 text-2xl font-bold">{EVENT_CONFIG.location.venue}</h3>
              <p className="mt-2 text-lg text-muted-foreground">{c.venueLocation}</p>
              <a href="https://maps.app.goo.gl/p2X11JMNBymwSx4J9" target="_blank" rel="noopener noreferrer" className="link-arrow mt-7">
                <MapPin className="h-4 w-4" /> {t.venue.viewOnMap}
              </a>
            </div>

            <div className="relative min-h-[280px] overflow-hidden border border-foreground/25 md:min-h-[390px]">
              <Image
                src="/images/venue/phoenix-bay-aerial.jpg"
                alt={locale === "cn" ? "珠海凤凰湾酒店航拍景观" : "Aerial view of Banyan Tree Zhuhai Phoenix Bay"}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-10 grid border-t-2 border-foreground lg:grid-cols-3">
            <VenueDetail icon={<Landmark />} text={t.venue.venueDescription} />
            <VenueDetail icon={<Handshake />} text={t.venue.colocatedDescription} />
            <VenueDetail icon={<Plane />} text={t.venue.accessDescription} />
          </div>

          <div className="mt-10">
            <ForumJourneyMap locale={locale} />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="invitation-panel mx-auto grid max-w-[1320px] gap-8 border-2 border-open p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="section-kicker text-open">{c.invitationKicker}</p>
            <h2 className="editorial-type mt-5 max-w-4xl text-[clamp(2.75rem,5vw,4.5rem)] leading-[1.04] tracking-[-0.025em]">{c.invitationTitle}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{c.invitationBody}</p>
          </div>
          <a href="https://register.gosim.org/" target="_blank" rel="noopener noreferrer" className="button-ink group">
            {c.invitationButton}
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </main>
  );
}

function Fact({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex min-h-36 flex-col justify-between border-b border-foreground p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
      <span className="text-open [&>svg]:h-5 [&>svg]:w-5">{icon}</span>
      <div className="mt-8">
        <strong className="block text-xl font-bold">{value}</strong>
        <span className="mt-1 block text-sm font-semibold text-muted-foreground">{label}</span>
      </div>
    </div>
  );
}

function VenueDetail({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="grid grid-cols-[32px_1fr] gap-4 border-b border-foreground/25 py-6 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
      <span className="text-open [&>svg]:h-5 [&>svg]:w-5">{icon}</span>
      <p className="text-base leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

function getTrackDetail(slug: string, t: Translations) {
  switch (slug) {
    case "agentic-engineering":
      return t.trackAgenticSE;
    case "ai-native-org":
      return t.trackAiNativeOrg;
    case "open-source":
      return t.trackOpenSource;
    case "mobile-agentic-os":
      return t.trackMobileLinux;
    default:
      return t.trackOpenSource;
  }
}
