import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "AI Vision Forum Shenzhen 2026",
  description: "Choose English or Chinese for AI Vision Forum Shenzhen 2026.",
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
