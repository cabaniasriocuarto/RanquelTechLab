# Fuente de verdad, estados documentales y evidencia

Status: `CURRENT_IMPLEMENTED_TRUTH`

Owner: `docs/truth/SOURCE_OF_TRUTH.md` (autoridad y semántica de estados)

## Propósito

Este documento define cómo interpretar una afirmación sobre el repositorio y
qué nombres pueden usarse para describir su estado. No certifica por sí mismo
ningún deploy, cuenta, integración, campaña ni comportamiento en producción.

El registro de owners está en [INDEX.md](INDEX.md). Cada tipo de verdad mutable
tiene un único owner; el resto de los documentos debe enlazarlo en lugar de
crear una segunda definición.

## Dos preguntas diferentes

Toda afirmación debe responder, por separado:

1. **¿Qué existe o rige en el repositorio?** Se demuestra inspeccionando Git,
   archivos, configuración y documentación canónica.
2. **¿Qué está operativo fuera del repositorio?** Se demuestra con una
   observación autorizada del sistema externo, identificando objetivo, fecha y
   evidencia. Un ID, URL, nombre de variable o snippet no alcanza.

Una implementación puede existir en `main` con `Status:
CURRENT_IMPLEMENTED_TRUTH` y, al mismo tiempo, tener `External verification:
UNKNOWN`. Son dimensiones distintas y esa combinación debe conservarse
literalmente.

## Frontera del Golden SEO

La decisión humana registrada en #2/#3 incorpora #26 después de #4 y antes de
la issue #5. #26 también bloquea #7, #19 y #20. Sus owners reservados son
[SEO_GOLDEN_BASELINE.md](SEO_GOLDEN_BASELINE.md) y
[SEO_PARITY_CONTRACT.md](SEO_PARITY_CONTRACT.md).

El baseline dorado, sus umbrales y el gate de paridad permanecen
`PLANNED_NOT_IMPLEMENTED`; la evidencia de producción y rendimiento está
`PENDING_TO_VALIDATE` con `External verification: UNKNOWN`. La interfaz ES/EN
client-side presente en `main` es un hecho implementado en el repositorio, pero
su despliegue, rendimiento y valor como señal SEO deben ser clasificados por
la issue #26. Ningún template, tag o posición manual permite anticipar `PASS`.

## Autoridad normativa

Cuando dos instrucciones normativas entran en conflicto, se aplica este orden:

1. instrucción humana actual y explícita;
2. issue dueña actual, su parent nativo, sub-issues y dependencias declaradas en
   GitHub;
3. `AGENTS.md` aplicables, desde el router raíz hasta el más específico;
4. owner canónico registrado en [INDEX.md](INDEX.md);
5. restante documentación del repositorio;
6. contexto histórico, comentarios y ejemplos no canónicos.

La memoria de chats anteriores no es una fuente de verdad. Una instrucción de
mayor autoridad puede autorizar un cambio futuro, pero no convierte ese cambio
en implementación actual: el delta sigue siendo `PLANNED_NOT_IMPLEMENTED` hasta
que el código correspondiente forme parte de la base que se está describiendo.

## Autoridad empírica

Para hechos de implementación, la evidencia primaria es el objeto Git y el
archivo real inspeccionado desde la base declarada. Se deben registrar en el
issue o PR, no en routers estables, al menos:

- repositorio y remote esperado;
- `BASE_SHA`, `HEAD` y rama;
- relación con `origin/main`;
- worktree y operaciones Git activas;
- comando o método de inspección.

El worktree demuestra el estado de trabajo; no demuestra que el contenido haya
sido commiteado, pusheado, desplegado o aceptado. Un Draft PR tampoco reemplaza
la verdad vigente de `main`.

## Estados documentales permitidos

Los siguientes son los únicos estados documentales canónicos. Deben escribirse
exactamente como aparecen aquí.

| Estado | Significado | Evidencia mínima |
| --- | --- | --- |
| `CURRENT_IMPLEMENTED_TRUTH` | Contrato vigente o hecho presente en la base del repositorio inspeccionada. Para comportamiento de producto exige una ruta de implementación; para gobernanza exige un owner vigente. No implica estado live. | Archivo o configuración inspeccionada y owner identificable. |
| `CURRENT_IN_PROGRESS` | Trabajo autorizado que existe sólo en la rama/worktree/PR actual y todavía no forma parte de la verdad vigente de `main`. | Issue, branch, HEAD y alcance actual. |
| `PLANNED_NOT_IMPLEMENTED` | Diseño, requisito o trabajo aceptado que aún no está implementado en la base descrita. | Owner o issue que autoriza el plan y límite respecto de lo actual. |
| `HISTORICAL_SUPERSEDED` | Material retenido por contexto que ya no gobierna el comportamiento ni el proceso actual. | Sucesor canónico enlazado y alcance histórico explícito. |
| `BLOCKED` | Trabajo o decisión autorizados que no pueden continuar hasta resolver una dependencia o condición explícita. No es cierre exitoso. | Bloqueante, owner, evidencia e intervención necesaria. |
| `NO_GO` | Prohibición activa de avanzar por seguridad, privacidad, autoridad, scope o contrato roto. Sólo la autoridad competente puede levantarla. | Motivo, superficie afectada y autoridad requerida. |
| `PENDING_TO_VALIDATE` | Afirmación esperada o necesaria para la que todavía falta una validación requerida. No cuenta como éxito. | Validación faltante y condición necesaria para resolverla. |

### Reglas de uso de estados documentales

- Cada documento canónico lleva `Status` y `Owner` explícitos.
- Un owner puede inventariar filas con estados diferentes aunque su propio
  estado sea `CURRENT_IMPLEMENTED_TRUTH`.
- `CURRENT_IN_PROGRESS` nunca se presenta como verdad de `main`, merge, deploy o
  aceptación.
- `CURRENT_IMPLEMENTED_TRUTH` nunca se promueve automáticamente a verificación
  externa `VERIFIED`.
- `PENDING_TO_VALIDATE`, `PLANNED_NOT_IMPLEMENTED` y `BLOCKED` no se expresan
  como activo, funcionando, seguro, publicado ni completo. `NO_GO` prohíbe
  continuar dentro de su alcance.
- Una contradicción se conserva como contradicción; no se elige silenciosamente
  la variante más conveniente. Se usa `PENDING_TO_VALIDATE` cuando falta una
  comprobación, `BLOCKED` cuando impide avanzar y `NO_GO` cuando avanzar violaría
  un contrato o autorización.
- Los claims visibles en HTML son hechos de contenido implementado, no prueba de
  que el claim sea verdadero fuera del repositorio.

## Dimensión separada de verificación externa

`External verification` no es un estado documental. Se registra por afirmación
o sistema con uno de estos valores:

| Valor | Significado |
| --- | --- |
| `VERIFIED` | Una lectura externa autorizada observó el objetivo exacto en un momento explícito y dejó evidencia redactada. |
| `UNVERIFIED` | Existe una integración o claim identificable, pero no se ejecutó la verificación externa requerida. |
| `UNKNOWN` | Las fuentes permitidas no alcanzan para saber la condición externa. No presupone ausencia ni falla. |
| `NOT_APPLICABLE` | La afirmación es enteramente local y no depende de una condición externa. Exige justificación. |

`VERIFIED` es temporal y no modifica por sí solo el `Status` documental. Un
snippet, ID público, URL, nombre de variable o claim comercial sólo justifica
`UNVERIFIED` o `UNKNOWN`.

## Resultados de validación permitidos

Cada comando, inspección o gate del manifiesto de evidencia recibe uno de estos
resultados:

| Resultado | Significado |
| --- | --- |
| `PASS` | El check se ejecutó sobre el objetivo declarado, terminó satisfactoriamente y existe resultado observable. |
| `FAIL` | El check se ejecutó y encontró una desviación o terminó con error. |
| `BLOCKED` | El check no puede continuar por una condición o dependencia declarada. Cuando corresponda debe preferirse el subtipo específico siguiente. |
| `PARTIAL` | Sólo se ejecutó una parte del alcance requerido o el resultado no cubre todas las variantes. |
| `NOT_RUN` | No se ejecutó. |
| `UNKNOWN` | Se ejecutó una observación insuficiente para determinar el resultado o no puede conocerse con las fuentes permitidas. |
| `AUTH_BLOCKED` | La validación requería autorización o credenciales no disponibles; no se intentó evadir el control. |
| `PREVIEW_BLOCKED` | La validación requería un preview exact-head que no estuvo disponible o no correspondía al HEAD auditado. |
| `CAPABILITY_GAP` | La sesión carece de una capacidad necesaria y no existe alternativa equivalente autorizada. |
| `NOT_APPLICABLE` | La matriz no selecciona el gate para esa superficie; exige una justificación concreta. No puede usarse para omitir un gate requerido. |

`BLOCKED`, `PARTIAL`, `NOT_RUN`, `UNKNOWN`, `AUTH_BLOCKED`, `PREVIEW_BLOCKED`,
`CAPABILITY_GAP` y `NOT_APPLICABLE` nunca significan `PASS`. No existe
`PASS_WITH_WARNINGS`: si no se satisfizo el criterio, se registra el estado
honesto y el riesgo remanente.

## Madurez del conjunto de evidencia

La madurez describe quién revisó qué objetivo. No reemplaza los resultados por
check.

| Estado de evidencia | Criterio |
| --- | --- |
| `SELF_VALIDATED_ONLY` | La sesión autora ejecutó y registró sus validaciones sobre el HEAD indicado. Es el máximo estado que puede autoasignarse. |
| `INDEPENDENTLY_VALIDATED` | Otra sesión o agente revisó read-only el mismo HEAD, no reparó hallazgos y registró todos los checks requeridos sin `FAIL` o `BLOCKED` abierto. |
| `POST_MERGE_ACCEPTED` | Se verificó el commit efectivamente integrado y, cuando aplica, el objetivo publicado correspondiente. Es posterior al merge. |

Un cambio con evidencia `SELF_VALIDATED_ONLY` no está independientemente
auditado. `INDEPENDENTLY_VALIDATED` no significa merge ni deploy. Un finding de
auditoría se registra `FAIL`/`BLOCKED` y no permite usar
`INDEPENDENTLY_VALIDATED`.
`POST_MERGE_ACCEPTED` sólo puede declararse después de identificar el commit y
el objetivo realmente aceptados.

## Verificación externa y caducidad

Una condición externa sólo puede usar `External verification: VERIFIED` si la
lectura estaba autorizada y la evidencia contiene:

- sistema y recurso exactos;
- entorno o dominio observado;
- instante con zona horaria;
- commit/HEAD relacionado cuando corresponda;
- observación y limitaciones;
- redacción de secretos, tokens, PII y URLs privadas.

La dimensión externa vuelve a `UNVERIFIED` o `UNKNOWN` cuando cambie la
configuración que la sustenta, expire su ventana de validez o no pueda vincularse
con el HEAD relevante. Si esa verificación es requisito del documento o cambio,
su `Status` queda `PENDING_TO_VALIDATE` o `BLOCKED`. Las credenciales, valores de
variables y capturas con datos personales no se copian a los truth docs.

## Resolución de contradicciones

Ante una contradicción:

1. detener la afirmación afectada;
2. citar ambas fuentes y su autoridad;
3. distinguir comportamiento implementado, intención documentada y estado
   externo;
4. asignar owner e issue para resolverla;
5. conservar la variante heredada sin editar producto si el contrato de tarea no
   autoriza la corrección;
6. actualizar owner, referencias, decisión y changelog cuando la resolución sea
   adoptada.

Una contradicción de seguridad, privacidad, canonicals, rutas o secretos es una
condición de STOP para cambios que dependan de ella.

## Reglas para claims y evidencia

- Citar una ruta inspeccionada o usar `PENDING_TO_VALIDATE`; cuando la pregunta
  sea externa, registrar además `External verification: UNKNOWN`.
- No usar un comentario, README heredado o texto comercial como prueba de
  operación externa.
- No incluir secretos, tokens, payloads personales, correos de usuarios, logs
  sin redactar ni URLs privadas.
- Registrar comandos y resultados literales en el issue, PR o
  [manifiesto de evidencia](../harness/EVIDENCE_MANIFEST_TEMPLATE.md), no en este
  owner estable.
- Conservar separados el autor, el auditor independiente y la aceptación
  post-merge.
