/**
 * @typedef {import("./template").CapabilityCardEntity} CapabilityCardEntity
 */

/** @this {CapabilityCardEntity} */
export function toggle(entity) {
  entity.isExpanded = !entity.isExpanded
}
