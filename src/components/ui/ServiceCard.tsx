import type { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  desc: string;
  icon: ReactNode;
  className?: string;
}

export function ServiceCard({ title, desc, icon, className = "" }: ServiceCardProps) {
  return (
    <div className={`bg-white border border-[#d1fae5] rounded-lg p-8 group ${className}`}>
      <div className="mb-5 text-[#1D9E75] transition-opacity group-hover:opacity-80">
        {icon}
      </div>
      <h3 className="text-[18px] font-medium text-[#0f1117] mb-3">{title}</h3>
      <p className="text-[14px] text-[#6b7280] leading-[1.6]">{desc}</p>
    </div>
  );
}
