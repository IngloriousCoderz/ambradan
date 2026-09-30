import * as handlers from "./handlers.js"
import * as renderers from "./template.js"

export const TalkMap = {
  ...renderers,
  ...handlers,
}

export { DELIVERED, UPCOMING } from "./constants.js"
export { renderCopyButton, render as renderTalkMap } from "./template.js"
