export function Footer() {
  return (
    <footer className="bg-[#0f1117] py-16 px-6" id="contact">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          <div>
            <span className="text-[18px] font-medium text-[#f9fafb] block mb-2">
              Javier Mayorga
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
              className="text-[14px] text-[#9ca3af] hover:text-[#f9fafb] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jmayorga94"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[#9ca3af] hover:text-[#f9fafb] transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:javier.mayorga@cnovate.io"
              className="text-[14px] text-[#9ca3af] hover:text-[#f9fafb] transition-colors"
            >
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
