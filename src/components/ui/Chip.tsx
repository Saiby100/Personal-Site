import type { ReactNode } from 'react';

interface Props {
  /** `metric` is the tan mono stat; `skill` the neutral sans label. */
  tone?: 'metric' | 'skill';
  /** `lg` is roomier and fully rounded, for the detail page's lead pills. */
  size?: 'sm' | 'lg';
  children: ReactNode;
}

export default function Chip({ tone = 'metric', size = 'sm', children }: Props) {
  return (
    <span className="chip" data-tone={tone} data-size={size}>
      {children}
    </span>
  );
}
