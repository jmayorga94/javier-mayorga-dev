export default function HeroSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-24 pb-20">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 border border-[#1e2230] rounded-full px-3 py-1 mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-[#5DCAA5]" />
        <span className="text-xs text-[#6b7280]">Available for consulting</span>
      </div>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight max-w-2xl mb-6">
        I architect systems that{" "}
        <span className="text-[#5DCAA5]">stay up</span> under pressure.
      </h1>

      {/* Sub-headline */}
      <p className="text-lg text-[#6b7280] max-w-xl leading-relaxed mb-10">
        Cloud Architect and Enterprise Solutions Leader with 10 years of
        experience building mission-critical financial systems in regulated
        environments. I turn legacy constraints into competitive advantages.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4 mb-20">
        <a
          href="/#work"
          className="inline-flex items-center gap-2 bg-[#5DCAA5] text-[#0f1117] font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-[#4db894] transition-colors"
        >
          See my work
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 border border-[#1e2230] text-[#f1f5f9] text-sm px-5 py-2.5 rounded-md hover:border-[#5DCAA5] hover:text-[#5DCAA5] transition-colors"
        >
          Get in touch
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#1e2230]">
        {[
          { value: "10+", label: "Years in production" },
          { value: "95%", label: "Downtime reduction (IDB)" },
          { value: "4", label: "Major cloud migrations" },
          { value: "$0", label: "Zero-downtime cutovers" },
        ].map(({ value, label }) => (
          <div key={label}>
            <p className="text-2xl font-bold text-white">{value}</p>
            <p className="text-xs text-[#6b7280] mt-1">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
