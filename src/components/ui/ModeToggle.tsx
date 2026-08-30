import type { Mode } from '@/hooks/useMode';

interface Props {
  /** The mode the switch should read as — the destination while a view is leaving. */
  mode: Mode;
  onToggle: () => void;
}

/** The one switch used by both views, so it can flip across the mode change. */
export default function ModeToggle({ mode, onToggle }: Props) {
  return (
    <button
      type="button"
      className="mode-toggle"
      data-mode={mode}
      onClick={onToggle}
      title={mode === 'glance' ? 'Switch to the full detail page' : 'Back to the glance view'}
    >
      <span className="mode-toggle-label">At a glance</span>
      <span className="mode-toggle-track" aria-hidden="true">
        <span className="mode-toggle-knob" />
      </span>
      <span className="mode-toggle-label">In detail</span>
    </button>
  );
}
