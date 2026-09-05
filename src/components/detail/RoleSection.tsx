import { Fragment } from 'react';
import Chip from '@/components/ui/Chip';
import ExternalLink from '@/components/ui/ExternalLink';
import Heading from '@/components/ui/Heading';
import MediaSlot from '@/components/ui/MediaSlot';
import SectionTitle from '@/components/ui/SectionTitle';
import Surface from '@/components/ui/Surface';
import { formatPeriod, roleHeading, workRoles } from '@/data/role';

export default function RoleSection() {
  return (
    <Surface as="section" id="role" level={2} radius="lg">
      {workRoles.map((role) => {
        const highlights = role.highlights ?? [];
        const lead = highlights.find((item) => item.lead);
        const rest = highlights.filter((item) => item !== lead);

        return (
          <Fragment key={role.id}>
            <SectionTitle rule="strong" meta={formatPeriod(role)}>
              {roleHeading(role)}
            </SectionTitle>

            {/* Roles without highlights — the teaching assistant — are body only. */}
            {role.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {lead && (
              <article className="d-split">
                <div className="d-split-text">
                  <Heading>{lead.title}</Heading>
                  {lead.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <div className="chip-row d-pills">
                    {lead.metrics.map((metric) => (
                      <Chip size="lg" key={metric}>
                        {metric}
                      </Chip>
                    ))}
                  </div>
                  {lead.link && (
                    <ExternalLink href={lead.link.href} className="repo-link">
                      {lead.link.label}
                    </ExternalLink>
                  )}
                </div>
                {lead.media && (
                  <div className="d-split-aside">
                    <MediaSlot id={lead.media} />
                    {lead.mediaNote && <div className="d-note">{lead.mediaNote}</div>}
                  </div>
                )}
              </article>
            )}

            {rest.length > 0 && (
              <div className="auto-grid d-columns">
                {rest.map((item, index) => (
                  <article
                    key={item.id}
                    className={index === rest.length - 1 ? 'is-wide' : undefined}
                  >
                    <Heading>{item.title}</Heading>
                    {item.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {item.link && (
                      <ExternalLink href={item.link.href} className="repo-link">
                        {item.link.label}
                      </ExternalLink>
                    )}
                  </article>
                ))}
              </div>
            )}
          </Fragment>
        );
      })}
    </Surface>
  );
}
