import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import { EVENT_CONFIG } from "@/lib/constants";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { LanguageProvider } from "@/lib/i18n";

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

const description = isCompleted
  ? `Forum Report from ${EVENT_CONFIG.name} (${EVENT_CONFIG.dateDisplay}, ${EVENT_CONFIG.location.city}) — ${EVENT_CONFIG.tagline}. Executive summary, panel findings, and multimedia recap.`
  : `Two focused forums in ${EVENT_CONFIG.location.city}: Open Source Day on October 14 and Enterprise Day on October 15, covering Mobile Agentic OS, Agentic Software Engineering, and the AI-Native Organization.`;

export const metadata: Metadata = {
  metadataBase: new URL(`https://${EVENT_CONFIG.domain}`),
  title: `${EVENT_CONFIG.name} | ${EVENT_CONFIG.tagline}`,
  description,
  keywords: [
    "AI Vision Forum",
    "Shenzhen 2026",
    "Open Source",
    "Mobile Agentic OS",
    "Agentic Software Engineering",
    "AI-Native Organization",
    "Enterprise AI",
    "Agentic AI",
  ],
  authors: [{ name: "AI Vision Forum Organizing Committee" }],
  openGraph: {
    title: `${EVENT_CONFIG.name}`,
    description,
    url: `https://${EVENT_CONFIG.domain}`,
    siteName: EVENT_CONFIG.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: EVENT_CONFIG.ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${EVENT_CONFIG.name} — Open Source Day and Enterprise Day`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${EVENT_CONFIG.name}`,
    description,
    images: [EVENT_CONFIG.ogImageUrl],
  },
};

// JSON-LD Event schema — updates eventStatus based on lifecycle.
const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: EVENT_CONFIG.name,
  description,
  startDate: "2026-10-14T09:00:00+08:00",
  endDate: "2026-10-15T20:30:00+08:00",
  eventStatus: isCompleted
    ? "https://schema.org/EventScheduled" // schema.org doesn't have a strict "Completed" state; use scheduled with isAccessibleForFree.
    : "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: EVENT_CONFIG.location.venue,
    address: { "@type": "PostalAddress", addressLocality: "Zhuhai", addressRegion: "Guangdong", addressCountry: "CN" },
  },
  organizer: { "@type": "Organization", name: "AI Vision Forum" },
  url: `https://${EVENT_CONFIG.domain}`,
  image: [`https://${EVENT_CONFIG.domain}${EVENT_CONFIG.ogImageUrl}`],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${bodoni.variable} font-sans antialiased`}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
