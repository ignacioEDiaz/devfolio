import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Navbar({ links }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(links[0]?.href);
  const [scrolled, setScrolled] = useState(false);

  // Resalta el link de la sección visible (scroll spy)
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      });
      setActive(`#${current}`);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [links]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Logo />
        <nav className={`navbar__menu${open ? ' is-open' : ''}`} aria-label="Principal">
          {links.map((l, i) => (
            <a
              key={l.id}
              href={l.href}
              className={`nav-link${active === l.href ? ' is-active' : ''}`}
              style={{ '--i': i }}
              onClick={() => setOpen(false)}
            >
              <span className="nav-link__text" data-text={l.label}>{l.label}</span>
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="navbar__toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}
