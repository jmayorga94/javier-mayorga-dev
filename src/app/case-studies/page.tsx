import Link from "next/link";
import { getAllCaseStudies } from "@/lib/mdx";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Case Studies — Javier Mayorga",
  description: "Real problems, measurable outcomes.",
};

export default function CaseStudiesPage() {
  const cases = getAllCaseStudies();
  return (
    <main className="pt-[120px] pb-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Case Studies" title="Real problems, measurable outcomes" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cases.map((c) => (
            <Link key={c.slug} href={`/case-studies/${c.slug}`}>
              <div className="bg-white border border-[#f3f4f6] rounded-lg p-8 hover:border-[#1D9E75] transition-colors flex gap-6 items-start">
                <span className="text-[48px] font-medium text-[#1D9E75] leading-none min-w-[100px]">{c.outcome}</span>
                <div>
                  <h2 className="text-[16px] font-medium text-[#0f1117] mb-2">{c.title}</h2>
                  <p className="text-[14px] text-[#6b7280]">{c.client} · {c.year}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
