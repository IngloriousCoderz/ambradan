/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 *
 * @typedef {object} EventListEntity
 * @property {string | number} id
 * @property {"upcoming" | "past"} collection Which list to show.
 * @property {string} [locale]
 * @property {import("../../locales").en} [copy]
 */

import { html } from "@inglorious/web"

import { EVENTS, PAST_TALKS } from "../../data/events.js"
import { localiseAll } from "../../data/localised.js"
import { renderEventRow } from "./rows.js"

/**
 * A dated list of engagements.
 *
 * The entries are resolved at render rather than copied onto the entity: a
 * bilingual entry would otherwise be stored twice, once per language, and the
 * two copies would drift.
 *
 * @this {EventListEntity}
 * @returns {TemplateResult}
 */
export function render(entity) {
  const list = entity.collection === "past" ? PAST_TALKS : EVENTS

  return html`<div class="site-events">
    ${localiseAll(list, entity.locale).map((event) =>
      renderEventRow(event, entity.copy),
    )}
  </div>`
}
