import type { Mode } from '@/hooks/useMode';

/** Full-bleed wallpaper, a flat scrim that keeps text legible over the lit
 *  parts of the photo, and a second scrim that deepens behind the detail page. */
export default function Backdrop({ mode }: { mode: Mode }) {
  return (
    <>
      <div className="backdrop" data-mode={mode} aria-hidden="true" />
      <div className="scrim-floor" aria-hidden="true" />
      <div className="scrim" data-mode={mode} aria-hidden="true" />
    </>
  );
}
