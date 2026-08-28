interface Props {
  onToggle: () => void;
}

export default function DetailToggle({ onToggle }: Props) {
  return (
    <button type="button" className="d-toggle" onClick={onToggle} title="Back to the glance view">
      <span className="d-toggle-off">At a glance</span>
      <span className="d-toggle-on">In detail</span>
    </button>
  );
}
