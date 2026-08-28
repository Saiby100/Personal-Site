import MediaSlot from '@/components/ui/MediaSlot';
import ContactCard from './ContactCard';
import GlanceHeader from './GlanceHeader';
import ProjectCard from './ProjectCard';
import RoleCard from './RoleCard';
import SkillsCard from './SkillsCard';
import SummaryCard from './SummaryCard';
import TimelineCard from './TimelineCard';

interface Props {
  exitAnimation?: string;
  onToggle: () => void;
  onGoDetail: (anchor?: string) => void;
}

export default function GlanceView({ exitAnimation, onToggle, onGoDetail }: Props) {
  return (
    <div className="glance" style={{ animation: exitAnimation }}>
      <GlanceHeader onToggle={onToggle} />
      <MediaSlot id="portrait" level={1} className="g-portrait" />
      <SummaryCard onOpen={() => onGoDetail('summary')} />
      <TimelineCard />
      <RoleCard onOpen={() => onGoDetail('role')} />
      <ProjectCard onOpen={() => onGoDetail('project')} />
      <SkillsCard />
      <ContactCard onToggle={onToggle} />
    </div>
  );
}
