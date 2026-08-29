import MediaSlot from '@/components/ui/MediaSlot';
import Surface from '@/components/ui/Surface';
import { profile } from '@/data/profile';

export default function SummarySection() {
  return (
    <Surface as="section" id="summary" level={2} radius="lg">
      <MediaSlot id="summaryWide" />
      <p className="d-lead">{profile.summary.lead}</p>
      <p className="d-prose">{profile.summary.body}</p>
    </Surface>
  );
}
