# PrevenCore — Landing page

Sitio corporativo de **PrevenCore**, asesoría profesional en prevención de riesgos
laborales en Chile. Construido con **React + Vite**, con diseño responsivo dinámico y
transiciones animadas (Framer Motion). Listo para desplegar en **Vercel**.

## Stack

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [React Router 6](https://reactrouter.com/) — navegación SPA entre páginas
- [Framer Motion](https://www.framer.com/motion/) — transiciones de página, reveal al hacer
  scroll, hover y menú móvil animado

## Páginas

| Ruta         | Página     |
| ------------ | ---------- |
| `/`          | Inicio     |
| `/nosotros`  | Nosotros   |
| `/servicios` | Servicios  |
| `/rubros`    | Rubros     |
| `/normativa` | Normativa  |
| `/contacto`  | Contacto (con formulario) |

## Desarrollo

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # build de producción en /dist
npm run preview  # previsualiza el build de producción
```

## Diseño responsivo

- Tipografías y espaciados fluidos con `clamp()`.
- Grids adaptables con `repeat(auto-fit, minmax(...))`.
- Menú de navegación que cambia dinámicamente a versión móvil (hamburguesa animada)
  mediante el hook `useMediaQuery`, reaccionando al `resize` en tiempo real.

## Estructura

```
src/
├── main.jsx              # punto de entrada + BrowserRouter
├── App.jsx               # rutas + transiciones de página (AnimatePresence)
├── index.css             # reset, fuentes y estados :hover / :focus
├── theme.js              # tokens de diseño (colores, fuentes, layout)
├── hooks/
│   └── useMediaQuery.js  # responsive dinámico
├── components/
│   ├── SiteNav.jsx       # cabecera responsiva con menú móvil
│   ├── SiteFooter.jsx
│   ├── SubHero.jsx       # hero compartido de páginas internas
│   ├── motion.jsx        # primitivas de animación (Reveal, Hero, LiftCard, Zoom)
│   └── ui.jsx            # Container, Button, Eyebrow, ArrowLink...
└── pages/                # Inicio, Nosotros, Servicios, Rubros, Normativa, Contacto
public/
└── assets/               # imágenes (logo, escudo, fotos de terreno)
```

## Despliegue en Vercel

El repo incluye [`vercel.json`](./vercel.json) con la configuración de framework Vite y los
*rewrites* SPA (todas las rutas → `index.html`) para que el enrutado del lado del cliente
funcione tras un refresh.

1. Sube el repositorio a GitHub.
2. En Vercel: **New Project → Import** el repo.
3. Vercel detecta Vite automáticamente (build `vite build`, salida `dist`). Deploy.

## Notas

- Los archivos de diseño originales están en `PrevenCore landing page/` (formato
  `.dc.html`) y se conservan solo como referencia; no forman parte del build.
- El formulario de contacto valida en el cliente y muestra un estado de éxito. Para
  recibir los envíos, conéctalo a un servicio de correo/formularios (p. ej. Formspree,
  Resend o una función serverless de Vercel).
