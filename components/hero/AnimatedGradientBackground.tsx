"use client";

/**
 * Zhuhai Grand Theatre (日月贝, Sun & Moon Shell) as hero background with Ken Burns–style slow zoom in/out + pan.
 * CSS-driven animation — no JS loop. Image is served from /public/images/zhuhai-shell-cyberpunk-4k.png.
 */
interface HeroGradientBackgroundProps {
  accent: "open" | "enterprise";
  className?: string;
}

const heroImages: Record<HeroGradientBackgroundProps["accent"], string> = {
  open: "/images/zhuhai-shell-dusk-dawn-v2.jpg",
  enterprise: "/images/shenzhen-gemini.jpg",
};

export function HeroGradientBackground({ accent, className }: HeroGradientBackgroundProps) {
  return (
    <div className={className ?? ""} aria-hidden="true">
      <div className="hero-image-bg">
        {/* Ken Burns: slow zoom in/out + pan — 40s cycle */}
        <div
          className="hero-ken-burns-image"
          style={{ backgroundImage: `url(${heroImages[accent]})` }}
          aria-hidden="true"
        />
        {/* subtle color wash to keep text readable */}
        <div className="hero-ken-burns-overlay" />
      </div>
    </div>
  );
}
