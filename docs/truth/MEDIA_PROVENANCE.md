# Registro de procedencia y derechos de medios

Status: `CURRENT_IN_PROGRESS`

Owner: `docs/truth/MEDIA_PROVENANCE.md` (procedencia, derechos y registro por asset)

## Alcance

Este documento es el owner canónico de la procedencia y los derechos de uso de
medios versionados. Registra, por asset o familia inseparable, fuente, autor o
titular, licencia o permiso, transformaciones —incluido uso de IA—, responsable,
propósito semántico y evidencia. No certifica por presencia de archivo que esos
datos existan o sean válidos fuera del repositorio.

[media/AGENTS.md](../../media/AGENTS.md) enruta el trabajo y fija gates, pero no
es un registro mutable. El texto alternativo, los claims y la función editorial
pertenecen a
[CONTENT_COMMUNICATION_STANDARD.md](CONTENT_COMMUNICATION_STANDARD.md); los
tests técnicos se seleccionan desde [TESTING_MATRIX.md](TESTING_MATRIX.md).

## Estado del inventario heredado

| Alcance | Estado | Evidencia y límite |
| --- | --- | --- |
| Archivos presentes bajo `media/**` e `images/**` | `CURRENT_IMPLEMENTED_TRUTH` | La presencia y metadata del archivo pueden inspeccionarse en Git. |
| Procedencia, titularidad, licencia y permiso del inventario heredado | `PENDING_TO_VALIDATE` | No existe todavía un registro completo aceptado; #3 no inventaría licencias ni remedia assets. |
| Registro territorial y sidecars `source.json` | `PLANNED_NOT_IMPLEMENTED` | #10 define e implementa la convención futura sin certificar retroactivamente el inventario heredado. |

La ausencia actual de una fila por archivo no equivale a permiso de uso ni a
falla demostrada. Es una brecha explícita que debe resolverse antes de reemplazar,
publicar o reutilizar un asset cuya procedencia sea material.

## Registro canónico requerido

Todo asset nuevo o reemplazado debe agregar o actualizar aquí un registro
aceptado con, como mínimo:

- path o familia exacta y hash/versión cuando sea necesario;
- fuente primaria o método de creación y fecha de obtención;
- autor, titular o proveedor identificable;
- licencia, permiso o derecho de uso y sus límites;
- transformaciones, recortes y participación de IA;
- responsable de la decisión y evidencia sanitizada;
- propósito semántico, tratamiento de alt y contexto autorizado;
- dimensiones, formato, bytes y variantes relacionadas;
- status documental, issue/PR de origen y fecha de revisión.

Hasta que #10 integre una convención de sidecars aceptada, este archivo es la
ubicación estable del registro. Una migración futura a `source.json` debe
actualizar este owner, [INDEX.md](INDEX.md), la decisión y el changelog sin
duplicar inventarios.

## Reglas de evidencia

- No usar una URL inaccesible, un nombre de archivo o metadata embebida como
  prueba suficiente de licencia.
- No copiar credenciales, datos personales, URLs privadas o contratos no
  publicables; registrar una referencia sanitizada y su owner humano.
- Una fuente desconocida, un permiso ambiguo o una contradicción queda
  `PENDING_TO_VALIDATE`; no se convierte en `PASS` por urgencia.
- La procedencia no reemplaza revisión de claims, accesibilidad, veracidad,
  responsive, performance, caché ni preview exact-head.

## STOP conditions

Detener el alta, reemplazo o publicación ante procedencia desconocida, licencia
incompatible, titular ambiguo, evidencia no conservable, imagen que implique una
presencia local falsa, o necesidad de borrar/ocultar historia para aprobarla.

## Reconciliación

Una issue que cambie un asset actualiza en el mismo trabajo este registro, sus
sidecars aceptados cuando existan, el owner editorial/técnico material y
[CHANGELOG.md](CHANGELOG.md). El Draft conserva `CURRENT_IN_PROGRESS`; la
aceptación y reconciliación post-merge siguen siendo eventos separados.
