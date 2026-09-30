/** @type {import("@inglorious/ssx").SiteConfig} */
export default {
  title: "Ambra Danesin",
  favicon:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%232B5BFF'/%3E%3Ctext x='32' y='44' text-anchor='middle' font-family='Archivo,Arial,sans-serif' font-weight='800' font-size='36' fill='white'%3EA%3C/text%3E%3C/svg%3E",
  meta: {
    description:
      "AI systems developer and independent AI safety researcher in Venice. Corporate AI programs, a pre-registered study on a persistent LLM system, external CTO work.",
    viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
    "theme-color": "#2B5BFF",
    "og:title": "Ambra Danesin",
    "og:description":
      "I build the instruments. Then I check whether they tell the truth.",
    "og:type": "website",
    "twitter:card": "summary_large_image",
  },
  lang: "en",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it"],
  },
  /*
   * Emitted by SSX's layout twice, once before and once after the meta block, so
   * everything in here appears twice in the document. Harmless for these: the
   * alternates point at the same targets, the preloads are deduped by the
   * preload scanner, and the inline scripts are idempotent. Keep the list
   * short — anything added here is duplicated.
   */
  head: `
    <link rel="alternate" hreflang="en" href="https://ambradan.github.io/">
    <link rel="alternate" hreflang="it" href="https://ambradan.github.io/it">
    <link rel="alternate" hreflang="x-default" href="https://ambradan.github.io/">
    <link rel="preload" href="/img/archivo-var.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/img/jetbrains-mono-var.woff2" as="font" type="font/woff2" crossorigin>
    <script type="application/ld+json">
      ${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Ambra Danesin",
        url: "https://ambradan.github.io/",
        email: "mailto:ambradan91@gmail.com",
        jobTitle: "AI systems developer and independent AI safety researcher",
        description:
          "AI systems developer and independent AI safety researcher in Venice. Pre-registered study on a persistent LLM system, corporate AI programs, external CTO work.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Venice",
          addressCountry: "IT",
        },
        knowsLanguage: ["it", "en"],
        sameAs: [
          "https://www.linkedin.com/in/ambradanesin/",
          "https://github.com/ambradan",
        ],
        worksFor: {
          "@type": "Organization",
          name: "ENAIS",
        },
      })}
    </script>
    <script>
      /*
       * Applied before first paint so a reader on a dark system never sees a
       * white flash. The store's Theme type reads the same two sources, so the
       * toggle and the screen cannot disagree.
       */
      (function () {
        var root = document.documentElement
        /*
         * Reveal-on-scroll hides elements until they are observed. Gating that
         * on this class means a reader without scripting still sees the page.
         */
        root.classList.add("ambra-js")

        var mode
        try {
          mode = localStorage.getItem("ambra-theme")
        } catch (e) {}
        if (mode !== "light" && mode !== "dark") {
          mode = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
        }
        root.classList.add("iw-theme-ambra")
        root.classList.add(mode === "dark" ? "iw-theme-dark" : "iw-theme-light")
      })()
    </script>
  `,
  sitemap: {
    hostname: "https://ambradan.github.io",
  },
  /*
   * The built page carries a stylesheet link, so the CSS has to exist as a file
   * with a stable name. Left to default, Vite splits the CSS across the route
   * chunks and emits no link at all: every page would arrive unstyled and only
   * pick up its appearance when the client bundle ran, which is both a large
   * layout shift and a page that cannot be read without JavaScript.
   *
   * One file, named here, and linked from every page. It is small enough that
   * loading all of it everywhere is cheaper than a second round trip.
   */
  styles: ["/style.css"],

  vite: {
    // `PORT=3111 npm run dev` moves the dev server. The CLI flag does not:
    // the port SSX binds is the one Vite is configured with.
    server: { port: Number(process.env.PORT) || 3000 },

    build: {
      /*
       * One stylesheet rather than one per route chunk, so the name in
       * `styles` above is the only name the document has to name.
       */
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          /*
           * SSX's default sends every dependency to one `lib` chunk, which
           * pulls Leaflet and the Markdown toolchain into the bundle of every
           * page — including the ones that never open a map or show a guide.
           *
           * Only the runtime framework is grouped. `@inglorious/ssx` is left
           * out on purpose: it is a build-time package, and its markdown entry
           * point statically pulls in markdown-it, KaTeX and highlight.js,
           * which Rollup would then absorb into this chunk.
           */
          manualChunks(id) {
            if (
              /node_modules\/(lit-html|@lit|@lit-labs|@inglorious\/(web|store|ui|utils))\//.test(
                id,
              )
            ) {
              return "lib"
            }
          },
        },
      },
    },
  },
}
