import "../styles/index.js"

import { html } from "@inglorious/web"

import { localiseAll } from "../data/localised.js"
import { ALSO_TAUGHT } from "../data/teaching.js"
import { copy } from "../locales/index.js"
import { renderFeature } from "../types/feature/index.js"
import { renderSectionHead } from "../types/parts/index.js"
import { reveal } from "../types/reveal/index.js"
import { localised, shell } from "../types/shell/index.js"

export const Teaching = {
  render(entity, api) {
    const locale = entity.locale
    const c = copy(locale)
    const t = c.teaching

    return shell(
      html`
        <div class="site-head site-center">
          <div class="site-wrap">
            <p class="site-eyebrow">${t.eyebrow}</p>
            <h1 class="site-h1">${t.title}</h1>
            <p class="site-lead">${t.lead}</p>
          </div>
        </div>

        ${renderFeature({
          eyebrow: t.course.eyebrow,
          title: t.course.title,
          lead: t.course.lead,
          facts: t.course.facts,
          links: t.course.links,
          frame: {
            src: "/img/capir-ai.webp",
            alt: t.course.alt,
            origin: "capir-ai.com",
          },
        })}

        <section class="site-section site-section-alt">
          <div class="site-wrap">
            ${renderSectionHead({
              eyebrow: t.delivered.eyebrow,
              title: t.delivered.title,
              isSizeSm: true,
            })}
            <p class="site-hint site-center">${t.delivered.hint}</p>
            ${localised(api, "teachingGrid", locale, { copy: c })}

            <aside class="site-also site-reveal site-reveal-1" ${reveal()}>
              <p class="site-also-key">${t.alsoKey}</p>
              <div class="site-also-list">
                ${localiseAll(ALSO_TAUGHT, locale).map(
                  ([name, detail]) =>
                    html`<div>
                      <b>${name}</b>
                      <span>${detail}</span>
                    </div>`,
                )}
              </div>
            </aside>
          </div>
        </section>
      `,
      api,
      "/teaching",
      locale,
    )
  },
}

export const metadata = (entity) => {
  const page = copy(entity.locale).meta["/teaching"]

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
