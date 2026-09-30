/**
 * @typedef {import("@inglorious/store").Api} Api
 *
 * @typedef {object} ThemeEntity
 * @property {string | number} id
 * @property {"light" | "dark"} mode
 */

/** Key the preference is stored under. */
export const STORAGE_KEY = "ambra-theme"

export const THEME_CLASS = "iw-theme-ambra"
export const LIGHT_CLASS = "iw-theme-light"
export const DARK_CLASS = "iw-theme-dark"

/**
 * The mode the browser is asking for when nothing has been stored. The inline
 * script in `site.config.js` applies the same rule before first paint; this is
 * the copy that keeps the store in step with what is already on screen.
 *
 * @returns {"light" | "dark"}
 */
export function preferredMode() {
  if (typeof window === "undefined") return "light"

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "light" || stored === "dark") return stored
  } catch {
    // Private browsing, or storage blocked. Fall through to the media query.
  }

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

/**
 * Puts the theme classes on <html>.
 *
 * The class list lives on the document element rather than inside a template,
 * because a theme switch has to reach past the component tree. Doing it from the
 * store handler keeps the mode itself in the store.
 *
 * @param {"light" | "dark"} mode
 */
export function applyToDocument(mode) {
  if (typeof document === "undefined") return

  const root = document.documentElement
  const variant = mode === "dark" ? DARK_CLASS : LIGHT_CLASS

  root.classList.remove(LIGHT_CLASS, DARK_CLASS)
  root.classList.add(THEME_CLASS, variant)
}

/** @param {"light" | "dark"} mode */
export function persist(mode) {
  try {
    window.localStorage.setItem(STORAGE_KEY, mode)
  } catch {
    // Nothing to do: the mode still applies for this page view.
  }
}
