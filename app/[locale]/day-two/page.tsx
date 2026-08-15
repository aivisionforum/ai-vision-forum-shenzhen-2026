import type { Metadata } from "next";
import { ProgramDayPage } from "@/components/program/ProgramDayPage";

export const metadata: Metadata = {
  title: "Day Two — The Enterprise | AVF’26",
  description: "Rewire and Inception: governing the agentic transformation and engineering the AI-native organization.",
};

export default function DayTwoPage() {
  return <ProgramDayPage dayId="enterprise" />;
}
