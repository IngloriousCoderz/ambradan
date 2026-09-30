/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 *
 * @typedef {object} CardGridEntity
 * @property {string | number} id
 * @property {string} collection Collection name in `detail-modal/collections.js`.
 * @property {number} [columns] 3 by default, 2 for the two-up variant.
 * @property {1} [isReveal] Fade the cards up as they scroll into view.
 * @property {2 | 3} [headingLevel] Passed to each card's title. 3 unless the
 *   grid is a top-level section with no `h2` above it, in which case 2.
 * @property {string} [locale]
 * @property {import("../../locales").en} [copy]
 */

import { html } from "@inglorious/web"
import { classMap } from "@inglorious/web/directives/class-map"

import { COLLECTIONS } from "../detail-modal/collections.js"
import { EntryCard } from "../detail-modal/index.js"
import { reveal } from "../reveal/reveal.js"

/**
 * A grid of `EntryCard`s for one collection. One entity drives the whole grid
 * rather than one entity per card, so adding a card is a data change.
 *
 * @this {CardGridEntity}
 * @param {import("@inglorious/web").Api} api
 * @returns {TemplateResult}
 */
export function render(entity, api) {
  const items = COLLECTIONS[entity.collection]?.items ?? []
  const columns = entity.columns ?? 3

  return html`<div
    class=${classMap({
      "site-grid": true,
      "site-grid-two": columns === 2,
    })}
  >
    ${items.map((_item, index) => renderCard(entity, index, api))}
  </div>`
}

/**
 * @param {CardGridEntity} entity
 * @param {number} index
 * @param {import("@inglorious/web").Api} api
 * @returns {TemplateResult}
 */
function renderCard(entity, index, api) {
  return html`<div
    class=${classMap({
      "site-grid-cell": true,
      "site-reveal": Boolean(entity.isReveal),
      [`site-reveal-${(index % 3) + 1}`]: Boolean(entity.isReveal),
    })}
    ${entity.isReveal ? reveal() : ""}
  >
    ${EntryCard.render(
      {
        id: `${entity.id}-${index}`,
        collection: entity.collection,
        index,
        headingLevel: entity.headingLevel,
        locale: entity.locale,
        copy: entity.copy,
      },
      api,
    )}
  </div>`
}
