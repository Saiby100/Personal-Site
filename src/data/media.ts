export type MediaId =
  | 'portrait'
  | 'projectThumb'
  | 'reminderThumb'
  | 'lspThumb'
  | 'summaryWide'
  | 'rolePortrait'
  | 'reminderShot'
  | 'lspShot';

/**
 * Image slots. `src: null` renders the hatched placeholder with its caption.
 * Drop a file in public/ and set `src` to swap in the real image — no JSX change.
 * `bleed` drops the frame and rounds the art itself, cropping it to the slot.
 * `icon` is the app-mark treatment: no frame, and one square size across every
 * slot so the three project cards match. `aspect` sizes a slot to the art's own
 * shape rather than the slot's default, `maxWidth` caps how wide it gets.
 */
export const media: Record<
  MediaId,
  {
    caption: string;
    src: string | null;
    alt?: string;
    bleed?: boolean;
    icon?: boolean;
    /** CSS aspect-ratio, e.g. '16 / 9'. */
    aspect?: string;
    /** CSS length capping the slot's width; it stays centred in its column. */
    maxWidth?: string;
    /** Attribution, laid over the bottom of the image. */
    credit?: { author: string; authorHref: string; source: string; sourceHref: string };
  }
> = {
  portrait: { caption: 'portrait', src: '/me-2.png', alt: 'Salahuddin Saiet' },
  projectThumb: {
    caption: 'AI Reader icon',
    src: '/ai-reader-icon.png',
    alt: 'AI Reader icon \u2014 a white star on a blue square',
    icon: true,
  },
  reminderThumb: {
    caption: 'Reminder app icon',
    src: '/reminder-icon.png',
    alt: 'Reminder app icon \u2014 a gold mosque arch, crescent and lantern on navy',
    icon: true,
  },
  lspThumb: {
    caption: 'Lowdefy icon',
    src: '/lowdefy-icon.png',
    alt: 'Lowdefy icon \u2014 a white and a blue block on a black rounded square',
    icon: true,
  },
  summaryWide: {
    caption: 'Camps Bay, Cape Town',
    src: '/cape-town.jpg',
    alt: 'Camps Bay at sunset \u2014 the Twelve Apostles above the bay and the Atlantic',
    bleed: true,
    credit: {
      author: 'Tobias Reich',
      authorHref:
        'https://unsplash.com/@electerious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      source: 'Unsplash',
      sourceHref:
        'https://unsplash.com/photos/brown-rocky-mountain-beside-sea-during-daytime--7ZwuyDx2rI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    },
  },
  rolePortrait: {
    caption: 'portrait',
    src: '/me-role.webp',
    alt: 'Salahuddin Saiet',
    bleed: true,
    aspect: '3 / 4',
  },
  reminderShot: {
    caption: 'Reminder \u2014 prayer times and settings',
    src: '/reminder-app.gif',
    alt: 'Screen recording of Reminder \u2014 prayer times, qibla and settings',
    bleed: true,
    aspect: '9 / 20',
    maxWidth: '11.25rem',
  },
  lspShot: {
    caption: 'Lowdefy LSP \u2014 completion popup in VS Code',
    src: '/lowdefy-lsp.gif',
    alt: 'Screen recording of completions and diagnostics in a Lowdefy YAML file',
    bleed: true,
    aspect: '16 / 9',
  },
};
