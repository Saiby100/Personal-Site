import CardButton from '@/components/ui/CardButton';
import Chip from '@/components/ui/Chip';
import Heading from '@/components/ui/Heading';
import SectionTitle from '@/components/ui/SectionTitle';
import { currentRole, formatPeriod, roleHeading } from '@/data/role';

interface Props {
  onOpen: () => void;
}

export default function RoleCard({ onOpen }: Props) {
  return (
    <CardButton className="g-role" onClick={onOpen}>
      <SectionTitle className="g-role-head" rule="subtle" meta={formatPeriod(currentRole)}>
        {roleHeading(currentRole)}
      </SectionTitle>
      <div className="g-role-grid">
        {currentRole.highlights?.map((item) => (
          <article key={item.id}>
            <Heading>{item.glance.title ?? item.title}</Heading>
            <p>{item.glance.blurb}</p>
            <div className="chip-row g-metrics">
              {item.glance.metrics.map((metric) => (
                <Chip key={metric}>{metric}</Chip>
              ))}
            </div>
          </article>
        ))}
      </div>
    </CardButton>
  );
}
