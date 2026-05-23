"use client";

import Link from "next/link";
import { ChevronDown, MapPin, Handshake, Target, Users, Lock, FileText, Headphones, Play, CheckCircle2 } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";
import { TypewriterText } from "./TypewriterText";
import { ParticleBackground } from "./ParticleBackground";
import { PcbTraceBackground } from "@/components/branding/PcbTraceBackground";
import { EVENT_CONFIG } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";

/**
 * Hero section — "Shenzhen Signal" identity.
 *
 * Stack (back → front):
 *  1. Slate base (body bg)
 *  2. PCB-trace SVG background (hero intensity)
 *  3. Wireframe lattice Three.js canvas (cyan lines + magenta nodes)
 *  4. Slight cyan radial glow for text readability
 *  5. Content
 */
export function HeroSection() {
  const { t } = useTranslation();
  const isCompleted = EVENT_CONFIG.status === "completed";

  const handleScrollDown = () => {
    const tracksSection = document.querySelector("#tracks");
    if (tracksSection) {
      tracksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 bg-[#0A0E1A]">
      {/* Layer 1 — PCB trace SVG */}
      <PcbTraceBackground intensity="hero" />

      {/* Layer 2 — wireframe lattice (Three.js) */}
      <div className="absolute inset-0 z-[1]">
        <ParticleBackground />
      </div>

      {/* Layer 3 — soft cyan/magenta glow vignette for text readability */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(0, 229, 255, 0.08) 0%, rgba(10, 14, 26, 0) 60%), radial-gradient(ellipse 40% 40% at 75% 70%, rgba(255, 0, 110, 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Top + bottom slate fades to anchor edges */}
      <div className="absolute inset-x-0 top-0 z-[3] h-24 bg-gradient-to-b from-[#0A0E1A] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-[3] h-24 bg-gradient-to-t from-[#0A0E1A] to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Main heading */}
        <h1
          className="mb-6 text-5xl font-bold md:text-7xl lg:text-8xl"
          style={{ letterSpacing: "-0.02em" }}
        >
          <span className="text-[#E1E8F0]">AI VISION FORUM</span>
          <br />
          <span className="tabular-nums text-[#00E5FF]">SHENZHEN 2026</span>
        </h1>

        {/* Thin cyan accent rule */}
        <div className="mx-auto mb-8 h-px w-20 bg-[#00E5FF]" />

        {/* Animated tagline */}
        <p className="mb-8 text-xl font-medium text-[#94A3B8] md:text-2xl lg:text-3xl">
          <TypewriterText text={t.hero.tagline} delay={80} />
        </p>

        {/* Post-event status pill (only when completed) */}
        {isCompleted && (
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00E5FF]/40 bg-[#00E5FF]/10 px-5 py-2 text-sm font-semibold text-[#00E5FF] backdrop-blur">
              <CheckCircle2 className="h-4 w-4" />
              Held on {EVENT_CONFIG.dateDisplay}
            </span>
          </div>
        )}

        {/* Event Date - Prominent Display */}
        {!isCompleted && (
          <div className="mb-6">
            <p className="tabular-nums text-2xl md:text-3xl lg:text-4xl font-bold text-[#00E5FF] drop-shadow-[0_0_18px_rgba(0,229,255,0.35)]">
              {t.hero.dateDisplay}
            </p>
          </div>
        )}

        {/* Event details */}
        <div className="mb-12 flex flex-col items-center gap-2 text-base text-[#94A3B8] md:text-lg">
          <p className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-[#FFC857]" />
            <span>
              {[EVENT_CONFIG.location.venue, EVENT_CONFIG.location.city].filter(Boolean).join(", ")}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <Handshake className="h-5 w-5 text-[#FFC857]" />
            <span>{t.hero.colocatedWith} {EVENT_CONFIG.location.colocated}</span>
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <CountdownTimer />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:flex-wrap">
          {isCompleted ? (
            <>
              <Link
                href="/report"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00E5FF] px-8 py-4 text-lg font-semibold text-[#0A0E1A] shadow-[0_0_24px_rgba(0,229,255,0.35)] transition-all hover:bg-[#67F0FF] hover:shadow-[0_0_36px_rgba(0,229,255,0.5)]"
              >
                <FileText className="h-5 w-5" />
                Read the Forum Report
              </Link>
              <a
                href="/report#media"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#media")?.scrollIntoView({ behavior: "smooth" });
                  if (window.location.pathname !== "/report") {
                    window.location.href = "/report#media";
                  }
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1E293B] bg-[#0F172A]/60 backdrop-blur px-8 py-4 text-lg font-semibold text-[#E1E8F0] transition-all hover:border-[#00E5FF]/60 hover:bg-[#0F172A]/80"
              >
                <Play className="h-5 w-5" />
                Watch the Recap
              </a>
              <a
                href={EVENT_CONFIG.deepDiveAudioUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1E293B] bg-[#0F172A]/60 backdrop-blur px-8 py-4 text-lg font-semibold text-[#E1E8F0] transition-all hover:border-[#00E5FF]/60 hover:bg-[#0F172A]/80"
              >
                <Headphones className="h-5 w-5" />
                Listen
              </a>
            </>
          ) : (
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                const aboutSection = document.querySelector("#about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="rounded-full border border-[#00E5FF]/40 bg-[#00E5FF]/5 px-8 py-4 text-lg font-semibold text-[#00E5FF] backdrop-blur transition-all hover:border-[#00E5FF] hover:bg-[#00E5FF]/10 hover:shadow-[0_0_24px_rgba(0,229,255,0.25)]"
            >
              {t.hero.learnMore}
            </a>
          )}
        </div>

        {/* Event badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-[#94A3B8] md:text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1E293B] bg-[#0F172A]/60 backdrop-blur px-4 py-2">
            <Target className="h-3.5 w-3.5 text-[#FFC857]" /> {t.hero.invitationOnly}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1E293B] bg-[#0F172A]/60 backdrop-blur px-4 py-2">
            <Users className="h-3.5 w-3.5 text-[#FFC857]" /> {EVENT_CONFIG.scale}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1E293B] bg-[#0F172A]/60 backdrop-blur px-4 py-2">
            <Lock className="h-3.5 w-3.5 text-[#FFC857]" /> {t.hero.chathamHouseRule}
          </span>
        </div>
      </div>

      {/* Scroll down indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-[#00E5FF]/60 transition-colors hover:text-[#00E5FF]"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
