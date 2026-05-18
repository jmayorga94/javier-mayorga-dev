import { CaseCard } from "@/components/ui/CaseCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const caseStudies = [
  {
    metric: "95%",
    title: "Legacy system → high-availability cloud",
    client: "Inter-American Development Bank (IDB)",
    desc: "Downtime reduction through distributed Azure architecture",
  },
  {
    metric: "30%",
    title: "CI/CD pipeline re-engineering",
    client: "Inter-American Development Bank (IDB)",
    desc: "Faster deployments with automated DevOps workflows",
  },
  {
    metric: "2×",
    title: "AWS → Azure multi-cloud transformation",
    client: "Cnovate",
    desc: "Cost optimization and unified governance",
  },
  {
    metric: "RT",
    title: "Oracle ESB → GraphQL modernization",
    client: "Sapiens",
    desc: "Real-time financial data API layer",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="work" className="py-24 px-6 bg-[#fdfcfb]">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Case Studies" title="Real problems, measurable outcomes" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((c) => (
            <CaseCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
