import Chip from '@/components/ui/Chip';
import SectionTitle from '@/components/ui/SectionTitle';
import Surface from '@/components/ui/Surface';
import { skillGroups } from '@/data/skill';

export default function SkillsCard() {
  return (
    <Surface as="aside" className="g-skills">
      <SectionTitle>Skills</SectionTitle>
      {skillGroups.map((group) => (
        <div className="g-skill-group" key={group.title}>
          <SectionTitle as="span" tone="muted">
            {group.title}
          </SectionTitle>
          <div className="chip-row g-chips">
            {group.items.map((item) => (
              <Chip tone="skill" key={item}>
                {item}
              </Chip>
            ))}
          </div>
        </div>
      ))}
    </Surface>
  );
}
