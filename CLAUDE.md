# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## What This Is

Earthbook is a **static HTML/JS book-publishing format** — no build system, no framework, no server required. The live instance publishes the *Tractatus Ayyew* at `https://book.earthen.io`. Deployment is Apache-served static files with `.htaccess` for HTTPS enforcement and language routing.

There is no `npm run build`, no compilation step, and no test suite. Changes to HTML/CSS/JS are effective immediately on save.

---

## Repository Structure

```
/                       — Root-level shared assets (CSS, JS, service worker)
├── en/                 — English content (HTML chapters + includes/)
│   ├── *.html          — Chapter pages
│   ├── chapters-index.json
│   ├── glossary.json
│   └── includes/       — English Web Components (*.js)
├── fr/                 — French content (parallel structure to en/)
├── fonts/ icons/ svgs/ photos/ covers/ favicons/ webp/ pngs/ banners/
├── comments/           — PHP comment system (Engage framework)
└── clip-off/           — clipboard.js dependency (npm-managed, pre-built)
```

---

## Page Architecture

Every chapter page follows the same pattern:

1. **`<head>`** — global vars (`lang`, `chapNo`, `chapName`, `subSource`), stylesheet links, service worker registration
2. **Web Components** — `<script src="../includes/header-component.js">` etc. loaded at top
3. **Body** — chapter content HTML
4. **Deferred scripts** — `universal-javascript.js`, `book-note-scripts.js`, `subscription-system.js`, `dark-mode-toggle.mjs.js`

The `en/includes/` and `fr/includes/` directories contain all interactive UI overlays as **vanilla Web Components** (class extends HTMLElement, registered with `customElements.define()`). Each "curtain" is a full-screen overlay — there are ~15 of them (TOC, settings, share, annotations, search, etc.).

---

## Key Files

| File | Purpose |
|------|---------|
| `universal-javascript.js` | Core app logic — curtain open/close functions, scroll handlers, font size, focus management |
| `book-note-scripts.js` | Highlight/annotation system — localStorage persistence, DOM reconstruction of highlights |
| `subscription-system.js` | Email capture and webhook submission |
| `service-worker.js` | PWA caching (cache version: `earthbook-cache-v7.3`) |
| `style-sheet.css` | Primary layout and typography |
| `stylesheet-chapter.css` | Chapter content blocks, footnotes, figures |
| `light.css` / `dark.css` | Theme overrides — driven purely by CSS `prefers-color-scheme` media query, no JS |
| `en/chapters-index.json` | Book structure metadata (postID, title, keywords, word counts, image URLs) |
| `en/glossary.json` | Term definitions with cross-references |

---

## Conventions

**Global page variables** — set in each HTML file's `<head>` before any scripts:
```javascript
var lang = "en"
var chapNo = "3"
var chapName = "Energy"
var chaptURL = "energy.html"
var subSource = 'tractatus-ayyew'
```

**Curtain pattern** — overlays are opened/closed via functions in `universal-javascript.js` (e.g., `openSettings()`, `openComments()`, `openBuy()`). Each curtain is a Web Component in `includes/`.

**Book notes** — stored in `localStorage` under key `bookNotes` as a JSON array. Each entry includes `id`, `containerHTML`, `startContainer`, and color metadata. Highlights are reconstructed on page load by `recreateHighlights()` in `book-note-scripts.js`.

**Dark mode** — CSS-only via `prefers-color-scheme`. `dark-mode-toggle.mjs.js` only listens for system changes; it does not add a manual override toggle.

**Multi-language** — `/en/` and `/fr/` are parallel directory structures with their own component includes. The root `index.html` redirects based on `navigator.language`; `.htaccess` also redirects based on `Accept-Language` header.

**Deleted files** — legacy/superseded files are suffixed `-DEL.js` or `-DEL.css` rather than removed from git immediately.

**Landing pages** — chapter files with a `matter` prefix (e.g., `matter.html`) are marketing/landing pages for the book, separate from the chapter reading experience.
