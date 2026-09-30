import "../../styles/index.js"

import { html } from "@inglorious/web"

import { SESSION_TITLE } from "../../data/session.js"
import { localised, shell } from "../../types/shell/index.js"

export const Session = {
  render(entity, api) {
    const locale = entity.locale

    return shell(
      html`${localised(api, "sessionDeck", locale)}`,
      api,
      "/programs/session",
      locale,
    )
  },
}

// The deck is an English document even when reached from the Italian site,
// so it is marked as English for a screen reader.
const META = {
  lang: "en",
  title: `${SESSION_TITLE} — a sample session`,
  description:
    "A sample Better Futures session in the platform fellows see on screen: two hours, six timed activities, and a worked example rebuilt live.",
}

export const metadata = () => META
