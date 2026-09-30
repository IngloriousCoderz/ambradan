/**
 * @typedef {import("@inglorious/web").TemplateResult} TemplateResult
 * @typedef {import("./helpers").ThemeEntity} ThemeEntity
 */

import { html } from "@inglorious/web"

/**
 * The light/dark switch in the navigation.
 *
 * Both icons are always in the markup and the theme class chooses which one
 * shows. Rendering only the current one would mean the static build, which has
 * no way to know the reader's preference, guessed differently from the browser
 * and the hydrated tree would not match.
 *
 * @this {ThemeEntity}
 * @param {import("@inglorious/web").Api} api
 * @returns {TemplateResult}
 */
export function render(entity, api) {
  const c = entity.copy

  return html`<button
    class="site-theme-btn"
    type="button"
    aria-label=${c?.nav.themeLabel ?? "Toggle dark mode"}
    title=${c?.nav.themeTitle ?? "Light / dark"}
    @click=${() => api.notify(`#${entity.id}:toggle`)}
  >
    <svg
      class="site-theme-icon site-theme-sun"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4"></circle>
      <path
        d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
      ></path>
    </svg>

    <svg
      class="site-theme-icon site-theme-moon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path>
    </svg>
  </button>`
}
