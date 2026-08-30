import Heading from '@/components/ui/Heading';
import MediaSlot from '@/components/ui/MediaSlot';
import SectionTitle from '@/components/ui/SectionTitle';
import Surface from '@/components/ui/Surface';
import { cn } from '@/components/ui/cn';
import { projects } from '@/data/project';

export default function ProjectSection() {
  return (
    <Surface as="section" id="project" level={2} radius="lg">
      <SectionTitle rule="strong">Projects</SectionTitle>
      {projects.map((project) => (
        <article
          key={project.id}
          id={project.id}
          className={cn('d-split', !project.detailMedia && 'd-split-solo')}
        >
          <div className="d-split-text d-project-text">
            <Heading>{project.name}</Heading>
            <span className="meta">{project.stack.join(' · ')}</span>
            {project.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {project.detailMedia && <MediaSlot id={project.detailMedia} />}
        </article>
      ))}
    </Surface>
  );
}
