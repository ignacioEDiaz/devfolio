import { useEffect, useRef, useState } from 'react';

const clamp01 = (n) => Math.max(0, Math.min(1, n));

/**
 * Progreso 0..1 de un elemento respecto del scroll (para efectos ligados al scroll).
 *
 * - `enter`: avanza mientras el elemento entra en el viewport (por defecto).
 * - `pin`:   0 cuando el elemento toca el borde superior y 1 cuando termina de
 *            recorrerlo. Pensado para secciones altas con un stage `sticky`.
 */
export function useScrollProgress({ mode = 'enter' } = {}) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = mode === 'pin'
        ? -r.top / Math.max(1, r.height - vh)
        : (vh - r.top) / (vh * 0.8);
      setProgress(clamp01(p));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [mode]);

  return [ref, progress];
}
