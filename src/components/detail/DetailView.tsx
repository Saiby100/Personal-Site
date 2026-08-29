import type { Mode } from '@/hooks/useMode';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import DetailNav from './DetailNav';
import EducationSection from './EducationSection';
import ProjectSection from './ProjectSection';
import RoleSection from './RoleSection';
import SkillsSection from './SkillsSection';
import SummarySection from './SummarySection';

interface Props {
  /** Set while the view plays its exit animation, to the mode being switched to. */
  leaving: Mode | null;
}

export default function DetailView({ leaving }: Props) {
  const progress = useScrollProgress(true);

  return (
    <>
      {/* Outside the animated shell: a transformed ancestor would break position:fixed. */}
      <div className="d-progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      <div className="detail" data-leaving={leaving ? '' : undefined}>
        <div className="d-body">
          <DetailNav />

          <div className="d-main">
            <SummarySection />
            <RoleSection />
            <ProjectSection />
            <EducationSection />
            <SkillsSection />
          </div>
        </div>
      </div>
    </>
  );
}
