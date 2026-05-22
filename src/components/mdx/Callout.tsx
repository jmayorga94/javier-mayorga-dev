interface CalloutProps {
  children: React.ReactNode;
  type?: "info" | "warning" | "tip";
}

const styles = {
  info: "border-[#1D9E75] bg-[color-mix(in_srgb,#1D9E75_10%,transparent)] text-[var(--prose-text)]",
  warning: "border-[#d97706] bg-[color-mix(in_srgb,#d97706_10%,transparent)] text-[var(--prose-text)]",
  tip: "border-[#6366f1] bg-[color-mix(in_srgb,#6366f1_10%,transparent)] text-[var(--prose-text)]",
};

export function Callout({ children, type = "info" }: CalloutProps) {
  return (
    <div className={`border-l-[3px] rounded-r-lg px-5 py-4 my-6 text-[14px] leading-[1.7] ${styles[type]}`}>
      {children}
    </div>
  );
}
