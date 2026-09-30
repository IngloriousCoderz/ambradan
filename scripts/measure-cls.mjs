import { chromium } from "playwright"

/**
 * Reports the Cumulative Layout Shift and, for each contributing shift, the
 * elements that moved. A score alone says a page jitters; this says what jitters.
 */

const routes = process.argv.slice(2)
const base = process.env.BASE ?? "http://localhost:3222"

const browser = await chromium.launch({ channel: "chrome" })

for (const route of routes) {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
  })
  const page = await context.newPage()

  await page.addInitScript(() => {
    window.__shifts = []
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.hadRecentInput) continue
        window.__shifts.push({
          value: entry.value,
          time: Math.round(entry.startTime),
          sources: (entry.sources ?? []).map((s) => {
            const node = s.node
            return {
              tag: node?.tagName?.toLowerCase() ?? "?",
              cls: String(node?.className ?? "").slice(0, 48),
              from: [
                Math.round(s.previousRect.x),
                Math.round(s.previousRect.y),
              ],
              to: [Math.round(s.currentRect.x), Math.round(s.currentRect.y)],
            }
          }),
        })
      }
    }).observe({ type: "layout-shift", buffered: true })
  })

  await page.goto(`${base}${route}`, { waitUntil: "networkidle" })
  await page.waitForTimeout(2500)

  const report = await page.evaluate(() => {
    const total = window.__shifts.reduce((sum, s) => sum + s.value, 0)
    return { total, shifts: window.__shifts }
  })

  console.log(
    `\n${route}   CLS ${report.total.toFixed(3)}  (${report.shifts.length} shifts)`,
  )
  for (const shift of report.shifts
    .sort((a, b) => b.value - a.value)
    .slice(0, 4)) {
    console.log(`  ${shift.value.toFixed(4)} at ${shift.time}ms`)
    for (const s of shift.sources.slice(0, 3)) {
      console.log(
        `     ${s.tag}.${s.cls}  ${JSON.stringify(s.from)} -> ${JSON.stringify(s.to)}`,
      )
    }
  }

  await context.close()
}

await browser.close()
