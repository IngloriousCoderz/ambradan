import { chromium } from "playwright"

const base = process.env.BASE ?? "http://localhost:3111"

/** `route:mode[:fold]` — e.g. `/research:dark` or `/:light:fold`. */
const specs = process.argv.slice(2)

const browser = await chromium.launch({ channel: "chrome" })

for (const spec of specs) {
  const [route, mode = "light", size = "full"] = spec.split(":")
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 2,
    colorScheme: mode === "dark" ? "dark" : "light",
  })
  const page = await context.newPage()
  const errors = []
  page.on("pageerror", (e) => errors.push(String(e)))

  const response = await page.goto(`${base}${route}`, {
    waitUntil: "networkidle",
  })
  if (!response || response.status() >= 400) {
    console.log(`${route}  HTTP ${response?.status()}`)
    await context.close()
    continue
  }

  if (size === "full") {
    // Scroll the whole page so the reveal observer fires everywhere, then
    // return to the top. A fullPage screenshot alone captures un-revealed
    // sections, which is not what a visitor sees.
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y)
        await new Promise((r) => setTimeout(r, 90))
      }
      window.scrollTo(0, 0)
    })
    await page.waitForTimeout(900)
  } else {
    await page.waitForTimeout(900)
  }

  const name = `${route.replace(/\W+/g, "_") || "home"}-${mode}${
    size === "full" ? "" : "-fold"
  }`
  await page.screenshot({
    path: `shots/${name}.png`,
    fullPage: size === "full",
  })

  const real = errors.filter((e) => !/websocket/i.test(e))
  console.log(
    `${name}  ${real.length ? "ERRORS: " + real.join(" | ") : "clean"}`,
  )
  await context.close()
}

await browser.close()
