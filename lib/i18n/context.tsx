"use client";

import { createContext, useCallback, useContext, useEffect, type ReactNode } from "react";
import { useLocale } from "next-intl";
import type { Locale, Translations } from "./types";
import { en } from "./en";
import { cn } from "./cn";

const translations: Record<Locale, Translations> = {
  en,
  "zh-cn": cn,
};

export const LOCALE_STORAGE_KEY = "aivf-locale";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  cycleLocale: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const activeLocale = useLocale();
  const locale: Locale = activeLocale === "zh-cn" ? "zh-cn" : "en";

  const setLocale = useCallback((newLocale: Locale) => {
    if (newLocale === locale || typeof window === "undefined") return;

    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    } catch {
      // Language switching should still work when storage is unavailable.
    }

    const localizedPath = window.location.pathname.replace(
      /^\/(?:en|zh-cn)(?=\/|$)/,
      `/${newLocale}`,
    );
    window.location.assign(`${localizedPath}${window.location.search}${window.location.hash}`);
  }, [locale]);

  const cycleLocale = useCallback(() => {
    setLocale(locale === "en" ? "zh-cn" : "en");
  }, [locale, setLocale]);

  useEffect(() => {
    document.documentElement.lang = locale === "zh-cn" ? "zh-CN" : "en";
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // The locale remains encoded in the URL even without storage.
    }
  }, [locale]);

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, cycleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}

/** Display label for locale switcher */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  "zh-cn": "中文",
};
