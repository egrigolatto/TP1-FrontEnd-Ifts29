# TP1 Front-End — Grupo 28

Sitio web grupal con estética RPG Maker. Presenta al equipo y el perfil de cada integrante (habilidades, películas y discos), con navegación interna y diseño responsive.

## Integrantes

| Nombre | GitHub |
| --- | --- |
| BARGAZ, ELIÁN | [Elibar19](https://github.com/Elibar19) |
| SOLARI, JUAN IGNACIO | [LaWeaArgentina](https://github.com/LaWeaArgentina) |
| NAVARRO, ELIANA GISELE | Pendiente de completar |
| ORTIZ, MARIA FERNANDA | Pendiente de completar |
| GRIGOLATTO, EMANUEL ANDRES | Pendiente de completar |

Páginas de perfil:

- [perfil-elian.html](perfil-elian.html)
- [perfil-juan.html](perfil-juan.html)
- [perfil-eliana.html](perfil-eliana.html)
- [perfil-fernanda.html](perfil-fernanda.html)
- [perfil-emanuel.html](perfil-emanuel.html)

## Tecnologías

- HTML5
- CSS3 (custom properties, Grid, Flexbox, media queries)
- JavaScript ES6+ (DOM, eventos)
- Google Fonts: **Press Start 2P** (títulos) y **Rajdhani** (cuerpo)

## Guía de estilos

### Paleta hexadecimal

| Token | Hex / valor | Uso |
| --- | --- | --- |
| `--bg-top` | `#2b3a53` | Fondo superior |
| `--bg-mid` | `#64789c` | Fondo medio |
| `--bg-bot` | `#c7c6b7` | Fondo inferior |
| `--window-bg` | `rgba(14, 24, 44, 0.84)` | Paneles tipo ventana RPG |
| `--window-border` | `#efe9cf` | Borde claro de ventanas |
| `--window-border-dark` | `#8190a9` | Borde interior |
| `--text-main` | `#f8f4e5` | Texto principal |
| `--text-muted` | `#cccfde` | Texto secundario |
| `--accent` | `#ffd76a` | Acento dorado / selección |
| `--accent-2` | `#6ee7d8` | Acento teal / clases |
| `--danger` | `#ff8e8e` | Advertencias |

### Tipografía

- **Press Start 2P**: títulos y botones del menú
- **Rajdhani**: párrafos y metadatos

### Iconografía / avatares

Avatares pixel art 8-bit RPG en `img/avatars/` (uno por integrante). No se usan fotos personales.

### Breakpoints obligatorios

- `1200px`
- `900px`
- `400px`

## Estructura de archivos

```text
/
├── index.html
├── bitacora.html
├── perfil-elian.html
├── perfil-juan.html
├── perfil-eliana.html
├── perfil-fernanda.html
├── perfil-emanuel.html
├── css/
│   └── global.css
├── js/
│   ├── mock-data.js
│   ├── ui-components.js
│   ├── index-page.js
│   ├── profile-page.js
│   └── portada.js
└── img/
    └── avatars/
        ├── elian.png
        ├── juan.png
        ├── eliana.png
        ├── fernanda.png
        └── emanuel.png
```

## Funciones JavaScript

### Portada (`index.html`)

- **Click en integrante**: abre directamente su página de perfil.
- Archivos: `js/index-page.js`, `js/portada.js`.
- Navegación superior: **Inicio / Bitácora / Perfiles**.

### Perfiles (`perfil-*.html`)

- **Resaltado de habilidad**: al hacer clic en una habilidad se actualiza la descripción.
- Cada perfil muestra avatar, ciudad, edad, 4 habilidades, 3 películas y 3 discos.
- Archivo: `js/profile-page.js`.

### Datos compartidos

- `js/mock-data.js` concentra integrantes, skills, movies y albums.
- Campos marcados con `// TODO: completar` para que cada integrante personalice ciudad, edad, habilidades, películas y discos.

## Bitácora

Disponible en [bitacora.html](bitacora.html): decisiones de diseño, dificultades y cambios del proceso.

## URL publicada en Vercel

Pendiente de publicar:

`https://tu-proyecto.vercel.app`

## Evolución (siguientes TPs)

- Completar perfiles personales.
- Despliegue en Vercel y enlace definitivo.

## Cómo probar en local

Abrir `index.html` en el navegador o servir la carpeta con un servidor estático (recomendado para rutas relativas):

```bash
npx serve .
```
