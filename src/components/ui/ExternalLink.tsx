import type { ReactNode } from 'react';

interface Props {
  href: string;
  className?: string;
  children: ReactNode;
}

/** Owns the target/rel pair so no call site has to remember it. */
export default function ExternalLink({ href, className, children }: Props) {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
