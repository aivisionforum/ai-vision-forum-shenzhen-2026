"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, FileText } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { EVENT_CONFIG } from "@/lib/constants";

interface TrackLayoutProps {
  title: string;
  icon: React.ReactNode;
  gradient: string;
  overview: string;
  keyTopics: string[];
  speakers?: { name: string; title: string }[];
  resources?: { title: string; url: string }[];
  children?: React.ReactNode;
}

/**
 * Reusable layout for track detail pages
 */
export function TrackLayout({
  title,
  icon,
  gradient,
  overview,
  keyTopics,
  speakers = [],
  resources = [],
  children,
}: TrackLayoutProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className={`relative px-4 py-32 pt-32 overflow-hidden ${gradient}`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <Link
            href="/#tracks"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.trackDetail.backToTracks}
          </Link>

          <div className="mb-6">{icon}</div>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">{overview}</p>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">{t.trackDetail.keyTopics}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {keyTopics.map((topic, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <p className="text-sm md:text-base">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Custom Content */}
      {children && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">{children}</div>
        </section>
      )}

      {/* Resources */}
      {resources.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">{t.trackDetail.relatedResources}</h2>
            <div className="space-y-3">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-lg"
                >
                  <BookOpen className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="flex-1 font-medium">{resource.title}</span>
                  <span className="text-xs text-muted-foreground">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA — gated on event status. Post-event: link to the forum report.
            Pre-event: invite request. */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-secondary/5 p-12">
            {EVENT_CONFIG.status === "completed" ? (
              <>
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                  Read the full forum report
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Five high-conviction claims, seven headline findings, and the
                  Paris Initiative — alongside every panel writeup.
                </p>
                <Link
                  href="/report"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
                >
                  <FileText className="h-5 w-5" /> Open the report
                </Link>
              </>
            ) : (
              <>
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                  {t.trackDetail.interestedInTrack}
                </h2>
                <p className="mb-6 text-muted-foreground">
                  {t.trackDetail.requestInvitationToJoin}
                </p>
                <a
                  href="https://register.gosim.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
                >
                  {t.trackDetail.requestInvitation}
                </a>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
