/**
 * @typedef {import("./template").TalkMapEntity} TalkMapEntity
 */

import { EVENTS, PAST_TALKS } from "../../data/events.js"
import { localiseAll } from "../../data/localised.js"
import { CONTACT } from "../../data/site.js"
import { DELIVERED, TILE_TIMEOUT_MS, UPCOMING } from "./constants.js"

/** @type {import("leaflet").Map | null} */
let map = null

/** @this {TalkMapEntity} */
export function create(entity) {
  entity.status = "idle"
  entity.isCopied = false
}

/**
 * Builds the map on first request.
 *
 * Leaflet is imported here rather than at the top of the module so its code is
 * only fetched when a reader asks for the map. The work after the `await`
 * cannot write to the entity — by then it is a stale reference and no update
 * cycle is running — so each outcome is dispatched as its own event.
 *
 * @this {TalkMapEntity}
 * @param {void} _payload
 * @param {import("@inglorious/web").Api} api
 */
export async function open(entity, _payload, api) {
  if (entity.status !== "idle") return
  entity.status = "loading"

  // Read everything needed from the entity now. Past the `await` the draft has
  // been committed and revoked, so touching it throws.
  const id = entity.id
  const locale = entity.locale ?? "en"

  const { default: L } = await import("leaflet")

  const container = /** @type {HTMLElement | null} */ (
    document.getElementById("map")
  )
  if (!container) return

  map = L.map("map", { scrollWheelZoom: false }).setView([43.5, 13.5], 5)

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 12,
  }).addTo(map)

  for (const talk of localiseAll(PAST_TALKS, locale)) {
    addMarker(L, talk, DELIVERED, 7)
  }
  for (const event of localiseAll(EVENTS, locale)) {
    if (!event.lat) continue
    addMarker(L, event, UPCOMING, event.base ? 6 : 9)
  }

  api.notify(`#${id}:loaded`)

  // Leaflet measures the container before the gate has left the layout.
  setTimeout(() => map?.invalidateSize(), 50)

  setTimeout(() => {
    if (!document.querySelector("#map img.leaflet-tile-loaded")) {
      api.notify(`#${id}:tilesMissing`)
    }
  }, TILE_TIMEOUT_MS)
}

/** @this {TalkMapEntity} */
export function loaded(entity) {
  entity.status = "ready"
}

/** @this {TalkMapEntity} */
export function tilesMissing(entity) {
  if (entity.status === "ready") entity.status = "no-tiles"
}

/** How long the button stays on "Copied". */
const COPIED_MS = 1600

/**
 * @this {TalkMapEntity}
 * @param {void} _payload
 * @param {import("@inglorious/web").Api} api
 */
export function copyEmail(entity, _payload, api) {
  const id = entity.id

  navigator.clipboard
    ?.writeText(CONTACT.email)
    .then(() => {
      // Past the promise the entity has been committed and revoked, so the
      // outcome is dispatched rather than written.
      api.notify(`#${id}:copied`)
      setTimeout(() => api.notify(`#${id}:copyReset`), COPIED_MS)
    })
    .catch(() => {
      // Clipboard blocked; the address is on screen either way.
    })
}

/** @this {TalkMapEntity} */
export function copied(entity) {
  entity.isCopied = true
}

/** @this {TalkMapEntity} */
export function copyReset(entity) {
  entity.isCopied = false
}

/**
 * @param {import("leaflet")} L
 * @param {import("../../data/events").EventText & {lat?: number, lng?: number}} event
 * @param {string} color
 * @param {number} radius
 */
function addMarker(L, event, color, radius) {
  L.circleMarker([event.lat, event.lng], {
    radius,
    color,
    fillColor: color,
    fillOpacity: 0.85,
    weight: 2,
  })
    .addTo(map)
    .bindPopup(`<b>${event.t}</b><br>${event.d}<br>${event.s}`)
}
