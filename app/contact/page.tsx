"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Twitter, Github, Linkedin } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background px-4 py-32">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.contactPage.backToHome}
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h1 className="mb-6 text-4xl font-bold">{t.contactPage.title}</h1>
            <p className="mb-8 text-lg text-muted-foreground">
              {t.contactPage.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">{t.contactPage.generalInquiries}</h3>
                  <a
                    href="mailto:info@visionforum.ai"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@visionforum.ai
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-secondary/10 p-3">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">{t.contactPage.partnership}</h3>
                  <a
                    href="mailto:partnerships@visionforum.ai"
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    partnerships@visionforum.ai
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/10 p-3">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">{t.contactPage.pressMedia}</h3>
                  <a
                    href="mailto:press@visionforum.ai"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    press@visionforum.ai
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="mb-4 font-semibold">{t.contactPage.followUs}</h3>
              <div className="flex gap-4">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-card p-3 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-card p-3 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-card p-3 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="mb-6 text-2xl font-bold">{t.contactPage.quickLinks}</h2>
            <nav className="space-y-4">
              <a
                href="https://register.gosim.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-border bg-background p-4 font-medium transition-all hover:border-accent hover:bg-accent/5"
              >
                {t.contactPage.requestInvitation}
              </a>
              <Link
                href="/#tracks"
                className="block rounded-lg border border-border bg-background p-4 font-medium transition-all hover:border-primary hover:bg-primary/5"
              >
                {t.contactPage.exploreTracks}
              </Link>
              <Link
                href="/#about"
                className="block rounded-lg border border-border bg-background p-4 font-medium transition-all hover:border-secondary hover:bg-secondary/5"
              >
                {t.contactPage.aboutForum}
              </Link>
            </nav>

            <div className="mt-8 rounded-lg bg-primary/5 p-6">
              <h3 className="mb-2 text-lg font-semibold">{t.contactPage.noteTitle}</h3>
              <p className="text-sm text-muted-foreground">
                {t.contactPage.noteDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
