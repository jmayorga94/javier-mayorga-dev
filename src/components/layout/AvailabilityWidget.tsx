"use client";

import { useEffect, useState } from "react";

interface AvailabilityWidgetProps {
  href?: string;
  className?: string;
  /** Compact: shows only the animated figure (no pill, no text). For mobile bars. */
  compact?: boolean;
}

type Phase = "run" | "walk" | "lift" | "code";

// Full narrative cycle: ~37s — run, walk to bench, press, walk back, sit and code, walk, loop.
const cycle: { name: Phase; ms: number }[] = [
  { name: "run",  ms: 10000 }, // natural running pace, air trails behind
  { name: "walk", ms: 2500 },  // walks to the bench
  { name: "lift", ms: 10000 }, // lies on incline bench, presses barbell
  { name: "walk", ms: 3000 },  // natural walk back
  { name: "code", ms: 9000 },  // sits at desk, types
  { name: "walk", ms: 2500 },  // walks back to starting line
];

/**
 * The athlete's routine — run → walk → incline bench press → walk → repeat.
 * Single SVG with two pose-groups stacked (.pose-stand for run/walk, .pose-bench
 * for lift); CSS reveals only the group active for the current data-phase via
 * opacity crossfade.
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
      {/* ── Air streaks — trail BEHIND a right-facing runner (left side) ── */}
      <g className="air">
        <path d="M3 4.5 q -1.5 -0.4 -3 0" />
        <path d="M2.5 7.5 q -1.5 0.4 -3 0" />
        <path d="M3 10.5 q -1.5 -0.4 -3 0" />
      </g>

      {/* ── POSE: standing (run / walk) ── */}
      <g className="pose-stand">
        <circle cx="8" cy="3" r="1.2" fill="#1D9E75" stroke="none" />
        <path d="M8 4.2 L8 9" />
        <path className="leg-run-back"  d="M8 9 L10.5 13" />
        <path className="leg-run-front" d="M8 9 L5.5 13" />
        <path className="arm-run-back"  d="M8 5.5 L5.5 5" />
        <path className="arm-run-front" d="M8 5.5 L10.5 7" />
      </g>

      {/* ── POSE: coding at desk ── */}
      <g className="pose-code">
        {/* Monitor */}
        <rect x="6.5" y="3.5" width="5" height="3.5" rx="0.4" />
        <line x1="9" y1="7" x2="9" y2="8.2" />
        <line x1="7.5" y1="8.2" x2="10.5" y2="8.2" />
        {/* Desk surface */}
        <line x1="2" y1="11.5" x2="16" y2="11.5" />
        {/* Head */}
        <circle cx="9" cy="2.2" r="1.2" fill="#1D9E75" stroke="none" />
        {/* Torso */}
        <line x1="9" y1="3.4" x2="9" y2="9.5" />
        {/* Legs bent (seated) */}
        <line x1="9" y1="9.5" x2="7"  y2="11.5" />
        <line x1="9" y1="9.5" x2="11" y2="11.5" />
        {/* Arms reaching to keyboard */}
        <line className="arm-type-left"  x1="9" y1="6" x2="6.5" y2="10.5" />
        <line className="arm-type-right" x1="9" y1="6" x2="11.5" y2="10.5" />
      </g>

      {/* ── POSE: incline bench press (lift) ── */}
      <g className="pose-bench">
        {/* Bench surface (inclined ~22°) and supports */}
        <line x1="3" y1="13.4" x2="14" y2="7.6" strokeWidth="1.4" />
        <line x1="3.6" y1="13.6" x2="3.6" y2="15.2" />
        <line x1="13.4" y1="7.9" x2="13.4" y2="15.2" />

        {/* Head at the top of the incline */}
        <circle cx="14.2" cy="6.6" r="1.2" fill="#1D9E75" stroke="none" />

        {/* Body lying along the incline */}
        <line x1="13.6" y1="7.5" x2="6.2" y2="12.4" strokeWidth="1.4" />

        {/* Legs hanging off the foot of the bench */}
        <line x1="6.2" y1="12.4" x2="5" y2="14.6" />
        <line x1="6.2" y1="12.4" x2="7.5" y2="14.6" />

        {/* Arms reaching up from the chest, scale-Y bends them on the press */}
        <line className="arm-press-back"  x1="11" y1="9.5"   x2="10" y2="4.6" />
        <line className="arm-press-front" x1="11.5" y1="9.2" x2="12" y2="4.6" />

        {/* Barbell + weight plates — group translates up/down with the press */}
        <g className="press-group">
          <line x1="10" y1="4.6" x2="12" y2="4.6" strokeWidth="1.4" />
          <rect x="8.4" y="3.6" width="1.6" height="2" rx="0.2" fill="#1D9E75" stroke="none" />
          <rect x="12" y="3.6"  width="1.6" height="2" rx="0.2" fill="#1D9E75" stroke="none" />
        </g>
      </g>

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
