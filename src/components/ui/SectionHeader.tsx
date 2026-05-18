interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  className?: string;
  sectionNumber?: string;
}

export function SectionHeader({ eyebrow, title, className = "", sectionNumber }: SectionHeaderProps) {
  return (
    <div className={`mb-16 relative ${className}`}>
      {sectionNumber && (
        <span className="absolute -top-8 left-0 text-[120px] font-medium text-[#f3f4f6] leading-none select-none pointer-events-none z-0 overflow-hidden">
          {sectionNumber}
        </span>
      )}
      <div className="relative z-10">
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#1D9E75] mb-4">
          {eyebrow}
        </p>
        <h2 className="text-[36px] font-medium text-[#0f1117] leading-[1.2]">
          {title}
        </h2>
      </div>
    </div>
  );
}
