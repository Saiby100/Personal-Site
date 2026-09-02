import { useEffect, useRef, useState } from 'react';
import Divider from '@/components/ui/Divider';
import ExternalLink from '@/components/ui/ExternalLink';
import ModeToggle from '@/components/ui/ModeToggle';
import PillLink from '@/components/ui/PillLink';
import SectionTitle from '@/components/ui/SectionTitle';
import Surface from '@/components/ui/Surface';
import { tocItems } from '@/data/nav';
import { links, profile } from '@/data/profile';
import type { Mode } from '@/hooks/useMode';

interface Props {
  /** The mode the bar should be sized for — the destination while a view leaves. */
  mode: Mode;
  onToggle: () => void;
}

/** Matches the header media query in components.css. */
const MOBILE = '(max-width: 900px)';

/**
 * One bar for both views. It lives outside the views so it survives the mode
 * change: switching `data-mode` transitions it between the two sizes instead of
 * unmounting one header and mounting another.
 *
 * Below 900px the links row has nowhere to go, so it folds into a dropdown
 * together with the switch — and, in detail, the section links the sidebar
 * carries on wider screens.
 */
export default function SiteHeader({ mode, onToggle }: Props) {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Toggling from inside the panel would otherwise leave it hanging open over
  // the incoming view.
  useEffect(() => setOpen(false), [mode]);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);

    // Capture phase: useMode maps Escape to "back to glance" on a bubble-phase
    // window listener, and one press should only close the menu.
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      e.stopPropagation();
      close();
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) close();
    };
    const media = window.matchMedia(MOBILE);
    const onMedia = () => {
      if (!media.matches) close();
    };

    window.addEventListener('keydown', onKey, true);
    document.addEventListener('pointerdown', onPointerDown);
    media.addEventListener('change', onMedia);
    return () => {
      window.removeEventListener('keydown', onKey, true);
      document.removeEventListener('pointerdown', onPointerDown);
      media.removeEventListener('change', onMedia);
    };
  }, [open]);

  return (
    <header className="site-header" data-mode={mode} ref={headerRef}>
      <div className="site-identity">
        <h1 className="site-name">{profile.name}</h1>
        <span className="site-meta">
          {profile.role} · {profile.location}
        </span>
      </div>

      <div className="site-header-right">
        {/* Kept in the flow when hidden, so the switch never shifts. */}
        <nav className="site-links" aria-hidden={mode === 'detail'}>
          <a href={`mailto:${links.email}`}>Email</a>
          <ExternalLink href={links.github}>GitHub</ExternalLink>
          <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
          {/* The one thing a visitor is most likely to want, so it leaves the
              text row and takes the accent pill. */}
          <PillLink href={links.cv} download className="site-cv">
            Download CV
          </PillLink>
        </nav>

        <ModeToggle mode={mode} onToggle={onToggle} />
      </div>

      <button
        type="button"
        className="site-menu-btn"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="site-menu-icon" data-open={open} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      {open && (
        // Anchors close the panel on their own: the in-page ones only move the
        // scroll position, so nothing else would.
        <Surface
          as="nav"
          id="site-menu"
          level={2}
          radius="md"
          className="site-menu"
          onClick={(e: React.MouseEvent) => {
            if ((e.target as HTMLElement).closest('a')) setOpen(false);
          }}
        >
          {mode === 'detail' && (
            <>
              <SectionTitle as="span" tone="muted">
                On this page
              </SectionTitle>
              {tocItems.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
              <Divider strong />
            </>
          )}

          <a href={`mailto:${links.email}`}>Email</a>
          <ExternalLink href={links.github}>GitHub</ExternalLink>
          <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>

          <Divider strong />
          {/* A second switch: CSS can hide the one in the bar at this width but
              cannot move it into the panel. */}
          <ModeToggle mode={mode} onToggle={onToggle} />

          <PillLink href={links.cv} download>
            Download CV
          </PillLink>
        </Surface>
      )}
    </header>
  );
}
