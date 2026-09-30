/**
 * @typedef {object} SessionDeckEntity
 * @property {string | number} id
 * @property {number} activeIndex Which section the reader is looking at.
 */

import { SESSION } from "../../data/session.js"

/** Keys the deck responds to, and the direction each one moves. */
const KEYS = {
  ArrowDown: 1,
  PageDown: 1,
  " ": 1,
  ArrowUp: -1,
  PageUp: -1,
}

/**
 * @this {SessionDeckEntity}
 * @param {void} _payload
 * @param {import("@inglorious/web").Api} api
 */
export function create(entity, _payload, api) {
  entity.activeIndex = 0

  if (typeof document === "undefined") return

  watchActiveSection(entity, api)
  watchKeys(entity.id, api)
}

/**
 * Records the section the reader is looking at, from a click on a dot.
 *
 * @this {SessionDeckEntity}
 * @param {number} payload
 */
export function goTo(entity, payload) {
  const index = Math.min(Math.max(Number(payload) || 0, 0), SESSION.length - 1)
  entity.activeIndex = index
}

/**
 * Marks the dot for whichever section owns the middle of the screen.
 *
 * The observer and the key handler run outside any update cycle, so they
 * dispatch rather than write: a write from a DOM callback would land on a
 * revoked draft and would not re-render.
 *
 * @this {SessionDeckEntity}
 * @param {import("@inglorious/web").Api} api
 */
function watchActiveSection(entity, api) {
  const sections = SESSION.map((section) =>
    document.getElementById(section.id),
  ).filter(Boolean)

  if (!("IntersectionObserver" in window)) return

  const id = entity.id

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const index = sections.indexOf(
          /** @type {HTMLElement} */ (entry.target),
        )
        if (index >= 0) api.notify(`#${id}:goTo`, index)
      }
    },
    { threshold: 0.55 },
  )

  for (const section of sections) observer.observe(section)
}

/**
 * Arrow keys and space move between sections, so a facilitator can drive the
 * deck without reaching for the mouse.
 *
 * @this {SessionDeckEntity}
 * @param {import("@inglorious/web").Api} api
 */
function watchKeys(id, api) {
  document.addEventListener("keydown", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return
    if (event.target instanceof HTMLElement) {
      const tag = event.target.tagName
      if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        event.target.isContentEditable
      ) {
        return
      }
    }

    const step = KEYS[event.key]
    if (!step) return

    // Read the current position from the store: `entity` here is the draft
    // `create` was handed, and it has been revoked since.
    const current = api.getEntity(String(id))?.activeIndex ?? 0
    const next = Math.min(Math.max(current + step, 0), SESSION.length - 1)
    if (next === current) return

    event.preventDefault()
    api.notify(`#${id}:goTo`, next)
    document
      .getElementById(SESSION[next].id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  })
}
