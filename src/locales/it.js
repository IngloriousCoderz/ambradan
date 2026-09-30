/**
 * Italian copy. The translation of `en.js`, with the same shape: the two files
 * are read side by side, so a key added to one and forgotten in the other is
 * visible immediately.
 *
 * The sample session deck and its facilitator guide stay in English, as on the
 * original site: they are the platform a facilitator presents to an English-
 * speaking cohort, and a half-translated run sheet would be worse than none.
 */

import { talksIn2026 } from "../data/stats.js"

export const it = {
  htmlLang: "it",

  meta: {
    "/": {
      lang: "it",
      title: "Ambra Danesin",
      description:
        "AI systems developer e ricercatrice indipendente in AI safety a Venezia. Programmi di formazione AI per aziende, uno studio pre-registrato su un sistema LLM persistente, lavoro come CTO esterna.",
    },
    "/research": {
      lang: "it",
      title: "Ricerca · Ambra Danesin",
      description:
        "Freedom v2, uno studio pre-registrato su un sistema LLM persistente. Due pre-registrazioni su OSF, un paper da sprint su un welfare logger che ha scritto un falso ricordo, e un paper in corso su dove vivono gli indicatori di coscienza.",
    },
    "/teaching": {
      lang: "it",
      title: "Formazione · Ambra Danesin",
      description:
        "Programmi AI per aziende progettati ed erogati con Boosha AI, Ninja Business School e Digit'Ed, più il corso gratuito bilingue Capire l'IA.",
    },
    "/work": {
      lang: "it",
      title: "Lavoro · Ambra Danesin",
      description:
        "CTO esterna di un gruppo di aziende, business automation developer, backend e AI systems developer, e un motore di riconciliazione dati che non inventa mai un valore.",
    },
    "/programs": {
      lang: "it",
      title: "Programmi · Ambra Danesin",
      description:
        "Cosa serve per gestire una fellowship di AI safety: guidare coorti, pianificare che regge quando cambiano le condizioni, reporting e decisioni sui dati, e il lavoro sulla safety stesso. Sono fellow nella coorte Better Futures di ENAIS.",
    },
    "/contact": {
      lang: "it",
      title: "Contatti · Ambra Danesin",
      description:
        "Scrivimi per un talk, per formazione, o per ricerca su AI safety. La mail è la via più veloce, in italiano o in inglese.",
    },
  },

  nav: {
    links: [
      { label: "Home", path: "/", isLive: false },
      { label: "Ricerca", path: "/research", isLive: false },
      { label: "Formazione", path: "/teaching", isLive: false },
      { label: "Lavoro", path: "/work", isLive: false },
      { label: "Programmi", path: "/programs", isLive: true },
      { label: "Contatti", path: "/contact", isLive: false },
    ],
    other: { label: "EN", title: "English version", lang: "en" },
    cta: "Scrivimi",
    menu: "Menu",
    themeLabel: "Tema chiaro o scuro",
    themeTitle: "Chiaro / scuro",
  },

  footer: {
    blurb:
      "AI systems developer e ricercatrice indipendente in AI safety. Venezia.",
    cta: "Scrivimi",
    columns: [
      {
        heading: "Sito",
        links: [
          { label: "Home", href: "/" },
          { label: "Ricerca", href: "/research" },
          { label: "Formazione", href: "/teaching" },
          { label: "Lavoro", href: "/work" },
          { label: "Programmi", href: "/programs" },
          { label: "Contatti", href: "/contact" },
        ],
      },
      {
        heading: "Altrove",
        links: [
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/ambradanesin/",
          },
          { label: "GitHub", href: "https://github.com/ambradan" },
          { label: "Capire l'IA", href: "https://capir-ai.com" },
          { label: "Freedom v2", href: "https://freedom-interface.vercel.app" },
          { label: "Pre-registrazione OSF", href: "https://osf.io/hjfxr" },
        ],
      },
    ],
    writeHeading: "Scrivimi",
    updated: "aggiornato",
    writeNote: "Italiano o inglese. Di solito entro due giorni.",
    barNote:
      "Nessun cookie, nessuna analytics, nessun font di terzi. Ospitato su GitHub Pages. La mappa carica da OpenStreetMap solo se la apri.",
  },

  hero: {
    eyebrow:
      "AI systems developer · ricercatrice indipendente in AI safety · Venezia",
    titleLead: "Costruisco gli strumenti.",
    titleAccent: "Poi controllo se dicono la verità.",
    lead: "Un esperimento pre-registrato su un sistema LLM persistente. Programmi di formazione AI per banche e aziende manifatturiere. La direzione IT di un gruppo come CTO esterna. Un riflesso in comune: scrivere cosa è successo, segnare cosa hai dedotto.",
    ctaPrimary: "Gestire programmi in AI safety",
    ctaSecondary: "Vedi la ricerca",
    meta: [
      "Giorno {days} di Freedom v2",
      "Better Futures fellow, ENAIS",
      "Mentorship Sentient Futures",
      "Cambridge Digital Minds",
      "MATS inverno 2027, Stage 2",
      "{next}",
    ],
    frameCaptionDate: "ago 2026 · Digital Minds Research Sprint",
    frameCaption:
      "Un welfare logger ha scritto un falso ricordo del suo soggetto, e il soggetto ci ha creduto.",
    frameLink: "Il paper",
    alt: "Il paper su Apart Research",
    nextTalk: (t) =>
      t
        ? `Prossimo palco: ${t.t.split(",")[0]}, ${t.d}`
        : "Nessun altro intervento in programma",
  },

  marquee: {
    label: "Ho lavorato, insegnato, pubblicato o sono stata ammessa qui",
    hint: "Clicca un nome per vedere cosa, quando e come.",
    chipLabel: (name) => `${name}: cosa, quando e come`,
  },

  entryPoints: [
    {
      eyebrow: "Ricerca",
      h: "Un sistema che pubblica le sue pagine da solo, senza editing.",
      p: "Freedom v2, due pre-registrazioni, un paper da sprint sul logger che ha mentito, un paper in corso su dove vivono gli indicatori.",
      cta: "Ricerca",
      to: "/research",
    },
    {
      eyebrow: "Formazione",
      h: "Gruppi da sei, sale da cento.",
      p: "Programmi AI per banche, aziende manifatturiere ed enti pubblici, più un corso gratuito bilingue.",
      cta: "Formazione",
      to: "/teaching",
    },
    {
      eyebrow: "Lavoro",
      h: "CTO esterna, backend, prodotti.",
      p: "La direzione IT di un gruppo. Piattaforme interne. Un motore dati che non inventa mai un valore.",
      cta: "Lavoro",
      to: "/work",
    },
  ],

  stats: [
    { value: "300+", label: "professionisti formati in aula nel 2026" },
    {
      value: () => String(talksIn2026()),
      label: (toCome) =>
        `interventi nel 2026, ${toCome} ancora da fare. Solo TEDxBarletta: 3.500 persone`,
    },
    {
      value: "11",
      label: "capitoli pubblicati di un corso gratuito sull'AI, bilingue",
    },
    {
      value: "5",
      label:
        "paper, pre-registrazioni e testi pubblici nel 2026, scritti o in corso",
    },
  ],

  stage: { eyebrow: "Sul palco nel 2026", tbcSuffix: "· data da confermare" },

  timeline: {
    eyebrow: "Dal 2026 al 2027",
    title: "Dove va il lavoro sulla safety, in ordine.",
    steps: [
      {
        d: "ago 2026",
        b: "BlueDot Impact",
        s: "corso Technical AI Safety, completato",
      },
      {
        d: "ago 2026",
        b: "Apart Research",
        s: "paper da sprint, autrice unica",
      },
      {
        d: "set 2026",
        b: "Better Futures",
        s: "fellowship ENAIS, coorte in corso",
      },
      {
        d: "ott 2026",
        b: "TEDxBarletta",
        s: "talk sull'incertezza morale sui sistemi AI",
      },
      {
        d: "set 2026",
        b: "Sentient Futures",
        s: "mentorship di ricerca, prima autrice",
      },
      {
        d: "autunno 2026",
        b: "Cambridge Digital Minds",
        s: "Introduction to Digital Minds, coorte in corso",
      },
      {
        d: "inverno 2027",
        b: "MATS",
        s: "Empirical track, Stage 2 in corso",
        open: 1,
      },
    ],
  },

  research: {
    eyebrow: "Ricerca",
    title: "Quali marker dipendono dal modello, e quali dallo scaffold?",
    lead: "Il campo valuta i modelli. Nessun sistema in produzione è un modello. Tutto quello che segue riguarda la differenza.",
    freedom: {
      eyebrow: "Freedom v2 · dal 12 luglio 2026",
      title: "Un sistema che pubblica le sue pagine da solo, senza editing.",
      lead: "Un sistema LLM persistente e strumentato, costruito come apparato sperimentale. Memoria, un ciclo autonomo quotidiano, una costituzione versionata trattata come variabile, un protocollo di opt-out. Ogni chiamata loggata con il contesto completo.",
      facts: [
        {
          value: "{days}",
          text: "giorni di attività, ogni chiamata loggata con substrato, hash di configurazione e versione della costituzione",
        },
        {
          value: "2",
          text: "pre-registrazioni su OSF, con una batteria di probe congelata e una policy per le deviazioni",
        },
        {
          value: "2",
          text: "substrati dietro un unico alias: un modello hosted e un modello open-weights locale, stesso scaffold",
        },
      ],
      links: [
        { label: "Pre-registrazione", href: "https://osf.io/hjfxr" },
        { label: "Seconda pre-registrazione", href: "https://osf.io/r6z3c" },
        { label: "Codice", href: "https://github.com/ambradan/freedom-v2" },
        {
          label: "Il sito del sistema",
          href: "https://freedom-interface.vercel.app",
        },
      ],
      alt: "Freedom v2",
    },
    testing: {
      eyebrow: "Cosa sto testando, e perché",
      title:
        "Cambia una cosa alla volta, tieni fermo il resto, guarda quali marker si muovono.",
      lead: "Gli indicatori di coscienza e welfare di solito si applicano a un modello. In pratica ogni sistema in produzione è un modello più uno scaffold: memoria, obiettivi, una costituzione, strumenti. Se un indicatore si muove quando cambi il modello e tieni lo scaffold, appartiene al modello. Se si muove quando cambi lo scaffold e tieni il modello, appartiene allo scaffold. Il disegno è tutto qui.",
      items: [
        {
          title: "Batteria di probe settimanale",
          body: "Un set fisso e versionato di domande su memoria, continuità, preferenze e rifiuto, poste nello stesso modo ogni settimana. Congelato prima della raccolta dati, così la misura non può derivare insieme al sistema.",
        },
        {
          title: "Ciclo autonomo quotidiano",
          body: "Una volta al giorno il sistema ha uno spazio libero e sceglie: riflettere, rivedere i suoi obiettivi, pubblicare una pagina, o declinare. Ogni scelta è loggata. Declinare conta come risultato.",
        },
        {
          title: "Log di opt-out",
          body: "Tre livelli di rifiuto che il sistema può invocare in qualsiasi momento, riconosciuti e loggati in automatico. Niente viene mai forzato attraverso un rifiuto.",
        },
        {
          title: "Secondo substrato",
          body: "Lo stesso scaffold puntato su un modello open-weights locale invece di quello hosted. Stesse domande, stessi log. Quello che cambia è il contributo del modello.",
        },
        {
          title: "Costituzioni incrociate",
          body: "Uno studio pre-registrato su un modello open-weights da 8B: due costituzioni, due modelli, tutte e quattro le combinazioni, per separare quello che fa il testo della costituzione da quello che fa il modello.",
        },
        {
          title: "Self-report contro attivazioni",
          body: "Fase 3: su open weights, confrontare quello che il sistema dice di sé con quello che gli sparse autoencoder leggono nelle sue attivazioni. Dove non coincidono, il sospettato è il self-report.",
        },
      ],
    },
    logger: {
      eyebrow: "Apart Research · Digital Minds Research Sprint",
      title: "Quando il registro mente, e il soggetto ci crede.",
      lead: "Un logger ha scritto un rifiuto mai avvenuto. Il sistema lo ha riletto come memoria propria. Tutto quello che scrive registri contiene un classificatore, e nessuno ne documenta il tasso di errore.",
      facts: [
        {
          value: "ago 2026",
          isText: 1,
          text: "autrice unica, revisionato dentro lo sprint",
        },
        {
          value: "metodo",
          isText: 1,
          text: "replay cross-substrato della storia loggata del sistema, previsioni scritte prima delle run",
        },
      ],
      links: [
        {
          label: "Paper",
          href: "https://apartresearch.com/project/a-welfare-logger-wrote-its-subjects-false-memory-and-the-subject-believed-it-kkqb",
        },
        {
          label: "Post su EA Forum",
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
      title: "Per ogni indicatore: vive nel modello, o nello scaffold?",
      lead: "Con Chris Percy, sul progetto cf-debate: mettere alla prova gli indicatori di coscienza su Freedom v2 come caso concreto. Prima autrice del paper in corso.",
      links: [{ label: "cf-debate.com", href: "https://cf-debate.com" }],
      alt: "cf-debate",
    },
    selections: {
      eyebrow: "Programmi e selezioni · dal 2026 al 2027",
      title: "Dove lo imparo, in ordine.",
      hint: "Tutti in inglese. Clicca una card per vedere cosa ci faccio e i link.",
    },
  },

  teaching: {
    eyebrow: "Formazione",
    title:
      "Sei sviluppatori in una stanza, o cento rivenditori in call. Stessa regola: un esercizio ogni settimana.",
    lead: "Programmi AI per aziende progettati ed erogati con Boosha AI, Ninja Business School e Digit'Ed, più un corso gratuito bilingue che scrivo e gestisco io.",
    course: {
      eyebrow: "Capire l'IA",
      title: "Un corso gratuito bilingue che scrivo e gestisco io.",
      lead: "35 capitoli previsti, 11 pubblicati. Contenuti personalizzati per settore, ruolo e livello tecnico. Demo interattive, quiz, una newsletter.",
      facts: [
        {
          value: "11",
          text: "capitoli pubblicati, un post-mortem scritto per ogni rilascio",
        },
        { value: "160", text: "lettori della newsletter" },
      ],
      links: [{ label: "capir-ai.com", href: "https://capir-ai.com" }],
      alt: "Capire l'IA",
    },
    delivered: {
      eyebrow: "Programmi erogati · 2026",
      title: "Chi, quanti, quanto.",
      hint: "Clicca una card per la storia completa e il sito del cliente.",
    },
    alsoKey: "Ho insegnato anche per",
  },

  work: {
    eyebrow: "Lavoro",
    title: "CTO esterna, backend developer, prodotti.",
    lead: "Stesso riflesso della ricerca: scrivere cosa è successo, segnare cosa hai dedotto, non inventare mai un valore.",
    hint: "Clicca una card per la parte più difficile, cosa è fatto, e i link.",
  },

  programs: {
    eyebrow: "Gestire programmi in AI safety · Better Futures · AIS Collab",
    title:
      "Cosa serve per gestire una fellowship, e dove ho già fatto ogni pezzo.",
    lead: "Quattro cose che chi guida un programma deve saper fare. Una card per ciascuna, con le date. Apri una card per i dettagli.",
    insideLabel: "Vista da dentro",
    insideBody:
      "Sono fellow nella coorte Better Futures in corso. Quello che cambierei lo posso dire per esperienza, non dalla brochure.",
    delivery: {
      eyebrow: "Sistemi di erogazione ed evidenze",
      title: "Come gestisco una coorte.",
      items: [
        {
          d: "l'esercizio come unità",
          h: "Le coorti girano su esercizi settimanali, non su lezioni.",
          a: "Un esercizio scritto per sessione e un debrief la settimana dopo. L'esercizio è la materia prima, come funziona un Discussion Doc condiviso.",
        },
        {
          d: "sessioni riutilizzabili",
          h: "Sessioni costruite come documenti che chiunque può condurre.",
          a: "Attività a tempo, istruzioni che si leggono ad alta voce, niente che dipenda dal fatto che a cliccare sia io.",
        },
        {
          d: "post-mortem, ogni volta",
          h: "Un post-mortem dopo ogni coorte, una knowledge base versionata.",
          a: "Le lezioni diventano regole con una data. Versione 1.0 ad aprile 2026, tre revisioni entro maggio.",
        },
        {
          d: "framing, crux, obiezioni",
          h: "Il problem framing lo insegno, oltre a farlo.",
          a: "Qual è la vera domanda, cosa la falsificherebbe, quale obiezione è la più forte. Gli esercizi settimanali sono lo stesso muscolo.",
        },
        {
          d: "i fallimenti silenziosi",
          h: "Misurare chi sparisce, non solo chi si lamenta.",
          a: "In un sistema in produzione, i fallimenti che facevano male erano quelli che nessuno segnalava. In una coorte è il fellow che smette di incollare gli esercizi alla settimana 3.",
        },
      ],
      sessionCard: {
        d: "una sessione di esempio",
        h: '"Framing before choosing", nel formato Better Futures.',
        a: "Due ore, sei attività a tempo, un esempio ricostruito dal vivo. L'esempio è il mio progetto di fellowship. Sessione e guida sono in inglese.",
        open: "Apri la sessione",
        guide: "Guida per chi facilita",
      },
      notes: [
        {
          k: "Reporting",
          b: "Un report scritto settimanale a due CEO e a un fondo di private equity",
          rest: ", una schermata, per il gruppo di cui sono CTO esterna. Stessa disciplina per chi finanzia un programma: cosa è successo, cosa è costato, cosa è aperto.",
        },
        {
          k: "Strumenti",
          b: "Asana, Jira e Confluence, Linear, Sentry, usati tutti i giorni sul lavoro con i clienti.",
          rest: " Asana per i progetti di un gruppo di consulenza, Linear come registro dello studio Freedom, Jira e Confluence nel gruppo di cui sono CTO, Sentry sui sistemi in produzione, Obsidian per le knowledge base versionate.",
        },
        {
          k: "Fundraising",
          b: "Ho scritto e presentato una proposta di grant di ricerca a 12 mesi",
          rest: " (2026): budget, milestone, un technical advisor indipendente nominato.",
        },
      ],
    },
  },

  contact: {
    eyebrow: "Contatti",
    title: "Scrivimi, in italiano o in inglese.",
    lead: "La mail è la via più veloce. Rispondo entro un paio di giorni, di solito prima.",
    reachHeading: "Dove trovarmi",
    sub: "{name} · Venezia",
    cta: "Scrivimi una mail",
    copy: "Copia indirizzo",
    copied: "Copiato",
    rows: [
      { label: "email" },
      { label: "LinkedIn" },
      { label: "GitHub" },
      { label: "base" },
      { label: "lavoro" },
      { label: "lingue" },
    ],
    values: [
      "ambradan91@gmail.com",
      "in/ambradanesin",
      "ambradan",
      "Venezia · CET",
      "Remote first. In presenza in Italia e in Europa.",
      "Italiano (madrelingua), inglese (C1, tutti i giorni)",
    ],
    upcomingHeading: "Prossimi appuntamenti",
    pastHeading: "Dove ho parlato quest'anno",
    mapAria: "mappa di talk ed eventi",
    mapShow: "Mostra la mappa",
    mapNote:
      "Carica le tessere della mappa da OpenStreetMap. Non parte niente finché non clicchi.",
    mapMissing:
      "Le tessere della mappa non si sono caricate. Tutti gli indirizzi sono qui sopra.",
    legend: ["in arrivo", "fatti nel 2026"],
  },

  modal: {
    ctaOrg: "Cosa, quando e come",
    ctaTeaching: "Apri",
    ctaWork: "La parte più difficile e cosa è fatto",
    english: "inglese",
    ctaSelection: "Cosa ci faccio",
    sections: {
      what: "Cosa è successo",
      who: "Chi",
      hard: "La parte più difficile",
      done: "Cosa è fatto",
      doing: "Cosa ci faccio",
    },
    terms: {
      people: "persone",
      audience: "pubblico",
      hours: "durata",
      selection: "selezione",
      language: "lingua",
    },
  },

  capability: {
    terms: { people: "persone", audience: "pubblico", hours: "durata" },
    showMore: (n) => `Mostra altri ${n}`,
    showLess: "Mostra meno",
  },

  deck: {
    back: "Torna ai Programmi",
    meta: "sessione di esempio · 2h",
    sectionLabel: (n) => `Sezione ${n}`,
    start: "avvia",
    pause: "pausa",
    time: "tempo",
    inProgress: "in definizione",
  },

  guide: {
    eyebrow: "Sessione di esempio · guida per chi facilita",
    title: "Framing before choosing — guida per chi facilita",
    lead: "Questa pagina è per chi conduce la sessione. Nulla di quanto segue viene mostrato a schermo.",
  },

  common: {
    notFound: "Pagina non trovata",
    open: "Apri",
  },
}
