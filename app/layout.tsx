import type { Metadata } from "next";
import { Roboto_Slab, Spectral } from "next/font/google";
import "./globals.css";

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
        className={`${robotoSlab.variable} ${spectral.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}