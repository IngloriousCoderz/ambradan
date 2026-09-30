import { chromium } from "playwright"

/**
 * Checks every route for a set of defects that a screenshot will not catch:
 * server errors, uncaught exceptions, hydration mismatches, requests to hosts
 * the site has no business calling, and content that is present but invisible.
 */

const ROUTES = [
  "/",
  "/research",
  "/teaching",
  "/work",
  "/programs",
  "/programs/session",
  "/programs/guide",
  "/contact",
  "/it",
  "/it/research",
  "/it/teaching",
  "/it/work",
  "/it/programs",
  "/it/programs/session",
  "/it/programs/guide",
  "/it/contact",
]

/** Hosts the site is allowed to talk to, and only after a deliberate click. */
const ALLOWED_HOSTS = [
  "localhost",
  "ambradan.github.io",
  "tile.openstreetmap.org",
]

const base = process.env.BASE ?? "http://localhost:3000"
const browser = await chromium.launch({ channel: "chrome" })
let failures = 0

for (const mode of ["light", "dark"]) {
  for (const route of ROUTES) {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 900 },
      colorScheme: mode,
    })
    const page = await context.newPage()

    const problems = []
    page.on("pageerror", (e) => problems.push(`JS: ${e.message}`))
    page.on("response", (r) => {
      if (r.status() < 400) return
      problems.push(`HTTP ${r.status()} ${r.url().replace(base, "")}`)
    })
    page.on("requestfailed", (r) =>
      problems.push(`failed ${r.url().replace(base, "")}`),
    )
    page.on("console", (m) => {
      const text = m.text()
      if (m.type() !== "error") return
      if (/websocket|hydrat/i.test(text)) return
      problems.push(`console: ${text.slice(0, 160)}`)
    })
    page.on("request", (r) => {
      // `URL.host` keeps the port; the allowlist is hostnames.
      const host = new URL(r.url()).hostname
      if (host && !ALLOWED_HOSTS.includes(host)) {
        problems.push(`request to ${host}`)
      }
    })

    const res = await page.goto(`${base}${route}`, { waitUntil: "networkidle" })
    if (!res || res.status() >= 400) problems.push(`HTTP ${res?.status()}`)

    // Scroll the page so the reveal observer fires, then confirm nothing that
    // is on screen is still transparent.
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y)
        await new Promise((r) => setTimeout(r, 60))
      }
      window.scrollTo(0, 0)
    })
    await page.waitForTimeout(1400)

    const hidden = await page.evaluate(() =>
      [...document.querySelectorAll(".site-reveal")]
        .filter((el) => Number(getComputedStyle(el).opacity) < 0.9)
        .map((el) => el.className),
    )
    if (hidden.length) problems.push(`unrevealed: ${hidden.length}`)

    const blank = await page.evaluate(
      () => (document.getElementById("root")?.textContent ?? "").trim().length,
    )
    if (blank < 200) problems.push(`suspiciously little text: ${blank} chars`)

    /*
     * An image that decoded to nothing is invisible, so a wrong path in the
     * data would otherwise pass every other check here.
     */
    const brokenImages = await page.evaluate(() =>
      [...document.images]
        .filter((i) => i.complete && i.naturalWidth === 0)
        .map((i) => i.getAttribute("src")),
    )
    if (brokenImages.length) {
      problems.push(`broken images: ${[...new Set(brokenImages)].join(", ")}`)
    }

    /*
     * Every internal link has to be a path the client router knows. The router
     * calls `preventDefault()` on any same-origin click before it looks for a
     * route, so a link to a path it has no route for — `/it/` rather than `/it`,
     * say — is not a 404, it is a link that silently does nothing. That shipped
     * as a dead language switcher and three dead "Home" links, so it is worth
     * checking the target rather than the status code.
     */
    const unroutable = await page.evaluate((known) => {
      const bad = []
      for (const a of document.querySelectorAll("a[href]")) {
        const href = a.getAttribute("href")
        if (!href || !href.startsWith("/")) continue
        const path = href.split("#")[0].split("?")[0]
        if (!known.includes(path)) {
          bad.push(
            `${path} (${a.textContent.trim().slice(0, 18) || a.className})`,
          )
        }
      }
      return [...new Set(bad)]
    }, ROUTES)
    if (unroutable.length)
      problems.push(`links to unknown routes: ${unroutable.join(", ")}`)

    /*
     * Each language must be served in its own language. The sample deck and
     * its guide are English documents, so they stay marked English on both
     * paths and are excluded here.
     */
    const isEnglishDocument = /\/(session|guide)$/.test(route)
    if (
      route.startsWith("/it") &&
      !isEnglishDocument &&
      (await page.evaluate(() => document.documentElement.lang)) !== "it"
    ) {
      problems.push("html lang is not it")
    }

    const label = `${mode.padEnd(5)} ${route}`
    if (problems.length) {
      failures++
      console.log(
        `FAIL ${label}\n       ${[...new Set(problems)].join("\n       ")}`,
      )
    } else {
      console.log(`ok   ${label}`)
    }

    await context.close()
  }
}

await browser.close()
console.log(
  failures ? `\n${failures} route(s) with problems` : "\nall routes clean",
)
process.exit(failures ? 1 : 0)
