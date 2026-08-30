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
 * `bleed` drops the frame and rounds the art itself, cropping it to the slot.
 * `portrait` sizes the slot to tall art (a phone recording) instead of the
 * landscape default.
 */
export const media: Record<
  MediaId,
  {
    caption: string;
    src: string | null;
    alt?: string;
    bleed?: boolean;
    portrait?: boolean;
  }
> = {
  portrait: { caption: 'portrait', src: '/me-2.png', alt: 'Salahuddin Saiet' },
  projectThumb: { caption: 'AI Reader screenshot', src: null },
  reminderThumb: {
    caption: 'Reminder app icon',
    src: '/reminder-icon.png',
    alt: 'Reminder app icon \u2014 a gold mosque arch, crescent and lantern on navy',
    // A square icon carrying its own edge: no frame, and the crop is all margin.
    bleed: true,
  },
  lspThumb: { caption: 'completions in a Lowdefy YAML file', src: null },
  summaryWide: { caption: 'wide landscape photograph — coastline or ridge', src: null },
  workflowShot: { caption: 'step tracker screenshot', src: null },
  parserShot: { caption: 'parser output / reader UI', src: null },
  reminderShot: {
    caption: 'Reminder \u2014 prayer times and settings',
    src: '/reminder-app.gif',
    alt: 'Screen recording of Reminder \u2014 prayer times, qibla and settings',
    bleed: true,
    portrait: true,
  },
  lspShot: { caption: 'Lowdefy LSP \u2014 completion popup in VS Code', src: null },
};
