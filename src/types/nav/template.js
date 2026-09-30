/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 *
 * @typedef {object} NavLink
 * @property {string} label
 * @property {string} path
 * @property {1} [isLive] Show the pulsing dot: something is running now.
 */

import { html } from "@inglorious/web"

import {
  localePath,
  normalisePath,
  switchLocalePath,
} from "../../locales/index.js"
import { Theme } from "../theme/index.js"

/**
 * @typedef {object} NavEntity
 * @property {string | number} id
 * @property {string} path Current pathname, used to mark the active link.
 * @property {boolean} isMenuOpen Whether the small-screen menu is expanded.
 * @property {string} [locale]
 * @property {import("../../locales").en} [copy]
 */

/**
 * Whether a nav item points at the current page.
 *
 * The comparison is exact, against the locale-prefixed route. A prefix match
 * would be wrong here: the Italian "Home" item is `/it`, and `/it` is a prefix
 * of every page in the Italian site, so it would light up everywhere.
 *
 * @param {NavEntity} entity
 * @param {string} path
 */
export const isActive = (entity, path) =>
  normalisePath(entity.path ?? "/") ===
  normalisePath(localePath(path, entity.locale))

/**
 * @this {NavEntity}
 * @param {import("@inglorious/web").Api} api
 * @returns {TemplateResult}
 */
export function render(entity, api) {
  const c = entity.copy

  return html`
    <header class="site-nav">
      <div class="site-wrap site-nav-inner">
        <a class="site-nav-brand" href="/">Ambra Danesin</a>

        <nav class="site-nav-links" aria-label="Primary">
          ${c.nav.links.map((link) => renderLink(link, entity))}
        </nav>

        <div class="site-nav-right">
          ${Theme.render({ ...api.getEntity("theme"), copy: c }, api)}

          <a
            class="site-lang"
            href=${switchLocalePath(entity.path, entity.locale)}
            hreflang=${c.nav.other.lang}
            lang=${c.nav.other.lang}
            title=${c.nav.other.title}
            >${c.nav.other.label}</a
          >

          <a
            class="site-btn site-btn-primary site-btn-sm site-nav-cta"
            href="/contact"
            >${c.nav.cta}</a
          >

          <button
            class="site-burger"
            type="button"
            aria-label=${c.nav.menu}
            aria-expanded=${entity.isMenuOpen ? "true" : "false"}
            @click=${() => api.notify(`#${entity.id}:toggleMenu`)}
          >
            ${c.nav.menu}
          </button>
        </div>
      </div>

      <nav
        class=${
          entity.isMenuOpen ? "site-mobile-nav is-open" : "site-mobile-nav"
        }
        aria-label="Primary, small screen"
        ?hidden=${!entity.isMenuOpen}
      >
        ${c.nav.links.map((link) => renderLink(link, entity, true))}
      </nav>
    </header>
  `
}

/**
 * @param {NavLink} link
 * @param {NavEntity} entity
 * @param {boolean} [isMobile]
 * @returns {TemplateResult}
 */
function renderLink({ label, path, isLive }, entity, isMobile = false) {
  const active = isActive(entity, path)
  const classes = [
    isMobile ? "site-mobile-link" : "site-nav-link",
    active ? "is-active" : "",
  ]
    .filter(Boolean)
    .join(" ")

  return html`<a
    class=${classes}
    href=${localePath(path, entity.locale)}
    aria-current=${active ? "page" : "false"}
  >
    ${isLive ? html`<i class="site-pulse" aria-hidden="true"></i>` : null}
    ${label}
  </a>`
}
