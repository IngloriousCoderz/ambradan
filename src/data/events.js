/**
 * Venues and dates, in both languages.
 *
 * Coordinates and sortable dates are facts and sit at the top level of an
 * entry, because the map and the "what is still to come" count read them
 * directly. The label, the city and the description are read by a person, so
 * they are translated.
 *
 * @typedef {object} EventText
 * @property {string} d Date as shown.
 * @property {string} t What.
 * @property {string} [city] City, where relevant.
 * @property {string} s Detail.
 *
 * @typedef {object} Event
 * @property {string} [lat] Latitude, for the map. Absent means online.
 * @property {number} [lng] Longitude, for the map.
 * @property {1} [talk] Counts towards the talks-in-2026 statistic.
 * @property {string} [iso] Sortable date, for what is still to come.
 * @property {1} [tbc] Date being confirmed.
 * @property {1} [base] The base city, rather than a venue.
 * @property {EventText} en
 * @property {EventText} it
 */

/** Upcoming and ongoing. @type {Event[]} */
export const EVENTS = [
  {
    id: "nebulab",
    lat: 45.4636,
    lng: 9.1782,
    talk: 1,
    iso: "2026-10-08",
    en: {
      d: "8 Oct 2026",
      t: "Nebulab, Commerce Symposium: Merchant and the Machine",
      city: "Milan",
      s: "Spazio Pio XI, Milan, 17:30. Talk. In person.",
    },
    it: {
      d: "8 ott 2026",
      t: "Nebulab, Commerce Symposium: Merchant and the Machine",
      city: "Milano",
      s: "Spazio Pio XI, Milano, 17:30. Talk. In presenza.",
    },
  },
  {
    id: "while-true",
    lat: null,
    talk: 1,
    iso: "2026-10-14",
    en: {
      d: "14 Oct 2026",
      t: "While True, IT recruiting webinar",
      city: "Online",
      s: '"Stack, projects, GitHub: what to really tell an IT recruiter". Online, 14:30.',
    },
    it: {
      d: "14 ott 2026",
      t: "While True, webinar sul recruiting IT",
      city: "Online",
      s: '"Stack, progetti, GitHub: cosa dire davvero a un recruiter IT". Online, 14:30.',
    },
  },
  {
    id: "tedx",
    lat: 41.319,
    lng: 16.283,
    talk: 1,
    iso: "2026-10-16",
    en: {
      d: "16-17 Oct 2026",
      t: "TEDxBarletta",
      city: "Barletta",
      s: 'Teatro Curci, Barletta. Theme "Supernova", about 3,500 people. In person.',
    },
    it: {
      d: "16-17 ott 2026",
      t: "TEDxBarletta",
      city: "Barletta",
      s: 'Teatro Curci, Barletta. Tema "Supernova", circa 3.500 persone. In presenza.',
    },
  },
  {
    id: "fastweb",
    lat: 45.4553,
    lng: 9.2085,
    en: {
      d: "22-23 Oct 2026",
      t: "FastwebAI Hackathon, Agent Forge h24",
      s: "Fastweb NeXXt, Milan. 24 hours in person, agentic AI. Selected participant.",
    },
    it: {
      d: "22-23 ott 2026",
      t: "FastwebAI Hackathon, Agent Forge h24",
      s: "Fastweb NeXXt, Milano. 24 ore in presenza, AI agentica. Selezionata.",
    },
  },
  {
    id: "venice-ai-expo",
    lat: 45.4408,
    lng: 12.3155,
    talk: 1,
    iso: "2026-11-15",
    tbc: 1,
    en: {
      d: "Nov 2026",
      t: "Venice AI Expo",
      city: "Venice",
      s: "Complex systems and the perception of empathy: effects on society, manipulation risks. Talk. Date being confirmed.",
    },
    it: {
      d: "nov 2026",
      t: "Venice AI Expo",
      city: "Venezia",
      s: "Sistemi complessi e percezione di empatia: effetti sulla società, rischi di manipolazione. Talk. Data in definizione.",
    },
  },
  {
    id: "telesveva",
    lat: 41.2266,
    lng: 16.2954,
    talk: 1,
    iso: "2026-12-31",
    tbc: 1,
    en: {
      d: "date TBC",
      t: "Telesveva, TV interview on AI",
      city: "TV",
      s: "Channel 18, Puglia and Basilicata. Date being confirmed.",
    },
    it: {
      d: "data da confermare",
      t: "Telesveva, intervista TV sull'AI",
      city: "TV",
      s: "Canale 18, Puglia e Basilicata. Data in definizione.",
    },
  },
  {
    id: "enais",
    lat: null,
    en: {
      d: "Mondays to 26 Oct",
      t: "Better Futures Fellowship, Group 2",
      s: "ENAIS / AI Safety Collab, online. Current cohort.",
    },
    it: {
      d: "i lunedì fino al 26 ott",
      t: "Better Futures Fellowship, gruppo 2",
      s: "ENAIS / AI Safety Collab, online. Coorte in corso.",
    },
  },
  {
    id: "intesa",
    lat: null,
    en: {
      d: "Sep to Nov 2026",
      t: "Intesa Sanpaolo, Design & structured thinking",
      s: "Five sessions, online. Closed program.",
    },
    it: {
      d: "set-nov 2026",
      t: "Intesa Sanpaolo, Design & structured thinking",
      s: "Cinque sessioni, online. Programma chiuso.",
    },
  },
  {
    id: "cambridge-digital-minds",
    lat: null,
    en: {
      d: "Autumn 2026",
      t: "Cambridge Digital Minds",
      s: "Introduction to Digital Minds, online cohort.",
    },
    it: {
      d: "autunno 2026",
      t: "Cambridge Digital Minds",
      s: "Introduction to Digital Minds, coorte online.",
    },
  },
  {
    id: "venice",
    lat: 45.4408,
    lng: 12.3155,
    base: true,
    en: {
      d: "by invitation",
      t: "Venice",
      s: "Where I am based. Rome, Milan and Bologna regularly.",
    },
    it: {
      d: "su invito",
      t: "Venezia",
      s: "Dove sono di base. Roma, Milano e Bologna con regolarità.",
    },
  },
]

/** Already delivered in 2026. @type {Event[]} */
export const PAST_TALKS = [
  {
    id: "casa-sanremo",
    lat: 43.8167,
    lng: 7.7761,
    iso: "2026-02-24",
    en: {
      d: "Feb 2026",
      t: "Casa Sanremo Invest",
      city: "Sanremo",
      s: "Palafiori, Sanremo. Finance and crypto audience.",
    },
    it: {
      d: "feb 2026",
      t: "Casa Sanremo Invest",
      city: "Sanremo",
      s: "Palafiori, Sanremo. Pubblico di finanza e crypto.",
    },
  },
  {
    id: "digitexport",
    lat: 44.8381,
    lng: 11.6198,
    iso: "2026-04-14",
    en: {
      d: "Apr 2026",
      t: "DigIT Export Day, Promos Italia",
      city: "Ferrara",
      s: "Ferrara. Talk plus export AI lab.",
    },
    it: {
      d: "apr 2026",
      t: "DigIT Export Day, Promos Italia",
      city: "Ferrara",
      s: "Ferrara. Talk più laboratorio AI per l'export.",
    },
  },
  {
    id: "finlogic",
    lat: 44.4695,
    lng: 11.4066,
    iso: "2026-05-14",
    en: {
      d: "May 2026",
      t: "Finlogic, Accademia 2026",
      city: "Bologna",
      s: "Bologna. Talk and closing round table.",
    },
    it: {
      d: "mag 2026",
      t: "Finlogic, Accademia 2026",
      city: "Bologna",
      s: "Bologna. Talk e tavola rotonda di chiusura.",
    },
  },
  {
    id: "lugano",
    lat: 46.0037,
    lng: 8.9511,
    iso: "2026-09-08",
    en: {
      d: "Sep 2026",
      t: "Città di Lugano",
      city: "Lugano",
      s: 'Lugano. "When we no longer know whom to trust".',
    },
    it: {
      d: "set 2026",
      t: "Città di Lugano",
      city: "Lugano",
      s: 'Lugano. "Quando non sappiamo più di chi fidarci".',
    },
  },
]
