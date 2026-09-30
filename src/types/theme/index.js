import * as handlers from "./handlers.js"
import * as renderers from "./template.js"

export const Theme = {
  ...renderers,
  ...handlers,
}

export { DARK_CLASS, LIGHT_CLASS, STORAGE_KEY, THEME_CLASS } from "./helpers.js"
