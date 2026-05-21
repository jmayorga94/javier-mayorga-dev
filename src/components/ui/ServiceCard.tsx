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
      className={`backdrop-blur-xl border rounded-lg p-8 group hover:border-[#1D9E75]/40 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(29,158,117,0.10)] transition-all duration-300 ${className}`}
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--hairline)",
      }}
    >
      <div className="mb-5 text-[#1D9E75] transition-opacity group-hover:opacity-80">
        {icon}
      </div>
      <h3 className="text-[18px] font-medium text-[var(--text-primary)] mb-3">{title}</h3>
      <p className="text-[14px] text-[var(--text-secondary)] leading-[1.6]">{desc}</p>
    </div>
  );
}
