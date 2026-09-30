/**
 * A program, in both languages. The client's site is a fact and sits at the top
 * level; everything a reader sees is translated.
 *
 * @typedef {object} ProgramText
 * @property {string} org
 * @property {string} title
 * @property {string} when
 * @property {string} people How many people.
 * @property {string} target Audience.
 * @property {string} hours Length.
 * @property {string[]} tags
 * @property {string} body
 *
 * @typedef {object} Program
 * @property {string} id Stable lowercase key.
 * @property {string} [link] Client's site.
 * @property {ProgramText} en
 * @property {ProgramText} it
 */

/** @type {Program[]} */
export const TEACHING = [
  {
    id: "intesa-design",
    link: "https://www.intesasanpaolo.com",
    en: {
      hours: "5 sessions",
      target: "senior IT architects",
      people: "two editions",
      org: "Intesa Sanpaolo",
      title: "Design & structured thinking for IT architects",
      when: "Sep to Nov 2026",
      tags: [
        "problem framing",
        "architecture design",
        "decision making",
        "AI for design",
      ],
      body: "Five three-hour sessions on Teams, two editions, closing with a design challenge on a client-area platform with AI features. Session 1 is problem framing with a canvas the participants reuse in every later session.",
    },
    it: {
      hours: "5 sessioni",
      target: "architetti IT senior",
      people: "due edizioni",
      org: "Intesa Sanpaolo",
      title: "Design & structured thinking per architetti IT",
      when: "set-nov 2026",
      tags: [
        "problem framing",
        "progettazione di architetture",
        "decisioni",
        "AI per il design",
      ],
      body: "Cinque sessioni da tre ore su Teams, due edizioni, chiusura con una design challenge su una piattaforma di area clienti con funzioni AI. La sessione 1 è problem framing con un canvas che i partecipanti riusano in tutte le sessioni successive.",
    },
  },
  {
    id: "intesa-financial-communication",
    link: "https://www.intesasanpaolo.com",
    en: {
      hours: "24h",
      target: "Investor Relations function",
      people: "two cohorts",
      org: "Intesa Sanpaolo",
      title: "AI for financial communication",
      when: "Feb to Mar, Sep to Oct 2026",
      tags: ["generative AI", "financial communication", "investor relations"],
      body: "Four modules, two editions, built on a quarterly release and earnings call as the case study. Replica in autumn with a different audience.",
    },
    it: {
      hours: "24h",
      target: "funzione Investor Relations",
      people: "due coorti",
      org: "Intesa Sanpaolo",
      title: "AI per la comunicazione finanziaria",
      when: "feb-mar e set-ott 2026",
      tags: [
        "AI generativa",
        "comunicazione finanziaria",
        "investor relations",
      ],
      body: "Quattro moduli, due edizioni, costruiti su una trimestrale e sulla relativa earnings call come caso di studio. Replica in autunno con un pubblico diverso.",
    },
  },
  {
    id: "cvr-officina",
    en: {
      hours: "4 sessions",
      target: "family businesses across generations",
      people: "about 100 resellers + consultants",
      org: "CVR",
      title: "L'Officina delle Competenze",
      when: "Apr to Jul 2026",
      tags: ["AI literacy", "sales", "resellers", "two audiences"],
      body: "One program, two audiences. Consultants in April and May, two groups back to back, often joining between site visits: short, dense sessions. Resellers in June and July, about 100 online: demo-first, every use case a real counter situation. Micro-designed in February with the client sponsor, the training partner's lead and the client's product leader.",
    },
    it: {
      hours: "4 sessioni",
      target: "imprese familiari, più generazioni",
      people: "circa 100 rivenditori + consulenti",
      org: "CVR",
      title: "L'Officina delle Competenze",
      when: "apr-lug 2026",
      tags: ["alfabetizzazione AI", "vendite", "rivenditori", "due pubblici"],
      body: "Un programma, due pubblici. Consulenti ad aprile e maggio, due gruppi uno dietro l'altro, spesso collegati tra una visita e l'altra: sessioni corte e dense. Rivenditori a giugno e luglio, circa 100 online: prima la demo, ogni caso d'uso una situazione vera da banco. Microprogettato a febbraio con lo sponsor del cliente, il referente del partner formativo e il responsabile prodotto del cliente.",
    },
  },
  {
    id: "engitel",
    link: "https://www.engitel.com",
    en: {
      hours: "16h",
      target: "developers, mixed levels",
      people: "6",
      org: "Engitel",
      title: "AI Academy: AI engineering and predictive ML",
      when: "Mar 2026",
      tags: ["AI engineering", "predictive ML", ".NET / Azure", "developers"],
      body: "Two modules of eight hours for a digital agency's developers, on their own stack. A co-instructor became unavailable mid-program; I re-planned both modules and delivered the predictive ML part myself. Persistent platform with a live AI box on a fictional museum case.",
    },
    it: {
      hours: "16h",
      target: "sviluppatori, livelli misti",
      people: "6",
      org: "Engitel",
      title: "AI Academy: AI engineering e ML predittivo",
      when: "mar 2026",
      tags: ["AI engineering", "ML predittivo", ".NET / Azure", "sviluppatori"],
      body: "Due moduli da otto ore per gli sviluppatori di un'agenzia digitale, sul loro stack. Un co-docente è diventato indisponibile a metà programma; ho ripianificato entrambi i moduli e tenuto io la parte di ML predittivo. Piattaforma persistente con un box AI dal vivo su un caso museo di fantasia.",
    },
  },
  {
    id: "bper",
    link: "https://www.bper.it",
    en: {
      hours: "3h",
      target: "intermediate banking audience",
      people: "one cohort",
      org: "BPER Banca",
      title: "AI Mastery",
      when: "Jun 2026",
      tags: ["generative AI", "risk", "governance", "banking"],
      body: "How generative AI works, risks in a regulated context, costs and governance, a guided case. Brief clarified with the client before building, not after.",
    },
    it: {
      hours: "3h",
      target: "pubblico bancario intermedio",
      people: "una coorte",
      org: "BPER Banca",
      title: "AI Mastery",
      when: "giu 2026",
      tags: ["AI generativa", "rischio", "governance", "banca"],
      body: "Come funziona l'AI generativa, i rischi in un contesto regolato, costi e governance, un caso guidato. Brief chiarito col cliente prima di costruire, non dopo.",
    },
  },
  {
    id: "italiacamp",
    link: "https://www.italiacamp.com",
    en: {
      hours: "2 sessions",
      target: "five departments",
      people: "37",
      org: "Italiacamp",
      title: "AI Academy",
      when: "Apr 2026",
      tags: ["AI literacy", "cross-department", "in person"],
      body: "One remote session and one in person in Rome, on a persistent platform with a toolkit of 48 techniques the participants kept afterwards.",
    },
    it: {
      hours: "2 sessioni",
      target: "cinque reparti",
      people: "37",
      org: "Italiacamp",
      title: "AI Academy",
      when: "apr 2026",
      tags: ["alfabetizzazione AI", "trasversale ai reparti", "in presenza"],
      body: "Una sessione da remoto e una in presenza a Roma, su una piattaforma persistente con un kit di 48 tecniche che i partecipanti si sono tenuti dopo.",
    },
  },
  {
    id: "scatolificio-medicinese",
    en: {
      hours: "16h + 4h assessment",
      target: "non-technical staff",
      people: "company departments",
      org: "Scatolificio Medicinese",
      title: "AI literacy for company departments",
      when: "2026",
      tags: ["AI literacy", "SME", "certified voucher"],
      body: "Four sessions plus an assessment session under a certified digital voucher scheme, leaving a tool the company kept using after the program.",
    },
    it: {
      hours: "16h + 4h di assessment",
      target: "personale non tecnico",
      people: "reparti aziendali",
      org: "Scatolificio Medicinese",
      title: "Alfabetizzazione AI per i reparti aziendali",
      when: "2026",
      tags: ["alfabetizzazione AI", "PMI", "voucher certificato"],
      body: "Quattro sessioni più una di assessment dentro un voucher digitale certificato, lasciando uno strumento che l'azienda ha continuato a usare dopo il programma.",
    },
  },
  {
    id: "promos-rimini",
    en: {
      hours: "24h",
      target: "professionals",
      people: "one cohort",
      org: "Promos Rimini",
      title: "AI course",
      when: "2026",
      tags: ["AI literacy", "research", "tenders", "LinkedIn"],
      body: "Six four-hour sessions, hybrid, co-taught with alternating instructors. Live exercise on a real public tender.",
    },
    it: {
      hours: "24h",
      target: "professionisti",
      people: "una coorte",
      org: "Promos Rimini",
      title: "Corso AI",
      when: "2026",
      tags: ["alfabetizzazione AI", "ricerca", "bandi", "LinkedIn"],
      body: "Sei sessioni da quattro ore, ibride, in co-docenza a docenti alternati. Esercizio dal vivo su un bando pubblico vero.",
    },
  },
  {
    id: "farlastrada",
    en: {
      hours: "3h + mentoring",
      target: "a multi-title B2B publisher",
      people: "editorial team",
      org: "Farlastrada",
      title: "AI for media, content, social and video",
      when: "2026",
      tags: ["publishing", "editorial pipeline", "transcription"],
      body: "Prompt structures, a cross-channel pipeline from article to newsletter to carousel on their own material, transcription and automation. Entry assessment before, mentoring after.",
    },
    it: {
      hours: "3h + mentoring",
      target: "un editore B2B multi-testata",
      people: "redazione",
      org: "Farlastrada",
      title: "AI per media, contenuti, social e video",
      when: "2026",
      tags: ["editoria", "pipeline editoriale", "trascrizione"],
      body: "Strutture di prompt, una pipeline cross-canale da articolo a newsletter a carosello sul loro materiale, trascrizione e automazione. Assessment d'ingresso prima, mentoring dopo.",
    },
  },
]

/**
 * Also taught for: a `[name, detail]` pair per language.
 *
 * @typedef {object} AlsoTaught
 * @property {string} id Stable lowercase key.
 * @property {[string, string]} en Name and detail.
 * @property {[string, string]} it Name and detail.
 */

/** @type {AlsoTaught[]} */
export const ALSO_TAUGHT = [
  {
    id: "cdo-bergamo",
    en: [
      "CDO Bergamo",
      "AI applied to corporate finance, on anonymised banking data",
    ],
    it: [
      "CDO Bergamo",
      "AI applicata alla finanza d'impresa, su dati bancari anonimizzati",
    ],
  },
  {
    id: "puglia-creativa",
    en: [
      "Puglia Creativa / CETMA",
      "AI and management for cultural enterprises",
    ],
    it: ["Puglia Creativa / CETMA", "AI e management per le imprese culturali"],
  },
  {
    id: "finlogic",
    en: ["Finlogic", '"From zero to AI", Accademia 2026'],
    it: ["Finlogic", '"Da zero all\'AI", Accademia 2026'],
  },
  {
    id: "digit-export-day",
    en: ["DigIT Export Day", "talk and export AI lab, Promos Italia"],
    it: [
      "DigIT Export Day",
      "talk e laboratorio AI per l'export, Promos Italia",
    ],
  },
  {
    id: "elti",
    en: ["ELTI", "internal AI training for a company team, Rome"],
    it: ["ELTI", "formazione AI interna per un team aziendale, Roma"],
  },
]
