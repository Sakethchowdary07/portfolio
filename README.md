# Personal Portfolio Website

A modern, interactive single-page portfolio — perfect to link from your resume.
No build step, no dependencies. Pure HTML, CSS, and JavaScript.

## ✨ Features

- **Animated hero** with a looping typing effect
- **Dark / light theme toggle** (remembers your choice)
- **Scroll-reveal animations** on every section
- **Animated skill bars** and **count-up stats**
- **Scroll progress bar** and sticky, blurred navbar
- **Custom cursor glow** + floating gradient orbs background
- **Fully responsive** with a mobile slide-in menu
- **Accessible**: respects `prefers-reduced-motion`

## 🚀 Run it locally

Just open `index.html` in your browser. Or serve it:

```bash
# Python
python3 -m http.server 8000
# then visit http://localhost:8000
```

## ✏️ Customize

Everything you need to personalize is clearly labeled. Edit **`index.html`**:

1. **Name & logo** — replace `Your Name` and the `YN` logo/avatar.
2. **Hero** — update the tagline words (also in `script.js` → `words` array) and intro text.
3. **About** — rewrite the two paragraphs, tech list, and the three stats (`data-count`).
4. **Skills** — change labels and the `data-level` percentages.
5. **Projects** — update titles, descriptions, tags, and the `href`s for Code/Live links.
6. **Experience** — edit the timeline roles, companies, and dates.
7. **Contact & socials** — replace `you@example.com`, GitHub, and LinkedIn URLs.

Colors and fonts live in `styles.css` under `:root` (and `[data-theme="light"]`).

## 🌐 Deploy (free, great for resumes)

- **GitHub Pages** — push to a repo, enable Pages on the `main` branch. Your URL: `https://<username>.github.io/<repo>`
- **Netlify / Vercel** — drag-and-drop the folder, or connect the repo. Instant HTTPS URL.

## 📁 Structure

```
index.html   — markup & content (edit your info here)
styles.css   — all styling & theming
script.js    — interactivity (typing, reveals, counters, theme)
```
