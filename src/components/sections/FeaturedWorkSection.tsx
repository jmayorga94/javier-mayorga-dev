import { WorkCard } from "@/components/ui/WorkCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { HaDiagram } from "@/components/ui/diagrams/HaDiagram";
import { MigrationDiagram } from "@/components/ui/diagrams/MigrationDiagram";
import { AksDiagram } from "@/components/ui/diagrams/AksDiagram";
import { ModularDiagram } from "@/components/ui/diagrams/ModularDiagram";
import { CicdDiagram } from "@/components/ui/diagrams/CicdDiagram";

const cards = [
  {
    diagram: <HaDiagram />,
    metric: "95% uptime",
    title: "Legacy system → high-availability cloud",
    desc: "Led migration of a mission-critical financial platform to a distributed Azure HA architecture — translating business continuity requirements into delivery plans and full infrastructure automation with Terraform and ARM.",
    outcome: "95% reduction in downtime. Stable, repeatable deployments.",
  },
  {
    diagram: <MigrationDiagram />,
    title: "Enterprise AWS → Azure migration",
    desc: "Led the architecture decision-making behind a full platform migration, framing the choice around governance maturity, ecosystem alignment, and long-term cost position — not just a technical comparison.",
    outcome: "Strategic direction adopted at leadership level. Converted into a funded implementation program.",
  },
  {
    diagram: <AksDiagram />,
    title: "Microservices platform on AKS",
    desc: "Designed an Azure microservices platform integrating AKS, API Management, and private endpoints for scalable, secure enterprise service delivery in a regulated financial environment.",
    outcome: "Scalable, secure architecture supporting continued business growth.",
  },
  {
    diagram: <ModularDiagram />,
    title: "Financial application modularization",
    desc: "Partnered with product and business teams to decompose a monolithic core financial application into modules and expose its capabilities via APIs.",
    outcome: "Improved data accessibility, system reliability, and delivery speed for every dependent team.",
  },
  {
    diagram: <CicdDiagram />,
    metric: "30% faster",
    title: "CI/CD re-engineering across delivery teams",
    desc: "Re-engineered Azure DevOps pipelines for .NET, Angular, and React teams — creating reusable YAML templates and automated quality gates adopted across multiple delivery workflows.",
    outcome: "30% faster build and deployment cycles. Standardized delivery across teams.",
  },
];

export function FeaturedWorkSection() {
  return (
    <section id="work" className="bg-[#0f1117] py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Selected Work" title="Problems solved. Outcomes delivered." dark />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <RevealWrapper key={card.title} delay={i * 75}>
              <WorkCard {...card} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
