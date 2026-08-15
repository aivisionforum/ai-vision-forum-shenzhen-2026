"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n";

interface LogoProps {
  variant?: "full" | "compact";
  className?: string;
}

export function Logo({ variant = "full", className = "" }: LogoProps) {
  const { locale } = useTranslation();
  const homeHref = `/${locale}/`;

  if (variant === "compact") {
    return (
      <Link href={homeHref} className={`relative top-[3px] inline-flex items-center gap-3 ${className}`} aria-label="AI Vision Forum Shenzhen 2026 home">
        <span className="border-2 border-foreground px-2 py-1 text-sm font-black tracking-[-0.04em]">AIVF</span>
        <span className="hidden text-[13px] font-bold uppercase leading-[1.05] tracking-[0.06em] sm:block">
          Shenzhen<br />2026
        </span>
      </Link>
    );
  }

  return (
    <Link href={homeHref} className={`inline-flex flex-col ${className}`} aria-label="AI Vision Forum Shenzhen 2026 home">
      <span className="editorial-type text-2xl uppercase tracking-[-0.015em]">AI Vision Forum</span>
      <span className="mt-1 text-[13px] font-bold uppercase tracking-[0.12em] text-muted-foreground">Zhuhai · 14–15 Oct 2026</span>
    </Link>
  );
}
