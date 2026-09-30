import "../styles/index.js"

import { html } from "@inglorious/web"

import { CONTACT } from "../data/site.js"
import { copy } from "../locales/index.js"
import { localised, shell } from "../types/shell/index.js"
import { renderCopyButton, renderTalkMap } from "../types/talk-map/index.js"

export const Contact = {
  render(entity, api) {
    const locale = entity.locale
    const c = copy(locale)
    const t = c.contact
    const map = { ...api.getEntity("talkMap"), locale, copy: c }

    return shell(
      html`
        <div class="site-head site-center">
          <div class="site-wrap">
            <p class="site-eyebrow">${t.eyebrow}</p>
            <h1 class="site-h1">${t.title}</h1>
            <p class="site-lead">${t.lead}</p>
          </div>
        </div>

        <section class="site-contact">
          <div class="site-wrap site-contact-grid">
            <div class="site-contact-card site-reveal site-reveal-1">
              <div class="site-contact-reach">
                <img
                  class="site-contact-photo"
                  src=${CONTACT.avatar}
                  alt=${CONTACT.name}
                  width="900"
                  height="1125"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h2 class="site-h3">${t.reachHeading}</h2>
                  <p class="site-contact-sub">
                    ${t.sub.replace("{name}", CONTACT.name)}
                  </p>
                </div>
              </div>

              ${t.rows.map((row, index) => {
                const href = CONTACT.hrefs[index]
                return html`<div class="site-contact-row">
                  <span>${row.label}</span>
                  ${
                    href
                      ? html`<a
                          href=${href}
                          target=${isExternal(href) ? "_blank" : undefined}
                          rel=${isExternal(href) ? "noopener" : undefined}
                          >${t.values[index]}</a
                        >`
                      : html`<div>${t.values[index]}</div>`
                  }
                </div>`
              })}

              <p class="site-contact-actions">
                <a
                  class="site-btn site-btn-primary"
                  href=${`mailto:${CONTACT.email}`}
                >
                  ${t.cta}
                  <span class="site-btn-arr" aria-hidden="true">-&gt;</span>
                </a>
                ${renderCopyButton(map, api)}
              </p>
            </div>

            <div class="site-contact-card site-reveal site-reveal-2">
              <h2 class="site-h3">${t.upcomingHeading}</h2>
              ${localised(api, "upcomingEvents", locale, { copy: c })}
              ${renderTalkMap(map, api)}

              <h2 class="site-h3 site-contact-subhead">${t.pastHeading}</h2>
              ${localised(api, "pastTalks", locale, { copy: c })}
            </div>
          </div>
        </section>
      `,
      api,
      "/contact",
      locale,
    )
  },
}

export const metadata = (entity) => {
  const page = copy(entity.locale).meta["/contact"]

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

/** @param {string} href */
const isExternal = (href) => /^https?:/i.test(href)
