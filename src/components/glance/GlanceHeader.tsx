import Surface from '@/components/ui/Surface';
import { profile } from '@/data/profile';
import GlanceNav from './GlanceNav';
import GlanceToggle from './GlanceToggle';

interface Props {
  onToggle: () => void;
}

export default function GlanceHeader({ onToggle }: Props) {
  return (
    <Surface as="header" className="g-header">
      <div className="g-identity">
        <h1>{profile.name}</h1>
        <span>
          {profile.role} · {profile.location}
        </span>
      </div>

      <div className="g-header-right">
        <GlanceNav />
        <GlanceToggle onToggle={onToggle} />
      </div>
    </Surface>
  );
}
