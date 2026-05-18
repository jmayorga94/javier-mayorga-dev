import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Javier Mayorga — Cloud Architect & Enterprise Solutions Leader",
  description:
    "Cloud Architect and Enterprise Solutions Leader specializing in mission-critical financial systems, cloud migrations, and scalable Azure architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body
        className="min-h-screen flex flex-col bg-[#fdfcfb] text-[#374151] font-[family-name:var(--font-inter)] antialiased"
        style={{ fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
