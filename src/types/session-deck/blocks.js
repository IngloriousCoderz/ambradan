/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 * @typedef {import("../../data/session").Block} Block
 */

import { html } from "@inglorious/web"
import { classMap } from "@inglorious/web/directives/class-map"

/**
 * Renders one block of the deck.
 *
 * Blocks are discriminated by `k`. Anything unrecognised renders nothing rather
 * than throwing, so a typo in the content leaves the rest of the deck readable.
 *
 * @param {Block} block
 * @returns {TemplateResult | null}
 */
export function renderBlock(block) {
  switch (block.k) {
    case "eyebrow":
      return html`<p class="site-deck-eyebrow">${block.text}</p>`

    case "title":
      return renderTitle(block)

    case "lead":
      return html`<p class="site-deck-lead">${block.text}</p>`

    case "note":
      return html`<p class="site-deck-note">${block.text}</p>`

    case "flagged":
      return html`<p class="site-deck-note">
        <span class="site-tag">${block.tag}</span> ${block.text}
      </p>`

    case "agenda":
      return html`<div class="site-deck-agenda">
        ${block.rows.map(
          ([at, what]) => html`<div><b>${at}</b><span>${what}</span></div>`,
        )}
      </div>`

    case "template":
      return html`<pre class="site-deck-pre">${block.text}</pre>`

    case "cards":
      return html`<div class="site-deck-cards">
        ${block.cols.map(
          (col) =>
            html`<div>
              ${col.map(
                (card) =>
                  html`<div
                    class=${classMap({
                      "site-deck-card": true,
                      [`is-${card.tone}`]: Boolean(card.tone),
                    })}
                  >
                    <h3>${card.h}</h3>
                    ${card.ps.map((line) => html`<p>${line}</p>`)}
                  </div>`,
              )}
            </div>`,
        )}
      </div>`

    case "steps":
      return html`<ol class="site-deck-steps">
        ${block.items.map(
          (step) =>
            html`<li>
              <b>${step.k}</b>
              <span><strong>${step.lead}</strong> ${step.text}</span>
            </li>`,
        )}
      </ol>`

    case "table":
      return html`<table class="site-deck-table">
        <thead>
          <tr>
            ${block.head.map((cell) => html`<th scope="col">${cell}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${block.rows.map(
            (row) =>
              html`<tr>
                <th scope="row">${row[0]}</th>
                ${row.slice(1).map((cell) => html`<td>${cell}</td>`)}
              </tr>`,
          )}
        </tbody>
      </table>`

    default:
      return null
  }
}

/**
 * A heading with an optional accented phrase spliced into the middle, so
 * "Framing before choosing." can put only "choosing." in the accent colour.
 *
 * @param {Block & {k: "title"}} block
 * @returns {TemplateResult}
 */
function renderTitle({ text, accent, accentThen, isStatement }) {
  return html`<h2 class=${isStatement ? "site-deck-statement" : "site-deck-h1"}>
    ${text}${
      accent
        ? html`<span class="site-accent">${accent}</span>${accentThen ?? ""}`
        : null
    }
  </h2>`
}
