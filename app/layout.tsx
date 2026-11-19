import type { Metadata, Viewport } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  metadataBase: new URL("https://bohdan-chuprina.vercel.app"),
  title: "Bohdan Chuprina — Product Designer, Prague",
  description: "Product designer in Prague. Clear flows, honest decisions, tested with real people. Case studies: JobsLab, Baby Sleep, FinMate, NDA social app.",
  openGraph: { title: "Bohdan Chuprina — Product Designer", description: "Case studies in B2B SaaS, subscription apps and fintech.", url: "/", images: [{ url: "/og/home.jpg", width: 1200, height: 630, alt: "Bohdan Chuprina — Product Designer, Prague" }], type: "website" },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/host-grotesk-latin-400-normal.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body>
        <TopBar />
        {children}
        <Reveal />
      </body>
    </html>
  );
}
