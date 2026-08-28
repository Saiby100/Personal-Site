import Heading from '@/components/ui/Heading';
import SectionTitle from '@/components/ui/SectionTitle';
import Surface from '@/components/ui/Surface';
import { education } from '@/data/site';

export default function EducationSection() {
  return (
    <Surface as="section" id="earlier" level={2} radius="lg">
      <SectionTitle rule="strong">Teaching &amp; education</SectionTitle>
      <div className="auto-grid d-grid">
        {education.map((item) => (
          <div key={item.title}>
            <Heading>{item.title}</Heading>
            <span className="meta">{item.meta}</span>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </Surface>
  );
}
