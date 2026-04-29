## Design Context

### Users

iPlayground 2026 is the official site for an annual Apple-platform developer
conference run by iOS Taipei community volunteers since 2018. It is
**not affiliated with Apple Inc.** (legal disclaimer is load-bearing).

Primary audiences, in priority order:

1. **CFP submitters** — Mandarin-speaking iOS / macOS / Swift / SwiftUI
   developers in Taiwan deciding whether to submit a talk. They need to feel
   that this conference is technically credible and that "people like me run
   this". Read on desktop while at work.
2. **Attendees** — same demographic as #1 plus students and Apple-curious
   developers from other stacks. Browse on phones during commutes / breaks.
   Need: dates, agenda, venue, sense of vibe.
3. **Sponsors / sponsor-referrers** — companies and individual referrers
   evaluating whether iPlayground reaches their target hires. Need: clear
   sponsor CTA, evidence of community weight, contact path.

The site is **bilingual zh-Hant + en** (zh-Hant is primary). Every visible
string flows through `data/iplayground_i18n.json`.

### Brand Personality

**Crafted · Technical · Communal.**

- **Crafted.** Apple-developer audience expects HIG-grade restraint, optical
  alignment, intentional spacing, and a dev-literate eye for detail.
  Sloppy = disqualifying.
- **Technical.** Copy reads like a developer wrote it. Dates are precise.
  Code-adjacent moments (mono labels, monospaced timestamps, monospaced
  countdown digits) are welcome — they earn their place.
- **Communal.** Volunteer-run, not corporate. Warmth peeks through in the
  margins: confetti, photo wall, flip-card countdown, easter eggs. The
  conference is for developers, by developers — not a vendor stage.

Voice: precise but not stiff. Avoid corporate marketing register. Avoid
Apple's "we" voice (legally and tonally, this is not Apple).

Emotional goals:
- For developers: *"this is for me, by people like me"*
- For first-timers: *"approachable, not gatekeeping"*
- For sponsors: *"this community has real weight"*

### Aesthetic Direction

**Theme.** Dark is primary. Light mode is a respectful adaptation, not the
hero presentation. Marketing screenshots ship in dark. Runtime default
stays `auto` (existing `applyAppearance()` flow respects
`prefers-color-scheme`).

**Color palette** (user-specified, exact hex values are load-bearing — do
**not** auto-tint or shift these):

| Hex / Color                | Token role                  | Usage                                                              |
|----------------------------|-----------------------------|--------------------------------------------------------------------|
| `#000000`                  | `--c-bg` (dark mode anchor) | Page canvas in dark mode. Pure black is intentional here.          |
| `#282C20`                  | `--c-surface` / depth       | Cards, countdown panel, sticky surfaces, footer wells.             |
| `oklch(0.60 0.03 130)`     | `--c-accent` / quiet support| Hairlines, ghost-CTA borders, secondary marks. No chromatic pop.   |
| `#D2FF00`                  | `--c-signal` / brand signal | Primary CTA, year `2026`, deadline tick — the only colorful note.  |

In OKLCH for derivations only (do not replace the source hex):
- `#000000` → `oklch(0 0 0)`
- `#282C20` → `oklch(0.255 0.014 130)`
- `#D2FF00` → `oklch(0.945 0.235 119)` (~hue 130°, the warm-lime end)

The hue family is ~130° (warm yellow-green). Tint neutrals toward this hue
(chroma ≤ 0.01) for cohesion. Greys must NOT be hue-zero — they read cold
against the lime signal.

**Light mode** derivation (when needed): keep `#D2FF00` as signal, raise
canvas to a warm off-white (`oklch(0.985 0.005 130)` ≈ `#f6f7f1`), surfaces
to `oklch(0.96 0.008 130)`. `#D2FF00` stays as the signal color but loses
its glow; never glow lime in light mode (drop year/crest fills to
`--c-accent` instead — see the hero CSS).

**Typography.**

- **Display: Michroma** (Google Fonts, geometric/wide-caps, tech-editorial).
  Reserved for: hero wordmark, section eyebrows, agenda day tabs, FAB
  labels. Caps-only at display sizes. Never used for paragraphs or
  long-form copy. Letter-spacing should be **tightened** (-0.02 to -0.04em)
  at very large sizes to avoid the default Michroma "too wide" feel.
- **Body Latin: Geist** (free, neutral grotesk, NOT in impeccable's
  reflex-reject list). Loads from `https://fonts.cdnfonts.com/css/geist` or
  the official `vercel/geist-font` GitHub release.
- **Body CJK: PingFang TC** (Apple system font, premium fallback for
  Apple-platform readers) → **Noto Sans TC** (Google Fonts) when PingFang
  is unavailable. Stack:
  `'Geist', 'PingFang TC', 'Noto Sans TC', system-ui, sans-serif`.
- **Mono: Geist Mono** (pairs with Geist; replaces the previous JetBrains
  Mono — banned by impeccable). Stack:
  `'Geist Mono', ui-monospace, 'SF Mono', monospace`.

CJK readability is non-negotiable: body text must hit 16–17px with
`line-height: 1.7` for zh-Hant passages (CJK glyphs are visually denser
than Latin). For mixed zh-Hant + en lines, `font-feature-settings:
'palt' 1` to tighten Mandarin punctuation.

**Decorative grammar.**

- A single saturated lime on near-black is the signature. Use it where it counts.
- HIG-borrowed structure: backdrop-filter blur on the sticky nav (already
  in place), grouped-layout sections with generous gutters
  (`--gutter: 48px`), 8/12/16/24/32/48/64/96 spacing scale.
- Existing easter eggs (confetti on logo click, photo wall, flip-card
  countdown) are part of the brand. **Do not remove.** They live in the
  margins and never break the technical-credibility surface above the
  fold.
- Hard limits from impeccable that bind here:
  - No `border-left` / `border-right` > 1px as decorative stripe on cards,
    callouts, or list items.
  - No `background-clip: text` gradient text fills. Solid color only.
  - No glow-on-dark cyan/purple AI-startup palette (the lime-on-black
    signature already pushes us away from this).

**Anti-references.** None explicitly specified by the user. Implicit
guard-rails (from the brief, not extra): the site must not feel like a
SaaS landing page, an Apple imitator, or an AI-startup launch page.

### Design Principles

1. **Reserved signal.** `#D2FF00` is rare and reserved — treat it as a
   signal flag. Most surfaces sit in `#000000` / `#282C20` and the warm
   off-white inks. Apply the 60-30-10 rule tightly: 60% black canvas,
   30% surface / hairline / ink, ≤10% signal lime.

2. **Wide caps for display, neutral grotesk for body.** Michroma carries
   the headlines and eyebrow labels; Geist + PingFang TC / Noto Sans TC
   carry every paragraph and UI string. Never set a paragraph in Michroma
   "for vibe" — readability beats novelty.

3. **Bilingual without compromise.** Every visible string flows through
   `iplayground_i18n.json` as `{ zh, en }`. Layouts must accommodate both
   languages: Mandarin needs tighter line-height with denser glyphs;
   English needs longer line-length tolerance. Test new components in both
   languages before declaring them done.

4. **Volunteer warmth in the margins.** Easter eggs and micro-delight
   moments (confetti, photo wall, flip countdown, hover micro-interactions
   on staff cards) are intentional brand surface. Keep them. Never let
   them dominate the above-the-fold information layer.

5. **HIG structure, not HIG color.** Borrow Apple's grouped-layout
   discipline (rhythm, generous gutters, sticky nav with backdrop-filter
   blur, optical alignment) but reject Apple's neutral-grey palette. The
   warm-black surface + saturated lime signal is what makes this
   *clearly not an Apple-affiliated event* — and the disclaimer requires
   that distance.
