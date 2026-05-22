import { ArchCard } from "@/components/ui/ArchCard";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HaDiagram } from "@/components/ui/diagrams/HaDiagram";
import { CicdDiagram } from "@/components/ui/diagrams/CicdDiagram";
import { MigrationDiagram } from "@/components/ui/diagrams/MigrationDiagram";
import { ApiDiagram } from "@/components/ui/diagrams/ApiDiagram";

const items = [
  {
    slug: "legacy-ha-cloud",
    title: "Legacy system → high-availability cloud",
    desc: "Distributed Azure architecture with zero-downtime migration",
    diagram: <HaDiagram />,
  },
  {
    slug: "cicd-pipeline",
    title: "CI/CD pipeline re-engineering",
    desc: "Azure DevOps pipelines with automated quality gates and IaC",
    diagram: <CicdDiagram />,
  },
  {
    slug: "multi-cloud-transformation",
    title: "Multi-cloud transformation",
    desc: "AWS to Azure migration with unified governance and cost optimization",
    diagram: <MigrationDiagram />,
  },
  {
    slug: "esb-graphql",
    title: "ESB to GraphQL modernization",
    desc: "Oracle ESB replacement with real-time GraphQL API layer",
    diagram: <ApiDiagram />,
  },
];

export function ArchShowcase() {
  return (
    <section id="architecture" className="py-24 px-6 bg-[#fdfcfb]">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Architecture" title="Architecture that performs under pressure" sectionNumber="01" />
        <p className="text-[16px] text-[#6b7280] max-w-[560px] mb-12 -mt-8">
          From legacy modernization to cloud-native transformation — every system designed for resilience, scalability, and business continuity.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <RevealWrapper key={item.slug} delay={i * 75}>
              <ArchCard {...item} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
