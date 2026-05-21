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
  { name: "run",   ms: 10000 }, // natural running pace, air trails behind
  { name: "walk",  ms: 2500 },  // walks to the bench
  { name: "lift",  ms: 10000 }, // lies on incline bench, presses barbell
  { name: "shoes", ms: 3000 },  // kneels down, ties shoes
];

/**
 * The athlete's routine — natural run → cool-down walk → incline bench press → tie shoes → repeat.
 * Single SVG with three pose-groups stacked; CSS reveals only the group active for the current
 * data-phase via opacity crossfade. Per-phase animations handle stride, press, and lacing.
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

      {/* ── POSE: tying shoes ── */}
      <g className="pose-shoes">
        <circle cx="8" cy="3.5" r="1.2" fill="#1D9E75" stroke="none" />
        <path d="M8 4.5 L7 7 L5 8.7" />
        <path d="M5 8.7 L7 11 L9 13" />
        <path d="M5 8.7 L4 11 L3 13" />
        <path className="arm-shoes" d="M5 8.7 L3 12" />
        <path d="M2.3 13 L4.2 13" strokeWidth="1.8" />
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
