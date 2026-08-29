import CardButton from '@/components/ui/CardButton';
import { profile } from '@/data/profile';

interface Props {
  onOpen: () => void;
}

export default function SummaryCard({ onOpen }: Props) {
  return (
    <CardButton className="g-summary" onClick={onOpen}>
      <p>{profile.glance.summary}</p>
    </CardButton>
  );
}
