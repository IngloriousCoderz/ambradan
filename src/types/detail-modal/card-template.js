/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 * @typedef {import("@inglorious/ui/card").CardProps} CardProps
 *
 * @typedef {object} EntryCardEntity
 * @property {string | number} id
 * @property {string} collection Collection name in `collections.js`.
 * @property {number} index Position within that collection.
 * @property {2 | 3} [headingLevel] 3 by default, 2 when the grid is a
 *   top-level section of the page and no `h2` precedes it.
 * @property {string} [locale]
 * @property {import("../../locales").en} [copy]
 */

import { Card } from "@inglorious/ui/card"
import { html } from "@inglorious/web"

import { renderTagList, renderTermList } from "../parts/index.js"
import { COLLECTIONS, resolve } from "./collections.js"

/**
 * The card's title, at the heading level the surrounding page outline needs.
 *
 * @param {unknown} title
 * @param {2 | 3} level
 * @returns {TemplateResult}
 */
function cardTitle(title, level) {
  return level === 2
    ? html`<h2 class="site-card-title">${title}</h2>`
    : html`<h3 class="site-card-title">${title}</h3>`
}

/**
 * One card in a `CardGrid`: a summary that opens the collection's detail panel.
 *
 * @this {EntryCardEntity}
 * @param {import("@inglorious/web").Api} api
 * @returns {TemplateResult}
 */
export function render(entity, api) {
  const { collection, index, copy: c } = entity
  const headingLevel = entity.headingLevel ?? 3
  const item = resolve(collection, index, entity.locale)
  const shape = COLLECTIONS[collection]

  if (!item || !shape) return html``

  const tags = shape.cardTags?.(c, item)
  const facts = shape.cardFacts?.(c, item)

  const props = {
    isClickable: true,
    isHoverable: true,
    className: "site-entry-card",
    onClick: () =>
      api.notify("#detailModal:open", {
        collection,
        index,
        locale: entity.locale,
      }),
    body: html`
      <div class="site-card-date">${shape.cardLead(c, item)}</div>
      ${cardTitle(shape.cardTitle(c, item), headingLevel)}
      <p class="site-card-note">${shape.cardNote(c, item)}</p>
      ${tags?.length ? renderTagList({ tags }) : null}
      ${facts ? renderTermList({ rows: facts }) : null}
    `,
    footer: html`<span class="site-card-open"
      >${shape.cta(c)}
      <span class="site-btn-arr" aria-hidden="true">-&gt;</span></span
    >`,
  }

  return Card.render(/** @type {CardProps} */ (props))
}
