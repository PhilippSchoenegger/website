# Personal Website

A static personal website built with modern web technologies.

## Tech Stack

- **Framework:** [Astro](https://astro.build/) v5 — Static site generator with zero JS by default
- **Styling:** Vanilla CSS with CSS custom properties
- **Animation:** [GSAP](https://greensock.com/gsap/) — Smooth scroll and UI transitions
- **Content:** YAML-based content management (`content.yaml`)
- **Markdown:** [Marked](https://marked.js.org/) — Markdown parsing for rich text content
- **TypeScript:** Type-safe component props and data structures
- **Hosting:** GitHub Pages with automated deployment

## Project Structure

```
├── public/            # Static assets (images, favicon, CNAME)
├── src/
│   ├── components/    # Reusable Astro components
│   ├── layouts/       # Page layouts
│   ├── pages/         # Route pages
│   ├── styles/        # Global CSS
│   └── types.ts       # TypeScript type definitions
├── content.yaml       # Site content (text, publications, etc.)
└── astro.config.mjs   # Astro configuration
```

## Commands

| Command           | Action                              |
| :---------------- | :---------------------------------- |
| `npm install`     | Install dependencies                |
| `npm run dev`     | Start dev server at `localhost:4321`|
| `npm run build`   | Build production site to `./dist/`  |
| `npm run preview` | Preview build locally               |
