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
      <div className="relative z-10 max-w-[1200px] mx-auto">
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
        <p className="text-[18px] text-[#9ca3af] leading-[1.6] max-w-[560px] mb-16">
          10 years designing cloud architecture for regulated financial
          institutions and enterprise organizations across Latin America
          and beyond.
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row">
          {[
            { topLabel: "YEARS", value: "10+", label: "years · Enterprise systems" },
            { topLabel: "REDUCTION", value: "95%", label: "Downtime reduction · HA migration" },
            { topLabel: "CERTIFICATIONS", value: "5×", label: "Azure certifications" },
          ].map(({ topLabel, value, label }, i) => (
            <div
              key={label}
              className={`pb-8 sm:pb-0 ${i === 0 ? "sm:pr-12" : i === 2 ? "sm:pl-12 sm:border-l sm:border-[#1e2330]" : "sm:px-12 sm:border-l sm:border-[#1e2330]"}`}
            >
              <p className="text-[10px] uppercase tracking-[0.1em] text-[#1D9E75] mb-2">{topLabel}</p>
              <p className="text-[40px] font-medium text-[#f9fafb] leading-none mb-1">
                {value}
              </p>
              <p className="text-[14px] text-[#9ca3af]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
