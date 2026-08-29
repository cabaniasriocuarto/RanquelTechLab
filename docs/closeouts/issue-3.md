# Closeout de la issue #3 — scaffold de gobierno

Status: `CURRENT_IMPLEMENTED_TRUTH`

Tipo: registro de closeout y evidencia durable; no crea un nuevo truth owner.

Issue: #3

## Alcance integrado

La issue #3 entrega el scaffold documental y administrativo de
`RANQUEL_ENGINEERING_HARNESS_V1` que ya existe en `main` a partir del merge del
PR #27:

- jerarquía `AGENTS.md` y routers para repositorio, documentación, GitHub, APIs
  y medios;
- `docs/START_HERE.md` y registro de owners `docs/truth/INDEX.md`;
- owners documentales iniciales para arquitectura, SEO, contenido, marketing,
  analítica, seguridad, testing, release y backlog;
- plantillas iniciales de task contract, evidencia y auditoría independiente;
- milestones, labels, Issue Forms, PR template y jerarquía administrativa;
- referencias no autocerrantes `Refs #N` y separación entre writer, auditor,
  gate humano y closeout;
- separación de scopes: #28 gobierna la topología Vercel y #24 gobierna el
  harness ejecutable.

La existencia de estos archivos y recursos administrativos es
`CURRENT_IMPLEMENTED_TRUTH`. No implica que todos sus controles estén
automatizados ni que cada contrato de enforcement haya sido probado por código.

## Capacidades transferidas a #24

Permanecen `PLANNED_NOT_IMPLEMENTED` y son responsabilidad de la issue #24:

- scripts y schemas ejecutables del harness;
- CI exact-head de mínimo privilegio;
- validación automática de task contracts, scope, secretos y estados;
- ejecución reproducible de fixtures positivos y negativos;
- verificación automática de candidato inicial frente a reparación;
- secuencia de preview visual exact-head para cambios de HTML público;
- comprobación automatizada de identidad de HEAD, actor/mecanismo de merge,
  cronología y SHA integrado;
- closeout validator y enforcement de post-merge acceptance/reconciliación;
- hardening derivado de los findings preservados en el PR #29.

Documentar una capacidad no equivale a implementarla. Hasta que #24 la entregue,
se informa `NOT_RUN`, `CAPABILITY_GAP`, `BLOCKED` o el estado honesto aplicable;
nunca se fabrica un `PASS`.

## Excepción bootstrap

```text
BOOTSTRAP_EXCEPTION_ID=RANQUEL-HARNESS-BOOTSTRAP-001
APPLIES_TO=ISSUE_3_AND_ITS_SEQUENTIAL_CLOSEOUT_ONLY
HARNESS_CI_EXACT_HEAD=CAPABILITY_GAP
VERCEL_CHECKS=OBSERVED_NOT_HARNESS_CI
INDEPENDENT_VALIDATION_GRANTED=NO_BY_EXCEPTION
READY_AND_MERGE_OWNER=HUMAN
EXPIRES_WHEN=ISSUE_24_MERGED
```

La excepción reconoce que #3 crea el gobierno previo al CI que implementará
#24. No transforma la ausencia de CI en `PASS`, no convierte estados de Vercel
en CI del harness y no autoriza merge, publicación, configuración externa ni
cierre automático.

## Disposición del PR #29

El PR #29 fue cerrado sin merge. Su rama, commits, reviews, threads y evidencia
se conservan como corpus histórico para #24.

```text
PR_29_DISPOSITION=CLOSED_UNMERGED
PR_29_BRANCH=RETAINED
PR_29_CONTENT_IN_MAIN=NO
PR_29_ROLE=HISTORICAL_INPUT_FOR_ISSUE_24
```

Ninguna regla nueva exclusiva de PR #29 se presenta como verdad implementada en
`main`.

## Sistemas no modificados por este closeout

- producto público, HTML, CSS, JavaScript y APIs;
- Vercel, proyectos, deployments, dominios y variables;
- DNS, Search Console, GA4, GTM y Google Ads;
- páginas, contenidos o imágenes de ciudades;
- implementación de #28, #24, #30 o #31.

## Gates de cierre

Este documento no cierra #3 por sí solo. La secuencia restante es:

```text
DRAFT_PR_REVIEW
→ HUMAN_READY
→ HUMAN_MERGE
→ POST_MERGE_ACCEPTANCE
→ EXPLICIT_ISSUE_3_CLOSE
→ ISSUE_28
```

La issue #3 permanece abierta hasta completar revisión y aceptación del PR de
closeout. #28 y #24 no se ejecutan dentro de este vehículo.
