import type { Highlight } from './highlight';

/** A job or a qualification — both are "a title, at an org, over a period". */
export interface Role {
  id: string;
  kind: 'work' | 'education';
  title: string;
  org: string;
  /** 'YYYY' or 'YYYY-MM'. */
  start: string;
  /** null = current. */
  end: string | null;
  body: string[];
  highlights?: Highlight[];
  glance?: {
    /** Falls back to `title`. */
    title?: string;
    /** One extra clause worth surfacing in the condensed view. */
    note?: string;
  };
}

/** Newest first. Every derived list below is a projection of this array. */
export const roles: Role[] = [
  {
    id: 'lowdefy',
    kind: 'work',
    title: 'Software Developer',
    org: 'Lowdefy',
    start: '2024-03',
    end: null,
    body: [],
    highlights: [
      {
        id: 'workflows',
        lead: true,
        media: 'workflowShot',
        mediaNote: 'schema snippet — before / after',
        title: 'Tech lead on Workflows',
        body: [
          'A feature that lets users complete forms and actions in a step-by-step tracker, coordinating stages between different parties with different staff handling each one.',
          'I designed a simplified, declarative YAML schema that centralises how these actions are defined. It cut developer time on this work from one to two weeks down to two or three days and made the workflows maintainable across projects.',
        ],
        metrics: ['1–2 weeks → 2–3 days', 'declarative YAML'],
        glance: {
          title: 'Tech lead — Workflows',
          blurb:
            'A declarative YAML schema that centralises how step-by-step user actions are defined and coordinated.',
          metrics: ['1–2 weeks → 2–3 days'],
        },
      },
      {
        id: 'whatsapp',
        title: 'WhatsApp solutions for field work',
        body: [
          'Planned and implemented WhatsApp solutions used regularly by field technicians to complete on-site work, architected for scalability, performance and maintainability by new developers, and integrated with the existing CRM.',
        ],
        metrics: [],
        glance: {
          title: 'WhatsApp field solutions',
          blurb:
            'On-site work completed over WhatsApp, architected for scale and integrated with the existing CRM.',
          metrics: ['field technicians'],
        },
      },
      {
        id: 'kanban',
        title: 'Complex UI: Kanban boards and scheduler calendars',
        body: [
          'Designed, built and optimised complex UI components, rebuilding a board that lagged at a few hundred cards into one that handles a thousand and more comfortably.',
        ],
        metrics: [],
        glance: {
          title: 'Kanban & scheduler UI',
          blurb:
            'Rebuilt a board that lagged at a few hundred cards into one that handles a thousand comfortably.',
          metrics: ['1000+ cards'],
        },
      },
      {
        id: 'performance',
        title: 'Performance across the product',
        body: [
          "Improved application performance throughout my time on the product, optimising database queries through strategic cache management, thoughtful query construction and optimal index usage. I also provided technical insight when discussing clients' processes, to streamline them and integrate new features into the tool.",
        ],
        metrics: [],
        glance: {
          title: 'Performance & data layer',
          blurb:
            'Query construction, cache management and index usage tuned across the product over time.',
          metrics: ['ongoing'],
        },
      },
    ],
  },
  {
    id: 'teaching-assistant',
    kind: 'work',
    title: 'Computer Science Teaching Assistant',
    org: 'Stellenbosch University',
    start: '2023-07',
    end: '2023-10',
    body: [
      'Ran weekly practical sessions helping students complete Python problems; invigilated exams and marked project submissions and demos.',
    ],
    glance: { title: 'Teaching Assistant, Computer Science' },
  },
  {
    id: 'bsc',
    kind: 'education',
    title: 'BSc Mathematical Science (Computer Science)',
    org: 'Stellenbosch University',
    start: '2021',
    end: '2023',
    body: [
      'Coursework included building a compiler in C for a custom language, ALAN, targeting the JVM.',
    ],
    glance: {
      title: 'BSc Mathematical Science (CS)',
      note: 'built a compiler in C targeting the JVM',
    },
  },
];

export const workRoles = roles.filter((role) => role.kind === 'work');
export const educationRoles = roles.filter((role) => role.kind === 'education');

/** The job with no end date. `roles` is authored newest first, so there is exactly one. */
export const currentRole = workRoles.find((role) => role.end === null) ?? workRoles[0];

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const parse = (value: string) => {
  const [year, month] = value.split('-');
  return { year, month: month ? MONTHS[Number(month) - 1] : null };
};

/** `${org} — ${title}`; headings are composed, never stored. */
export const roleHeading = (role: Role) => `${role.org} — ${role.title}`;

/**
 * 'March 2024 → present' · 'July – October 2023' · '2021 – 2023'.
 * `compact` drops the spaces around the dash, as the education block wants.
 */
export function formatPeriod(role: Role, { compact = false } = {}): string {
  const from = parse(role.start);
  const label = (part: ReturnType<typeof parse>) =>
    part.month ? `${part.month} ${part.year}` : part.year;

  if (role.end === null) return `${label(from)} → present`;

  const to = parse(role.end);
  const dash = compact ? '–' : ' – ';
  // Same year: name the months once and share the year — 'July – October 2023'.
  if (from.year === to.year && from.month && to.month) {
    return `${from.month}${dash}${to.month} ${to.year}`;
  }
  return `${label(from)}${dash}${label(to)}`;
}
