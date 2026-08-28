# Mapa de rutas, páginas e indexabilidad

Status: `CURRENT_IN_PROGRESS`

Owner: `docs/truth/ROUTE_AND_PAGE_MAP.md` (rutas, páginas e indexabilidad)

## Alcance y canonical

El dominio canónico declarado en las páginas indexables y el sitemap es
`https://www.ranquel.com.ar`. Esto es `CURRENT_IMPLEMENTED_TRUTH` en archivos;
DNS, respuestas live, redirects de plataforma e indexación tienen `External
verification: UNKNOWN`. `UNKNOWN` en este archivo es esa dimensión separada, no
un `Status` documental.

La Home canónica `/` representa a Ranquel Tech Lab en Río Cuarto. Debe
preservarse salvo una issue explícita que autorice cambiar ese contrato.

## Páginas indexables

| Ruta pública | Fuente | Rol | Canonical declarado | Robots | Datos estructurados |
| --- | --- | --- | --- | --- | --- |
| `/` | [index.html](../../index.html) | Home, propuesta general y vista de reservas. | `/` | `index, follow` | `LocalBusiness` y `WebSite`. |
| `/soluciones/` | [soluciones/index.html](../../soluciones/index.html) | Inventario de soluciones. | `/soluciones/` | `index, follow` | `WebPage` y breadcrumbs. |
| `/sectores/` | [sectores/index.html](../../sectores/index.html) | Ideas por sector. | `/sectores/` | `index, follow` | `CollectionPage` y breadcrumbs. |
| `/metodo/` | [metodo/index.html](../../metodo/index.html) | Método de trabajo. | `/metodo/` | `index, follow` | `WebPage`, `HowTo` y breadcrumbs. |
| `/marketing/` | [marketing/index.html](../../marketing/index.html) | Servicio de marketing digital. | `/marketing/` | `index, follow` | `WebPage`, `Service` y breadcrumbs. |
| `/contacto/` | [contacto/index.html](../../contacto/index.html) | Canales y ubicación de contacto. | `/contacto/` | `index, follow` | `ContactPage` y breadcrumbs. |
| `/contacto/whatsapp/` | [contacto/whatsapp/index.html](../../contacto/whatsapp/index.html) | Destino específico de WhatsApp. | `/contacto/whatsapp/` | `index, follow` | `ContactPage` y breadcrumbs. |

Todas parten de HTML español. El selector inglés modifica la interfaz en la
misma URL; no crea una variante canónica adicional.

## Páginas auxiliares no indexables

| Ruta pública | Fuente | Uso | Robots | Canonical observado |
| --- | --- | --- | --- | --- |
| `/videollamada.html` | [videollamada.html](../../videollamada.html) | Entrada dedicada para access code y iframe Daily. | `noindex, follow` | Ninguno. |
| `/gracias-presupuesto/` | [gracias-presupuesto/index.html](../../gracias-presupuesto/index.html) | Confirmación y eventos de presupuesto. | `noindex, follow` | Ninguno. |
| `/gracias-whatsapp/` | [gracias-whatsapp/index.html](../../gracias-whatsapp/index.html) | Confirmación y eventos de WhatsApp. | `noindex, follow` | Ninguno. |
| `/gracias-videollamada.html` | [gracias-videollamada.html](../../gracias-videollamada.html) | Confirmación y eventos de agenda. | `noindex, follow` | Ninguno. |

Las páginas de gracias no demuestran por sí solas una conversión real. Su
instrumentación se gobierna en
[MARKETING_ANALYTICS_CONTRACT.md](MARKETING_ANALYTICS_CONTRACT.md).

## Vista con query en Home

`/?view=reservas` no es una página separada. [script.js](../../script.js)
oculta la vista principal y muestra `#vistaReservas` dentro del mismo documento.
El canonical sigue siendo `/`.

Puede aparecer `access` como query de la vista de reservas. Ese parámetro es
sensible y su tratamiento pertenece a
[SECURITY_PRIVACY_MODEL.md](SECURITY_PRIVACY_MODEL.md). No debe copiarse a
evidencia, analytics, documentación ni logs sin redacción.

## Redirects de plataforma versionados

[vercel.json](../../vercel.json) declara redirects permanentes:

| Entrada | Condición | Destino |
| --- | --- | --- |
| `/` | query `view=opciones` | `/sectores/` |
| `/Favicon.ico` | sin condición adicional | `/favicon.ico` |
| `/index.html` | sin condición adicional | `/` |

La presencia de estas reglas en Git no confirma que un deploy live las esté
aplicando. Sólo puede registrarse `External verification: VERIFIED` con evidencia
exacta y autorizada del entorno.

## Compatibilidad client-side

[script.js](../../script.js) mantiene compatibilidad para hashes heredados de
Home cuando no existe query `view`:

| Hash antiguo | Destino actual |
| --- | --- |
| `/#metodo` | `/metodo/` |
| `/#contact` | `/contacto/` |

[site-runtime.js](../../site-runtime.js) también limpia `view=opciones` cuando
ya se está en `/sectores/`. Estos comportamientos dependen de JavaScript; no
sustituyen redirects server-side para crawlers o clientes sin JS.

## Endpoints y artefactos no HTML

| Ruta/archivo | Fuente | Contrato implementado | Indexabilidad |
| --- | --- | --- | --- |
| `POST /api/contact` | [api/contact.js](../../api/contact.js) | JSON same-origin para entrega de lead. | No es página. |
| `POST /api/access/create` | [api/access/create.js](../../api/access/create.js) | JSON administrativo para room y accesos. | No es página. |
| `/api/daily/token?access=...` | [api/daily/token.js](../../api/daily/token.js) | Verifica acceso y devuelve token/URL Daily. No restringe método explícitamente en código. | No es página. |
| `/sitemap.xml` | [sitemap.xml](../../sitemap.xml) | Lista las siete páginas indexables. | Descubrimiento SEO. |
| `/robots.txt` | [robots.txt](../../robots.txt) | Permite crawling general y referencia el sitemap. | Control de crawler, no garantía de indexación. |
| `/BingSiteAuth.xml` | [BingSiteAuth.xml](../../BingSiteAuth.xml) | Artefacto de verificación. | Estado externo de verificación `UNKNOWN`. |
| `/images/**` | [images](../../images) | Assets estáticos con caché immutable configurada. | No son páginas. |
| `/media/**` | [media](../../media) | Assets estáticos con caché immutable configurada. | No son páginas. |

## Sitemap y robots

[sitemap.xml](../../sitemap.xml) contiene exactamente las siete rutas de la
tabla indexable. Excluye las páginas de gracias, videollamada y queries de Home.
[robots.txt](../../robots.txt) permite el crawling general y apunta al sitemap
canónico.

La metadata `index, follow`, un canonical y una entrada en sitemap expresan
intención técnica. La indexación efectiva por Google, Bing u otro motor es
`UNKNOWN` sin una lectura externa autorizada.

## Idioma y URLs

- No existen rutas `/en`, subdominio inglés ni parámetros de idioma canónicos.
- No existen enlaces `hreflang` observados.
- La preferencia se comparte por `localStorage`, no por URL.
- En inglés se conserva el mismo canonical español.

Por lo tanto, crear una nueva URL inglesa, canonical o `hreflang` sería un cambio
de arquitectura SEO `PLANNED_NOT_IMPLEMENTED`, no una corrección documental.

## Rutas de ciudades

No hay páginas ni output para ciudades adicionales. Tampoco existe todavía un
directorio generado `argentina/**`. El plan se descubre en
[docs/geo-seo/README.md](../geo-seo/README.md), pero toda ruta de ciudad es
`PLANNED_NOT_IMPLEMENTED` hasta que su issue implemente, valide y publique el
artefacto correspondiente.

No se debe inferir una página local a partir de una mención de ciudad, un
`areaServed`, una keyword o una futura entrada de manifest.

## Contratos para cambios de rutas

Todo cambio debe:

1. preservar `/` y Home de Río Cuarto salvo autorización explícita;
2. declarar ruta, fuente, canonical, robots, sitemap y breadcrumbs afectados;
3. conservar o migrar deep links mediante redirects definidos;
4. evitar cadenas, loops, canonicals cruzados y duplicados con/sin slash;
5. validar navegación interna y assets relativos;
6. mantener páginas de conversión y videollamada fuera del índice salvo decisión
   SEO explícita;
7. reconciliar SEO, seguridad, analytics y rollback;
8. verificar el preview exact-head en desktop y mobile cuando haya HTML público.

No hay una página 404 personalizada ni una política de rutas dinámicas
implementada. Su diseño futuro debe registrarse como `PLANNED_NOT_IMPLEMENTED`.
