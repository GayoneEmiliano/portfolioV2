# CLAUDE.md

Guía para trabajar en este repo: portfolio personal estático de Emiliano Newen
(emilianonewen.com). Ver `README.md` para stack, estructura y cómo levantarlo en local.

## Panorama general

Sitio de una sola página (`index.html`) sin build ni framework. Todo el contenido textual
(ambos idiomas, textos de proyectos, pasos del proceso, stack) vive **hardcodeado dentro de
`script.js`**, no en el HTML ni en archivos de datos separados — el HTML solo tiene contenedores
vacíos (`#factsList`, `#stepsList`, `#projectsList`, `#stackList`) y elementos con
`data-i18n="clave"` que `script.js` rellena en runtime. Si hay que agregar/editar un proyecto, un
paso del proceso o un texto, el lugar es el objeto `COPY` en `script.js`, no `index.html`.

## Cómo está organizado `script.js`

Todo el archivo es una única IIFE (`(function () { "use strict"; ... })()`), sin módulos ni
imports. De arriba a abajo:

1. **`COPY`** (líneas ~6-251): objeto con dos claves, `es` y `en`. Cada una tiene todos los textos
   del sitio (nav, hero, secciones, labels) más dos arrays de datos: `steps` (los 3 pasos de "Cómo
   trabajo") y `projects` (los 4 casos de la sección "Proyectos"). Agregar un proyecto nuevo
   requiere agregarlo en **ambos** idiomas para no romper el toggle.
2. **`STACK`** (línea ~253): array de grupos de tecnologías (Frontend/Backend/Database/Tools),
   **no** está duplicado por idioma porque los nombres de tecnología no se traducen.
3. **`NODES` / `EDGES`** (línea ~275): datos del diagrama animado en canvas (`#graphCanvas`) —
   posiciones relativas (0–1) de cada nodo tecnológico y qué pares de nodos se conectan.
4. **Funciones de render**: `renderFacts`, `renderSteps`, `renderProjects`, `renderStack` — cada
   una vacía su contenedor (`innerHTML = ""`) y reconstruye el DOM a mano con el helper `el(tag,
   className, html)`. Se llaman de nuevo cada vez que cambia el idioma (excepto `renderStack`, que
   solo corre una vez porque no depende del idioma — tiene un guard `if
   (list.childElementCount) return;`).
5. **`applyLang(lang)`**: el corazón del i18n (ver sección siguiente).
6. **`setupLangToggle`**: listeners de los botones `.lang-btn` (`data-lang="es"` / `data-lang="en"`).
7. **`setupReveal`**: `IntersectionObserver` que agrega `.is-visible` a las secciones con
   `[data-reveal]` cuando entran en viewport (animación de fade/slide-up definida en `style.css`).
   Con fallback si el navegador no soporta `IntersectionObserver`.
8. **`setupCanvas`**: anima el diagrama de nodos/tecnologías del canvas de la sección
   `canvas-section`. Loop de `requestAnimationFrame`, nodos con oscilación senoidal propia +
   repulsión suave cuando el puntero se acerca, líneas entre nodos según `EDGES` con una
   partícula viajando por cada línea. Redimensiona el canvas con `ResizeObserver` (o `resize` como
   fallback) respetando `devicePixelRatio` (cap en 2x).
9. **`setupContactForm`**: envío del formulario de contacto vía `fetch` (ver sección de mail más
   abajo).
10. **Bootstrap** (`DOMContentLoaded`): `renderStack()` → `applyLang("es")` (idioma por defecto) →
    `setupLangToggle()` → `setupReveal()` → `setupCanvas()` → `setupContactForm()`.

## Sistema de traducción (i18n)

No usa ninguna librería — es un mapeo manual clave→texto:

- **Textos estáticos**: cualquier elemento HTML con `data-i18n="clave"` (ver `index.html`, ej.
  `<a href="#about" data-i18n="navAbout">Sobre mí</a>`). `applyLang(lang)` recorre
  `document.querySelectorAll("[data-i18n]")` y reemplaza `node.textContent` por
  `COPY[lang][clave]`, si existe. El texto que ya está en el HTML es solo el fallback/valor por
  defecto en español antes de que corra el JS — no hace falta que coincida con `COPY.es`, pero
  conviene mantenerlo igual para evitar parpadeo de contenido distinto en el primer render.
- **Textos generados dinámicamente** (facts, steps, projects): no tienen `data-i18n` porque no
  existen en el HTML de entrada — se generan enteramente desde `COPY[lang]` en las funciones
  `render*`, que se vuelven a ejecutar dentro de `applyLang`.
- **Estado del idioma actual**: variable módulo `state.lang` (arranca en `"es"`). Se usa en
  `setupContactForm` para elegir los mensajes de estado (`formSending`, `formSuccess`, etc.) en el
  idioma activo al momento de enviar/recibir la respuesta.
- **Cambio de idioma**: los botones `.lang-btn[data-lang="es"|"en"]` en el header llaman
  `applyLang(lang)` directo, que además actualiza `document.documentElement.lang` y el estado
  `aria-pressed`/clase `.active` de los botones.
- **Agregar un idioma nuevo**: agregar una clave nueva a `COPY` (ej. `pt`) con **todas** las
  mismas claves que `es`/`en`, y un botón `.lang-btn` nuevo en `index.html`. No hay validación de
  que falten claves — si falta una, `applyLang` simplemente no toca ese nodo (`if (t[key] !==
  undefined)`), dejando el texto anterior.

## Envío de mail (contact.php + PHPMailer)

Flujo completo, cliente → servidor:

1. **Cliente** (`setupContactForm` en `script.js`): intercepta el submit, corre
   `form.checkValidity()` (validación HTML5 nativa vía los `required`/`maxlength`/`type="email"`
   del `<input>`/`<textarea>` en `index.html`). Si falla, muestra `formErrorValidation` y llama
   `form.reportValidity()` para que el navegador muestre los globos nativos. Si pasa, hace
   `fetch(form.action, { method: "POST", body: new FormData(form), headers: {
   "X-Requested-With": "XMLHttpRequest", Accept: "application/json" } })` — estos headers son los
   que le indican a `contact.php` que responda JSON en vez de hacer un redirect 302.
2. **Servidor** (`contact.php`):
   - Detecta AJAX por `X-Requested-With` o `Accept: application/json` (variable `$isAjax`). Si la
     request no es AJAX (form enviado sin JS), responde con un `Location:
     index.html?sent=0|1#contact` en vez de JSON — soporta progressive enhancement.
   - **Honeypot**: si el campo oculto `website` (input `tabindex="-1" aria-hidden="true"` en el
     HTML, invisible para humanos) viene con algún valor, responde `ok: true` sin enviar nada —
     así el bot cree que funcionó y no vuelve a intentar, pero no se manda mail real.
   - Valida server-side: campos no vacíos, `FILTER_VALIDATE_EMAIL` sobre el email, longitud
     máxima de `name` (150) y `message` (5000) — duplica los límites que ya impone el HTML
     (`maxlength`), porque la validación de cliente nunca es confiable por sí sola.
   - Carga `mail-config.php` (no versionado, ver `mail-config.example.php`) con
     `require`. Si no existe, corta con un mensaje de "formulario no configurado" en vez de un
     error fatal de PHP.
   - Incluye PHPMailer a mano (`require` de los tres archivos de `phpmailer/src/`, sin
     autoloader/Composer) y arma el mail: SMTP con auth, `ENCRYPTION_SMTPS` o
     `ENCRYPTION_STARTTLS` según `smtp_secure` en la config, `setFrom` con la cuenta propia,
     `addAddress` al destinatario configurado, y `addReplyTo($email, $name)` con los datos que
     mandó el visitante (para poder responder el mail directo al remitente real).
   - El cuerpo del mail es **texto plano** (no se llama `$mail->isHTML(true)`), interpolación
     simple `"Nombre: {$name}\nEmail: {$email}\n\nMensaje:\n{$message}"`.
   - Cualquier excepción de PHPMailer se loguea con `error_log` y responde un mensaje genérico al
     cliente (no expone el detalle interno del error SMTP).
3. **Config** (`mail-config.example.php` → copiar a `mail-config.php`): array con `smtp_host`,
   `smtp_port`, `smtp_secure` (`'ssl'` para puerto 465, `'tls'` para 587), `smtp_user`,
   `smtp_pass`, `mail_to`, `mail_from_name`. Pensado para SMTP de Hostinger por default, pero
   sirve para cualquier proveedor SMTP.

## Gotchas de seguridad

- **`mail-config.php` nunca debe subirse al repo** — ya está en `.gitignore`. Si alguna vez se ve
  tracked por git o aparece en un `git status`/`git diff`, es una señal de alarma: revisar antes
  de commitear nada.
- **Sin CSRF token**: el form no tiene protección CSRF explícita. Es un riesgo bajo para un simple
  formulario de contacto (no hay acción sensible ni sesión autenticada de por medio), pero no es
  "seguro" en sentido estricto — no agregar lógica de mayor privilegio a `contact.php` asumiendo
  que está protegido.
- **Sin rate limiting**: la única defensa antibot es el honeypot (`website`). No hay throttling
  por IP ni captcha — un bot que no rellene campos ocultos puede seguir haciendo POSTs sin límite
  y generar mails reales o carga en el SMTP configurado. Si se vuelve un problema, es el primer
  lugar donde agregar mitigación (rate limit simple con sesión/archivo, o un captcha).
- **Cuerpo del mail en texto plano, sin `isHTML(true)`**: esto es intencional y bueno — evita que
  contenido inyectado en `name`/`message` se interprete como HTML/JS en el cliente de mail del
  destinatario. Si en algún momento se cambia a `isHTML(true)`, hay que sanitizar/escapar
  `$name`/`$message` antes de interpolarlos en el body, porque ahí sí pasarían a ser HTML sin
  escapar.
- **Header injection en `Subject`/`addReplyTo`**: PHPMailer sanea internamente los headers que
  arma (`Subject`, `From`, `Reply-To`), así que interpolar `$name` directo en `Subject` no es en
  sí mismo un vector de inyección de headers conocido — pero si se toca ese código, no reemplazar
  las llamadas de PHPMailer (`addReplyTo`, `$mail->Subject =`) por concatenación manual de
  headers RAW sin pasar por la librería.
- **Validación de tipo/tamaño de archivo**: no aplica — el formulario no tiene campos de upload.
- **`declare(strict_types=1)`** está activo en `contact.php` — mantenerlo si se edita el archivo,
  y tener cuidado con los casteos explícitos (`(string)`, `(int)`) que ya usa el código al leer
  `$config` y `$_POST`, porque con strict types PHP no hace coerción implícita.

## Convenciones al editar

- No hay linter ni formatter configurado — seguir el estilo existente (indentación de 2 espacios
  en JS/CSS, comillas dobles en JS, `var`/funciones clásicas en vez de `const`/arrow functions —
  el código es deliberadamente ES5-friendly, no hay build step que transpile).
- No hay tests. Verificar cambios manualmente en el navegador (ver README para cómo levantar el
  sitio en local, con y sin el formulario de contacto funcional).
- Antes de tocar `phpmailer/`, recordar que es una copia vendorizada a mano (no vía Composer) —
  no asumir que hay un `composer.json`/autoloader para actualizarla; reemplazar los archivos
  fuente directamente si hace falta actualizar de versión.
