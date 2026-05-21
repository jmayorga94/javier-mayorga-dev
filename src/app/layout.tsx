import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://javiermayorga.tech";
const description =
  "Cloud Architect and Enterprise Solutions Leader specializing in mission-critical financial systems, cloud migrations, and scalable Azure architecture.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Javier Mayorga — Cloud Architect & Enterprise Solutions Leader",
  description,
  icons: {
    icon: "/favicon-64.png",
    shortcut: "/favicon-64.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Javier Mayorga — Cloud Architect & Enterprise Solutions Leader",
    description,
    url: siteUrl,
    siteName: "Javier Mayorga",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Javier Mayorga — Cloud Architect & Enterprise Solutions Leader",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full`}>
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
