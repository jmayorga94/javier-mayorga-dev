import { BlogCard } from "@/components/ui/BlogCard";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";

const posts = [
  {
    slug: "the-workflow-that-made-claude-code-actually-useful",
    title: "The Workflow That Made Claude Code Actually Useful",
    lang: "EN",
    summary: "I built this site with Claude Code. Honestly? It didn't work. The problem wasn't the tool — it was how I was setting up the work.",
    date: "2025-05-20",
    comingSoon: false,
  },
  {
    slug: "when-to-migrate-azure",
    title: "When to migrate to Azure — and when not to",
    lang: "EN",
    summary: "Cloud migration is sold as a universal upgrade. It rarely is.",
    date: "",
    comingSoon: true,
  },
  {
    slug: "arquitectura-event-driven",
    title: "Arquitectura event-driven en sistemas financieros regulados",
    lang: "ES",
    summary: "Los sistemas financieros regulados imponen restricciones que las arquitecturas event-driven comúnmente ignoran. Aquí está lo que aprendí implementándolas.",
    date: "",
    comingSoon: true,
  },
  {
    slug: "zero-downtime-migrations",
    title: "Zero-downtime migrations — what nobody tells you",
    lang: "EN",
    summary: "\"Zero-downtime migration\" is on every architecture slide deck. The implementation is almost never described honestly.",
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
