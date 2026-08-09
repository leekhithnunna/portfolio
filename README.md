# Nunna Leekhith Sri Krishna — Developer Portfolio

A multi-page developer portfolio built with vanilla HTML, CSS, and JavaScript
(no frameworks, no build step) — designed for static hosting on GitHub Pages.
Each section (Home, About, Skills, Projects, Achievements, Research, Contact) is
its own page/dashboard rather than a single scrolling page.

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
├── index.html               # Home dashboard — hero, intro video, links to every other page
├── about.html                # About dashboard — banner, portrait, bio, "Beyond the Code" photos
├── skills.html                # Skills dashboard
├── projects.html               # Projects dashboard — filterable cards + detail modal
├── achievements.html            # Achievements timeline + certificate/document gallery
├── research.html                # Research & publications dashboard
├── contact.html                  # Contact dashboard — info + validated form
├── assets/
│   ├── images/                     # favicon.ico, profile.jpg
│   ├── gallery/                     # logo, intro video, personal photos, badges
│   └── certificates/                 # certificate images/PDFs shown in the gallery
├── css/
│   ├── base.css                       # reset, variables, typography, theme tokens
│   ├── layout.css                      # containers, section spacing
│   ├── navbar.css | hero.css | dashboard.css | about.css | skills.css
│   ├── projects.css | achievements.css | research.css | gallery.css
│   ├── contact.css | footer.css
│   └── animations.css                    # keyframes + scroll-reveal states
└── js/
    ├── main.js                            # entry point, initializes all modules
    ├── navbar.js                           # sticky nav, mobile menu, active-page link
    ├── themeToggle.js                       # dark/light toggle (in-memory state)
    ├── typingEffect.js                       # animated hero tagline
    ├── scrollReveal.js                        # IntersectionObserver reveal animations
    ├── skillsAnimation.js                      # renders + animates skill tags
    ├── projectsFilter.js                        # renders cards, filter bar, detail modal
    ├── contactForm.js                            # client-side validation & UX feedback
    ├── aboutMedia.js                              # click-to-enlarge for about.html photos
    ├── certificateGallery.js                       # achievements.html certificate grid
    ├── lightbox.js                                  # shared image lightbox
    └── data/
        ├── skills.js
        ├── projects.js
        ├── achievements.js
        └── certificates.js
```

Every module in `js/main.js` guards on `document.getElementById(...)` before running,
so the same `main.js` entry point is safe to include on every page — each page only
initializes the pieces whose markup is actually present.

There is no visitor gate, admin page, or visitor-log feature — this was removed. Personal
photos are placed contextually rather than in a single "gallery" grid: a wide LinkedIn-cover
banner and formal portrait on `about.html`, two captioned candid photos in the "Beyond the
Code" section, and a small avatar next to the LinkedIn link on `contact.html`.

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
- `certificates.js` — certificate/document cards shown on `achievements.html`

Swap `assets/images/profile.jpg` and `assets/images/favicon.ico`, or the files under
`assets/gallery/` and `assets/certificates/`, with your real files (same filenames, or
update the data files above to point at new ones).

The resume is intentionally **not** hosted in this public repo — the "Request Resume"
button opens a pre-filled `mailto:` link so visitors email a request instead of
downloading it directly. Send the PDF manually once you've screened the request.

## Deployment (GitHub Pages)

See the terminal commands provided separately to push this repo to GitHub and enable
Pages on the `main` branch, root directory.
