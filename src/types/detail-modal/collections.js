/**
 * The collections the cards and the modal draw on, in one place so a grid and
 * the detail panel can never disagree about a label.
 *
 * Kept as a lookup rather than as entity state: entities hold values only, and
 * the card grid and the modal read the same module. The entries themselves are
 * bilingual, so this only decides how each one is addressed and captioned.
 */

import { ORGS } from "../../data/orgs.js"
import { SELECTIONS } from "../../data/programs.js"
import { TEACHING } from "../../data/teaching.js"
import { WORK } from "../../data/work.js"

/**
 * @typedef {object} Collection
 * @property {any[]} items The data, one entry per language block.
 * @property {(copy: any) => string} cta What the card's own line says.
 * @property {(copy: any) => string} cardLead The card's small top line.
 * @property {(copy: any) => string} cardTitle The card's heading.
 * @property {(copy: any) => string} cardNote The card's first paragraph.
 * @property {(copy: any) => [string, string][]} [cardFacts] Term/value rows.
 * @property {(copy: any) => string[]} [cardTags] Topic tags.
 * @property {(copy: any) => string} modalTitle The modal's heading.
 * @property {(copy: any) => string} modalLead The modal's small top line.
 * @property {(copy: any, entry: any) => Section[]} modalSections The body.
 * @property {(entry: any) => string | undefined} [link] External link.
 */

/**
 * @typedef {object} Section
 * @property {string} h Heading, already localised.
 * @property {string} [body] A paragraph.
 * @property {string[]} [list] A bulleted list.
 */

/** @type {Record<string, Collection>} */
export const COLLECTIONS = {
  org: {
    items: ORGS,
    cta: (c) => c.modal.ctaOrg,
    cardLead: (c, o) => o.when,
    cardTitle: (c, o) => o.n,
    cardNote: (c, o) => o.how,
    modalTitle: (c, o) => o.n,
    modalLead: (c, o) => `${o.when} · ${o.how}`,
    modalSections: (c, o) => [{ h: c.modal.sections.what, body: o.what }],
    link: (o) => o.link,
  },

  teaching: {
    items: TEACHING,
    cta: (c) => c.modal.ctaTeaching,
    cardLead: (c, t) => t.when,
    cardTitle: (c, t) => t.org,
    cardNote: (c, t) => t.title,
    cardTags: (c, t) => t.tags,
    cardFacts: (c, t) => [
      [c.capability.terms.people, t.people],
      [c.capability.terms.audience, t.target],
      [c.capability.terms.hours, t.hours],
    ],
    modalTitle: (c, t) => `${t.org}: ${t.title}`,
    modalLead: (c, t) => t.when,
    modalSections: (c, t) => [
      {
        h: c.modal.sections.who,
        body: `${t.people} · ${t.target} · ${t.hours}`,
      },
      { h: c.modal.sections.doing, body: t.body },
    ],
    link: (t) => t.link,
  },

  work: {
    items: WORK,
    cta: (c) => c.modal.ctaWork,
    cardLead: (c, w) => w.when,
    cardTitle: (c, w) => w.org,
    cardNote: (c, w) => w.title,
    cardTags: (c, w) => w.tags,
    modalTitle: (c, w) => `${w.org}: ${w.title}`,
    modalLead: (c, w) => w.when,
    modalSections: (c, w) => [
      { h: c.modal.sections.hard, body: w.hard },
      { h: c.modal.sections.done, list: w.done },
    ],
    link: (w) => w.link,
  },

  selection: {
    items: SELECTIONS,
    cta: (c) => c.modal.ctaSelection,
    cardLead: (c, p) => `${p.when} · ${p.status}`,
    cardTitle: (c, p) => p.org,
    cardNote: (c, p) => p.title,
    cardTags: (c, p) => p.tags,
    cardFacts: (c, p) => [
      [c.modal.terms.selection, p.sel],
      [c.modal.terms.language, c.modal.english],
    ],
    modalTitle: (c, p) => `${p.org}: ${p.title}`,
    modalLead: (c, p) => `${p.when} · ${p.status} · ${p.sel}`,
    modalSections: (c, p) => [{ h: c.modal.sections.doing, body: p.body }],
    link: (p) => p.link,
  },
}

/**
 * The localised entry at a position, or `null` when the reference is stale.
 *
 * @param {string | null} collection
 * @param {number} index
 * @param {string} [locale]
 * @returns {any}
 */
export function resolve(collection, index, locale = "en") {
  if (!collection) return null
  const entry = COLLECTIONS[collection]?.items[index]
  if (!entry) return null
  return entry[locale] ?? entry.en
}

/**
 * The facts about an entry that do not change with the language.
 *
 * @param {string | null} collection
 * @param {number} index
 * @returns {any}
 */
export function resolveEntry(collection, index) {
  if (!collection) return null
  return COLLECTIONS[collection]?.items[index] ?? null
}

/**
 * Strips a URL down to something readable in a link label.
 *
 * @param {string} url
 * @returns {string}
 */
export function linkLabel(url) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "")
}
