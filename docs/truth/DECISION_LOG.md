# Registro de decisiones

Status: `CURRENT_IMPLEMENTED_TRUTH`

Owner: `docs/truth/DECISION_LOG.md` (decisiones durables de ingeniería y gobierno)

Este registro conserva decisiones que cambian autoridad, ownership, secuencia o
límites del repositorio. No almacena SHAs, previews ni resultados transitorios.
En una rama o Draft PR, una entrada describe la decisión propuesta hasta que el
cambio se integra a `main`.

## D-001 — Fuente de verdad y routers jerárquicos

- Fecha: 2026-08-27.
- Status: `CURRENT_IMPLEMENTED_TRUTH`.
- Contexto: agentes y humanos necesitan el mismo punto de entrada sin depender
  de memoria de chats ni repetir contratos mutables.
- Decisión: la autoridad sigue el orden instrucción humana vigente, issue y
  relaciones nativas, `AGENTS.md` aplicables, `docs/truth/**` y documentación
  restante. El `AGENTS.md` raíz es corto y estable; el archivo más cercano
  complementa y puede endurecer, pero no debilitar, el contrato superior.
- Consecuencia: el estado volátil vive en issues, PRs o manifiestos de evidencia,
  no en routers.

## D-002 — Un owner por tipo de verdad

- Fecha: 2026-08-27.
- Status: `CURRENT_IMPLEMENTED_TRUTH`.
- Contexto: duplicar inventarios y contratos favorece contradicciones.
- Decisión: [INDEX.md](INDEX.md) registra exactamente un owner por tipo de
  verdad. Los índices y documentos de apoyo enlazan al owner en vez de copiar su
  detalle mutable.
- Consecuencia: una nueva categoría requiere decisión explícita, actualización
  del índice y reconciliación de referencias.

## D-003 — Estados honestos y separación de roles

- Fecha: 2026-08-27.
- Status: `CURRENT_IMPLEMENTED_TRUTH`.
- Contexto: commit, CI parcial o Draft PR no prueban aceptación independiente ni
  funcionamiento externo.
- Decisión: los estados documentales y de evidencia se usan literalmente. El
  writer puede terminar en `SELF_VALIDATED_ONLY`; un auditor diferente revisa
  exact HEAD en modo read-only y la aceptación post-merge es un evento separado.
- Consecuencia: `NOT_RUN`, `PARTIAL`, `UNKNOWN`, `AUTH_BLOCKED`,
  `PREVIEW_BLOCKED` y `CAPABILITY_GAP` nunca se convierten en `PASS`.

## D-004 — Hitos administrativos y ubicación de la épica

- Fecha: 2026-08-27.
- Status: `CURRENT_IMPLEMENTED_TRUTH`.
- Contexto: la épica #2 atraviesa M0–M4, pero GitHub permite asociar una issue a
  un solo milestone.
- Decisión: asignar #2 a `M0 — Gobierno, harness y baseline`, donde nace y se
  gobierna la épica. Las issues #3–#26 se asocian al milestone indicado por su
  bloque de trabajo; #25 pertenece a M4 y #26 a M0.
- Consecuencia: el milestone de #2 no significa que su alcance termine en M0;
  la cobertura completa se representa mediante sub-issues y
  [NEXT_STEPS.md](NEXT_STEPS.md).

## D-005 — Jerarquía nativa de la épica

- Fecha: 2026-08-27.
- Status: `CURRENT_IMPLEMENTED_TRUTH`.
- Contexto: las checklists textuales no ofrecen por sí solas parenthood nativo ni
  progreso agregado.
- Decisión: #2 tiene como hijos directos, en este orden,
  `#3, #24, #4, #26, #5, #6, #7, #8, #9, #10, #13, #19, #20, #11, #12, #21, #22, #23, #25`;
  #13 tiene `#14, #15, #16, #17, #18`. #24 debe permanecer inmediatamente entre
  #3 y #4; #26 debe permanecer inmediatamente entre #4 y #5.
- Consecuencia: la administración es idempotente y fail-closed: no reemplaza un
  parent inesperado, no elimina relaciones ajenas y no cierra issues.

## D-006 — Compatibilidad de instrucciones sin segunda autoridad

- Fecha: 2026-08-27.
- Status: `CURRENT_IMPLEMENTED_TRUTH`.
- Contexto: distintas herramientas descubren instrucciones mediante archivos
  diferentes.
- Decisión: adoptar `.github/copilot-instructions.md` como router de
  compatibilidad repository-wide hacia `AGENTS.md` y `docs/truth`. No crear por
  ahora `.github/instructions/**` ni `.github/agents/**`, porque no agregan una
  frontera distinta y duplicarían ownership.
- Consecuencia: se podrán agregar instrucciones path-specific o perfiles sólo
  mediante una necesidad demostrada y sin redefinir contratos canónicos.

## D-007 — Separación entre gobierno documental y harness ejecutable

- Fecha: 2026-08-27.
- Status: `CURRENT_IMPLEMENTED_TRUTH`.
- Contexto: #3 define el mapa estable; implementar automatización aquí mezclaría
  scope y adelantaría decisiones de seguridad de CI.
- Decisión: scripts, schemas ejecutables, fixtures, gates automáticos y workflows
  pertenecen a #24. #3 sólo crea instrucciones, truth docs y plantillas.
- Consecuencia: mencionar un gate no prueba que esté automatizado. Hasta #24, su
  ejecución se reporta manualmente o con estado honesto `NOT_RUN`/
  `CAPABILITY_GAP`.

## D-008 — Producto y sistemas externos fuera de #3

- Fecha: 2026-08-27.
- Status: `CURRENT_IMPLEMENTED_TRUTH`.
- Contexto: gobierno documental no debe alterar SEO, producto o producción.
- Decisión: #3 no modifica HTML, CSS, JavaScript, APIs de producto, Vercel, DNS,
  Search Console, GA4, GTM, Google Ads ni `feat/bilingual-site`.
- Consecuencia: cualquier cambio de esas superficies necesita su issue owner,
  riesgo, evidencia y autorización humana correspondientes.

## D-009 — Golden SEO y paridad como owners separados

- Fecha: 2026-08-27.
- Status: `CURRENT_IMPLEMENTED_TRUTH`.
- Contexto: la decisión humana de #26 exige proteger la configuración ganadora
  de Río Cuarto sin confundir código presente, estado live y causalidad SEO.
- Decisión: reservar [SEO_GOLDEN_BASELINE.md](SEO_GOLDEN_BASELINE.md) para
  evidencia/lineage y [SEO_PARITY_CONTRACT.md](SEO_PARITY_CONTRACT.md) para la
  comparación y los gates. #26 se ubica después de #4 y bloquea #5, #7, #19 y
  #20. #3 sólo crea routing y campos condicionales; #26 define el contrato, #7
  implementa el validador y #24 aporta integración genérica.
- Consecuencia: ningún gate puede declararse `PASS` antes de existir baseline,
  arquetipo y evidencia aplicables. La interfaz bilingüe presente en `main` se
  clasifica con evidencia; no se presupone como señal ganadora ni se reintegra
  otra rama.

## Cómo agregar una decisión

Registrar identificador, fecha, status, contexto, decisión, consecuencias y
decisión reemplazada si aplica. Una decisión superada se conserva con
`HISTORICAL_SUPERSEDED` y enlaza a su sucesora; no se borra historia útil.
