// Root layout for the Next.js application
// This file sets up global styles, fonts, and metadata for the app 
import type { Metadata } from "next";
import { Roboto_Slab, Spectral } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { BottomNav } from '@/components/BottomNav';
import ThemeProvider from '@/components/ThemeProvider'; // client provider

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
});

const spectral = Spectral({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-spectral",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Daily Digestible Deming",
  description: "Daily insights for transformational leadership using Dr. W. Edwards Deming&apos;s System of Profound Knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // use theme-aware classes, not hard-coded dark
        className={`${robotoSlab.variable} ${spectral.variable} antialiased bg-white text-slate-900 dark:bg-black dark:text-white`}
      >
        {/* client ThemeProvider will initialize theme on first load */}
        <ThemeProvider />
        {children}
        <Analytics />
        <BottomNav />
      </body>
    </html>
  );
}