interface CaseCardProps {
  metric: string;
  title: string;
  client: string;
  desc: string;
  className?: string;
}

export function CaseCard({ metric, title, client, desc, className = "" }: CaseCardProps) {
  return (
    <div className={`bg-white border border-[#f3f4f6] rounded-lg p-8 flex gap-6 items-start ${className}`}>
      <span className="text-[48px] font-medium text-[#1D9E75] leading-none min-w-[100px]">
        {metric}
      </span>
      <div>
        <h3 className="text-[16px] font-medium text-[#0f1117] mb-2">{title}</h3>
        <p className="text-[14px] text-[#6b7280] mb-2">{client}</p>
        <p className="text-[14px] text-[#6b7280]">{desc}</p>
      </div>
    </div>
  );
}
