/**
 * @typedef {import("@inglorious/web").Api} Api
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 */

import { html } from "@inglorious/web"

import { copy, DEFAULT_LOCALE, localePath } from "../../locales/index.js"
import { Nav } from "../nav/index.js"

/**
 * Renders a store entity's type with the page's language folded in.
 *
 * SSX gives every page an `entity.locale`, and the entities a page renders are
 * otherwise language-blind: they hold values, not words. This puts the locale
 * on the props without writing to the entity, so the store still only changes
 * when a handler says so.
 *
 * @param {Api} api
 * @param {string} id
 * @param {string} [locale]
 * @param {Record<string, unknown>} [extra]
 * @returns {TemplateResult | string}
 */
export function localised(api, id, locale = DEFAULT_LOCALE, extra = {}) {
  const entity = api.getEntity(id)
  if (!entity) return html``

  const type = api.getType(entity.type)
  if (!type?.render) return html``

  return type.render({ ...entity, locale, ...extra }, api)
}

/**
 * The frame every page renders into: navigation, the page itself, the footer and
 * the detail modal.
 *
 * SSX renders a page as a standalone tree, so each page composes itself rather
 * than being slotted into a layout. `shell()` is that composition, in one place
 * so the pages cannot drift apart.
 *
 * The navigation is rendered here rather than through `api.render("nav")`
 * because it needs this page's route, and the detail panel because it needs
 * this page's language. During the static build there is no router entity, so
 * the page module is the only thing that knows either.
 *
 * @param {TemplateResult} content
 * @param {Api} api
 * @param {string} path This page's route.
 * @param {string} [locale]
 * @returns {TemplateResult}
 */
export function shell(content, api, path, locale = DEFAULT_LOCALE) {
  const nav = api.getEntity("nav")
  const c = copy(locale)

  return html`
    ${Nav.render({ ...nav, path: localePath(path, locale), locale, copy: c }, api)}

    <main class="site-main" id="main">${content}</main>

    ${localised(api, "footer", locale, { copy: c })}
    ${localised(api, "detailModal", locale, { copy: c })}
  `
}
