"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import { PANELS } from "@/lib/data/paris2026-report";
import { EVENT_CONFIG } from "@/lib/constants";

interface Props {
  /** Track slug — matches PanelSummary.slug in /lib/data/paris2026-report */
  slug: string;
}

/**
 * Renders the post-event additions for a track page:
 *  - panel infographic at top
 *  - panel-num/title context strip
 *  - "Recommendations" section with the recommendations infographic
 *  - download CTAs (per-panel .docx + full report PDF)
 *
 * Only renders when EVENT_CONFIG.status === "completed".
 */
export function PostEventPanelContent({ slug }: Props) {
  if (EVENT_CONFIG.status !== "completed") return null;

  const panel = PANELS.find((p) => p.slug === slug);
  if (!panel) return null;

  return (
    <div className="space-y-12">
      {/* Panel infographic */}
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Panel {panel.num} · At a glance
        </p>
        <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-white">
          <Image
            src={panel.infographic}
            alt={`Panel ${panel.num} infographic — ${panel.title}`}
            width={900}
            height={1100}
            unoptimized
            sizes="(max-width: 1024px) 100vw, 720px"
            className="h-auto w-full"
            priority
          />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Visual summary of {panel.title}: {panel.subtitle}.
        </p>
      </div>

      {/* Discussion summary */}
      <div className="rounded-xl border border-border bg-card/50 p-6">
        <h3 className="text-xl font-semibold text-foreground">What the discussion produced</h3>
        <p className="mt-2 text-sm text-muted-foreground">{panel.tldr}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={`/report`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            <FileText className="h-4 w-4" /> Read full forum report
          </Link>
        </div>
      </div>

      {/* Recommendations infographic */}
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Recommendations
        </p>
        <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-white">
          <Image
            src={panel.recommendationsInfographic}
            alt={`Panel ${panel.num} recommendations — ${panel.title}`}
            width={900}
            height={1100}
            unoptimized
            sizes="(max-width: 1024px) 100vw, 720px"
            className="h-auto w-full"
          />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Concrete actions surfaced by the panel — distributable as a standalone card.
        </p>
      </div>
    </div>
  );
}
