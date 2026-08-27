# Próximos pasos

Status: `CURRENT_IMPLEMENTED_TRUTH`

Owner: `docs/truth/NEXT_STEPS.md` (orden del backlog, puertas y bloqueos)

Este documento fija la secuencia de avance de la épica #2. El estado vivo de
una issue se verifica en GitHub antes de trabajar; durante una rama o Draft PR,
el cambio todavía no es verdad de `main`.

## Puerta vigente

| Orden | Issue | Estado documental | Condición para avanzar |
| --- | --- | --- | --- |
| 1 | #3 — Gobierno y documentación | `CURRENT_IN_PROGRESS` | Merge humano, aceptación post-merge y reconciliación de truth |
| 2 | #24 — Harness ejecutable | `BLOCKED` | #3 integrada; es el siguiente bloque obligatorio |
| 3 | #4 — Baseline de producción | `BLOCKED` | #24 integrada y operativa |
| 4 | #26 — Golden SEO y paridad | `BLOCKED` | #4 integrada y baseline bruto disponible |

No debe comenzar implementación de producto Geo-SEO antes de integrar las
issues #3 y #24. La issue #4 no puede adelantarse a #24 ni ejecutarse en
paralelo con ella. Las issues #5, #7, #19 y #20 no pueden avanzar sin integrar
la issue #26.

## Backlog ordenado

### M0 — Gobierno, harness y baseline

1. #3 — Instalar gobierno, `AGENTS.md` y documentación fuente de verdad.
2. #24 — Implementar contratos, gates, CI y auditoría independiente.
3. #4 — Capturar baseline SEO, analítica, rutas, seguridad, performance y
   rollback de producción.
4. #26 — Congelar el Golden SEO Baseline de Río Cuarto y definir el contrato de
   paridad sin cambiar producto.

### M1 — Plataforma Geo-SEO

1. #5 — Definir arquitectura de URLs, contrato de localidades y estados.
2. #6 — Implementar el generador estático reproducible.
3. #7 — Automatizar SEO técnico, sitemaps, canonical, schema e indexación.
4. #8 — Construir hubs y enlaces internos rastreables.
5. #9 — Definir el estándar editorial local y los gates anti-doorway.
6. #10 — Crear el sistema visual territorial y assets optimizados.

### M2 — Piloto de cinco ciudades

1. #13 — Coordinar investigación y aprobación del piloto.
   1. #14 — Córdoba Capital.
   2. #15 — San Francisco, Córdoba.
   3. #16 — Villa María, Córdoba.
   4. #17 — Pilar, Buenos Aires.
   5. #18 — San Miguel de Tucumán.
2. #19 — Integrar el piloto completo en preview `noindex`.
3. #20 — Publicar de forma controlada y registrar Search Console.

### M3 — Medición y Google Ads

1. #11 — Diseñar medición por ciudad y la fuente única de conversiones.
2. #12 — Preparar landings y convención de campañas por ciudad.

### M4 — Escala y mantenimiento

1. #21 — Crear tablero y criterio objetivo de expansión.
2. #22 — Escalar por lotes y gobernar páginas ciudad × servicio.
3. #23 — Reconciliar y evolucionar el SEO multilingüe ya integrado con Geo-SEO.
4. #25 — Operar mantenimiento anti-entropía después de #24 y #20.

## Jerarquía nativa objetivo

La jerarquía administrativa debe reproducir el backlog sin confundir parenthood
con dependencias:

```text
#2
├── #3
├── #24
├── #4
├── #26
├── #5
├── #6
├── #7
├── #8
├── #9
├── #10
├── #13
│   ├── #14
│   ├── #15
│   ├── #16
│   ├── #17
│   └── #18
├── #19
├── #20
├── #11
├── #12
├── #21
├── #22
├── #23
└── #25
```

El orden directo requerido de #2 es
`#3, #24, #4, #26, #5, #6, #7, #8, #9, #10, #13, #19, #20, #11, #12, #21, #22, #23, #25`.
El orden directo de #13 es `#14, #15, #16, #17, #18`. La relación nativa se
crea de forma idempotente: consultar, agregar sólo faltantes, no reemplazar un
parent inesperado y verificar el orden final. No se cierran issues como parte de
esa administración.

## Reglas de progreso

- Cada issue parte de `main` vigente y usa rama, contrato, evidencia y Draft PR
  propios.
- Las dependencias declaradas en la issue mandan aunque el orden visual de la
  jerarquía sea distinto.
- #26 depende de #3, #24 y #4; bloquea #5, #7, #19 y #20. Sus owners de baseline
  y paridad permanecen planificados hasta ejecutar esa issue.
- #14–#18 pueden avanzar en paralelo sólo después de integrar #9 y #10 y
  conservan #13 como parent.
- #19 exige #6, #7, #8, #10, #11 y #14–#18.
- #20 exige #19 y #11; #25 permanece en M4 y exige #24 y #20.
- #23 depende de #26, #7 y #20 y es el único owner de reconciliación/evolución
  multilingüe futura. No autoriza mezclar ni mergear la ref
  `feat/bilingual-site` dentro de otra issue.
- Un estado `BLOCKED`, `PENDING_TO_VALIDATE` o evidencia incompleta nunca se
  interpreta como autorización para saltar una puerta.

## Reconciliación

Después de cada merge, confirmar el estado real de la issue, sus dependencias y
la aceptación post-merge. Actualizar este owner sólo cuando cambie la secuencia
canónica; resultados volátiles, SHAs y URLs de preview permanecen en la issue,
el PR o su manifiesto de evidencia.
