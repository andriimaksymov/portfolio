import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const url = "https://andriim.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${url}/sitemap.xml`,
    host: url,
  };
}
