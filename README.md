# Ignacio Díaz — Portfolio (React + Vite + Clean Architecture)

Portfolio de una página, oscuro y construido sobre una grilla de 4 columnas: hero con un objeto 3D hecho
con CSS, una escena de retrato ligada al scroll, la grilla del stack con íconos, tarjetas de capacidades,
el historial laboral y la formación, un carrusel de proyectos, un formulario de contacto validado y un footer.

## Scripts
```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Arquitectura
```
src/
├─ domain/                 # Reglas de negocio puras (sin React)
│  ├─ entities/            # Portfolio (factories) y ContactMessage (validación)
│  └─ repositories/        # Contratos: PortfolioRepository, ContactGateway
├─ application/usecases/   # GetPortfolio, SendContactMessage
├─ infrastructure/         # Implementaciones concretas
│  ├─ data/portfolioData.js        ← EDITÁ ACÁ TODOS LOS TEXTOS
│  ├─ repositories/InMemoryPortfolioRepository.js
│  └─ gateways/ (MockContactGateway, HttpContactGateway)
├─ di/container.js         # Composition root (inyección de dependencias)
└─ presentation/           # React: providers, hooks, components, sections, styles
```
Las dependencias apuntan hacia adentro: `presentation → application → domain` e `infrastructure → domain`.
Solo `di/container.js` conoce las implementaciones concretas.

## Formulario real
Creá un archivo `.env` con:
```
VITE_CONTACT_ENDPOINT=https://tu-endpoint.com/contact
```
Así el contenedor usa `HttpContactGateway` en lugar del gateway simulado.

## Personalizar
- Textos, stack, capacidades, experiencia, formación, proyectos y redes: `src/infrastructure/data/portfolioData.js`
- Colores y tipografías: variables en `src/presentation/styles/base.css`
- Íconos del stack: `presentation/components/Icon.jsx` mapea cada `icon` del stack a un glifo de lucide.
- Portadas de proyectos: `ProjectCover.jsx` (SVG generativo). Podés reemplazarlas por imágenes propias.
- Imagen del retrato: `public/media/character.png` (se prueban `.png`, `.webp` y `.jpg`, con un
  placeholder vectorial como último recurso).
