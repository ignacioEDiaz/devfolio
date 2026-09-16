import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { SplitHeading } from '../components/SplitHeading';
import { ArrowLink } from '../components/ArrowLink';
import { Crosshair } from '../components/Crosshair';
import { Icon } from '../components/Icon';

const COLS = 4;

export function Tools({ tools, profile }) {
  const byCell = new Map(tools.map((t) => [`${t.cell[0]}-${t.cell[1]}`, t]));
  const rows = Math.max(...tools.map((t) => t.cell[1]));
  const cells = [];
  for (let r = 1; r <= rows; r += 1) {
    for (let c = 1; c <= COLS; c += 1) cells.push({ r, c, tool: byCell.get(`${c}-${r}`) });
  }

  return (
    <section className="section tools" id="herramientas">
      <div className="container tools__grid">
        <div className="tools__head">
          <Reveal><SectionLabel>Stack</SectionLabel></Reveal>
          <Reveal delay={120}><SplitHeading accent="Con qué" after="trabajo todos los días" /></Reveal>
          <Reveal delay={200}>
            <p className="tools__note">
              Java y Spring Boot del lado del servidor, React con TypeScript del lado del
              navegador, y todo lo que hace falta para que eso llegue a producción y se
              pueda medir.
            </p>
          </Reveal>
          <Reveal className="tools__cta" delay={280}>
            <ArrowLink href={profile.handleUrl}>{profile.handle}</ArrowLink>
          </Reveal>
        </div>

        <div className="tile-grid">
          <Crosshair style={{ left: 0, top: '33.333%' }} />
          <Crosshair style={{ right: 0, top: 0 }} />
          <Crosshair style={{ left: '50%', top: '66.666%' }} />
          <Crosshair style={{ left: 0, bottom: 0 }} />
          {cells.map(({ r, c, tool }, i) => (
            <Reveal
              key={`${r}-${c}`}
              className={`tile${tool ? ' tile--filled' : ''}${(r + c) % 2 ? ' tile--alt' : ''}`}
              delay={i * 35}
              variant="pop"
            >
              {tool && (
                <>
                  <Icon name={tool.icon} size={44} strokeWidth={1.3} />
                  <span className="tile__name">{tool.name}</span>
                </>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
