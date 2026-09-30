/**
 * Programs and selections, in the order they are learned in.
 *
 * @typedef {object} Selection
 * @property {string} id Stable lowercase key.
 * @property {string} [link] Programme site.
 * @property {{org: string, title: string, when: string, status: string, tags: string[], sel: string, body: string}} en
 * @property {{org: string, title: string, when: string, status: string, tags: string[], sel: string, body: string}} it
 */

/** @type {Selection[]} */
export const SELECTIONS = [
  {
    id: "bluedot",
    link: "https://bluedot.org",
    en: {
      org: "BlueDot Impact",
      title: "Technical AI Safety course",
      when: "Aug 2026",
      status: "completed",
      tags: ["alignment", "interpretability", "evals", "AI control"],
      sel: "selective admission",
      body: "Technical grounding for phase 3 of the Freedom study: validating self-reports against internal activations with sparse autoencoders.",
    },
    it: {
      org: "BlueDot Impact",
      title: "Corso Technical AI Safety",
      when: "ago 2026",
      status: "completato",
      tags: ["alignment", "interpretabilità", "eval", "AI control"],
      sel: "ammissione selettiva",
      body: "La base tecnica per la fase 3 dello studio Freedom: validare i self-report contro le attivazioni interne con gli sparse autoencoder.",
    },
  },
  {
    id: "apart",
    link: "https://apartresearch.com/project/a-welfare-logger-wrote-its-subjects-false-memory-and-the-subject-believed-it-kkqb",
    en: {
      org: "Apart Research",
      title: "Digital Minds Research Sprint",
      when: "Aug 2026",
      status: "paper published",
      tags: ["digital minds", "record integrity", "replay"],
      sel: "sole author",
      body: "The welfare-logger paper, written and reviewed within the sprint, with a public replay harness.",
    },
    it: {
      org: "Apart Research",
      title: "Digital Minds Research Sprint",
      when: "ago 2026",
      status: "paper pubblicato",
      tags: ["digital minds", "integrità dei registri", "replay"],
      sel: "autrice unica",
      body: "Il paper sul welfare logger, scritto e revisionato dentro lo sprint, con un harness di replay pubblico.",
    },
  },
  {
    id: "enais-better-futures",
    link: "https://www.enais.co",
    en: {
      org: "ENAIS · AI Safety Collab",
      title: "Better Futures Fellowship",
      when: "Sep 2026, running",
      status: "fellow",
      tags: ["better futures", "value lock-in", "path dependence"],
      sel: "current cohort",
      body: 'Nine weeks: five of facilitated discussion on Forethought\'s better-futures research, four of project. My project: a "last exit map" of value lock-in mechanisms under persistent path-dependence, from historical entrenchment cases coded by mechanism, last available exit and the warning signal visible from inside. Working hypothesis: dystopia by drift is more likely than dystopia by decision.',
    },
    it: {
      org: "ENAIS · AI Safety Collab",
      title: "Better Futures Fellowship",
      when: "set 2026, in corso",
      status: "fellow",
      tags: ["better futures", "value lock-in", "path dependence"],
      sel: "coorte in corso",
      body: 'Nove settimane: cinque di discussione facilitata sulla ricerca better futures di Forethought, quattro di progetto. Il mio progetto: una "mappa delle ultime uscite" dai meccanismi di value lock-in sotto path dependence persistente, a partire da casi storici di irrigidimento codificati per meccanismo, ultima uscita disponibile e segnale di allarme visibile da dentro. Ipotesi di lavoro: la distopia per deriva è più probabile della distopia per decisione.',
    },
  },
  {
    id: "sentient",
    link: "https://cf-debate.com",
    en: {
      org: "Sentient Futures",
      title: "Research mentorship",
      when: "Sep 2026, running",
      status: "first author on a joint paper",
      tags: ["consciousness indicators", "individuation", "scaffold"],
      sel: "mentored by Chris Percy",
      body: "On the cf-debate project: testing the indicator tables against Freedom v2 as a concrete case, asking for each indicator where it lives. Plus site and quiz data analysis.",
    },
    it: {
      org: "Sentient Futures",
      title: "Mentorship di ricerca",
      when: "set 2026, in corso",
      status: "prima autrice di un paper congiunto",
      tags: ["indicatori di coscienza", "individuazione", "scaffold"],
      sel: "mentore Chris Percy",
      body: "Sul progetto cf-debate: mettere alla prova le tabelle di indicatori su Freedom v2 come caso concreto, chiedendo per ogni indicatore dove vive. Più analisi dei dati del sito e del quiz.",
    },
  },
  {
    id: "cambridge-digital-minds",
    en: {
      org: "Cambridge Digital Minds",
      title: "Introduction to Digital Minds",
      when: "Autumn 2026",
      status: "in progress",
      tags: ["digital minds", "moral status", "philosophy of mind"],
      sel: "12% of applicants admitted",
      body: "Online cohort, autumn and winter 2026. Started September 2026.",
    },
    it: {
      org: "Cambridge Digital Minds",
      title: "Introduction to Digital Minds",
      when: "autunno 2026",
      status: "in corso",
      tags: ["digital minds", "status morale", "filosofia della mente"],
      sel: "ammesso il 12% dei candidati",
      body: "Coorte online, autunno e inverno 2026. Iniziata a settembre 2026.",
    },
  },
  {
    id: "mats",
    link: "https://www.matsprogram.org",
    en: {
      org: "MATS",
      title: "ML Alignment & Theory Scholars, Winter 2027",
      when: "Winter 2027",
      status: "Stage 2, in selection",
      tags: ["empirical alignment", "research taste", "interpretability"],
      sel: "past Stage 1",
      body: "Empirical track. Research taste and coding assessments done, stream matching under way.",
    },
    it: {
      org: "MATS",
      title: "ML Alignment & Theory Scholars, inverno 2027",
      when: "inverno 2027",
      status: "Stage 2, in selezione",
      tags: ["empirical alignment", "research taste", "interpretabilità"],
      sel: "superato lo Stage 1",
      body: "Empirical track. Assessment di research taste e coding fatti, stream matching in corso.",
    },
  },
]

/**
 * The four things a program lead has to be able to do, one card each, with the
 * evidence behind them. `items` is a list of `[date, text]` pairs per language;
 * the first two are always shown, the rest behind a toggle.
 *
 * @typedef {object} Capability
 * @property {string} id Stable lowercase key.
 * @property {{n: string, q: string, a: string, items: [string, string][]}} en
 * @property {{n: string, q: string, a: string, items: [string, string][]}} it
 */

/** @type {Capability[]} */
export const CAPABILITIES = [
  {
    id: "capability-1",
    en: {
      n: "01",
      q: "Leading programs, cohorts and multi-stakeholder projects.",
      a: "Cohorts from 6 to 100 people, all built on weekly exercises. An open course. A research program. A group IT roadmap.",
      items: [
        [
          "Apr to Jul 2026",
          "<b>CVR, L'Officina delle Competenze.</b> One program, two audiences, four stakeholders, one calendar, two platforms.",
        ],
        [
          "Sep to Nov 2026",
          "<b>Intesa Sanpaolo, IT architects.</b> Five sessions, two editions, senior audience, closing with a design challenge.",
        ],
        [
          "2026 to now",
          "<b>Group IT roadmap as external CTO.</b> Several companies, two CEOs, the fund, an internal IT contact, four suppliers.",
        ],
        [
          "Mar 2026",
          "<b>Engitel AI Academy.</b> A co-instructor became unavailable mid-program; I delivered both modules.",
        ],
        [
          "May 2026",
          "<b>AI strategy discovery for an HR function.</b> Designed the workshop section and wrote the brief for the colleague who ran the session.",
        ],
        [
          "Sep 2026",
          "<b>AI pilot on real contracts</b> across a company, an investor, its external developer and its legal counsel, with a processing agreement settled before access.",
        ],
        [
          "2026",
          "<b>Also:</b> Promos Rimini, Italiacamp, Scatolificio Medicinese, BPER Banca, CDO Bergamo, Farlastrada, Puglia Creativa, Finlogic, DigIT Export Day.",
        ],
      ],
    },
    it: {
      n: "01",
      q: "Guidare programmi, coorti e progetti con più stakeholder.",
      a: "Coorti da 6 a 100 persone, tutte costruite su esercizi settimanali. Un corso aperto. Un programma di ricerca. La roadmap IT di un gruppo.",
      items: [
        [
          "apr-lug 2026",
          "<b>CVR, L'Officina delle Competenze.</b> Un programma, due pubblici, quattro stakeholder, un calendario, due piattaforme.",
        ],
        [
          "set-nov 2026",
          "<b>Intesa Sanpaolo, architetti IT.</b> Cinque sessioni, due edizioni, pubblico senior, chiusura con una design challenge.",
        ],
        [
          "dal 2026",
          "<b>Roadmap IT di gruppo come CTO esterna.</b> Più aziende, due CEO, il fondo, un referente IT interno, quattro fornitori.",
        ],
        [
          "mar 2026",
          "<b>Engitel AI Academy.</b> Un co-docente è diventato indisponibile a metà programma; ho tenuto io entrambi i moduli.",
        ],
        [
          "mag 2026",
          "<b>Discovery di strategia AI per una funzione HR.</b> Ho progettato la parte di workshop e scritto il brief per la collega che ha condotto la sessione.",
        ],
        [
          "set 2026",
          "<b>Pilota AI su contratti veri</b> tra un'azienda, un investitore, il suo sviluppatore esterno e il suo legale, con un accordo sul trattamento chiuso prima dell'accesso.",
        ],
        [
          "2026",
          "<b>E poi:</b> Promos Rimini, Italiacamp, Scatolificio Medicinese, BPER Banca, CDO Bergamo, Farlastrada, Puglia Creativa, Finlogic, DigIT Export Day.",
        ],
      ],
    },
  },
  {
    id: "capability-2",
    en: {
      n: "02",
      q: "Turning goals into workable plans, adapting when circumstances change.",
      a: "I teach problem framing to IT architects, and I plan the same way: no dates before the map, a written rule after every change.",
      items: [
        [
          "Jul 2026",
          "<b>The dating rule.</b> No absolute dates before processes and data are mapped; dependent dates as conditionals; striped bars for work waiting on someone else.",
        ],
        [
          "2025 to now",
          "<b>Pre-registration with a deviations policy.</b> How the plan changes when something changes, written before data collection.",
        ],
        [
          "Jun to Jul 2026",
          "<b>A session moved and rebuilt</b> for a different audience than first assumed.",
        ],
        [
          "2026",
          "<b>Contract digitisation</b> planned with a dated decision point instead of an open-ended scope.",
        ],
        [
          "Summer 2026",
          "<b>ERP cloud migration</b> to production, with a restore test as a condition of the plan, not an option.",
        ],
        [
          "2026",
          "<b>Semantics before code.</b> Zero retro-fixes on the features handled this way.",
        ],
        [
          "2026",
          "<b>Rules written after experience:</b> no untested release on the eve of a client test; no migrations on Friday evenings.",
        ],
      ],
    },
    it: {
      n: "02",
      q: "Trasformare obiettivi in piani che reggono, e adattarli quando cambiano le condizioni.",
      a: "Insegno problem framing agli architetti IT, e pianifico allo stesso modo: niente date prima della mappa, una regola scritta dopo ogni cambio.",
      items: [
        [
          "lug 2026",
          "<b>La regola delle date.</b> Niente date assolute prima di aver mappato processi e dati; le date dipendenti come condizionali; barre a righe per il lavoro che aspetta qualcun altro.",
        ],
        [
          "dal 2025",
          "<b>Pre-registrazione con una policy per le deviazioni.</b> Come cambia il piano quando cambia qualcosa, scritto prima della raccolta dati.",
        ],
        [
          "giu-lug 2026",
          "<b>Una sessione spostata e ricostruita</b> per un pubblico diverso da quello ipotizzato all'inizio.",
        ],
        [
          "2026",
          "<b>Digitalizzazione dei contratti</b> pianificata con un punto di decisione datato invece di un perimetro aperto.",
        ],
        [
          "estate 2026",
          "<b>Migrazione dell'ERP in cloud</b> in produzione, con un test di restore come condizione del piano, non un'opzione.",
        ],
        [
          "2026",
          "<b>Semantica prima del codice.</b> Zero correzioni a posteriori sulle funzioni gestite così.",
        ],
        [
          "2026",
          "<b>Regole scritte dopo l'esperienza:</b> nessun rilascio non testato alla vigilia di un test col cliente; niente migrazioni il venerdì sera.",
        ],
      ],
    },
  },
  {
    id: "capability-3",
    en: {
      n: "03",
      q: "Communicating clearly, managing deadlines and budgets, deciding on data.",
      a: "Five audiences, five registers. Supplier contracts across a group. A post-mortem after every workstream.",
      items: [
        [
          "2026 to now",
          '<b>Weekly written report</b> to two CEOs with the fund in copy: one screen, first person. Board rules: no internal names, no incident details, pending items as "awaiting reply".',
        ],
        [
          "2026",
          "<b>Supplier contracts and renewals</b> reviewed clause by clause, with renewal dates tracked so nothing lapses by accident.",
        ],
        [
          "2026",
          "<b>Silent failures measured</b>, not only the visible errors. The priority order changed that day.",
        ],
        [
          "2026",
          "<b>Post-mortem after every course</b> and a versioned training knowledge base.",
        ],
        [
          "2026",
          "<b>A reporting dashboard for the fund</b>, in production, with a structural billing-data bug found and fixed there.",
        ],
        [
          "2026",
          "<b>Data sources reconciled tile by tile</b>; findings shared as numbers, never as accusations.",
        ],
        [
          "2026",
          "<b>Working rules:</b> terms count when they are in the signed text; a red flag is verified before it is propagated.",
        ],
      ],
    },
    it: {
      n: "03",
      q: "Comunicare in modo chiaro, gestire scadenze e budget, decidere sui dati.",
      a: "Cinque pubblici, cinque registri. Contratti con i fornitori per tutto un gruppo. Un post-mortem dopo ogni filone di lavoro.",
      items: [
        [
          "dal 2026",
          '<b>Report scritto settimanale</b> a due CEO con il fondo in copia: una schermata, in prima persona. Regole per il board: niente nomi interni, niente dettagli degli incidenti, le cose in sospeso come "in attesa di risposta".',
        ],
        [
          "2026",
          "<b>Contratti e rinnovi con i fornitori</b> rivisti clausola per clausola, con le scadenze tracciate perché niente scada per sbaglio.",
        ],
        [
          "2026",
          "<b>Fallimenti silenziosi misurati</b>, non solo gli errori visibili. L'ordine delle priorità è cambiato quel giorno.",
        ],
        [
          "2026",
          "<b>Post-mortem dopo ogni corso</b> e una knowledge base formativa versionata.",
        ],
        [
          "2026",
          "<b>Una dashboard di reporting per il fondo</b>, in produzione, con un bug strutturale sui dati di fatturazione trovato e risolto lì.",
        ],
        [
          "2026",
          "<b>Fonti dati riconciliate tessera per tessera</b>; i risultati condivisi come numeri, mai come accuse.",
        ],
        [
          "2026",
          "<b>Regole di lavoro:</b> i termini contano quando sono nel testo firmato; un campanello d'allarme si verifica prima di propagarlo.",
        ],
      ],
    },
  },
  {
    id: "capability-4",
    en: {
      n: "04",
      q: "AI safety and AGI preparedness.",
      a: "A pre-registered study, a sprint paper, and three programs running at once: Better Futures, Sentient Futures and Cambridge Digital Minds.",
      items: [
        [
          "Nov 2025 to now",
          "<b>Freedom v2</b>, principal investigator. Two pre-registrations on OSF, public code, a system that publishes its own pages unedited.",
        ],
        [
          "Aug 2026",
          "<b>Apart Research sprint paper</b>, sole author. EA Forum post on the incident.",
        ],
        [
          "Sep 2026",
          "<b>Better Futures Fellowship</b>, current cohort. <b>Sentient Futures mentorship</b>, first author on a paper in progress.",
        ],
        [
          "Autumn 2026",
          "<b>Cambridge Digital Minds</b>, current cohort (12% of applicants admitted).",
        ],
        [
          "Winter 2027",
          "<b>MATS, Empirical track</b>, past Stage 1, in Stage 2.",
        ],
        [
          "Aug 2026",
          "<b>BlueDot Impact</b>, Technical AI Safety course, completed.",
        ],
      ],
    },
    it: {
      n: "04",
      q: "AI safety e preparazione all'AGI.",
      a: "Uno studio pre-registrato, un paper da sprint, e tre programmi in corso insieme: Better Futures, Sentient Futures e Cambridge Digital Minds.",
      items: [
        [
          "da nov 2025",
          "<b>Freedom v2</b>, principal investigator. Due pre-registrazioni su OSF, codice pubblico, un sistema che pubblica le sue pagine senza editing.",
        ],
        [
          "ago 2026",
          "<b>Paper da sprint per Apart Research</b>, autrice unica. Post su EA Forum sull'incidente.",
        ],
        [
          "set 2026",
          "<b>Better Futures Fellowship</b>, coorte in corso. <b>Mentorship Sentient Futures</b>, prima autrice di un paper in corso.",
        ],
        [
          "autunno 2026",
          "<b>Cambridge Digital Minds</b>, coorte in corso (ammesso il 12% dei candidati).",
        ],
        [
          "inverno 2027",
          "<b>MATS, Empirical track</b>, superato lo Stage 1, in Stage 2.",
        ],
        [
          "ago 2026",
          "<b>BlueDot Impact</b>, corso Technical AI Safety, completato.",
        ],
      ],
    },
  },
]

/**
 * How a cohort is run.
 *
 * @typedef {object} Delivery
 * @property {string} id Stable lowercase key.
 * @property {{d: string, h: string, a: string}} en
 * @property {{d: string, h: string, a: string}} it
 */

/** @type {Delivery[]} */
export const DELIVERY = [
  {
    id: "exercises",
    en: {
      d: "exercises as the unit",
      h: "Cohorts run on weekly exercises, not on lectures.",
      a: "A written exercise per session and a debrief the week after. The exercise is the raw material, the way a shared Discussion Doc works.",
    },
    it: {
      d: "l'esercizio come unità",
      h: "Le coorti girano su esercizi settimanali, non su lezioni.",
      a: "Un esercizio scritto per sessione e un debrief la settimana dopo. L'esercizio è la materia prima, come funziona un Discussion Doc condiviso.",
    },
  },
  {
    id: "reusable",
    en: {
      d: "reusable session artifacts",
      h: "Sessions built as documents anyone can run.",
      a: "Timed activities, instructions that read aloud, nothing that depends on me being the one who clicks.",
    },
    it: {
      d: "sessioni riutilizzabili",
      h: "Sessioni costruite come documenti che chiunque può condurre.",
      a: "Attività a tempo, istruzioni che si leggono ad alta voce, niente che dipenda dal fatto che a cliccare sia io.",
    },
  },
  {
    id: "post-mortem",
    en: {
      d: "post-mortem, every time",
      h: "A post-mortem after every cohort, a versioned knowledge base.",
      a: "Lessons become rules with a date. Version 1.0 in April 2026, three revisions by May.",
    },
    it: {
      d: "post-mortem, ogni volta",
      h: "Un post-mortem dopo ogni coorte, una knowledge base versionata.",
      a: "Le lezioni diventano regole con una data. Versione 1.0 ad aprile 2026, tre revisioni entro maggio.",
    },
  },
  {
    id: "framing",
    en: {
      d: "framing, cruxes, objections",
      h: "Problem framing is something I teach, not only something I do.",
      a: "What is the actual question, what would falsify it, which objection is strongest. Weekly exercises are the same muscle.",
    },
    it: {
      d: "framing, crux, obiezioni",
      h: "Il problem framing lo insegno, oltre a farlo.",
      a: "Qual è la vera domanda, cosa la falsificherebbe, quale obiezione è la più forte. Gli esercizi settimanali sono lo stesso muscolo.",
    },
  },
  {
    id: "silent-failures",
    en: {
      d: "the silent failures",
      h: "Measure the ones who go quiet, not only the ones who complain.",
      a: "In a production system, the failures that hurt were the ones nobody reported. In a cohort, that is the fellow who stops pasting exercises in week 3.",
    },
    it: {
      d: "i fallimenti silenziosi",
      h: "Misurare chi sparisce, non solo chi si lamenta.",
      a: "In un sistema in produzione, i fallimenti che facevano male erano quelli che nessuno segnalava. In una coorte è il fellow che smette di incollare gli esercizi alla settimana 3.",
    },
  },
]

/**
 * Notes under the delivery grid. `b` is the lead and `rest` continues the same
 * sentence, which is why the Italian `rest` values differ in length from the
 * English ones.
 *
 * @typedef {object} DeliveryNote
 * @property {string} id Stable lowercase key.
 * @property {{k: string, b: string, rest: string}} en
 * @property {{k: string, b: string, rest: string}} it
 */

/** @type {DeliveryNote[]} */
export const DELIVERY_NOTES = [
  {
    id: "reporting",
    en: {
      k: "Reporting",
      b: "A weekly written report to two CEOs and a private-equity fund",
      rest: ", one screen, for the group I serve as external CTO. Same discipline for a program's funders: what happened, what it cost, what is open.",
    },
    it: {
      k: "Reporting",
      b: "Un report scritto settimanale a due CEO e a un fondo di private equity",
      rest: ", una schermata, per il gruppo di cui sono CTO esterna. Stessa disciplina per chi finanzia un programma: cosa è successo, cosa è costato, cosa è aperto.",
    },
  },
  {
    id: "tooling",
    en: {
      k: "Tooling",
      b: "Asana, Jira and Confluence, Linear, Sentry, in daily use across client work.",
      rest: " Asana for a consulting group's projects, Linear as the system of record for the Freedom study, Jira and Confluence on the group I serve as CTO, Sentry on production systems, Obsidian for the versioned knowledge bases.",
    },
    it: {
      k: "Strumenti",
      b: "Asana, Jira e Confluence, Linear, Sentry, usati tutti i giorni sul lavoro con i clienti.",
      rest: " Asana per i progetti di un gruppo di consulenza, Linear come registro dello studio Freedom, Jira e Confluence nel gruppo di cui sono CTO, Sentry sui sistemi in produzione, Obsidian per le knowledge base versionate.",
    },
  },
  {
    id: "fundraising",
    en: {
      k: "Fundraising",
      b: "Wrote and submitted a 12-month research grant proposal",
      rest: " (2026): budget, milestones, an independent technical advisor named.",
    },
    it: {
      k: "Fundraising",
      b: "Ho scritto e presentato una proposta di grant di ricerca a 12 mesi",
      rest: " (2026): budget, milestone, un technical advisor indipendente nominato.",
    },
  },
]
