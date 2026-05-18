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
    <Link href={`/architecture/${slug}`}>
      <div className={`bg-white border border-[#f3f4f6] rounded-lg p-8 hover:border-[#1D9E75] transition-colors cursor-pointer ${className}`}>
        <h3 className="text-[16px] font-medium text-[#0f1117] mb-2">{title}</h3>
        <p className="text-[14px] text-[#6b7280] mb-6">{desc}</p>
        <div className="w-full">{diagram}</div>
      </div>
    </Link>
  );
}
