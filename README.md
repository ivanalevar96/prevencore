# NexoPreventivo — Landing page

Sitio corporativo de **NexoPreventivo**, asesoría profesional en prevención de riesgos
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

## Formulario de contacto

El formulario (`/contacto`) envía un `POST` a la función serverless `api/contact.js`
(Vercel), que usa la API de [Resend](https://resend.com) para enviar dos correos con
plantilla HTML de marca (encabezado navy + logo):

1. **Notificación interna** a `contacto@nexopreventivo.cl` con los datos del cliente
   y `Reply-To` apuntando a su correo (para responder su consulta directamente desde
   ese mismo correo).
2. **Confirmación automática al cliente** (solo si dejó correo) avisando que se
   recibió su solicitud y que se le responderá en 24 horas o 1 día hábil.

Se usa Resend en vez de enviar directo por SMTP de Google Workspace porque
`contacto@nexopreventivo.cl` es un alias de la misma casilla que recibe la
notificación: Gmail trata ese envío como "correo de uno mismo para uno mismo", lo
archiva fuera de la bandeja de entrada y rompe el `Reply-To`. Con Resend el correo
llega como cualquier correo externo normal.

Variables de entorno requeridas en Vercel:

- `RESEND_API_KEY` — API key del proyecto en Resend (dashboard → API Keys)
- `CONTACT_TO` (opcional, por defecto `contacto@nexopreventivo.cl`)
- `MAIL_FROM` (opcional, por defecto `NexoPreventivo <contacto@nexopreventivo.cl>`) —
  remitente visible; requiere que el dominio `nexopreventivo.cl` esté verificado en
  Resend (registros DNS de SPF/DKIM)
- `SITE_URL` (opcional, por defecto `https://nexopreventivo.cl`) — dominio público
  usado para cargar el logo en los correos (los clientes de correo no pueden
  resolver rutas relativas del proyecto)

Mientras `RESEND_API_KEY` no esté configurada, el endpoint responde con un error
controlado (503) y el frontend muestra un mensaje claro sin romper el build ni el
deploy.

## Notas

- Los archivos de diseño originales están en `PrevenCore landing page/` (formato
  `.dc.html`) y se conservan solo como referencia; no forman parte del build.
