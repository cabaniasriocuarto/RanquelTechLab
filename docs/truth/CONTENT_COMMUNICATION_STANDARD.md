# Estándar de contenido, comunicación y marca

Status: `CURRENT_IN_PROGRESS`

Owner: docs/truth/CONTENT_COMMUNICATION_STANDARD.md (afirmaciones, fuentes, tono,
marca y calidad editorial)

## Alcance

Este owner define cómo Ranquel Tech Lab comunica hechos, capacidades y contexto
local. Es un contrato vigente para cambios documentales y públicos; no declara
que el contenido Geo-SEO futuro ya exista ni reemplaza investigación, aprobación
humana o gates ejecutables.

Los criterios automáticos anti-doorway pertenecen a #9 y continúan como
PLANNED_NOT_IMPLEMENTED. Los assets territoriales pertenecen a #10. Las reglas
de indexación se consultan en [SEO_CONTRACT.md](SEO_CONTRACT.md).

## Principios no negociables

- Claridad antes que volumen o densidad de keywords.
- Veracidad antes que persuasión.
- Valor local demostrable antes que cobertura geográfica.
- Capacidad real antes que promesas.
- Lenguaje humano, directo y respetuoso; sin presión engañosa.
- Separación visible entre hecho observado, inferencia, propuesta y plan.
- Fuentes trazables para afirmaciones materiales.
- Revisión humana para contenido local, legalmente sensible o reputacional.
- Privacidad por defecto: no publicar datos personales sin base, necesidad y
  autorización.

## Contratos vigentes y planes

| Tema | Estado | Regla |
| --- | --- | --- |
| Prohibición de afirmaciones inventadas | CURRENT_IN_PROGRESS | Aplica a todo contenido y evidencia cuando el gobierno de #3 sea aceptado |
| Protección de la identidad de Río Cuarto | CURRENT_IN_PROGRESS | No se diluye ni sustituye por expansión geográfica |
| Voz y claridad editorial | CURRENT_IN_PROGRESS | Aplica a copy, documentación, formularios y mensajes después de aceptación |
| Estándar editorial local automatizado | PLANNED_NOT_IMPLEMENTED | #9 debe implementar gates y fixtures |
| Investigación de las cinco ciudades | PLANNED_NOT_IMPLEMENTED | #13–#18 producen fuentes y briefs aprobados |
| Imágenes territoriales | PLANNED_NOT_IMPLEMENTED | #10 define origen, licencia, composición y optimización |
| Contenido de futuras páginas ciudad | PLANNED_NOT_IMPLEMENTED | Sólo se integra mediante sus issues y gates |

Un plan puede describirse como plan. No se redacta en presente ni se presenta
como capacidad implementada.

## Clasificación de afirmaciones

Antes de publicar, cada afirmación material debe encajar en una categoría:

| Categoría | Evidencia mínima | Tratamiento |
| --- | --- | --- |
| Hecho propio verificable | Repositorio, contrato, registro o fuente interna autorizada | Puede afirmarse con alcance y fecha cuando sean materiales |
| Hecho externo | Fuente primaria o autoridad competente, URL y fecha de consulta | Citar o registrar la fuente; evitar extrapolaciones |
| Inferencia | Hechos fuente más razonamiento explícito | Marcar como inferencia, no como certeza |
| Propuesta o método | Descripción fiel de lo que se ofrece | No prometer resultados inevitables |
| Plan futuro | Issue/decisión owner | Usar futuro y estado PLANNED_NOT_IMPLEMENTED |
| Testimonio, cifra o caso | Consentimiento y evidencia verificable | No publicar si falta cualquiera |
| Presencia local | Evidencia operativa real | Nunca inferir oficina, dirección, equipo o clientes |

Contenido sin categoría o evidencia suficiente queda PENDING_TO_VALIDATE o se
elimina. Una mención en un chat no es fuente.

## Jerarquía de fuentes

Se prefieren, en este orden:

1. fuentes primarias oficiales y registros propios autorizados;
2. organismos públicos, normas y documentación oficial;
3. investigación académica o sectorial con metodología identificable;
4. fuentes secundarias reputadas, sólo cuando no exista una primaria adecuada.

Para contenido local se registra como mínimo título, organización, URL, fecha de
publicación si existe, fecha de consulta, afirmación respaldada y limitaciones.
No se copia texto extenso, no se oculta la procedencia y no se atribuye a una
fuente algo que ésta no demuestra.

Una fuente desactualizada, inaccesible o contradictoria no se convierte en PASS:
queda PENDING_TO_VALIDATE hasta su reemplazo o revisión humana.

## Voz y tono

La comunicación debe ser:

- clara, concreta y comprensible para público argentino;
- profesional sin burocracia innecesaria;
- segura sin sonar absoluta;
- orientada a problemas y resultados posibles, sin garantías ficticias;
- coherente en nombres, servicios y CTA;
- inclusiva y respetuosa, sin estereotipos territoriales;
- escaneable en móvil, con títulos descriptivos y párrafos breves.

Se evitan superlativos no demostrables, urgencia falsa, tecnicismos usados como
autoridad, keyword stuffing, frases genéricas intercambiables entre ciudades y
copias que impliquen presencia física inexistente.

## Diferenciación local

Cambiar ciudad, provincia, title, H1 o imagen no crea contenido local. Un brief
aprobable debe incluir:

- intención y público local;
- problemas o sectores relevantes con fuentes;
- relación honesta con la capacidad de Ranquel;
- preguntas y respuestas propias;
- CTA compatible con la modalidad real de atención;
- evidencia y límites de cada afirmación;
- imagen con origen, licencia, alt y función comunicacional;
- revisión de similitud y riesgo de doorway;
- decisión humana de publicación.

No hay un porcentaje universal que garantice diferenciación. La revisión debe
evaluar utilidad e intención, no sólo coincidencia léxica.

## Marca, servicios y CTA

- Se usa el nombre de marca de manera consistente.
- Un servicio se describe según capacidades verificables; no se expande por
  conveniencia de keywords.
- El CTA explica la acción y expectativa siguiente.
- No se simula escasez, contacto local, disponibilidad o respuesta inmediata.
- Una landing paga y una página orgánica pueden compartir identidad de marca,
  pero deben respetar sus roles, canonical e intención.
- Un experimento no altera afirmaciones materiales sin nueva revisión.

El owner de producto define qué capacidades están implementadas en
[FEATURE_MAP.md](FEATURE_MAP.md). Este documento gobierna cómo se comunican.

## Accesibilidad editorial y medios

- Los headings expresan jerarquía; no se eligen sólo por apariencia.
- El texto de enlaces describe el destino fuera de contexto.
- Labels, errores e instrucciones de formularios no dependen sólo de color.
- El alt comunica la función o información de la imagen; una imagen decorativa
  usa tratamiento decorativo.
- Acrónimos y términos técnicos se explican cuando el público lo necesita.
- No se oculta información esencial dentro de imágenes, animaciones o texto
  inaccesible.

La procedencia, titularidad y licencia por asset pertenecen al
[registro canónico de medios](MEDIA_PROVENANCE.md). `media/AGENTS.md` enruta los
gates técnicos; este owner conserva alt, claims, función editorial y veracidad
del uso.

## Revisión editorial proporcional

| Superficie | Revisión mínima |
| --- | --- |
| Documentación interna | Estado, owner, enlaces, claridad, contradicciones y secretos |
| Copy público existente | Veracidad, voz, CTA, accesibilidad, responsive y coherencia SEO |
| Página local nueva | Fuentes, diferenciación, integridad local, similitud, SEO y revisión humana |
| Testimonio, caso, cifra o afirmación sensible | Evidencia, consentimiento, alcance, privacidad y aprobación humana |
| Campaña paga | Correspondencia anuncio-landing-CTA y contrato de medición, sin promesas engañosas |

La matriz completa de disciplinas vive en
[INTERDISCIPLINARY_REVIEW_MATRIX.md](INTERDISCIPLINARY_REVIEW_MATRIX.md).

## Evidencia editorial

El manifest debe identificar:

- piezas y rutas revisadas;
- fuentes y fechas relevantes;
- afirmaciones eliminadas, limitadas o pendientes;
- revisión de similitud y utilidad local cuando aplique;
- persona o rol que aprobó contenido sensible;
- HEAD y preview exactos para contenido público;
- estados honestos y limitaciones.

SELF_VALIDATED_ONLY no sustituye aprobación editorial humana ni auditoría
independiente cuando el riesgo la requiere.

## STOP conditions

Detener edición o publicación ante:

- oficina, dirección, equipo, cliente, testimonio, cifra o resultado sin prueba;
- fuente que no respalda la afirmación;
- contenido local esencialmente clonado;
- conflicto con la Home o propuesta vigente de Río Cuarto;
- uso de datos personales sin autorización o necesidad;
- derechos/licencia de un asset desconocidos;
- presión para presentar un plan como implementado;
- publicación o gasto externo fuera del TASK_CONTRACT;
- expansión de scope hacia otra ciudad, rama o producto.

## Reconciliación

Cuando una integración cambia una capacidad, afirmación durable, voz o estándar
editorial, se actualizan el owner material, este documento, la decisión si
corresponde y [CHANGELOG.md](CHANGELOG.md). Se preserva la historia útil; no se
reescribe una afirmación histórica para simular que siempre fue correcta.
