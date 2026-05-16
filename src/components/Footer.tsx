export default function Footer() {
  return (
    <footer className="border-t border-[#1e2230] bg-[#0f1117]">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <p className="text-xs text-[#6b7280]">
          &copy; {new Date().getFullYear()} Javier Mayorga
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:javier.mayorga@cnovate.io"
            aria-label="Email"
            className="text-[#6b7280] hover:text-[#5DCAA5] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/javier-mayorga"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#6b7280] hover:text-[#5DCAA5] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
