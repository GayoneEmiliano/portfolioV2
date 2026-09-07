# portfolioV2

Portfolio personal de **Emiliano Newen** (Analista de Sistemas / Full Stack Semi Senior) —
[emilianonewen.com](https://emilianonewen.com). Sitio de una sola página, bilingüe (ES/EN), con
secciones de presentación, proceso de trabajo, proyectos destacados, stack tecnológico y un
formulario de contacto que envía mail por SMTP.

Reemplaza a la carpeta hermana `../portfolio` (una versión anterior en Next.js, abandonada y sin
commitear). Este es el portfolio **activo**.

## Stack

100% estático en el front, sin build ni framework:

- **HTML** — `index.html` (una sola página, todas las secciones)
- **CSS** — `style.css`, vanilla (custom properties, sin preprocesador)
- **JS** — `script.js`, vanilla ES5-friendly (sin dependencias, sin bundler)
- **Fuentes** — Google Fonts (`Plus Jakarta Sans`, `JetBrains Mono`) vía `<link>`

Backend mínimo, solo para el formulario de contacto:

- **PHP** — `contact.php`, procesa el POST del formulario
- **PHPMailer** — vendorizado a mano en `phpmailer/` (no vía Composer), usado para enviar el mail
  por SMTP

No hay `package.json`, `composer.json`, linter, test runner ni pipeline de build. Pensado para
subirse tal cual a cualquier hosting que sirva PHP (el repo apunta a Hostinger, ver
`mail-config.example.php`).

## Cómo levantarlo en local

### Solo el front (sin formulario funcional)

Al ser HTML/CSS/JS estático, alcanza con abrir `index.html` en el navegador o servirlo con
cualquier servidor estático simple, por ejemplo:

```bash
npx serve .
# o
python -m http.server 8000
```

El formulario de contacto va a fallar (o mostrar el mensaje de "no configurado") porque no hay
servidor PHP corriendo.

### Front + formulario de contacto funcional

Se necesita PHP corriendo localmente (con `mail-config.php` configurado):

1. Copiar `mail-config.example.php` a `mail-config.php` (mismo directorio raíz) y completar los
   datos reales de SMTP (`smtp_host`, `smtp_user`, `smtp_pass`, `mail_to`, etc.). Este archivo
   está en `.gitignore` a propósito — **nunca** subirlo al repo.
2. Levantar el servidor embebido de PHP desde la raíz del proyecto:

   ```bash
   php -S localhost:8000
   ```

3. Abrir `http://localhost:8000` y probar el formulario de la sección de contacto.

Si `mail-config.php` no existe, `contact.php` responde `ok: false` con el mensaje "El formulario
todavía no está configurado" en vez de romper.

## Estructura de archivos

```
index.html                  Página única, todas las secciones (hero, about, process, work, stack, contact)
style.css                   Estilos (tema claro, variables CSS, animaciones de reveal)
script.js                   Toda la lógica del front: i18n, render de contenido, canvas animado, envío del form
contact.php                 Endpoint que recibe el POST del form y envía el mail vía PHPMailer
mail-config.example.php     Plantilla de configuración SMTP (copiar a mail-config.php, no versionado)
phpmailer/                  Copia vendorizada de PHPMailer (src/Exception.php, PHPMailer.php, SMTP.php)
favicon.png
.gitignore                  Ignora mail-config.php, node_modules/, *.log, .env, Thumbs.db/.DS_Store
```

No hay carpeta `assets/` — el único recurso binario es `favicon.png` en la raíz.

## Estado actual

El sitio está **completo y funcional** como portfolio de una página:

- Contenido bilingüe (ES/EN) totalmente cargado en `script.js` (textos, proyectos, stack, pasos
  del proceso) — no hay placeholders ni secciones "en construcción".
- El formulario de contacto está implementado end-to-end (validación en el cliente, honeypot
  antibot, validación en servidor, envío por SMTP con PHPMailer) — depende únicamente de que
  `mail-config.php` esté presente y bien configurado en el servidor de destino.
- El repo está en GitHub (`github.com/GayoneEmiliano/portfolioV2`, rama `main`) y sincronizado —
  sin cambios pendientes ni ramas divergentes al momento de escribir esto.
- Los proyectos listados en la sección "Casos de trabajo" son descripciones genéricas/anonimizadas
  (sistema administrativo multisucursal, capa de integración, dashboard, automatización) — no
  enlazan a repos ni demos públicas, consistente con que son sistemas internos de un empleador.

No hay un `README.md` ni `CLAUDE.md` previos en el repo (este es el primer commit de ambos).
