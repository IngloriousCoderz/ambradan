/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 *
 * @typedef {object} DeckTimerEntity
 * @property {string | number} id
 * @property {string} label Activity name.
 * @property {number} minutes Length in minutes.
 * @property {number} left Seconds remaining.
 * @property {boolean} isRunning
 * @property {boolean} isDone
 * @property {string} [locale]
 * @property {import("../../locales").en} [copy]
 */

import { html } from "@inglorious/web"
import { classMap } from "@inglorious/web/directives/class-map"

import { copy } from "../../locales/index.js"

/** Seconds, as `mm:ss`. @param {number} total */
export const format = (total) => {
  const s = Math.max(total, 0)
  const m = Math.floor(s / 60)
  const r = s % 60
  return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`
}

/**
 * The on-screen clock for one activity.
 *
 * The facilitator starts it in front of the room, so the group owns the clock
 * rather than the facilitator describing time.
 *
 * @this {DeckTimerEntity}
 * @param {import("@inglorious/web").Api} api
 * @returns {TemplateResult}
 */
export function renderTimer(entity, api) {
  const c = entity.copy?.deck ?? copy("en").deck

  return html`<div
    class=${classMap({
      "site-deck-timer": true,
      "is-done": entity.isDone,
    })}
  >
    <span>${entity.label}</span>
    <b>${format(entity.left)}</b>
    <button
      type="button"
      class=${entity.isRunning ? "is-paused" : ""}
      @click=${() => api.notify(`#${entity.id}:${entity.isRunning ? "pause" : "start"}`)}
    >
      ${entity.isDone ? c.time : entity.isRunning ? c.pause : c.start}
    </button>
  </div>`
}
