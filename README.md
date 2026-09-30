# Ambra Danesin

The personal site: research, teaching, work, programmes and contact, in English
and Italian, plus a sample Better Futures session and its facilitator guide.

Static site built with [SSX](https://www.npmjs.com/package/@inglorious/ssx) and
[@inglorious/web](https://www.npmjs.com/package/@inglorious/web), with state in
`@inglorious/store` and components from `@inglorious/ui`. No framework runtime
beyond lit-html, no cookies, no analytics, no third-party fonts.

## Commands

Dependencies are installed with **pnpm**; the `npm run …` scripts below work
as they are, but `npm install` is not supported.

```bash
pnpm install
npm run dev              # http://localhost:3000  (PORT=3111 npm run dev to move it)
npm run build            # static output in dist/
npm run preview          # serve dist/
npm run lint
npm run format
```

`npm run build` passes `--force`, and that is the safe default. SSX re-renders a
page when its own import graph changes, or when the shared sources —
`store/entities`, `store/types`, `site.config` — change. That covers pages,
locales, data and config. It does not reach `src/types/**` or `src/styles/**`,
because a type is rendered by name through the store and so is in no page's
import graph. A type is shared by every page, so that is an accepted limit
rather than a defect.

`npm run build:incremental` opts back in and is safe **only** when the change
is in `src/pages/`, `src/locales/`, `src/data/` or `site.config.js`. Touch
anything under `src/types/` or `src/styles/` and use `npm run build`.

## Two languages

The site is served at `/` in English and at `/it/` in Italian. SSX replicates
every page for each configured locale and sets `entity.locale` on the page's
entity, so:

- **Words live in `src/locales/`.** `en.js` and `it.js` are the same shape, read
  side by side, so a key added to one and forgotten in the other is visible in
  review. `copy(locale)` resolves one.
- **Data lives in `src/data/` and is bilingual.** An entry holds the facts that
  are the same everywhere — a logo key, a URL, coordinates, a sortable date,
  whether something is a talk — plus one text block per language:

  ```js
  {
    id: "intesa",
    logo: "intesasanpaolo",
    link: "https://www.intesasanpaolo.com",
    en: { when: "2026", how: "Instructor, via Digit'Ed", what: "Two programs…" },
    it: { when: "2026", how: "Docente, via Digit'Ed", what: "Due programmi…" },
  }
  ```

  A link or a latitude is therefore changed in one place. Every text field is
  written out in both languages rather than falling back, so an untranslated
  string shows up as a gap instead of quietly shipping in the wrong language.
  `localise(entry, locale)` hands back the facts and the text together.

- **Nothing in an entity holds a word.** A page passes its `entity.locale` down
  through `localised()` in `src/types/shell/index.js`, and the types read their
  words from the copy. That keeps entities pure data in both languages.

The sample session deck and its facilitator guide stay in English on both paths —
they are the platform a facilitator presents to an English-speaking cohort — so
they are marked `lang="en"` and both languages link to the English routes.

## Verification

These drive a real browser against a running server. Start `npm run dev` or
`npm run preview` first, then:

```bash
npm run verify            # every route in both languages, both themes: errors, stray requests, broken images, content that is present but invisible
npm run verify:nav        # client-side routing in both languages, back/forward, scroll reset
npm run verify:responsive # 390px layout, and the page with JavaScript disabled
npm run measure:cls       # cumulative layout shift per route
npm run measure:perf      # requests, bytes, TTFB, FCP, DCL, and whether Archivo loaded
npm run shots             # screenshots of every page into shots/
```

Point them at the production build with `BASE=http://localhost:3000 npm run verify`.
`BASE` defaults to `http://localhost:3000`; `npm run preview` serves on that
port, and `npx serve dist -l 3222` puts it elsewhere.

## Layout

```
public/img/            self-hosted fonts, screenshots, logos
src/
  content/             long-form markdown, rendered by a page that owns the chrome
  data/                bilingual site content: orgs, programmes, engagements, events, session
  locales/             every word the site says, per language
  pages/               one module per route; each exports a type, `render` and `metadata`
  store/
    types.js           every store type in the app
    entities.js        explicit entities; the rest are created per type automatically
  styles/
    index.js           stylesheet entry point, imported once per page
    fonts.css          self-hosted Archivo and JetBrains Mono, subset
    theme.css          the `ambra` theme: tokens on top of @inglorious/ui
  types/               one folder per type: template, handlers, helpers, style
scripts/               browser-driven checks, measurements and screenshots
docs/
  why-the-rewrite.md   measured comparison against the previous two-file site
```

## Adding something

**A new card in a grid.** Add the entry to the collection in `src/data/`, with
both language blocks, and make sure
`src/types/detail-modal/collections.js` can label it — the card and the detail
panel both read from there, so they cannot disagree. No new entity.

**A new page.** Add `src/pages/<name>.js` exporting a type with `render`, plus
`metadata`. Call `shell(content, api, "/name", locale)` to get the navigation,
footer and detail panel, and add a `meta.<name>` entry to both locale files.
`src/types/shell/index.js` is the composition every page shares.

**A new type.** One folder under `src/types/`, following the same shape:
`template.js` renders, `handlers.js` holds behaviour, `helpers.js` holds pure
functions, `style.css` carries the styles, `index.js` composes them. Register it
in `src/store/types.js`. Entities are created automatically from the type name,
unless the type needs several instances or a starting value — then declare it in
`src/store/entities.js`.

## Notes for whoever works on this

- **Entities hold values only.** Behaviour lives in types. Templates dispatch
  with `api.notify()` and never mutate.
- **Never mutate an entity from a DOM callback.** An intersection observer, a
  timer or a scroll handler runs outside any update cycle: the entity it closed
  over has been revoked, and the write will not re-render. Dispatch an event
  instead. `src/types/talk-map/handlers.js` and `src/types/session-deck/` both
  show the pattern.
- **The theme class goes on `<html>`**, applied by the inline script in
  `site.config.js` before first paint, so a dark-mode reader never sees a white
  flash. The store's `Theme` type reads the same two sources, so the toggle and
  the screen cannot disagree.
- **Render both theme icons.** The static build cannot know the reader's
  preference, so a template that renders one icon and hides it with CSS
  hydrates cleanly and one that picks with JavaScript does not.
- **Reveal-on-scroll is hidden behind `.ambra-js`**, a class the same inline
  script sets. Without it the whole page is visible, so a reader without
  scripting is not left with a hero and an empty column.
- **The map is behind a click on purpose.** Leaflet is imported dynamically, so
  nothing is requested from OpenStreetMap until a reader asks for it.
  `npm run verify` fails if any page calls a host that is not on its allowlist.
- **`dist/style.css` has to be linked in the head.** The client bundle injects
  its own stylesheet at runtime, so without `styles: ["/style.css"]` and
  `cssCodeSplit: false` the HTML a crawler or a reader receives is unstyled and
  paints twice. That was the entire CLS problem: it measured 0.59 on the home
  page before the link and 0.000 after.
- **`src/types/document` owns `<title>`, `lang` and the meta tags.** They have
  to be updated at runtime, because a client-side navigation changes the page
  without requesting a new document. A page's `metadata` still sets the static
  values, so a crawler and a reader-mode extractor get them from the HTML.
- **The fonts are subset.** Archivo with its weight and width axes and
  JetBrains Mono are cut to the 199 characters the site can render, plus
  Latin-1 letters so a new Italian string does not fall back. That took them
  from 156 kB to 95 kB, which is what moved LCP from 2.9s to 2.3s; the variable
  axes have to stay, because the design sets `font-stretch: 88–94%`.
  `font-display` stays `swap`: `optional` scores the same once the font is
  small, and would risk the fallback for the whole first view on a slow one.
- **Screenshots and the avatar are WebP**, converted at `-q 82`, which is 44%
  smaller than the JPEG originals. `scripts/verify.mjs` fails on any image that decodes
  to nothing, so a stale `.jpg` path cannot ship.
- **Compare nav paths exactly.** The Italian "Home" item is `/it`, which is a
  prefix of every Italian route, so a prefix match would light it up on every
  page. `isActive` in `src/types/nav/template.js` compares whole paths.
