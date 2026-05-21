import { StatCounter } from "@/components/ui/StatCounter";
import { Aurora } from "@/components/ui/Aurora";

const stats = [
  { topLabel: "YEARS",        value: "10+", label: "years · Enterprise financial systems" },
  { topLabel: "DOWNTIME",     value: "95%", label: "Downtime reduction" },
  { topLabel: "CERTIFICATIONS", value: "5", label: "Cloud certifications" },
];

const certs = [
  "Azure Solutions Architect Expert",
  "Azure DevOps Expert",
  "Azure Administrator Associate",
  "Azure Developer Associate",
  "HashiCorp Terraform Associate",
];

export function HeroSection() {
  return (
    <section className="relative pt-[120px] pb-16 px-6 overflow-hidden">

      {/* Aurora — single signature teal glow, top-left */}
      <Aurora />

      {/* Background grid — breathes */}
      <div
        className="absolute inset-0 z-0 grid-pulse"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div>

          {/* Eyebrow */}
          <p
            className="hero-enter eyebrow-cursor font-mono text-[10px] uppercase tracking-[0.18em] text-[#1D9E75] mb-6"
            style={{ animationDelay: "0ms" }}
          >
            Cloud Architect &amp; Enterprise Solutions Leader
          </p>

          {/* Headline */}
          <h1
            className="hero-enter text-[36px] md:text-[44px] lg:text-[64px] font-medium text-[var(--text-primary)] leading-[1.1] max-w-[800px] mb-6"
            style={{ animationDelay: "140ms" }}
          >
            I design systems that organizations{" "}
            <span className="trust-glow">trust</span>{" "}
            with what matters most
          </h1>

          {/* Location */}
          <p
            className="hero-enter text-[14px] text-[var(--text-muted)] mb-4"
            style={{ animationDelay: "280ms" }}
          >
            Based in Honduras · Working globally
          </p>

          {/* Subline */}
          <p
            className="hero-enter text-[18px] text-[var(--text-secondary)] leading-[1.6] max-w-[560px] mb-8"
            style={{ animationDelay: "380ms" }}
          >
            10 years delivering mission-critical financial systems in regulated
            environments — translating complex business requirements into reliable
            Azure-based solutions, and leading the teams that ship them.
          </p>

          {/* CTA */}
          <a
            href="#work"
            className="hero-enter inline-block bg-[#1D9E75] text-white text-[14px] font-medium px-6 py-3 rounded-md hover:bg-[#178f68] transition-colors mb-16 sm:w-auto w-full text-center"
            style={{ animationDelay: "480ms" }}
          >
            Explore my work ↓
          </a>

          {/* Stats */}
          <div
            className="hero-enter flex flex-col sm:flex-row"
            style={{ animationDelay: "600ms" }}
          >
            {stats.map(({ topLabel, value, label }, i, arr) => (
              <div
                key={label}
                className={`pb-8 sm:pb-0 ${
                  i === 0
                    ? "sm:pr-12"
                    : i === arr.length - 1
                    ? "sm:pl-12 sm:border-l sm:border-[var(--hairline)]"
                    : "sm:px-12 sm:border-l sm:border-[var(--hairline)]"
                }`}
              >
                <StatCounter topLabel={topLabel} value={value} label={label} />
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div
            className="hero-enter mt-10 flex flex-wrap gap-2"
            style={{ animationDelay: "720ms" }}
          >
            {certs.map((cert) => (
              <span
                key={cert}
                className="text-[11px] text-[#1D9E75] border border-[#1D9E75]/40 bg-[#1D9E75]/10 px-3 py-1 rounded-full"
              >
                {cert}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
