import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { TopUtilityBar } from "@/components/layout/TopUtilityBar";
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
  // Pre-paint theme script — prevents flash by setting data-theme before React hydrates.
  const themeScript = `
    (function(){
      try {
        var saved = localStorage.getItem('theme');
        var theme = saved === 'light' || saved === 'dark' ? saved : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
      } catch(e) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    })();
  `;

  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className="min-h-screen flex flex-col antialiased transition-colors duration-300"
        style={{
          fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
          backgroundColor: "var(--bg-from)",
          color: "var(--text-secondary)",
        }}
      >
        <Navbar />
        <TopUtilityBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
