# Nunna Leekhith Sri Krishna — Developer Portfolio

A modular, single-page developer portfolio built with vanilla HTML, CSS, and JavaScript
(no frameworks, no build step) — designed for static hosting on GitHub Pages.

## Live Site

Once GitHub Pages is enabled (see below), the site will be available at:

```
https://leekhithnunna.github.io/portfolio/
```

## Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties (design tokens), Flexbox/Grid layout, keyframe animations,
  dark/light theming via `[data-theme]`
- **Vanilla JavaScript (ES Modules)** — no frameworks or libraries
  - `IntersectionObserver` for scroll-reveal animations and skill-tag reveals
  - In-memory state only for theme switching (no `localStorage`/`sessionStorage`)
  - Front-end form validation with no backend

## Project Structure

```
portfolio/
├── index.html              # Single-page markup, links every stylesheet/script
├── assets/
│   ├── images/              # profile.jpg, favicon.ico
│   └── resume/               # Leekhith_Resume.pdf
├── css/
│   ├── base.css              # reset, variables, typography, theme tokens
│   ├── layout.css             # containers, section spacing
│   ├── navbar.css | hero.css | about.css | skills.css
│   ├── projects.css | achievements.css | research.css
│   ├── contact.css | footer.css
│   └── animations.css         # keyframes + scroll-reveal states
└── js/
    ├── main.js                # entry point, initializes all modules
    ├── navbar.js               # sticky nav, mobile menu, scroll-spy
    ├── themeToggle.js          # dark/light toggle (in-memory state)
    ├── typingEffect.js         # animated hero tagline
    ├── scrollReveal.js         # IntersectionObserver reveal animations
    ├── skillsAnimation.js      # renders + animates skill tags
    ├── projectsFilter.js       # renders cards, filter bar, detail modal
    ├── contactForm.js          # client-side validation & UX feedback
    └── data/
        ├── skills.js
        ├── projects.js
        └── achievements.js
```

## Running Locally

No build tools or dependencies are required. Because the JavaScript uses ES Modules
(`<script type="module">`), open it through a local web server rather than double-clicking
the file (browsers block module imports over the `file://` protocol).

**Option 1 — VS Code Live Server extension**
Right-click `index.html` → "Open with Live Server".

**Option 2 — Python**
```bash
python -m http.server 5500
```
Then visit `http://localhost:5500`.

**Option 3 — Node**
```bash
npx serve .
```

## Customizing Content

All editable content lives in `js/data/`:
- `skills.js` — skill categories and tags
- `projects.js` — project cards (set `githubLink` once repos are public)
- `achievements.js` — achievements/certifications timeline

Swap `assets/images/profile.jpg`, `assets/images/favicon.ico`, and
`assets/resume/Leekhith_Resume.pdf` with your real files (same filenames).

## Deployment (GitHub Pages)

See the terminal commands provided separately to push this repo to GitHub and enable
Pages on the `main` branch, root directory.
