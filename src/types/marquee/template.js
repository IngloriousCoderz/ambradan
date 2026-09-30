/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 *
 * @typedef {object} MarqueeEntity
 * @property {string | number} id
 * @property {string} [locale]
 * @property {import("../../locales").en} [copy]
 */

import { html } from "@inglorious/web"

import { localiseAll } from "../../data/localised.js"
import { LOGO_SIZES, LOGOS } from "../../data/logos.js"
import { ORGS } from "../../data/orgs.js"

/**
 * The logo lane.
 *
 * The track is emitted twice because it scrolls by exactly half its width. The
 * duplicate is hidden from assistive technology and taken out of the tab order;
 * the lane pauses on hover.
 *
 * @this {MarqueeEntity}
 * @param {import("@inglorious/web").Api} api
 * @returns {TemplateResult}
 */
export function render(entity, api) {
  const c = entity.copy
  const orgs = localiseAll(ORGS, entity.locale)

  return html`
    <div class="site-marq">
      <div class="site-wrap">
        <p class="site-marq-label">${c.marquee.label}</p>
        <div class="site-marq-lane">
          <div class="site-marq-track">
            ${orgs.map((org, index) => renderChip(org, index, api, entity, c))}
            ${orgs.map((org, index) =>
              renderChip(org, index, api, entity, c, true),
            )}
          </div>
        </div>
        <p class="site-hint">${c.marquee.hint}</p>
      </div>
    </div>
  `
}

/**
 * @param {any} org A localised entry.
 * @param {number} index
 * @param {import("@inglorious/web").Api} api
 * @param {MarqueeEntity} entity
 * @param {any} c
 * @param {boolean} [isDuplicate]
 * @returns {TemplateResult}
 */
function renderChip(org, index, api, entity, c, isDuplicate = false) {
  const src = org.logo ? LOGOS[org.logo] : null
  const size = org.logo ? LOGO_SIZES[org.logo] : null

  const classes = [
    "site-marq-chip",
    org.dark ? "is-dark" : "",
    org.icon ? "is-icon" : "",
    src ? "has-logo" : "is-plain",
  ]
    .filter(Boolean)
    .join(" ")

  return html`<button
    class=${classes}
    type="button"
    title=${org.n}
    aria-label=${c.marquee.chipLabel(org.n)}
    aria-hidden=${isDuplicate ? "true" : "false"}
    tabindex=${isDuplicate ? "-1" : "0"}
    @click=${() =>
      isDuplicate
        ? undefined
        : api.notify("#detailModal:open", { collection: "org", index })}
  >
    ${
      src
        ? html`<img
              src=${src}
              alt=""
              width=${size.width}
              height=${size.height}
              loading="lazy"
              decoding="async"
            />
            <span class="site-marq-name">${org.n}</span>`
        : org.n
    }
  </button>`
}
