/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 *
 * @typedef {object} HeroEntity
 * @property {string | number} id
 * @property {string} [locale]
 * @property {import("../../locales").en} [copy]
 */

import { html } from "@inglorious/web"

import { nextTalk } from "../../data/stats.js"
import { daysRunning } from "../../data/timeline.js"
import { localePath } from "../../locales/index.js"
import { renderFrame } from "../parts/index.js"

/** @this {HeroEntity} @returns {TemplateResult} */
export function render(entity) {
  const c = entity.copy

  // Both figures are a function of the date and of the language, so they are
  // derived here rather than stored: an entity would go stale between the
  // static build and the browser.
  const meta = c.hero.meta
    .map((line) => line.replace("{days}", String(daysRunning())))
    .map((line) =>
      line.replace("{next}", c.hero.nextTalk(nextTalk(entity.locale))),
    )

  return html`
    <header class="site-hero">
      <div class="site-wrap site-hero-grid">
        <div>
          <div class="site-rule" aria-hidden="true"></div>
          <p class="site-eyebrow">${c.hero.eyebrow}</p>
          <h1 class="site-h1 site-hero-title">
            ${c.hero.titleLead}
            <span class="site-accent">${c.hero.titleAccent}</span>
          </h1>
          <p class="site-lead site-hero-lead">${c.hero.lead}</p>

          <div class="site-hero-cta">
            <a
              class="site-btn site-btn-primary"
              href=${localePath("/programs", entity.locale)}
            >
              <i class="site-pulse" aria-hidden="true"></i>
              ${c.hero.ctaPrimary}
              <span class="site-btn-arr" aria-hidden="true">-&gt;</span>
            </a>
            <a class="site-btn" href=${localePath("/research", entity.locale)}
              >${c.hero.ctaSecondary}</a
            >
          </div>

          <div class="site-hero-meta">
            ${meta.map((line) => html`<span>${line}</span>`)}
          </div>
        </div>

        <div class="site-hero-stack">
          ${renderFrame({
            src: "/img/apart-paper.webp",
            alt: c.hero.alt,
            origin: "apartresearch.com",
            date: c.hero.frameCaptionDate,
            caption: c.hero.frameCaption,
            captionLink: {
              label: c.hero.frameLink,
              href: localePath("/research", entity.locale),
            },
          })}
        </div>
      </div>
    </header>
  `
}
