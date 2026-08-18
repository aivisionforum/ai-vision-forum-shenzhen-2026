import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "../globals.css";
import { EVENT_BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${EVENT_BRAND.bilingual} Shenzhen 2026`,
  description: `Choose English or Chinese for ${EVENT_BRAND.bilingual} Shenzhen 2026.`,
  robots: { index: false, follow: true },
  alternates: {
    languages: {
      en: "/en/",
      "zh-CN": "/zh-cn/",
    },
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
