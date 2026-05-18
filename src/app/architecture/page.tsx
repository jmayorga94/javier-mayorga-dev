import { getAllArchitecture } from "@/lib/mdx";
import { ArchCard } from "@/components/ui/ArchCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HaDiagram } from "@/components/ui/diagrams/HaDiagram";
import { CicdDiagram } from "@/components/ui/diagrams/CicdDiagram";
import { MigrationDiagram } from "@/components/ui/diagrams/MigrationDiagram";
import { ApiDiagram } from "@/components/ui/diagrams/ApiDiagram";

const diagramMap = {
  ha: <HaDiagram />,
  cicd: <CicdDiagram />,
  migration: <MigrationDiagram />,
  api: <ApiDiagram />,
};

export const metadata = {
  title: "Architecture — Javier Mayorga",
  description: "Systems I've designed — real architecture for regulated environments.",
};

export default function ArchitecturePage() {
  const items = getAllArchitecture();
  return (
    <main className="pt-[120px] pb-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Architecture" title="Systems I've designed" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((item) => (
            <ArchCard
              key={item.slug}
              slug={item.slug}
              title={item.title}
              desc={item.summary}
              diagram={diagramMap[item.diagramType] ?? <HaDiagram />}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
