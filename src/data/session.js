/**
 * "Framing before choosing": a sample Better Futures session, as content rather
 * than markup, so the deck, the facilitator guide and any future translation
 * all read from one place.
 *
 * Block shapes, discriminated by `k`:
 * - `{k:"eyebrow", text}`
 * - `{k:"title", text, accent?}` — accent renders after `text`, in the accent colour
 * - `{k:"lead", text}`
 * - `{k:"note", text}` — small print, `text` may contain inline markup
 * - `{k:"timer", label, minutes}`
 * - `{k:"agenda", rows:[time, text][]}`
 * - `{k:"template", text}` — preformatted, shown in a fixed-width block
 * - `{k:"reveal", label, blocks}` — collapsed until asked for
 * - `{k:"cards", cols:[Card[]]}` — `Card` is `{tone?, h, ps}`
 * - `{k:"steps", items:[{k, lead, text}][]}`
 * - `{k:"table", head:string[], rows:(string|string[])[]}` — first cell of a
 *   row is treated as the row key
 * - `{k:"flagged", tag, tone, text}`
 *
 * @typedef {{k: string, [key: string]: any}} Block
 */

/** @type {{id: string, alt?: 1, blocks: Block[]}[]} */
export const SESSION = [
  {
    id: "s0",
    blocks: [
      {
        k: "eyebrow",
        text: "Session · week 5 companion · project phase entry",
      },
      { k: "title", text: "Framing before ", accent: "choosing." },
      {
        k: "lead",
        text: "Two hours, one shared document, six timed activities. You arrive with two project pre-proposals. You leave with one that is well-posed: a question that could be wrong, the crux it rests on, the strongest objection to it, and a first milestone that tests it.",
      },
      {
        k: "agenda",
        rows: [
          ["00:00", "Open. Why a good project is a question, not a topic"],
          ["00:12", "From worry to question"],
          ["00:35", "Find the crux"],
          ["00:55", "Break"],
          ["01:05", "Strongest objection, in pairs"],
          ["01:30", "Framing clinic, one proposal"],
          ["01:52", "Commit. Milestone 1"],
          ["02:00", "Close"],
        ],
      },
    ],
  },

  {
    id: "s1",
    alt: 1,
    blocks: [
      {
        k: "eyebrow",
        text: "Before the session · pasted into the Discussion Doc",
      },
      { k: "title", text: "The exercise you did this week." },
      {
        k: "lead",
        text: "Two project pre-proposals, each in four lines, pasted under your name before the session. This is the raw material for everything that follows. If you brought one, that is fine; you will build the second one live.",
      },
      {
        k: "template",
        text: `Pre-proposal A
1. The thing I am worried about (one sentence, plain words)
2. What I want to make (critique / gap analysis / research extension / fieldbuilding artifact)
3. Who would use it, and for what decision
4. What I do not know yet that matters most

Pre-proposal B
(same four lines)`,
      },
      {
        k: "reveal",
        label: "Show a filled example",
        blocks: [
          {
            k: "template",
            text: `Pre-proposal A
1. Worried that value lock-in will happen by drift, not by decision: nobody chooses it, it just becomes too late to leave.
2. A "last exit map": historical cases of entrenchment, coded by mechanism, last available exit, and the warning signal visible from inside.
3. People designing AGI governance institutions, when deciding which reversibility clauses to fight for.
4. Whether historical cases transfer at all to AGI-era lock-in, or whether the speed changes the kind.`,
          },
          {
            k: "note",
            text: "This example is a real fellow's pre-proposal from a previous week. It will be reworked live in the clinic.",
          },
        ],
      },
    ],
  },

  {
    id: "s2",
    blocks: [
      { k: "timer", label: "Open", minutes: 12 },
      { k: "title", text: "A topic cannot be wrong. A question can." },
      {
        k: "lead",
        text: 'Most first proposals are topics: "value lock-in", "AI character", "power concentration". A topic is a place to stand. A question is a bet. The difference is whether, at the end of four weeks, something could have turned out otherwise.',
      },
      {
        k: "cards",
        cols: [
          [
            {
              h: "Topic",
              ps: [
                '"I want to work on persistent path-dependence."',
                "Nothing here can fail. There is no milestone that tests it, and no reader who changes a decision because of it.",
              ],
            },
            {
              tone: "blue",
              h: "Question",
              ps: [
                '"Do historical lock-ins show a recognisable last-exit signal from inside, or is the signal only visible in hindsight?"',
                "This can fail. It names what would count as evidence, and it tells a reader what they would learn if the answer is no.",
              ],
            },
          ],
        ],
      },
      {
        k: "note",
        text: 'Two minutes in silence: reread your pre-proposal A. Is line 1 a topic or a question? Write "T" or "Q" next to it. Then we go round the table, one word each.',
      },
    ],
  },

  {
    id: "s3",
    alt: 1,
    blocks: [
      { k: "timer", label: "Activity 1 · solo, then pairs", minutes: 20 },
      { k: "title", text: "From worry to question." },
      {
        k: "lead",
        text: 'Take line 1 of one pre-proposal. Rewrite it three times, each time answering a harder question. Ten minutes solo, then read your third version to a partner, who answers only one thing: "could this be wrong?"',
      },
      {
        k: "steps",
        items: [
          {
            k: "v1",
            lead: "What, exactly?",
            text: 'Replace every abstract noun with the concrete thing it stands for. "Lock-in" becomes "a rule nobody can repeal because the people who could are gone".',
          },
          {
            k: "v2",
            lead: "Compared to what?",
            text: 'Add the alternative your question rules out. "By drift" only means something next to "by decision".',
          },
          {
            k: "v3",
            lead: "What would I see?",
            text: "Add the observation that would settle it. If nothing would, you still have a topic; go back to v1.",
          },
        ],
      },
      {
        k: "template",
        text: `v1 (what, exactly)
v2 (compared to what)
v3 (what would I see)
Partner's verdict: could this be wrong? yes / no / not yet`,
      },
      {
        k: "reveal",
        label: "Show the example worked through",
        blocks: [
          {
            k: "template",
            text: `v1  I am worried that some rules of an AGI-era institution will become impossible to repeal, because the people who could repeal them are no longer there or no longer able.
v2  ...and that this will happen through accumulated small decisions rather than through one decision anyone would recognise as "locking in".
v3  If that is true, then in past cases of entrenchment we should find a point where an exit was still open and a signal was visible, but nobody acted on it. If we only ever find the signal in hindsight, the "drift" story is weaker than I think.
Partner's verdict: yes, it could be wrong.`,
          },
        ],
      },
    ],
  },

  {
    id: "s4",
    blocks: [
      { k: "timer", label: "Activity 2 · solo", minutes: 20 },
      { k: "title", text: "Find the crux." },
      {
        k: "lead",
        text: "A crux is the belief that, if it changed, would change what you would do. Every project rests on one or two. Naming yours is the difference between a project that learns something and a project that confirms its author.",
      },
      {
        k: "cards",
        cols: [
          [
            {
              h: "The test",
              ps: [
                'Complete the sentence: "If I became convinced that ______, I would drop this project (or change it substantially)."',
                "If nothing fits in the blank, you have not found the crux yet. You have found a preference.",
              ],
            },
            {
              h: "Common false cruxes",
              ps: [
                '"If this turned out to be unimportant." (Too broad. Unimportant compared to what, decided by whom?)',
                '"If someone had already done it." (That changes the shape, not the bet.)',
                '"If I ran out of time." (That is a constraint, not a belief.)',
              ],
            },
          ],
        ],
      },
      {
        k: "template",
        text: `My crux: If I became convinced that ______________________________,
I would ______________________________ instead.
How confident am I in the crux right now: ____ / 10
What would move it by 3 points: ______________________________`,
      },
      {
        k: "reveal",
        label: "Show the example",
        blocks: [
          {
            k: "template",
            text: `My crux: If I became convinced that AGI-era entrenchment happens too fast for any "last exit" to exist as a recognisable moment,
I would drop the historical-cases design and work instead on reversibility clauses that do not depend on anyone noticing in time.
Confidence: 6 / 10
What would move it by 3 points: two or three historical cases where the compression of time (weeks, not decades) still left a visible exit.`,
          },
        ],
      },
    ],
  },

  {
    id: "s5",
    alt: 1,
    blocks: [
      { k: "timer", label: "Break", minutes: 10 },
      {
        k: "title",
        text: "Ten minutes. When we come back, you will be arguing ",
        accent: "against",
        accentThen:
          " your own project, out loud, with someone whose job is to make it worse.",
      },
    ],
  },

  {
    id: "s6",
    blocks: [
      { k: "timer", label: "Activity 3 · pairs, then plenary", minutes: 25 },
      { k: "title", text: "The strongest objection, not the easiest." },
      {
        k: "lead",
        text: "In pairs. Partner A reads their v3 question and their crux. Partner B has five minutes to build the objection that a hostile, well-informed reader would raise, and it must attack the crux, not the topic. Then swap. In plenary, each pair reports the objection they could not answer.",
      },
      {
        k: "cards",
        cols: [
          [
            {
              tone: "amber",
              h: "Rules for partner B",
              ps: [
                'No "have you considered...". Your job is to say why the project fails even if done well.',
                "Aim at the crux. If the objection would survive the author changing their mind about the crux, it is aimed wrong.",
                "Steelman first: say the project back in its best form before you attack it.",
              ],
            },
            {
              h: "Rules for partner A",
              ps: [
                "Write the objection down in B's words, not yours.",
                'You get one sentence to reply, and it has to be either "here is why that is wrong" or "you are right, and here is what changes". "That\'s out of scope" is not available.',
              ],
            },
          ],
        ],
      },
      {
        k: "template",
        text: `Objection I could not answer (in my partner's words):

What it implies for the project: nothing / narrows it / changes the design / kills it`,
      },
      {
        k: "reveal",
        label: "Show the example objection",
        blocks: [
          {
            k: "template",
            text: `Objection: "Your historical cases are all slow. Empires, constitutions, standards. The selection is doing the work: you will find visible exits precisely because you picked cases slow enough to have them. The AGI case is fast by construction, so the map tells you nothing about the case you care about."
Reply: You are right that the selection matters. What changes: the case set needs at least a third of fast entrenchments (weeks to months: currency collapses, platform lock-ins, wartime emergency powers) or the map is not evidence for the AGI case.
Implication: changes the design.`,
          },
        ],
      },
    ],
  },

  {
    id: "s7",
    alt: 1,
    blocks: [
      { k: "timer", label: "Activity 4 · plenary clinic", minutes: 22 },
      { k: "title", text: "Framing clinic: one proposal, rebuilt live." },
      {
        k: "lead",
        text: "One volunteer's proposal on screen. The group rebuilds it in six lines, in order, using only what came out of the last three activities. Nobody adds new ideas; we only sharpen what is there. The volunteer holds the pen and can veto any line.",
      },
      {
        k: "table",
        head: ["Line", "What goes here", "Fails if"],
        rows: [
          ["1 question", "The v3 question, one sentence", "it cannot be wrong"],
          [
            "2 crux",
            '"If I became convinced that..., I would..."',
            "the blank is a preference",
          ],
          [
            "3 objection",
            "The strongest one from Activity 3, in the objector's words",
            "it attacks the topic, not the crux",
          ],
          [
            "4 evidence",
            "What you would have to find for the objection to lose",
            "nothing observable is named",
          ],
          [
            "5 reader",
            "One person, one decision they make differently after reading",
            '"the field" or "policymakers"',
          ],
          [
            "6 milestone 1",
            "What exists at the end of week 6 that tests line 4, however roughly",
            "it is a plan to plan",
          ],
        ],
      },
      {
        k: "reveal",
        label: "Show the example rebuilt",
        blocks: [
          {
            k: "template",
            text: `1  Do historical lock-ins show a last-exit signal visible from inside, including in fast cases, or only in hindsight?
2  If I became convinced that fast entrenchments never leave a recognisable exit, I would work on reversibility mechanisms that need no one to notice in time.
3  "Your slow cases select for visible exits; the AGI case is fast by construction."
4  At least three fast cases (weeks to months) coded the same way as the slow ones, with an exit and a signal that at least one contemporary named at the time.
5  A person drafting the governance charter of an AGI project, deciding whether to spend political capital on sunset clauses.
6  Week 6: a coded table of 8 cases, 3 of them fast, each with mechanism / last exit / signal / source, and a one-paragraph note on whether the fast ones behave differently.`,
          },
        ],
      },
    ],
  },

  {
    id: "s8",
    blocks: [
      { k: "timer", label: "Commit", minutes: 8 },
      {
        k: "title",
        text: "Commit. Six lines, under your name, before you leave.",
      },
      {
        k: "lead",
        text: "Everyone now rewrites their own chosen proposal in the six-line form and pastes it into the Discussion Doc. This is the proposal that goes into the project phase. The second pre-proposal is kept, unsharpened, as your fallback: if the crux moves in week 6, you already know where you are going.",
      },
      {
        k: "template",
        text: `Name:
1 question
2 crux
3 objection
4 evidence
5 reader
6 milestone 1 (end of week 6)
Fallback: pre-proposal ___ (unchanged)`,
      },
      {
        k: "flagged",
        tag: "counts as success",
        text: "Deciding, on the basis of the crux, that neither proposal is worth four weeks. Write that down instead, with the crux that killed them, and bring one new line 1 to the week 6 check-in.",
      },
    ],
  },

  {
    id: "s9",
    alt: 1,
    blocks: [
      { k: "eyebrow", text: "Close · what happens next" },
      { k: "title", text: "What the facilitator reads before week 6." },
      {
        k: "lead",
        text: "Your six lines are the input to the week 6 proposal workshop and to your first check-in. Two things get read closely: whether line 4 names something observable, and whether line 6 is small enough to exist in a week. A milestone that is too big is the most common way a good question dies quietly.",
      },
      {
        k: "cards",
        cols: [
          [
            {
              h: "By the end of week 6",
              ps: [
                "Milestone 1 exists, in whatever rough form. If it does not, the check-in is about why, not about the plan.",
              ],
            },
            {
              h: "By week 7",
              ps: [
                'You will be asked one question about your crux: has it moved, in which direction, and on what evidence. "Not yet" is an answer. "I have not looked" is the thing we are trying to prevent.',
              ],
            },
          ],
        ],
      },
      {
        k: "title",
        text: "A good project is one where, four weeks from now, ",
        accent: "you could have been wrong",
        accentThen: " and would know it.",
        isStatement: true,
      },
    ],
  },
]

export const SESSION_TITLE = "Framing before choosing"
export const SESSION_FOOTER =
  "Better Futures Fellowship · session format · 2h · use arrow keys or scroll"

/*
 * One store entity per interactive block, so the deck's clocks and worked
 * examples hold their state in the store like everything else. The ids are
 * defined here because `src/store/entities.js` and the deck's template both
 * have to name the same entities.
 */

/** @param {string} sectionId @param {number} index */
export const timerId = (sectionId, index) => `deckTimer-${sectionId}-${index}`

/** @param {string} sectionId @param {number} index */
export const revealId = (sectionId, index) => `deckReveal-${sectionId}-${index}`

/** @type {{id: string, minutes: number, label: string}[]} */
export const SESSION_TIMERS = SESSION.flatMap((section) => {
  const found = section.blocks.filter((block) => block.k === "timer")
  return found.map((block, index) => ({
    id: timerId(section.id, index),
    minutes: block.minutes,
    label: block.label,
  }))
})

/** @type {{id: string}[]} */
export const SESSION_REVEALS = SESSION.flatMap((section) => {
  const found = section.blocks.filter((block) => block.k === "reveal")
  return found.map((_block, index) => ({ id: revealId(section.id, index) }))
})
