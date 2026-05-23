"use client";

import { useState, useEffect } from "react";
import { COUNTDOWN_TARGET, EVENT_CONFIG } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Countdown to the event — slate cards, cyan digits, magenta "active signal"
 * pulse on the seconds card every tick.
 */
export function CountdownTimer() {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = COUNTDOWN_TARGET.getTime() - new Date().getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (EVENT_CONFIG.status === "completed") {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-4 md:gap-6">
      <TimeUnit value={timeLeft.days} label={t.countdown.days} />
      <Separator />
      <TimeUnit value={timeLeft.hours} label={t.countdown.hours} />
      <Separator />
      <TimeUnit value={timeLeft.minutes} label={t.countdown.minutes} />
      <Separator />
      <TimeUnit value={timeLeft.seconds} label={t.countdown.seconds} pulse />
    </div>
  );
}

function TimeUnit({
  value,
  label,
  pulse = false,
}: {
  value: number;
  label: string;
  pulse?: boolean;
}) {
  // For the seconds card we briefly flash the border magenta when value
  // changes — gives an "active signal" heartbeat.
  const [flash, setFlash] = useState(false);
  useEffect(() => {
    if (!pulse) return;
    setFlash(true);
    const t = setTimeout(() => setFlash(false), 220);
    return () => clearTimeout(t);
  }, [value, pulse]);

  const borderColor = flash ? "#FF006E" : "rgba(0, 229, 255, 0.3)";

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex h-16 w-14 items-center justify-center rounded-lg bg-[#0F172A]/80 backdrop-blur-sm transition-colors md:h-20 md:w-16"
        style={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor,
          boxShadow: flash
            ? "0 0 16px rgba(255, 0, 110, 0.4)"
            : "0 0 12px rgba(0, 229, 255, 0.1)",
        }}
      >
        <span className="tabular-nums text-2xl font-bold text-[#00E5FF] md:text-3xl">
          {value.toString().padStart(2, "0")}
        </span>
        <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-b from-[#00E5FF]/5 to-transparent" />
      </div>
      <span className="mt-2 text-[0.65rem] font-medium uppercase tracking-widest text-[#94A3B8] md:text-xs">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-1.5 w-1.5 rounded-full bg-[#00E5FF]/60" />
      <div className="h-1.5 w-1.5 rounded-full bg-[#00E5FF]/60" />
    </div>
  );
}
