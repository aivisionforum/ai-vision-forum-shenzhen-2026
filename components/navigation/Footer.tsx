"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/branding/Logo";
import { useTranslation } from "@/lib/i18n";
import { EVENT_BRAND } from "@/lib/constants";

const copy = {
  en: {
    line: "Two one-day forums for the questions beneath the agent era.",
    program: "Program",
    open: "Open Source Forum · Oct 14",
    enterprise: "Enterprise Forum · Oct 15",
    schedule: "Full program",
    forum: "Forum",
    about: "AI Vision Forum main site",
    paris: "Paris 2026 archive",
    gosim: "GOSIM Shenzhen 2026",
    legal: "Information",
    privacy: "Privacy",
    contact: "Contact",
    rule: "Chatham House Rule",
    note: "Zhuhai · 14–15 October · Invitation-only · EN / 中文 interpretation",
  },
  "zh-cn": {
    line: "两场独立的一日论坛，讨论智能体时代的根本问题。",
    program: "议程",
    open: "开源论坛 · 10 月 14 日",
    enterprise: "企业论坛 · 10 月 15 日",
    schedule: "完整议程",
    forum: "论坛",
    about: "AI Vision Forum 主站",
    paris: "巴黎 2026 回顾",
    gosim: "GOSIM 深圳 2026",
    legal: "相关信息",
    privacy: "隐私政策",
    contact: "联系我们",
    rule: "查塔姆宫规则",
    note: "珠海 · 10 月 14–15 日 · 仅限受邀参加 · 中英同声传译",
  },
} as const;

export function Footer() {
  const { locale } = useTranslation();
  const c = copy[locale];
  const brandName = locale === "zh-cn" ? EVENT_BRAND.bilingual : EVENT_BRAND.en;
  const gosimHref = locale === "zh-cn"
    ? "https://shenzhen2026.gosim.org/zh/"
    : "https://shenzhen2026.gosim.org/?lang=en";

  return (
    <footer className="border-t border-foreground/20 bg-paper px-5 py-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-7 max-w-xs text-lg font-semibold leading-snug">{c.line}</p>
          </div>

          <FooterColumn title={c.program} links={[
            [c.open, `/${locale}/day-one/`],
            [c.enterprise, `/${locale}/day-two/`],
            [c.schedule, `/${locale}/#schedule`],
          ]} />

          <FooterColumn title={c.forum} external links={[
            [c.about, "https://visionforum.ai/"],
            [c.paris, "https://paris2026.visionforum.ai/"],
            [c.gosim, gosimHref],
          ]} />

          <FooterColumn title={c.legal} links={[
            [c.privacy, `/${locale}/privacy/`],
            [c.contact, `/${locale}/contact/`],
          ]} extra={c.rule} extraHref="https://www.chathamhouse.org/about-us/chatham-house-rule" />
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-foreground pt-5 text-sm font-semibold tracking-[0.06em] text-muted-foreground sm:flex-row sm:justify-between">
          <span>© 2026 {brandName}</span>
          <span>{c.note}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  external = false,
  extra,
  extraHref,
}: {
  title: string;
  links: [string, string][];
  external?: boolean;
  extra?: string;
  extraHref?: string;
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-black uppercase tracking-[0.12em] text-muted-foreground">{title}</h3>
      <ul className="space-y-3 text-sm font-semibold">
        {links.map(([label, href]) => (
          <li key={href}>
            {external ? (
              <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
                {label} <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ) : (
              <Link href={href} className="hover:underline">{label}</Link>
            )}
          </li>
        ))}
      </ul>
      {extra && extraHref && (
        <a href={extraHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:underline">
          {extra} <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      )}
      {extra && !extraHref && <p className="mt-5 text-sm text-muted-foreground">{extra}</p>}
    </div>
  );
}
