import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-[120px] pb-24 px-6">
      <div className="max-w-[600px] mx-auto text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#1D9E75] mb-4">404</p>
        <h1 className="text-[40px] font-medium text-[#0f1117] leading-[1.2] mb-4">Page not found</h1>
        <p className="text-[16px] text-[#6b7280] mb-8">
          This page doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#1D9E75] text-white text-[14px] font-medium px-6 py-3 rounded-md hover:bg-[#178f68] transition-colors"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
