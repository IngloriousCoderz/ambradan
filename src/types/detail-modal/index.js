import * as cardRenderers from "./card-template.js"
import * as handlers from "./handlers.js"
import * as modalRenderers from "./modal-template.js"

export const DetailModal = {
  ...handlers,
  ...modalRenderers,
}

export const EntryCard = {
  ...cardRenderers,
}

export { COLLECTIONS, linkLabel, resolve } from "./collections.js"
