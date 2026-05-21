interface WorkCardProps {
  metric: string;
  title: string;
  desc: string;
  outcome: string;
  featured?: boolean;
  className?: string;
}

export function WorkCard({ metric, title, desc, outcome, featured = false, className = "" }: WorkCardProps) {
  if (featured) {
    return (
      <div className={`group bg-white border-l-[3px] border-l-[#1D9E75] border border-[#f3f4f6] rounded-lg p-8 flex gap-8 items-start hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(29,158,117,0.08)] transition-all duration-300 ${className}`}>
        <div className="min-w-[140px]">
          <span className="text-[88px] font-medium text-[#1D9E75] leading-none block">{metric}</span>
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <h3 className="text-[18px] font-medium text-[#0f1117]">{title}</h3>
          <p className="text-[14px] text-[#6b7280] leading-[1.6]">{desc}</p>
          <p className="text-[13px] text-[#1D9E75] font-medium">{outcome}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`group bg-white border border-[#f3f4f6] rounded-lg p-8 flex flex-col gap-4 hover:-translate-y-1 hover:border-t-[#1D9E75] hover:border-t-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 ${className}`}>
      <span className="text-[72px] font-medium text-[#1D9E75] leading-none">{metric}</span>
      <h3 className="text-[16px] font-medium text-[#0f1117]">{title}</h3>
      <p className="text-[14px] text-[#6b7280] leading-[1.6]">{desc}</p>
      <p className="text-[13px] text-[#1D9E75] font-medium">{outcome}</p>
    </div>
  );
}
