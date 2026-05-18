"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Architecture", href: "/#architecture" },
  { label: "Work", href: "/#work" },
  { label: "Insights", href: "/#insights" },
  { label: "Services", href: "/#services" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-[#f3f4f6]">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-[18px] font-medium">
          <span className="text-[#0f1117]">javier mayor</span><span className="text-[#1D9E75]">ga</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => {
            const isActive = href.startsWith("/") && !href.includes("#") ? pathname === href : false;
            return (
              <Link
                key={label}
                href={href}
                className={`text-[14px] transition-colors ${
                  isActive ? "text-[#1D9E75]" : "text-[#6b7280] hover:text-[#0f1117]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/#contact"
            className="text-[14px] font-medium text-white bg-[#1D9E75] px-5 py-2.5 rounded-md hover:bg-[#178f68] transition-colors"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-[#374151] transition-transform origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-px bg-[#374151] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-[#374151] transition-transform origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#f3f4f6] bg-white px-6 py-4 flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-[14px] text-[#6b7280] hover:text-[#0f1117] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="text-[14px] font-medium text-white bg-[#1D9E75] px-5 py-2.5 rounded-md hover:bg-[#178f68] transition-colors text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </Link>
        </div>
      )}
    </nav>
  );
}
