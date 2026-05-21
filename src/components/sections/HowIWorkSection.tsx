import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealWrapper } from "@/components/ui/RevealWrapper";

const principles = [
  {
    number: "01",
    title: "Business first, architecture second",
    desc: "The right solution starts with what the organization needs to achieve — regulatory requirements, cost constraints, growth timelines. The architecture follows from that, not the other way around.",
  },
  {
    number: "02",
    title: "Clarity at every decision point",
    desc: "Technical choices get framed in terms that people can act on — governance tradeoffs, long-term cost position, ecosystem alignment. Not just \"which is better\" but \"here's why this is the right call for your situation.\"",
  },
  {
    number: "03",
    title: "Delivery alongside design",
    desc: "The work doesn't end with the recommendation. Staying through implementation means protecting program economics, reducing scope drift, and keeping architecture and delivery aligned from assessment to go-live.",
  },
];

export function HowIWorkSection() {
  return (
    <section className="bg-[#fdfcfb] py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Approach" title="Architecture decisions that organizations can act on" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <RevealWrapper key={p.number} delay={i * 75}>
              <div className="bg-white border border-[#f3f4f6] rounded-lg p-8 flex flex-col gap-4 h-full">
                <p className="text-[11px] uppercase tracking-[0.1em] text-[#1D9E75]">{p.number}</p>
                <h3 className="text-[16px] font-medium text-[#0f1117]">{p.title}</h3>
                <p className="text-[14px] text-[#6b7280] leading-[1.6]">{p.desc}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
