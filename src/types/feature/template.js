/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 *
 * @typedef {object} FeatureProps
 * @property {string} eyebrow Small label above the heading.
 * @property {string} title Section heading.
 * @property {string} lead Opening paragraph.
 * @property {{value: string, isText?: 1, text: string}[]} [facts] Numbered facts.
 * @property {{label: string, href: string}[]} [links] Arrow links under the copy.
 * @property {{src: string, alt: string, origin: string, date?: string, caption?: string, captionLink?: {label: string, href: string}}} [frame] Screenshot.
 * @property {1} [isFlip] Put the copy on the right.
 * @property {1} [isAlt] Tinted background.
 */

import { html } from "@inglorious/web"
import { classMap } from "@inglorious/web/directives/class-map"

import { renderFactList, renderFrame, renderLinkRow } from "../parts/index.js"
import { reveal } from "../reveal/reveal.js"

/**
 * A two-column section: a block of copy on one side, a screenshot on the other.
 *
 * @param {FeatureProps} props
 * @returns {TemplateResult}
 */
export function render(props) {
  const { eyebrow, title, lead, facts, links, frame, isFlip, isAlt } = props

  return html`<section
    class=${classMap({
      "site-section": true,
      "site-feature": true,
      "site-feature-alt": Boolean(isAlt),
    })}
  >
    <div
      class=${classMap({
        "site-wrap": true,
        "site-feature-grid": true,
        "site-feature-flip": Boolean(isFlip),
      })}
    >
      <div
        class=${classMap({
          "site-feature-copy": true,
          "site-reveal": true,
          "site-reveal-1": true,
        })}
        ${reveal()}
      >
        <p class="site-eyebrow">${eyebrow}</p>
        <h2 class="site-h2">${title}</h2>
        <p class="site-lead site-feature-lead">${lead}</p>
        ${facts?.length ? renderFactList({ rows: facts }) : null}
        ${links?.length ? renderLinkRow({ links }) : null}
      </div>

      <div
        class=${classMap({
          "site-feature-media": true,
          "site-reveal": true,
          "site-reveal-2": true,
        })}
        ${reveal()}
      >
        ${frame ? renderFrame(frame) : null}
      </div>
    </div>
  </section>`
}
