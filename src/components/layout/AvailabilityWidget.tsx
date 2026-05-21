"use client";

import { useEffect, useState } from "react";

interface AvailabilityWidgetProps {
  href?: string;
  className?: string;
  /** Compact: shows only the animated figure (no pill, no text). For mobile bars. */
  compact?: boolean;
}

type Phase = "run" | "walk" | "lift" | "shoes";

// Full narrative cycle: ~25.5s
const cycle: { name: Phase; ms: number }[] = [
  { name: "run",   ms: 10000 }, // sprints for 10s with air trailing behind
  { name: "walk",  ms: 2500 },  // walks to the bench
  { name: "lift",  ms: 10000 }, // sits on bench, lifts weights
  { name: "shoes", ms: 3000 },  // gets up, puts shoes on, back to running
];

/**
 * The athlete's full routine — sprint, cool-down walk, bench press, lace up,
 * repeat. Single SVG with all pose elements stacked; CSS reveals only the
 * paths relevant to the active phase. Disabled under prefers-reduced-motion.
 */
export function AvailabilityWidget({
  href = "#contact",
  className = "",
  compact = false,
}: AvailabilityWidgetProps) {
  const [phase, setPhase] = useState<Phase>("run");

  useEffect(() => {
    let idx = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    const tick = () => {
      idx = (idx + 1) % cycle.length;
      setPhase(cycle[idx].name);
      timeoutId = setTimeout(tick, cycle[idx].ms);
    };
    timeoutId = setTimeout(tick, cycle[0].ms);
    return () => clearTimeout(timeoutId);
  }, []);

  const runner = (
    <svg
      viewBox="-4 0 24 16"
      width={compact ? "22" : "20"}
      height={compact ? "16" : "14"}
      fill="none"
      stroke="#1D9E75"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      data-phase={phase}
      className="runner shrink-0 overflow-visible"
    >
      {/* Air streaks — BEHIND a right-facing runner (left side), only during run */}
      <g className="air">
        <path d="M3 4.5 q -1.5 -0.4 -3 0" />
        <path d="M2.5 7.5 q -1.5 0.4 -3 0" />
        <path d="M3 10.5 q -1.5 -0.4 -3 0" />
      </g>

      {/* Bench — only during lift (seat + two legs) */}
      <g className="bench">
        <rect x="3" y="10.4" width="10" height="0.5" rx="0.2" fill="#1D9E75" stroke="none" />
        <line x1="4" y1="10.9" x2="4" y2="12.5" />
        <line x1="12" y1="10.9" x2="12" y2="12.5" />
      </g>

      {/* Head — always visible */}
      <circle cx="8" cy="3" r="1.2" fill="#1D9E75" stroke="none" />

      {/* Torso — upright variant (run/walk/lift) */}
      <path className="torso-up" d="M8 4.2 L8 9" />
      {/* Torso — bent forward (shoes) */}
      <path className="torso-bent" d="M8 4.2 L7 7 L5 8.5" />

      {/* — RUN/WALK legs — */}
      <path className="leg-run-back"  d="M8 9 L10.5 13" />
      <path className="leg-run-front" d="M8 9 L5.5 13" />

      {/* — LIFT (sitting) legs — knees bent, feet on ground in front of bench — */}
      <path className="leg-sit-back"  d="M8 9 L11 10.4 L11 12.8" />
      <path className="leg-sit-front" d="M8 9 L5  10.4 L5  12.8" />

      {/* — SHOES (kneeling/bent) legs — */}
      <path className="leg-shoes-back"  d="M5 8.5 L7 11 L9 13" />
      <path className="leg-shoes-front" d="M5 8.5 L4 11 L3 13" />

      {/* — RUN/WALK arms — */}
      <path className="arm-run-back"  d="M8 5.5 L5.5 5" />
      <path className="arm-run-front" d="M8 5.5 L10.5 7" />

      {/* — LIFT arms — bicep curl, paths sit "hanging" by default, animation rotates them up — */}
      <path className="arm-curl-back"  d="M8 5.5 L7  7.5" />
      <path className="arm-curl-front" d="M8 5.5 L9  7.5" />

      {/* — Dumbbells — attached to curl hands — */}
      <g className="weight-back">
        <rect x="6.1" y="7.2" width="1.8" height="0.6" rx="0.15" fill="#1D9E75" stroke="none" />
      </g>
      <g className="weight-front">
        <rect x="8.1" y="7.2" width="1.8" height="0.6" rx="0.15" fill="#1D9E75" stroke="none" />
      </g>

      {/* — SHOES arms — reaching down to the laced foot — */}
      <path className="arm-shoes" d="M5 8.5 L3 12" />

      {/* Tiny shoe glyph during shoes phase */}
      <path className="shoe" d="M2.5 13 L4 13" strokeWidth="1.8" />
    </svg>
  );

  if (compact) {
    return (
      <a
        href={href}
        aria-label="Always learning"
        title="Always learning"
        className={`group inline-flex items-center justify-center h-9 w-9 rounded-full hover:bg-[var(--hairline-soft)] transition-colors ${className}`}
      >
        {runner}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--hairline)] hover:border-[#1D9E75]/50 transition-colors ${className}`}
    >
      {runner}
      <span className="font-mono text-[11px] tracking-[0.02em] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
        Always learning
      </span>
      <span className="font-mono text-[11px] text-[#1D9E75] transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}
