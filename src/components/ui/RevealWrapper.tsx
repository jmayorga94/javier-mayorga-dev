"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealWrapperProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function RevealWrapper({ children, delay = 0, className = "" }: RevealWrapperProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
