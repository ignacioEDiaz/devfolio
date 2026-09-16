/**
 * Resuelve una ruta de /public respetando la base del build.
 * Así el mismo bundle sirve en la raíz (Vercel) y en un subpath
 * (GitHub Pages en /devfolio/) sin tocar los datos.
 */
export const asset = (path) => {
  if (!path || /^(https?:)?\/\//.test(path)) return path;
  return import.meta.env.BASE_URL.replace(/\/$/, '') + (path.startsWith('/') ? path : `/${path}`);
};
