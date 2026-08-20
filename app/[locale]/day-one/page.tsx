import type { Metadata } from "next";
import { ProgramDayPage } from "@/components/program/ProgramDayPage";

export const metadata: Metadata = {
  title: "Open Source Forum — Surviving and Thriving | AVF’26",
  description: "Roots and Bloom: open source holding ground in the agentic era, and Mobile Agentic OS at the new device frontier.",
};

export default function DayOnePage() {
  return <ProgramDayPage dayId="open" />;
}
