// Renders public/og.png (1200x630), the social preview card, from the same
// profile facts and design tokens as the site. Re-run after changing the name,
// role or headline facts: npm run og
import { readFileSync } from "node:fs";
import path from "node:path";
import { chromium } from "@playwright/test";

// Embedded as data URLs: a page made with setContent() cannot load file:// fonts.
const font = (file) =>
  `data:font/woff2;base64,${readFileSync(path.resolve("src/app/fonts", file)).toString("base64")}`;

const html = `<!doctype html>
<html><head><meta charset="utf-8"><style>
  @font-face { font-family: "Geist"; src: url("${font("Geist-Variable.woff2")}") format("woff2"); font-weight: 100 900; }
  @font-face { font-family: "Geist Mono"; src: url("${font("GeistMono-Variable.woff2")}") format("woff2"); font-weight: 100 900; }
  * { box-sizing: border-box; margin: 0; }
  body { width: 1200px; height: 630px; background: #fafaf9; color: #17181b; font-family: "Geist", sans-serif; }
  .card { position: relative; height: 100%; padding: 72px 80px; display: flex; flex-direction: column; }
  .site { font-family: "Geist Mono", monospace; font-size: 24px; color: #5c5e61; display: flex; align-items: center; gap: 14px; }
  .mark { width: 14px; height: 14px; background: #b71d00; border-radius: 2px; }
  h1 { margin-top: auto; font-size: 84px; line-height: 1; letter-spacing: -0.035em; font-weight: 600; }
  h1 span { display: block; color: #414246; }
  .stack { margin-top: 28px; font-family: "Geist Mono", monospace; font-size: 30px; color: #b71d00; }
  .facts { margin-top: 36px; padding-top: 24px; border-top: 2px solid #e4e3e0; font-family: "Geist Mono", monospace; font-size: 24px; color: #414246; }
</style></head><body>
  <div class="card">
    <p class="site"><span class="mark"></span>andriim.dev</p>
    <h1>Andrii Maksymov<span>Senior Frontend Engineer</span></h1>
    <p class="stack">React, TypeScript, Next.js</p>
    <p class="facts">9+ years in web · Ukraine, UTC+2/+3 · Remote, open to roles worldwide</p>
  </div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: "public/og.png", type: "png" });
await browser.close();
console.log("wrote public/og.png");
