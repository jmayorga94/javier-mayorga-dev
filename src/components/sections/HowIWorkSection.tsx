import { RevealWrapper } from "@/components/ui/RevealWrapper";

const principles = [
  {
    number: "01",
    title: "Business first, architecture second",
    desc: "I've seen architectures that were technically correct and completely useless. The first question is always what the business actually needs — regulatory constraints, cost position, growth timeline. The architecture follows from that.",
  },
  {
    number: "02",
    title: "Clarity at every decision point",
    desc: "Most architecture recommendations arrive as 'this is best practice.' That's not a decision — it's a deflection. I frame every choice in terms of what it costs, what it protects, and why it fits this situation specifically.",
  },
  {
    number: "03",
    title: "Delivery alongside design",
    desc: "A recommendation handed off and never seen again isn't architecture — it's a document. I stay through implementation because that's where the real decisions happen and where the design either holds or doesn't.",
  },
];

export function HowIWorkSection() {
  return (
    <section id="how-i-work" className="relative py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#1D9E75] mb-4">Approach</p>
          <h2 className="text-[28px] md:text-[44px] font-medium text-[var(--text-primary)] leading-[1.2] max-w-[600px]">
            Architecture decisions that organizations can act on
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <RevealWrapper key={p.number} delay={i * 75}>
              <div
                className="backdrop-blur-xl border rounded-lg p-8 flex flex-col gap-4 h-full hover:border-[#1D9E75]/50 hover:shadow-[0_16px_40px_rgba(29,158,117,0.10)] hover:-translate-y-1 transition-all duration-300"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--hairline)",
                }}
              >
                <p className="font-mono text-[32px] font-medium text-[#1D9E75]/40 leading-none">{p.number}</p>
                <h3 className="text-[16px] font-medium text-[var(--text-primary)]">{p.title}</h3>
                <p className="text-[14px] text-[var(--text-secondary)] leading-[1.6]">{p.desc}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
