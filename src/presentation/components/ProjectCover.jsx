/**
 * Portada de cada proyecto: una captura real del sitio montada dentro de una
 * ventana de navegador. Si el proyecto no tiene captura (todavía no está
 * publicado), cae en una maqueta generativa en SVG, sin imágenes externas.
 */
import { asset } from '../asset';

export function ProjectCover({ project }) {
  const [accent, base] = project.palette;
  const id = `p-${project.id}`;
  const domain = project.url.startsWith('http')
    ? project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : null;
  // El nombre ocupa el ancho disponible sin desbordar la ventana.
  const brandSize = Math.max(48, Math.min(104, (104 * 9) / project.brand.length));

  return (
    <svg className="cover" viewBox="0 0 1000 560" preserveAspectRatio="xMidYMid slice" role="img"
      aria-label={`Vista previa de ${project.title}`}>
      <defs>
        <pattern id={`${id}-stripes`} width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="14" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="2" />
        </pattern>
        <radialGradient id={`${id}-glow`} cx="0.7" cy="0.85" r="0.6">
          <stop offset="0" stopColor={accent} stopOpacity="0.9" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-noise`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.08 0" />
        </filter>
        <clipPath id={`${id}-viewport`}>
          <rect x="60" y="86" width="880" height="424" />
        </clipPath>
      </defs>

      <rect width="1000" height="560" fill={base} />
      <rect width="1000" height="560" fill={`url(#${id}-stripes)`} />
      <rect width="1000" height="560" fill={`url(#${id}-glow)`} />

      {/* Ventana del navegador */}
      <rect x="60" y="50" width="880" height="460" rx="6" fill="#0d0d0d" stroke="#ffffff" strokeOpacity="0.08" />
      <rect x="60" y="50" width="880" height="36" rx="6" fill="#161616" />
      {[90, 112, 134].map((cx) => <circle key={cx} cx={cx} cy="68" r="6" fill="#ffffff" fillOpacity="0.15" />)}
      <rect x="170" y="58" width="320" height="20" rx="10" fill="#ffffff" fillOpacity="0.06" />
      {domain && (
        <text x="186" y="73" fill="#ffffff" fillOpacity="0.45" fontFamily="Inconsolata, monospace"
          fontSize="13">{domain}</text>
      )}

      {project.image ? (
        <image
          href={asset(project.image)}
          x="60" y="86" width="880" height="424"
          preserveAspectRatio="xMidYMin slice"
          clipPath={`url(#${id}-viewport)`}
        />
      ) : (
        <g clipPath={`url(#${id}-viewport)`}>
          {/* Maqueta generativa para los proyectos sin captura */}
          <rect x="100" y="118" width="18" height="18" fill={accent} />
          {[724, 800, 876].map((x) => (
            <rect key={x} x={x} y="123" width="52" height="8" rx="4" fill="#ffffff" fillOpacity="0.18" />
          ))}
          <text x="100" y="212" fill={accent} fontFamily="Inconsolata, monospace" fontSize="20"
            letterSpacing="2">{(project.category ?? '').toUpperCase()}</text>
          <text x="100" y="312" fill="#ffffff" fontFamily="Poppins, sans-serif" fontWeight="600"
            fontSize={brandSize} letterSpacing="-3">{project.brand}</text>
          <rect x="100" y="344" width="180" height="3" fill={accent} />
          <g fill="#ffffff" fillOpacity="0.08">
            <rect x="100" y="392" width="240" height="88" rx="4" />
            <rect x="360" y="392" width="240" height="88" rx="4" />
          </g>
          <rect x="620" y="392" width="280" height="88" rx="4" fill={accent} fillOpacity="0.22" />
        </g>
      )}

      <rect width="1000" height="560" filter={`url(#${id}-noise)`} pointerEvents="none" />
    </svg>
  );
}
