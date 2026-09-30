/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 */

import { html } from "@inglorious/web"

/**
 * A run of topic tags.
 *
 * @param {{tags: string[]}} props
 * @returns {TemplateResult | null}
 */
export function renderTagList({ tags }) {
  if (!tags?.length) return null

  return html`<div class="site-tags">
    ${tags.map((tag) => html`<span class="site-tag">${tag}</span>`)}
  </div>`
}

/**
 * A definition list of short term/value pairs, as on the entry cards.
 *
 * @param {{rows: [string, string][]}} props
 * @returns {TemplateResult | null}
 */
export function renderTermList({ rows }) {
  if (!rows?.length) return null

  return html`<dl class="site-terms">
    ${rows.map(
      ([term, value]) =>
        html`<dt>${term}</dt>
          <dd>${value}</dd>`,
    )}
  </dl>`
}

/**
 * A number-and-caption list, used for the "how many / how long" facts beside a
 * feature. `value` is large; `isText` switches to a small monospace label for
 * rows where the left column is a word rather than a figure.
 *
 * @param {{rows: {value: string, isText?: 1, text: string}[]}} props
 * @returns {TemplateResult}
 */
export function renderFactList({ rows }) {
  return html`<ul class="site-facts">
    ${rows.map(
      (row) =>
        html`<li>
          <b class=${row.isText ? "site-facts-word" : ""}>${row.value}</b>
          <span>${row.text}</span>
        </li>`,
    )}
  </ul>`
}

/**
 * Arrow links under a feature, e.g. the two OSF pre-registrations.
 *
 * @param {{links: {label: string, href: string}[]}} props
 * @returns {TemplateResult | null}
 */
export function renderLinkRow({ links }) {
  if (!links?.length) return null

  return html`<div class="site-links">
    ${links.map(
      (link) =>
        html`<a href=${link.href} target="_blank" rel="noopener"
          >${link.label}
          <span class="site-btn-arr" aria-hidden="true">-&gt;</span></a
        >`,
    )}
  </div>`
}

/**
 * A screenshot in a browser frame, captioned underneath.
 *
 * @param {{src: string, alt: string, origin: string, date?: string, caption?: string, captionLink?: {label: string, href: string}}} props
 * @returns {TemplateResult}
 */
export function renderFrame(props) {
  const { src, alt, origin, date, caption, captionLink } = props

  return html`<div class="site-frame">
      <div class="site-frame-chrome" aria-hidden="true">
        <i></i><i></i><i></i><span>${origin}</span>
      </div>
      <img src=${src} alt=${alt} loading="lazy" decoding="async" />
    </div>
    ${
      caption || date
        ? html`<p class="site-frame-caption">
            ${date ? html`<span class="site-frame-date">${date}</span>` : null}
            ${caption}${
              captionLink
                ? html` <a href=${captionLink.href}
                    >${captionLink.label}
                    <span class="site-btn-arr" aria-hidden="true"
                      >-&gt;</span
                    ></a
                  >`
                : null
            }
          </p>`
        : null
    }`
}

/**
 * A blue-bordered callout. `avatar` is optional.
 *
 * @param {{label?: string, avatar?: {src: string, alt: string}, body: string, isLead?: 1}} props
 * @returns {TemplateResult}
 */
export function renderNoteBox({ label, avatar, body, isLead }) {
  return html`<div class=${isLead ? "site-box site-box-lead" : "site-box"}>
    ${
      avatar
        ? html`<img
            class="site-box-avatar"
            src=${avatar.src}
            alt=${avatar.alt}
            loading="lazy"
            decoding="async"
          />`
        : null
    }
    ${label ? html`<span class="site-box-label">${label}</span>` : null}
    <div>${body}</div>
  </div>`
}

/**
 * The six-item "what I am testing" grid.
 *
 * @param {{items: {title: string, body: string}[]}} props
 * @returns {TemplateResult}
 */
export function renderTestGrid({ items }) {
  return html`<div class="site-tests">
    ${items.map(
      (item) =>
        html`<div class="site-test">
          <b>${item.title}</b>
          <p>${item.body}</p>
        </div>`,
    )}
  </div>`
}

/**
 * A centred intro block: eyebrow, heading, lead, and an optional hint line.
 *
 * @param {{eyebrow: string, title: string, lead?: string, hint?: string, isSizeSm?: 1}} props
 * @returns {TemplateResult}
 */
export function renderSectionHead(props) {
  const { eyebrow, title, lead, hint, isSizeSm } = props

  return html`<div class="site-center">
    <p class="site-eyebrow">${eyebrow}</p>
    <h2 class=${isSizeSm ? "site-h2 site-h2-sm" : "site-h2"}>${title}</h2>
    ${lead ? html`<p class="site-lead">${lead}</p>` : null}
    ${hint ? html`<p class="site-hint">${hint}</p>` : null}
  </div>`
}
