/** Marcador "+" que se ubica en intersecciones de la grilla. */
export function Crosshair({ style, className = '' }) {
  return <span className={`crosshair ${className}`} style={style} aria-hidden="true" />;
}
