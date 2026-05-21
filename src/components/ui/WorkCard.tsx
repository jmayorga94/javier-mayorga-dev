interface WorkCardProps {
  metric: string;
  title: string;
  desc: string;
  outcome: string;
  featured?: boolean;
  className?: string;
}

export function WorkCard({ metric, title, desc, outcome, featured = false, className = "" }: WorkCardProps) {
  return (
    <div
      className={`bg-white border border-[#f3f4f6] rounded-lg p-8 flex gap-6 items-start ${className}`}
    >
      <div className={featured ? "min-w-[120px]" : "min-w-[80px]"}>
        <span
          className={`font-medium text-[#1D9E75] leading-none block ${
            featured ? "text-[64px]" : "text-[40px]"
          }`}
        >
          {metric}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-[16px] font-medium text-[#0f1117]">{title}</h3>
        <p className="text-[14px] text-[#6b7280] leading-[1.6]">{desc}</p>
        <p className="text-[13px] text-[#1D9E75] font-medium">{outcome}</p>
      </div>
    </div>
  );
}
