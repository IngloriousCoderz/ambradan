/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 *
 * @typedef {object} EntryPointsEntity
 * @property {string | number} id
 * @property {string} [locale]
 * @property {import("../../locales").en} [copy]
 */

import { html } from "@inglorious/web"
import { classMap } from "@inglorious/web/directives/class-map"

import { localePath } from "../../locales/index.js"
import { reveal } from "../reveal/reveal.js"

/** The three route cards under the marquee. @this {EntryPointsEntity} */
export function render(entity) {
  const c = entity.copy

  return html`<section class="site-section site-tiles">
    <div class="site-wrap">
      ${c.entryPoints.map(
        (point, index) =>
          html`<a
            class=${classMap({
              "site-tile": true,
              "site-reveal": true,
              [`site-reveal-${index + 1}`]: true,
            })}
            href=${localePath(point.to, entity.locale)}
            ${reveal()}
          >
            <p class="site-eyebrow">${point.eyebrow}</p>
            <h2 class="site-h3">${point.h}</h2>
            <p class="site-tile-body">${point.p}</p>
            <span class="site-tile-cta"
              >${point.cta}
              <span class="site-btn-arr" aria-hidden="true">-&gt;</span></span
            >
          </a>`,
      )}
    </div>
  </section>`
}
