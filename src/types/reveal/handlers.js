/**
 * @typedef {object} RevealEntity
 * @property {string | number} id
 */

import { backstop, sweep } from "./reveal.js"

/**
 * How long to wait before revealing anything still on screen. The observer
 * normally beats this; the timer only exists so a dropped callback cannot leave
 * a gap in the first screenful.
 */
const BACKSTOP_MS = 2500

/**
 * Owns the reveal lifecycle. It renders nothing: it exists so the timing and
 * the post-navigation sweep have one home rather than living in a page.
 *
 * @this {RevealEntity}
 */
export function create() {
  if (typeof window === "undefined") return

  // The tree is rendered immediately after the store is created, so the first
  // sweep waits for that to land.
  requestAnimationFrame(() => {
    sweep()
    setTimeout(backstop, BACKSTOP_MS)
  })

  /*
   * A last line of defence. The observer is the mechanism, but a reader must
   * never be able to scroll to a section and find it blank, so scrolling runs
   * the same sweep. `sweep` only touches elements that are still pending, and
   * `wired` stops them being set up twice.
   */
  let queued = false
  window.addEventListener(
    "scroll",
    () => {
      if (queued) return
      queued = true
      requestAnimationFrame(() => {
        queued = false
        sweep()
      })
    },
    { passive: true },
  )
}

/** Re-runs the sweep after a client-side navigation. */
export function routeChange() {
  if (typeof window === "undefined") return
  requestAnimationFrame(sweep)
}
