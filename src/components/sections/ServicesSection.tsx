import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
  {
    title: "Cloud architecture consulting",
    desc: "Translating business requirements into scalable Azure solutions with clear delivery roadmaps.",
  },
  {
    title: "Cloud migration strategy",
    desc: "End-to-end planning for legacy and multi-cloud environments, zero downtime, full governance.",
  },
  {
    title: "Technical leadership advisory",
    desc: "Supporting CTOs and engineering teams with architecture decisions, delivery frameworks, and team alignment.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#f0fdf9] py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Services" title="How I can help your team" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
