import Chip from '@/components/ui/Chip';
import SectionTitle from '@/components/ui/SectionTitle';
import Surface from '@/components/ui/Surface';
import { glanceSkills } from '@/data/site';

export default function SkillsCard() {
  return (
    <Surface as="aside" className="g-skills">
      <SectionTitle>Languages &amp; tools</SectionTitle>
      <div className="chip-row g-chips">
        {glanceSkills.map((skill) => (
          <Chip tone="skill" key={skill}>
            {skill}
          </Chip>
        ))}
      </div>
    </Surface>
  );
}
