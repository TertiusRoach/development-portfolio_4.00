# Back-end Rulebook

How the server treats the people using it. Setup is in [MODULES.md](MODULES.md), the structure in [SERVER.md](SERVER.md), the records in [DATA.md](DATA.md).

---

## Contents

1. [Accessibility](#1-accessibility)

---

## 1. Accessibility

The front end can only be as accessible as what the server sends it. The front-end half of these rules, `ariaName` included, is in [FRONT-END.md, Accessibility](../front-end/FRONT-END.md#accessibility).

- **Answers are sentences, not codes.** Every error the server returns carries a plain sentence the `<Form>` can show as it is ("That code has expired. We've sent you a new one."), next to the status code. The front end shows it on the page, and a screen reader reads it out.
- **Time limits are generous.** Verification and reset codes stay valid for 24 hours, as they do in `REVIEW/landing.js`. A new code can be asked for without starting over. Nothing the server checks expires while someone is still typing.
- **Codes are easy to read and type.** Digits only, six of them, matching the six `{block}`s. No lookalike characters, no upper and lower case.
- **Every email has a plain-text twin.** nodemailer sends `text` and `html` together, as `landing.js` already does. The code is written as text, never as an image, and every link says where it goes.
- **No visual-only checks.** No image CAPTCHAs or picture puzzles. The routes are protected by rate limits instead.
- **Display preferences follow the account.** When shade, clarity or reduced motion are stored, each is one flat field on the account, `null` until chosen ([DATA.md, The Rules](DATA.md#the-rules)).
- **Nobody is asked about a disability.** The server never asks for or stores health or disability information. Preferences describe how the page looks, not who the person is.

**Why the back end has rules for this at all.** A screen reader can only read out what reaches the page, and a person can only type a code they can read in time. The front end names every control and shows every message; the server makes sure there's a clear message to show, enough time to act on it, and nothing that only eyes can pass. Splitting it this way keeps each side's rules where its code lives, the same as [DATA.md](DATA.md#1-how-data-reaches-a-table) splits the data route.
