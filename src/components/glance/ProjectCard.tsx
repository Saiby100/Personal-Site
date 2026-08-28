import CardButton from '@/components/ui/CardButton';
import Heading from '@/components/ui/Heading';
import MediaSlot from '@/components/ui/MediaSlot';
import SectionTitle from '@/components/ui/SectionTitle';
import { project } from '@/data/site';

interface Props {
  onOpen: () => void;
}

export default function ProjectCard({ onOpen }: Props) {
  return (
    <CardButton className="g-project" onClick={onOpen}>
      <MediaSlot id="projectThumb" />
      <div className="g-project-body">
        <div className="g-project-title">
          <SectionTitle as="span">Project</SectionTitle>
          <Heading>{project.name}</Heading>
        </div>
        <p>{project.glanceBlurb}</p>
        <span className="meta g-project-stack">{project.stack}</span>
      </div>
    </CardButton>
  );
}
