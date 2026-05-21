interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  className?: string;
  sectionNumber?: string;
  dark?: boolean;
}

export function SectionHeader({ eyebrow, title, className = "", dark = false }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${className}`}>
      <p className="text-[11px] uppercase tracking-[0.1em] text-[#1D9E75] mb-4">
        {eyebrow}
      </p>
      <h2
        className={`text-[28px] md:text-[44px] font-medium leading-[1.2] ${
          dark ? "text-[#f9fafb]" : "text-[#0f1117]"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
