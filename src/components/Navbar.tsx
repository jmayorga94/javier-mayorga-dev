"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#0f1117] transition-all duration-200 ${
        scrolled ? "border-b border-[#1e2230]" : ""
      }`}
    >
      <nav className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="w-7 h-7 bg-[#5DCAA5] rounded text-[#0f1117] font-bold text-xs flex items-center justify-center select-none">
            JM
          </span>
          <span className="text-sm font-semibold text-white group-hover:text-[#5DCAA5] transition-colors">
            Javier Mayorga
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ label, href }) => {
            const isActive =
              href.startsWith("/") && !href.includes("#")
                ? pathname === href
                : false;
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-[#5DCAA5]"
                      : "text-[#6b7280] hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-white transition-transform origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-white transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-white transition-transform origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden border-t border-[#1e2230] bg-[#0f1117] px-6 py-4 flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm text-[#6b7280] hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
