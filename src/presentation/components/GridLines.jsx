/** Líneas verticales fijas de la grilla de 4 columnas que recorren toda la página. */
export function GridLines() {
  return (
    <div className="gridlines" aria-hidden="true">
      <div className="container gridlines__inner">
        {Array.from({ length: 4 }, (_, i) => <span key={i} />)}
      </div>
    </div>
  );
}
