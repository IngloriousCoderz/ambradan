/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 *
 * @typedef {object} TalkMapEntity
 * @property {string | number} id
 * @property {"idle" | "loading" | "ready" | "no-tiles"} status
 * @property {1} [isCopied] Whether the copy-address button has just fired.
 * @property {string} [locale]
 * @property {import("../../locales").en} [copy]
 */

import { html } from "@inglorious/web"
import { classMap } from "@inglorious/web/directives/class-map"

import { DELIVERED, UPCOMING } from "./constants.js"

/**
 * The venue map, behind a deliberate click.
 *
 * Nothing is requested from OpenStreetMap until `open` runs, which is the
 * point: the site makes no third-party request a reader did not ask for.
 *
 * The gate is a sibling of the map rather than a child, because once Leaflet
 * takes over `#map` it owns everything inside it and lit must not manage that
 * subtree.
 *
 * @this {TalkMapEntity}
 * @param {import("@inglorious/web").Api} api
 * @returns {TemplateResult}
 */
export function render(entity, api) {
  const c = entity.copy
  const isIdle = entity.status === "idle"

  return html`
    <div class="site-map-wrap">
      <div
        id="map"
        class=${classMap({ "site-map": true, "is-loaded": !isIdle })}
        role="region"
        aria-label=${c.contact.mapAria}
      ></div>

      ${
        isIdle
          ? html`<div class="site-map-gate">
              <button
                class="site-btn site-btn-sm"
                type="button"
                @click=${() => api.notify(`#${entity.id}:open`)}
              >
                ${c.contact.mapShow}
              </button>
              <span>${c.contact.mapNote}</span>
            </div>`
          : null
      }
      ${
        entity.status === "no-tiles"
          ? html`<p class="site-map-note">${c.contact.mapMissing}</p>`
          : null
      }
    </div>

    <div class="site-map-legend">
      <span
        ><i style="background: ${UPCOMING}"></i> ${c.contact.legend[0]}</span
      >
      <span
        ><i style="background: ${DELIVERED}"></i> ${c.contact.legend[1]}</span
      >
    </div>
  `
}

/**
 * A copy-to-clipboard button for the email address, driven by the same entity.
 *
 * @param {TalkMapEntity} entity
 * @param {import("@inglorious/web").Api} api
 * @returns {TemplateResult}
 */
export function renderCopyButton(entity, api) {
  const c = entity.copy

  return html`<button
    class="site-btn"
    type="button"
    @click=${() => api.notify(`#${entity.id}:copyEmail`)}
  >
    ${entity.isCopied ? c.contact.copied : c.contact.copy}
  </button>`
}
