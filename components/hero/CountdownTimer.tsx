"use client";

import { useEffect, useState } from "react";
import { COUNTDOWN_TARGET, EVENT_CONFIG } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EMPTY_TIME = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export function CountdownTimer() {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(EMPTY_TIME);

  useEffect(() => {
    const calculate = (): TimeLeft => {
      const difference = COUNTDOWN_TARGET.getTime() - Date.now();
      if (difference <= 0) return EMPTY_TIME;
      return {
        days: Math.floor(difference / 86_400_000),
        hours: Math.floor((difference / 3_600_000) % 24),
        minutes: Math.floor((difference / 60_000) % 60),
        seconds: Math.floor((difference / 1_000) % 60),
      };
    };

    setTimeLeft(calculate());
    const timer = window.setInterval(() => setTimeLeft(calculate()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (EVENT_CONFIG.status === "completed") return null;

  const units = [
    [timeLeft.days, t.countdown.days],
    [timeLeft.hours, t.countdown.hours],
    [timeLeft.minutes, t.countdown.minutes],
    [timeLeft.seconds, t.countdown.seconds],
  ] as const;

  return (
    <div className="grid grid-cols-4 border-y border-foreground" aria-label="Event countdown">
      {units.map(([value, label], index) => (
        <div key={label} className={`py-4 ${index > 0 ? "border-l border-foreground/30 pl-4 sm:pl-6" : ""}`}>
          <span className="block font-mono text-2xl font-bold tabular-nums sm:text-3xl">{value.toString().padStart(2, "0")}</span>
          <span className="mt-1 block text-sm font-semibold text-muted-foreground">{label}</span>
        </div>
      ))}
    </div>
  );
}
