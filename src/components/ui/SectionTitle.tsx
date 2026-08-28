import type { ElementType, ReactNode } from 'react';
import { cn } from './cn';

interface Props {
  as?: ElementType;
  /** `accent` names a content block; `muted` names a UI affordance. */
  tone?: 'accent' | 'muted';
  /** Right-aligned mono text, e.g. a date range. */
  meta?: ReactNode;
  /** Underline below the title: `subtle` inside a card, `strong` between sections. */
  rule?: 'subtle' | 'strong';
  className?: string;
  children: ReactNode;
}

/**
 * The tracked uppercase label. With `meta` filled it becomes the card title
 * used at the top of a role card or detail section.
 */
export default function SectionTitle({
  as: Tag = 'h2',
  tone = 'accent',
  meta,
  rule,
  className,
  children,
}: Props) {
  return (
    <Tag className={cn('section-title', className)} data-tone={tone} data-rule={rule}>
      <span>{children}</span>
      {meta ? <span className="section-title-meta">{meta}</span> : null}
    </Tag>
  );
}
