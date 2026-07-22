"use client";

import { Globe } from "lucide-react";
import { TrackLayout } from "@/components/tracks/TrackLayout";
import { useTranslation } from "@/lib/i18n";

export default function OpenSourceTrack() {
  const { t } = useTranslation();
  const track = t.trackOpenSource;

  return (
    <TrackLayout
      title={track.title}
      icon={<Globe className="h-14 w-14 text-primary" />}
      gradient="bg-gradient-to-br from-accent/20 via-background to-primary/10"
      overview={track.overview}
      keyTopics={track.keyTopics}
    >
      <div className="prose prose-invert max-w-none mt-16">
        <h2 className="text-2xl font-bold mb-4">{track.spotlightTitle}</h2>
        <p className="text-muted-foreground">{track.spotlightText}</p>

        <h3 className="text-xl font-bold mt-8 mb-4">{track.outcomesTitle}</h3>
        <ul className="space-y-2 text-muted-foreground">
          {track.outcomes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </TrackLayout>
  );
}
