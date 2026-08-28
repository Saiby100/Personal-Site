interface Props {
  onToggle: () => void;
}

export default function GlanceToggle({ onToggle }: Props) {
  return (
    <button
      type="button"
      className="g-toggle"
      onClick={onToggle}
      title="Switch to the full detail page"
    >
      <span className="g-toggle-label">At a glance</span>
      <span className="g-toggle-track" aria-hidden="true">
        <span className="g-toggle-knob" />
      </span>
      <span className="g-toggle-label g-toggle-label--off">In detail</span>
    </button>
  );
}
