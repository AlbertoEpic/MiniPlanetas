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
- Para activar el formulario de contacto con FormInit, define `PUBLIC_FORMINIT_ACTION` en tu entorno, por ejemplo: `PUBLIC_FORMINIT_ACTION=https://forminit.com/f/TU_FORM_ID`.

- Para activar el widget de feedback en las fichas de planetas, define `PUBLIC_FORMINIT_FEEDBACK_FORM_ID` con el ID de formulario de FormInit.
