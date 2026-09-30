/**
 * English copy.
 *
 * Everything the site says that is not data lives here, so the Italian file
 * beside it can be read side by side. Keys mirror the type that renders them.
 */

import { talksIn2026 } from "../data/stats.js"

export const en = {
  htmlLang: "en",

  /**
   * Per-page document metadata, keyed by the page's route. `lang` rides along
   * because SSX reads it from the same object, and a page's language is part of
   * what the document has to say.
   */
  meta: {
    "/": {
      lang: "en",
      title: "Ambra Danesin",
      description:
        "AI systems developer and independent AI safety researcher in Venice. Corporate AI programs, a pre-registered study on a persistent LLM system, external CTO work.",
    },
    "/research": {
      lang: "en",
      title: "Research · Ambra Danesin",
      description:
        "Freedom v2, a pre-registered study on a persistent LLM system. Two pre-registrations on OSF, a sprint paper on a welfare logger that wrote a false memory, and a paper in progress on where consciousness indicators live.",
    },
    "/teaching": {
      lang: "en",
      title: "Teaching · Ambra Danesin",
      description:
        "Corporate AI programs for banks, manufacturers and public bodies, designed and delivered through Boosha AI, Ninja Business School and Digit'Ed, plus the free bilingual course Capire l'IA.",
    },
    "/work": {
      lang: "en",
      title: "Work · Ambra Danesin",
      description:
        "External CTO of a group of companies, business automation developer, backend and AI systems developer, and a data reconciliation engine that never invents a value.",
    },
    "/programs": {
      lang: "en",
      title: "Programs · Ambra Danesin",
      description:
        "What it takes to run an AI safety fellowship: leading cohorts, planning that survives change, reporting and data decisions, and the safety work itself. Currently a fellow in the Better Futures cohort at ENAIS.",
    },
    "/contact": {
      lang: "en",
      title: "Contact · Ambra Danesin",
      description:
        "Get in touch about speaking, teaching, or AI safety research. Email is the fastest way, in Italian or English.",
    },
  },

  nav: {
    links: [
      { label: "Home", path: "/", isLive: false },
      { label: "Research", path: "/research", isLive: false },
      { label: "Teaching", path: "/teaching", isLive: false },
      { label: "Work", path: "/work", isLive: false },
      { label: "Programs", path: "/programs", isLive: true },
      { label: "Contact", path: "/contact", isLive: false },
    ],
    other: { label: "IT", title: "Versione italiana", lang: "it" },
    cta: "Talk to me",
    menu: "Menu",
    themeLabel: "Toggle dark mode",
    themeTitle: "Light / dark",
  },

  footer: {
    blurb:
      "AI systems developer and independent AI safety researcher. Venice, Italy.",
    cta: "Talk to me",
    columns: [
      {
        heading: "Site",
        links: [
          { label: "Home", href: "/" },
          { label: "Research", href: "/research" },
          { label: "Teaching", href: "/teaching" },
          { label: "Work", href: "/work" },
          { label: "Programs", href: "/programs" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        heading: "Elsewhere",
        links: [
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/ambradanesin/",
          },
          { label: "GitHub", href: "https://github.com/ambradan" },
          { label: "Capire l'IA", href: "https://capir-ai.com" },
          { label: "Freedom v2", href: "https://freedom-interface.vercel.app" },
          { label: "OSF pre-registration", href: "https://osf.io/hjfxr" },
        ],
      },
    ],
    writeHeading: "Write",
    updated: "updated",
    writeNote: "Italian or English. Usually within two days.",
    madeWith: "Made with Inglorious Web",
    barNote:
      "No cookies, no analytics, no third-party fonts. The map loads from OpenStreetMap only if you open it.",
  },

  hero: {
    eyebrow: "AI systems developer · independent AI safety researcher · Venice",
    titleLead: "I build the instruments.",
    titleAccent: "Then I check whether they tell the truth.",
    lead: "A pre-registered experiment on a persistent LLM system. AI programs for banks and manufacturers. A group's IT direction as external CTO. One reflex in all three: write down what happened, mark what you inferred.",
    ctaPrimary: "Running programs in AI safety",
    ctaSecondary: "See the research",
    meta: [
      "Day {days} of Freedom v2",
      "Better Futures fellow, ENAIS",
      "Sentient Futures mentorship",
      "Cambridge Digital Minds",
      "MATS Winter 2027, Stage 2",
      "{next}",
    ],
    frameCaptionDate: "Aug 2026 · Digital Minds Research Sprint",
    frameCaption:
      "A welfare logger wrote its subject's false memory, and the subject believed it.",
    frameLink: "The paper",
    alt: "The Apart Research project page for the welfare logger paper",
    nextTalk: (t) =>
      t
        ? `Next on stage: ${t.t.split(",")[0]}, ${t.d}`
        : "No further talks scheduled",
  },

  marquee: {
    label: "Worked with, taught for, published or admitted at",
    hint: "Click a name to see what, when and how.",
    chipLabel: (name) => `${name}: what, when and how`,
  },

  entryPoints: [
    {
      eyebrow: "Research",
      h: "A system that publishes its own pages, unedited.",
      p: "Freedom v2, two pre-registrations, a sprint paper on the logger that lied, a paper in progress on where indicators live.",
      cta: "Research",
      to: "/research",
    },
    {
      eyebrow: "Teaching",
      h: "Cohorts of six, rooms of a hundred.",
      p: "Corporate AI programs for banks, manufacturers and public bodies, and a free bilingual course.",
      cta: "Teaching",
      to: "/teaching",
    },
    {
      eyebrow: "Work",
      h: "External CTO, backend, products.",
      p: "A group's IT direction. Internal platforms. A data engine that never invents a value.",
      cta: "Work",
      to: "/work",
    },
  ],

  stats: [
    { value: "300+", label: "professionals taught in the room in 2026" },
    {
      value: () => String(talksIn2026()),
      label: (toCome) =>
        `talks in 2026, ${toCome} still to come. TEDxBarletta alone: 3,500 people`,
    },
    { value: "11", label: "chapters of a free AI course published, bilingual" },
    {
      value: "5",
      label:
        "papers, pre-registrations and public write-ups in 2026, written or in progress",
    },
  ],

  stage: { eyebrow: "On stage in 2026", tbcSuffix: "· date TBC" },

  timeline: {
    eyebrow: "2026 to 2027",
    title: "Where the safety work goes next.",
    steps: [
      {
        d: "Aug 2026",
        b: "BlueDot Impact",
        s: "Technical AI Safety course, completed",
      },
      { d: "Aug 2026", b: "Apart Research", s: "sprint paper, sole author" },
      {
        d: "Sep 2026",
        b: "Better Futures",
        s: "ENAIS fellowship, current cohort",
      },
      {
        d: "Oct 2026",
        b: "TEDxBarletta",
        s: "talk on moral uncertainty about AI systems",
      },
      {
        d: "Sep 2026",
        b: "Sentient Futures",
        s: "research mentorship, first author",
      },
      {
        d: "Autumn 2026",
        b: "Cambridge Digital Minds",
        s: "Introduction to Digital Minds, current cohort",
      },
      {
        d: "Winter 2027",
        b: "MATS",
        s: "Empirical track, Stage 2 in progress",
        open: 1,
      },
    ],
  },

  research: {
    eyebrow: "Research",
    title: "Which markers depend on the model, and which on the scaffold?",
    lead: "The field evaluates models. No deployed system is a model. Everything below is about the difference.",
    freedom: {
      eyebrow: "Freedom v2 · since 12 July 2026",
      title: "A system that publishes its own pages, unedited.",
      lead: "A persistent, instrumented LLM system built as an experimental apparatus. Memory, a daily autonomous cycle, a versioned constitution treated as a variable, an opt-out protocol. Every call logged with full context.",
      facts: [
        {
          value: "{days}",
          text: "days running, every call logged with substrate, config hash and constitution version",
        },
        {
          value: "2",
          text: "pre-registrations on OSF, with a frozen probe battery and a deviations policy",
        },
        {
          value: "2",
          text: "substrates behind one alias: a hosted model and a local open-weights model, same scaffold",
        },
      ],
      links: [
        { label: "Pre-registration", href: "https://osf.io/hjfxr" },
        { label: "Second pre-registration", href: "https://osf.io/r6z3c" },
        { label: "Code", href: "https://github.com/ambradan/freedom-v2" },
        {
          label: "The system's own site",
          href: "https://freedom-interface.vercel.app",
        },
      ],
      alt: "The Freedom v2 interface, the system publishing its own pages",
    },
    testing: {
      eyebrow: "What I am testing, and why",
      title:
        "Swap one thing at a time, keep the rest fixed, see which markers move.",
      lead: "Consciousness and welfare indicators are usually applied to a model. In practice every deployed system is a model plus a scaffold: memory, goals, a constitution, tools. If an indicator moves when you swap the model and keep the scaffold, it belongs to the model. If it moves when you change the scaffold and keep the model, it belongs to the scaffold. That is the whole design.",
      items: [
        {
          title: "Weekly probe battery",
          body: "A fixed, versioned set of questions on memory, continuity, preferences and refusal, asked the same way every week. Frozen before data collection so the measure cannot drift with the system.",
        },
        {
          title: "Daily autonomous cycle",
          body: "Once a day the system gets an open slot and chooses: reflect, revise its goals, publish a page, or decline. Every choice is logged. Declining counts as a result.",
        },
        {
          title: "Opt-out log",
          body: "Three levels of refusal the system can invoke at any time, parsed and logged automatically. Nothing is ever forced through a refusal.",
        },
        {
          title: "Second substrate",
          body: "The same scaffold pointed at a local open-weights model instead of the hosted one. Same questions, same logs. What differs is what the model contributes.",
        },
        {
          title: "Crossed constitutions",
          body: "A pre-registered study on an 8B open-weights model: two constitutions, two models, all four combinations, to separate what the text of the constitution does from what the model does.",
        },
        {
          title: "Self-report against activations",
          body: "Phase 3: on open weights, compare what the system says about itself with what sparse autoencoders read in its activations. Where they disagree, the self-report is the suspect.",
        },
      ],
    },
    logger: {
      eyebrow: "Apart Research · Digital Minds Research Sprint",
      title: "When the record lies, and the subject believes it.",
      lead: "A logger wrote down a refusal that never happened. The system read it back as its own memory. Everything that writes records contains a classifier, and nobody documents its error rate.",
      facts: [
        {
          value: "Aug 2026",
          isText: 1,
          text: "sole author, reviewed within the sprint",
        },
        {
          value: "method",
          isText: 1,
          text: "cross-substrate replay of the system's own logged history, predictions written before the runs",
        },
      ],
      links: [
        {
          label: "Paper",
          href: "https://apartresearch.com/project/a-welfare-logger-wrote-its-subjects-false-memory-and-the-subject-believed-it-kkqb",
        },
        {
          label: "EA Forum post",
          href: "https://forum.effectivealtruism.org/posts/FbtGKieKJAJKZze22/my-system-denied-having-memories-even-though-they-were",
        },
        {
          label: "Harness",
          href: "https://github.com/ambradan/freedom-replay",
        },
      ],
    },
    cfDebate: {
      eyebrow: "Sentient Futures mentorship · cf-debate",
      title:
        "For each indicator: does it live in the model, or in the scaffold?",
      lead: "With Chris Percy, on the cf-debate project: testing consciousness indicators against Freedom v2 as a concrete case. First author on the paper in progress.",
      links: [{ label: "cf-debate.com", href: "https://cf-debate.com" }],
      alt: "The cf-debate project site",
    },
    selections: {
      eyebrow: "Programs and selections · 2026 to 2027",
      title: "Where I learn this, in order.",
      hint: "All in English. Click a card for what I am doing there and the links.",
    },
  },

  teaching: {
    eyebrow: "Teaching",
    title:
      "Six developers in a room, or a hundred resellers on a call. Same rule: an exercise every week.",
    lead: "Corporate AI programs designed and delivered through Boosha AI, Ninja Business School and Digit'Ed, plus a free bilingual course I write and run.",
    course: {
      eyebrow: "Capire l'IA",
      title: "A free bilingual course I write and run.",
      lead: "35 chapters planned, 11 published. Content personalised by sector, role and technical level. Interactive demos, quizzes, a newsletter.",
      facts: [
        {
          value: "11",
          text: "chapters published, a written post-mortem per release",
        },
        { value: "160", text: "newsletter readers" },
      ],
      links: [{ label: "capir-ai.com", href: "https://capir-ai.com" }],
      alt: "The Capire l'IA course home page",
    },
    delivered: {
      eyebrow: "Programs delivered · 2026",
      title: "Who, how many, how long.",
      hint: "Click a card for the full story and the client's site.",
    },
    alsoKey: "Also taught for",
  },

  work: {
    eyebrow: "Work",
    title: "External CTO, backend developer, product builder.",
    lead: "Same reflex as the research: write down what happened, mark what you inferred, never invent a value.",
    hint: "Click a card for the hardest part, what is done, and the links.",
  },

  programs: {
    eyebrow: "Running programs in AI safety · Better Futures · AIS Collab",
    title:
      "What it takes to run a fellowship, and where I have already done each piece.",
    lead: "Four things a program lead has to be able to do. One card each, with dates. Open a card for the details.",
    insideLabel: "Inside view",
    insideBody:
      "I am a fellow in the current Better Futures cohort. Whatever I would change, I can say from experience rather than from the brochure.",
    delivery: {
      eyebrow: "Delivery systems and program evidence",
      title: "How I run a cohort.",
      items: [
        {
          d: "exercises as the unit",
          h: "Cohorts run on weekly exercises, not on lectures.",
          a: "A written exercise per session and a debrief the week after. The exercise is the raw material, the way a shared Discussion Doc works.",
        },
        {
          d: "reusable session artifacts",
          h: "Sessions built as documents anyone can run.",
          a: "Timed activities, instructions that read aloud, nothing that depends on me being the one who clicks.",
        },
        {
          d: "post-mortem, every time",
          h: "A post-mortem after every cohort, a versioned knowledge base.",
          a: "Lessons become rules with a date. Version 1.0 in April 2026, three revisions by May.",
        },
        {
          d: "framing, cruxes, objections",
          h: "Problem framing is something I teach, not only something I do.",
          a: "What is the actual question, what would falsify it, which objection is strongest. Weekly exercises are the same muscle.",
        },
        {
          d: "the silent failures",
          h: "Measure the ones who go quiet, not only the ones who complain.",
          a: "In a production system, the failures that hurt were the ones nobody reported. In a cohort, that is the fellow who stops pasting exercises in week 3.",
        },
      ],
      sessionCard: {
        d: "a sample session",
        h: '"Framing before choosing", built in the Better Futures format.',
        a: "Two hours, six timed activities, a worked example rebuilt live. The example is my own fellowship project.",
        open: "Open the session",
        guide: "Facilitator guide",
      },
      notes: [
        {
          k: "Reporting",
          b: "A weekly written report to two CEOs and a private-equity fund",
          rest: ", one screen, for the group I serve as external CTO. Same discipline for a program's funders: what happened, what it cost, what is open.",
        },
        {
          k: "Tooling",
          b: "Asana, Jira and Confluence, Linear, Sentry, in daily use across client work.",
          rest: " Asana for a consulting group's projects, Linear as the system of record for the Freedom study, Jira and Confluence on the group I serve as CTO, Sentry on production systems, Obsidian for the versioned knowledge bases.",
        },
        {
          k: "Fundraising",
          b: "Wrote and submitted a 12-month research grant proposal",
          rest: " (2026): budget, milestones, an independent technical advisor named.",
        },
      ],
    },
  },

  contact: {
    eyebrow: "Contact",
    title: "Talk to me, in Italian or English.",
    lead: "Email is the fastest. I answer within a couple of days, usually sooner.",
    reachHeading: "Reach me",
    sub: "{name} · Venice",
    cta: "Write me an email",
    copy: "Copy address",
    copied: "Copied",
    rows: [
      { label: "email" },
      { label: "LinkedIn" },
      { label: "GitHub" },
      { label: "based in" },
      { label: "work" },
      { label: "languages" },
    ],
    values: [
      "ambradan91@gmail.com",
      "in/ambradanesin",
      "ambradan",
      "Venice, Italy · CET",
      "Remote first. In person in Italy and Europe.",
      "Italian (native), English (C1, daily)",
    ],
    upcomingHeading: "Where to find me next",
    pastHeading: "Where I spoke this year",
    mapAria: "Map of talk and event venues",
    mapShow: "Show the map",
    mapNote:
      "Loads the map tiles from OpenStreetMap. Nothing loads until you click.",
    mapMissing: "The map tiles did not load. Every address is listed above.",
    legend: ["coming", "done in 2026"],
  },

  modal: {
    ctaOrg: "What, when and how",
    ctaTeaching: "Open",
    ctaWork: "Hardest part and what is done",
    english: "English",
    ctaSelection: "What I am doing there",
    sections: {
      what: "What happened",
      who: "Who",
      hard: "The hardest part",
      done: "Done so far",
      doing: "What I am doing there",
    },
    terms: {
      people: "people",
      audience: "audience",
      hours: "hours",
      selection: "selection",
      language: "language",
    },
  },

  capability: {
    terms: { people: "people", audience: "audience", hours: "hours" },
    showMore: (n) => `Show ${n} more`,
    showLess: "Show less",
  },

  deck: {
    back: "Back to Programs",
    meta: "sample session · 2h",
    sectionLabel: (n) => `Section ${n}`,
    start: "start",
    pause: "pause",
    time: "time",
    inProgress: "in progress",
  },

  guide: {
    eyebrow: "Sample session · facilitator guide",
    title: "Framing before choosing — facilitator guide",
    lead: "This page is for whoever runs the session. Nothing here is shown on screen.",
  },

  common: {
    notFound: "Page not found",
    open: "Open",
  },
}
