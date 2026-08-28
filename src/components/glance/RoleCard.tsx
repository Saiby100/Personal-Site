import CardButton from '@/components/ui/CardButton';
import Chip from '@/components/ui/Chip';
import Heading from '@/components/ui/Heading';
import SectionTitle from '@/components/ui/SectionTitle';
import { currentRole } from '@/data/site';

interface Props {
  onOpen: () => void;
}

export default function RoleCard({ onOpen }: Props) {
  return (
    <CardButton className="g-role" onClick={onOpen}>
      <SectionTitle className="g-role-head" rule="subtle" meta={currentRole.period}>
        {currentRole.heading}
      </SectionTitle>
      <div className="g-role-grid">
        {currentRole.highlights.map((item) => (
          <article key={item.id}>
            <Heading>{item.glanceTitle}</Heading>
            <p>{item.glanceBlurb}</p>
            <div className="chip-row g-metrics">
              {item.glanceMetrics.map((metric) => (
                <Chip key={metric}>{metric}</Chip>
              ))}
            </div>
          </article>
        ))}
      </div>
    </CardButton>
  );
}
