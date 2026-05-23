import { CONVICTIONS } from "@/lib/data/paris2026-report";

/**
 * Five high-conviction claims from the forum, rendered as branded quote blocks
 * (the engineered-trust block expands with a concrete example for clarity).
 */
export function ExecutiveSummary() {
  return (
    <div className="space-y-4">
      {CONVICTIONS.map((c, i) => (
        <blockquote
          key={i}
          className="relative rounded-xl border border-primary/20 bg-primary/5 p-5 pl-6 text-base text-foreground/85"
        >
          <span className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-primary" aria-hidden />
          <p>
            <strong className="font-semibold text-primary">{c.heading}</strong>{" "}
            {c.body}
          </p>
          {c.example && (
            <p className="mt-3 border-t border-primary/15 pt-3 text-sm italic text-foreground/65">
              <span className="font-medium not-italic">To make it concrete:</span>{" "}
              {c.example}
            </p>
          )}
        </blockquote>
      ))}
    </div>
  );
}
