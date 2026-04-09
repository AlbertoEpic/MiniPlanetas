# MINIPLANETAS - SQLP

Web de miniplanetas y panorámicas esféricas.

Landing page para el proyecto MINIPLANETAS con diseño visual y animaciones suaves.

## Comandos

| Comando           | Accion                                  |
| :---------------- | :-------------------------------------- |
| `npm install`     | Instala dependencias                    |
| `npm run dev`     | Inicia el servidor local                |
| `npm run build`   | Genera la version estatica en `dist/`   |
| `npm run preview` | Previsualiza el build localmente        |


## Notas

- Edita la portada en `src/pages/index.astro`.
- Los assets estaticos van en `public/`.

_Deploy forzado: 2026-03-23_
- Para activar el formulario de contacto con FormInit, define `PUBLIC_FORMINIT_ACTION` en tu entorno, por ejemplo: `PUBLIC_FORMINIT_ACTION=https://forminit.com/f/TU_FORM_ID`.

- Para activar el widget de feedback en las fichas de planetas, define `PUBLIC_FORMINIT_FEEDBACK_FORM_ID` con el ID de formulario de FormInit.

## Contador de "Me gusta" en producción: opción gratis recomendada

El sitio puede seguir en **GitHub Pages**, pero el contador persistente necesita una API aparte.

### ✅ Opción recomendada y gratuita
- **Frontend**: GitHub Pages
- **API**: `serverless-forms/` desplegada en **Vercel free**
- **Base de datos**: **Upstash free** (sin coste) o cualquier URL `Valkey/Redis` compatible

### Archivos añadidos
- `serverless-forms/planet-likes-api.mjs` → servidor local para desarrollo
- `serverless-forms/api/likes.mjs` → endpoint listo para Vercel
- `serverless-forms/api/health.mjs` → comprobación del backend
- `serverless-forms/.env.example` → variables de entorno de ejemplo
- `serverless-forms/vercel.json` → configuración mínima del despliegue gratis

### Arranque local de la API

```bash
npm run likes:install
npm run likes:dev
```

Esto levanta una API en `http://127.0.0.1:8787`.

### Variables necesarias

#### API de likes
**Opción gratis recomendada (Upstash):**
- `UPSTASH_REDIS_REST_URL=https://...`
- `UPSTASH_REDIS_REST_TOKEN=...`

**Opción alternativa (Valkey/Redis):**
- `VALKEY_URL=redis://usuario:password@host:6379`

**Comunes:**
- `CORS_ORIGIN=https://miniplanetas.soloquedalopeor.com,http://127.0.0.1:4322`
- `VALKEY_KEY_PREFIX=miniplanetas:likes`

#### Frontend Astro
- `PUBLIC_PLANET_LIKES_API_URL=https://TU-API.vercel.app/api/likes`

### Despliegue gratis recomendado
1. Crea una base gratis en **Upstash** y copia sus 2 variables.
2. Importa `serverless-forms/` en **Vercel** como proyecto nuevo.
3. Añade allí las variables de entorno y despliega.
4. En el build de Astro, define `PUBLIC_PLANET_LIKES_API_URL` con la URL pública de Vercel.
5. Ejecuta:

```bash
npm run build
npm run deploy
```

> Si `PUBLIC_PLANET_LIKES_API_URL` no está definida, la ficha sigue usando el fallback local del navegador.
