/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 * @typedef {import("@inglorious/ui/dialog").DialogProps} DialogProps
 *
 * @typedef {object} DetailModalEntity
 * @property {string | number} id
 * @property {boolean} isOpen
 * @property {string | null} collection
 * @property {number} index
 * @property {string} [locale] Set when the panel is opened, so it keeps the
 *   language of the card that opened it.
 * @property {import("../../locales").en} [copy]
 */

import { Dialog } from "@inglorious/ui/dialog"
import { html } from "@inglorious/web"

import { COLLECTIONS, linkLabel, resolve, resolveEntry } from "./collections.js"

/**
 * The detail panel behind every card. Its content is a reference to a
 * collection and an index, not a copy of the text, so the panel and the grid
 * always show the same thing.
 *
 * The locale is stored when the panel opens rather than read from the router:
 * the panel outlives the page it was opened from, and a reader who navigates
 * with it open should still see the language they chose.
 *
 * @this {DetailModalEntity}
 * @param {import("@inglorious/web").Api} api
 * @returns {TemplateResult | null}
 */
export function render(entity, api) {
  const c = entity.copy
  const item = resolve(entity.collection, entity.index, entity.locale)
  const shape = COLLECTIONS[entity.collection]
  const entry = resolveEntry(entity.collection, entity.index)

  const close = () => api.notify(`#${entity.id}:close`)

  const props = {
    isOpen: entity.isOpen && Boolean(item && shape),
    className: "site-modal",
    onClose: close,
    onBackdropClick: close,
    children: item && shape ? renderBody(item, shape, entry, c) : null,
  }

  return Dialog.render(/** @type {DialogProps} */ (props))
}

/**
 * @param {any} item A localised entry.
 * @param {any} shape
 * @param {any} entry The entry before localisation, for the shared link.
 * @param {any} c
 * @returns {TemplateResult}
 */
function renderBody(item, shape, entry, c) {
  const url = shape.link?.(entry)

  return html`
    <div class="site-modal-date">${shape.modalLead(c, item)}</div>
    <h2 class="site-modal-title">${shape.modalTitle(c, item)}</h2>

    ${shape.modalSections(c, item).map(
      (section) => html`
        <h4 class="site-modal-heading">${section.h}</h4>
        ${
          section.body
            ? html`<p class="site-modal-body">${section.body}</p>`
            : null
        }
        ${
          section.list
            ? html`<ul class="site-modal-list">
                ${section.list.map((line) => html`<li>${line}</li>`)}
              </ul>`
            : null
        }
      `,
    )}
    ${
      url
        ? html`<a
            class="site-modal-link"
            href=${url}
            target="_blank"
            rel="noopener"
            >${linkLabel(url)}
            <span class="site-btn-arr" aria-hidden="true">-&gt;</span></a
          >`
        : null
    }
  `
}
