import ExternalLink from '@/components/ui/ExternalLink';
import ModeToggle from '@/components/ui/ModeToggle';
import PillLink from '@/components/ui/PillLink';
import { links, profile } from '@/data/profile';
import type { Mode } from '@/hooks/useMode';

interface Props {
  /** The mode the bar should be sized for — the destination while a view leaves. */
  mode: Mode;
  onToggle: () => void;
}

/**
 * One bar for both views. It lives outside the views so it survives the mode
 * change: switching `data-mode` transitions it between the two sizes instead of
 * unmounting one header and mounting another.
 */
export default function SiteHeader({ mode, onToggle }: Props) {
  return (
    <header className="site-header" data-mode={mode}>
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
    </header>
  );
}
