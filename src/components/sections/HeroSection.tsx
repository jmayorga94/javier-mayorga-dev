export function HeroSection() {
  return (
    <section className="bg-[#0f1117] pt-[120px] pb-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Eyebrow */}
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#1D9E75] mb-6">
          Cloud Architect &amp; Enterprise Solutions Leader
        </p>

        {/* Headline */}
        <h1 className="text-[56px] font-medium text-[#f9fafb] leading-[1.1] max-w-[800px] mb-6">
          I design systems that organizations trust with what matters most
        </h1>

        {/* Location */}
        <p className="text-[14px] text-[#6b7280] mb-4">
          Based in Honduras · Working globally
        </p>

        {/* Subline */}
        <p className="text-[18px] text-[#9ca3af] leading-[1.6] max-w-[560px] mb-16">
          10 years building mission-critical financial systems in regulated
          environments. IDB · Cnovate · Sapiens.
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-12">
          {[
            { value: "10+", label: "years · Enterprise systems" },
            { value: "95%", label: "Downtime reduction at IDB" },
            { value: "5×", label: "Azure certifications" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-[32px] font-medium text-[#f9fafb] leading-none mb-1">
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
