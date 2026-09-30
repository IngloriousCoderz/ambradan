/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 *
 * @typedef {object} CapabilityCardEntity
 * @property {string | number} id
 * @property {number} index Position in the capability list.
 * @property {boolean} isExpanded Whether the extra rows are showing.
 * @property {2 | 3} [headingLevel] 3 by default, 2 when the card is a
 *   top-level section of the page and no `h2` precedes it.
 * @property {string} [locale]
 * @property {import("../../locales").en} [copy]
 */

import { html } from "@inglorious/web"
import { classMap } from "@inglorious/web/directives/class-map"
import { unsafeHTML } from "@inglorious/web/directives/unsafe-html"

import { localise } from "../../data/localised.js"
import { CAPABILITIES } from "../../data/programs.js"

/** How many rows stay visible before the toggle. */
const VISIBLE_ROWS = 2

/**
 * The card's title, at the heading level the surrounding page outline needs.
 *
 * @param {unknown} title
 * @param {2 | 3} level
 * @returns {TemplateResult}
 */
function capabilityTitle(title, level) {
  return level === 2
    ? html`<h2 class="site-card-title">${title}</h2>`
    : html`<h3 class="site-card-title">${title}</h3>`
}

/**
 * The four program-lead capabilities, one card each, with the evidence behind
 * them. The first two rows are shown; the rest are behind a toggle.
 *
 * @this {CapabilityCardEntity}
 * @param {import("@inglorious/web").Api} api
 * @returns {TemplateResult}
 */
export function render(entity, api) {
  const c = entity.copy
  const card = localise(CAPABILITIES[entity.index], entity.locale)

  if (!card) return html``

  const items = card.items
  const hidden = items.length - VISIBLE_ROWS

  return html`<article
    class=${classMap({
      "site-capability": true,
      "is-expanded": Boolean(entity.isExpanded),
    })}
  >
    <div class="site-card-date">${card.n}</div>
    ${capabilityTitle(card.q, entity.headingLevel ?? 3)}
    <p class="site-card-note">${card.a}</p>

    <ul class="site-capability-rows">
      ${items.map(
        ([when, text], rowIndex) =>
          html`<li
            class=${classMap({
              "site-capability-row": true,
              "is-collapsed": rowIndex >= VISIBLE_ROWS && !entity.isExpanded,
            })}
          >
            <span class="site-capability-when">${when}</span>
            <span>${unsafeHTML(text)}</span>
          </li>`,
      )}
    </ul>

    ${
      hidden > 0
        ? html`<button
            class="site-capability-toggle"
            type="button"
            aria-expanded=${entity.isExpanded ? "true" : "false"}
            @click=${() => api.notify(`#${entity.id}:toggle`)}
          >
            ${
              entity.isExpanded
                ? c.capability.showLess
                : c.capability.showMore(hidden)
            }
          </button>`
        : null
    }
  </article>`
}
