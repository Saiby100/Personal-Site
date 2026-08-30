import type { ElementType, ReactNode } from 'react';
import { cn } from './cn';

export type SurfaceLevel = 1 | 2;
export type SurfaceRadius = 'sm' | 'md' | 'lg';

interface Props {
  /** 1 = glance cards, 2 = detail panels. */
  level?: SurfaceLevel;
  radius?: SurfaceRadius;
  as?: ElementType;
  className?: string;
  children?: ReactNode;
  [key: string]: unknown;
}

/** The frosted glass panel. The only place the material is defined. */
export default function Surface({
  level = 1,
  radius = 'sm',
  as: Tag = 'div',
  className,
  children,
  ...rest
}: Props) {
  return (
    <Tag className={cn('surface', className)} data-level={level} data-radius={radius} {...rest}>
      {children}
    </Tag>
  );
}
