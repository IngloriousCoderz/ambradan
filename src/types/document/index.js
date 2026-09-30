/**
 * Keeps the document in step with the route.
 *
 * The router swaps the page in place, so the `<html lang>` attribute, the
 * title and the description are all still those of the page the reader arrived
 * on. That matters for a screen reader, for anything reading the live DOM, and
 * for the browser history entry the reader can go back to.
 *
 * @typedef {object} DocumentEntity
 * @property {string | number} id
 */

import { copy, DEFAULT_LOCALE, normalisePath } from "../../locales/index.js"

/**
 * Metadata for the two documents that are English on both paths. They are not
 * in the locale files because their language does not follow the route, and
 * duplicating them per locale would imply otherwise.
 *
 * @type {Record<string, {lang: string, title: string, description: string}>}
 */
const ENGLISH_DOCUMENTS = {
  "/programs/session": {
    lang: "en",
    title: "Framing before choosing — a sample session",
    description:
      "A sample Better Futures session in the platform fellows see on screen: two hours, six timed activities, and a worked example rebuilt live.",
  },
  "/programs/guide": {
    lang: "en",
    title: "Framing before choosing — facilitator guide",
    description:
      "The run sheet for the sample session: what each block is for, what to do in it, what to watch for, and the three numbers to keep per cohort.",
  },
}

/**
 * @param {string} path
 * @returns {{lang: string, title: string, description: string} | null}
 */
function metaFor(path) {
  const english = ENGLISH_DOCUMENTS[path]
  if (english) return english

  const { locale, route } = split(path)
  return copy(locale).meta[route] ?? null
}

/** Splits `/it/research` into its locale and its route. */
function split(path) {
  const bare = normalisePath(path || "/")
  if (bare.startsWith("/it")) {
    return { locale: "it", route: bare.slice(3) || "/" }
  }
  return { locale: DEFAULT_LOCALE, route: bare || "/" }
}

/**
 * @this {DocumentEntity}
 * @param {{path?: string}} payload
 */
export function routeChange(entity, payload) {
  if (typeof document === "undefined") return

  const page = metaFor(payload?.path ?? window.location.pathname)
  if (!page) return

  document.documentElement.lang = page.lang
  document.title = page.title
  setMeta("description", page.description)
  setMeta("og:title", page.title, "property")
  setMeta("og:description", page.description, "property")
}

/** @param {string} name @param {string} content @param {string} [attribute] */
function setMeta(name, content, attribute = "name") {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`)

  if (!element) {
    element = document.createElement("meta")
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }

  element.setAttribute("content", content)
}

export const Document = { routeChange }
