"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { EVENT_CONFIG } from "@/lib/constants";

const URL_RE = /((?:https?:\/\/)?[a-z0-9-]+(?:\.[a-z0-9-]+)+(?:\.[a-z]{2,})?(?:\/[\w\-./?%&=]*)?)/gi;
const KNOWN_LINK_DOMAINS = ["open-fab.ai"];

function linkify(text: string): React.ReactNode {
  return text.split(URL_RE).map((part, index) => {
    const normalized = part.toLowerCase();
    const isKnown = KNOWN_LINK_DOMAINS.some((domain) => normalized.startsWith(domain) || normalized.startsWith(`https://${domain}`) || normalized.startsWith(`http://${domain}`));
    if (!isKnown) return part;
    const href = part.startsWith("http") ? part : `https://${part}`;
    return <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">{part}</a>;
  });
}

interface TrackLayoutProps {
  title: string;
  icon: React.ReactNode;
  gradient: string;
  overview: string;
  keyTopics: string[];
  speakers?: { name: string; title: string }[];
  resources?: { title: string; url: string }[];
  children?: React.ReactNode;
}

export function TrackLayout({
  title,
  icon,
  overview,
  keyTopics,
  resources = [],
  children,
}: TrackLayoutProps) {
  const { locale, t } = useTranslation();
  const isOpenDay = title.toLowerCase().includes("open source") || title.toLowerCase().includes("mobile") || title.includes("开源");
  const dayRoute = isOpenDay
    ? `/${locale}/day-one/`
    : `/${locale}/day-two/`;
  const dayLabel = isOpenDay
    ? (locale === "zh-cn" ? "10 月 14 日 · 开源日" : "14 OCT · OPEN SOURCE DAY")
    : (locale === "zh-cn" ? "10 月 15 日 · 企业日" : "15 OCT · ENTERPRISE DAY");
  const accentClass = isOpenDay ? "text-day-one" : "text-enterprise";
  const ctaBorderClass = isOpenDay ? "border-day-one" : "border-enterprise";

  return (
    <main className="min-h-screen bg-background pt-24">
      <section className="border-b border-foreground px-5 pb-20 pt-10 md:px-10 md:pb-28 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <Link href={dayRoute} className="link-arrow mb-16">
            <ArrowLeft className="h-4 w-4" /> {locale === "zh-cn" ? "返回当日议程" : "Back to the day program"}
          </Link>
          <div className="grid gap-10 lg:grid-cols-[180px_1fr] lg:items-start">
            <div className={accentClass}>{icon}</div>
            <div>
              <p className={`mb-5 text-sm font-black uppercase tracking-[0.16em] ${accentClass}`}>{dayLabel}</p>
              <h1 className="editorial-type max-w-5xl text-[clamp(3rem,6vw,5.25rem)] leading-[1] tracking-[-0.03em]">{title}</h1>
              <p className="mt-8 max-w-3xl text-xl font-medium leading-relaxed text-muted-foreground md:text-2xl">{overview}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-foreground bg-paper px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
            <h2 className="subsection-title">{t.trackDetail.keyTopics}</h2>
            <div className="border-t-2 border-foreground">
              {keyTopics.map((topic, index) => (
                <div key={topic} className="grid grid-cols-[56px_1fr] border-b border-foreground py-5 md:grid-cols-[72px_1fr]">
                  <span className={`font-mono text-sm font-black ${accentClass}`}>{String(index + 1).padStart(2, "0")}</span>
                  <p className="font-semibold leading-relaxed">{linkify(topic)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {children && (
        <section className="px-5 py-20 md:px-10 md:py-28 lg:px-16">
          <div className="mx-auto max-w-[900px]">{children}</div>
        </section>
      )}

      {resources.length > 0 && (
        <section className="border-t border-foreground bg-white px-5 py-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-[900px]">
            <h2 className="mb-8 text-4xl font-black tracking-[-0.05em]">{t.trackDetail.relatedResources}</h2>
            <div className="border-t-2 border-foreground">
              {resources.map((resource) => (
                <a key={resource.url} href={resource.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 border-b border-foreground py-5 font-bold">
                  <BookOpen className={`h-5 w-5 ${accentClass}`} />
                  <span className="flex-1">{resource.title}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-foreground/30 bg-white px-5 py-20 md:px-10 md:py-24 lg:px-16">
        <div className={`mx-auto flex max-w-[1200px] flex-col gap-10 border-2 p-7 md:p-10 lg:flex-row lg:items-end lg:justify-between ${ctaBorderClass}`}>
          <div>
            <p className={`text-sm font-black uppercase tracking-[0.16em] ${accentClass}`}>{dayLabel}</p>
            <h2 className="editorial-type mt-5 max-w-4xl text-[clamp(2.75rem,5vw,4.5rem)] leading-[1.04] tracking-[-0.025em]">
              {EVENT_CONFIG.status === "completed"
                ? (locale === "zh-cn" ? "阅读完整论坛报告" : "Read the full forum report")
                : t.trackDetail.interestedInTrack}
            </h2>
          </div>
          <a href="https://register.gosim.org/" target="_blank" rel="noopener noreferrer" className="button-ink group">
            {t.trackDetail.requestInvitation}
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </main>
  );
}
