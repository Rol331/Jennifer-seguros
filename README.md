# Jennifer Villegas · Broker de Seguros — Sitio web

Sitio estático en HTML, CSS y JavaScript puro (sin frameworks ni build). Se puede abrir directamente
haciendo doble clic en `index.html` o subir la carpeta tal cual a cualquier hosting (Vercel, Netlify, cPanel, GitHub Pages).

## Estructura

```
index.html                 Inicio (hero, propuesta de valor, módulo 3 columnas, aseguradoras, CTA)
nosotros.html              Nosotros (quiénes somos, pilares, acompañamiento en siniestros)
seguros.html               Catálogo con fichas técnicas (modales) — se genera desde data.js
contacto.html              Formulario de cotización + canales directos + FAQ
terminos.html              Términos y Condiciones
privacidad.html            Política de Privacidad (Ley 29733)
libro-reclamaciones.html   Libro de Reclamaciones (Indecopi)
assets/css/styles.css      Estilos globales (paleta derivada del logo)
assets/js/data.js          ⚙️ CONFIGURACIÓN: WhatsApp, correo, horarios y catálogo de seguros
assets/js/main.js          Menú, drawer móvil, modales, cotizador, formulario
assets/img/                Logos optimizados y favicon
assets/img/aseguradoras/   (vacío) coloca aquí los logos de las aseguradoras
```

## Qué debes configurar antes de publicar

Todo está en `assets/js/data.js`, bloque `window.SITE`:

| Campo | Qué poner |
|---|---|
| `whatsapp` | Número con código de país, sin `+` ni espacios. Ej. `51964000000` |
| `whatsappDisplay` | Cómo se muestra en pantalla. Ej. `+51 964 000 000` |
| `email` | Correo corporativo |
| `formEndpoint` | (Opcional) URL de Formspree/Getform/backend para enviar el formulario por correo real |

Si `formEndpoint` queda vacío, el formulario abre el cliente de correo del usuario con el mensaje
precargado (`mailto:`) y ofrece reenviarlo por WhatsApp. Con un endpoint configurado se envía por `fetch` POST en JSON.

### Logos de aseguradoras
En `index.html`, sección `#aseguradoras`, reemplaza cada bloque de texto por:
```html
<div class="partner"><img src="assets/img/aseguradoras/rimac.webp" alt="Rímac Seguros"></div>
```

### Mapa
En `contacto.html` sustituye el `div.map-placeholder` por el `<iframe>` de Google Maps.

### Redes sociales
En el footer de cada página, cambia los `href="#"` de Facebook, Instagram, LinkedIn y TikTok.

## Agregar o editar seguros
Edita el arreglo `window.PRODUCTS` en `data.js`. Cada ficha tiene `id`, `cat` (empresas | personales | ingenieria),
`name`, `summary`, `covers` (lista), `who` y opcionalmente `tag` y `required`. Las tarjetas, modales, enlaces
`seguros.html#id` y el selector condicional del formulario se actualizan solos.
El mega menú y las columnas de `index.html` son HTML estático: agrega ahí el enlace si creas un producto nuevo.

## SEO
Cada página tiene `<title>`, `description`, Open Graph y datos estructurados `InsuranceAgency` (schema.org)
con palabras clave locales: broker de seguros en Huancayo, SCTR Huancayo, carta fianza Junín, seguro vehicular, SOAT.
Actualiza el `canonical` (`https://www.jennifervillegas.pe/`) con el dominio definitivo.

## Créditos de fotografías
Fotos de Perú con licencia libre desde Wikimedia Commons, optimizadas a WebP en `assets/img/fotos/`:

| Archivo | Uso | Obra original | Autor | Licencia |
|---|---|---|---|---|
| hero-huancayo.webp | Hero de inicio | Ciudad de Huancayo en 2021 01 | Guillermo Carlos Gómez | CC BY-SA 4.0 |
| contacto-huancayo.webp | Hero de Contacto | Ciudad de Huancayo en 2021 02 | Guillermo Carlos Gómez | CC BY-SA 4.0 |
| nosotros-mantaro.webp | Hero de Nosotros | Valle del Mantaro visto desde Concepción 01 | Guillermo Carlos Gómez | CC BY-SA 4.0 |
| huancayo-catedral.webp | Sección Quiénes somos | Basílica Catedral de Huancayo | PoolPs | CC BY-SA 4.0 |
| seguros-obra.webp, cat-ingenieria.webp | Hero de Seguros y columna Ingeniería | Construcción Edificio Element Surquillo | El Surquillano | CC0 |
| cat-empresas.webp | Columna Empresas | Lima Peru City Skyline San Isidro 2013 | Hector Becerra | CC BY-SA 3.0 |
| cat-personales.webp | Columna Personales | Calle Real cuadra 9 Huancayo | Chalisimo5 | CC BY-SA 4.0 |

Las licencias CC BY-SA exigen mantener esta atribución. Puedes reemplazar cualquier foto por imágenes propias con el mismo nombre de archivo.
