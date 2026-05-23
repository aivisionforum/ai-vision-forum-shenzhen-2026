"use client";

import { Scale } from "lucide-react";
import { TrackLayout } from "@/components/tracks/TrackLayout";
import { PostEventPanelContent } from "@/components/tracks/PostEventPanelContent";
import { useTranslation } from "@/lib/i18n";

export default function GovernanceTrack() {
  const { t } = useTranslation();

  return (
    <TrackLayout
      title={t.trackGovernance.title}
      icon={<Scale className="h-14 w-14 text-primary" />}
      gradient="bg-gradient-to-br from-accent/20 via-background to-primary/10"
      overview={t.trackGovernance.overview}
      keyTopics={t.trackGovernance.keyTopics}
      resources={[
        {
          title: "EU AI Act Official Text",
          url: "https://artificialintelligenceact.eu/",
        },
        {
          title: "OECD AI Principles",
          url: "https://www.oecd.org/digital/artificial-intelligence/",
        },
      ]}
    >
      <PostEventPanelContent slug="governance" />

      <div className="prose prose-invert max-w-none mt-16">
        <h2 className="text-2xl font-bold mb-4">{t.trackGovernance.approachTitle}</h2>
        <p className="text-muted-foreground">
          {t.trackGovernance.approachText}
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">{t.trackGovernance.outcomesTitle}</h3>
        <ul className="space-y-2 text-muted-foreground">
          {t.trackGovernance.outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </div>
    </TrackLayout>
  );
}
