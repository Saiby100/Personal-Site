import SectionTitle from '@/components/ui/SectionTitle';
import Surface from '@/components/ui/Surface';
import { skillGroups } from '@/data/site';

export default function SkillsSection() {
  return (
    <Surface as="section" id="skills" level={2} radius="lg">
      <SectionTitle rule="strong">Skills</SectionTitle>
      <div className="auto-grid d-grid">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <SectionTitle as="span" tone="muted">
              {group.title}
            </SectionTitle>
            <span className="d-skill-list">
              {group.items.map((item) => item.label).join(' · ')}
            </span>
          </div>
        ))}
      </div>
    </Surface>
  );
}
