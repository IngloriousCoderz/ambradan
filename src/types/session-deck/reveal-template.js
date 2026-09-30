/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 * @typedef {import("../../data/session").Block} Block
 *
 * @typedef {object} DeckRevealEntity
 * @property {string | number} id
 * @property {boolean} isOpen
 */

import { html } from "@inglorious/web"
import { classMap } from "@inglorious/web/directives/class-map"

import { renderBlock } from "./blocks.js"

/**
 * A worked example, hidden until the room asks for it.
 *
 * The block list is a prop rather than entity state, so the entity stays pure
 * data: it only knows whether it is open.
 *
 * @param {DeckRevealEntity & {label: string, blocks: Block[]}} props
 * @returns {TemplateResult}
 */
export function renderReveal(props, api) {
  return html`<div
    class=${classMap({ "site-deck-reveal": true, "is-open": props.isOpen })}
  >
    ${
      props.isOpen
        ? null
        : html`<button
            class="site-btn site-btn-sm"
            type="button"
            aria-expanded="false"
            @click=${() => api.notify(`#${props.id}:toggle`)}
          >
            ${props.label}
          </button>`
    }
    ${
      props.isOpen
        ? html`<div>${props.blocks.map((block) => renderBlock(block))}</div>`
        : null
    }
  </div>`
}
