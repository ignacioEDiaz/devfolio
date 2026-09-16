import { useEffect, useRef } from 'react';

/**
 * Objeto 3D original hecho con CSS: una pila isométrica de bloques con
 * una tecla central luminosa. Reacciona al movimiento del mouse (parallax).
 */
export function CodeBlockScene() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let raf = 0;
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--ry', `${x * 14}deg`);
        el.style.setProperty('--rx', `${-y * 10}deg`);
      });
    };
    window.addEventListener('pointermove', onMove);
    return () => { window.removeEventListener('pointermove', onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="scene" ref={sceneRef} aria-hidden="true">
      <div className="scene__float">
        <div className="scene__tilt">
          <div className="slab slab--base" />
          <div className="keys">
            <div className="key key--a"><span>{'{ }'}</span></div>
            <div className="key key--b"><span>$_</span></div>
            <div className="key key--c"><span>⌘</span></div>
            <div className="key key--hot"><span>{'=>'}</span></div>
          </div>
        </div>
        <div className="scene__glow" />
      </div>
    </div>
  );
}
