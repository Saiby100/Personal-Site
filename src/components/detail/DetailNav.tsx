import Divider from '@/components/ui/Divider';
import ExternalLink from '@/components/ui/ExternalLink';
import PillLink from '@/components/ui/PillLink';
import SectionTitle from '@/components/ui/SectionTitle';
import Surface from '@/components/ui/Surface';
import { links, tocItems } from '@/data/site';

/** Sticky sidebar: section links, then the ways to get hold of me. */
export default function DetailNav() {
  return (
    <Surface as="nav" level={2} radius="md" className="d-toc">
      <SectionTitle as="span" tone="muted">
        On this page
      </SectionTitle>
      {tocItems.map((item) => (
        <a href={item.href} key={item.href}>
          {item.label}
        </a>
      ))}

      <Divider strong />
      <div className="d-toc-contact">
        <a href={`mailto:${links.email}`}>Email</a>
        <ExternalLink href={links.github}>GitHub</ExternalLink>
        <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
      </div>
      <PillLink href={links.cv} download>
        Download CV
      </PillLink>
    </Surface>
  );
}
