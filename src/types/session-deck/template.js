/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 * @typedef {import("./timer-template").DeckTimerEntity} DeckTimerEntity
 * @typedef {import("./reveal-template").DeckRevealEntity} DeckRevealEntity
 */

import { html } from "@inglorious/web"
import { classMap } from "@inglorious/web/directives/class-map"

import {
  revealId,
  SESSION,
  SESSION_FOOTER,
  SESSION_TITLE,
  timerId,
} from "../../data/session.js"
import { copy, localePath } from "../../locales/index.js"
import { Theme } from "../theme/index.js"
import { renderBlock } from "./blocks.js"
import { renderReveal } from "./reveal-template.js"
import { renderTimer } from "./timer-template.js"

/**
 * The sample session, as a real route rather than a string loaded into an
 * iframe: it is then crawlable, linkable, and readable without JavaScript.
 *
 * @this {{id: string | number, activeIndex: number, locale?: string}}
 * @param {import("@inglorious/web").Api} api
 * @returns {TemplateResult}
 */
export function render(entity, api) {
  const c = copy(entity.locale)

  return html`
    <div class="site-deck">
      <div class="site-deck-bar">
        <a
          class="site-btn site-btn-primary site-btn-sm"
          href=${localePath("/programs", entity.locale)}
        >
          <span aria-hidden="true">&larr;</span> ${c.deck.back}
        </a>
        <b>${SESSION_TITLE}</b>
        <span class="site-deck-bar-meta">${c.deck.meta}</span>
        ${Theme.render({ ...api.getEntity("theme"), copy: c }, api)}
      </div>

      <nav class="site-deck-dots" aria-label="Sections">
        ${SESSION.map(
          (section, index) =>
            html`<a
              href=${`#${section.id}`}
              class=${classMap({ "is-on": index === entity.activeIndex })}
              aria-label=${c.deck.sectionLabel(index + 1)}
              aria-current=${index === entity.activeIndex ? "true" : "false"}
              @click=${(event) => scrollToSection(event, section.id)}
            ></a>`,
        )}
      </nav>

      <p class="site-deck-foot">${SESSION_FOOTER}</p>

      <main class="site-deck-main" id="deck-main">
        ${SESSION.map((section) => renderSection(section, api, entity.locale))}
      </main>
    </div>
  `
}

/**
 * @param {import("../../data/session").SessionSection} section
 * @param {import("@inglorious/web").Api} api
 * @returns {TemplateResult}
 */
function renderSection({ id, alt, blocks }, api, locale) {
  let revealIndex = 0
  let timerIndex = 0

  return html`<section
    id=${id}
    class=${classMap({ "site-deck-section": true, "is-alt": Boolean(alt) })}
  >
    <div class="site-wrap">
      ${blocks.map((block) => {
        if (block.k === "timer") {
          const entity = api.getEntity(timerId(id, timerIndex))
          timerIndex += 1
          return renderTimer(
            { ...entity, locale: locale, copy: copy(locale) },
            api,
          )
        }

        if (block.k === "reveal") {
          const entity = api.getEntity(revealId(id, revealIndex))
          revealIndex += 1
          return renderReveal(
            { ...entity, label: block.label, blocks: block.blocks },
            api,
          )
        }

        return renderBlock(block)
      })}
    </div>
  </section>`
}

/**
 * Keeps the dots from jumping the page to an anchor and losing the smooth
 * scroll the deck is built around.
 *
 * @param {Event} event
 * @param {string} id
 */
function scrollToSection(event, id) {
  event.preventDefault()
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" })
}
