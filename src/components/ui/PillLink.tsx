import type { ReactNode } from 'react';
import { cn } from './cn';

interface Props {
  href?: string;
  download?: boolean;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

/** The sage call-to-action pill, as a link or a button. */
export default function PillLink({ href, download, onClick, className, children }: Props) {
  if (href) {
    return (
      <a href={href} download={download} className={cn('pill', className)}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cn('pill', className)} onClick={onClick}>
      {children}
    </button>
  );
}
