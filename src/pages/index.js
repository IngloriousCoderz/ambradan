import "../styles/index.js"

import { html } from "@inglorious/web"

import { copy } from "../locales/index.js"
import { localised, shell } from "../types/shell/index.js"

export const Index = {
  render(entity, api) {
    const locale = entity.locale
    const c = copy(locale)

    return shell(
      html`
        ${localised(api, "hero", locale, { copy: c })}
        ${localised(api, "marquee", locale, { copy: c })}
        ${localised(api, "entryPoints", locale, { copy: c })}
        ${localised(api, "stats", locale, { copy: c })}
        ${localised(api, "stageStrip", locale, { copy: c })}
        ${localised(api, "timeline", locale, { copy: c })}
      `,
      api,
      "/",
      locale,
    )
  },
}

export const metadata = (entity) => {
  const page = copy(entity.locale).meta["/"]

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
