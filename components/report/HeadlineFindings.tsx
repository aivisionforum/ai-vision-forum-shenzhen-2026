import { FINDINGS } from "@/lib/data/paris2026-report";

/**
 * Seven numbered headline findings, with each number rendered as a circular
 * brand-coloured badge. Sequential, scannable, prints well.
 */
export function HeadlineFindings() {
  return (
    <ol className="space-y-0 divide-y divide-border/60">
      {FINDINGS.map((f) => (
        <li key={f.n} className="flex gap-4 py-5">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground">
            {f.n}
          </div>
          <p className="flex-1 pt-1 text-base text-foreground/85">
            <strong className="font-semibold text-primary">{f.bold}</strong>{" "}
            {f.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
