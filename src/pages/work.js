import "../styles/index.js"

import { html } from "@inglorious/web"

import { copy } from "../locales/index.js"
import { localised, shell } from "../types/shell/index.js"

export const Work = {
  render(entity, api) {
    const locale = entity.locale
    const c = copy(locale)

    return shell(
      html`
        <div class="site-head site-center">
          <div class="site-wrap">
            <p class="site-eyebrow">${c.work.eyebrow}</p>
            <h1 class="site-h1">${c.work.title}</h1>
            <p class="site-lead">${c.work.lead}</p>
            <p class="site-hint">${c.work.hint}</p>
          </div>
        </div>

        <section style="padding: 10px 0 80px">
          <div class="site-wrap">
            ${localised(api, "workGrid", locale, { copy: c })}
          </div>
        </section>
      `,
      api,
      "/work",
      locale,
    )
  },
}

export const metadata = (entity) => {
  const page = copy(entity.locale).meta["/work"]

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
