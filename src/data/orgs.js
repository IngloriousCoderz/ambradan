/**
 * Organisations, clients, programs and events, in the order the marquee shows
 * them: client and research work first, then talks and events.
 *
 * Each entry keeps the facts that are the same in every language — the logo
 * key, the external link — at the top level, and holds the prose in `en` and
 * `it` blocks so `localise` can pick one.
 *
 * @typedef {object} Org
 * @property {string} id Stable lowercase key.
 * @property {string} [logo] Key into `LOGOS`.
 * @property {1} [dark] The logo is dark-on-light and needs a dark chip.
 * @property {1} [icon] The logo is a small square mark rather than a wordmark.
 * @property {string} [link] External link.
 * @property {{n: string, when: string, how: string, what: string}} en English text.
 * @property {{n: string, when: string, how: string, what: string}} it Italian text.
 */

/** @type {Org[]} */
export const ORGS = [
  {
    id: "intesa",
    logo: "intesasanpaolo",
    dark: 1,
    link: "https://www.intesasanpaolo.com",
    en: {
      n: "Intesa Sanpaolo",
      when: "2026",
      how: "Instructor, via Digit'Ed and Ninja Business School",
      what: 'Two programs: "Design & structured thinking" for IT architects (five sessions, two editions) and "AI for financial communication" for Investor Relations (four modules, two editions).',
    },
    it: {
      n: "Intesa Sanpaolo",
      when: "2026",
      how: "Docente, via Digit'Ed e Ninja Business School",
      what: 'Due programmi: "Design & structured thinking" per architetti IT (cinque sessioni, due edizioni) e "AI per la comunicazione finanziaria" per Investor Relations (quattro moduli, due edizioni).',
    },
  },
  {
    id: "bper",
    logo: "bper",
    link: "https://www.bper.it",
    en: {
      n: "BPER Banca",
      when: "Jun 2026",
      how: "Instructor, via Digit'Ed",
      what: '"AI Mastery" module, three hours for an intermediate banking audience: how generative AI works, risks in a regulated context, costs, governance, a guided case.',
    },
    it: {
      n: "BPER Banca",
      when: "giu 2026",
      how: "Docente, via Digit'Ed",
      what: 'Modulo "AI Mastery", tre ore per un pubblico bancario intermedio: come funziona l\'AI generativa, rischi in un contesto regolato, costi, governance, un caso guidato.',
    },
  },
  {
    id: "cvr",
    en: {
      n: "CVR",
      when: "Apr to Jul 2026",
      how: "Instructor and program designer, via Ninja and Boosha AI",
      what: '"L\'Officina delle Competenze": one AI literacy program for a construction-materials manufacturer, two audiences (consultants, then about 100 resellers online), four sessions, micro-designed with the client sponsor.',
    },
    it: {
      n: "CVR",
      when: "Apr to Jul 2026",
      how: "Docente e progettista del programma, via Ninja e Boosha AI",
      what: '"L\'Officina delle Competenze": un programma di alfabetizzazione AI per un produttore di materiali edili, due pubblici (consulenti, poi circa 100 rivenditori online), quattro sessioni, microprogettato con lo sponsor del cliente.',
    },
  },
  {
    id: "engitel",
    logo: "engitel",
    icon: 1,
    link: "https://www.engitel.com",
    en: {
      n: "Engitel",
      when: "Mar 2026",
      how: "Instructor, via Ninja",
      what: "AI Academy for a digital agency's developers: AI engineering and predictive ML on their .NET / Azure stack, four four-hour sessions.",
    },
    it: {
      n: "Engitel",
      when: "mar 2026",
      how: "Docente, via Ninja",
      what: "AI Academy per gli sviluppatori di un'agenzia digitale: AI engineering e ML predittivo sul loro stack .NET / Azure, quattro sessioni da quattro ore.",
    },
  },
  {
    id: "italiacamp",
    logo: "italiacamp",
    icon: 1,
    link: "https://www.italiacamp.com",
    en: {
      n: "Italiacamp",
      when: "Apr 2026",
      how: "Instructor, via Boosha AI",
      what: "AI Academy: one remote session and one in person in Rome, 37 people from five departments, on a persistent training platform.",
    },
    it: {
      n: "Italiacamp",
      when: "apr 2026",
      how: "Docente, via Boosha AI",
      what: "AI Academy: una sessione da remoto e una in presenza a Roma, 37 persone da cinque reparti, su una piattaforma formativa persistente.",
    },
  },
  {
    id: "nexticc",
    logo: "nexticc",
    en: {
      n: "Nexticc",
      when: "2026 to now",
      how: "External CTO",
      what: "Group of companies in testing, inspection and certification, in a private-equity portfolio. IT strategy, data governance, suppliers, GDPR, weekly reporting to the CEOs and the fund.",
    },
    it: {
      n: "Nexticc",
      when: "dal 2026",
      how: "CTO esterna",
      what: "Gruppo di aziende in testing, ispezione e certificazione, in portafoglio a un fondo di private equity. Strategia IT, data governance, fornitori, GDPR, reporting settimanale ai CEO e al fondo.",
    },
  },
  {
    id: "blue-star-next",
    logo: "bluestar",
    dark: 1,
    en: {
      n: "Blue Star Next",
      when: "Jul 2026 to now",
      how: "Business automation developer",
      what: "Internal platform of a management consulting group: the commercial cycle end to end, one feature per change. Rails plus TypeScript monorepo.",
    },
    it: {
      n: "Blue Star Next",
      when: "da lug 2026",
      how: "Business automation developer",
      what: "Piattaforma interna di un gruppo di consulenza direzionale: il ciclo commerciale da cima a fondo, una funzione per ogni cambio. Monorepo Rails più TypeScript.",
    },
  },
  {
    id: "boosha",
    logo: "boosha",
    link: "https://boosha.it",
    en: {
      n: "Boosha AI",
      when: "2025 to 2026",
      how: "Backend and AI systems developer, instructor",
      what: "Backend and multi-provider AI routing for B2B products; design and delivery of corporate AI training programs.",
    },
    it: {
      n: "Boosha AI",
      when: "2025 e 2026",
      how: "Backend e AI systems developer, docente",
      what: "Backend e routing AI multi-provider per prodotti B2B; progettazione ed erogazione di programmi di formazione AI per aziende.",
    },
  },
  {
    id: "ninja",
    logo: "ninja",
    icon: 1,
    en: {
      n: "Ninja Business School",
      when: "2026",
      how: "Instructor",
      what: "Corporate AI programs delivered with Ninja as training partner for banks, manufacturers and publishers.",
    },
    it: {
      n: "Ninja Business School",
      when: "2026",
      how: "Docente",
      what: "Programmi AI per aziende erogati con Ninja come partner formativo per banche, aziende manifatturiere ed editori.",
    },
  },
  {
    id: "digited",
    logo: "digited",
    dark: 1,
    link: "https://www.digited.it",
    en: {
      n: "Digit'Ed",
      when: "2026",
      how: "Instructor",
      what: "Programs for Intesa Sanpaolo and BPER Banca delivered through Digit'Ed.",
    },
    it: {
      n: "Digit'Ed",
      when: "2026",
      how: "Docente",
      what: "Programmi per Intesa Sanpaolo e BPER Banca erogati tramite Digit'Ed.",
    },
  },
  {
    id: "bip",
    logo: "bip",
    dark: 1,
    en: {
      n: "BIP / Datwave",
      when: "2026",
      how: "Technical delivery lead, data and AI",
      what: "Enterprise AI project for a retail client on Google Cloud (Terraform, Cloud Build, Vertex AI, RAG) and an AI strategy discovery for the HR function of a large food-service network.",
    },
    it: {
      n: "BIP / Datwave",
      when: "2026",
      how: "Technical delivery lead, data e AI",
      what: "Progetto AI enterprise per un cliente retail su Google Cloud (Terraform, Cloud Build, Vertex AI, RAG) e una discovery di strategia AI per la funzione HR di una grande rete di ristorazione.",
    },
  },
  {
    id: "cantiqo",
    logo: "cantiqo",
    icon: 1,
    en: {
      n: "Cantiqo",
      when: "Jul 2026 to now",
      how: "Consulting CTO, remote",
      what: "A WhatsApp-based product for construction firms, two founders. Assessment, prioritised backlog, production rules, acceptance test session.",
    },
    it: {
      n: "Cantiqo",
      when: "da lug 2026",
      how: "CTO in consulenza, da remoto",
      what: "Un prodotto su WhatsApp per imprese edili, due founder. Assessment, backlog con priorità, regole di produzione, sessione di test di accettazione.",
    },
  },
  {
    id: "apart",
    logo: "apart",
    dark: 1,
    icon: 1,
    link: "https://apartresearch.com/project/a-welfare-logger-wrote-its-subjects-false-memory-and-the-subject-believed-it-kkqb",
    en: {
      n: "Apart Research",
      when: "Aug 2026",
      how: "Sole author, Digital Minds Research Sprint",
      what: '"A Welfare Logger Wrote Its Subject\'s False Memory, and the Subject Believed It."',
    },
    it: {
      n: "Apart Research",
      when: "ago 2026",
      how: "Autrice unica, Digital Minds Research Sprint",
      what: '"A Welfare Logger Wrote Its Subject\'s False Memory, and the Subject Believed It."',
    },
  },
  {
    id: "enais",
    logo: "enais",
    link: "https://www.enais.co",
    en: {
      n: "ENAIS · Better Futures",
      when: "Sep 2026 to now",
      how: "Fellow, current cohort",
      what: "Nine-week fellowship on better-futures work. Project in development: a map of the last exits from value lock-in.",
    },
    it: {
      n: "ENAIS · Better Futures",
      when: "da set 2026",
      how: "Fellow, coorte in corso",
      what: "Fellowship di nove settimane sul lavoro better futures. Progetto in sviluppo: una mappa delle ultime uscite dal value lock-in.",
    },
  },
  {
    id: "sentient",
    logo: "sentient",
    dark: 1,
    link: "https://cf-debate.com",
    en: {
      n: "Sentient Futures",
      when: "Sep 2026 to now",
      how: "Mentee, first author on a joint paper",
      what: "With Chris Percy on the cf-debate project: where do consciousness indicators live, in the model or in the scaffold.",
    },
    it: {
      n: "Sentient Futures",
      when: "da set 2026",
      how: "Mentee, prima autrice di un paper congiunto",
      what: "Con Chris Percy sul progetto cf-debate: dove vivono gli indicatori di coscienza, nel modello o nello scaffold.",
    },
  },
  {
    id: "cambridge-digital-minds",
    en: {
      n: "Cambridge Digital Minds",
      when: "Autumn 2026",
      how: "Current cohort, 12% of applicants admitted",
      what: "Introduction to Digital Minds, online cohort, in progress.",
    },
    it: {
      n: "Cambridge Digital Minds",
      when: "autunno 2026",
      how: "Coorte in corso, ammesso il 12% dei candidati",
      what: "Introduction to Digital Minds, coorte online, in corso.",
    },
  },
  {
    id: "mats",
    logo: "mats",
    icon: 1,
    link: "https://www.matsprogram.org",
    en: {
      n: "MATS",
      when: "Winter 2027",
      how: "Candidate, Empirical track, Stage 2",
      what: "ML Alignment & Theory Scholars. Past Stage 1; research taste and coding assessments done, stream matching under way.",
    },
    it: {
      n: "MATS",
      when: "inverno 2027",
      how: "Candidata, Empirical track, Stage 2",
      what: "ML Alignment & Theory Scholars. Superato lo Stage 1; assessment di research taste e coding fatti, stream matching in corso.",
    },
  },
  {
    id: "bluedot",
    logo: "bluedot",
    icon: 1,
    link: "https://bluedot.org",
    en: {
      n: "BlueDot Impact",
      when: "Aug 2026",
      how: "Completed, selective admission",
      what: "Technical AI Safety course: alignment, mechanistic interpretability, evaluations and red-teaming, AI control.",
    },
    it: {
      n: "BlueDot Impact",
      when: "ago 2026",
      how: "Completato, ammissione selettiva",
      what: "Corso Technical AI Safety: alignment, interpretabilità meccanicistica, evaluation e red-teaming, AI control.",
    },
  },
  {
    id: "osf",
    logo: "osf",
    icon: 1,
    link: "https://osf.io/hjfxr",
    en: {
      n: "OSF",
      when: "Jul and Aug 2026",
      how: "Two public pre-registrations",
      what: "Freedom v2 welfare study (CC-BY) and the crossed-constitution study on an open-weights model (CC0).",
    },
    it: {
      n: "OSF",
      when: "lug e ago 2026",
      how: "Due pre-registrazioni pubbliche",
      what: "Lo studio di welfare su Freedom v2 (CC-BY) e lo studio a costituzioni incrociate su un modello open-weights (CC0).",
    },
  },
  {
    id: "ea-forum",
    logo: "eaforum",
    icon: 1,
    link: "https://forum.effectivealtruism.org/posts/FbtGKieKJAJKZze22/my-system-denied-having-memories-even-though-they-were",
    en: {
      n: "EA Forum",
      when: "Aug 2026",
      how: "Author",
      what: '"My system denied having memories, even though they were there": a public write-up of the incident behind the Apart paper.',
    },
    it: {
      n: "EA Forum",
      when: "ago 2026",
      how: "Autrice",
      what: '"My system denied having memories, even though they were there": il racconto pubblico dell\'incidente dietro il paper Apart.',
    },
  },

  {
    id: "casa-sanremo",
    logo: "casasanremo",
    icon: 1,
    link: "https://invest.casasanremo.it",
    en: {
      n: "Casa Sanremo Invest",
      when: "Feb 2026",
      how: "Speaker, Palafiori di Sanremo",
      what: 'Fifth edition, a finance and crypto audience with institutions in the room. Talk: "It does not know whether it is conscious. Meanwhile it has a bank account and a social life."',
    },
    it: {
      n: "Casa Sanremo Invest",
      when: "feb 2026",
      how: "Speaker, Palafiori di Sanremo",
      what: 'Quinta edizione, pubblico di finanza e crypto con le istituzioni in sala. Talk: "Non sa se è cosciente. Intanto ha un conto in banca e una vita sociale."',
    },
  },
  {
    id: "promos",
    link: "https://eventi.promositalia.com/digitexport-day/digit-export-day-2026-ferrara.kl",
    en: {
      n: "Promos Italia",
      when: "Apr 2026",
      how: "Speaker and lab lead, DigIT Export Day Ferrara",
      what: "Institutional program of the chamber-of-commerce system on digital tools for exporting companies. A 30-minute talk on AI for export, then an export AI lab with a radar dashboard and templates in six languages.",
    },
    it: {
      n: "Promos Italia",
      when: "apr 2026",
      how: "Speaker e conduzione del lab, DigIT Export Day Ferrara",
      what: "Programma istituzionale del sistema camerale sugli strumenti digitali per le imprese che esportano. Un talk di 30 minuti sull'AI per l'export, poi un laboratorio AI per l'export con una dashboard radar e template in sei lingue.",
    },
  },
  {
    id: "finlogic",
    link: "https://www.finlogic.it",
    en: {
      n: "Finlogic",
      when: "May 2026",
      how: "Speaker, Accademia 2026, Bologna",
      what: 'Talk "From zero to AI" for the group\'s clients and partners, 55 registered, closing round table after the networking lunch.',
    },
    it: {
      n: "Finlogic",
      when: "mag 2026",
      how: "Speaker, Accademia 2026, Bologna",
      what: 'Talk "Da zero all\'AI" per clienti e partner del gruppo, 55 iscritti, tavola rotonda di chiusura dopo il pranzo di networking.',
    },
  },
  {
    id: "lugano",
    logo: "lugano",
    icon: 1,
    link: "https://www.lugano.ch",
    en: {
      n: "Città di Lugano",
      when: "Sep 2026",
      how: "Speaker, invited by the city's digital innovation office",
      what: 'Talk "When we no longer know whom to trust", in Lugano.',
    },
    it: {
      n: "Città di Lugano",
      when: "set 2026",
      how: "Speaker, su invito dell'ufficio innovazione digitale della città",
      what: 'Talk "Quando non sappiamo più di chi fidarci", a Lugano.',
    },
  },
  {
    id: "nebulab",
    logo: "nebulab",
    link: "https://nebulab.com",
    en: {
      n: "Nebulab",
      when: "Oct 2026",
      how: "Speaker, Commerce Symposium, Milan",
      what: '"Merchant and the Machine", Spazio Pio XI, 8 October. AI consciousness as a concrete question, and responsibility in agentic systems.',
    },
    it: {
      n: "Nebulab",
      when: "ott 2026",
      how: "Speaker, Commerce Symposium, Milano",
      what: '"Merchant and the Machine", Spazio Pio XI, 8 ottobre. La coscienza dell\'AI come domanda concreta, e la responsabilità nei sistemi agentici.',
    },
  },
  {
    id: "while-true",
    en: {
      n: "While True",
      when: "Oct 2026",
      how: "External speaker, online",
      what: '"Stack, projects, GitHub: what to really tell an IT recruiter", a webinar for junior and mid-level developers, 14 October.',
    },
    it: {
      n: "While True",
      when: "ott 2026",
      how: "Speaker esterna, online",
      what: '"Stack, progetti, GitHub: cosa dire davvero a un recruiter IT", un webinar per sviluppatori junior e mid, 14 ottobre.',
    },
  },
  {
    id: "telesveva",
    link: "https://www.telesveva.it",
    en: {
      n: "Telesveva",
      when: "Autumn 2026, date TBC",
      how: "TV guest, on AI",
      what: "Regional broadcaster, channel 18 in Puglia and Basilicata, based in Andria. Details being confirmed.",
    },
    it: {
      n: "Telesveva",
      when: "autunno 2026, data da confermare",
      how: "Ospite in TV, sull'AI",
      what: "Emittente regionale, canale 18 in Puglia e Basilicata, sede ad Andria. Dettagli in definizione.",
    },
  },
  {
    id: "fastweb",
    link: "https://www.fastweb.it/fastwebai-hackathon/",
    en: {
      n: "Fastweb + Vodafone",
      when: "Oct 2026",
      how: "Selected participant, FastwebAI Hackathon",
      what: "Agent Forge h24: 24 hours in person at Fastweb NeXXt, Milan, 22-23 October, building agentic AI prototypes that act rather than only answer.",
    },
    it: {
      n: "Fastweb + Vodafone",
      when: "ott 2026",
      how: "Selezionata, FastwebAI Hackathon",
      what: "Agent Forge h24: 24 ore in presenza al Fastweb NeXXt di Milano, 22-23 ottobre, per costruire prototipi di AI agentica che agiscono invece di limitarsi a rispondere.",
    },
  },
  {
    id: "venice-ai-expo",
    link: "https://veniceaiexpo.ai",
    en: {
      n: "Venice AI Expo",
      when: "Nov 2026",
      how: "Speaker",
      what: "Complex systems and the perception of empathy: what happens to a society when systems feel empathic, and where the manipulation risks sit. Date being confirmed.",
    },
    it: {
      n: "Venice AI Expo",
      when: "nov 2026",
      how: "Speaker",
      what: "Sistemi complessi e percezione di empatia: cosa succede a una società quando i sistemi sembrano empatici, e dove stanno i rischi di manipolazione. Data in definizione.",
    },
  },
  {
    id: "tedx-barletta",
    logo: "ted",
    en: {
      n: "TEDxBarletta",
      when: "Oct 2026",
      how: "Speaker",
      what: 'Theme "Supernova", about 3,500 people. On moral uncertainty about AI systems and what our conduct under it says about us.',
    },
    it: {
      n: "TEDxBarletta",
      when: "ott 2026",
      how: "Speaker",
      what: 'Tema "Supernova", circa 3.500 persone. Sull\'incertezza morale sui sistemi AI e su cosa dice di noi come ci comportiamo quando non sappiamo.',
    },
  },
]
