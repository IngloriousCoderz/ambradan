/**
 * Locale selection.
 *
 * The site is served in two languages. SSX replicates every page for each
 * configured locale and sets `entity.locale` on the page's entity, so a page's
 * `render` reads its language from there and passes it down.
 */

import { en } from "./en.js"
import { it } from "./it.js"

export const DEFAULT_LOCALE = "en"

export const LOCALES = {
  en,
  it,
}

/** @param {string | undefined} locale */
export const resolve = (locale) => (locale && LOCALES[locale]) || en

/**
 * The copy for a locale. A page calls this once and reads from the result.
 *
 * @param {string | undefined} locale
 * @returns {typeof en}
 */
export const copy = (locale) => resolve(locale)

/** @param {string | undefined} locale */
export const isItalian = (locale) => locale === "it"

/**
 * Prefixes a path with its locale. The default locale is served from the root;
 * every other locale lives under its own segment.
 *
 * The Italian home is `/it`, not `/it/`. SSX builds a localised root as the bare
 * prefix, so `/it` is the path the client router registers and the one the
 * sitemap lists. A link to `/it/` is served correctly, but the router has no
 * route for it, and the router calls `preventDefault()` on every same-origin
 * click before it looks, so such a link does nothing at all.
 *
 * Only site-relative paths are prefixed. An absolute URL, a protocol-relative
 * one, an anchor or a `mailto:` is left exactly as it is — the footer links
 * come out of `src/data/`, where LinkedIn and GitHub are shared between the
 * two languages, and prefixing them produced `/ithttps://linkedin.com/...`.
 *
 * @param {string} path
 * @param {string | undefined} locale
 * @returns {string}
 */
export const localePath = (path, locale) => {
  if (!locale || locale === DEFAULT_LOCALE) return path
  if (!path.startsWith("/") || path.startsWith("//")) return path
  return path === "/" ? `/${locale}` : `/${locale}${path}`
}

/**
 * The path with any trailing slash removed, so `/it/` and `/it` are one place.
 *
 * @param {string} path
 * @returns {string}
 */
export const normalisePath = (path) =>
  path.length > 1 ? path.replace(/\/$/, "") : path

/**
 * The same page in the other language, for the language switcher.
 *
 * The two sets of pages share their slugs, so the current path carries over
 * with the other locale's prefix swapped in: `/it/research` becomes
 * `/research`, and the two home pages become `/` and `/it`.
 *
 * @param {string} currentPath
 * @param {string | undefined} locale
 * @returns {string}
 */
export const switchLocalePath = (currentPath, locale) => {
  const other = locale === DEFAULT_LOCALE ? "it" : DEFAULT_LOCALE
  const here = normalisePath(currentPath || "/")
  const prefix = locale && locale !== DEFAULT_LOCALE ? `/${locale}` : ""

  const bare =
    prefix && here.startsWith(prefix)
      ? here.slice(prefix.length) || "/"
      : here || "/"

  return localePath(bare, other)
}
