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
    item.portrait && 'media-portrait',
    level && 'surface',
    className,
  );

  return (
    <figure
      className={classes}
      data-level={level}
      data-radius={level ? radius : undefined}
    >
      {item.src ? (
        <img src={item.src} alt={item.alt ?? item.caption} loading="lazy" />
      ) : (
        <figcaption>{item.caption}</figcaption>
      )}
    </figure>
  );
}
