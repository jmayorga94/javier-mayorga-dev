"use client";

import { useState } from "react";

type Theme = "dark" | "light";

/**
 * Stylish dark/light theme toggle.
 * - Crossfade sun ↔ moon icon
 * - Subtle teal ring on hover
 * - Persists to localStorage
 * - Applies via `data-theme` attribute on <html>
 *
 * Initial state is read at mount from <html data-theme="...">, which is set
 * by the pre-paint inline script in layout.tsx — no flash, no setState-in-effect.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "dark";
    return (document.documentElement.dataset.theme as Theme) || "dark";
  });

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* no-op */
    }
  };

  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      suppressHydrationWarning
      className="group relative h-9 w-9 rounded-full border border-[var(--hairline)] hover:border-[#1D9E75]/50 transition-all duration-300 overflow-hidden"
    >
      {/* Soft teal glow on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle at center, rgba(29,158,117,0.18), transparent 70%)",
        }}
      />

      {/* Sun icon — visible when light theme is active (clicking it = go to dark) */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        suppressHydrationWarning
        className={`absolute inset-0 m-auto h-[18px] w-[18px] text-[#1D9E75] transition-all duration-500 ${
          isDark
            ? "opacity-0 -rotate-90 scale-50"
            : "opacity-100 rotate-0 scale-100"
        }`}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>

      {/* Moon icon — visible when dark theme is active (clicking it = go to light) */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        suppressHydrationWarning
        className={`absolute inset-0 m-auto h-[18px] w-[18px] text-[var(--text-primary)] transition-all duration-500 ${
          isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-50"
        }`}
      >
        <path d="M20.354 14.354A8 8 0 0 1 9.646 3.646 8.001 8.001 0 1 0 20.354 14.354Z" />
      </svg>
    </button>
  );
}
