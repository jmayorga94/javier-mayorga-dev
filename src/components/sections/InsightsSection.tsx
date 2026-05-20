import { BlogCard } from "@/components/ui/BlogCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const posts = [
  {
    slug: "when-to-migrate-azure",
    title: "When to migrate to Azure — and when not to",
    lang: "EN",
    summary: "A decision framework for cloud migration: when moving to Azure accelerates the business and when it adds unnecessary complexity.",
    date: "2024-01-15",
  },
  {
    slug: "arquitectura-event-driven",
    title: "Arquitectura event-driven en sistemas financieros regulados",
    lang: "ES",
    summary: "Cómo diseñar sistemas basados en eventos en entornos regulados sin sacrificar auditoría, trazabilidad ni compliance.",
    date: "2024-02-10",
  },
  {
    slug: "llms-architecture-design",
    title: "How I use LLMs to accelerate architecture design",
    lang: "EN",
    summary: "Practical patterns for using large language models as a thinking partner in architecture reviews, trade-off analysis, and documentation.",
    date: "2024-03-05",
  },
  {
    slug: "zero-downtime-migrations",
    title: "Zero-downtime migrations — what nobody tells you",
    lang: "EN",
    summary: "The unglamorous truths about live migrations: cutover windows, rollback plans, and why 'zero downtime' is a spectrum, not a binary.",
    date: "2024-04-20",
  },
];

export function InsightsSection() {
  return (
    <section id="insights" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Technical Insights" title="How I think about systems" sectionNumber="03" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <BlogCard key={p.slug} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
