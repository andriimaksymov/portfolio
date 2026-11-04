// Captures the personal projects' live sites and writes pre-sized WebP files to
// public/work/<id>-640.webp and <id>-1280.webp. Personal projects only: never
// point this at client products.
//
// Usage: npm run screenshots
// Needs the Playwright Chromium build (`npx playwright install chromium`) and
// sharp, which Next.js already installs for image work.
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";
import sharp from "sharp";

const targets = [
  { id: "gitmerit", url: "https://gitmerit.vercel.app/" },
  { id: "pawbase", url: "https://pet-life-jade.vercel.app/en" },
  { id: "json-ui-forge", url: "https://json-ui-forge.andrii-maksymov-1.workers.dev/" },
];

const outDir = path.resolve("public/work");
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
  reducedMotion: "reduce",
  colorScheme: "light",
});

for (const { id, url } of targets) {
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
  await page.waitForTimeout(1500);
  const png = await page.screenshot({ type: "png" });
  for (const width of [640, 1280]) {
    const file = path.join(outDir, `${id}-${width}.webp`);
    await sharp(png).resize({ width }).webp({ quality: 80 }).toFile(file);
    console.log("wrote", path.relative(process.cwd(), file));
  }
  await page.close();
}

await browser.close();
