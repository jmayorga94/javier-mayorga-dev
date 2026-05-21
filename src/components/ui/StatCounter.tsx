"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  topLabel: string;
  value: string; // e.g. "10+", "95%", "5"
  label: string;
}

function parseValue(v: string): { num: number; suffix: string } {
  const match = v.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: v };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

export function StatCounter({ topLabel, value, label }: StatCounterProps) {
  const { num, suffix } = parseValue(value);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out quart
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.round(eased * num));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  return (
    <div ref={ref}>
      <p className="text-[10px] uppercase tracking-[0.1em] text-[#1D9E75] mb-2">{topLabel}</p>
      <p className="text-[40px] font-medium text-[#f9fafb] leading-none mb-1 tabular-nums">
        {count}{suffix}
      </p>
      <p className="text-[14px] text-[#9ca3af]">{label}</p>
    </div>
  );
}
