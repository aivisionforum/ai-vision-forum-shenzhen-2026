"use client";

import { Headphones } from "lucide-react";

interface AudioPlayerProps {
  src: string;
  title: string;
  description?: string;
  /** Optional duration label, e.g. "21:34" — purely cosmetic */
  durationLabel?: string;
}

/**
 * Native HTML5 audio player wrapped in a branded card.
 * Self-hosted MP3 source — no third-party embed.
 */
export function AudioPlayer({ src, title, description, durationLabel }: AudioPlayerProps) {
  return (
    <div className="rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-sm p-6 shadow-sm">
      <div className="mb-4 flex items-start gap-3">
        <div className="rounded-full bg-primary/10 p-2.5 text-primary">
          <Headphones className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            {durationLabel && (
              <span className="text-xs font-medium text-muted-foreground">{durationLabel}</span>
            )}
          </div>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
      <audio
        controls
        preload="metadata"
        className="w-full"
        src={src}
      >
        Your browser does not support the <code>&lt;audio&gt;</code> element.
        <a href={src}> Download the file</a>.
      </audio>
    </div>
  );
}
