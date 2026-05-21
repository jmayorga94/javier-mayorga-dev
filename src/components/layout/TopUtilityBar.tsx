"use client";

import { useEffect, useState } from "react";
import { AvailabilityWidget } from "./AvailabilityWidget";

const links = [
  { id: "work",        label: "work" },
  { id: "how-i-work",  label: "approach" },
  { id: "insights",    label: "insights" },
  { id: "services",    label: "services" },
];

export function TopUtilityBar() {
  const [activeId, setActiveId] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // pick the topmost visible section
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
  }, []);

  return (
    <nav
      className={`hidden lg:flex fixed top-0 left-0 right-0 z-[100] items-center justify-between px-12 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f1117]/85 backdrop-blur-md border-b border-[#1e2330]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Left: logo + terminal path nav */}
      <div className="flex items-center gap-10">
        <a href="#top" className="font-mono text-[13px] text-[#f9fafb] tracking-tight">
          <span className="text-[#9ca3af]">~/</span>javier.mayorga
        </a>
        <ul className="flex items-center gap-1">
          {links.map(({ id, label }) => {
            const isActive = activeId === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`group inline-flex items-center gap-1 px-3 py-1.5 rounded font-mono text-[13px] transition-colors ${
                    isActive
                      ? "text-[#f9fafb]"
                      : "text-[#9ca3af] hover:text-[#f9fafb]"
                  }`}
                >
                  <span
                    className={`transition-colors ${
                      isActive ? "text-[#1D9E75]" : "text-[#6b7280] group-hover:text-[#1D9E75]"
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

      {/* Right: availability widget */}
      <AvailabilityWidget />
    </nav>
  );
}
