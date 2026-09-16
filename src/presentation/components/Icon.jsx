import {
  Coffee, Sprout, Package, Atom, Zap, Hexagon, Route, Spline, Database, Leaf,
  Layers3, Container, GitBranch, Workflow, FlaskConical, ChartNoAxesCombined,
  Gauge, ShoppingBag, Code,
} from 'lucide-react';

/** Mapea identificadores de dominio a íconos concretos (la UI decide cómo se ve). */

/** Marca tipográfica: recuadro + sigla, al tono de la estética de terminal. */
const Badge = ({ text, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <text x="12" y="16.2" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="currentColor"
      fontFamily="Inconsolata, monospace">{text}</text>
  </svg>
);

/** Sigla suelta, sin recuadro (para las redes del footer). */
const Mono = ({ text, ...props }) => (
  <svg viewBox="0 0 24 24" {...props}>
    <text x="12" y="16.5" textAnchor="middle" fontSize={text.length > 1 ? 13 : 16} fontWeight="700"
      fill="currentColor" fontFamily="Inconsolata, monospace">{text}</text>
  </svg>
);

const MAP = {
  // Lenguajes
  java: Coffee,
  ts: (p) => <Badge text="TS" {...p} />,
  js: (p) => <Badge text="JS" {...p} />,

  // Back end
  spring: Sprout,
  maven: Package,
  node: Hexagon,
  express: Route,

  // Front end
  react: Atom,
  vite: Zap,
  gsap: Spline,

  // Datos
  postgres: Database,
  mongo: Leaf,
  redis: Layers3,

  // Infra y calidad
  docker: Container,
  git: GitBranch,
  actions: Workflow,
  junit: FlaskConical,
  grafana: ChartNoAxesCombined,
  prometheus: Gauge,
  shopify: ShoppingBag,

  // Redes
  github: (p) => <Mono text="gh" {...p} />,
  linkedin: (p) => <Mono text="in" {...p} />,
};

export function Icon({ name, size = 24, strokeWidth = 1.5, ...rest }) {
  const Cmp = MAP[name] ?? Code;
  return <Cmp width={size} height={size} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />;
}
