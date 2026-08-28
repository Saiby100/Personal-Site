// Single source of truth for every string on the site.
// Content mirrors design/Personal site UI mockups/Salahuddin Saiet - Site.dc.html.

export const profile = {
  name: 'Salahuddin Saiet',
  role: 'Software Developer',
  location: 'Cape Town',
  // Glance card. Kept as prose rather than computed from a start date — a floored
  // year count would render "two years" and contradict the sentence.
  summaryShort:
    'Two and a half years building internal business tooling and streamlining complex business processes. I lead project work end to end, from scoping with clients to partitioning features for my team.',
  summaryLead:
    'Software developer with two and a half years building internal business tooling and streamlining complex business processes.',
  summaryBody:
    'I lead project work end to end, from planning and scoping with clients to partitioning features for my team. I am experienced in agent orchestration throughout the development lifecycle in a production environment, from designing and architecting new features to implementation, reviewing and testing.',
  availability: 'Open to work in Cape Town or remote.',
};

export const links = {
  email: 'salahuddinsaiet.10@gmail.com',
  github: 'https://github.com/Saiby100',
  linkedin: 'https://linkedin.com/in/salahuddin-saiet-2a7190241',
  cv: '/cv.pdf',
  // phone: '061 403 9272', // uncomment to publish a tel: link in both views
};

export interface Skill {
  label: string;
  /** Also shown as a chip in the glance view's condensed list. */
  glance?: boolean;
}

export const skillGroups: { title: string; items: Skill[] }[] = [
  {
    title: 'Languages',
    items: [
      { label: 'Python', glance: true },
      { label: 'JavaScript', glance: true },
      { label: 'TypeScript', glance: true },
      { label: 'Java' },
      { label: 'C' },
      { label: 'Kotlin' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { label: 'Lowdefy' },
      { label: 'React', glance: true },
      { label: 'FastAPI' },
      { label: 'Flask' },
      { label: 'Express' },
      { label: 'Next.js' },
    ],
  },
  {
    title: 'Databases & tools',
    items: [
      { label: 'PostgreSQL', glance: true },
      { label: 'MongoDB', glance: true },
      { label: 'SQL', glance: true },
      { label: 'Git', glance: true },
      { label: 'Docker', glance: true },
      { label: 'Neovim' },
      { label: 'JIRA', glance: true },
      { label: 'Figma' },
    ],
  },
  {
    title: 'Practices',
    items: [
      { label: 'Agile' },
      { label: 'code review' },
      { label: 'CI/CD' },
      { label: 'database design' },
      { label: 'AI agent orchestration' },
    ],
  },
];

/** Chips for the glance skills card, ordered as the mockup lists them. */
export const glanceSkills: string[] = [
  'Python',
  'JavaScript',
  'TypeScript',
  'SQL',
  'PostgreSQL',
  'MongoDB',
  'React',
  'Docker',
  'Git',
  'JIRA',
];

export const glancePractices =
  'Agile · code review · CI/CD · database design · agent orchestration through the development lifecycle';

export interface Highlight {
  id: string;
  title: string;
  glanceTitle: string;
  glanceBlurb: string;
  body: string[];
  metrics: string[];
  glanceMetrics: string[];
  /** Rendered as the section's lead article with a media column. */
  lead?: boolean;
}

export const lowdefy = {
  heading: 'Lowdefy — Software Developer',
  period: 'March 2024 → present',
  highlights: [
    {
      id: 'workflows',
      lead: true,
      title: 'Tech lead on Workflows',
      glanceTitle: 'Tech lead — Workflows',
      glanceBlurb:
        'A declarative YAML schema that centralises how step-by-step client actions are defined and coordinated through the CRM.',
      body: [
        'A feature that lets clients complete forms and actions in a step-by-step tracker tied to an entity, coordinating steps between our client and their client through the CRM, with different staff handling different stages.',
        'I invented a simplified, declarative YAML schema based on Lowdefy patterns that centralises how these actions are defined. It cut developer time on this work from one to two weeks down to two or three days and made the workflows maintainable. Two existing clients adopted it, and it became a selling point in the business model.',
      ],
      metrics: ['1–2 weeks → 2–3 days', '2 clients adopted', 'declarative YAML'],
      glanceMetrics: ['1–2 weeks → 2–3 days', '2 clients adopted'],
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp solutions for field work',
      glanceTitle: 'WhatsApp field solutions',
      glanceBlurb:
        'On-site work completed over WhatsApp, architected for scale and integrated with the existing CRM.',
      body: [
        'Planned and implemented WhatsApp solutions used regularly by around thirty technicians to complete on-site work, architected for scalability, performance and maintainability by new developers, and integrated with the existing CRM.',
      ],
      metrics: [],
      glanceMetrics: ['~30 technicians'],
    },
    {
      id: 'kanban',
      title: 'Complex UI: Kanban boards and scheduler calendars',
      glanceTitle: 'Kanban & scheduler UI',
      glanceBlurb:
        'Rebuilt a board that lagged at a few hundred cards into one that handles a thousand comfortably.',
      body: [
        "Designed, built and optimised complex UI components, rebuilding a board that lagged at a few hundred cards into one that handles a thousand and more comfortably — faster than GitHub's equivalent.",
      ],
      metrics: [],
      glanceMetrics: ['1000+ cards'],
    },
    {
      id: 'performance',
      title: 'Performance across the product',
      glanceTitle: 'Performance & data layer',
      glanceBlurb:
        'Query construction, cache management and index usage tuned across the product over time.',
      body: [
        "Improved application performance throughout my time on the product, optimising database queries through strategic cache management, thoughtful query construction and optimal index usage. I also provided technical insight when discussing clients' processes, to streamline them and integrate new features into the tool.",
      ],
      metrics: [],
      glanceMetrics: ['ongoing'],
    },
  ] as Highlight[],
};

export const project = {
  name: 'AI Reader',
  stack: 'Python · FastAPI · Docling · RapidOCR · Docker',
  glanceBlurb:
    'A document parsing service. PDFs with a broken text layer lost their ligatures; I re-read the affected pages with OCR to map every broken glyph, then applied that map across the document.',
  body: [
    'A FastAPI service that parses uploaded documents, with bearer-token auth, file validation and models loaded lazily on startup.',
    'PDFs with a broken text layer were not parsed correctly. I recovered the lost ligatures by identifying the affected pages, re-reading them with OCR to build a mapping of each unique broken glyph, then applying that mapping across the document.',
    'The pipeline stays cheap to run: OCR and formula enrichment default off, since the enrichment pass runs a vision-language model per block. Around 350 lines of tests cover the parser. It runs as a two-service Docker Compose stack alongside the Next.js front end, with a healthcheck gating startup and a named volume for the model cache.',
  ],
};

export const education = [
  {
    title: 'Computer Science Teaching Assistant',
    glanceTitle: 'Teaching Assistant, Computer Science',
    meta: 'Stellenbosch University · July – October 2023',
    glanceMeta: 'Stellenbosch University, July–October 2023',
    body: 'Ran weekly practical sessions helping students complete Python problems; invigilated exams and marked project submissions and demos.',
  },
  {
    title: 'BSc Mathematical Science (Computer Science)',
    glanceTitle: 'BSc Mathematical Science (CS)',
    meta: 'Stellenbosch University · 2021 – 2023',
    glanceMeta: 'Stellenbosch University, 2021–2023 · built a compiler in C targeting the JVM',
    body: 'Coursework included building a compiler in C for a custom language, ALAN, targeting the JVM.',
  },
];

export type MediaId = 'portrait' | 'projectThumb' | 'summaryWide' | 'workflowShot' | 'parserShot';

/**
 * Image slots. `src: null` renders the hatched placeholder with its caption.
 * Drop a file in public/ and set `src` to swap in the real image — no JSX change.
 */
export const media: Record<MediaId, { caption: string; src: string | null; alt?: string }> = {
  portrait: { caption: 'portrait / mountain photograph', src: null },
  projectThumb: { caption: 'AI Reader screenshot', src: null },
  summaryWide: { caption: 'wide landscape photograph — coastline or ridge', src: null },
  workflowShot: { caption: 'step tracker screenshot', src: null },
  parserShot: { caption: 'parser output / reader UI', src: null },
};

export const tocItems = [
  { href: '#summary', label: 'Summary' },
  { href: '#lowdefy', label: 'Lowdefy, 2024→' },
  { href: '#project', label: 'AI Reader' },
  { href: '#earlier', label: 'Teaching & education' },
  { href: '#skills', label: 'Skills' },
];
