/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 *
 * @typedef {object} FooterEntity
 * @property {string | number} id
 * @property {string} [locale]
 * @property {import("../../locales").en} [copy]
 */

import { html } from "@inglorious/web"

import { CONTACT, CONTENT_UPDATED } from "../../data/site.js"
import { localePath } from "../../locales/index.js"

/** @this {FooterEntity} @returns {TemplateResult} */
export function render(entity) {
  const c = entity.copy
  const { locale } = entity
  const year = new Date().getFullYear()

  return html`
    <footer class="site-footer">
      <div class="site-wrap site-footer-grid">
        <div class="site-footer-brand">
          <div class="site-footer-name">${CONTACT.name}</div>
          <p>${c.footer.blurb}</p>
          <a
            class="site-btn site-btn-primary"
            href=${localePath("/contact", locale)}
            >${c.footer.cta}
            <span class="site-btn-arr" aria-hidden="true">-&gt;</span></a
          >
        </div>

        ${c.footer.columns.map(
          (column) => html`
            <div class="site-footer-col">
              <h2>${column.heading}</h2>
              ${column.links.map(
                (link) =>
                  html`<a
                    href=${localePath(link.href, locale)}
                    target=${isExternal(link.href) ? "_blank" : undefined}
                    rel=${isExternal(link.href) ? "noopener" : undefined}
                    >${link.label}</a
                  >`,
              )}
            </div>
          `,
        )}

        <div class="site-footer-col">
          <h2>${c.footer.writeHeading}</h2>
          <a href=${`mailto:${CONTACT.email}`}>${CONTACT.email}</a>
          <p>${c.footer.writeNote}</p>
        </div>
      </div>

      <div class="site-wrap site-footer-bar">
        <span
          >&copy; ${year} ${CONTACT.name} · ${c.footer.updated}
          ${CONTENT_UPDATED}</span
        >
        <span>${c.footer.barNote}</span>
      </div>
    </footer>
  `
}

/** @param {string} href */
const isExternal = (href) => /^https?:/i.test(href)
