"use client";

import { Laptop } from "lucide-react";
import { TrackLayout } from "@/components/tracks/TrackLayout";
import { PostEventPanelContent } from "@/components/tracks/PostEventPanelContent";
import { useTranslation } from "@/lib/i18n";

export default function AgenticSystemsTrack() {
  const { t } = useTranslation();

  return (
    <TrackLayout
      title={t.trackVibeCoding.title}
      icon={<Laptop className="h-14 w-14 text-primary" />}
      gradient="bg-gradient-to-br from-secondary/20 via-background to-accent/10"
      overview={t.trackVibeCoding.overview}
      keyTopics={t.trackVibeCoding.keyTopics}
    >
      <PostEventPanelContent slug="vibe-coding" />

      <div className="prose prose-invert max-w-none mt-16">
        <h2 className="text-2xl font-bold mb-4">{t.trackVibeCoding.spotlightTitle}</h2>
        <p className="text-muted-foreground">
          {t.trackVibeCoding.spotlightText}
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">{t.trackVibeCoding.whatYouLearnTitle}</h3>
        <ul className="space-y-2 text-muted-foreground">
          {t.trackVibeCoding.whatYouLearn.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </TrackLayout>
  );
}
