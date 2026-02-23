import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://insulpro.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Advanced Finishing – Facades & Insulation",
    template: "%s | Advanced Finishing",
  },
  description:
    "The expert in facade renovation and exterior thermal insulation in Canada.",
  keywords: [
    "exterior insulation",
    "facade renovation",
    "canada",
    "thermal insulation",
    "home renovation",
  ],
  authors: [{ name: "Advanced Finishing" }],
  creator: "Advanced Finishing",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Advanced Finishing",
    title: "Advanced Finishing – Facades & Insulation",
    description:
      "The expert in facade renovation and exterior thermal insulation in Canada.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Advanced Finishing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Finishing – Facades & Insulation",
    description:
      "The expert in facade renovation and exterior thermal insulation in Canada.",
    images: ["/images/og-image.jpg"],
    creator: "@advancedfinishing",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
