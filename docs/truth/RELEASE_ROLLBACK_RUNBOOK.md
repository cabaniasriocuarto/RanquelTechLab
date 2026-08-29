# Runbook de release y rollback

Status: `CURRENT_IMPLEMENTED_TRUTH`

Owner: `docs/truth/RELEASE_ROLLBACK_RUNBOOK.md` (preparación, publicación y recuperación)

Operational exercise: `PENDING_TO_VALIDATE`

External verification: `UNVERIFIED`

Este documento define el contrato operativo. Issue #3 no ejecutó ni verificó un
deploy o rollback, no cambió Vercel y no probó recuperación de producción. Cada
release futuro debe reemplazar `PENDING_TO_VALIDATE` por evidencia de su propia
issue; la existencia de este runbook no es evidencia operacional.

## Autoridad y alcance

- El humano autoriza merge, deploy, publicación, indexación, configuración
  externa y rollback.
- El writer prepara comandos, criterios y evidencia dentro del contrato; no
  publica por inferencia.
- Vercel, DNS, Search Console, GA4, GTM y Google Ads son sistemas separados. Una
  autorización sobre uno no habilita los demás.
- No se usa force-push, reset destructivo ni bypass de protecciones como método
  de rollback.

## Clasificar el release

| Tipo | Ejemplos | Evidencia mínima |
| --- | --- | --- |
| Documental no renderizado | `AGENTS.md`, `docs/**`, templates | Markdown, links, anchors, owners, scope y secretos |
| Producto público | HTML, CSS, JS, rutas, navegación, assets | Preview exact-head desktop/móvil, focal/regresión, accesibilidad y performance aplicables |
| SEO/indexación | canonical, robots, sitemap, schema, redirects | Gates SEO, crawl/rutas, preview y plan de observación postdeploy |
| API/seguridad | Functions, headers, inputs, privacidad | Tests de contrato y abuso, secretos, logs sanitizados y rollback probado en entorno autorizado |
| Analítica/Ads | eventos, tags, conversiones, campañas | Deduplicación, cero PII, separación orgánico/pago y aprobación humana |
| Configuración externa | Vercel, DNS, Search Console o Google | Issue y autorización específicas, snapshot previo y evidencia del operador |

Un release que toca varias filas adopta el riesgo y los gates acumulados.

## Plan obligatorio antes del merge

Registrar en el PR y manifiesto:

1. issue, riesgo, exact HEAD y commit/base conocidos;
2. superficies y entornos afectados;
3. estado anterior verificable y señales que no deben degradarse;
4. artefacto o mecanismo de publicación, sin exponer credenciales;
5. pasos de smoke test y aceptación;
6. observabilidad disponible y limitaciones;
7. triggers de rollback;
8. último estado conocido al que se podría volver;
9. responsable humano y ventana autorizada;
10. cambios de truth requeridos después.

Si no existe un estado anterior identificable o una ruta de recuperación
plausible, el release queda `BLOCKED`.

## Checklist de release

### Antes de publicar

- [ ] TASK_CONTRACT vigente y scope staged exacto.
- [ ] Gates focales y de superficie con estados honestos.
- [ ] Preview/CI corresponden al exact HEAD cuando aplican.
- [ ] Auditoría independiente requerida completada o bloqueo registrado.
- [ ] Home y canonical `/` de Río Cuarto incluidos en la regresión cuando hay
      impacto web/SEO.
- [ ] Secretos, PII, logs y parámetros revisados.
- [ ] Plan de rollback específico revisado por humano.
- [ ] No hay autorización implícita para DNS, Analytics, Ads o indexación.

### Publicación

1. Confirmar nuevamente SHA, destino y autorización humana.
2. Ejecutar sólo el mecanismo aprobado; registrar operador, hora y resultado.
3. No continuar con mutaciones laterales si el resultado es ambiguo.
4. Conservar logs sanitizados y referencias estables en el manifiesto.

### Aceptación postdeploy

- comprobar respuesta y contenido de rutas afectadas;
- revisar navegación crítica en desktop y móvil;
- verificar canonical, robots, sitemap y schema cuando sean superficies
  cambiadas;
- comprobar formularios/APIs y ausencia de PII cuando apliquen;
- verificar eventos sin doble conteo cuando cambie analítica;
- comparar las señales protegidas con el baseline de la issue;
- registrar `POST_MERGE_ACCEPTED` sólo con evidencia del entorno correcto.

Una propagación pendiente, credencial ausente o preview inaccesible se informa
como `PARTIAL`, `AUTH_BLOCKED` o `PREVIEW_BLOCKED`, no como `PASS`.

## Triggers de rollback

Evaluar rollback o detención ante:

- errores 4xx/5xx nuevos o rutas críticas inaccesibles;
- pérdida de navegación, CTA, formularios o funciones esenciales;
- canonical, redirect, robots, sitemap o schema incorrectos;
- regresión material de la Home/canonical de Río Cuarto;
- exposición de secretos o PII, degradación de headers o abuso de API;
- doble conteo o pérdida de conversiones por el cambio;
- assets rotos, inaccesibilidad severa o degradación de performance acordada;
- diferencia entre el SHA autorizado y el publicado;
- evidencia contradictoria que impida conocer el estado real.

Incidentes de seguridad o privacidad priorizan contención y escalamiento humano;
no se espera una validación completa para detener daño adicional.

## Estrategias de recuperación

Elegir y documentar una estrategia específica antes de publicar:

1. **Revert mediante PR:** crear un cambio explícito que revierta el commit,
   ejecutar gates y merge humano. Es la opción normal para truth y código.
2. **Restaurar artefacto conocido:** volver al último artefacto verificado sólo
   mediante el mecanismo y operador autorizados.
3. **Desactivar de forma reversible:** usar una capacidad ya diseñada y
   autorizada; no improvisar flags o redirects en producción.
4. **Revertir configuración externa:** aplicar el snapshot previo en el sistema
   correspondiente con autorización separada.

Después de recuperar, repetir smoke tests, registrar impacto y abrir una issue de
causa/remediación. El rollback no borra historia, no cierra automáticamente la
issue original y no convierte evidencia faltante en éxito.

## Release documental de #3

Para #3, HTML/CSS/JS/APIs y sistemas de producción son `NOT_APPLICABLE` porque no
cambian. Las validaciones documentales sí son obligatorias. Deploy, preview de
producto y rollback real permanecen `NOT_RUN`; esta clasificación no afirma que
hayan sido probados.
