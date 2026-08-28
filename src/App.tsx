import { Analytics } from '@vercel/analytics/react';
import Backdrop from '@/components/Backdrop';
import GlanceView from '@/components/glance/GlanceView';
import DetailView from '@/components/detail/DetailView';
import { useMode } from '@/hooks/useMode';

export default function App() {
  const { mode, switchTo, toggle, exitAnimation } = useMode();

  return (
    <>
      <Backdrop mode={mode} />
      <div className="shell">
        {mode === 'glance' ? (
          <GlanceView
            exitAnimation={exitAnimation}
            onToggle={toggle}
            onGoDetail={(anchor) => switchTo('detail', anchor)}
          />
        ) : (
          <DetailView exitAnimation={exitAnimation} onToggle={toggle} />
        )}
      </div>
      <Analytics />
    </>
  );
}
