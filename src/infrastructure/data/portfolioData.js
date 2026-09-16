/**
 * Fuente de datos local. Editá este archivo para cambiar todos los textos del sitio.
 * `cell` = posición en la grilla de 4 columnas: [columna, fila] (base 1).
 */
export const portfolioData = {
  profile: {
    greeting: '// console.log("hola")',
    firstName: 'Ignacio',
    lastName: 'Díaz',
    role: 'Desarrollador Full Stack · Junior',
    bio: 'Estudiante avanzado de la Licenciatura en Programación (UNQ). Construyo aplicaciones web con Java y Spring Boot en el back, y React con TypeScript en el front. Me interesa cómo se estructura un sistema antes de escribirlo: capas separadas, modelado de datos y comunicación entre servicios.',
    location: 'Buenos Aires, Argentina',
    handle: 'github.com/ignacioEDiaz',
    handleUrl: 'https://github.com/ignacioEDiaz',
    email: 'nacho.pecci23@gmail.com',
    phone: '+54 11 2831-8662',
  },

  /**
   * Stack en una grilla de 4 columnas. Las celdas vacías son parte del diseño:
   * dejan respirar la cuadrícula.
   */
  tools: [
    { id: 'java', name: 'Java', icon: 'java', cell: [1, 1] },
    { id: 'spring', name: 'Spring Boot', icon: 'spring', cell: [2, 1] },
    { id: 'maven', name: 'Maven', icon: 'maven', cell: [4, 1] },

    { id: 'ts', name: 'TypeScript', icon: 'ts', cell: [1, 2] },
    { id: 'js', name: 'JavaScript', icon: 'js', cell: [2, 2] },
    { id: 'react', name: 'React', icon: 'react', cell: [3, 2] },
    { id: 'vite', name: 'Vite', icon: 'vite', cell: [4, 2] },

    { id: 'node', name: 'Node.js', icon: 'node', cell: [2, 3] },
    { id: 'express', name: 'Express', icon: 'express', cell: [3, 3] },
    { id: 'gsap', name: 'GSAP', icon: 'gsap', cell: [4, 3] },

    { id: 'postgres', name: 'PostgreSQL', icon: 'postgres', cell: [1, 4] },
    { id: 'mongo', name: 'MongoDB', icon: 'mongo', cell: [2, 4] },
    { id: 'redis', name: 'Redis', icon: 'redis', cell: [3, 4] },

    { id: 'docker', name: 'Docker', icon: 'docker', cell: [1, 5] },
    { id: 'git', name: 'Git', icon: 'git', cell: [2, 5] },
    { id: 'actions', name: 'GitHub Actions', icon: 'actions', cell: [3, 5] },
    { id: 'junit', name: 'JUnit', icon: 'junit', cell: [4, 5] },

    { id: 'grafana', name: 'Grafana', icon: 'grafana', cell: [1, 6] },
    { id: 'prometheus', name: 'Prometheus', icon: 'prometheus', cell: [2, 6] },
    { id: 'shopify', name: 'Shopify / Liquid', icon: 'shopify', cell: [3, 6] },
  ],

  services: [
    { id: 'backend', title: 'Back End', category: '#java', tags: ['Spring Boot', 'JPA / Hibernate', 'APIs REST'], description: 'APIs REST con capas separadas y persistencia bien modelada.', cell: [1, 1] },
    { id: 'frontend', title: 'Front End', category: '#react', tags: ['React + Vite', 'TypeScript', 'GSAP'], description: 'Interfaces tipadas, responsivas y con animación ligada al scroll.', cell: [2, 1] },
    { id: 'datos', title: 'Datos', category: '#modelado', tags: ['PostgreSQL', 'MongoDB', 'MER'], description: 'Entidades, claves y cardinalidades pensadas antes de la primera query.', cell: [3, 2] },
    { id: 'testing', title: 'Testing', category: '#calidad', tags: ['JUnit', 'TDD', 'Integración'], description: 'Tests unitarios y de integración escritos antes que el código.', cell: [4, 2] },
    { id: 'salud', title: 'Salud', category: '#observabilidad', tags: ['Grafana', 'Prometheus', 'Health checks'], description: 'Métricas, alertas y manejo de errores centralizado.', cell: [2, 3] },
    { id: 'ia', title: 'IA + SDD', category: '#flujo', tags: ['Speckit', 'Spec-Driven', 'Agentes'], description: 'Desarrollo guiado por especificación, con agentes como parte del flujo.', cell: [3, 3] },
  ],

  projects: [
    {
      id: 'aurel',
      title: 'Aurel — Ecommerce',
      brand: 'AUREL',
      category: 'E-commerce',
      image: '/media/projects/aurel.jpg',
      summary: 'Monolito transaccional migrado desde Shopify a código propio. Clean Architecture, TDD con JUnit, Redis en memoria para bajar el tiempo de carga y un handler de errores universal. Integra las APIs de Mercado Pago y Andreani, con Grafana y Prometheus para observabilidad.',
      stack: ['Java', 'Spring', 'PostgreSQL', 'Redis', 'Express', 'React', 'GSAP'],
      palette: ['#ff5a1f', '#1b1b1b'],
      url: 'https://aurel-lake.vercel.app/',
    },
    {
      id: 'oproc',
      title: 'OPPROC',
      brand: 'OPPROC',
      category: 'Agencia',
      image: '/media/projects/oproc.jpg',
      summary: 'Sitio de la agencia de desarrollo, con animaciones ligadas al scroll y escenas en 3D.',
      stack: ['React', 'Node', 'TypeScript', 'GSAP'],
      palette: ['#ff8a3d', '#141414'],
      url: 'https://opproc.com',
    },
    {
      id: 'shamoni',
      title: 'Shamoni',
      brand: 'SHAMONI',
      category: 'E-commerce',
      image: '/media/projects/shamoni.jpg',
      summary: 'Tienda de un GPS para gatos: problemáticas, soluciones y colección en una sola página.',
      stack: ['React', 'Vite', 'Vercel'],
      palette: ['#e8563a', '#171717'],
      url: 'https://catelital.vercel.app/',
    },
    {
      id: 'cozypaws',
      title: 'CozyPaws',
      brand: 'COZYPAWS',
      category: 'E-commerce',
      image: '/media/projects/cozypaws.jpg',
      summary: 'Tienda de productos para mascotas, con catálogo, marcas, envíos y blog.',
      stack: ['Next.js', 'React', 'Vercel'],
      palette: ['#ff9f43', '#181410'],
      url: 'https://cozypaws-alpha.vercel.app/',
    },
    {
      id: 'steelcrest',
      title: 'Steelcrest Techos',
      brand: 'STEELCREST',
      category: 'Servicios',
      image: '/media/projects/steelcrest.jpg',
      summary: 'Instalación y reparación de techos en CABA y GBA. Landing orientada a pedir presupuesto, con captación por WhatsApp.',
      stack: ['React', 'Vite', 'Vercel'],
      palette: ['#c9552a', '#151515'],
      url: 'https://steelcrest77.vercel.app/',
    },
    {
      id: 'enescala',
      title: 'En escala — Reel Arquitectura',
      brand: 'REEL',
      category: 'Arquitectura',
      image: '/media/projects/enescala.jpg',
      summary: 'Estudio de diseño, proyecto, construcción y dirección de obra en AMBA.',
      stack: ['React', 'Vite', 'Vercel'],
      palette: ['#d8703c', '#131313'],
      url: 'https://en-escala.vercel.app/',
    },
    {
      id: 'mark',
      title: 'MÄRK Estudio',
      brand: 'MÄRK',
      category: 'Arquitectura',
      image: '/media/projects/mark.jpg',
      summary: 'Estudio de arquitectura en Buenos Aires: asesorías, remodelaciones y obra integral.',
      stack: ['React', 'Vite', 'Vercel'],
      palette: ['#b8624a', '#161616'],
      url: 'https://estudio-arquitectura-demo.vercel.app/',
    },
    {
      id: 'marinsek',
      title: 'Marinsek',
      brand: 'MARINSEK',
      category: 'Arquitectura',
      image: '/media/projects/marinsek.jpg',
      summary: 'Estudio de arquitectura en Buenos Aires, con foco en diseño e integración.',
      stack: ['Framer'],
      palette: ['#ff6b35', '#121212'],
      url: 'https://marinsek.framer.website/',
    },
    {
      id: 'architecteo',
      title: 'Architecteo',
      brand: 'ARCHITECTEO',
      category: 'Arquitectura',
      image: '/media/projects/architecteo.jpg',
      summary: 'Sitio para estudios de arquitectura, pensado para poner los proyectos al frente.',
      stack: ['Framer'],
      palette: ['#e0745a', '#141414'],
      url: 'https://architectureopproc.framer.website/',
    },
    {
      id: 'royal',
      title: 'Royal',
      brand: 'ROYAL',
      category: 'Inmobiliaria',
      image: '/media/projects/royal.jpg',
      summary: 'Sitio de inmobiliaria premium, con listados destacados y animaciones suaves.',
      stack: ['Framer'],
      palette: ['#ffa05c', '#191919'],
      url: 'https://royaleopproc.framer.website/',
    },
  ],

  experience: [
    {
      id: 'freelance',
      role: 'Desarrollador Liquid · Shopify',
      company: 'Freelance',
      period: 'Abril 2026 — Actualidad',
      current: true,
      bullets: [
        'Relevamiento de requerimientos: traduzco objetivos de negocio en alcance y prioridades.',
        'Diseño e implementación de temas y secciones a medida en Liquid.',
        'Optimización de UX y de velocidad de carga para mejorar la conversión.',
        'Responsable end-to-end: del análisis inicial al testing y la entrega.',
      ],
    },
    {
      id: 'apex',
      role: 'Soporte de Infraestructura y Redes',
      company: 'Apex',
      period: 'Enero 2026 — Abril 2026',
      bullets: [
        'Resolución de incidencias sobre Windows en entornos de telecomunicaciones.',
        'Administración de firewalls y proxys.',
        'Gestión de redes de datos, cuidando estabilidad, seguridad y rendimiento.',
      ],
    },
    {
      id: 'tgv',
      role: 'BI Analyst',
      company: 'TGV',
      period: 'Enero 2025 — Abril 2025',
      bullets: [
        'Análisis de requerimientos para identificar entidades, relaciones y restricciones.',
        'Diseño de bases de datos y diagramas MER estandarizados.',
        'Definición de claves primarias, foráneas y cardinalidades.',
      ],
    },
  ],

  education: {
    degree: 'Licenciatura en Programación',
    school: 'Universidad Nacional de Quilmes (UNQ)',
    status: 'En curso · últimas materias',
    detail: 'Algoritmos, estructuras de datos, programación orientada a objetos, bases de datos e ingeniería de software.',
    languages: 'Español nativo · Inglés intermedio (lectura de documentación técnica)',
  },

  /**
   * Escena de transición con scroll que aparece justo antes de "Sobre mí".
   * `sources` se prueba en orden; si ninguna existe queda el placeholder vectorial.
   */
  portrait: {
    eyebrow: 'whoami',
    before: 'Detrás del',
    accent: 'código',
    caption: 'Estudiante avanzado de Programación en la UNQ, con la cabeza puesta en cómo se estructura un sistema antes de escribir la primera línea.',
    hint: 'seguí bajando',
    sources: ['/media/character.png', '/media/character.webp', '/media/character.jpg'],
    fallback: '/media/character-placeholder.svg',
    alt: 'Figura en penumbra recortada por una luz de contorno roja',
    marks: ['chevrons', 'quadrant', 'stack', 'cube'],
  },

  navigation: [
    { id: 'home', label: 'Inicio', href: '#inicio' },
    { id: 'stack', label: 'Stack', href: '#herramientas' },
    { id: 'experience', label: 'Experiencia', href: '#experiencia' },
    { id: 'work', label: 'Proyectos', href: '#proyectos' },
    { id: 'contact', label: 'Contacto', href: '#contacto' },
  ],

  socialLinks: [
    { id: 'gh', label: 'GitHub', icon: 'github', href: 'https://github.com/ignacioEDiaz', cell: [3, 1] },
    { id: 'in', label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/nacho-diaz895602249/', cell: [2, 2] },
  ],
};
