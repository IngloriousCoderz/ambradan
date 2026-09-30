/**
 * @typedef {import("./modal-template").DetailModalEntity} DetailModalEntity
 */

/**
 * @this {DetailModalEntity}
 * @param {{collection: string, index: number, locale?: string}} payload
 */
export function open(entity, payload) {
  entity.collection = payload?.collection ?? null
  entity.index = payload?.index ?? 0
  entity.locale = payload?.locale ?? "en"
  entity.isOpen = true
}

/** @this {DetailModalEntity} */
export function close(entity) {
  entity.isOpen = false
}

/** Escape closes whatever is open. @this {DetailModalEntity} */
export function escape(entity) {
  if (entity.isOpen) entity.isOpen = false
}
