interface CalloutProps {
  children: React.ReactNode;
  type?: "info" | "warning" | "tip";
}

const styles = {
  info: "border-[#1D9E75] bg-[#f0fdf9] text-[#374151]",
  warning: "border-[#d97706] bg-[#fffbeb] text-[#374151]",
  tip: "border-[#6366f1] bg-[#eef2ff] text-[#374151]",
};

export function Callout({ children, type = "info" }: CalloutProps) {
  return (
    <div className={`border-l-[3px] rounded-r-lg px-5 py-4 my-6 text-[14px] leading-[1.7] ${styles[type]}`}>
      {children}
    </div>
  );
}
