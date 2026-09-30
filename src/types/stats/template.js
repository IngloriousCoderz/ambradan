/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 *
 * @typedef {object} StatsEntity
 * @property {string | number} id
 * @property {string} [locale]
 * @property {import("../../locales").en} [copy]
 */

import { html } from "@inglorious/web"
import { classMap } from "@inglorious/web/directives/class-map"

import { talksToCome } from "../../data/stats.js"
import { reveal } from "../reveal/reveal.js"

/**
 * The band of four numbers.
 *
 * Two of the figures move with the calendar, so their labels arrive as
 * functions of the count and are resolved here. Neither the figures nor the
 * labels are stored: an entity would hold a value that was already out of date
 * by the time a reader saw it.
 *
 * @this {StatsEntity}
 * @returns {TemplateResult}
 */
export function render(entity) {
  const rows = entity.copy.stats.map((stat) => ({
    value: typeof stat.value === "function" ? stat.value() : stat.value,
    label:
      typeof stat.label === "function"
        ? stat.label(talksToCome().length)
        : stat.label,
  }))

  return html`<section class="site-stats">
    <div class="site-wrap site-stats-grid">
      ${rows.map(
        (row, index) =>
          html`<div
            class=${classMap({
              "site-reveal": true,
              [`site-reveal-${(index % 3) + 1}`]: true,
            })}
            ${reveal()}
          >
            <b>${row.value}</b>
            <span>${row.label}</span>
          </div>`,
      )}
    </div>
  </section>`
}
