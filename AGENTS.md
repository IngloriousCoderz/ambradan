# AGENTS.md

Guidance for coding agents working in this repository. The human-facing
documentation is in `README.md`; this file is the short version of what matters
when changing code.

## Stack

Inglorious Forge: `@inglorious/ssx` (static site generation), `@inglorious/web`
(lit-html views, router), `@inglorious/store` (entity state), `@inglorious/ui`
(components and CSS tokens).

The installed packages are richer than the published skill docs, and the docs
disagree with the code in places. **Read the installed source and `types/*.d.ts`
before trusting a skill file.** The CSS export paths are
`@inglorious/ui/tokens.css` and `@inglorious/ui/button.css` — not
`@inglorious/ui/tokens` as the skill says.

## Rules that are not negotiable

1. **Entities are pure data.** No functions, no computed fields set at render
   time. Logic goes in the type.
2. **Templates dispatch with `api.notify()`, never mutate.** Handler names and
   the `api.notify` targets must match; a mismatch fails silently, because an
   event with no listener is a no-op rather than an error.
3. **Never write to an entity from outside a handler.** DOM callbacks
   (observers, timers, scroll, keydown) run outside an update cycle, so the
   entity has been revoked and the write will not re-render. Dispatch an event
   and let a handler do the write.
4. **Use `api.notify()`, not `api.dispatch()`.** `notify` is the intended entry
   point; `dispatch` exists for Redux compatibility.
5. **No bare magic numbers where a name carries meaning** — durations, viewports
   and tile zoom get constants. Layout numbers are exempt (the rule is off for
   `src/`).

## Traps in this codebase

- **`npm run build` is `--force`, and that is a deliberate scope boundary.**
  SSX decides what to re-render by hashing a page's own import graph, plus a
  shared hash over `store/entities`, `store/types` and `site.config` (fixed
  upstream in `@inglorious/ssx` 2.1.6). That covers page modules, locale files,
  data files and the site config. It does not reach `src/types/**`, because a
  type is rendered by name through the store — `localised(api, "footer", …)` —
  so a type module is in no page's import graph, and the graph is not populated
  for it yet when the hash is taken. That is an accepted limit, not a bug:
  a type is by construction shared by every page, so per-page invalidation would
  buy nothing and cost a render-aware module graph.
  **The rule: `build:incremental` is safe for pages, locales, data and config.
  If you have touched anything under `src/types/` or `src/styles/`, use
  `npm run build`.** That is what the `--force` on the default script is for.
  Verified: edit a type template, run `npm run build:incremental`, and
  `dist/index.html` comes out byte-identical.
- **SSX swallows load errors.** `getStoreStuff` wraps module loading in a bare
  `catch`, so a broken `src/store/types.js` or `entities.js` produces "No
  renderer for X" in the output rather than a build error. Check the log, and
  check the import paths — several have been wrong during this build.
- **Theme-dependent markup must not branch on JavaScript.** The static build has
  no `window`, so it always renders the light case. Render both states and let
  CSS choose, or hydration will report a value mismatch.
- **`api.render(id)` takes an entity id, not props.** To render a type with
  overridden props, call `Type.render(props, api)` directly. That is how the
  shell renders the navigation with the current route.
- **Leaflet owns `#map`.** Once it initialises, it controls everything inside.
  The gate that covers it must be a sibling, not a child, or lit will fight it.
- **Do not put a `/* … */` comment inside a `${…}` in a lit template.** It
  confuses both the JS parser and lit's own brace matching.
- **Compare navigation paths exactly, never by prefix.** The Italian "Home"
  item is `/it`, a prefix of every Italian route, so a `startsWith` check lights
  it up on every page. This shipped a bug.
- **A link to a path the router has no route for is not a 404, it does nothing.**
  The router calls `preventDefault()` on every same-origin click _before_ it
  looks for a route, so a link that cannot be resolved is swallowed and the URL
  never moves. `/it/` is served correctly but is not a route: SSX builds a
  localised root as the bare prefix, so the Italian home is `/it`, and that is
  what `localePath()` must return. The same applies to a link the server would
  redirect, and to any href `localePath()` is handed that is not site-relative.
  `scripts/verify.mjs` now checks every internal href against the route list.
- **The heading tag is the document outline, the class is the type scale.**
  `site-h3` on an `h2` is deliberate: the class picks the size, the tag picks
  the level. Where the same component is used both under an `h2` and directly
  under the page `h1`, it takes a `headingLevel` prop rather than guessing. Style
  these by class, never by tag, or changing a level silently drops the styling.
- **`npm run build` empties `dist/` before it renders.** A failure part-way
  through leaves a half-built `dist/`, so check the exit status rather than
  looking for files.
- **Check the build's exit status, not its log line.** I once passed a build
  where every page had failed to render, because I grepped for a success marker
  instead of checking the status. `ssx build` does `process.exit(1)` and prints
  `Build failed:`, so the status is authoritative and the log is not. (For the
  record, Vite's `✓ built in …ms` is printed _after_ the HTML is written, so it
  is not a misleading "the site is not built yet" marker — that was my guess and
  it was wrong.)
- **lit's SSR renderer cannot interpolate a tag name.** `<${level}>` throws
  `Unexpected final partIndex` at build time and leaves an empty `dist/`. Choose
  the element in JS and return one of two templates instead.

## Two languages

The site is served at `/` in English and `/it/` in Italian. SSX replicates each
page per locale and sets `entity.locale` on the page's entity, so:

- **Words live in `src/locales/{en,it}.js`**, same shape, read side by side.
  `copy(locale)` resolves one. A page reads its own `entity.locale` and passes it
  down with `localised()` from `src/types/shell/index.js`.
- **Data in `src/data/` is bilingual**: shared facts (logo, link, coordinates,
  dates) sit at the top level, prose sits in `en` and `it` blocks. Read it with
  `localise(entry, locale)` — never by reaching into `entry.en` directly.
- **No entity holds a word.** If a string starts appearing in `entities.js`, it
  belongs in a locale file.
- The session deck and facilitator guide are English documents on both paths, so
  their `metadata` sets `lang: "en"` and both languages link to the English
  routes. Do not translate their body copy without a decision to translate the
  cohort material too.

## Conventions

- One folder per type under `src/types/`: `template.js`, `handlers.js`,
  `helpers.js`, `style.css`, `index.js`. Omit the files a type does not need
  rather than creating empty ones.
- `index.js` is the container layer: it wires store events to plain props.
  Templates stay presentational.
- App-local styles are global CSS with a `site-` prefix, in the type's
  `style.css`. `@inglorious/ui` owns `iw-`; the two namespaces must not collide.
  The site has eight pages drawing on one editorial style set, so CSS modules
  would fragment it — this is the documented "design-system" styling mode, not a
  shortcut.
- Token changes go in `src/styles/theme.css`, scoped to `.iw-theme-ambra` and
  `.iw-theme-ambra.iw-theme-dark`. The one exception is the light palette,
  which is also declared on `:root` so a reader with JavaScript off still gets
  the real design instead of an unstyled page. Dark stays class-only: there is
  no way to express a preference for it in CSS that does not misfire before the
  pre-paint script in `site.config.js` runs. Do not put component tokens on
  `:root` — only the light palette.
- A visible string goes in a locale file, in both languages. A path goes through
  `localePath()` so it picks up the `/it` prefix.
- New routes are `src/pages/<name>.js`; dynamic ones are `_param.js`. A page's
  module name becomes its type, so the export name must be the PascalCase of the
  filename.
- CSS: mobile-first, `max-width` media queries, flat class names, rules anchored
  under one root selector. Match specificity deliberately — a modifier that
  outranks its own mobile override needs the override to name both classes.

## Before you finish

```bash
npm run lint
npm run build
npm run verify        # needs a server; see README
```

`verify` is the one that matters: it catches server errors, uncaught exceptions,
hydration mismatches, requests to unexpected hosts, and content that is in the
DOM but still transparent because a reveal never fired. All four have shipped
bugs in this codebase at some point.
