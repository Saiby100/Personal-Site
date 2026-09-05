# Personal Site

My personal site and CV — [Salahuddin Saiet](https://github.com/Saiby100), software
developer in Cape Town. React + TypeScript + Vite, deployed on Vercel.

The site has two views of the same content: **glance**, a card grid, and **detail**, a
long-form page with a sidebar table of contents. The view is driven by the URL hash
(`#summary`, `#role`, `#project`, `#earlier`, `#skills` land in detail; anything else is
glance) — see `src/hooks/useMode.ts`.

## Commands

```sh
npm install
npm run dev        # local dev server
npm run build      # production build to dist/
npm run preview    # serve the built site
npm run lint       # eslint
npm run format     # prettier --write .
```

## Editing content

All copy lives in `src/data/` — components read it and render both views, so changing what
the site says almost never means touching JSX:

| File           | Holds                                                                |
| -------------- | -------------------------------------------------------------------- |
| `profile.ts`   | Name, role, location, availability, summary paragraphs               |
| `role.ts`      | Jobs and qualifications — both are a title, at an org, over a period |
| `highlight.ts` | Achievements within a role — a card in glance, an article in detail  |
| `project.ts`   | Side projects and their repo links                                   |
| `skill.ts`     | Skills list                                                          |
| `nav.ts`       | Sidebar table of contents (anchors must match `DETAIL_ANCHORS`)      |
| `media.ts`     | Image slots — drop a file in `public/` and set its `src`             |

Images with `src: null` in `media.ts` render a hatched placeholder with the caption, so a
missing asset is visible rather than broken.

## Layout

```
src/
  components/   SiteHeader, Backdrop, glance/, detail/, ui/
  data/         all site content (above)
  hooks/        useMode — glance/detail switching and hash routing
  styles/       tokens.css, base.css, components.css, glance.css, detail.css
public/         images, favicon, CV pdf
design/         mockups and todo notes
```

Colours, type scale and spacing are CSS custom properties in `src/styles/tokens.css`.
