import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { SplitHeading } from '../components/SplitHeading';
import { Crosshair } from '../components/Crosshair';

export function Experience({ items, education }) {
  return (
    <section className="section exp" id="experiencia">
      <div className="container">
        <div className="exp__head">
          <Reveal><SectionLabel>Trayectoria</SectionLabel></Reveal>
          <Reveal delay={120}>
            <SplitHeading before="Dónde" accent="estuve" after="hasta ahora" />
          </Reveal>
        </div>

        <ol className="exp__list">
          {items.map((job, i) => (
            <Reveal as="li" key={job.id} className="exp__item" delay={i * 120}>
              <Crosshair className="exp__cross" />
              <p className="exp__period">
                {job.period}
                {job.current && <span className="exp__now" aria-label="Puesto actual" />}
              </p>
              <div className="exp__body">
                <h3 className="exp__role">{job.role}</h3>
                <p className="exp__company">{job.company}</p>
                <ul className="exp__bullets">
                  {job.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="exp__edu" delay={120}>
          <p className="exp__edu-key">// formación</p>
          <div className="exp__edu-body">
            <h3 className="exp__role">{education.degree}</h3>
            <p className="exp__company">{education.school} · {education.status}</p>
            <p className="exp__edu-detail">{education.detail}</p>
            <p className="exp__edu-detail">{education.languages}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
