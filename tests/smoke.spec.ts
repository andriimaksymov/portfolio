import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const AXE_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"];

/** Words the copy must not use (see README, "Writing rules"). */
const BANNED = [
  /\bspearhead/i,
  /\bleverag/i,
  /\butiliz/i,
  /\bsynerg/i,
  /\bpassionate\b/i,
  /results-driven/i,
  /\bdynamic\b/i,
  /cutting-edge/i,
  /\bseamless/i,
  /\brobust\b/i,
  /\binnovativ/i,
  /\bdelv(e|ing)\b/i,
  /\borchestrat/i,
  /\bfoster/i,
  /\bpivotal\b/i,
  /\btestament\b/i,
  /\blandscape\b/i,
  /proven track record/i,
];

async function axeViolations(page: Page) {
  const results = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze();
  return results.violations.map((v) => `${v.id} (${v.impact}): ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`);
}

test("renders the name, role and the four main actions", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Andrii Maksymov/);

  const h1 = page.getByRole("heading", { level: 1 });
  await expect(h1).toContainText("Andrii Maksymov");
  await expect(h1).toContainText("Senior Frontend Engineer");

  const actions = page.getByRole("list", { name: "Contact and CV" });
  await expect(actions.getByRole("link", { name: /Download CV/ })).toHaveAttribute("href", "/Andrii_Maksymov_CV.pdf");
  await expect(actions.getByRole("link", { name: "Email" })).toHaveAttribute("href", "mailto:andrii@andriim.dev");
  await expect(actions.getByRole("link", { name: "LinkedIn" })).toHaveAttribute("href", /linkedin\.com\/in\/maksymov-andrii/);
  await expect(actions.getByRole("link", { name: "GitHub" })).toHaveAttribute("href", "https://github.com/andriimaksymov");
});

for (const viewport of [
  { name: "desktop", width: 1280, height: 800 },
  { name: "mobile", width: 360, height: 740 },
]) {
  test(`every nav link scrolls to its section (${viewport.name})`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("/");
    const links = page.getByRole("navigation", { name: "Primary" }).getByRole("link");
    const count = await links.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      const href = await link.getAttribute("href");
      expect(href, "nav links are in-page anchors").toMatch(/^#[\w-]+$/);
      const section = page.locator(`section${href}`);
      await expect(section, `${href} exists exactly once`).toHaveCount(1);
      await link.click();
      await expect(page).toHaveURL(new RegExp(`${href}$`));
      await expect(section).toBeInViewport();
    }
  });
}

test("serves the CV as a PDF", async ({ request }) => {
  const res = await request.get("/Andrii_Maksymov_CV.pdf");
  expect(res.status()).toBe(200);
  expect(res.headers()["content-type"]).toContain("application/pdf");
  expect((await res.body()).subarray(0, 5).toString()).toBe("%PDF-");
});

for (const colorScheme of ["light", "dark"] as const) {
  test(`has no axe violations (${colorScheme}, desktop)`, async ({ page }) => {
    await page.emulateMedia({ colorScheme });
    await page.goto("/");
    expect(await axeViolations(page)).toEqual([]);
  });
}

test("has no axe violations and no sideways scroll at 360 px", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 740 });
  await page.goto("/");
  expect(await axeViolations(page)).toEqual([]);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});

test("skip link is the first tab stop and moves focus to the main content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
  await expect(skip).toBeInViewport();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
});

test("images have alt text and explicit sizes", async ({ page }) => {
  await page.goto("/");
  const images = await page.locator("img").evaluateAll((imgs) =>
    imgs.map((img) => ({
      src: img.getAttribute("src"),
      alt: img.getAttribute("alt"),
      width: img.getAttribute("width"),
      height: img.getAttribute("height"),
    })),
  );
  expect(images.length).toBeGreaterThan(0);
  for (const img of images) {
    expect(img.alt, `${img.src} has alt text`).toBeTruthy();
    expect(img.width && img.height, `${img.src} has width and height`).toBeTruthy();
  }
});

test("every character on the page is in the subset fonts", async ({ page }) => {
  // Must match UNICODES in scripts/subset-fonts.sh.
  const ranges: [number, number][] = [
    [0x20, 0x7e], [0xa0, 0xff], [0x131, 0x131], [0x152, 0x153], [0x2c6, 0x2c6], [0x2da, 0x2da], [0x2dc, 0x2dc],
    [0x2010, 0x2027], [0x2030, 0x203a], [0x20ac, 0x20ac], [0x2122, 0x2122], [0x2190, 0x2193], [0x2212, 0x2212],
  ];
  await page.goto("/");
  const text = await page.locator("body").innerText();
  const missing = [...new Set(text.replace(/\s/g, ""))].filter((ch) => {
    const code = ch.codePointAt(0)!;
    return !ranges.some(([lo, hi]) => code >= lo && code <= hi);
  });
  expect(missing, "add these to scripts/subset-fonts.sh and re-run it").toEqual([]);
});

test("copy follows the writing rules", async ({ page }) => {
  await page.goto("/");
  const text = await page.locator("body").innerText();
  for (const word of BANNED) expect(text, `banned word ${word}`).not.toMatch(word);
  expect(text, "no em dashes").not.toContain("—");
});
