import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SITE } from "@/lib/site-config";

const displayFont = Playfair_Display({
  variable: "--font-sans-display",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-sans-body",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fabom Global Services | Website Design & Development",
    template: "%s | Fabom Global Services",
  },
  description:
    "FABOM GLOBAL designs professional, modern websites that help businesses present their brand, showcase their services and make it easier for customers to get in touch. Business websites, redesigns, landing pages and e-commerce.",
  keywords: [
    "website design",
    "web development",
    "business website",
    "website redesign",
    "landing page design",
    "e-commerce website",
    "responsive web design",
    "FABOM GLOBAL",
  ],
  authors: [{ name: "FABOM GLOBAL" }],
  creator: "FABOM GLOBAL",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Fabom Global Services — Websites Designed to Help Your Business Stand Out",
    description:
      "Professional, modern websites for real businesses. Business website design, redesigns, landing pages, e-commerce and ongoing support.",
    url: siteUrl,
    siteName: "Fabom Global Services",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabom Global Services — Website Design & Development",
    description:
      "Professional, modern websites that help businesses stand out and win more enquiries.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#14243a",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
