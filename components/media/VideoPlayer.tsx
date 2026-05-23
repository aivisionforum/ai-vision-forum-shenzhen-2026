"use client";

import { Play } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title: string;
  description?: string;
  /** When the MP4 file isn't present yet, render an "available soon" placeholder using the poster image. */
  placeholder?: boolean;
}

/**
 * Native HTML5 video player. Self-hosted MP4 source — no third-party embed.
 * Falls back to a static placeholder card when `placeholder` is true (use before
 * the NotebookLM Overview is dropped into public/media/).
 */
export function VideoPlayer({ src, poster, title, description, placeholder }: VideoPlayerProps) {
  if (placeholder) {
    return (
      <div className="rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-sm p-6 shadow-sm">
        <div
          className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted"
          style={poster ? { backgroundImage: `url(${poster})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/45 text-white">
            <Play className="h-12 w-12 opacity-80" />
            <p className="mt-3 text-sm font-medium">Recap video coming soon</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-sm p-6 shadow-sm">
      <div className="overflow-hidden rounded-lg bg-black">
        <video
          controls
          preload="metadata"
          playsInline
          poster={poster}
          className="aspect-video w-full"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the <code>&lt;video&gt;</code> element.
          <a href={src}> Download the file</a>.
        </video>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      </div>
    </div>
  );
}
