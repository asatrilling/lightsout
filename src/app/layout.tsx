import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
  title: {
    default: "Lightsout — den oberoende navigatorn för elitidrottare",
    template: "%s | Lightsout",
  },
  description:
    "Lightsout hjälper aktiva elitidrottare i fotboll, tennis, golf och hockey att förvalta sina pengar och planera transitionen efter karriären. Produktagnostisk koncierge — vi äger inte produkten, vi äger din ekonomi.",
  metadataBase: new URL("https://lightsout.coach"),
  openGraph: {
    title: "Lightsout — den oberoende navigatorn för elitidrottare",
    description:
      "Förvalta karriärens pengar. Planera livet efter slutsignalen. För fotboll, tennis, golf och hockey på elitnivå.",
    type: "website",
    locale: "sv_SE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
