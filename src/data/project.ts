import type { MediaId } from './media';

export interface Project {
  id: string;
  name: string;
  stack: string[];
  body: string[];
  /** Thumb on the glance card. */
  media: MediaId;
  /** Wider shot in the detail section. */
  detailMedia: MediaId;
  glance: {
    /** Label for the segmented selector; falls back to `name`. */
    title?: string;
    blurb: string;
  };
}

/** Glance card cycles through these; the detail page lists them in order. */
export const projects: Project[] = [
  {
    id: 'ai-reader',
    name: 'AI Reader',
    stack: ['Python', 'FastAPI', 'Docling', 'RapidOCR', 'Docker', 'JavaScript', 'Next.js'],
    body: [
      'A FastAPI service that parses uploaded documents, with bearer-token auth, file validation and models loaded lazily on startup.',
      'PDFs with a broken text layer were not parsed correctly. I recovered the lost ligatures by identifying the affected pages, re-reading them with OCR to build a mapping of each unique broken glyph, then applying that mapping across the document.',
      'The pipeline stays cheap to run: OCR and formula enrichment default off, since the enrichment pass runs a vision-language model per block. Around 350 lines of tests cover the parser. It runs as a two-service Docker Compose stack alongside the Next.js front end, with a healthcheck gating startup and a named volume for the model cache.',
    ],
    media: 'projectThumb',
    detailMedia: 'parserShot',
    glance: {
      blurb:
        'A document parsing service. PDFs with a broken text layer lost their ligatures; I re-read the affected pages with OCR to map every broken glyph, then applied that map across the document.',
    },
  },
  {
    id: 'reminder',
    name: 'Reminder',
    stack: ['TypeScript', 'React Native', 'Expo', 'Expo Router', 'Supabase', 'MMKV', 'EAS'],
    body: [
      'A prayer times app for South African areas, built with Expo and React Native. Times come from Supabase \u2014 a month at a time, cached per area in MMKV \u2014 so moving between days is instant and only a new month costs a request. It started out scraping masjids.co.za with cheerio; moving the data behind a table removed the app\u2019s dependence on someone else\u2019s HTML.',
      'Notifications are scheduled ahead of each prayer with a configurable lead time and per-prayer toggles, and a daily background task re-schedules them so they stay correct without the app being opened.',
      'The qibla screen computes the great-circle bearing to the Kaaba from the device location and reads heading off the magnetometer. Raw readings jitter, so the needle runs through a low-pass filter with a dead zone and a smoothing factor that ramps with the size of the turn: still when the phone is still, responsive when you actually turn.',
      'Also in the app: light and dark themes with selectable backgrounds. It ships through EAS \u2014 GitHub Actions workflows for dev, preview and production builds on both platforms, over-the-air updates, and Play Store submission.',
    ],
    media: 'reminderThumb',
    detailMedia: 'reminderShot',
    glance: {
      title: 'Reminder',
      blurb:
        'A prayer times app for South Africa in Expo and React Native. Times are served from Supabase and cached a month at a time; notifications are scheduled ahead of each prayer, and a daily background task keeps them correct without the app being opened.',
    },
  },
  {
    id: 'lowdefy-lsp',
    name: 'Lowdefy LSP',
    stack: ['TypeScript', 'Language Server Protocol', 'VS Code', 'YAML', 'AJV'],
    body: [
      'Lowdefy apps are written as YAML against a large block schema, and the editor gives you nothing \u2014 every property means a tab-switch to the docs. This is a VS Code extension that puts that schema in the editor.',
      'The client launches the language server as a child process over IPC and watches .yaml and .yml files. The server keeps one context holding the parsed AST for each open document, keyed by URI, so a keystroke re-parses a single document rather than the project.',
      'Completions resolve from the cursor\u2019s position in the AST \u2014 ancestor keys, the block path, whether the cursor sits inside a sequence \u2014 then rank suggestions: block schema properties first, then the defaults every block takes, then operators, actions, connections and methods, each formatted with documentation pulled from the bundled Lowdefy docs.',
      'The same 96 bundled block schemas drive validation. Every edit re-validates the document with AJV, compiling each block type\u2019s schema once and caching it, and publishes the failures back as diagnostics.',
    ],
    media: 'lspThumb',
    detailMedia: 'lspShot',
    glance: {
      title: 'Lowdefy LSP',
      blurb:
        'A VS Code language server for Lowdefy YAML. It caches a parsed AST per open document, works out where the cursor sits in the block tree, and serves completions and AJV diagnostics straight from the 96 bundled block schemas.',
    },
  },
];
