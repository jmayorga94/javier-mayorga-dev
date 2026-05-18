interface CaseCardProps {
  metric: string;
  metricLabel?: string;
  title: string;
  client: string;
  desc: string;
  className?: string;
}

export function CaseCard({ metric, metricLabel, title, client, desc, className = "" }: CaseCardProps) {
  return (
    <div className={`bg-white border border-[#f3f4f6] rounded-lg p-8 flex gap-6 items-start ${className}`}>
      <div className="min-w-[100px]">
        <span className="text-[48px] font-medium text-[#1D9E75] leading-none block">
          {metric}
        </span>
        {metricLabel && (
          <span className="text-[12px] text-[#6b7280] block mt-1">{metricLabel}</span>
        )}
      </div>
      <div>
        <h3 className="text-[16px] font-medium text-[#0f1117] mb-2">{title}</h3>
        <p className="text-[14px] text-[#6b7280] mb-2">{client}</p>
        <p className="text-[14px] text-[#6b7280]">{desc}</p>
      </div>
    </div>
  );
}
