import { chromium } from "playwright"

/**
 * The performance numbers a reader actually experiences: what the browser has to
 * fetch before it can paint, and how long until the page is usable.
 */

const routes = process.argv.slice(2)
const base = process.env.BASE ?? "http://localhost:3222"
const browser = await chromium.launch({ channel: "chrome" })

const round = (n) => Math.round(n)

for (const route of routes) {
  // A cold cache each time, so this is a first visit.
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
  })
  const page = await context.newPage()

  let bytes = 0
  let requests = 0
  page.on("response", async (res) => {
    requests += 1
    const length = Number(res.headers()["content-length"] ?? 0)
    if (length) bytes += length
  })

  await page.goto(`${base}${route}`, { waitUntil: "load" })
  await page.waitForTimeout(1500)

  const timing = await page.evaluate(() => {
    const nav = performance.getEntriesByType("navigation")[0] ?? {}
    const paints = Object.fromEntries(
      performance.getEntriesByType("paint").map((p) => [p.name, p.startTime]),
    )
    return {
      ttfb: nav.responseStart,
      domContentLoaded: nav.domContentLoadedEventEnd,
      fcp: paints["first-contentful-paint"],
      cls: performance
        .getEntriesByType("layout-shift")
        .reduce((sum, e) => sum + (e.hadRecentInput ? 0 : e.value), 0),
    }
  })

  const fontLoaded = await page.evaluate(() =>
    document.fonts.check('16px "Archivo"'),
  )

  console.log(
    `${route.padEnd(20)} req ${String(requests).padStart(2)}  ${String(
      round(bytes / 1024),
    ).padStart(
      4,
    )} kB  TTFB ${round(timing.ttfb).toString().padStart(4)}ms  FCP ${round(
      timing.fcp,
    )
      .toString()
      .padStart(4)}ms  DCL ${round(timing.domContentLoaded)
      .toString()
      .padStart(
        4,
      )}ms  CLS ${timing.cls.toFixed(3)}  archivo ${fontLoaded ? "yes" : "NO"}`,
  )

  await context.close()
}

await browser.close()
