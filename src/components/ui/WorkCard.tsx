interface WorkCardProps {
  diagram: React.ReactNode;
  metric?: string;
  title: string;
  desc: string;
  outcome: string;
  className?: string;
}

export function WorkCard({ diagram, metric, title, desc, outcome, className = "" }: WorkCardProps) {
  return (
    <div
      className={`group relative backdrop-blur-xl border rounded-lg overflow-hidden hover:-translate-y-[6px] hover:border-[#1D9E75]/40 hover:shadow-[0_24px_60px_rgba(29,158,117,0.12)] transition-all duration-300 ${className}`}
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--hairline)",
      }}
    >
      {/* Diagram area — keeps light bg as intentional contrast (reads as architectural artifact) */}
      <div className="relative bg-[#fafffe] px-6 pt-6 pb-4">
        {diagram}
        {metric && (
          <span className="absolute top-3 right-3 text-[11px] font-medium text-[#1D9E75] bg-white border border-[#d1fae5] px-2 py-0.5 rounded-full">
            {metric}
          </span>
        )}
      </div>

      {/* Content area */}
      <div className="px-6 py-5 flex flex-col gap-3 border-t" style={{ borderColor: "var(--hairline)" }}>
        <h3 className="text-[16px] font-medium text-[var(--text-primary)]">{title}</h3>
        <p className="text-[14px] text-[var(--text-secondary)] leading-[1.6]">{desc}</p>
        <p className="text-[13px] text-[#1D9E75] font-medium">{outcome}</p>
      </div>
    </div>
  );
}
