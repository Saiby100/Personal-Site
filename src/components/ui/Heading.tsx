import type { ElementType, ReactNode } from 'react';
import { cn } from './cn';

interface Props {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/** Serif display heading. Size comes from the surrounding context's CSS. */
export default function Heading({ as: Tag = 'h3', className, children }: Props) {
  return <Tag className={cn('heading', className)}>{children}</Tag>;
}
