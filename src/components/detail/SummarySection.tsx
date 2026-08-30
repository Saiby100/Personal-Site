import MediaSlot from '@/components/ui/MediaSlot';
import Surface from '@/components/ui/Surface';
import { profile } from '@/data/profile';

export default function SummarySection() {
  return (
    <Surface as="section" id="summary" level={2} radius="lg">
      <MediaSlot id="summaryWide" />
      {profile.summary.paragraphs.map((paragraph, index) => (
        <p key={paragraph} className={index === 0 ? 'd-lead' : 'd-prose'}>
          {paragraph}
        </p>
      ))}
    </Surface>
  );
}
