import Divider from '@/components/ui/Divider';
import Heading from '@/components/ui/Heading';
import SectionTitle from '@/components/ui/SectionTitle';
import Surface from '@/components/ui/Surface';
import TimelineItem from '@/components/ui/TimelineItem';
import { education, timeline } from '@/data/site';

const degree = education[1];

export default function TimelineCard() {
  return (
    <Surface as="aside" className="g-timeline">
      <SectionTitle>Timeline</SectionTitle>
      {timeline.map((item) => (
        <TimelineItem key={item.title} {...item} />
      ))}

      <Divider push />
      <SectionTitle>Education</SectionTitle>
      <div className="stack">
        <Heading as="strong">{degree.title}</Heading>
        <span className="stack-note">{degree.glanceMeta}</span>
      </div>
    </Surface>
  );
}
