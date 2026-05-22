import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title:
      lang === "nl"
        ? "Synapse AI - Professionele Digitale Oplossingen"
        : "Synapse AI - Professional Digital Solutions",
    description:
      lang === "nl"
        ? "Synapse is een toonaangevend softwarebedrijf dat intelligente cloudarchitecturen, high-performance webapps en UI/UX ontwerpt."
        : "Synapse is a leading software company designing intelligent cloud architectures, high-performance web apps, and UI/UX.",
  };
}

export default async function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0c0d14] text-slate-100 font-sans selection:bg-teal-400 selection:text-[#0c0d14]">
        {children}
      </body>
    </html>
  );
}
