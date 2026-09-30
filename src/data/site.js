/**
 * Contact details and the content-revision date: facts that are the same in
 * every language. Everything a reader is shown around them lives in the locale
 * files.
 */

export const CONTACT = {
  name: "Ambra Danesin",
  email: "ambradan91@gmail.com",
  avatar: "/img/avatar.webp",
  avatarRound: "/img/avatar-round.webp",
  /**
   * The first three are links; the rest are plain values. Order matches
   * `contact.rows` and `contact.values` in the locale files.
   */
  hrefs: [
    "mailto:ambradan91@gmail.com",
    "https://linkedin.com/in/ambradanesin",
    "https://github.com/ambradan",
  ],
}

/** Date the site content was last reviewed, as shown in the footer. */
export const CONTENT_UPDATED = "29 Sep 2026"
