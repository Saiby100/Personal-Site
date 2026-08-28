import type { ReactNode } from 'react';
import Surface, { type SurfaceLevel, type SurfaceRadius } from './Surface';
import { cn } from './cn';

interface Props {
  onClick: () => void;
  level?: SurfaceLevel;
  radius?: SurfaceRadius;
  className?: string;
  title?: string;
  children: ReactNode;
}

/** A whole card that acts as a button. */
export default function CardButton({ onClick, className, children, ...rest }: Props) {
  return (
    <Surface as="button" type="button" className={cn('card-button', className)} onClick={onClick} {...rest}>
      {children}
    </Surface>
  );
}
