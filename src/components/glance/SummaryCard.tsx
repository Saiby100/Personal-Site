import Surface from '@/components/ui/Surface';
import { profile } from '@/data/profile';

export default function SummaryCard() {
  return (
    <Surface className="g-summary">
      <p>{profile.glance.summary}</p>
    </Surface>
  );
}
