import type { CSSProperties } from 'react';
import { useRef } from 'react';
import { cn } from './cn';

export interface SegmentedOption {
  id: string;
  label: string;
}

interface Props {
  options: SegmentedOption[];
  /** Id of the selected option. */
  value: string;
  onChange: (id: string) => void;
  /** Names the group for assistive tech. */
  label: string;
  className?: string;
}

/**
 * Glass segmented selector. Segments share the track evenly, so the sliding
 * thumb is one column wide and moves by whole columns — no measuring needed.
 */
export default function SegmentedControl({ options, value, onChange, label, className }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const selected = Math.max(
    0,
    options.findIndex((option) => option.id === value),
  );

  /** Moves selection and focus together, as a tablist is expected to. */
  function select(index: number) {
    const next = options[index];
    if (!next) return;
    onChange(next.id);
    trackRef.current?.querySelectorAll('button')[index]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent) {
    const last = options.length - 1;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') select(Math.min(selected + 1, last));
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') select(Math.max(selected - 1, 0));
    else if (event.key === 'Home') select(0);
    else if (event.key === 'End') select(last);
    else return;
    event.preventDefault();
  }

  const style = {
    '--seg-count': options.length,
    '--seg-index': selected,
  } as CSSProperties;

  return (
    <div
      ref={trackRef}
      className={cn('segmented', className)}
      role="tablist"
      aria-label={label}
      style={style}
      onKeyDown={onKeyDown}
    >
      <span className="segmented-thumb" aria-hidden="true" />
      {options.map((option, index) => (
        <button
          key={option.id}
          type="button"
          role="tab"
          className="segmented-option"
          style={{ gridColumn: index + 1 }}
          data-selected={option.id === value}
          aria-selected={option.id === value}
          tabIndex={option.id === value ? 0 : -1}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
