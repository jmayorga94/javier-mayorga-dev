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
      {/* Diagram area — light "screen" inside the dark card, with a teal-tinted
          gradient + inset shadows so it reads as an intentional artifact, not a glitch */}
      <div
        className="relative px-6 pt-6 pb-4"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #ffffff 0%, #f6fffb 55%, #ebfaf3 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(29,158,117,0.18), inset 0 0 0 1px rgba(29,158,117,0.06)",
        }}
      >
        {/* Tiny corner glyphs — like crop marks on an architectural drawing */}
        <span
          aria-hidden="true"
          className="absolute top-2 left-2 font-mono text-[8px] text-[#1D9E75]/45 tracking-widest"
        >
          ◢
        </span>
        <span
          aria-hidden="true"
          className="absolute bottom-2 right-2 font-mono text-[8px] text-[#1D9E75]/45 tracking-widest"
        >
          ◤
        </span>

        {diagram}

        {metric && (
          <span className="absolute top-3 right-3 text-[11px] font-medium text-[#1D9E75] bg-white/95 border border-[#1D9E75]/30 px-2 py-0.5 rounded-full shadow-[0_2px_8px_rgba(29,158,117,0.12)]">
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
