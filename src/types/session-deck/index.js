import * as deckHandlers from "./deck-handlers.js"
import * as handlers from "./handlers.js"
import * as renderers from "./template.js"

export const SessionDeck = {
  ...renderers,
  ...deckHandlers,
}

export const DeckTimer = {
  ...handlers,
}

export const DeckReveal = {
  toggle: handlers.toggle,
}

export { renderBlock } from "./blocks.js"
export { renderReveal } from "./reveal-template.js"
export { format, renderTimer } from "./timer-template.js"
