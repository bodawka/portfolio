import type { Metadata, Viewport } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Bohdan Chuprina — Product Designer, Prague",
  description: "Product designer in Prague. Clear flows, honest decisions, tested with real people. Case studies: JobsLab, Baby Sleep, FinMate, Locket concept.",
  openGraph: { title: "Bohdan Chuprina — Product Designer", description: "Case studies in B2B SaaS, subscription apps and fintech.", images: ["/img/cover-jobslab.jpg"] },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400&family=Host+Grotesk:wght@300;400;500&family=Instrument+Serif:ital@1&display=swap" rel="stylesheet" />
      </head>
      <body>
        <TopBar />
        {children}
        <Reveal />
      </body>
    </html>
  );
}
