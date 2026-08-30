import type { CSSProperties } from 'react';
import { media, type MediaId } from '@/data/media';
import type { SurfaceLevel, SurfaceRadius } from './Surface';
import { cn } from './cn';

interface Props {
  id: MediaId;
  className?: string;
  /** Render the slot as a glass panel rather than a bare framed figure. */
  level?: SurfaceLevel;
  radius?: SurfaceRadius;
}

/**
 * Image slot. Renders the hatched placeholder with its caption until a real
 * file is set on the entry in `data/media.ts`.
 */
export default function MediaSlot({ id, className, level, radius = 'sm' }: Props) {
  const item = media[id];
  const classes = cn(
    'media',
    !item.src && 'hatch',
    item.bleed && 'media-bleed',
    item.icon && 'media-icon',
    item.aspect && 'media-aspect',
    level && 'surface',
    className,
  );

  const shape = {
    '--media-aspect': item.aspect,
    '--media-max': item.maxWidth,
  } as CSSProperties;

  return (
    <figure
      className={classes}
      style={item.aspect ? shape : undefined}
      data-level={level}
      data-radius={level ? radius : undefined}
    >
      {item.src ? (
        <img src={item.src} alt={item.alt ?? item.caption} loading="lazy" />
      ) : (
        <figcaption>{item.caption}</figcaption>
      )}
      {item.src && item.credit && (
        <figcaption className="media-credit">
          Photo by{' '}
          <a href={item.credit.authorHref} target="_blank" rel="noreferrer">
            {item.credit.author}
          </a>{' '}
          on{' '}
          <a href={item.credit.sourceHref} target="_blank" rel="noreferrer">
            {item.credit.source}
          </a>
        </figcaption>
      )}
    </figure>
  );
}
