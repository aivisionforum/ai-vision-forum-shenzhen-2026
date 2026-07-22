"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Logo } from "@/components/branding/Logo";
import { EVENT_CONFIG, REFERENCE_SITES, SOCIAL_LINKS } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";

/**
 * Professional footer with branding, links, and social media
 */
export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="relative border-t border-[#1E293B] bg-[#0A0E1A]">
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Branding */}
          <div className="space-y-4">
            <Logo variant="full" />
            <p className="text-sm text-[#94A3B8]">
              {t.hero.tagline}
            </p>
            <p className="tabular-nums text-xs text-[#94A3B8]">
              {EVENT_CONFIG.location.city}, {EVENT_CONFIG.location.country} • {t.hero.dateDisplay}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#E1E8F0]">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="text-[#94A3B8] transition-colors hover:text-[#00E5FF]"
                >
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/#tracks"
                  className="text-[#94A3B8] transition-colors hover:text-[#00E5FF]"
                >
                  {t.footer.tracks}
                </Link>
              </li>
              <li>
                <Link
                  href="/#schedule"
                  className="text-[#94A3B8] transition-colors hover:text-[#00E5FF]"
                >
                  {t.footer.schedule}
                </Link>
              </li>
              <li>
                <a
                  href={REFERENCE_SITES.mainSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] transition-colors hover:text-[#00E5FF]"
                >
                  {t.footer.mainSite}
                </a>
              </li>
              <li>
                <a
                  href={REFERENCE_SITES.paris2026}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] transition-colors hover:text-[#00E5FF]"
                >
                  {t.footer.paris2026}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#E1E8F0]">
              {t.footer.legal}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-[#94A3B8] transition-colors hover:text-[#00E5FF]"
                >
                  {t.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#94A3B8] transition-colors hover:text-[#00E5FF]"
                >
                  {t.footer.contact}
                </Link>
              </li>
              <li>
                <span className="text-xs text-[#94A3B8]">
                  {t.footer.underChathamHouseRule}
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Partnership */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#E1E8F0]">
              {t.footer.connect}
            </h3>
            <div className="flex gap-3 mb-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#1E293B] bg-[#0F172A] p-2 text-[#94A3B8] transition-all hover:border-[#00E5FF] hover:text-[#00E5FF] hover:shadow-[0_0_12px_rgba(0,229,255,0.4)]"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#1E293B] bg-[#0F172A] p-2 text-[#94A3B8] transition-all hover:border-[#00E5FF] hover:text-[#00E5FF] hover:shadow-[0_0_12px_rgba(0,229,255,0.4)]"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#1E293B] bg-[#0F172A] p-2 text-[#94A3B8] transition-all hover:border-[#00E5FF] hover:text-[#00E5FF] hover:shadow-[0_0_12px_rgba(0,229,255,0.4)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-[#94A3B8]">
              {t.footer.colocatedWith}{" "}
              <a
                href="https://shenzhen2026.gosim.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#FFC857] hover:underline"
              >
                {EVENT_CONFIG.location.colocated}
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-[#1E293B] pt-8 text-center text-xs text-[#94A3B8]">
          <p className="tabular-nums">&copy; {currentYear} {t.footer.copyright}</p>
          <p className="mt-1">
            {t.footer.organizedBy}
          </p>
        </div>
      </div>
    </footer>
  );
}
