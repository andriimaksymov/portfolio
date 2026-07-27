import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const url = "https://andriim.dev";
const title = "Andrii Maksymov - Senior Frontend Engineer";
const description =
  "Senior Frontend Engineer with nine years in web development and five-plus focused on React, TypeScript, and Next.js. Data-heavy product UIs, design systems, and legacy modernization.";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: "%s - Andrii Maksymov",
  },
  description,
  applicationName: "Andrii Maksymov",
  authors: [{ name: "Andrii Maksymov", url }],
  creator: "Andrii Maksymov",
  publisher: "Andrii Maksymov",
  category: "technology",
  keywords: [
    "Andrii Maksymov",
    "Senior Frontend Engineer",
    "Frontend Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "Design Systems",
    "Frontend Architecture",
    "Web Performance",
    "React Query",
    "Remote",
  ],
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    siteName: "Andrii Maksymov",
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Andrii Maksymov, Senior Frontend Engineer. React, TypeScript, Next.js.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#FBFBF9",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Andrii Maksymov",
  jobTitle: "Senior Frontend Engineer",
  url,
  email: "andrii@andriim.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rivne",
    addressCountry: "UA",
  },
  sameAs: ["https://github.com/andriimaksymov", "https://linkedin.com/in/maksymov-andrii"],
  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "Design Systems",
    "Frontend Architecture",
    "Web Performance",
    "React Query",
    "Data visualization",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
