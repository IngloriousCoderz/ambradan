import { chromium } from "playwright"

const base = process.env.BASE ?? "http://localhost:3000"
const browser = await chromium.launch({ channel: "chrome" })
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
const errors = []
page.on("pageerror", (e) => errors.push(e.message))

// A marker on window survives a client-side navigation but not a full load.
await page.goto(`${base}/`, { waitUntil: "networkidle" })
await page.evaluate(() => {
  window.__spa = true
})
await page.waitForTimeout(500)

const active = () =>
  page
    .locator(".site-nav-link.is-active")
    .first()
    .textContent()
    .then((t) => t.trim())

console.log(
  "start url:",
  new URL(page.url()).pathname,
  "| active:",
  await active(),
)

const NAV = {
  en: ["Research", "Teaching", "Work", "Programs", "Contact"],
  it: ["Ricerca", "Formazione", "Lavoro", "Programmi", "Contatti"],
}

for (const [prefix, labels] of [
  ["", NAV.en],
  ["/it", NAV.it],
]) {
  if (prefix) {
    await page.goto(`${base}${prefix}/`, { waitUntil: "networkidle" })
    await page.evaluate(() => {
      window.__spa = true
    })
    await page.waitForTimeout(300)
  }
  for (const label of labels) {
    await page.locator(".site-nav-link", { hasText: label }).click()
    await page.waitForTimeout(600)
    const spa = await page.evaluate(() => Boolean(window.__spa))
    console.log(
      `${prefix || "en"} click ${label.padEnd(10)} -> ${String(new URL(page.url()).pathname).padEnd(14)} active ${String(await active()).padEnd(10)} spa ${spa ? "yes" : "NO (full reload)"}`,
    )
  }
}

// Content actually swapped.
console.log(
  "contact heading:",
  (await page.locator("h1").first().textContent())?.trim(),
)

// Back and forward.
await page.goBack()
await page.waitForTimeout(600)
console.log(
  "back ->",
  new URL(page.url()).pathname,
  "| active:",
  await active(),
)
await page.goForward()
await page.waitForTimeout(600)
console.log(
  "forward ->",
  new URL(page.url()).pathname,
  "| active:",
  await active(),
)

// Reveal is re-armed on the new page: scroll the programs page and check.
await page.goto(`${base}/programs`, { waitUntil: "networkidle" })
await page.locator(".site-nav-link", { hasText: "Contact" }).click()
await page.waitForTimeout(500)
await page.locator(".site-nav-link", { hasText: "Programs" }).click()
await page.waitForTimeout(500)
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await page.waitForTimeout(1200)
const hidden = await page.evaluate(
  () =>
    [...document.querySelectorAll(".site-reveal")].filter(
      (el) => Number(getComputedStyle(el).opacity) < 0.9,
    ).length,
)
console.log("hidden after client-side nav + scroll:", hidden)

// Home link returns to the top of the page.
await page.locator(".site-nav-link", { hasText: "Home" }).click()
await page.waitForTimeout(600)
console.log(
  "home url:",
  new URL(page.url()).pathname,
  "| scrollY:",
  await page.evaluate(() => window.scrollY),
)

console.log(
  "errors:",
  errors.filter((e) => !/websocket/i.test(e)),
)

/*
 * The switcher names the language you are about to get, not the one you are in:
 * "IT" on the English site, "EN" on the Italian one. Both copies of the label
 * said "EN" for a while, so it is worth asserting rather than assuming.
 */
let switchProblems = 0
for (const [route, current, expected] of [
  ["/", "en", "IT"],
  ["/research", "en", "IT"],
  ["/it", "it", "EN"],
  ["/it/research", "it", "EN"],
]) {
  await page.goto(`${base}${route}`, { waitUntil: "load" })
  const seen = await page.evaluate(() => {
    const a = document.querySelector(".site-lang")
    return {
      label: a?.textContent.trim(),
      lang: a?.getAttribute("lang"),
      page: document.documentElement.lang,
    }
  })
  const ok =
    seen.label === expected &&
    seen.lang === expected.toLowerCase() &&
    seen.page === current
  if (!ok) switchProblems++
  console.log(
    `${ok ? "ok  " : "FAIL"} switcher on ${route.padEnd(13)} reads "${seen.label}" lang="${seen.lang}" on a ${seen.page} page`,
  )
}
console.log(
  switchProblems
    ? `${switchProblems} switcher label(s) wrong`
    : "switcher labels agree with the target language",
)

await browser.close()
process.exit(switchProblems ? 1 : 0)
