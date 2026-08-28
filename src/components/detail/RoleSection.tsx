import Chip from '@/components/ui/Chip';
import Heading from '@/components/ui/Heading';
import MediaSlot from '@/components/ui/MediaSlot';
import SectionTitle from '@/components/ui/SectionTitle';
import Surface from '@/components/ui/Surface';
import { currentRole } from '@/data/site';

export default function RoleSection() {
  const [lead, ...rest] = currentRole.highlights;

  return (
    <Surface as="section" id="role" level={2} radius="lg">
      <SectionTitle rule="strong" meta={currentRole.period}>
        {currentRole.heading}
      </SectionTitle>

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
        </div>
        <div className="d-split-aside">
          <MediaSlot id="workflowShot" />
          <div className="d-note">schema snippet — before / after</div>
        </div>
      </article>

      <div className="auto-grid d-columns">
        {rest.map((item, index) => (
          <article key={item.id} className={index === rest.length - 1 ? 'is-wide' : undefined}>
            <Heading>{item.title}</Heading>
            {item.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </div>
    </Surface>
  );
}
