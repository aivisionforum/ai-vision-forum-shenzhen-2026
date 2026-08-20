import type { Metadata } from "next";
import { TrackTopicPage } from "@/components/program/TrackTopicPage";
import { PROGRAM_DAYS } from "@/lib/program";

export function generateStaticParams() {
  return PROGRAM_DAYS.flatMap((day) => day.topics.map((topic) => ({ slug: topic.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const topic = PROGRAM_DAYS.flatMap((d) => d.topics).find((t) => t.slug === slug);
  return {
    title: topic ? `${topic.title.en} | AVF’26` : "Topic | AVF’26",
    description: topic?.description.en,
  };
}

export default async function TrackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <TrackTopicPage slug={slug} />;
}
