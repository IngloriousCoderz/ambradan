/**
 * @typedef {import("./helpers").ThemeEntity} ThemeEntity
 */

import { applyToDocument, persist, preferredMode } from "./helpers.js"

/**
 * Reading mode.
 *
 * `create` adopts whatever the pre-paint script in `site.config.js` already put
 * on <html>, so the toggle never disagrees with the screen on its first click.
 * During the static build there is no document, and `applyToDocument` is a
 * no-op, which leaves the server-rendered markup classless on purpose.
 *
 * @this {ThemeEntity}
 */
export function create(entity) {
  entity.mode = preferredMode()
  applyToDocument(entity.mode)
}

/** @this {ThemeEntity} */
export function toggle(entity) {
  entity.mode = entity.mode === "dark" ? "light" : "dark"
  applyToDocument(entity.mode)
  persist(entity.mode)
}
