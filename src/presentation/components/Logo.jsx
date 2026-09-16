/** Logo original: bloque de píxeles + nombre en monoespaciada. */
export function Logo({ muted = false }) {
  return (
    <a href="#inicio" className={`logo${muted ? ' logo--muted' : ''}`} aria-label="Ignacio Díaz, inicio">
      <svg className="logo__mark" viewBox="0 0 28 28" aria-hidden="true">
        {[[0, 10], [5, 5], [5, 15], [10, 0], [10, 20], [15, 10], [20, 5], [20, 15]].map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x + 2} y={y + 2} width="4" height="4" />
        ))}
        <rect x="12" y="12" width="4" height="4" className="logo__dot" />
      </svg>
      <span className="logo__text">ignacio<b>diaz</b></span>
    </a>
  );
}
