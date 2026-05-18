import { HaDiagram } from "@/components/ui/diagrams/HaDiagram";
import { CicdDiagram } from "@/components/ui/diagrams/CicdDiagram";
import { MigrationDiagram } from "@/components/ui/diagrams/MigrationDiagram";
import { ApiDiagram } from "@/components/ui/diagrams/ApiDiagram";

const diagrams = {
  ha: HaDiagram,
  cicd: CicdDiagram,
  migration: MigrationDiagram,
  api: ApiDiagram,
};

interface DiagramBlockProps {
  type: keyof typeof diagrams;
  caption?: string;
}

export function DiagramBlock({ type, caption }: DiagramBlockProps) {
  const Diagram = diagrams[type];
  if (!Diagram) return null;
  return (
    <figure className="my-8">
      <div className="bg-[#f8fafc] border border-[#f3f4f6] rounded-lg p-6 flex justify-center">
        <div className="w-full max-w-[600px]">
          <Diagram />
        </div>
      </div>
      {caption && (
        <figcaption className="text-center text-[13px] text-[#6b7280] mt-3">{caption}</figcaption>
      )}
    </figure>
  );
}
