/**
 * Reading the site's data in one language or the other.
 *
 * A data entry holds the facts that are the same wherever it appears — a logo
 * key, a URL, coordinates, a sortable date, whether something is a talk — plus
 * one text block per language. `localise` hands back both at once, because
 * almost every caller wants the coordinates and the description together.
 *
 * Every text field is written out in both languages rather than falling back, so
 * an untranslated string shows up as a gap in review instead of quietly
 * shipping in the wrong language.
 */

/** Keys that hold the per-language text rather than a fact. */
const RESERVED = new Set(["id", "en", "it"])

/**
 * @template {Record<string, any>} T
 * @param {T} entry
 * @param {string} [locale]
 */
export function localise(entry, locale = "en") {
  const text = entry[locale] ?? entry.en

  // A few entries are a bare pair rather than an object, such as the list of
  // other organisations taught for. They have no shared facts, so the text is
  // all there is.
  if (Array.isArray(text)) return text

  const facts = {}
  for (const [key, value] of Object.entries(entry)) {
    if (!RESERVED.has(key)) facts[key] = value
  }

  return { id: entry.id, ...facts, ...text }
}

/**
 * @template {Record<string, any>} T
 * @param {T[]} entries
 * @param {string} [locale]
 */
export function localiseAll(entries, locale = "en") {
  return entries.map((entry) => localise(entry, locale))
}
