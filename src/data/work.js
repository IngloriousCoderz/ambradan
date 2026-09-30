/**
 * An engagement, in both languages. Stack and dates are translated because
 * they are read; the client's site is not.
 *
 * @typedef {object} EngagementText
 * @property {string} org
 * @property {string} title
 * @property {string} when
 * @property {string[]} tags
 * @property {string} hard The hardest part of the engagement.
 * @property {string[]} done What is done.
 *
 * @typedef {object} Engagement
 * @property {string} id
 * @property {string} [link] Client's site.
 * @property {EngagementText} en
 * @property {EngagementText} it
 */

/** @type {Engagement[]} */
export const WORK = [
  {
    id: "nexticc",
    en: {
      when: "2026 to now",
      org: "Nexticc",
      title: "External CTO of a group",
      tags: [
        "IT strategy",
        "data governance",
        "vendor management",
        "automation development",
        "reporting to the fund",
      ],
      hard: "Several companies, several data sources, one person expected to hold the whole picture. Making the group's IT legible before deciding anything.",
      done: [
        "ERP cloud migration to production over the summer, with a restore test as a condition of the plan",
        "Group reporting dashboard for the fund, in production",
        "Automated email routing with LLM classification",
        "Field census across seven departments feeding the contract digitisation program",
        "Weekly written report to two CEOs and the fund; interactive roadmap for the board",
      ],
    },
    it: {
      when: "dal 2026",
      org: "Nexticc",
      title: "CTO esterna di un gruppo",
      tags: [
        "strategia IT",
        "data governance",
        "gestione fornitori",
        "sviluppo automazioni",
        "reporting al fondo",
      ],
      hard: "Più aziende, più fonti dati, una persona a cui si chiede di tenere insieme il quadro. Rendere leggibile l'IT del gruppo prima di decidere qualsiasi cosa.",
      done: [
        "Migrazione dell'ERP in cloud portata in produzione in estate, con un test di restore come condizione del piano",
        "Dashboard di reporting di gruppo per il fondo, in produzione",
        "Smistamento automatico delle email con classificazione LLM",
        "Censimento sul campo in sette reparti a monte del programma di digitalizzazione dei contratti",
        "Report scritto settimanale a due CEO e al fondo; roadmap interattiva per il board",
      ],
    },
  },
  {
    id: "blue-star-next",
    en: {
      when: "Jul 2026 to now",
      org: "Blue Star Next",
      title: "Business automation developer",
      tags: ["Rails", "TypeScript", "CRM", "internal platform"],
      hard: "Changing a platform the commercial cycle runs on every day, without stopping it.",
      done: [
        "New native sections shipped one feature per change",
        "A half-page plan before every change: what changes, how it is tested, what blocks",
      ],
    },
    it: {
      when: "da lug 2026",
      org: "Blue Star Next",
      title: "Business automation developer",
      tags: ["Rails", "TypeScript", "CRM", "piattaforma interna"],
      hard: "Cambiare una piattaforma su cui il ciclo commerciale gira ogni giorno, senza fermarla.",
      done: [
        "Nuove sezioni native rilasciate una funzione alla volta",
        "Un piano da mezza pagina prima di ogni cambio: cosa cambia, come si testa, cosa blocca",
      ],
    },
  },
  {
    id: "cantiqo",
    en: {
      when: "Jul 2026 to now",
      org: "Cantiqo",
      title: "Consulting CTO, remote",
      tags: ["assessment", "backlog", "production discipline", "WhatsApp"],
      hard: "Arriving in a product already in production and setting rules that hold when nobody is watching.",
      done: [
        "Assessment and a prioritised backlog",
        "Production rules agreed with the founders: fresh backup and explicit OK before any write, no migrations on Friday evenings, every intervention logged with rollback",
        "Silent failures measured, not only the visible errors reported by users",
        "An acceptance test session",
      ],
    },
    it: {
      when: "da lug 2026",
      org: "Cantiqo",
      title: "CTO in consulenza, da remoto",
      tags: ["assessment", "backlog", "disciplina di produzione", "WhatsApp"],
      hard: "Arrivare in un prodotto già in produzione e mettere regole che reggono quando nessuno guarda.",
      done: [
        "Assessment e un backlog con priorità",
        "Regole di produzione concordate con i founder: backup fresco e OK esplicito prima di ogni scrittura, niente migrazioni il venerdì sera, ogni intervento loggato con rollback",
        "Fallimenti silenziosi misurati, non solo gli errori visibili segnalati dagli utenti",
        "Una sessione di test di accettazione",
      ],
    },
  },
  {
    id: "boosha",
    link: "https://boosha.it",
    en: {
      when: "2025 to 2026",
      org: "Boosha AI",
      title: "Backend and AI systems developer",
      tags: ["backend", "AI routing", "tool calling", "delivery"],
      hard: "Shared codebases, five audiences with five registers, a client between a frontend developer and a commercial team.",
      done: [
        "Multi-provider AI routing with fallback and tool calling on a B2B food-cost product",
        "Semantics closed with the client before code: zero retro-fixes on the features handled this way",
        "Post-mortem per round and a versioned knowledge base",
      ],
    },
    it: {
      when: "2025 e 2026",
      org: "Boosha AI",
      title: "Backend e AI systems developer",
      tags: ["backend", "routing AI", "tool calling", "delivery"],
      hard: "Codebase condivise, cinque pubblici con cinque registri, un cliente tra uno sviluppatore frontend e un team commerciale.",
      done: [
        "Routing AI multi-provider con fallback e tool calling su un prodotto B2B di food cost",
        "Semantica chiusa col cliente prima del codice: zero correzioni a posteriori sulle funzioni gestite così",
        "Post-mortem per ogni round e una knowledge base versionata",
      ],
    },
  },
  {
    id: "bip-datwave",
    en: {
      when: "2026",
      org: "BIP / Datwave",
      title: "Technical delivery lead, data and AI",
      tags: ["Google Cloud", "Terraform", "RAG", "discovery"],
      hard: "Enterprise constraints on a retail client's cloud; a discovery workshop I could not attend in person.",
      done: [
        "Infrastructure as code, CI/CD, load balancer, IAP, inference with Vertex AI, RAG architecture",
        "The HR section of an AI strategy discovery, with the brief for the colleague who ran the session",
      ],
    },
    it: {
      when: "2026",
      org: "BIP / Datwave",
      title: "Technical delivery lead, data e AI",
      tags: ["Google Cloud", "Terraform", "RAG", "discovery"],
      hard: "Vincoli enterprise sul cloud di un cliente retail; un workshop di discovery a cui non potevo essere presente.",
      done: [
        "Infrastructure as code, CI/CD, load balancer, IAP, inferenza con Vertex AI, architettura RAG",
        "La sezione HR di una discovery di strategia AI, con il brief per la collega che ha condotto la sessione",
      ],
    },
  },
  {
    id: "own-products",
    en: {
      when: "2025 to now",
      org: "Own products",
      title: "Data reconciliation engine, NoteScraper, others",
      tags: [
        "data quality",
        "legacy ERP",
        "static analysis",
        "clinical decision support",
      ],
      hard: 'Data that must never be invented: when the evidence does not settle a value, the answer is "uncertain", written down.',
      done: [
        "Reconciliation engine: three outcomes only, cell-level lineage, rule packs per tenant, models never see raw values; validated on two real client datasets",
        "NoteScraper: raw ERP exports into navigable knowledge bases at the scale of 469,000 inspection records",
        "TenderMatch AI (public tender compliance), Code Forensics (deterministic static analysis, zero-code-to-LLM), CDSS (self-hosted clinical decision support, EU MDR oriented)",
      ],
    },
    it: {
      when: "dal 2025",
      org: "Prodotti propri",
      title: "Motore di riconciliazione dati, NoteScraper, altri",
      tags: [
        "qualità dei dati",
        "ERP legacy",
        "analisi statica",
        "supporto alle decisioni cliniche",
      ],
      hard: 'Dati che non vanno mai inventati: quando l\'evidenza non decide un valore, la risposta è "incerto", messa per iscritto.',
      done: [
        "Motore di riconciliazione: solo tre esiti, lineage a livello di cella, pacchetti di regole per tenant, i modelli non vedono mai i valori grezzi; validato su due dataset reali di clienti",
        "NoteScraper: export grezzi dell'ERP trasformati in basi di conoscenza navigabili, alla scala di 469.000 record di ispezione",
        "TenderMatch AI (conformità nei bandi pubblici), Code Forensics (analisi statica deterministica, zero codice all'LLM), CDSS (supporto alle decisioni cliniche self-hosted, orientato al MDR UE)",
      ],
    },
  },
]
