/**
 * @typedef {import("./template").EventListEntity} EventListEntity
 */

import { EVENTS, PAST_TALKS } from "../../data/events.js"

/** Which list an entity shows, named in the entity so the two can differ. */
const LISTS = {
  upcoming: EVENTS,
  past: PAST_TALKS,
}

/** @this {EventListEntity} */
export function create(entity) {
  entity.events = LISTS[entity.collection] ?? []
}
