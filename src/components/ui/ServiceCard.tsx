import type { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  desc: string;
  icon: ReactNode;
  className?: string;
}

export function ServiceCard({ title, desc, icon, className = "" }: ServiceCardProps) {
  return (
    <div
      className={`bg-[#141821]/55 backdrop-blur-xl border border-white/[0.06] rounded-lg p-8 group hover:bg-[#141821]/78 hover:border-[#1D9E75]/40 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(29,158,117,0.10)] transition-all duration-300 ${className}`}
    >
      <div className="mb-5 text-[#1D9E75] transition-opacity group-hover:opacity-80">
        {icon}
      </div>
      <h3 className="text-[18px] font-medium text-white mb-3">{title}</h3>
      <p className="text-[14px] text-white/65 leading-[1.6]">{desc}</p>
    </div>
  );
}
