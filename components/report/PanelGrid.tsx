import Link from "next/link";
import { PANELS } from "@/lib/data/paris2026-report";

/**
 * Grid of 4 panel cards, each linking to the existing /tracks/[slug] route.
 * Each card surfaces panel number, time slot, title, subtitle, and a TL;DR.
 */
export function PanelGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {PANELS.map((p) => (
        <Link
          key={p.slug}
          href={`/tracks/${p.slug}`}
          className="group block rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-primary hover:shadow-md"
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Panel {p.num} · {p.time}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-primary group-hover:underline">
            {p.title}
          </h3>
          <p className="mt-0.5 text-sm italic text-foreground/65">{p.subtitle}</p>
          <p className="mt-3 text-sm text-foreground/75">{p.tldr}</p>
          <span className="mt-4 inline-block text-sm font-semibold text-primary">
            Read the panel →
          </span>
        </Link>
      ))}
    </div>
  );
}
