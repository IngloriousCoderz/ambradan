import "../../styles/index.js"

import { html } from "@inglorious/web"
import { unsafeHTML } from "@inglorious/web/directives/unsafe-html"
import MarkdownIt from "markdown-it"

import source from "../../content/guide.md?raw"
import { CONTACT } from "../../data/site.js"
import { copy } from "../../locales/index.js"
import { shell } from "../../types/shell/index.js"

/*
 * The guide is authored as markdown but rendered from a JavaScript page rather
 * than dropped into `src/pages/` as a `.md` file. A markdown page in SSX
 * renders on its own, with no way to wrap it in the site's navigation and
 * footer; going through a renderer here keeps the source format and the page
 * chrome at the same time.
 *
 * markdown-it is used directly rather than through `@inglorious/ssx/markdown`,
 * which also configures KaTeX, highlight.js and Mermaid. The guide has no
 * maths, no code blocks and no diagrams, and those three account for most of
 * its weight.
 */

const md = new MarkdownIt({ html: true, linkify: true, typographer: true })

export const Guide = {
  render(entity, api) {
    const locale = entity.locale
    const c = copy(locale)

    return shell(
      html`
        <div class="site-head">
          <div class="site-wrap">
            <p class="site-eyebrow">${c.guide.eyebrow}</p>
            <h1 class="site-h1">${c.guide.title}</h1>
            <p class="site-lead">${c.guide.lead}</p>
          </div>
        </div>

        <article class="site-doc site-wrap">
          ${unsafeHTML(md.render(source))}
        </article>

        <div style="height: 60px"></div>
      `,
      api,
      "/programs/guide",
      locale,
    )
  },
}

// The run sheet is English prose with translated page chrome, so it is marked
// as English; the Italian link points here too.
export const metadata = (entity) => {
  const c = copy(entity.locale)

  return {
    lang: "en",
    title: `${c.guide.title} · ${CONTACT.name}`,
    meta: {
      description: `${c.guide.lead} ${c.meta["/programs"].description}`,
    },
  }
}
