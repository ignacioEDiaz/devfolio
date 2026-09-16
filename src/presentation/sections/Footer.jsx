import { ArrowUp } from 'lucide-react';
import { Logo } from '../components/Logo';
import { Icon } from '../components/Icon';
import { Crosshair } from '../components/Crosshair';
import { Reveal } from '../components/Reveal';

export function Footer({ profile, navigation, socialLinks }) {
  const byCell = new Map(socialLinks.map((s) => [`${s.cell[0]}-${s.cell[1]}`, s]));
  const cells = [];
  for (let r = 1; r <= 3; r += 1) for (let c = 1; c <= 4; c += 1) cells.push({ r, c, s: byCell.get(`${c}-${r}`) });

  const toTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand"><Logo muted /></div>
          <div className="footer__col">
            <p className="footer__key">Navegación</p>
            <ul>
              {navigation.slice(1).map((l) => (
                <li key={l.id}><a className="footer__link" href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__contact">
          <div />
          <div className="footer__col">
            <p className="footer__key">Contacto</p>
            <ul>
              <li><a className="footer__link" href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><a className="footer__link" href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <Reveal className="footer__name" variant="up">
            <span>{profile.firstName}</span> <span className="accent">{profile.lastName}</span>
          </Reveal>
          <p className="footer__key footer__social-key">Redes</p>
          <div className="social-grid">
            <Crosshair style={{ left: 0, top: '33.333%' }} />
            <Crosshair style={{ left: '50%', top: '66.666%' }} />
            {cells.map(({ r, c, s }) => (
              s ? (
                <a key={`${r}-${c}`} className="social-cell social-cell--link" href={s.href}
                  target="_blank" rel="noreferrer" aria-label={s.label}>
                  <Icon name={s.icon} size={26} />
                </a>
              ) : <span key={`${r}-${c}`} className={`social-cell${(r + c) % 2 ? ' social-cell--alt' : ''}`} />
            ))}
          </div>
        </div>

        <div className="footer__legal">
          <p>© {new Date().getFullYear()} {profile.fullName} · Hecho con React + Vite</p>
          <a href="#inicio" className="footer__top-btn" onClick={toTop}>
            Volver arriba <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
