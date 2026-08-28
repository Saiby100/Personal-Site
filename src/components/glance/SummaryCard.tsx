import CardButton from '@/components/ui/CardButton';
import { profile } from '@/data/site';

interface Props {
  onOpen: () => void;
}

export default function SummaryCard({ onOpen }: Props) {
  return (
    <CardButton className="g-summary" onClick={onOpen}>
      <p>{profile.summaryShort}</p>
    </CardButton>
  );
}
