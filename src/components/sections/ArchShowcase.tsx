import { ArchCard } from "@/components/ui/ArchCard";
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
        <SectionHeader eyebrow="Architecture" title="Systems I've designed" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((item) => (
            <ArchCard key={item.slug} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
