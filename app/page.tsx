"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, Laptop, Scale, Globe, Landmark, Handshake, Plane } from "lucide-react";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PcbTraceBackground } from "@/components/branding/PcbTraceBackground";
import { EVENT_CONFIG } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";

const TRACK_ICONS: Record<string, React.ReactNode> = {
  "graduation-cap": <GraduationCap className="h-12 w-12 text-[#00E5FF]" />,
  "laptop": <Laptop className="h-12 w-12 text-[#00E5FF]" />,
  "scale": <Scale className="h-12 w-12 text-[#00E5FF]" />,
  "globe": <Globe className="h-12 w-12 text-[#00E5FF]" />,
};

// Panelist & partner roster — to be curated by the Shenzhen program committee.
const PANELIST_ORGS: { name: string; logo: string; url: string }[] = [];

// Organizations represented at past editions (Paris 2026 roster)
const PAST_EDITION_ORGS = [
{ name: "Google DeepMind", logo: "/images/orgs/google-deepmind.png", url: "https://deepmind.google" },
  { name: "Probabl", logo: "/images/orgs/probabl.png", url: "https://probabl.ai" },
  { name: "ZhipuAI", logo: "/images/orgs/zhipuai.png", url: "https://zhipuai.cn" },
  { name: "Moonshot AI", logo: "/images/orgs/moonshot-ai.png", url: "https://moonshot.cn" },
  { name: "Minimax", logo: "/images/orgs/minimax.png", url: "https://minimaxi.com" },
  { name: "BAAI", logo: "/images/orgs/baai.png", url: "https://baai.ac.cn" },
  { name: "CSDN", logo: "/images/orgs/csdn.png", url: "https://csdn.net" },
  { name: "LF AI & Data", logo: "/images/orgs/lf-ai-data.svg", url: "https://lfaidata.foundation" },
  { name: "Rust Foundation", logo: "/images/orgs/rust-foundation.png", url: "https://rustfoundation.org" },
  { name: "Kaiyuanshe", logo: "/images/orgs/kaiyuanshe.svg", url: "https://kaiyuanshe.cn" },
  { name: "CNRS", logo: "/images/orgs/cnrs.png", url: "https://cnrs.fr" },
  { name: "Fudan University", logo: "/images/orgs/fudan.svg", url: "https://fudan.edu.cn" },
  { name: "Tulane University", logo: "/images/orgs/tulane.png", url: "https://tulane.edu" },
  { name: "McGill University", logo: "/images/orgs/mcgill.png", url: "https://mcgill.ca" },
  { name: "BNBU", logo: "/images/orgs/bnbu.png", url: "https://bnbu.edu.cn" },
  { name: "SOLEIL Synchrotron", logo: "/images/orgs/soleil.png", url: "https://www.synchrotron-soleil.fr/en" },
  { name: "United Nations University", logo: "/images/orgs/unu.png", url: "https://unu.edu" },
  { name: "Chinese Academy of Social Sciences", logo: "/images/orgs/cass.png", url: "https://cssn.cn" },
  { name: "China Electronics Standardization Institute", logo: "/images/orgs/cesi.png", url: "https://csa-iot.org/member/china-electronics-standardization-institute/" },
  { name: "Egen AI", logo: "/images/orgs/egen.png", url: "https://egen.ai" },
  { name: "Advanced AI Society", logo: "/images/orgs/advanced-ai-society.png", url: "https://advancedaisociety.org" },
  { name: "Alma AI", logo: "/images/orgs/alma-ai.png", url: "https://centri.unibo.it/alma-ai" },
  { name: "University of Bologna", logo: "/images/orgs/university-of-bologna.png", url: "https://www.unibo.it/en" },
  { name: "Voice Interoperability", logo: "/images/orgs/voice-interoperability.svg", url: "https://voiceinteroperability.ai" },
  { name: "Institute for Technoscience and Society", logo: "/images/orgs/technoscience-society.png", url: "https://www.yorku.ca/research/its/" },
];

const PAST_EDITIONS = [
  {
    key: "paris2026",
    url: "https://paris2026.visionforum.ai/",
    reportUrl: "https://paris2026.visionforum.ai/report/",
  },
  {
    key: "hangzhou2025",
    url: "https://hangzhou2025.gosim.org/",
    reportUrl: "",
  },
  {
    key: "paris2025",
    url: "https://paris2025.gosim.org/os-ai-strategy-forum/",
    reportUrl: "",
  },
];

const TRACK_ICON_KEYS = ["laptop", "scale", "globe"];
const TRACK_SLUGS = ["agentic-engineering", "ai-native-org", "open-source"];
const TRACK_HIGHLIGHTS = [true, false, false];

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-[#0A0E1A]">
      <HeroSection />
      <AboutSection />

      {/* Theme artwork — the octopus organization / human-AI synergy */}
      <section className="relative overflow-hidden bg-[#0A0E1A] px-4 pb-4 pt-8">
        <div className="container mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl border border-[#1E293B]">
            <img
              src="/images/art/hero-octopus.png"
              alt="Octopus of light-lines interweaving with human figures — human-AI synergy artwork"
              className="w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/70 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-6 right-6 text-sm font-medium tracking-wide text-[#E1E8F0]/90 md:text-base">
              {t.about.guidingQuestion}
            </p>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section
        id="tracks"
        className="relative overflow-hidden py-24 px-4 bg-[#0A0E1A]"
      >
        <PcbTraceBackground intensity="subtle" />
        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              <span className="text-[#E1E8F0]">{t.tracksSection.title}</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-[#94A3B8] md:text-xl">
              {t.tracksSection.subtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {t.tracksSection.tracks.map((track, index) => (
              <Link
                key={index}
                href={`/tracks/${TRACK_SLUGS[index]}`}
                className="group relative rounded-2xl border border-[#1E293B] bg-[#0F172A]/70 p-8 transition-all hover:border-[#00E5FF]/60 hover:shadow-[0_0_24px_rgba(0,229,255,0.15)] hover:-translate-y-1"
                style={{ borderWidth: "1px" }}
              >
                {/* Top-right magenta "live" dot */}
                <motion.span
                  className="absolute right-4 top-4 inline-block h-1 w-1 rounded-full bg-[#FF006E]"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  aria-hidden="true"
                />

                <div className="mb-6">{TRACK_ICONS[TRACK_ICON_KEYS[index]]}</div>
                <h3 className="mb-2 text-2xl font-bold text-[#00E5FF]">
                  {track.title}
                </h3>
                <p className="mb-4 text-sm font-medium text-[#FFC857]">{track.subtitle}</p>
                <p className="mb-6 text-[#94A3B8]">{track.description}</p>

                <div className="flex flex-wrap gap-2">
                  {track.keywords.map((keyword, ki) => (
                    <span
                      key={ki}
                      className="rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/10 px-3 py-1 text-xs font-medium text-[#00E5FF]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                {TRACK_HIGHLIGHTS[index] && (
                  <div className="absolute -right-3 -top-3 rounded-full bg-[#FF006E] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_18px_rgba(255,0,110,0.45)]">
                    {t.tracksSection.featured}
                  </div>
                )}

                <div className="absolute bottom-8 right-8 text-2xl text-[#00E5FF] opacity-0 transition-opacity group-hover:opacity-100">
                  &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="relative overflow-hidden py-24 px-4 bg-[#0A0E1A]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              <span className="text-[#E1E8F0]">{t.scheduleSection.title}</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-[#94A3B8] md:text-xl">
              {t.scheduleSection.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {t.scheduleSection.items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-6 rounded-xl border border-[#1E293B] bg-[#0F172A]/60 p-6 transition-all hover:border-[#00E5FF]/60 hover:shadow-[0_0_18px_rgba(0,229,255,0.12)]"
              >
                <div className="flex-shrink-0 rounded-lg border border-[#00E5FF]/20 bg-[#00E5FF]/10 px-4 py-2">
                  <span className="font-mono tabular-nums text-sm font-bold text-[#00E5FF]">
                    {item.time}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-[#E1E8F0]">{item.title}</h3>
                  {item.subtitle && (
                    <p className="mt-1 text-sm text-[#94A3B8]">{item.subtitle}</p>
                  )}
                  {item.format && (
                    <p className="mt-2 text-xs font-medium uppercase tracking-wider text-[#FFC857]">
                      {item.format}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-[#94A3B8]">{t.scheduleSection.note}</p>
          </div>
        </div>
      </section>

      {/* Panelists Representing Section — hidden until the roster has confirmed orgs */}
      {PANELIST_ORGS.length > 0 && (
      <section className="py-24 px-4 bg-[#0A0E1A]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              <span className="text-[#E1E8F0]">{t.panelistsSection.title}</span>
              <span className="ml-3 align-middle text-lg font-normal text-[#94A3B8]">(Partial)</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-[#94A3B8] md:text-xl">
              {t.panelistsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:gap-6">
            {PANELIST_ORGS.map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 rounded-xl border border-[#1E293B] bg-[#0F172A]/60 p-4 transition-colors hover:border-[#00E5FF]/60"
              >
                <div className="flex h-12 w-full items-center justify-center">
                  <img
                    src={org.logo}
                    alt={org.name}
                    className="h-10 max-w-[120px] object-contain"
                  />
                </div>
                <span className="text-center text-xs font-medium text-[#94A3B8] leading-tight">
                  {org.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Past Editions Section */}
      <section className="py-24 px-4 bg-[#0A0E1A]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              <span className="text-[#E1E8F0]">{t.pastEditions.title}</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-[#94A3B8] md:text-xl">
              {t.pastEditions.subtitle}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {PAST_EDITIONS.map((ed, index) => {
              const copy = t.pastEditions.editions[index];
              return (
                <div
                  key={ed.key}
                  className="rounded-2xl border border-[#1E293B] bg-[#0F172A]/70 p-8 transition-all hover:border-[#00E5FF]/60"
                >
                  <h3 className="mb-1 text-2xl font-bold text-[#00E5FF]">{copy.name}</h3>
                  <p className="mb-4 text-sm font-medium text-[#FFC857]">{copy.date}</p>
                  <p className="mb-6 text-[#94A3B8]">{copy.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={ed.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#00E5FF] hover:underline"
                    >
                      {t.pastEditions.visitSite} &rarr;
                    </a>
                    {ed.reportUrl && (
                      <a
                        href={ed.reportUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-[#00E5FF] hover:underline"
                      >
                        {t.pastEditions.readReport} &rarr;
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past-edition organizations Section */}
      <section className="py-24 px-4 bg-[#0A0E1A]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              <span className="text-[#E1E8F0]">{t.pastOrgs.title}</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-[#94A3B8] md:text-xl">
              {t.pastOrgs.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:gap-6">
            {PAST_EDITION_ORGS.map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 rounded-xl border border-[#1E293B] bg-[#0F172A]/60 p-4 transition-colors hover:border-[#00E5FF]/60"
              >
                <div className="flex h-14 w-full items-center justify-center rounded-lg bg-[#CBD5E1]/90 px-3 py-2 transition-colors group-hover:bg-white">
                  <img src={org.logo} alt={org.name} className="h-10 max-w-[120px] object-contain mix-blend-multiply" />
                </div>
                <span className="text-center text-xs font-medium text-[#94A3B8] leading-tight">
                  {org.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="relative overflow-hidden py-24 px-4 bg-[#0A0E1A]">
        <PcbTraceBackground intensity="subtle" />
        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                <span className="text-[#E1E8F0]">{t.venue.title}</span>
              </h2>
              <div className="space-y-6">
                <div>
                  {EVENT_CONFIG.location.venue && (
                    <h3 className="mb-2 text-2xl font-semibold text-[#E1E8F0]">
                      {EVENT_CONFIG.location.venue}
                    </h3>
                  )}
                  <p className="text-lg text-[#94A3B8]">
                    {EVENT_CONFIG.location.city}, {EVENT_CONFIG.location.country}
                  </p>
                </div>

                <div className="space-y-3 text-[#94A3B8]">
                  <p className="flex items-start gap-3">
                    <Landmark className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#00E5FF]" />
                    <span>{t.venue.venueDescription}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Handshake className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#00E5FF]" />
                    <span>{t.venue.colocatedDescription}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Plane className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#00E5FF]" />
                    <span>{t.venue.accessDescription}</span>
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-[#00E5FF] hover:underline"
                  >
                    {t.venue.viewOnMap}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <img
                src="/images/art/city-zhuhai.png"
                alt="Hong Kong–Zhuhai–Macau bridge and cruise at dusk — artwork"
                className="w-full rounded-2xl border border-[#1E293B] object-cover shadow-[0_0_32px_rgba(0,229,255,0.08)]"
              />
              <img
                src="/images/art/city-shenzhen.png"
                alt="Shenzhen skyline at night — artwork"
                className="w-full rounded-2xl border border-[#1E293B] object-cover shadow-[0_0_32px_rgba(0,229,255,0.08)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-24 px-4 bg-[#0A0E1A]">
        <PcbTraceBackground intensity="subtle" />
        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <div className="rounded-3xl border border-[#00E5FF]/30 bg-gradient-to-br from-[#00E5FF]/5 via-[#0F172A]/40 to-[#FF006E]/5 p-12 md:p-16 shadow-[0_0_36px_rgba(0,229,255,0.1)]">
            <h2 className="mb-6 text-3xl font-bold text-[#E1E8F0] md:text-4xl lg:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-[#94A3B8] md:text-xl">
              {t.cta.description}
            </p>
            <p className="text-[#94A3B8]">{t.cta.note}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
