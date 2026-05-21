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
    <section id="how-i-work" className="relative py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <p className="text-[11px] uppercase tracking-[0.1em] text-[#1D9E75] mb-4">Approach</p>
          <h2 className="text-[28px] md:text-[44px] font-medium text-white leading-[1.2] max-w-[600px]">
            Architecture decisions that organizations can act on
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <RevealWrapper key={p.number} delay={i * 75}>
              <div className="bg-[#141821]/55 backdrop-blur-xl border border-white/[0.06] rounded-lg p-8 flex flex-col gap-4 h-full hover:bg-[#141821]/78 hover:border-[#1D9E75]/50 hover:shadow-[0_16px_40px_rgba(29,158,117,0.10)] hover:-translate-y-1 transition-all duration-300">
                <p className="font-mono text-[32px] font-medium text-[#1D9E75]/40 leading-none">{p.number}</p>
                <h3 className="text-[16px] font-medium text-white">{p.title}</h3>
                <p className="text-[14px] text-white/65 leading-[1.6]">{p.desc}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
