import { media, type MediaId } from '../data/site';

interface Props {
  id: MediaId;
  className?: string;
}

/**
 * Image slot. Renders the hatched placeholder with its caption until a real
 * file is set on the entry in `data/site.ts`.
 */
export default function MediaSlot({ id, className }: Props) {
  const item = media[id];
  const classes = ['media', item.src ? '' : 'hatch', className].filter(Boolean).join(' ');

  return (
    <figure className={classes} style={{ margin: 0 }}>
      {item.src ? (
        <img src={item.src} alt={item.alt ?? item.caption} loading="lazy" />
      ) : (
        <figcaption>{item.caption}</figcaption>
      )}
    </figure>
  );
}
