import type { Metadata, Viewport } from "next";
import { profile } from "@/data/portfolio";
import { geistMono, geistSans } from "./fonts";
import "./globals.css";

const url = profile.website;
const title = `${profile.name} · ${profile.role}`;
const description =
  "Senior frontend engineer, 9+ years in web development, 6 in React and TypeScript, mostly on data-heavy B2B SaaS. Based in Ukraine, remote, open to roles worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url,
    siteName: profile.name,
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${profile.name}, ${profile.role}. ${profile.stack}.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#101214" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressCountry: "UA" },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: ["React", "TypeScript", "Next.js", "TanStack Query", "Design systems", "Frontend testing", "Web accessibility"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
