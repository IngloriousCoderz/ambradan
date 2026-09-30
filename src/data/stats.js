/**
 * Counts that depend on the calendar rather than on the copy.
 *
 * The figures and their labels live in the locale files; what is here is the
 * arithmetic, which is the same in every language.
 */

import { EVENTS, PAST_TALKS } from "./events.js"
import { localise } from "./localised.js"

const today = () => new Date().toISOString().slice(0, 10)

/** Confirmed talks that have not happened yet. */
export const talksToCome = () =>
  EVENTS.filter((e) => e.talk && !e.tbc && e.iso >= today())

/** Every talk in 2026, delivered and scheduled. */
export const talksIn2026 = () =>
  PAST_TALKS.length + EVENTS.filter((e) => e.talk && !e.tbc).length

/**
 * The next confirmed talk, already localised.
 *
 * @param {string} [locale]
 * @returns {import("./events").EventText | null}
 */
export const nextTalk = (locale = "en") => {
  const next = [...talksToCome()].sort((a, b) => (a.iso < b.iso ? -1 : 1))[0]
  return next ? localise(next, locale) : null
}

/**
 * The city strip on the home page: one entry per talk, past and upcoming, with
 * the ones still ahead flagged.
 *
 * `tbcSuffix` is the reader-facing note that a date is not settled yet, so it
 * comes from the locale file rather than being concatenated here.
 *
 * @param {string} locale
 * @param {string} [tbcSuffix]
 * @returns {{city: string, org: string, isNext: boolean}[]}
 */
export const stageCities = (locale = "en", tbcSuffix = "· date TBC") => {
  const start = today()

  /** @type {{iso?: string, event: any, isTbc?: boolean}[]} */
  const entries = [
    ...PAST_TALKS.map((event) => ({
      iso: event.iso,
      event: localise(event, locale),
    })),
    ...EVENTS.filter((event) => event.talk).map((event) => ({
      iso: event.iso,
      isTbc: Boolean(event.tbc),
      event: localise(event, locale),
    })),
  ]

  return entries.map(({ iso, event, isTbc }) => ({
    city: event.city ?? "",
    org: event.t.split(",")[0] + (isTbc ? ` ${tbcSuffix}` : ""),
    isNext: Boolean(iso) && iso >= start,
  }))
}
