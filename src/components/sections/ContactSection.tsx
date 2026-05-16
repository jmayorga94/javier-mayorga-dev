export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <div className="border border-[#1e2230] rounded-xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <p className="text-xs font-mono text-[#5DCAA5] uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Let&apos;s talk architecture.
          </h2>
          <p className="text-sm text-[#6b7280] max-w-sm leading-relaxed">
            Have a complex system to design, a migration to plan, or a team that
            needs a technical partner? I&apos;d love to hear about it.
          </p>
        </div>

        <div className="flex flex-col gap-3 flex-shrink-0">
          <a
            href="mailto:javier.mayorga@cnovate.io"
            className="inline-flex items-center gap-2.5 bg-[#5DCAA5] text-[#0f1117] font-semibold text-sm px-6 py-3 rounded-md hover:bg-[#4db894] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Send an email
          </a>
          <a
            href="https://www.linkedin.com/in/javier-mayorga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-[#1e2230] text-[#f1f5f9] text-sm px-6 py-3 rounded-md hover:border-[#5DCAA5] hover:text-[#5DCAA5] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
