"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  src: string;
  alt: string;
}

interface InfographicCarouselProps {
  slides: Slide[];
  /** Auto-advance interval in milliseconds; pass 0 to disable */
  intervalMs?: number;
}

/**
 * Fallback "video" pattern: an auto-advancing slide carousel of infographic PNGs.
 * Used when the NotebookLM video output is too large to self-host as MP4
 * (GitHub Pages soft-limits files at 100 MB) or when we want a web-native
 * alternative paired with the Deep Dive audio.
 */
export function InfographicCarousel({ slides, intervalMs = 6000 }: InfographicCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  useEffect(() => {
    if (!intervalMs || total <= 1) return;
    const t = setInterval(() => setIndex(i => (i + 1) % total), intervalMs);
    return () => clearInterval(t);
  }, [intervalMs, total]);

  if (total === 0) return null;
  const slide = slides[index];

  const goPrev = () => setIndex(i => (i - 1 + total) % total);
  const goNext = () => setIndex(i => (i + 1) % total);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-sm">
      <div className="relative aspect-[9/12] w-full">
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-contain"
          priority={index === 0}
        />
      </div>
      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/35 p-2 text-white transition hover:bg-black/55"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/35 p-2 text-white transition hover:bg-black/55"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/55"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
