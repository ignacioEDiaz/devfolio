/**
 * Entidades del portfolio. Son objetos planos e inmutables creados con
 * factories para mantener el dominio libre de frameworks.
 */
const freeze = (o) => Object.freeze(o);

export const createProfile = ({ firstName, lastName, role, greeting, bio, location, handle, handleUrl, email, phone }) =>
  freeze({ firstName, lastName, role, greeting, bio, location, handle, handleUrl, email, phone,
    get fullName() { return `${firstName} ${lastName}`; } });

export const createTool = ({ id, name, icon, cell }) => freeze({ id, name, icon, cell });

export const createService = ({ id, title, category, tags = [], description, cell }) =>
  freeze({ id, title, category, tags: freeze([...tags]), description, cell });

export const createProject = ({ id, title, brand, category, image, summary, stack = [], palette, url = '#' }) =>
  freeze({ id, title, brand, category, image, summary, stack: freeze([...stack]), palette, url });

/** Puesto del historial laboral, ordenado del más reciente al más antiguo. */
export const createExperience = ({ id, role, company, period, current = false, bullets = [] }) =>
  freeze({ id, role, company, period, current, bullets: freeze([...bullets]) });

export const createEducation = ({ degree, school, status, detail, languages }) =>
  freeze({ degree, school, status, detail, languages });

/** Escena de retrato: imagen + copy que se animan con el scroll. */
export const createPortrait = ({ eyebrow, before, accent, caption, hint, sources = [], fallback, alt, marks = [] }) =>
  freeze({ eyebrow, before, accent, caption, hint, fallback, alt,
    sources: freeze([...sources, fallback]), marks: freeze([...marks]) });

export const createNavLink = ({ id, label, href }) => freeze({ id, label, href });

export const createSocialLink = ({ id, label, icon, href, cell }) => freeze({ id, label, icon, href, cell });
