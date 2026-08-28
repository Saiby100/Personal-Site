import MediaSlot from '@/components/ui/MediaSlot';
import Surface from '@/components/ui/Surface';
import { profile } from '@/data/site';

export default function SummarySection() {
  return (
    <Surface as="section" id="summary" level={2} radius="lg">
      <MediaSlot id="summaryWide" />
      <p className="d-lead">{profile.summaryLead}</p>
      <p className="d-prose">{profile.summaryBody}</p>
    </Surface>
  );
}
