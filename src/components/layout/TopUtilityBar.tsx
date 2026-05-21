"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AvailabilityWidget } from "./AvailabilityWidget";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { id: "work",        label: "work" },
  { id: "how-i-work",  label: "approach" },
  { id: "insights",    label: "insights" },
  { id: "services",    label: "services" },
];

export function TopUtilityBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeId, setActiveId] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 8;
      setScrolled((prev) => (prev === isScrolled ? prev : isScrolled));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      // off-homepage: no active section
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome, pathname]);

  return (
    <nav
      className={`hidden lg:flex fixed top-0 left-0 right-0 z-[100] items-center justify-between px-12 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-utility)] backdrop-blur-md border-b border-[var(--hairline)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Left: logo + terminal path nav */}
      <div className="flex items-center gap-10">
        <Link href="/" className="font-mono text-[13px] text-[var(--text-primary)] tracking-tight">
          <span className="text-[var(--text-muted)]">~/</span>javier.mayorga
        </Link>
        <ul className="flex items-center gap-1">
          {links.map(({ id, label }) => {
            const isActive = activeId === id;
            return (
              <li key={id}>
                <a
                  href={`/#${id}`}
                  className={`group inline-flex items-center gap-1 px-3 py-1.5 rounded font-mono text-[13px] transition-colors ${
                    isActive
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <span
                    className={`transition-colors ${
                      isActive ? "text-[#1D9E75]" : "text-[var(--text-muted)] group-hover:text-[#1D9E75]"
                    }`}
                  >
                    ~/
                  </span>
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right: theme toggle + availability widget */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <AvailabilityWidget />
      </div>
    </nav>
  );
}
