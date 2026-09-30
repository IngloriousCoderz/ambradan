import "../styles/index.js"

import { html } from "@inglorious/web"

import { daysRunning } from "../data/timeline.js"
import { copy } from "../locales/index.js"
import { renderFeature } from "../types/feature/index.js"
import { renderSectionHead, renderTestGrid } from "../types/parts/index.js"
import { localised, shell } from "../types/shell/index.js"

export const Research = {
  render(entity, api) {
    const locale = entity.locale
    const c = copy(locale)
    const r = c.research

    /** The Freedom v2 figures: one is a function of the date. */
    const facts = r.freedom.facts.map((fact) =>
      fact.value === "{days}"
        ? { ...fact, value: String(daysRunning()) }
        : fact,
    )

    return shell(
      html`
        <div class="site-head site-center">
          <div class="site-wrap">
            <p class="site-eyebrow">${r.eyebrow}</p>
            <h1 class="site-h1">${r.title}</h1>
            <p class="site-lead">${r.lead}</p>
          </div>
        </div>

        ${renderFeature({
          eyebrow: r.freedom.eyebrow,
          title: r.freedom.title,
          lead: r.freedom.lead,
          facts,
          links: r.freedom.links,
          frame: {
            src: "/img/freedom-v2.webp",
            alt: r.freedom.alt,
            origin: "freedom-interface.vercel.app",
          },
        })}

        <section
          class="site-section site-section-tight"
          style="padding-bottom: 60px"
        >
          <div class="site-wrap">
            ${renderSectionHead({
              eyebrow: r.testing.eyebrow,
              title: r.testing.title,
              lead: r.testing.lead,
            })}
            ${renderTestGrid({ items: r.testing.items })}
          </div>
        </section>

        ${renderFeature({
          isFlip: true,
          isAlt: true,
          eyebrow: r.logger.eyebrow,
          title: r.logger.title,
          lead: r.logger.lead,
          facts: r.logger.facts,
          links: r.logger.links,
          frame: {
            src: "/img/apart-paper.webp",
            alt: r.logger.alt ?? c.hero.alt,
            origin: "apartresearch.com",
          },
        })}
        ${renderFeature({
          eyebrow: r.cfDebate.eyebrow,
          title: r.cfDebate.title,
          lead: r.cfDebate.lead,
          links: r.cfDebate.links,
          frame: {
            src: "/img/cf-debate.webp",
            alt: r.cfDebate.alt,
            origin: "cf-debate.com",
          },
        })}

        <section class="site-section site-section-alt">
          <div class="site-wrap">
            ${renderSectionHead({
              eyebrow: r.selections.eyebrow,
              title: r.selections.title,
              isSizeSm: true,
            })}
            <p class="site-hint site-center">${r.selections.hint}</p>
            ${localised(api, "programsGrid", locale, { copy: c })}
          </div>
        </section>
      `,
      api,
      "/research",
      locale,
    )
  },
}

export const metadata = (entity) => {
  const page = copy(entity.locale).meta["/research"]

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
