# Geo-SEO: frontera de planeamiento

Status: `PLANNED_NOT_IMPLEMENTED`

Owner: `docs/geo-seo/README.md` (descubrimiento del programa Geo-SEO; no duplica contratos)

La expansión Geo-SEO pertenece a la épica #2. Este directorio sólo orienta
hacia owners e issues; issue #3 no crea páginas de ciudades, generador, datos de
localidades, navegación, SEO público ni medición.

## Estado actual

- El producto inspeccionado continúa como sitio HTML/CSS/JavaScript estático con
  páginas independientes, runtime compartido y APIs serverless.
- No existe bajo #3 una plataforma `/argentina/`, un generador Geo-SEO ni un
  contrato implementado de localidades.
- Río Cuarto conserva la Home y canonical `/`; no se crea una URL duplicada.
- Borradores, publicación, retiro y otros estados de una localidad serán
  definidos por #5; este README no los anticipa como implementación.
- La base de `main` ya contiene una interfaz ES/EN client-side. La ref
  `feat/bilingual-site` no se mezcla ni se mergea; #23 gobierna cualquier cambio
  futuro de compatibilidad multilingüe y SEO.

Para inventario implementado consultar
[ARCHITECTURE.md](../truth/ARCHITECTURE.md),
[FEATURE_MAP.md](../truth/FEATURE_MAP.md) y
[ROUTE_AND_PAGE_MAP.md](../truth/ROUTE_AND_PAGE_MAP.md).

## Secuencia de ownership

| Issue | Responsabilidad futura |
| --- | --- |
| #3 | Gobierno documental y administrativo |
| #24 | Harness ejecutable, gates y CI; obligatorio antes de #4 |
| #4 | Baseline verificable de producción y rollback |
| #26 | Golden SEO Baseline, arquetipos y contrato de paridad; bloquea #5/#7/#19/#20 |
| #5 | URLs, modelo de localidad y estados de publicación |
| #6 | Generador estático reproducible y `argentina/AGENTS.md` |
| #7 | Canonical, schema, sitemap, robots e indexación |
| #8 | Hubs y arquitectura de enlaces internos |
| #9 | Estándar editorial local y gates anti-doorway |
| #10 | Sistema visual territorial, derechos y performance de assets |
| #11 | Eventos, dimensiones, atribución y deduplicación |
| #12 | Convención de landings y campañas pagas |
| #13–#18 | Investigación y aprobación humana de cinco ciudades |
| #19 | Integración del piloto en preview `noindex` |
| #20 | Publicación controlada y Search Console |
| #21–#22 | Medición de resultados y expansión por lotes |
| #23 | Reconciliación y evolución del SEO multilingüe ya integrado |
| #25 | Mantenimiento anti-entropía en M4 |

El orden vigente y los bloqueos son propiedad de
[NEXT_STEPS.md](../truth/NEXT_STEPS.md).

## Contratos que toda implementación futura preserva

- No publicar una ciudad cambiando sólo nombre y foto.
- No inventar oficina, dirección, equipo, clientes, testimonios, cifras ni
  experiencia local.
- Cada URL indexable debe aportar valor propio, responder correctamente, ser
  canónica y estar enlazada mediante HTML rastreable.
- Un borrador no se trata como publicado ni se incorpora automáticamente a
  sitemap o navegación pública.
- No crear matrices ciudad × servicio sin decisión y evidencia.
- Variantes de Ads no compiten orgánicamente con la URL canónica.
- Una acción no se cuenta dos veces como conversión.
- Mobile es una superficie principal; accesibilidad, performance, seguridad y
  privacidad se revisan por changed surface.
- No editar output generado manualmente: se corrige fuente, plantilla o
  generador.

Los detalles canónicos pertenecen a
[SEO_CONTRACT.md](../truth/SEO_CONTRACT.md),
[SEO_GOLDEN_BASELINE.md](../truth/SEO_GOLDEN_BASELINE.md),
[SEO_PARITY_CONTRACT.md](../truth/SEO_PARITY_CONTRACT.md),
[CONTENT_COMMUNICATION_STANDARD.md](../truth/CONTENT_COMMUNICATION_STANDARD.md),
[MARKETING_ANALYTICS_CONTRACT.md](../truth/MARKETING_ANALYTICS_CONTRACT.md) y
[SECURITY_PRIVACY_MODEL.md](../truth/SECURITY_PRIVACY_MODEL.md).

## Puerta de entrada para una futura ciudad

Antes de implementar, la issue debe declarar fuentes, intención, público,
contenido propio, imagen y licencia, URL propuesta, medición, CTA, revisión
humana y gates de publicación. Debe partir de `main` vigente, usar su propio
TASK_CONTRACT y respetar las dependencias de [NEXT_STEPS.md](../truth/NEXT_STEPS.md).

Ninguna lectura de este README autoriza deploy, indexación, cambios en Vercel,
DNS, Search Console, Analytics o Ads.
