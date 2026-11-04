import localFont from "next/font/local";

/*
 * Geist, self-hosted (SIL Open Font License, see fonts/LICENSE-Geist.txt).
 * Only the sans face is preloaded: it sets the headline and body text, so it
 * is on the path to the largest paint. Mono styles small metadata and can
 * arrive a moment later without holding up the first render.
 */
export const geistSans = localFont({
  src: "./fonts/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
  adjustFontFallback: "Arial",
});

export const geistMono = localFont({
  src: "./fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "Liberation Mono", "monospace"],
});
