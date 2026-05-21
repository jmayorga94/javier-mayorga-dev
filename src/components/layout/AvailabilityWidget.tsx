interface AvailabilityWidgetProps {
  href?: string;
  className?: string;
}

export function AvailabilityWidget({ href = "#contact", className = "" }: AvailabilityWidgetProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e2330] hover:border-[#1D9E75]/50 transition-colors ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-70 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1D9E75]" />
      </span>
      <span className="font-mono text-[11px] tracking-[0.02em] text-[#9ca3af] group-hover:text-[#f9fafb] transition-colors">
        Available · Q3 2025
      </span>
      <span className="font-mono text-[11px] text-[#1D9E75] transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}
