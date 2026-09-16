import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { SplitHeading } from '../components/SplitHeading';
import { Crosshair } from '../components/Crosshair';

export function Services({ services }) {
  return (
    <section className="section services" id="servicios">
      <div className="services__bg" aria-hidden="true" />
      <div className="container services__grid">
        <div className="services__head">
          <Reveal><SectionLabel>Qué hago</SectionLabel></Reveal>
          <Reveal delay={120}>
            <SplitHeading before="Lo que puedo" accent="aportar a un equipo" />
          </Reveal>
        </div>

        {services.map((s, i) => (
          <Reveal
            as="article"
            key={s.id}
            className="service"
            delay={i * 90}
            style={{ gridColumn: s.cell[0], gridRow: s.cell[1] + 1 }}
          >
            <Crosshair className="service__cross" />
            <header className="service__top">
              <h3 className="service__title">{s.title}</h3>
              <span className="service__cat">{s.category}</span>
            </header>
            <p className="service__desc">{s.description}</p>
            <ul className="service__tags">
              {s.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
