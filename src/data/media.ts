export type MediaId =
  | 'portrait'
  | 'projectThumb'
  | 'projectTwoThumb'
  | 'projectThreeThumb'
  | 'summaryWide'
  | 'workflowShot'
  | 'parserShot'
  | 'projectTwoShot'
  | 'projectThreeShot';

/**
 * Image slots. `src: null` renders the hatched placeholder with its caption.
 * Drop a file in public/ and set `src` to swap in the real image — no JSX change.
 */
export const media: Record<MediaId, { caption: string; src: string | null; alt?: string }> = {
  portrait: { caption: 'portrait / mountain photograph', src: null },
  projectThumb: { caption: 'AI Reader screenshot', src: null },
  projectTwoThumb: { caption: 'second project thumbnail', src: null },
  projectThreeThumb: { caption: 'third project thumbnail', src: null },
  summaryWide: { caption: 'wide landscape photograph — coastline or ridge', src: null },
  workflowShot: { caption: 'step tracker screenshot', src: null },
  parserShot: { caption: 'parser output / reader UI', src: null },
  projectTwoShot: { caption: 'second project screenshot', src: null },
  projectThreeShot: { caption: 'third project screenshot', src: null },
};
