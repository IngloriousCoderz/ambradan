/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 *
 * @typedef {object} StageStripEntity
 * @property {string | number} id
 * @property {string} [locale]
 * @property {import("../../locales").en} [copy]
 */

import { html } from "@inglorious/web"
import { classMap } from "@inglorious/web/directives/class-map"

import { stageCities } from "../../data/stats.js"
import { localePath } from "../../locales/index.js"
import { reveal } from "../reveal/reveal.js"

/** The "on stage in 2026" city strip. @this {StageStripEntity} */
export function render(entity) {
  const c = entity.copy

  return html`<section class="site-stage">
    <div class="site-wrap site-center">
      <p class="site-eyebrow">${c.stage.eyebrow}</p>
      <div class="site-cities">
        ${stageCities(entity.locale, c.stage.tbcSuffix).map(
          (entry, index) =>
            html`<a
              class=${classMap({
                "site-city": true,
                "is-next": entry.isNext,
                "site-reveal": true,
                [`site-reveal-${(index % 3) + 1}`]: true,
              })}
              href=${localePath("/contact", entity.locale)}
              ${reveal()}
            >
              <b>${entry.city}</b>
              <span>${entry.org}</span>
            </a>`,
        )}
      </div>
    </div>
  </section>`
}
