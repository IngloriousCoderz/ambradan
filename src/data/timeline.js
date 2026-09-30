/**
 * The start of the Freedom v2 apparatus. A fact rather than copy, so it sits
 * with the data; the surrounding labels live in the locale files.
 */
export const FREEDOM_STARTED_ISO = "2026-07-12T00:00:00Z"

/** Whole days since `FREEDOM_STARTED_ISO`. */
export const daysRunning = () =>
  Math.floor((Date.now() - new Date(FREEDOM_STARTED_ISO)) / 86400000)
