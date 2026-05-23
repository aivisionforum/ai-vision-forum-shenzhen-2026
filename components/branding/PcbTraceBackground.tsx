"use client";

import { motion } from "framer-motion";

interface PcbTraceBackgroundProps {
  /**
   * `hero` (default): higher opacity (~0.25), more traces, animated pulses.
   * `subtle`: lower opacity (~0.15), no pulses — for body sections.
   */
  intensity?: "subtle" | "hero";
  className?: string;
}

/**
 * Reusable PCB-trace SVG background.
 *
 * Renders a deterministic grid of orthogonal copper-style traces with rounded
 * elbows + pads at junctions, mimicking a printed-circuit-board routing
 * diagram. Optional cyan pulses ride along selected traces.
 *
 * SSR-safe: the SVG markup itself renders on the server; only the framer
 * `motion.circle` pulses initialize on the client. Place behind content with
 * `absolute inset-0`.
 */
export function PcbTraceBackground({
  intensity = "hero",
  className = "",
}: PcbTraceBackgroundProps) {
  const isHero = intensity === "hero";
  const traceOpacity = isHero ? 0.28 : 0.16;
  const padOpacity = isHero ? 0.55 : 0.32;
  const traceColor = "#1E293B";
  const padColor = "#334155";
  const cyan = "#00E5FF";
  const copper = "#FFC857";

  // Trace paths laid out on a 1200×800 viewBox. Each path starts at one edge,
  // turns once or twice (rounded corners via the `r` we apply via stroke-linejoin
  // + small arc segments), terminates at a pad. Order chosen so they fan out
  // visually rather than stacking.
  const traces: { d: string; key: string }[] = [
    { key: "t1", d: "M 0 120 L 320 120 Q 340 120 340 140 L 340 280 L 720 280" },
    { key: "t2", d: "M 1200 200 L 920 200 Q 900 200 900 220 L 900 360 L 600 360" },
    { key: "t3", d: "M 0 440 L 180 440 Q 200 440 200 460 L 200 620 L 460 620" },
    { key: "t4", d: "M 1200 520 L 1040 520 Q 1020 520 1020 540 L 1020 700 L 760 700" },
    { key: "t5", d: "M 160 0 L 160 80 Q 160 100 180 100 L 400 100" },
    { key: "t6", d: "M 980 0 L 980 140 Q 980 160 960 160 L 740 160" },
    { key: "t7", d: "M 420 800 L 420 660 Q 420 640 440 640 L 660 640" },
    { key: "t8", d: "M 1080 800 L 1080 600 Q 1080 580 1060 580 L 820 580" },
  ];

  // Pads at trace termini and key intersections
  const pads: { x: number; y: number; key: string }[] = [
    { key: "p1", x: 720, y: 280 },
    { key: "p2", x: 600, y: 360 },
    { key: "p3", x: 460, y: 620 },
    { key: "p4", x: 760, y: 700 },
    { key: "p5", x: 400, y: 100 },
    { key: "p6", x: 740, y: 160 },
    { key: "p7", x: 660, y: 640 },
    { key: "p8", x: 820, y: 580 },
    { key: "p9", x: 340, y: 280 },
    { key: "p10", x: 900, y: 360 },
    { key: "p11", x: 200, y: 620 },
    { key: "p12", x: 1020, y: 700 },
  ];

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Very faint grid base */}
        <defs>
          <pattern
            id="pcb-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#1E293B"
              strokeWidth="0.5"
              opacity={isHero ? 0.4 : 0.25}
            />
          </pattern>
        </defs>
        <rect width="1200" height="800" fill="url(#pcb-grid)" />

        {/* Traces */}
        <g
          stroke={traceColor}
          strokeWidth={1.5}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={traceOpacity * 3}
        >
          {traces.map((t) => (
            <path key={t.key} d={t.d} />
          ))}
        </g>

        {/* Pad rectangles at trace termini */}
        <g fill={padColor} opacity={padOpacity}>
          {pads.map((p) => (
            <rect
              key={p.key}
              x={p.x - 2}
              y={p.y - 2}
              width={4}
              height={4}
              rx={0.5}
            />
          ))}
        </g>

        {/* Copper highlight pads — one or two extras, very subtle */}
        {isHero && (
          <g fill={copper} opacity={0.5}>
            <rect x={718} y={278} width={4} height={4} rx={0.5} />
            <rect x={398} y={98} width={4} height={4} rx={0.5} />
          </g>
        )}

        {/* Animated cyan signal pulses on two traces — only on hero */}
        {isHero && (
          <>
            <motion.circle
              r={3}
              fill={cyan}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                offsetDistance: ["0%", "100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.1, 0.85, 1],
              }}
              style={{
                offsetPath:
                  "path('M 0 120 L 320 120 Q 340 120 340 140 L 340 280 L 720 280')",
                filter: "drop-shadow(0 0 6px #00E5FF)",
              }}
            />
            <motion.circle
              r={3}
              fill={cyan}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                offsetDistance: ["0%", "100%"],
              }}
              transition={{
                duration: 6,
                delay: 1.2,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.1, 0.85, 1],
              }}
              style={{
                offsetPath:
                  "path('M 1200 520 L 1040 520 Q 1020 520 1020 540 L 1020 700 L 760 700')",
                filter: "drop-shadow(0 0 6px #00E5FF)",
              }}
            />
          </>
        )}
      </svg>
    </div>
  );
}
