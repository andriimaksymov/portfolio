import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const url = "https://andriim.dev";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Andrii Maksymov — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with nine years in web development and five-plus focused on React, TypeScript, and Next.js. Data-heavy product UIs and legacy modernization.",
  keywords: ["Frontend Engineer", "React", "TypeScript", "Next.js", "Frontend Architecture"],
  authors: [{ name: "Andrii Maksymov", url }],
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title: "Andrii Maksymov — Senior Frontend Engineer",
    description:
      "Nine years in web, five-plus in React, TypeScript, and Next.js. Data-heavy product UIs and legacy modernization.",
    siteName: "Andrii Maksymov",
  },
  twitter: {
    card: "summary",
    title: "Andrii Maksymov — Senior Frontend Engineer",
    description: "Senior Frontend Engineer. React, TypeScript, Next.js.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
