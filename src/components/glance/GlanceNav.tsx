import ExternalLink from '@/components/ui/ExternalLink';
import { links } from '@/data/profile';

export default function GlanceNav() {
  return (
    <nav className="g-nav">
      <a href={`mailto:${links.email}`}>Email</a>
      <ExternalLink href={links.github}>GitHub</ExternalLink>
      <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
      <a href={links.cv} download>
        CV
      </a>
    </nav>
  );
}
