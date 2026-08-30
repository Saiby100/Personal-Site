export type MediaId =
  | 'portrait'
  | 'projectThumb'
  | 'reminderThumb'
  | 'lspThumb'
  | 'summaryWide'
  | 'workflowShot'
  | 'reminderShot'
  | 'lspShot';

/**
 * Image slots. `src: null` renders the hatched placeholder with its caption.
 * Drop a file in public/ and set `src` to swap in the real image — no JSX change.
 * `bleed` drops the frame and rounds the art itself, cropping it to the slot;
 * add `contain` for art that must not be cropped at all (a vector icon).
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
    contain?: boolean;
    portrait?: boolean;
    /** Attribution, laid over the bottom of the image. */
    credit?: { author: string; authorHref: string; source: string; sourceHref: string };
  }
> = {
  portrait: { caption: 'portrait', src: '/me-2.png', alt: 'Salahuddin Saiet' },
  projectThumb: {
    caption: 'AI Reader icon',
    src: '/ai-reader-icon.png',
    alt: 'AI Reader icon \u2014 a white star on a blue square',
    // A vector mark with its own rounded edge: cropping it would square it off.
    bleed: true,
    contain: true,
  },
  reminderThumb: {
    caption: 'Reminder app icon',
    src: '/reminder-icon.png',
    alt: 'Reminder app icon \u2014 a gold mosque arch, crescent and lantern on navy',
    // A square icon carrying its own edge: no frame, and the crop is all margin.
    bleed: true,
  },
  lspThumb: { caption: 'completions in a Lowdefy YAML file', src: null },
  summaryWide: {
    caption: 'Camps Bay, Cape Town',
    src: '/cape-town.jpg',
    alt: 'Camps Bay at sunset \u2014 the Twelve Apostles above the bay and the Atlantic',
    credit: {
      author: 'Tobias Reich',
      authorHref:
        'https://unsplash.com/@electerious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      source: 'Unsplash',
      sourceHref:
        'https://unsplash.com/photos/brown-rocky-mountain-beside-sea-during-daytime--7ZwuyDx2rI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    },
  },
  workflowShot: { caption: 'step tracker screenshot', src: null },
  reminderShot: {
    caption: 'Reminder \u2014 prayer times and settings',
    src: '/reminder-app.gif',
    alt: 'Screen recording of Reminder \u2014 prayer times, qibla and settings',
    bleed: true,
    portrait: true,
  },
  lspShot: { caption: 'Lowdefy LSP \u2014 completion popup in VS Code', src: null },
};
