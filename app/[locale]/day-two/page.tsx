import type { Metadata } from "next";
import { ProgramDayPage } from "@/components/program/ProgramDayPage";

export const metadata: Metadata = {
  title: "Day Two — The Enterprise | AVF’26",
  description: "Reshape, Rewire, Reconnect, Native: building the AI-native organization, engineering around agents, practice in production, and one-person companies.",
};

export default function DayTwoPage() {
  return <ProgramDayPage dayId="enterprise" />;
}
