import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#1D9E75] mb-4">
          Contact
        </p>
        <h2 className="text-[36px] md:text-[44px] font-medium text-[var(--text-primary)] leading-[1.2] mb-4">
          Let&apos;s work together
        </h2>
        <p className="text-[16px] text-[var(--text-secondary)] max-w-[480px] mx-auto mb-10">
          Open to consulting engagements, architecture advisory, and technical
          leadership roles.
        </p>
        <ContactForm />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="/cv.pdf"
            download="Javier-Mayorga-CV.pdf"
            className="w-full sm:w-auto text-center border border-[var(--hairline)] text-[var(--text-secondary)] text-[14px] font-medium px-8 py-3 rounded-md hover:border-[#1D9E75] hover:text-[var(--text-primary)] transition-colors"
          >
            Download CV
          </a>
          <a
            href="https://www.linkedin.com/in/j-mayorga/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            or connect on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}
