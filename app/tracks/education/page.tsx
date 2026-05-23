"use client";

import { GraduationCap } from "lucide-react";
import { TrackLayout } from "@/components/tracks/TrackLayout";
import { PostEventPanelContent } from "@/components/tracks/PostEventPanelContent";
import { useTranslation } from "@/lib/i18n";

export default function EducationTrack() {
  const { t } = useTranslation();

  return (
    <TrackLayout
      title={t.trackEducation.title}
      icon={<GraduationCap className="h-14 w-14 text-primary" />}
      gradient="bg-gradient-to-br from-primary/20 via-background to-secondary/10"
      overview={t.trackEducation.overview}
      keyTopics={t.trackEducation.keyTopics}
      resources={[
        {
          title: "UNESCO's AI in Education Framework",
          url: "https://www.unesco.org/en/digital-education/artificial-intelligence",
        },
      ]}
    >
      <PostEventPanelContent slug="education" />

      <div className="prose prose-invert max-w-none mt-16">
        <h2 className="text-2xl font-bold mb-4">{t.trackEducation.whyMattersTitle}</h2>
        <p className="text-muted-foreground">
          {t.trackEducation.whyMattersText}
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">{t.trackEducation.focusAreasTitle}</h3>
        <ul className="space-y-2 text-muted-foreground">
          {t.trackEducation.focusAreas.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>
    </TrackLayout>
  );
}
