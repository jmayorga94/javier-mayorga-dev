/**
 * Aurora — single signature teal radial glow.
 * Mount inside the hero (or any section that should anchor it).
 * Positioned top-left; large ellipse; soft.
 */
export function Aurora() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute -top-[200px] -left-[200px] w-[1200px] h-[700px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(29,158,117,0.16), rgba(29,158,117,0.06) 35%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
