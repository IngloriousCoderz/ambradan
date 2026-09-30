import { SESSION_REVEALS, SESSION_TIMERS } from "../data/session.js"

/**
 * Explicit entities. Anything not listed here is created automatically, one per
 * type, with the type name in camel case as the id.
 *
 * Entities hold values only; the logic lives in the types. Nothing here carries
 * a word: the language comes from the page entity's `locale`, which SSX sets per
 * locale, and the strings come from `src/locales/`.
 */

/** @type {Record<string, any>} */
const deckTimers = Object.fromEntries(
  SESSION_TIMERS.map(({ id, minutes }) => [
    id,
    {
      type: "DeckTimer",
      minutes,
      left: minutes * 60,
      isRunning: false,
      isDone: false,
    },
  ]),
)

/** @type {Record<string, any>} */
const deckReveals = Object.fromEntries(
  SESSION_REVEALS.map(({ id }) => [id, { type: "DeckReveal", isOpen: false }]),
)

export const entities = {
  nav: { type: "Nav", path: "/", isMenuOpen: false },
  theme: { type: "Theme", mode: "light" },

  detailModal: {
    type: "DetailModal",
    isOpen: false,
    collection: null,
    index: 0,
    locale: "en",
  },

  /* Home */
  hero: { type: "Hero" },
  marquee: { type: "Marquee" },
  entryPoints: { type: "EntryPoints" },
  stats: { type: "Stats" },
  stageStrip: { type: "StageStrip" },
  timeline: { type: "Timeline" },

  /* The four program-lead capabilities, one entity each so they expand alone. */
  capability1: { type: "CapabilityCard", index: 0, isExpanded: false },
  capability2: { type: "CapabilityCard", index: 1, isExpanded: false },
  capability3: { type: "CapabilityCard", index: 2, isExpanded: false },
  capability4: { type: "CapabilityCard", index: 3, isExpanded: false },

  /* Contact page. */
  upcomingEvents: { type: "EventList", collection: "upcoming" },
  pastTalks: { type: "EventList", collection: "past" },
  talkMap: { type: "TalkMap", status: "idle", isCopied: false },

  /* The sample session deck. */
  sessionDeck: { type: "SessionDeck", activeIndex: 0 },
  ...deckTimers,
  ...deckReveals,

  /* Grids, one per collection, so each page can name the one it wants. */
  teachingGrid: {
    type: "CardGrid",
    collection: "teaching",
    columns: 3,
    isReveal: 1,
  },
  workGrid: {
    type: "CardGrid",
    collection: "work",
    columns: 3,
    isReveal: 1,
    headingLevel: 2,
  },
  programsGrid: {
    type: "CardGrid",
    collection: "selection",
    columns: 3,
    isReveal: 1,
  },
}
