import { chromium } from "playwright"

const ROUTES = [
  "/",
  "/research",
  "/teaching",
  "/work",
  "/programs",
  "/contact",
  "/it/",
  "/it/research",
  "/it/teaching",
  "/it/work",
  "/it/programs",
  "/it/contact",
]
const base = process.env.BASE ?? "http://localhost:3000"
const browser = await chromium.launch({ channel: "chrome" })

/* ------------------------------------------------- small screen --- */

console.log("--- 390px, navigation in a drawer ---")
{
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  })
  const page = await context.newPage()
  const errors = []
  page.on("pageerror", (e) => errors.push(e.message))

  for (const route of ROUTES) {
    await page.goto(`${base}${route}`, { waitUntil: "networkidle" })
    await page.waitForTimeout(300)

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    )
    const burger = await page.locator(".site-burger").isVisible()
    const wideLinks = await page.locator(".site-nav-links").isVisible()

    console.log(
      `${route.padEnd(12)} h-overflow ${String(overflow).padStart(4)}px  burger ${burger ? "yes" : "NO "}  inline-nav ${wideLinks ? "STILL SHOWN" : "hidden"}`,
    )
  }

  // The drawer opens and closes.
  await page.goto(`${base}/`, { waitUntil: "networkidle" })
  await page.locator(".site-burger").click()
  await page.waitForTimeout(300)
  console.log(
    "drawer opens:",
    await page.locator(".site-mobile-nav.is-open").isVisible(),
  )
  await page.screenshot({ path: "shots/mobile-menu.png" })

  await page.locator(".site-mobile-nav a").nth(1).click()
  await page.waitForTimeout(700)
  console.log(
    "after navigating, drawer closed:",
    (await page.locator(".site-mobile-nav.is-open").count()) === 0,
  )
  console.log("url after drawer nav:", new URL(page.url()).pathname)

  console.log(
    "errors:",
    errors.filter((e) => !/websocket/i.test(e)),
  )
  await page.screenshot({ path: "shots/mobile-research.png" })
  await context.close()
}

/* --------------------------------------------------- no scripting --- */

console.log("\n--- JavaScript disabled ---")
{
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    javaScriptEnabled: false,
  })
  const page = await context.newPage()

  for (const route of ["/", "/it/", "/research", "/it/contact"]) {
    await page.goto(`${base}${route}`, { waitUntil: "load" })
    await page.waitForTimeout(400)

    const report = await page.evaluate(() => {
      const root = document.getElementById("root")
      const hidden = [...document.querySelectorAll(".site-reveal")].filter(
        (el) => Number(getComputedStyle(el).opacity) < 0.9,
      ).length
      return {
        text: (root?.textContent ?? "").trim().length,
        h1: document.querySelector("h1")?.textContent?.trim().slice(0, 44),
        nav: Boolean(document.querySelector(".site-nav")),
        footer: Boolean(document.querySelector(".site-footer")),
        hidden,
        hasJsFlag: document.documentElement.classList.contains("ambra-js"),
      }
    })

    console.log(
      `${route.padEnd(10)} text ${String(report.text).padStart(5)}  h1 "${report.h1}"  nav ${report.nav}  footer ${report.footer}  hidden ${report.hidden}  js-flag ${report.hasJsFlag}`,
    )
  }

  await page.goto(`${base}/`, { waitUntil: "load" })
  await page.screenshot({ path: "shots/nojs-home.png", fullPage: true })
  await context.close()
}

await browser.close()
