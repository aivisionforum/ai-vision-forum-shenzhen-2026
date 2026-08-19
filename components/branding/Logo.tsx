"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n";
import { EVENT_BRAND } from "@/lib/constants";

interface LogoProps {
  variant?: "full" | "compact";
  className?: string;
}

export function Logo({ variant = "full", className = "" }: LogoProps) {
  const { locale } = useTranslation();
  const homeHref = `/${locale}/`;

  if (variant === "compact") {
    return (
      <Link href={homeHref} className={`relative top-[3px] inline-flex items-center gap-2.5 ${className}`} aria-label={`${EVENT_BRAND.bilingual} Shenzhen 2026 home`}>
        <span className="border-2 border-foreground px-2 py-1 text-sm font-black tracking-[-0.04em]">AIVF</span>
        <span className="text-[10px] font-bold leading-[1.1] tracking-[0.035em] min-[360px]:text-[11px]">
          <span className="block whitespace-nowrap">{EVENT_BRAND.bilingual}</span>
          <span className="mt-0.5 block uppercase tracking-[0.1em] text-muted-foreground">Shenzhen 2026</span>
        </span>
      </Link>
    );
  }

  return (
    <Link href={homeHref} className={`inline-flex flex-col ${className}`} aria-label={`${EVENT_BRAND.bilingual} Shenzhen 2026 home`}>
      <span className="editorial-type text-2xl tracking-[-0.015em]">{EVENT_BRAND.bilingual}</span>
      <span className="mt-1 text-[13px] font-bold uppercase tracking-[0.12em] text-muted-foreground">Zhuhai · 14–15 Oct 2026</span>
    </Link>
  );
}
