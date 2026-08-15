import type { AbstractIntlMessages } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { en } from "@/lib/i18n/en";
import { cn } from "@/lib/i18n/cn";
import { isAppLocale, routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;
  const locale = isAppLocale(requestedLocale)
    ? requestedLocale
    : routing.defaultLocale;

  return {
    locale,
    messages: (locale === "zh-cn" ? cn : en) as unknown as AbstractIntlMessages,
  };
});
