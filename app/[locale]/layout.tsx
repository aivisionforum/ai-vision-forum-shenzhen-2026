import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Bodoni_Moda, Inter } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "../globals.css";
import { EVENT_BRAND, EVENT_CONFIG } from "@/lib/constants";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { LanguageProvider } from "@/lib/i18n";
import { getHtmlLang, isAppLocale, routing, type AppLocale } from "@/i18n/routing";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const isCompleted = EVENT_CONFIG.status === "completed";

const metadataCopy = {
  en: {
    title: `${EVENT_BRAND.bilingual} Shenzhen 2026 | ${EVENT_CONFIG.tagline}`,
    description: isCompleted
      ? `Forum Report from ${EVENT_CONFIG.name} (${EVENT_CONFIG.dateDisplay}, ${EVENT_CONFIG.location.city}) — ${EVENT_CONFIG.tagline}. Executive summary, panel findings, and multimedia recap.`
      : `Two focused forums in ${EVENT_CONFIG.location.city}: Open Source Day on October 14 and Enterprise Day on October 15, covering Mobile Agentic OS, Agentic Software Engineering, and the AI-Native Organization.`,
    imageAlt: `${EVENT_CONFIG.name} — Open Source Day and Enterprise Day`,
  },
  "zh-cn": {
    title: `${EVENT_BRAND.bilingual} 深圳 2026｜构建人机协同新范式`,
    description: "2026 年 10 月 14–15 日在珠海举行的两日闭门论坛，聚焦智能体时代的开源、Mobile Agentic OS、智能体软件工程与 AI 原生组织。",
    imageAlt: `${EVENT_BRAND.bilingual} 深圳 2026——开源日与企业日`,
  },
} as const;

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<LayoutProps, "children">): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: AppLocale = isAppLocale(localeParam) ? localeParam : routing.defaultLocale;
  const copy = metadataCopy[locale];

  return {
    metadataBase: new URL(`https://${EVENT_CONFIG.domain}`),
    title: copy.title,
    description: copy.description,
    keywords: [
      "AI Vision Forum",
      "AI愿景论坛",
      "Shenzhen 2026",
      "Zhuhai",
      "Open Source",
      "Mobile Agentic OS",
      "Agentic Software Engineering",
      "AI-Native Organization",
    ],
    authors: [{ name: "AI Vision Forum Organizing Committee" }],
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        en: "/en/",
        "zh-CN": "/zh-cn/",
        "x-default": "/",
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: `/${locale}/`,
      siteName: `${EVENT_BRAND.bilingual} Shenzhen 2026`,
      locale: locale === "zh-cn" ? "zh_CN" : "en_US",
      alternateLocale: locale === "zh-cn" ? ["en_US"] : ["zh_CN"],
      type: "website",
      images: [{
        url: EVENT_CONFIG.ogImageUrl,
        width: 1200,
        height: 630,
        alt: copy.imageAlt,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [EVENT_CONFIG.ogImageUrl],
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!isAppLocale(locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();
  const copy = metadataCopy[locale];
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: locale === "zh-cn"
      ? `${EVENT_BRAND.bilingual} 深圳 2026`
      : `${EVENT_BRAND.bilingual} Shenzhen 2026`,
    description: copy.description,
    startDate: "2026-10-14T09:00:00+08:00",
    endDate: "2026-10-15T20:30:00+08:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    inLanguage: getHtmlLang(locale),
    location: {
      "@type": "Place",
      name: locale === "zh-cn" ? "珠海凤凰湾悦榕庄" : EVENT_CONFIG.location.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zhuhai",
        addressRegion: "Guangdong",
        addressCountry: "CN",
      },
    },
    organizer: { "@type": "Organization", name: EVENT_BRAND.bilingual },
    url: `https://${EVENT_CONFIG.domain}/${locale}/`,
    image: [`https://${EVENT_CONFIG.domain}${EVENT_CONFIG.ogImageUrl}`],
  };

  return (
    <html lang={getHtmlLang(locale)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${bodoni.variable} font-sans antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
          </LanguageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
