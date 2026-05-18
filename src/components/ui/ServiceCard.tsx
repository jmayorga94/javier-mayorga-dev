interface ServiceCardProps {
  title: string;
  desc: string;
  className?: string;
}

export function ServiceCard({ title, desc, className = "" }: ServiceCardProps) {
  return (
    <div className={`bg-white border border-[#d1fae5] rounded-lg p-8 ${className}`}>
      <h3 className="text-[18px] font-medium text-[#0f1117] mb-3">{title}</h3>
      <p className="text-[14px] text-[#6b7280] leading-[1.6]">{desc}</p>
    </div>
  );
}
