/**
 * @typedef {object} ScrollEntity
 * @property {string | number} id
 * @property {string} path The last route this type saw.
 */

/**
 * Puts the reader back at the top when the route changes.
 *
 * The router swaps the page in place, so without this a reader who follows a
 * link from halfway down a long page lands halfway down the next one — or past
 * its end, on a page shorter than where they were.
 *
 * The comparison is against the path this entity last saw rather than against
 * `location`, because the router has already pushed the new URL by the time the
 * event arrives.
 *
 * @this {ScrollEntity}
 */
export function create(entity) {
  entity.path = typeof window === "undefined" ? "" : window.location.pathname
}

/**
 * @this {ScrollEntity}
 * @param {{path?: string}} payload
 */
export function routeChange(entity, payload) {
  if (typeof window === "undefined") return

  const next = payload?.path
  if (!next || next === entity.path) return

  entity.path = next
  window.scrollTo({ top: 0, left: 0, behavior: "instant" })
}

export const Scroll = { create, routeChange }
