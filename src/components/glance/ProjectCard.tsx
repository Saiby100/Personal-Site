import { useState } from 'react';
import Heading from '@/components/ui/Heading';
import MediaSlot from '@/components/ui/MediaSlot';
import PillLink from '@/components/ui/PillLink';
import SectionTitle from '@/components/ui/SectionTitle';
import SegmentedControl from '@/components/ui/SegmentedControl';
import Surface from '@/components/ui/Surface';
import { projects } from '@/data/project';

interface Props {
  onOpen: (id: string) => void;
}

export default function ProjectCard({ onOpen }: Props) {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((p) => p.id === activeId) ?? projects[0];

  return (
    <Surface className="g-project">
      <div className="g-project-head">
        <div className="g-project-title">
          <SectionTitle as="span">Project</SectionTitle>
          <Heading>{active.name}</Heading>
        </div>
        <SegmentedControl
          className="g-project-switch"
          label="Project"
          options={projects.map((p) => ({ id: p.id, label: p.glance.title ?? p.name }))}
          value={active.id}
          onChange={setActiveId}
        />
      </div>
      <div className="g-project-main">
        <MediaSlot id={active.media} />
        <div className="g-project-body">
          <p>{active.glance.blurb}</p>
        </div>
      </div>
      <div className="g-project-foot">
        <span className="meta g-project-stack">{active.stack}</span>
        <PillLink onClick={() => onOpen(active.id)}>View project</PillLink>
      </div>
    </Surface>
  );
}
