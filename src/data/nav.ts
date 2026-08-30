import { currentRole } from './role';

/** Sidebar table of contents. Anchors match DETAIL_ANCHORS in hooks/useMode.ts. */
export const tocItems = [
  { href: '#summary', label: 'Summary' },
  { href: '#role', label: `${currentRole.org}, ${currentRole.start.slice(0, 4)}→` },
  { href: '#project', label: 'Projects' },
  { href: '#earlier', label: 'Education' },
  { href: '#skills', label: 'Skills' },
];
