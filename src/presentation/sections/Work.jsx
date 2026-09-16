import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ProjectCover } from '../components/ProjectCover';
import { SectionLabel } from '../components/SectionLabel';
import { useScrollProgress } from '../hooks/useScrollProgress';

export function Work({ projects }) {
  const [index, setIndex] = useState(0);
  const [ref, progress] = useScrollProgress();
  const touchX = useRef(null);
  const total = projects.length;

  const go = useCallback((dir) => setIndex((i) => (i + dir + total) % total), [total]);

  // Autoplay suave, se pausa si el usuario prefiere menos movimiento
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setInterval(() => go(1), 9000);
    return () => clearInterval(t);
  }, [go, index]);

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  };

  return (
    <section className="section work" id="proyectos" ref={ref}>
      <div className="container">
        <div className="work__head"><SectionLabel>Proyectos</SectionLabel></div>
        <div
          className="work__stage"
          style={{ '--p': progress }}
          tabIndex={0}
          role="region"
          aria-roledescription="carrusel"
          aria-label="Proyectos destacados"
          onKeyDown={onKey}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchX.current == null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="work__track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {projects.map((p, i) => (
              <a className="work__slide" href={p.url} key={p.id} aria-hidden={i !== index}
                tabIndex={i === index ? 0 : -1}
                target={p.url.startsWith('http') ? '_blank' : undefined}
                rel={p.url.startsWith('http') ? 'noreferrer' : undefined}>
                <ProjectCover project={p} />
              </a>
            ))}
          </div>
          <div className="work__shade" />
        </div>

        <div className="work__bar">
          <button type="button" className="work__btn" onClick={() => go(-1)} aria-label="Proyecto anterior">
            <ArrowLeft size={24} strokeWidth={1.5} />
          </button>
          <div className="work__titles" aria-live="polite">
            {projects.map((p, i) => (
              <span key={p.id} className={`work__title${i === index ? ' is-active' : ''}`}>{p.title}</span>
            ))}
          </div>
          <button type="button" className="work__btn" onClick={() => go(1)} aria-label="Proyecto siguiente">
            <ArrowRight size={24} strokeWidth={1.5} />
          </button>
        </div>
        <div className="work__dots">
          {projects.map((p, i) => (
            <button key={p.id} type="button" aria-label={`Ir a ${p.title}`}
              className={i === index ? 'is-active' : ''} onClick={() => setIndex(i)} />
          ))}
        </div>

        <div className="work__detail">
          <div>
            <p className="work__cat">{projects[index].category}</p>
            <p className="work__summary">{projects[index].summary}</p>
            {projects[index].url.startsWith('http') && (
              <a className="work__visit" href={projects[index].url} target="_blank" rel="noreferrer">
                Ver el sitio ↗
              </a>
            )}
          </div>
          <ul className="work__stack">
            {projects[index].stack.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
