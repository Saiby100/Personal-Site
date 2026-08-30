import Divider from '@/components/ui/Divider';
import Heading from '@/components/ui/Heading';
import SectionTitle from '@/components/ui/SectionTitle';
import Surface from '@/components/ui/Surface';
import TimelineItem from '@/components/ui/TimelineItem';
import { educationRoles, formatPeriod, workRoles } from '@/data/role';

export default function TimelineCard() {
  return (
    <Surface as="aside" className="g-timeline">
      <SectionTitle>Timeline</SectionTitle>
      {workRoles.map((role) => (
        <TimelineItem
          key={role.id}
          title={role.glance?.title ?? role.title}
          org={role.org}
          period={formatPeriod(role)}
          current={role.end === null}
        />
      ))}

      <Divider push />
      <SectionTitle>Education</SectionTitle>
      {educationRoles.map((role) => (
        <div className="stack" key={role.id}>
          <Heading as="strong">{role.title}</Heading>
          <span className="stack-note">
            {[
              `${role.org}, ${formatPeriod(role, { compact: true })}`,
              role.glance?.note,
            ]
              .filter(Boolean)
              .join(' · ')}
          </span>
        </div>
      ))}
    </Surface>
  );
}
