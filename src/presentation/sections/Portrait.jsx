import { useState } from 'react';
import { Mark } from '../components/Mark';
import { SectionLabel } from '../components/SectionLabel';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { asset } from '../asset';

const clamp01 = (n) => Math.max(0, Math.min(1, n));
/** Suaviza el tramo [a, b] del progreso a un 0..1 con ease-out. */
const span = (p, a, b) => {
  const t = clamp01((p - a) / (b - a));
  return 1 - (1 - t) ** 3;
};

/**
 * Escena de transición: el personaje emerge de la oscuridad mientras se hace
 * scroll y se desvanece justo antes de entrar a "Sobre mí".
 * El stage queda `sticky` y todo el movimiento se deriva de --p en CSS.
 */
export function Portrait({ portrait }) {
  const [ref, p] = useScrollProgress({ mode: 'pin' });
  const [srcIndex, setSrcIndex] = useState(0);

  const vars = {
    '--p': p.toFixed(4),
    '--in': span(p, 0, 0.55).toFixed(4),
    '--out': span(p, 0.78, 1).toFixed(4),
    '--text': span(p, 0.2, 0.7).toFixed(4),
  };

  return (
    <section className="section portrait" id="retrato" ref={ref} aria-label="Retrato">
      <div className="portrait__stage" style={vars}>
        <div className="portrait__halo" aria-hidden="true" />

        <div className="portrait__marks" aria-hidden="true">
          {portrait.marks.map((name, i) => (
            <Mark key={name} name={name} size={120} className={`portrait__mark portrait__mark--${i + 1}`} />
          ))}
        </div>

        <figure className="portrait__figure">
          <img
            className="portrait__img"
            src={asset(portrait.sources[srcIndex])}
            alt={portrait.alt}
            onError={() => setSrcIndex((i) => Math.min(i + 1, portrait.sources.length - 1))}
            width="500"
            height="789"
            decoding="async"
            draggable="false"
          />
        </figure>

        <div className="container portrait__copy">
          <SectionLabel>{portrait.eyebrow}</SectionLabel>
          <h2 className="portrait__title">
            <span className="portrait__word">{portrait.before}</span>{' '}
            <span className="portrait__word accent">{portrait.accent}</span>
          </h2>
          <p className="portrait__caption">{portrait.caption}</p>
        </div>

        <p className="portrait__hint" aria-hidden="true">{portrait.hint}</p>
      </div>
    </section>
  );
}
