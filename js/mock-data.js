window.AppData = window.AppData || {};

window.AppData.teamMembers = [
  {
    id: "elian",
    name: "Elian Bargaz",
    className: "Dev Knight",
    city: "Buenos Aires",
    age: 22,
    avatar: "EB",
    skills: [
      {
        name: "Refactor Slash",
        tags: "Codigo limpio",
        description: "Reordena bloques complejos para mejorar legibilidad sin romper funcionalidades existentes."
      },
      {
        name: "Grid Guard",
        tags: "CSS Layout",
        description: "Defiende la UI contra desbordes mediante estructuras responsive y breakpoints estables."
      },
      {
        name: "Commit Chain",
        tags: "Git Flow",
        description: "Encadena commits pequenos y claros para sostener trazabilidad durante el desarrollo."
      },
      {
        name: "Debug Sight",
        tags: "QA",
        description: "Detecta errores visuales y logicos antes de desplegar cambios en produccion."
      }
    ],
    movies: ["Matrix", "Interstellar", "The Batman"],
    albums: ["Meteora", "Random Access Memories", "AM"]
  },
  {
    id: "juan",
    name: "Juan Solari",
    className: "UI Ranger",
    city: "Buenos Aires",
    age: 23,
    avatar: "JS",
    skills: [
      {
        name: "Pixel Focus",
        tags: "UI Precision",
        description: "Ajusta tipografia, espaciados y jerarquia visual para interfaces claras y consistentes."
      },
      {
        name: "State Trigger",
        tags: "JavaScript",
        description: "Conecta eventos de interfaz con estados de aplicacion para vistas dinamicas y fluidas."
      },
      {
        name: "Menu Weave",
        tags: "UX Navegacion",
        description: "Disena flujos de menu que guian al usuario sin generar pasos redundantes."
      },
      {
        name: "Breakpoint Dash",
        tags: "Responsive",
        description: "Optimiza componentes para experiencia solida en 400 px, 900 px y 1200 px."
      }
    ],
    movies: ["Your Name", "Blade Runner 2049", "Dune"],
    albums: ["Discovery", "Currents", "Hybrid Theory"]
  },
  {
    id: "eliana",
    name: "Eliana Navarro",
    className: "Logic Alchemist",
    city: "La Plata",
    age: 24,
    avatar: "EN",
    skills: [
      {
        name: "Data Brew",
        tags: "Modelado",
        description: "Construye estructuras de datos robustas para reutilizar contenido en multiples vistas."
      },
      {
        name: "Function Pulse",
        tags: "Programacion",
        description: "Escribe funciones pequenas y reutilizables que facilitan mantenimiento futuro."
      },
      {
        name: "Flow Reading",
        tags: "Analisis",
        description: "Mapea casos de uso para reducir puntos ciegos en navegacion e interacciones."
      },
      {
        name: "Bug Dissolve",
        tags: "Resolucion",
        description: "Aisla y corrige incidencias de forma sistematica con validaciones puntuales."
      }
    ],
    movies: ["Spirited Away", "Inception", "Arrival"],
    albums: ["1989", "Back to Black", "Future Nostalgia"]
  },
  {
    id: "fernanda",
    name: "Maria Fernanda Ortiz",
    className: "Content Bard",
    city: "Cordoba",
    age: 25,
    avatar: "MO",
    skills: [
      {
        name: "Narrative Echo",
        tags: "Storytelling",
        description: "Convierte datos tecnicos en textos claros para mejorar comprension del usuario final."
      },
      {
        name: "Tone Shift",
        tags: "Copywriting",
        description: "Ajusta microtextos para mantener coherencia de voz en todo el producto."
      },
      {
        name: "Icon Chant",
        tags: "UI Content",
        description: "Coordina titulos, etiquetas y simbolos para reforzar lectura rapida en pantallas densas."
      },
      {
        name: "Guide Verse",
        tags: "Documentacion",
        description: "Documenta decisiones y flujos para que el equipo pueda escalar sin perdida de contexto."
      }
    ],
    movies: ["Coco", "Little Women", "Soul"],
    albums: ["Folklore", "El Mal Querer", "Golden Hour"]
  },
  {
    id: "emanuel",
    name: "Emanuel Grigolatto",
    className: "Build Paladin",
    city: "Rosario",
    age: 26,
    avatar: "EG",
    skills: [
      {
        name: "Deploy Shield",
        tags: "Release",
        description: "Protege despliegues con chequeos previos para evitar fallas en entornos publicados."
      },
      {
        name: "Repo Watch",
        tags: "Versionado",
        description: "Mantiene ramas y pull requests ordenadas para acelerar revisiones colaborativas."
      },
      {
        name: "Task Forge",
        tags: "Planificacion",
        description: "Divide entregables grandes en tareas ejecutables con prioridades claras."
      },
      {
        name: "Merge Aura",
        tags: "Trabajo en equipo",
        description: "Sincroniza cambios entre integrantes minimizando conflictos de integracion."
      }
    ],
    movies: ["Gladiator", "Mad Max Fury Road", "The Martian"],
    albums: ["Ten", "Nevermind", "A Night at the Opera"]
  }
];

window.AppData.categoryMenu = [
  { id: "skills", label: "Habilidades", route: "habilidades.html" },
  { id: "movies", label: "Peliculas", route: "peliculas.html" },
  { id: "albums", label: "Albumes", route: "albumes.html" }
];
