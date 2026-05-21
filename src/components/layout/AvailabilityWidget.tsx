"use client";

import { useEffect, useState } from "react";

interface AvailabilityWidgetProps {
  href?: string;
  className?: string;
  /** Compact: shows only the animated figure (no pill, no text). For mobile bars. */
  compact?: boolean;
}

type Phase = "sprint" | "slow" | "walk" | "lift";

const cycle: { name: Phase; ms: number }[] = [
  { name: "sprint", ms: 3200 },
  { name: "slow",   ms: 1600 },
  { name: "walk",   ms: 2800 },
  { name: "lift",   ms: 3800 },
];

/**
 * Status pill: a tiny athlete who actually trains.
 * Cycles through sprint (with air streaks) → slow down → walk → lift weights → repeat.
 * Text stays "Always learning"; the body language carries the metaphor.
 */
export function AvailabilityWidget({
  href = "#contact",
  className = "",
  compact = false,
}: AvailabilityWidgetProps) {
  const [phase, setPhase] = useState<Phase>("sprint");

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
      viewBox="0 0 20 16"
      width={compact ? "20" : "18"}
      height={compact ? "16" : "14"}
      fill="none"
      stroke="#1D9E75"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      data-phase={phase}
      className="runner shrink-0"
    >
      {/* Air streaks — only during sprint */}
      <g className="air">
        <path d="M16 4.5 q 1.5 -0.4 3 0" />
        <path d="M16.5 7.5 q 1.5 0.4 3 0" />
        <path d="M16 10.5 q 1.5 -0.4 3 0" />
      </g>

      {/* Head */}
      <circle cx="9" cy="3" r="1.2" fill="#1D9E75" stroke="none" />

      {/* Torso */}
      <path d="M9 4.2 L7.5 9" className="torso" />

      {/* Arms — pivot at shoulder (7.8, 6) */}
      <path d="M7.8 6 L10.5 5.2" className="arm-back" />
      <path d="M7.8 6 L5.5 7" className="arm-front" />

      {/* Dumbbells — only during lift, anchored to each fist */}
      <g className="weights">
        <rect x="9.6" y="3.4" width="2.2" height="0.7" rx="0.2" fill="#1D9E75" stroke="none" />
        <rect x="4.4" y="3.4" width="2.2" height="0.7" rx="0.2" fill="#1D9E75" stroke="none" />
      </g>

      {/* Legs — pivot at hip (7.5, 9) */}
      <path d="M7.5 9 L9.5 13" className="leg-back" />
      <path d="M7.5 9 L5 12.5" className="leg-front" />
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
