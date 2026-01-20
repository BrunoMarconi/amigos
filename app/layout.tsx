import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./menu";
import LuxuryHeader from "./header";
import LocationSection from "./ubi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "El Arte de lo Sublime - Restaurante de Lujo",
  description: "Donde la materia prima se rinde ante la técnica. Una experiencia sensorial sin igual.",
  openGraph: {
    title: "El Arte de lo Sublime",
    description: "Restaurante de lujo - experiencia gastronómica premium",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LuxuryHeader />
        {children}
        <Menu />
        
      </body>
    </html>
  );
}
