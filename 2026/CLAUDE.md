# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing site for **iPlayground 2026** (an iOS Taipei community conference). Lives under the `2026/` subfolder of the parent `iplayground.github.io` repo, deployed via GitHub Pages. Earlier years (`2018/`, `2024/`, etc.) are sibling folders with their own legacy code; only edit `2026/` unless asked otherwise.

## Commands

Vite is used as a dev server only — there is **no build step**, the site ships as raw HTML/CSS/JS to GitHub Pages.

```bash
yarn install        # Yarn 4 with node-modules linker (.yarnrc.yml)
yarn dev            # Vite dev server at http://localhost:1234 (--strictPort)
yarn preview        # Same port, preview mode
```

There are no tests, lint, or typecheck scripts. The CHANGELOG occasionally mentions a `5567` port to avoid conflicts with another project on `5566` — `package.json` is the source of truth for the actual port currently in use.

## Architecture

### Two entry HTML pages, one shared data layer

- `index.html` — main landing page (~2300 lines, large inline `<script>` block from line 579)
- `news.html` — news list + article detail view (driven by `?id=N` query param)

Both pages **fetch the same JSON files from `data/`** in parallel on `DOMContentLoaded` and render client-side. There is no router or framework — vanilla ES6 with template literals.

### Data layer (`data/*.json`)

All content lives in JSON. **To update copy, edit JSON — do not edit HTML strings.** See `data/README.md` for the full schema. Key files:

| File | Used by |
|------|---------|
| `iplayground_news.json` | both pages (news list + article body) |
| `iplayground_agenda.json` | index (agenda cards + modal) |
| `iplayground_speakers.json` | index (speaker grid) |
| `iplayground_staff.json` | index (staff grid) |
| `iplayground_cfp_steps.json` | index (CFP timeline) |
| `iplayground_links.json` | both (social, CFP form, sponsor, COC, contact emails) |
| `iplayground_config.json` | both (footer tagline, venue map embed URLs) |
| `iplayground_i18n.json` | both (UI string table) |
| `confetti-control.json` | index (toggles confetti) |

Bilingual fields use the shape `{ "zh": "...", "en": "..." }`. The JS helper `localized(value, lang)` unwraps these — pass full objects through, don't pre-flatten.

### i18n pattern

- `iplayground_i18n.json` maps keys → `{ zh, en }`.
- HTML elements declare `data-i18n="some_key"` (and contain a default zh value as fallback).
- `applyLang(lang)` walks the DOM and substitutes; values may contain HTML so it sets `innerHTML`.
- The special key `footer_tagline` is marked `__from_config__` and pulled from `iplayground_config.json`.
- When adding a new translatable string: add the key to `iplayground_i18n.json` (zh + en), then put `data-i18n="that_key"` on the element. Do not hardcode strings in JS render functions — wrap them in `localized()` or read from `I18N_DATA`.

### External link pattern

Links never live in HTML. Elements use `data-link="cfp_form"` / `data-link="social_discord"` / `data-link="contact_support"` etc., and `applyLinks(linksJson)` rewrites `href` at runtime from `iplayground_links.json`. Add new links there, not inline.

### Theming / design tokens

- CSS custom properties drive everything — primary knob is `--hue` (0–360) on `:root`, with `oklch()`-derived `--accent`, `--accent-2`, `--accent-3`.
- Light / dark / auto mode is set via `document.documentElement.dataset.mode` (`light` | `dark` | `auto`); `auto` defers to `prefers-color-scheme`.
- User pref persisted in `localStorage` keys: `lang`, `appearance`, `hue`.
- `index.html` has an `EDITMODE-BEGIN` / `EDITMODE-END` block wrapping the `TWEAKS` literal (hue, mode, keyArt, wordmarkStyle) — this is a marker for an external editor that mutates the file in place. Preserve those comments.

### CSS organisation

CSS is split (recently modularised) — do not put new styles back in `index.html`:

- `css/shared.css` — nav, footer, tokens, typography, mode/lang switches (used by both pages)
- `css/main.css` — index-only sections (hero, agenda, FAQ, photo wall, etc.)
- `css/news.css` — news.html only
- `css/fab.css` — floating action buttons (mode/lang/top), used by both
- `css/confetti.css` — index easter egg

`shared-content.js` is a deprecated empty shell kept only to avoid 404s from old references — do not put new shared logic there; share via `data/*.json` instead.

### Static images

- `img/svg/logo_header_light.svg` / `logo_header_dark.svg` — nav logo, swapped via CSS based on theme
- `img/staff/`, `img/speaker/`, `img/slider/` — referenced by JSON `photo` paths
- Missing `photo` falls back to `img/staff/staff_sample.png` (handled in render JS)

## Workflow notes

- `.kiro/hooks/changelog-commit-push.kiro.hook` is a Kiro user-triggered automation that summarises diffs into `CHANGELOG.md`, then commits + pushes. The CHANGELOG follows a strict format: `### \`<short-sha>\` · YYYY.MM.DD\n\n<title>\n\n- bullet\n- bullet\n\n---`. When asked to "update the changelog", insert a new block after the first `---` and keep the format consistent. The top-most block can be `pending` if the change is uncommitted.
- Commit messages on this repo are written in **Traditional Chinese**, title ≤ 50 chars, bullets below — match the existing style in `git log`.
- Parent repo (`iplayground.github.io/`) deploys directly from `master` via GitHub Pages; there is no separate build/deploy step beyond `git push`.
- The site is opened by users via `https://iplayground.io/2026/` (CNAME), so all asset paths must be relative (`img/...`, `data/...`, `css/...`) — never absolute (`/img/...`).

## Design Context

Full version with rationale lives in `.impeccable.md` (auto-loaded by every `/impeccable …` skill). Summary for non-impeccable Claude Code sessions:

### Users
Apple-platform developers in Taiwan (zh-Hant primary, en supported). Three audiences: CFP submitters → attendees → sponsors. Volunteer-run, **not affiliated with Apple Inc.** — the disclaimer is load-bearing.

### Brand Personality
**Crafted · Technical · Communal.** HIG-grade restraint, dev-literate detail, volunteer warmth in the margins (confetti, photo wall, flip countdown). Voice: precise but not stiff. Never use Apple's "we".

### Aesthetic Direction
- **Dark is primary**, light supported. Runtime default stays `auto`.
- **Palette** (exact hex, do not tint): `#000000` canvas · `#3D0000` surface · `#950101` accent · `#FF0000` signal (reserved, ≤10% usage).
- **Typography**: Michroma (display only, caps), Geist (body Latin), PingFang TC → Noto Sans TC (body CJK), Geist Mono (mono). Inter and JetBrains Mono are banned — replace if encountered.
- Hard bans: no `border-left/right > 1px` decorative stripes, no `background-clip: text` gradient text, no AI-startup cyan/purple-glow aesthetic.

### Design Principles
1. **Earned red** — `#FF0000` is signal-only, never decoration.
2. **Wide caps for display, neutral grotesk for body** — never Michroma in paragraphs.
3. **Bilingual without compromise** — test every component in both zh-Hant and en.
4. **Volunteer warmth in the margins** — keep easter eggs, never let them dominate.
5. **HIG structure, not HIG color** — borrow Apple's spacing rhythm, reject Apple's neutral greys.
