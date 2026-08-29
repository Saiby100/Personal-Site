import type { MediaId } from './media';

export interface Project {
  id: string;
  name: string;
  stack: string;
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
    stack: 'Python · FastAPI · Docling · RapidOCR · Docker',
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
  // TODO: replace the two entries below with real projects.
  {
    id: 'project-two',
    name: 'Second Project',
    stack: 'TypeScript · React · PostgreSQL',
    body: [
      'What the project is and who it was for.',
      'The hard part, and how you solved it.',
    ],
    media: 'projectTwoThumb',
    detailMedia: 'projectTwoShot',
    glance: {
      title: 'Second',
      blurb: 'One or two sentences on the problem, what you built and the result it produced.',
    },
  },
  {
    id: 'project-three',
    name: 'Third Project',
    stack: 'Stack · goes · here',
    body: [
      'What the project is and who it was for.',
      'The hard part, and how you solved it.',
    ],
    media: 'projectThreeThumb',
    detailMedia: 'projectThreeShot',
    glance: {
      title: 'Third',
      blurb: 'One or two sentences on the problem, what you built and the result it produced.',
    },
  },
];
