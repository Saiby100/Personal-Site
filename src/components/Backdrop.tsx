import type { Mode } from '../hooks/useMode';

/** Full-bleed wallpaper plus a scrim that deepens behind the detail page. */
export default function Backdrop({ mode }: { mode: Mode }) {
  return (
    <>
      <div className="backdrop" data-mode={mode} aria-hidden="true" />
      <div className="scrim" data-mode={mode} aria-hidden="true" />
    </>
  );
}
