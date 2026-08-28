import Surface from '@/components/ui/Surface';
import { profile } from '@/data/site';
import DetailToggle from './DetailToggle';

interface Props {
  onToggle: () => void;
}

export default function DetailHeader({ onToggle }: Props) {
  return (
    <Surface as="header" level={2} radius="md" className="d-header">
      <div className="d-identity">
        <strong>{profile.name}</strong>
        <span>
          {profile.role} · {profile.location}
        </span>
      </div>
      <DetailToggle onToggle={onToggle} />
    </Surface>
  );
}
