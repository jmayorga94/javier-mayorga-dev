const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM2 6h3v8H2V6zm5 0h2.8v1.1h.04C10.36 6.4 11.4 6 12.5 6c2.7 0 3.5 1.8 3.5 4.1V14h-3v-3.3c0-1 0-2.2-1.4-2.2-1.4 0-1.6 1-1.6 2.1V14H7V6z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="1" y="3" width="14" height="10" rx="1.5"/>
    <path d="M1 4l7 5 7-5"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[#0f1117] py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          <div>
            <span className="font-mono text-[16px] text-[#f9fafb] block mb-2 tracking-tight">
              <span className="text-[#6b7280]">~/</span>javier.mayorga
            </span>
            <p className="text-[14px] text-[#9ca3af] leading-[1.6] max-w-[280px]">
              Building systems that last. Writing about what I learn.
            </p>
          </div>

          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/j-mayorga/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[14px] text-[#9ca3af] hover:text-[#f9fafb] transition-colors"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="https://github.com/jmayorga94"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[14px] text-[#9ca3af] hover:text-[#f9fafb] transition-colors"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href="mailto:javi.mayorga1994@outlook.com"
              className="flex items-center gap-2 text-[14px] text-[#9ca3af] hover:text-[#f9fafb] transition-colors"
            >
              <EmailIcon />
              Email
            </a>
          </div>
        </div>

        <div className="border-t border-[#1e2330] pt-6">
          <span className="text-[14px] text-[#6b7280]">
            © 2026 Javier Mayorga. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
