/**
 * Reveal-on-scroll.
 *
 * Elements carry the `site-reveal` class in their static markup and are handed
 * to `reveal()` in an attribute position. The `ref` directive fires once the
 * element exists, which is where the observer is attached.
 *
 * Three things keep content from ever being stranded invisible:
 *   - without `IntersectionObserver`, `observe()` reveals immediately;
 *   - `sweep()` picks up any element the directive missed, and runs on mount
 *     and again after every navigation;
 *   - a backstop timer reveals whatever is on screen shortly after load.
 *
 * The hidden state itself is gated on the `ambra-js` class that the inline
 * script in `site.config.js` sets, so a reader without scripting sees the page.
 */

import { ref } from "@inglorious/web/directives/ref"

const IN = "is-in"

/** @type {IntersectionObserver | null} */
let observer = null

/** Elements already wired, so a re-render does not stack observers. */
const wired = new WeakSet()

/** @returns {IntersectionObserver | null} */
function getObserver() {
  if (observer) return observer
  if (typeof IntersectionObserver === "undefined") return null

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add(IN)
        observer?.unobserve(entry.target)
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
  )

  return observer
}

/** @param {unknown} element */
function observe(element) {
  // `ref` also fires while a template is being built server-side, where there
  // is no element to attach to.
  if (!element || typeof element !== "object") return
  if (wired.has(element)) return
  wired.add(element)

  const io = getObserver()
  if (!io) {
    element.classList.add(IN)
    return
  }
  io.observe(element)
}

/**
 * Marks one element for reveal. Use in an attribute position, next to a
 * `class` binding built with `classMap`. The stagger comes from adding
 * `site-reveal-1`, `site-reveal-2` or `site-reveal-3` to that same map.
 *
 * ```js
 * html`<article
 *   class=${classMap({ "site-card": true, "site-reveal-1": true })}
 *   ${reveal()}
 * >…</article>`
 * ```
 *
 * @returns {import("@inglorious/web/directives/ref").RefDirectiveResult}
 */
export const reveal = () => ref(observe)

/**
 * Observes anything still unwired and reveals whatever is already on screen.
 * Called on mount and after every navigation, because a new page's elements were
 * never part of the previous tree.
 */
export function sweep() {
  if (typeof document === "undefined") return

  for (const element of document.querySelectorAll(".site-reveal:not(.is-in)")) {
    observe(element)
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add(IN)
    }
  }
}

/** Reveals everything on screen after the backstop, whether or not it landed. */
export function backstop() {
  if (typeof window === "undefined") return

  for (const element of document.querySelectorAll(".site-reveal:not(.is-in)")) {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add(IN)
    }
  }
}
