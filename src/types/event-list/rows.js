/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 *
 * @typedef {object} EventRowEntity
 * @property {boolean} [talk] Counts as a talk, which the accent marks.
 * @property {1} [tbc] Date being confirmed.
 * @property {import("../../locales").en} [copy]
 */

import { html } from "@inglorious/web"

/**
 * One dated entry. A date still being confirmed carries a small label rather
 * than a definite date.
 *
 * @param {import("../../data/events").EventText & EventRowEntity} event
 * @param {import("../../locales").en} c
 * @returns {TemplateResult}
 */
export function renderEventRow({ d, t, s, talk, tbc }, c) {
  return html`<div class=${talk ? "site-event is-talk" : "site-event"}>
    <div class="site-event-date">${d}</div>
    <div>
      <b
        >${t}${
          tbc
            ? html`<i class="site-tag site-tag-mono">${c.deck.inProgress}</i>`
            : null
        }</b
      >
      <span>${s}</span>
    </div>
  </div>`
}
