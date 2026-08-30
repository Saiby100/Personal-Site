import { useCallback, useEffect, useRef, useState } from 'react';

export type Mode = 'glance' | 'detail';

/** Time the leaving view gets before the other mounts — long enough for the
    header bar to finish resizing, so the incoming cards follow the morph. */
const EXIT_MS = 420;

/** Anchors that only exist inside the detail view. */
const DETAIL_ANCHORS = ['detail', 'summary', 'role', 'project', 'earlier', 'skills'];

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function modeFromHash(): { mode: Mode; anchor: string | null } {
  const hash = window.location.hash.replace('#', '');
  if (DETAIL_ANCHORS.includes(hash)) {
    return { mode: 'detail', anchor: hash === 'detail' ? null : hash };
  }
  return { mode: 'glance', anchor: null };
}

export function useMode() {
  const initial = useRef(modeFromHash());
  const [mode, setMode] = useState<Mode>(initial.current.mode);
  /** Non-null while the current view plays its exit animation. */
  const [leaving, setLeaving] = useState<Mode | null>(null);
  const pendingAnchor = useRef<string | null>(initial.current.anchor);
  const timer = useRef<number | undefined>(undefined);

  const switchTo = useCallback(
    (next: Mode, anchor?: string) => {
      if (next === mode || leaving) return;
      pendingAnchor.current = anchor ?? null;

      const commit = () => setMode(next);

      if (prefersReducedMotion()) {
        commit();
        return;
      }
      setLeaving(next);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        setLeaving(null);
        commit();
      }, EXIT_MS);
    },
    [mode, leaving],
  );

  const toggle = useCallback(
    () => switchTo(mode === 'detail' ? 'glance' : 'detail'),
    [mode, switchTo],
  );

  // Scroll to the pending anchor once the target view has painted.
  useEffect(() => {
    const anchor = pendingAnchor.current;
    pendingAnchor.current = null;

    if (mode === 'glance') {
      window.scrollTo({ top: 0 });
      return;
    }
    requestAnimationFrame(() => {
      const el = anchor && document.getElementById(anchor);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0 });
      }
    });
  }, [mode]);

  // Keep the URL shareable without pushing history entries.
  useEffect(() => {
    const target = mode === 'detail' ? '#detail' : window.location.pathname;
    if (mode === 'detail' && DETAIL_ANCHORS.includes(window.location.hash.replace('#', ''))) return;
    window.history.replaceState(null, '', target);
  }, [mode]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;

      if (e.key === 'Escape') switchTo('glance');
      else if (e.key === 'd' || e.key === 'D') switchTo('detail');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [switchTo]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  /* The views drive their own exit animations from CSS. `leaving` is the mode
     being switched to: the header bar takes it straight away and resizes while
     the old cards clear out, so the morph leads and the new cards follow. */
  return { mode, switchTo, toggle, leaving };
}
