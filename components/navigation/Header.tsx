"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/branding/Logo";
import { useTranslation } from "@/lib/i18n";

const labels = {
  en: {
    open: "14 · Open Source",
    enterprise: "15 · Enterprise",
    schedule: "Program",
    venue: "Venue",
    register: "Request invitation",
    menu: "Open menu",
  },
  "zh-cn": {
    open: "14 日 · 开源日",
    enterprise: "15 日 · 企业日",
    schedule: "议程",
    venue: "场地",
    register: "申请邀请",
    menu: "打开导航菜单",
  },
} as const;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { locale, cycleLocale } = useTranslation();
  const c = labels[locale];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: c.open, href: `/${locale}/#open-source-day` },
    { label: c.enterprise, href: `/${locale}/#enterprise-day` },
    { label: c.schedule, href: `/${locale}/#schedule` },
    { label: c.venue, href: `/${locale}/#venue` },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${isScrolled || isOpen ? "border-foreground/15 bg-background/95 shadow-[0_8px_30px_rgba(39,72,89,0.08)] backdrop-blur-xl" : "border-transparent bg-transparent shadow-none backdrop-blur-none"}`}>
      <nav className="mx-auto flex h-20 max-w-[1536px] items-center justify-between px-5 md:px-10 lg:px-16" aria-label="Primary navigation">
        <Logo variant="compact" />

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-bold tracking-[0.04em] transition-opacity hover:opacity-55">
              {item.label}
            </Link>
          ))}
          <button onClick={cycleLocale} className="border-l border-foreground pl-7 text-sm font-black uppercase tracking-[0.08em]" aria-label="Switch language">
            {locale === "en" ? "中文" : "EN"}
          </button>
          <a href="https://register.gosim.org/" target="_blank" rel="noopener noreferrer" className="button-ink !px-5 !py-3 !text-sm">
            {c.register}
          </a>
        </div>

        <button className="p-2 lg:hidden" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-label={c.menu}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-foreground bg-background px-5 pb-8 pt-4 lg:hidden">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="border-b border-foreground/25 py-4 text-2xl font-black tracking-[-0.03em]">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between gap-5">
            <button onClick={cycleLocale} className="text-sm font-black uppercase tracking-[0.12em]">
              {locale === "en" ? "切换至中文" : "Switch to English"}
            </button>
            <a href="https://register.gosim.org/" target="_blank" rel="noopener noreferrer" className="button-ink !px-4 !py-3 !text-sm">
              {c.register}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
