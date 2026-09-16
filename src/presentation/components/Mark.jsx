import { asset } from '../asset';

/** Marcas gráficas de la identidad (SVG en /public/media). */
const MARKS = {
  cube: '/media/mark-cube.svg',
  quadrant: '/media/mark-quadrant.svg',
  chevrons: '/media/mark-chevrons.svg',
  stack: '/media/mark-stack.svg',
};

export function Mark({ name, size = 56, className = '', ...rest }) {
  const src = asset(MARKS[name] ?? MARKS.cube);
  return (
    <img
      className={`mark ${className}`}
      src={src}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      draggable="false"
      {...rest}
    />
  );
}
