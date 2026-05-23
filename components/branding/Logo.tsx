"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

interface LogoProps {
  variant?: "full" | "compact";
  className?: string;
}

/**
 * Text-based logo for AI Vision Forum Shenzhen 2026.
 * Cyan-on-slate, with a magenta "live" indicator dot suggesting a powered PCB.
 */
export function Logo({ variant = "full", className = "" }: LogoProps) {
  const { t } = useTranslation();

  if (variant === "compact") {
    return (
      <Link
        href="/"
        className={`group flex items-center gap-2 transition-opacity hover:opacity-80 ${className}`}
      >
        <div className="relative flex items-baseline">
          <span className="text-2xl font-bold tracking-tighter text-[#00E5FF]">
            AIVF
          </span>
          <span className="ml-1 tabular-nums text-lg font-medium text-[#E1E8F0]">
            26
          </span>
          {/* Live-signal dot — sits at the baseline-right, like a power LED */}
          <motion.span
            className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#FF006E]"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`group flex flex-col transition-opacity hover:opacity-80 ${className}`}
    >
      <div className="flex items-baseline gap-2">
        <span className="text-xl font-bold tracking-tight text-[#E1E8F0] md:text-2xl">
          AI VISION FORUM
        </span>
        <span className="tabular-nums text-sm font-semibold text-[#00E5FF] md:text-base">
          SHENZHEN 2026
        </span>
        <motion.span
          className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF006E]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
      </div>
      <div className="mt-0.5 text-[0.6rem] font-medium tracking-widest text-[#94A3B8] md:text-xs">
        {t.logo.tagline}
      </div>
    </Link>
  );
}
