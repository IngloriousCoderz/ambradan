/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 *
 * @typedef {object} TimelineEntity
 * @property {string | number} id
 * @property {import("../../locales").en} [copy]
 */

import { html } from "@inglorious/web"
import { classMap } from "@inglorious/web/directives/class-map"

import { reveal } from "../reveal/reveal.js"

/** The 2026 to 2027 sequence. @this {TimelineEntity} */
export function render(entity) {
  const c = entity.copy

  return html`<section class="site-section site-timeline-section">
    <div class="site-wrap site-center">
      <p class="site-eyebrow">${c.timeline.eyebrow}</p>
      <h2 class="site-h2 site-h2-sm">${c.timeline.title}</h2>
      <ol class="site-timeline">
        ${c.timeline.steps.map(
          (step, index) =>
            html`<li
              class=${classMap({
                "site-timeline-item": true,
                "is-open": Boolean(step.open),
                "site-reveal": true,
                [`site-reveal-${(index % 3) + 1}`]: true,
              })}
              ${reveal()}
            >
              <div class="site-timeline-date">${step.d}</div>
              <b>${step.b}</b>
              <span>${step.s}</span>
            </li>`,
        )}
      </ol>
    </div>
  </section>`
}
