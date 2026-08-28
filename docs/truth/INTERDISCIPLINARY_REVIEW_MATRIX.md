# Matriz de revisión interdisciplinaria

Status: `CURRENT_IN_PROGRESS`

Owner: docs/truth/INTERDISCIPLINARY_REVIEW_MATRIX.md (selección de disciplinas
materiales por changed surface)

## Propósito

Toda issue clasifica sus superficies y convoca sólo las disciplinas materiales,
sin reducir los contratos aplicables. La matriz selecciona perspectivas de
revisión; no crea agentes, scripts, aprobaciones automáticas ni configuración
externa.

Cada disciplina se declara MATERIAL o NOT_APPLICABLE. NOT_APPLICABLE requiere
una justificación ligada al diff y no significa que la disciplina fue olvidada.
Una disciplina puede escalar el riesgo o activar una STOP condition.

## Las doce disciplinas

| ID | Disciplina | Contrato mínimo de revisión | Evidencia esperada |
| --- | --- | --- | --- |
| D01 | Producto, negocio y estrategia comercial | Objetivo, público, propuesta, capacidad real, impacto en consultas y límites | Criterio de éxito, no-scope y decisión humana material |
| D02 | Arquitectura de software e información | Ownership, dependencias, rutas, datos, generación, reversibilidad y deuda | Diagrama/explicación proporcional, contratos preservados y rollback |
| D03 | Frontend, UX responsive y diseño | Navegación, jerarquía, estados, interacción, consistencia y mobile-first | Journey desktop/móvil del HEAD exacto |
| D04 | Accesibilidad | Semántica, teclado, foco, contraste, alt, errores y reduced motion | Casos y herramientas proporcionales, más revisión manual |
| D05 | SEO técnico y SEO local | Intención, title/H1, canonical, indexación, schema, enlaces y anti-doorway | Gates de SEO_CONTRACT y protección de Río Cuarto |
| D06 | Contenido, comunicación y marca | Claridad, veracidad, fuentes, diferenciación local, tono y CTA | Revisión editorial y trazabilidad de afirmaciones |
| D07 | Marketing y CRO | Correspondencia público-mensaje-CTA-landing, embudo y experimento | Hipótesis, métrica, guardrails y ausencia de patrones engañosos |
| D08 | GA4, GTM, atribución y conversiones | Eventos, parámetros, consentimiento, deduplicación, cardinalidad y cero PII | Payload sanitizado y recepción por entorno con estados separados |
| D09 | Google Ads | Landing, ubicación, tracking, conversión primaria/secundaria y gasto | Readiness, aprobación humana y rollback de campaña |
| D10 | Performance y Core Web Vitals | LCP/CLS/INP o proxies, peso, carga, caching y presupuesto | Comparación reproducible por viewport/entorno |
| D11 | Seguridad y privacidad | Trust boundaries, inputs, APIs, headers, secretos, permisos y minimización | Threat review, casos de abuso y scan sanitizado |
| D12 | QA, release, rollback y auditoría independiente | Cobertura, exact-head, estados honestos, publicación y recuperación | Manifest completo, dictamen independiente y aceptación |

Los owners de dominio contienen el detalle normativo. Esta tabla evita duplicar
esas reglas y sólo establece cuándo convocarlas.

## Matriz por changed surface

| Superficie | Disciplinas MATERIAL mínimas | Disciplinas condicionales |
| --- | --- | --- |
| Documentación/routers sin verdad de producto | D02, D06, D11, D12 | D01 y todo dominio cuyo contrato cambie |
| GitHub governance, issue/PR template | D02, D11, D12 | D01, D06 si cambia lenguaje o autoridad |
| Arquitectura, rutas o contrato de datos | D01, D02, D05, D11, D12 | D03, D04, D06, D08, D10 según consumidores |
| Copy o CTA público | D01, D03, D04, D05, D06, D07, D12 | D08, D09, D10, D11 |
| Página/hub de ciudad | D01–D08, D10–D12 | D09 sólo si sirve Ads |
| Navegación, layout o interacción | D02–D07, D10–D12 | D08/D09 si cambia tracking o campaña |
| Canonical, robots, sitemap, schema o redirects | D02, D05, D10, D11, D12 | D01, D03, D06, D08 según alcance |
| Investigación o contenido local | D01, D05, D06, D07, D12 | D03, D04, D09, D10, D11 según publicación |
| Media o sistema visual | D03–D06, D10–D12 | D01, D02, D07 según función |
| Analítica, tags o conversiones | D01–D05, D07, D08, D10–D12 | D06 y D09 según mensaje/campaña |
| Google Ads o landing paga | D01–D12 | Ninguna; todas son materiales |
| API, formulario o input | D01–D04, D07, D08, D10–D12 | D05/D06/D09 según página y campaña |
| Generador u output derivado | D02–D06, D10–D12 | D01, D07–D09 según output |
| Workflow, permisos o supply chain | D02, D10, D11, D12 | Dominios cuyas pruebas ejecute |
| Deploy, DNS o publicación | D01–D05, D08, D10–D12 | D06, D07, D09 según contenido/campaña |
| Mantenimiento anti-entropía read-only | D01–D12 | Ninguna; los hallazgos pueden tocar todas las superficies |

D01–D08 significa cada disciplina desde D01 hasta D08. Una combinación amplia
no obliga a que doce personas distintas participen, pero sí a revisar y
evidenciar cada contrato material. El writer no puede ocupar el rol de auditor
independiente D12 sobre su propio cambio.

## Criterios por disciplina

### D01 — Producto, negocio y estrategia comercial

Confirma que el cambio resuelve la issue, tiene público y resultado definidos,
no promete capacidades inexistentes y no expande ciudad, servicio o campaña.
Autoridad comercial no reemplaza gates técnicos.

### D02 — Arquitectura de software e información

Verifica owner único, dependencias, límites, rutas, fuente frente a output,
compatibilidad y rollback. Detiene duplicación de truth, edición manual de
generados o una nueva arquitectura sin decisión.

### D03 — Frontend, UX responsive y diseño

Evalúa journey, jerarquía, navegación, estados vacíos/error/loading, consistencia
y viewports reales. Mobile es superficie principal, no una reducción final.

### D04 — Accesibilidad

Revisa estructura semántica, navegación por teclado, foco visible y lógico,
nombres accesibles, contraste, alt, zoom y reduced motion. Automatización sola
no obtiene PASS.

### D05 — SEO técnico y SEO local

Aplica [SEO_CONTRACT.md](SEO_CONTRACT.md). Protege la Home/canonical de Río
Cuarto, rastreabilidad, indexación coherente y valor local; detiene doorway,
oficinas ficticias y señales contradictorias.

### D06 — Contenido, comunicación y marca

Aplica
[CONTENT_COMMUNICATION_STANDARD.md](CONTENT_COMMUNICATION_STANDARD.md). Revisa
fuentes, afirmaciones, tono, diferenciación, CTA, derechos y revisión humana.

### D07 — Marketing y CRO

Verifica que propuesta, CTA y siguiente paso formen un embudo honesto y medible.
Todo experimento declara hipótesis, métrica principal, guardrails y criterio de
detención.

### D08 — GA4, GTM, atribución y conversiones

Aplica
[MARKETING_ANALYTICS_CONTRACT.md](MARKETING_ANALYTICS_CONTRACT.md). Separa
código, configuración y recepción; evita PII, cardinalidad libre y doble conteo.

### D09 — Google Ads

Revisa coherencia de ubicación, keyword/mensaje, landing, tracking y conversión.
Activación, presupuesto, puja y gasto requieren aprobación humana explícita.

### D10 — Performance y Core Web Vitals

Evalúa cambios en render, fuentes, scripts, imágenes, terceros, caching y
latencia. Usa comparación equivalente y declara si son datos de laboratorio o
campo; uno no suplanta al otro.

### D11 — Seguridad y privacidad

Aplica [SECURITY_PRIVACY_MODEL.md](SECURITY_PRIVACY_MODEL.md). Revisa límites de
confianza, secretos, PII, permisos, inputs, APIs, enlaces, headers, dependencias,
logs y mutaciones externas.

### D12 — QA, release, rollback y auditoría independiente

Aplica [TESTING_MATRIX.md](TESTING_MATRIX.md),
[QUALITY_GATES.md](QUALITY_GATES.md) y
[RELEASE_ROLLBACK_RUNBOOK.md](RELEASE_ROLLBACK_RUNBOOK.md). Confirma scope,
HEAD exacto, evidencia completa, rollback y separación writer/auditor/humano.

## Declaración en el TASK_CONTRACT

Para cada D01–D12 se registra:

- clasificación MATERIAL o NOT_APPLICABLE;
- changed surface que la activa;
- contrato y criterio de aceptación;
- riesgo y gate seleccionado;
- evidencia esperada;
- reviewer o autoridad requerida;
- limitación/STOP condition.

Una justificación genérica como “no aplica” es insuficiente. Ejemplo válido:
“D09 NOT_APPLICABLE: el diff no crea landing, tracking, conversión, configuración
ni gasto de Ads”.

## Composición y conflictos

- Si una superficie cae en varias filas, se usa la unión de disciplinas.
- Si dos disciplinas discrepan, no se promedia: se documenta el conflicto y se
  detiene la decisión material hasta resolverlo.
- Seguridad, privacidad, accesibilidad, veracidad y protección SEO son
  guardrails, no preferencias intercambiables por velocidad.
- Una disciplina puede declarar BLOCKED aunque las demás estén en PASS.
- Los estados de evidencia conservan la semántica de QUALITY_GATES.

## Auditoría y autoridad humana

El writer realiza self-review interdisciplinario y termina en
SELF_VALIDATED_ONLY. Para riesgo HIGH/CRITICAL, o cuando la issue lo exija, un
auditor distinto revisa read-only el HEAD exacto y emite PASS,
CHANGES_REQUIRED o BLOCKED sin reparar.

La persona responsable decide Ready, merge, deploy, publicación, cambios
externos, secretos y gasto. La cobertura de todas las disciplinas no amplía esa
autoridad.

## Reconciliación

Si una issue cambia qué disciplinas son materiales para una superficie, esta
matriz es el owner a actualizar mediante decisión durable. Los criterios de
dominio se actualizan en su owner específico y se enlazan; no se duplican aquí.
