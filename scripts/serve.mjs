// Minimal static server for the exported site in out/. Used by the Playwright
// tests and for local Lighthouse runs. It gzips text responses, as Cloudflare
// Pages compresses them, so measurements are closer to production.
//
// Usage: node scripts/serve.mjs [port]   (default 4173, or $PORT)
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { gzipSync } from "node:zlib";

const root = path.resolve("out");
const port = Number(process.argv[2] ?? process.env.PORT ?? 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
};
const compressible = /^(text\/|application\/(json|xml|manifest\+json)|image\/svg)/;

async function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  const candidates = [clean, `${clean}.html`, path.join(clean, "index.html")];
  for (const candidate of candidates) {
    const file = path.join(root, candidate);
    // Refuse anything that escapes out/.
    if (!file.startsWith(root)) return null;
    try {
      if ((await stat(file)).isFile()) return file;
    } catch {
      // try the next candidate
    }
  }
  return null;
}

createServer(async (req, res) => {
  const file = await resolveFile(req.url ?? "/");
  const status = file ? 200 : 404;
  const target = file ?? path.join(root, "404.html");
  const type = types[path.extname(target)] ?? "application/octet-stream";
  let body = await readFile(target);
  const headers = { "Content-Type": type };
  if (target.includes(`${path.sep}_next${path.sep}static${path.sep}`)) {
    headers["Cache-Control"] = "public, max-age=31536000, immutable";
  }
  if (compressible.test(type) && /\bgzip\b/.test(req.headers["accept-encoding"] ?? "")) {
    body = gzipSync(body);
    headers["Content-Encoding"] = "gzip";
  }
  res.writeHead(status, headers);
  res.end(req.method === "HEAD" ? undefined : body);
}).listen(port, () => {
  console.log(`Serving out/ at http://localhost:${port}`);
});
