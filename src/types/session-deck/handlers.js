/**
 * @typedef {import("./timer-template").DeckTimerEntity} DeckTimerEntity
 * @typedef {import("./reveal-template").DeckRevealEntity} DeckRevealEntity
 */

const TICK_MS = 1000

/** @type {ReturnType<typeof setInterval> | null} */
let ticker = null

/* ------------------------------------------------------------ reveal --- */

/** @this {DeckRevealEntity} */
export function toggle(entity) {
  entity.isOpen = !entity.isOpen
}

/* ------------------------------------------------------------- timer --- */

/** @this {DeckTimerEntity} */
export function createTimer(entity) {
  entity.left = entity.minutes * 60
  entity.isRunning = false
  entity.isDone = false
}

/**
 * @this {DeckTimerEntity}
 * @param {void} _payload
 * @param {import("@inglorious/web").Api} api
 */
export function start(entity, _payload, api) {
  if (entity.isDone) return
  entity.isRunning = true
  runTicker(api)
}

/** @this {DeckTimerEntity} */
export function pause(entity) {
  entity.isRunning = false
}

/** @this {DeckTimerEntity} */
export function tick(entity) {
  entity.left = Math.max(entity.left - 1, 0)
  if (entity.left === 0) {
    entity.isRunning = false
    entity.isDone = true
  }
}

/**
 * One shared interval for the whole deck, so six timers do not mean six
 * intervals.
 *
 * The timers are separate entities, so each tick is dispatched rather than
 * written to directly: a write outside a handler would not run inside an update
 * cycle and would not re-render.
 *
 * @param {import("@inglorious/web").Api} api
 */
function runTicker(api) {
  if (ticker) return

  ticker = setInterval(() => {
    const running = api.getEntities("DeckTimer").filter((t) => t.isRunning)

    if (!running.length) {
      clearInterval(ticker)
      ticker = null
      return
    }

    for (const timer of running) {
      api.notify(`#${timer.id}:tick`)
    }
  }, TICK_MS)
}
