import "../styles/index.js"

import { html } from "@inglorious/web"
import { classMap } from "@inglorious/web/directives/class-map"

import { localiseAll } from "../data/localised.js"
import { DELIVERY, DELIVERY_NOTES } from "../data/programs.js"
import { CONTACT } from "../data/site.js"
import { copy } from "../locales/index.js"
import { CapabilityCard } from "../types/capability-card/index.js"
import { renderNoteBox, renderSectionHead } from "../types/parts/index.js"
import { reveal } from "../types/reveal/index.js"
import { shell } from "../types/shell/index.js"

const CAPABILITY_IDS = [
  "capability1",
  "capability2",
  "capability3",
  "capability4",
]

export const Programs = {
  render(entity, api) {
    const locale = entity.locale
    const c = copy(locale)
    const p = c.programs
    const session = p.delivery.sessionCard

    // The deck and its guide are English documents, so the buttons point at the
    // English routes from either language rather than duplicating them per
    // locale.

    return shell(
      html`
        <div class="site-head site-center">
          <div class="site-wrap">
            <p class="site-eyebrow">${p.eyebrow}</p>
            <h1 class="site-h1">${p.title}</h1>
            <p class="site-lead">${p.lead}</p>
          </div>
        </div>

        <section style="padding-bottom: 10px">
          <div class="site-wrap">
            <div class="site-grid site-grid-two">
              ${CAPABILITY_IDS.map(
                (id) =>
                  html`<div class="site-grid-cell">
                    ${CapabilityCard.render(
                      {
                        ...api.getEntity(id),
                        headingLevel: 2,
                        locale,
                        copy: c,
                      },
                      api,
                    )}
                  </div>`,
              )}
            </div>

            ${renderNoteBox({
              label: p.insideLabel,
              avatar: { src: CONTACT.avatarRound, alt: "" },
              body: html`<b>${p.insideLead}</b> ${p.insideBody}`,
            })}
          </div>
        </section>

        <section class="site-section">
          <div class="site-wrap">
            ${renderSectionHead({
              eyebrow: p.delivery.eyebrow,
              title: p.delivery.title,
              isSizeSm: true,
            })}

            <div class="site-grid" style="margin-top: 26px">
              ${localiseAll(DELIVERY, locale).map(
                (item, index) =>
                  html`<div
                    class=${classMap({
                      "site-card": true,
                      "site-reveal": true,
                      [`site-reveal-${(index % 3) + 1}`]: true,
                    })}
                    ${reveal()}
                  >
                    <div class="site-card-date">${item.d}</div>
                    <h3 class="site-card-title">${item.h}</h3>
                    <p class="site-card-note">${item.a}</p>
                  </div>`,
              )}

              <div class="site-card site-card-featured">
                <div class="site-card-date">${session.d}</div>
                <h3 class="site-card-title">${session.h}</h3>
                <p class="site-card-note">${session.a}</p>
                <p class="site-card-actions">
                  <a
                    class="site-btn site-btn-primary site-btn-sm"
                    href="/programs/session"
                  >
                    ${session.open}
                    <span class="site-btn-arr" aria-hidden="true">-&gt;</span>
                  </a>
                  <a class="site-btn site-btn-sm" href="/programs/guide">
                    ${session.guide}
                  </a>
                </p>
              </div>
            </div>

            ${localiseAll(DELIVERY_NOTES, locale).map((note) =>
              renderNoteBox({
                label: note.k,
                body: html`<b>${note.b}</b>${note.rest}`,
              }),
            )}

            <div style="height: 80px"></div>
          </div>
        </section>
      `,
      api,
      "/programs",
      locale,
    )
  },
}

export const metadata = (entity) => {
  const page = copy(entity.locale).meta["/programs"]

  return {
    lang: page.lang,
    title: page.title,
    meta: {
      description: page.description,
      "og:title": page.title,
      "og:description": page.description,
    },
  }
}
