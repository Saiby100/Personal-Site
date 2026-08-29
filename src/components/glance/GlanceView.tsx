import type { Mode } from '@/hooks/useMode';
import MediaSlot from '@/components/ui/MediaSlot';
import ContactCard from './ContactCard';
import ProjectCard from './ProjectCard';
import RoleCard from './RoleCard';
import SkillsCard from './SkillsCard';
import SummaryCard from './SummaryCard';
import TimelineCard from './TimelineCard';

interface Props {
  /** Set while the view plays its exit animation, to the mode being switched to. */
  leaving: Mode | null;
  onToggle: () => void;
  onGoDetail: (anchor?: string) => void;
}

export default function GlanceView({ leaving, onToggle, onGoDetail }: Props) {
  return (
    <div className="glance" data-leaving={leaving ? '' : undefined}>
      <MediaSlot id="portrait" level={1} className="g-portrait" />
      <SummaryCard onOpen={() => onGoDetail('summary')} />
      <TimelineCard />
      <RoleCard onOpen={() => onGoDetail('role')} />
      <ProjectCard onOpen={(id) => onGoDetail(id)} />
      <SkillsCard />
      <ContactCard onToggle={onToggle} />
    </div>
  );
}
