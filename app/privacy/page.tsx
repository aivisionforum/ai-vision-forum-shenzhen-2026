"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background px-4 py-32">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.privacyPage.backToHome}
        </Link>

        <article className="prose prose-invert max-w-none">
          <h1>{t.privacyPage.title}</h1>
          <p className="text-xl text-muted-foreground">
            {t.privacyPage.lastUpdated}
          </p>

          <h2>{t.privacyPage.overview}</h2>
          <p>{t.privacyPage.overviewText}</p>

          <h2>{t.privacyPage.infoCollect}</h2>
          <ul>
            <li><strong>{t.privacyPage.infoRegistration.split(':')[0]}:</strong>{t.privacyPage.infoRegistration.split(':').slice(1).join(':')}</li>
            <li><strong>{t.privacyPage.infoParticipation.split(':')[0]}:</strong>{t.privacyPage.infoParticipation.split(':').slice(1).join(':')}</li>
            <li><strong>{t.privacyPage.infoAnalytics.split(':')[0]}:</strong>{t.privacyPage.infoAnalytics.split(':').slice(1).join(':')}</li>
          </ul>

          <h2>{t.privacyPage.chathamTitle}</h2>
          <p>{t.privacyPage.chathamText}</p>

          <h2>{t.privacyPage.dataUsage}</h2>
          <p>{t.privacyPage.dataUsageIntro}</p>
          <ul>
            {t.privacyPage.dataUsageItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>{t.privacyPage.dataProtection}</h2>
          <p>{t.privacyPage.dataProtectionText}</p>

          <h2>{t.privacyPage.yourRights}</h2>
          <p>{t.privacyPage.yourRightsIntro}</p>
          <ul>
            {t.privacyPage.yourRightsItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>{t.privacyPage.contactTitle}</h2>
          <p>
            {t.privacyPage.contactText} <a href="mailto:privacy@visionforum.ai">privacy@visionforum.ai</a>
          </p>
        </article>
      </div>
    </div>
  );
}
