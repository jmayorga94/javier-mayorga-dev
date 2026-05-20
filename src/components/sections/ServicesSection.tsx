import { ServiceCard } from "@/components/ui/ServiceCard";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";

const CloudArchIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8 22a5 5 0 1 1 .1-10 7 7 0 0 1 13.8 2H22a4 4 0 0 1 0 8H8z" stroke="#1D9E75" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="12" cy="26" r="1.5" stroke="#1D9E75" strokeWidth="1.5"/>
    <circle cx="20" cy="26" r="1.5" stroke="#1D9E75" strokeWidth="1.5"/>
    <line x1="12" y1="22" x2="12" y2="24.5" stroke="#1D9E75" strokeWidth="1.5"/>
    <line x1="20" y1="22" x2="20" y2="24.5" stroke="#1D9E75" strokeWidth="1.5"/>
    <line x1="13.5" y1="26" x2="18.5" y2="26" stroke="#1D9E75" strokeWidth="1.5"/>
  </svg>
);

const MigrationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 18a4 4 0 1 1 .08-8A5.5 5.5 0 0 1 14 12h1a3 3 0 0 1 0 6H4z" stroke="#1D9E75" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M18 20a3 3 0 1 1 .06-6A4.5 4.5 0 0 1 27 16h1a2 2 0 0 1 0 4H18z" stroke="#1D9E75" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M14 16h4" stroke="#1D9E75" strokeWidth="1.5"/>
    <path d="M16 14l2 2-2 2" stroke="#1D9E75" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const LeadershipIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="16" cy="8" r="3" stroke="#1D9E75" strokeWidth="1.5"/>
    <line x1="16" y1="11" x2="16" y2="17" stroke="#1D9E75" strokeWidth="1.5"/>
    <line x1="8" y1="17" x2="24" y2="17" stroke="#1D9E75" strokeWidth="1.5"/>
    <line x1="8" y1="17" x2="8" y2="20" stroke="#1D9E75" strokeWidth="1.5"/>
    <line x1="24" y1="17" x2="24" y2="20" stroke="#1D9E75" strokeWidth="1.5"/>
    <rect x="5" y="20" width="6" height="5" rx="1.5" stroke="#1D9E75" strokeWidth="1.5"/>
    <rect x="21" y="20" width="6" height="5" rx="1.5" stroke="#1D9E75" strokeWidth="1.5"/>
  </svg>
);

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#f0fdf9] py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Services" title="How I can help your team" sectionNumber="04" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Cloud architecture consulting", desc: "Translating business requirements into scalable Azure solutions with clear delivery roadmaps.", icon: <CloudArchIcon /> },
            { title: "Cloud migration strategy", desc: "End-to-end planning for legacy and multi-cloud environments, zero downtime, full governance.", icon: <MigrationIcon /> },
            { title: "Technical leadership advisory", desc: "Supporting CTOs and engineering teams with architecture decisions, delivery frameworks, and team alignment.", icon: <LeadershipIcon /> },
          ].map((s, i) => (
            <RevealWrapper key={s.title} delay={i * 75}>
              <ServiceCard {...s} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
