# Why the rewrite

A comparison of the previous site — two hand-written HTML files, one per language —
against the current one, built on Inglorious SSX.

Every number below was measured on the two versions, from the same machine, with
the same tools, with both image sets present. The
[How to re-measure](#how-to-re-measure) section has the commands, and
[Where the savings came from](#where-the-savings-came-from) shows the working.

_Measured 30 September 2026, Lighthouse 12, Chrome on macOS._

---

## The numbers

|                                                     | Original                     | Now                        |
| --------------------------------------------------- | ---------------------------- | -------------------------- |
| Deep links (`/contact`, `/research`, `/it/contact`) | **404**                      | 200                        |
| Crawlable documents                                 | 2 (`/`, `/it/`)              | 16 (8 pages × 2 languages) |
| Home page transferred                               | 851 kB                       | **303 kB**                 |
| Text visible with JavaScript **off**                | **518 of 13,603 chars (4%)** | **3,519 of 3,555 (99%)**   |
| Images visible with JavaScript **off**              | **0 of 7**                   | 45 of 45                   |
| Cumulative Layout Shift                             | **0.919**                    | **0.000**                  |
| Largest Contentful Paint                            | **4.9 s**                    | 2.3 s                      |
| Lighthouse performance                              | **56**                       | 98                         |
| Lighthouse accessibility                            | 93                           | 100                        |
| Lighthouse best practices                           | 96                           | 100                        |
| Lighthouse SEO                                      | 100                          | 100                        |
| Images with `loading="lazy"`                        | 0 of 51                      | 45 of 45                   |
| Images with explicit `width`/`height`               | 1 of 51                      | 44 of 45                   |
| Per-page `<title>` and description                  | 1, set by JavaScript         | 16, in the markup          |
| Structured data                                     | none                         | `schema.org/Person`        |
| `robots.txt`                                        | none                         | present                    |
| Heading order                                       | `h1` → `h3` skips            | clean on all 16 pages      |
| Contrast failures in dark mode                      | 3 combinations               | 0                          |

The home page, broken down. "html+js" is a wash, and it is worth saying so before
looking at the rest:

|               | Original                                   | Now                          |
| ------------- | ------------------------------------------ | ---------------------------- |
| `html` + `js` | 79 kB (JavaScript inlined in the document) | 77 kB (7 kB html + 70 kB js) |
| `css`         | inlined in the document                    | 15 kB, one cached file       |
| images        | **618 kB** (51 images)                     | **115 kB** (45 images)       |
| fonts         | **154 kB**                                 | **96 kB**                    |
| requests      | 31                                         | 25                           |
| **total**     | **851 kB**                                 | **303 kB**                   |

---

## 1. It works without JavaScript

This is the finding that decided the rewrite.

The original set `opacity: 0` on every tile, card, statistic and timeline item, and
revealed them with an `IntersectionObserver`. There was a `@media
(prefers-reduced-motion: reduce)` escape hatch, but nothing for "JavaScript is
off" — the reveal script was the only thing that ever made the content visible.

So with scripting disabled, a reader gets the hero and then a blank page:

```
ORIGINAL  markup text: 13603 chars | VISIBLE with JS off:  518 (  4%) | images hidden: 7/7
NEW       markup text:  3555 chars | VISIBLE with JS off: 3519 ( 99%) | images hidden: 0/45
```

This is not only an accessibility problem. It is the same problem an agent has.
A crawler, a reader-mode extractor, an LLM fetching the URL to answer a question
about it, a text-to-speech client, a link-preview unfurl — anything that reads
the markup without running the script — sees 4% of the site.

The current version keeps the same reveal animation for readers who have
JavaScript, behind a class the pre-paint script adds. No class, no animation,
everything visible. The animation is then an enhancement rather than the thing
holding the page up.

The same fix removes the CLS. The reveal was animating `opacity` _and_
`transform` on elements that occupy space, triggered at staggered delays, with a
1.2-second fallback timer — 0.919 cumulative layout shift, the worst score
Lighthouse gives.

## 2. Sixteen real addresses instead of one document

The original was a single-page app on `location.hash`. `/research` did not exist.
It does not exist now either — it returns a 404:

```
ORIGINAL /contact    -> 404
ORIGINAL /research   -> 404
ORIGINAL /it/contact -> 404
NEW      /contact    -> 200
NEW      /research   -> 200
NEW      /it/contact -> 200
```

So the only two addresses the site has ever had are `/` and `/it/`. Everything
else was a fragment. The consequences:

- **No link to a page, only a link to a section of one page.** A bookmark, a
  shared link, a link in a talk description, a search result — none of them
  address a page.
- **One document carried the whole site.** All six sections sat in the file as
  `<div class="page">` with `display: none`, in both language files, so both
  documents shipped every section regardless of where you landed.
- **No per-page metadata.** One `<title>`, one description, one `og:title` for
  everything, changed client-side by string concatenation. The Italian document
  had an English `<title>`.

Now each page is its own document at its own URL, with its own title, description
and language, and the two languages are separate documents in separate
directories rather than two copies of a file that has to be edited twice.

## 3. Contrast and heading structure

Both versions failed contrast; the original failed in more places, including the
primary buttons.

```
ORIGINAL, dark mode:
  3.03:1  #ebf0ff on #5b82ff     ← the primary button
  3.45:1  #ffffff on #5b82ff     ← the primary button
  4.28:1  #727c92 on #10162a     ← muted text
```

The muted-grey token was the worst offender and it was failing in _both_ modes —
2.90:1 on the light background, which Lighthouse never reported because it only
tests one theme at a time. It is now 4.84:1 light and 4.73:1 dark, computed
against the worst surface each token actually lands on rather than the page
background.

Headings skipped from `h1` straight to `h3` on eight of the sixteen pages. The
card grid is rendered both under a section heading and directly under the page
heading, so it now takes a `headingLevel` prop rather than guessing. The
`site-h3` class still picks the size; the tag picks the level. Accessibility
went 93 → 100.

Also fixed: the Intesa Sanpaolo logo in the logo lane was visibly squashed — a
definite `height` plus a `max-width` clamp the two dimensions independently — and
the marquee logos carried an `alt` that repeated the visible name beside them.
None of the 51 images in the original had a `loading` attribute, so all of them
loaded on every visit regardless of whether they were on screen.

## 4. Where the savings came from

The home page went from 851 kB to 303 kB. It is fair to ask how much of that is
the build doing its job, and the honest answer is: **almost none of it.**

|                                               | Saving on the home page             | What it is                                             |
| --------------------------------------------- | ----------------------------------- | ------------------------------------------------------ |
| Images the page no longer loads at all        | **~460 kB**                         | sixteen documents instead of one, and `loading="lazy"` |
| WebP for the one image that is above the fold | **40 kB**                           | a source change, made by hand                          |
| Subsetting the two fonts to 199 characters    | **58 kB**                           | a source change, made by hand                          |
| The build's image optimizer                   | **57 kB** across the whole logo set | automatic                                              |
| `html` + `js`                                 | **0 kB** (79 → 77)                  | a wash                                                 |

### Most of the image saving is not compression

This is the part that is easy to get wrong. On the home page the original requests
**28 distinct images for 618 kB**, and the single largest item is the avatar
photo at 164 kB. It is eager: it has no `loading` attribute anywhere, so the
browser fetches all five browser frames and the avatar on every visit — including
the frames belonging to Research, Teaching and Contact, which the reader has not
scrolled to and may never visit.

The current site requests **9 images for 115 kB** on the same page: one
above-the-fold frame plus the visible logos. The rest load when they are scrolled
to.

So the dominant saving is structural — sixteen real documents, each loading its
own images, rather than one document that loads the images of six pages — and the
`loading="lazy"` on every image. Compression is the smaller half of the story.

### The build optimizer only touches PNGs

The build runs `vite-plugin-image-optimizer` and prints a savings figure, so it
looks like the build is compressing the images. It is not. I put a JPEG, a PNG and
a mislabelled copy of the same JPEG into `public/img`, built, and compared:

```
file                       source      built  verdict
zz-probe.jpg               127384     127384 unchanged
zz-probe.png                 2225       1696 re-encoded  (-24%)
zz-probe-copy.webp         127384     127384 unchanged
```

Across the logo set it takes 23 PNGs from 137 kB to 79 kB — real work, 8% to 58%
each, and 58% on ENAIS. But it leaves every JPEG and every WebP alone, because
its default is `quality: 100`, which is effectively lossless: re-encoding a JPEG
at quality 100 makes it bigger, so the plugin keeps the original.

**So: the build step is worth 57 kB, on the PNG logos. Everything else is a
decision committed to the repository**, and anyone re-running the build will not
get it for free. This is the honest version of "the build made the site lean",
which it did not.

Two further notes:

- WebP is worth 219 kB across the site, but only 40 kB of that lands on the home
  page, because the home page is the one page with only one above-the-fold image.
  The rest shows up on `/research`, `/teaching` and `/contact`.
- The optimizer runs at `quality: 100` because nothing configures it otherwise.
  Lowering it, or adding a `webp`/`avif` block, would compress the screenshots
  further at the cost of quality. Left alone deliberately rather than by omission.

## 5. Weight, fonts and LCP

The original shipped 267 kB of HTML before a single image: 144 kB of Leaflet, 25 kB
of the session deck inlined as a JavaScript string, 24 kB of data literals, 34 kB
of CSS. All of it on the first load, on every page, whether or not you ever opened
the map or the deck.

|                                       | Before              | After                                                  |
| ------------------------------------- | ------------------- | ------------------------------------------------------ |
| Fonts                                 | 156 kB              | 95 kB                                                  |
| Screenshots + avatar, across the site | 488 kB (JPEG)       | 269 kB (WebP, −44%)                                    |
| Leaflet                               | in the HTML, always | separate chunk, only on `/contact`, only after a click |
| Session deck                          | in the HTML, always | separate chunk, only on `/programs`                    |

The fonts are subset to the 199 characters the site can actually render. The
variable axes stay because the design sets `font-stretch: 88–94%`.

Largest Contentful Paint is a text element gated by the font swap, so the font
size mattered: subsetting took LCP from 2.9 s to 2.3 s on the new build.
`font-display: optional` scored the same and was rejected, because it would risk
showing the fallback font for an entire first view on a slow connection — a bad
trade for a site whose typography _is_ the design.

The original's LCP of 4.9 s has a different cause: the hero screenshot is a
127 kB JPEG with no dimensions, no lazy loading and nothing reserving its space.

## 6. Two bugs the rewrite surfaced

Worth recording, because both are the kind that ship silently.

**The language switcher did nothing on the home page.** `localePath` returned
`/it/`, but SSX builds a localised root as the bare prefix, so the router
registered the route as `/it`. The router calls `preventDefault()` on every
same-origin click _before_ it looks for a route, so a link to a path it has no
route for is not a 404 — it is a link that silently does nothing. Three links were
affected: the switcher and the Italian "Home" in the nav and the footer.

**Every external link in the Italian footer was mangled** into
`/ithttps://linkedin.com/…`. The footer's links come from shared data, and
`localePath` was prefixing absolute URLs. LinkedIn, GitHub, Capire l'IA, Freedom v2
and the OSF pre-registration were all dead on the Italian site.

`verify.mjs` now checks every internal href against the route list and fails on
any image that decodes to nothing. Reverting the one-character fix makes it
report the dead switcher again, so the guard is not decorative.

## 7. Maintainability

The original repeated the same markup eight times: the session deck inlined in
two files, the whole site duplicated between English and Italian, the design
system as 34 kB of hand-compressed CSS. Adding a talk meant editing the data
array, a nav link, a timeline entry and a footer column in two files.

Now: words live in `src/locales/{en,it}.js` in the same shape, read side by side
so a key added to one and forgotten in the other is visible in review. Data lives
in `src/data/` with shared facts at the top and one text block per language. One
component, themed with tokens, used by sixteen documents. The verification suite
runs 32 route-and-theme combinations plus mobile, no-JS and client-side routing.

---

## What we gave up

A rewrite that only lists wins is not a document anyone should trust.

- **Self-containment.** The original was two files and a folder of images you
  could hand to someone and they would work. The current site is a build with a
  dependency tree, and most of its size wins only exist because they are
  committed — the build contributes 57 kB of the 548 kB. That is a real cost.
- **The original had no build step and no build to break.** The current one has an
  SSX incremental cache that only hashes `entities.js`, so a change to a type or a
  page is silently skipped unless the build is forced. This bit us during the
  build — a template change failed to render every page and the build still
  printed a success line from the bundler — and is written up in `AGENTS.md`.
- **More machinery for the same job.** 70 kB of JavaScript where the original had
  none on the critical path, a client router, and a component system. The bill
  comes to roughly zero on the home page and is worth paying for the no-JS path
  and the real URLs, but it is not free.
- **The deck and the guide are still English documents on both paths.** That is a
  deliberate decision, not an oversight: translating the cohort material is a
  separate call.

## Still open

- No `og:image`, so a shared link has no visual preview.
- `head` in `site.config.js` is emitted twice by SSX's layout, so the hreflang
  alternates and the JSON-LD block each appear twice. Harmless for identical
  copies, but it is why there is no canonical link.
- Render-blocking CSS and unused CSS are still flagged. Neither carries score
  weight, and inlining critical CSS is a genuine regression risk.
- The image optimizer runs at `quality: 100`, and neither version uses `srcset`,
  so a phone downloads desktop-sized screenshots.
- No `canonical` link, so the `/it` and `/programs/session` duplicates are not
  consolidated for a crawler.

## How to re-measure

The original needs the `img/` directory alongside it, or the page weights are
meaningless — measured without images it scored 76 rather than 56, which is the
whole gap between the two columns in section 4.

```bash
# the original, complete
cp -R ambradan.github.io-main/img /tmp/orig/
mkdir -p /tmp/orig/it
cp ambradan.github.io-main/index.html /tmp/orig/
cp ambradan.github.io-main/it/index.it.html /tmp/orig/it/index.html
npx serve /tmp/orig -l 3333

# the current build
npm run build && npx serve dist -l 3222
```

Lighthouse, on both:

```bash
npx lighthouse http://localhost:3333/ --output=json --output-path=orig.json \
  --only-categories=performance,accessibility,best-practices,seo
npx lighthouse http://localhost:3222/ --output=json --output-path=new.json \
  --only-categories=performance,accessibility,best-practices,seo
```

To check what the build actually does to an image, drop a file into `public/img`,
build, and compare:

```bash
cp some.jpg public/img/zz-probe.jpg
npm run build
stat -f%z public/img/zz-probe.jpg dist/img/zz-probe.jpg
```

The project's own suites cover the rest — CLS, the no-JS case, mobile,
client-side routing, broken links and images:

```bash
BASE=http://localhost:3222 npm run verify
BASE=http://localhost:3222 npm run verify:responsive
node scripts/measure-cls.mjs / /research /contact /it
node scripts/measure-perf.mjs / /contact
```
