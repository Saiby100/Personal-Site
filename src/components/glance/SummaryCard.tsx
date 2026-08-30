import Surface from '@/components/ui/Surface';
import { profile } from '@/data/profile';

export default function SummaryCard() {
  return (
    <Surface className="g-summary">
      {profile.glance.summary.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </Surface>
  );
}
