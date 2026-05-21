import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-[#0f1117] pt-[120px] pb-16 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(#1e2330 1px, transparent 1px), linear-gradient(90deg, #1e2330 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative z-10 max-w-[1200px] mx-auto lg:grid lg:grid-cols-[1fr_360px] lg:gap-16 lg:items-end">
        <div>
        {/* Eyebrow */}
        <p className="eyebrow-cursor text-[11px] uppercase tracking-[0.1em] text-[#1D9E75] mb-6">
          Cloud Architect &amp; Enterprise Solutions Leader
        </p>

        {/* Headline */}
        <h1 className="text-[36px] md:text-[44px] lg:text-[64px] font-medium text-[#f9fafb] leading-[1.1] max-w-[800px] mb-6">
          I design systems that organizations <span className="text-[#1D9E75]">trust</span> with what matters most
        </h1>

        {/* Location */}
        <p className="text-[14px] text-[#6b7280] mb-4">
          Based in Honduras · Working globally
        </p>

        {/* Subline */}
        <p className="text-[18px] text-[#9ca3af] leading-[1.6] max-w-[560px] mb-8">
          10 years delivering mission-critical financial systems in regulated
          environments — translating complex business requirements into reliable
          Azure-based solutions, and leading the teams that ship them.
        </p>

        {/* CTA */}
        <a
          href="#work"
          className="inline-block bg-[#1D9E75] text-white text-[14px] font-medium px-6 py-3 rounded-md hover:bg-[#178f68] transition-colors mb-16 sm:w-auto w-full text-center"
        >
          Explore my work ↓
        </a>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row">
          {[
            { topLabel: "YEARS", value: "10+", label: "years · Enterprise financial systems" },
            { topLabel: "DOWNTIME", value: "95%", label: "Downtime reduction" },
            { topLabel: "CERTIFICATIONS", value: "5", label: "Cloud certifications" },
          ].map(({ topLabel, value, label }, i, arr) => (
            <div
              key={label}
              className={`pb-8 sm:pb-0 ${i === 0 ? "sm:pr-12" : i === arr.length - 1 ? "sm:pl-12 sm:border-l sm:border-[#1e2330]" : "sm:px-12 sm:border-l sm:border-[#1e2330]"}`}
            >
              <p className="text-[10px] uppercase tracking-[0.1em] text-[#1D9E75] mb-2">{topLabel}</p>
              <p className="text-[40px] font-medium text-[#f9fafb] leading-none mb-1">
                {value}
              </p>
              <p className="text-[14px] text-[#9ca3af]">{label}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-10 flex flex-wrap gap-2">
          {[
            "Azure Solutions Architect Expert",
            "Azure DevOps Expert",
            "Azure Administrator Associate",
            "Azure Developer Associate",
            "HashiCorp Terraform Associate",
          ].map((cert) => (
            <span
              key={cert}
              className="text-[11px] text-[#1D9E75] border border-[#1D9E75]/40 bg-[#1D9E75]/10 px-3 py-1 rounded-full"
            >
              {cert}
            </span>
          ))}
        </div>
        </div>{/* end left column */}

        {/* Photo — desktop only */}
        <div className="hidden lg:block relative self-end h-[480px]">
          <Image
            src="/profile.jpg"
            alt="Javier Mayorga"
            fill
            className="object-cover object-top rounded-t-lg grayscale brightness-90"
            priority
          />
          {/* Left-fade gradient — blends photo into dark hero bg */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1117] via-[#0f1117]/20 to-transparent rounded-t-lg pointer-events-none" />
          {/* Bottom-fade gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0f1117] to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
