import { useScrollProgress } from '@/hooks/useScrollProgress';
import DetailHeader from './DetailHeader';
import DetailNav from './DetailNav';
import EducationSection from './EducationSection';
import ProjectSection from './ProjectSection';
import RoleSection from './RoleSection';
import SkillsSection from './SkillsSection';
import SummarySection from './SummarySection';

interface Props {
  exitAnimation?: string;
  onToggle: () => void;
}

export default function DetailView({ exitAnimation, onToggle }: Props) {
  const progress = useScrollProgress(true);

  return (
    <>
      {/* Outside the animated shell: a transformed ancestor would break position:fixed. */}
      <div className="d-progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      <div className="detail" style={{ animation: exitAnimation }}>
        <DetailHeader onToggle={onToggle} />

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
