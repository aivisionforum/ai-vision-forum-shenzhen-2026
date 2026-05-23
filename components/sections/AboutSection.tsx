"use client";

import Link from "next/link";
import { Users, Lock, Calendar, Handshake, Lightbulb, Target, FileText, ArrowRight } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";
import { PcbTraceBackground } from "@/components/branding/PcbTraceBackground";

/**
 * About section — slate background with a subtle PCB-trace overlay.
 */
export function AboutSection() {
  const { t } = useTranslation();
  const isCompleted = EVENT_CONFIG.status === "completed";

  return (
    <section id="about" className="relative overflow-hidden py-24 px-4 bg-[#0A0E1A]">
      <PcbTraceBackground intensity="subtle" />
      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Post-event outcome banner (shown only after the forum) */}
        {isCompleted && (
          <div className="mb-12 rounded-2xl border border-[#00E5FF]/30 bg-[#00E5FF]/5 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 rounded-full bg-[#00E5FF]/10 p-3 text-[#00E5FF]">
                <FileText className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#E1E8F0]">The forum is concluded</h3>
                <p className="mt-2 text-[#94A3B8]">
                  The forum convened on {EVENT_CONFIG.dateDisplay} in Paris under the Chatham House Rule.
                  The Forum Report distills the day's four panels — Agentic AI Systems,
                  Agentic AI in Education, Trusted Agentic AI, and Open Token &amp; Digital Public Goods —
                  into a single shareable record, with the closing Paris Initiative on Open Token.
                </p>
                <Link
                  href="/report"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#00E5FF] hover:underline"
                >
                  Read the Forum Report <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-[#E1E8F0]">{t.about.title}</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[#94A3B8] md:text-xl">
            {t.about.subtitle}
          </p>
        </div>

        {/* Guiding Question */}
        <div className="mb-12 rounded-2xl border border-[#FFC857]/30 bg-gradient-to-br from-[#FFC857]/5 to-transparent p-8 md:p-12">
          <div className="mb-6 flex items-center gap-3">
            <Target className="h-7 w-7 text-[#FFC857]" />
            <h3 className="text-2xl font-bold text-[#E1E8F0]">{t.about.guidingQuestionLabel}</h3>
          </div>
          <p className="text-xl font-medium text-[#E1E8F0] md:text-2xl">
            &ldquo;{t.about.guidingQuestion}&rdquo;
          </p>
          <p className="mt-4 text-[#94A3B8]">
            {t.about.guidingQuestionNote}
          </p>
        </div>

        {/* Why Now */}
        <div className="mb-16 rounded-2xl border border-[#1E293B] bg-[#0F172A]/60 p-8 md:p-12">
          <div className="mb-6 flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-[#00E5FF]" />
            <h3 className="text-2xl font-bold text-[#E1E8F0]">{t.about.whyNowTitle}</h3>
          </div>
          <p className="mb-8 text-[#94A3B8]">{t.about.whyNowIntro}</p>
          <div className="space-y-6">
            {t.about.whyNowShifts.map((shift, index) => (
              <div key={index} className="border-l-2 border-[#00E5FF] pl-6">
                <h4 className="mb-2 text-lg font-semibold text-[#E1E8F0]">{shift.title}</h4>
                <p className="text-[#94A3B8]">{shift.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-3xl font-bold text-[#E1E8F0]">{t.about.valuePropositionTitle}</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {t.about.valueProposition.map((item, index) => (
              <div key={index} className="rounded-xl border border-[#1E293B] bg-[#0F172A]/60 p-6 transition-all hover:border-[#00E5FF]/60 hover:shadow-[0_0_24px_rgba(0,229,255,0.15)]">
                <h4 className="mb-3 text-xl font-semibold text-[#00E5FF]">{item.title}</h4>
                <p className="text-[#94A3B8]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-4">
          <StatCard
            icon={<Users className="h-8 w-8" />}
            value="100–150"
            label={t.about.invitedParticipants}
          />
          <StatCard
            icon={<Lock className="h-8 w-8" />}
            value={t.about.inviteOnly}
            label={t.about.exclusiveAccess}
          />
          <StatCard
            icon={<Calendar className="h-8 w-8" />}
            value={EVENT_CONFIG.dateDisplay}
            label={`${EVENT_CONFIG.location.city}, ${EVENT_CONFIG.location.country}`}
          />
          <StatCard
            icon={<Handshake className="h-8 w-8" />}
            value={EVENT_CONFIG.location.colocated}
            label={t.about.colocated}
          />
        </div>

        {/* Chatham House Rule */}
        <div className="rounded-2xl border border-[#FFC857]/30 bg-gradient-to-br from-[#FFC857]/5 to-transparent p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 rounded-full bg-[#FFC857]/10 p-3">
              <Lock className="h-6 w-6 text-[#FFC857]" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-[#E1E8F0]">{t.about.chathamHouseTitle}</h3>
              <p className="text-[#94A3B8]">
                {t.about.chathamHouseDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-[#1E293B] bg-[#0F172A]/60 p-6 text-center transition-all hover:border-[#00E5FF]/60 hover:shadow-[0_0_24px_rgba(0,229,255,0.15)]">
      <div className="mb-3 text-[#00E5FF]">{icon}</div>
      <div className="mb-1 tabular-nums text-2xl font-bold text-[#00E5FF]">{value}</div>
      <div className="text-sm text-[#94A3B8]">{label}</div>
    </div>
  );
}
