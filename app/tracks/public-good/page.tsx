"use client";

import { Globe } from "lucide-react";
import { TrackLayout } from "@/components/tracks/TrackLayout";
import { PostEventPanelContent } from "@/components/tracks/PostEventPanelContent";
import { useTranslation } from "@/lib/i18n";

export default function PublicGoodTrack() {
  const { t } = useTranslation();

  return (
    <TrackLayout
      title={t.trackPublicGood.title}
      icon={<Globe className="h-14 w-14 text-primary" />}
      gradient="bg-gradient-to-br from-primary/20 via-background to-accent/10"
      overview={t.trackPublicGood.overview}
      keyTopics={t.trackPublicGood.keyTopics}
      resources={[
        {
          title: "Open Token",
          url: "https://open-token.org/",
        },
        {
          title: "Digital Public Goods Alliance",
          url: "https://digitalpublicgoods.net/",
        },
        {
          title: "Linux Foundation AI & Data",
          url: "https://lfaidata.foundation/",
        },
      ]}
    >
      <PostEventPanelContent slug="public-good" />

      <div className="prose prose-invert max-w-none mt-16">
        <h2 className="text-2xl font-bold mb-4">{t.trackPublicGood.humanityTitle}</h2>
        <p className="text-muted-foreground">
          {t.trackPublicGood.humanityText}
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">{t.trackPublicGood.projectsTitle}</h3>
        <ul className="space-y-2 text-muted-foreground">
          {t.trackPublicGood.projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>
    </TrackLayout>
  );
}
