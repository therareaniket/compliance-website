/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import "./globals.css";
import "@/assets/css/custom.css";
import "@/assets/css/responsive.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "DhatuComply | Compliance",
  description: "Stay Ahead with Smarter Compliance Monitoring",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        </head>
        
        <body suppressHydrationWarning>
            <SpeedInsights/>  {/* Vercel's Page Speed Insight */}

            {/* <Header /> */}
            {children}
            <Footer />
      </body>
    </html>
  );
}
