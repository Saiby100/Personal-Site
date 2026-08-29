import { Analytics } from '@vercel/analytics/react';
import Backdrop from '@/components/Backdrop';
import SiteHeader from '@/components/SiteHeader';
import GlanceView from '@/components/glance/GlanceView';
import DetailView from '@/components/detail/DetailView';
import { useMode } from '@/hooks/useMode';

export default function App() {
  const { mode, switchTo, toggle, leaving } = useMode();

  return (
    <>
      <Backdrop mode={mode} />
      <div className="shell" data-mode={mode}>
        <SiteHeader mode={leaving ?? mode} onToggle={toggle} />
        {mode === 'glance' ? (
          <GlanceView
            leaving={leaving}
            onToggle={toggle}
            onGoDetail={(anchor) => switchTo('detail', anchor)}
          />
        ) : (
          <DetailView leaving={leaving} />
        )}
      </div>
      <Analytics />
    </>
  );
}
