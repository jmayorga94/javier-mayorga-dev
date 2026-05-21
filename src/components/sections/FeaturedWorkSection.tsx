import { WorkCard } from "@/components/ui/WorkCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealWrapper } from "@/components/ui/RevealWrapper";

const cards = [
  {
    metric: "95%",
    title: "Legacy system → high-availability cloud",
    desc: "Led migration of a mission-critical financial platform to a distributed Azure HA architecture — translating business continuity requirements into delivery plans and full infrastructure automation with Terraform and ARM.",
    outcome: "95% reduction in downtime. Stable, repeatable deployments. Improved service continuity.",
    featured: true,
  },
  {
    metric: "MULTI",
    title: "Enterprise AWS → Azure migration",
    desc: "Led the architecture decision-making behind a full platform migration, framing the choice around governance maturity, ecosystem alignment, and long-term cost position — not just a technical comparison.",
    outcome: "Strategic direction adopted at leadership level. Converted into a funded implementation program.",
  },
  {
    metric: "AKS",
    title: "Microservices platform on AKS",
    desc: "Designed an Azure microservices platform integrating AKS, API Management, and private endpoints for scalable, secure enterprise service delivery in a regulated financial environment.",
    outcome: "Scalable, secure architecture supporting continued business growth.",
  },
  {
    metric: "API",
    title: "Financial application modularization",
    desc: "Partnered with product and business teams to decompose a monolithic core financial application into modules and expose its capabilities via APIs.",
    outcome: "Improved data accessibility, system reliability, and delivery speed for every dependent team.",
  },
  {
    metric: "30%",
    title: "CI/CD re-engineering across delivery teams",
    desc: "Re-engineered Azure DevOps pipelines for .NET, Angular, and React teams — creating reusable YAML templates and automated quality gates adopted across multiple delivery workflows.",
    outcome: "30% faster build and deployment cycles. Standardized delivery across teams.",
  },
];

export function FeaturedWorkSection() {
  const [first, ...rest] = cards;
  return (
    <section id="work" className="bg-[#fdfcfb] py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Selected Work" title="Problems solved. Outcomes delivered." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RevealWrapper className="md:col-span-2">
            <WorkCard {...first} featured />
          </RevealWrapper>
          {rest.map((card, i) => (
            <RevealWrapper key={card.title} delay={(i + 1) * 75}>
              <WorkCard {...card} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
