import { CaseCard } from "@/components/ui/CaseCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const caseStudies = [
  {
    metric: "95%",
    metricLabel: "less downtime",
    title: "Legacy system → high-availability cloud",
    client: "International Financial Institution",
    desc: "Downtime reduction through distributed Azure architecture",
  },
  {
    metric: "30%",
    metricLabel: "faster delivery",
    title: "CI/CD pipeline re-engineering",
    client: "International Financial Institution",
    desc: "Faster deployments with automated DevOps workflows",
  },
  {
    metric: "2×",
    metricLabel: "cost efficiency",
    title: "AWS → Azure multi-cloud transformation",
    client: "Enterprise Cloud Consultancy",
    desc: "Cost optimization and unified governance",
  },
  {
    metric: "RT",
    metricLabel: "real-time data",
    title: "Oracle ESB → GraphQL modernization",
    client: "Financial Software Company",
    desc: "Real-time financial data API layer",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="work" className="py-24 px-6 bg-[#fdfcfb]">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Case Studies" title="Real problems, measurable outcomes" sectionNumber="02" />
        <p className="text-[16px] text-[#6b7280] mb-12 -mt-8">
          Four engagements. Four transformations. Real outcomes in regulated, high-stakes environments.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((c) => (
            <CaseCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
