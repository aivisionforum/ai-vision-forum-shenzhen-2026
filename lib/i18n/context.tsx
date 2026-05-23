"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Locale, Translations } from "./types";
import { en } from "./en";
import { cn } from "./cn";

const translations: Record<Locale, Translations> = { en, cn };

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  cycleLocale: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLocale === "cn" ? "zh" : newLocale;
    }
  }, []);

  const cycleLocale = useCallback(() => {
    const locales: Locale[] = ["en", "cn"];
    setLocaleState((prev) => {
      const nextIndex = (locales.indexOf(prev) + 1) % locales.length;
      const next = locales[nextIndex];
      if (typeof document !== "undefined") {
        document.documentElement.lang = next === "cn" ? "zh" : next;
      }
      return next;
    });
  }, []);

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
  cn: "CN",
};
