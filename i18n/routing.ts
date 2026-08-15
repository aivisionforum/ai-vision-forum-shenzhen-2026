import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "zh-cn"],
  defaultLocale: "en",
  localePrefix: "always",
});

export type AppLocale = (typeof routing.locales)[number];

export function isAppLocale(value: string | null | undefined): value is AppLocale {
  return routing.locales.some((locale) => locale === value);
}

export function getHtmlLang(locale: AppLocale) {
  return locale === "zh-cn" ? "zh-CN" : "en";
}
