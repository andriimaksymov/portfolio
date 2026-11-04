import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static HTML export: Cloudflare Pages (or any static host) serves out/.
  output: "export",
  experimental: {
    // The whole stylesheet is about 4 KB gzipped. Inlining it removes the
    // only render-blocking request.
    inlineCss: true,
  },
};

export default nextConfig;
