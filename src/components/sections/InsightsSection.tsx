import { BlogCard } from "@/components/ui/BlogCard";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";

const posts = [
  {
    slug: "the-workflow-that-made-claude-code-actually-useful",
    title: "The Workflow That Made Claude Code Actually Useful",
    lang: "EN",
    summary: "The exact system I used to build this site with Claude Code — CLAUDE.md, task tracking, skills workflow, and the practices that compound over time.",
    date: "2025-05-20",
    comingSoon: false,
  },
  {
    slug: "when-to-migrate-azure",
    title: "When to migrate to Azure — and when not to",
    lang: "EN",
    summary: "A decision framework for cloud migration: when moving to Azure accelerates the business and when it adds unnecessary complexity.",
    date: "",
    comingSoon: true,
  },
  {
    slug: "arquitectura-event-driven",
    title: "Arquitectura event-driven en sistemas financieros regulados",
    lang: "ES",
    summary: "Cómo diseñar sistemas basados en eventos en entornos regulados sin sacrificar auditoría, trazabilidad ni compliance.",
    date: "",
    comingSoon: true,
  },
  {
    slug: "zero-downtime-migrations",
    title: "Zero-downtime migrations — what nobody tells you",
    lang: "EN",
    summary: "The unglamorous truths about live migrations: cutover windows, rollback plans, and why zero downtime is a spectrum, not a binary.",
    date: "",
    comingSoon: true,
  },
];

export function InsightsSection() {
  return (
    <section id="insights" className="relative py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Technical Insights" title="How I think about systems" sectionNumber="03" dark />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((p, i) => (
            <RevealWrapper key={p.slug} delay={i * 75}>
              <BlogCard {...p} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
