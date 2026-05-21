interface AvailabilityWidgetProps {
  href?: string;
  className?: string;
}

/**
 * "Always learning" status pill with a tiny animated runner.
 * The runner is a minimalist stick figure whose legs swing alternately —
 * conveys forward motion without being noisy. Teal everywhere → reads as
 * an active/green status indicator.
 */
export function AvailabilityWidget({ href = "#contact", className = "" }: AvailabilityWidgetProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--hairline)] hover:border-[#1D9E75]/50 transition-colors ${className}`}
    >
      {/* Animated runner — minimalist, teal */}
      <svg
        viewBox="0 0 16 16"
        width="14"
        height="14"
        fill="none"
        stroke="#1D9E75"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="runner shrink-0"
      >
        {/* Head */}
        <circle cx="9" cy="3" r="1.2" fill="#1D9E75" stroke="none" />
        {/* Torso — slight forward lean */}
        <path d="M9 4.2 L7.5 9" />
        {/* Arm — back */}
        <path d="M7.8 6 L10.5 5.2" className="arm-back" />
        {/* Arm — front (swinging) */}
        <path d="M7.8 6 L5.5 7" className="arm-front" />
        {/* Leg — back */}
        <path d="M7.5 9 L9.5 13" className="leg-back" />
        {/* Leg — front */}
        <path d="M7.5 9 L5 12.5" className="leg-front" />
      </svg>

      <span className="font-mono text-[11px] tracking-[0.02em] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
        Always learning
      </span>

      <span className="font-mono text-[11px] text-[#1D9E75] transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}
