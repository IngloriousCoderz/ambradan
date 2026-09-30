/**
 * @typedef {import("./template").NavEntity} NavEntity
 */

/** @this {NavEntity} */
export function toggleMenu(entity) {
  entity.isMenuOpen = !entity.isMenuOpen
}

/**
 * Called on every navigation, including the first one, to close the small-screen
 * menu. The active link is not set here: each page states its own route, so the
 * server-rendered markup already marks the right link.
 */
export function routeChange(entity) {
  entity.isMenuOpen = false
}
