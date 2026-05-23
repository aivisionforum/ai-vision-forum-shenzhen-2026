"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { Logo } from "@/components/branding/Logo";
import { useTranslation, LOCALE_LABELS } from "@/lib/i18n";
import { EVENT_CONFIG } from "@/lib/constants";

/**
 * Sticky header navigation with mobile hamburger menu
 * Features smooth scroll and language switcher (EN/CN/FR)
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, cycleLocale, t } = useTranslation();

  const isCompleted = EVENT_CONFIG.status === "completed";

  const navItems: { label: string; href: string; highlight: boolean; external?: boolean }[] = isCompleted
    ? [
        { label: t.nav.home, href: "/", highlight: false },
        { label: t.nav.tracks, href: "/#tracks", highlight: false },
        { label: "Report", href: "/report", highlight: true },
      ]
    : [
        { label: t.nav.home, href: "/", highlight: false },
        { label: t.nav.tracks, href: "/#tracks", highlight: false },
        { label: t.nav.schedule, href: "/#schedule", highlight: false },
        { label: t.nav.venue, href: "/#venue", highlight: false },
        { label: t.nav.register, href: "https://register.gosim.org/", highlight: true, external: true },
      ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When a page loads with a hash (e.g. arriving at /#tracks from another page),
  // scroll to that section once the DOM is rendered. The browser's native
  // hash-scroll runs before React hydration, so the target element doesn't
  // exist yet — we poll briefly until it does, then scroll instantly.
  // We temporarily override the global `scroll-behavior: smooth` so the
  // initial position-on-arrival is immediate (smooth scrolling deep into the
  // page from the top is disorienting and unreliable across browsers).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash || hash === "#") return;

    let attempts = 0;
    const maxAttempts = 30;
    const poll = () => {
      const el = document.querySelector(hash);
      if (el) {
        const html = document.documentElement;
        const prev = html.style.scrollBehavior;
        html.style.scrollBehavior = "auto";
        const top = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0, top);
        html.style.scrollBehavior = prev;
        return;
      }
      if (++attempts < maxAttempts) {
        setTimeout(poll, 50);
      }
    };
    poll();
  }, []);

  const handleNavClick = (href: string): boolean => {
    setIsMobileMenuOpen(false);

    if (href.startsWith("/#")) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return true;
      }
      window.location.href = href;
      return true;
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Logo variant="compact" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    item.highlight
                      ? "rounded-full bg-accent px-4 py-2 text-accent-foreground hover:bg-accent/90"
                      : "text-foreground/80"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("/#")) {
                      if (handleNavClick(item.href)) {
                        e.preventDefault();
                      }
                    }
                  }}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    item.highlight
                      ? "rounded-full bg-accent px-4 py-2 text-accent-foreground hover:bg-accent/90"
                      : "text-foreground/80"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}

            <button
              onClick={cycleLocale}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              title="Switch language"
            >
              <Globe className="h-4 w-4" />
              <span>{LOCALE_LABELS[locale]}</span>
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-base font-medium transition-colors ${
                      item.highlight
                        ? "rounded-full bg-accent px-4 py-2 text-center text-accent-foreground"
                        : "text-foreground/80 hover:text-primary px-4 py-2"
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("/#")) {
                        if (handleNavClick(item.href)) {
                          e.preventDefault();
                        }
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={`text-base font-medium transition-colors ${
                      item.highlight
                        ? "rounded-full bg-accent px-4 py-2 text-center text-accent-foreground"
                        : "text-foreground/80 hover:text-primary px-4 py-2"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}

              <button
                onClick={cycleLocale}
                className="flex items-center justify-center gap-2 px-4 py-2 text-base font-medium text-muted-foreground"
              >
                <Globe className="h-5 w-5" />
                <span>{t.nav.language}: {LOCALE_LABELS[locale]}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
