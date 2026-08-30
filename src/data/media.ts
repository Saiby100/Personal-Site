export type MediaId =
  | 'portrait'
  | 'projectThumb'
  | 'reminderThumb'
  | 'lspThumb'
  | 'summaryWide'
  | 'workflowShot'
  | 'parserShot'
  | 'reminderShot'
  | 'lspShot';

/**
 * Image slots. `src: null` renders the hatched placeholder with its caption.
 * Drop a file in public/ and set `src` to swap in the real image — no JSX change.
 */
export const media: Record<MediaId, { caption: string; src: string | null; alt?: string }> = {
  portrait: { caption: 'portrait / mountain photograph', src: null },
  projectThumb: { caption: 'AI Reader screenshot', src: null },
  reminderThumb: { caption: 'Reminder home screen', src: null },
  lspThumb: { caption: 'completions in a Lowdefy YAML file', src: null },
  summaryWide: { caption: 'wide landscape photograph — coastline or ridge', src: null },
  workflowShot: { caption: 'step tracker screenshot', src: null },
  parserShot: { caption: 'parser output / reader UI', src: null },
  reminderShot: { caption: 'Reminder \u2014 prayer times and settings', src: null },
  lspShot: { caption: 'Lowdefy LSP \u2014 completion popup in VS Code', src: null },
};
