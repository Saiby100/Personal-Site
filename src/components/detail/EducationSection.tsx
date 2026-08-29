import Heading from '@/components/ui/Heading';
import SectionTitle from '@/components/ui/SectionTitle';
import Surface from '@/components/ui/Surface';
import { educationRoles, formatPeriod } from '@/data/role';

export default function EducationSection() {
  return (
    <Surface as="section" id="earlier" level={2} radius="lg">
      <SectionTitle rule="strong">Education</SectionTitle>
      <div className="auto-grid d-grid">
        {educationRoles.map((role) => (
          <div key={role.id}>
            <Heading>{role.title}</Heading>
            <span className="meta">{`${role.org} · ${formatPeriod(role)}`}</span>
            {role.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </Surface>
  );
}
