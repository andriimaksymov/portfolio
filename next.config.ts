import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static HTML export so the fully-prerendered site can be served by
  // Cloudflare Pages (or any static host). Outputs to `out/`.
  output: "export",
};

export default nextConfig;
