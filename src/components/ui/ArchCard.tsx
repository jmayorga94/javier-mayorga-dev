import Link from "next/link";
import { ReactNode } from "react";

interface ArchCardProps {
  title: string;
  desc: string;
  diagram: ReactNode;
  slug: string;
  className?: string;
}

export function ArchCard({ title, desc, diagram, slug, className = "" }: ArchCardProps) {
  return (
    <Link href={`/architecture/${slug}`} className="group block">
      <div
        className={`bg-white border border-[#f3f4f6] border-t-2 border-t-transparent group-hover:border-t-[#1D9E75] rounded-lg p-8 transition-all duration-200 group-hover:-translate-y-1 cursor-pointer ${className}`}
      >
        <h3 className="text-[16px] font-medium text-[#0f1117] mb-2">{title}</h3>
        <p className="text-[14px] text-[#6b7280] mb-6">{desc}</p>
        <div className="w-full min-h-[140px] flex items-center">{diagram}</div>
        <div className="mt-4 flex justify-end">
          <span className="text-[12px] text-[#1D9E75] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            View case →
          </span>
        </div>
      </div>
    </Link>
  );
}
