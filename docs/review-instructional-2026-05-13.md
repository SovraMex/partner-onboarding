# Review Instruccional — Portal Partner Onboarding

**Fecha:** 2026-05-13
**Revisor:** Instructional Designer (agente)
**Alcance:** Contenido completo de fases 0-E + Takeover, cruzado con KB sovra-gov y skills del proyecto

---

## Resumen ejecutivo

El portal tiene contenido sólido y bien estructurado. Las 6 fases + takeover cubren el ciclo completo de implementación con reuniones, entregables, errores comunes y checklists consistentes. El tono es correctamente partner-facing en casi todo el contenido. Los hallazgos principales son:

1. **Gaps de enriquecimiento desde KB** — el contenido es metodológico/estratégico pero no aprovecha el KB operativo para dar contexto práctico al partner
2. **Fase C tiene el mayor gap** — menciona modelado de trámites sin vincular a cómo funciona la plataforma
3. **No se detectaron funcionalidades fabricadas** — todo lo mencionado existe o es metodológico
4. **Tono es 95% correcto** — 3 instancias menores donde el lenguaje se desliza hacia interno

---

## 1. Completitud por fase

### Fase 0 — Preparación ✅ Completa

| Elemento | Estado | Notas |
|----------|--------|-------|
| Checklist | ✅ 4 items con hints | Bien calibrado |
| Readiness assessment | ✅ 4 señales con verde/rojo | Excelente diseño interactivo |
| Roles partner (3) | ✅ Detallados | Clara definición de qué hace cada uno |
| Roles gobierno (5) | ✅ Detallados | Dedicación y warnings incluidos |
| Modelo de soporte | ✅ 3 niveles con SLAs | Golden rule incluida |
| Contingency protocol | ✅ 5 pasos | Transición de dueño político |
| Errores comunes | ❌ No hay sección | A diferencia de todas las otras fases, Fase 0 no tiene `ErrorItem[]` |
| Template readiness | ✅ Declaración descargable | |

**Gap identificado:** Fase 0 es la única fase sin errores comunes explícitos. Dado que es la fase donde más se cometen errores de arranque prematuro, sería valioso agregar 3-4 errores tipo:
- "Arrancar sin readiness completo"
- "Asumir que los roles se asignarán solos"
- "No validar que el IDP esté operativo"

### Fase A — Inicio ✅ Completa

| Elemento | Estado | Notas |
|----------|--------|-------|
| Reuniones | ✅ 4 (0-3) | Bien detalladas con agenda, entregables, asistentes |
| Checklist | ✅ 9 items | Cubre roles, alcance, canales, dominio |
| Decisiones clave | ✅ 3 | SaaS/on-premise, readiness, scope |
| Errores comunes | ✅ 3 | Con fix claro |
| Kit de materiales | ✅ 3 items | |
| Modelo de reuniones | ✅ | Partner leads vs Sovra exception |

**Observación positiva:** La sesión cero es excelente — posiciona al partner como estratega, no como ejecutor técnico. El tip sobre ROI de la sesión cero es valioso.

### Fase B — Preparación ✅ Completa

| Elemento | Estado | Notas |
|----------|--------|-------|
| Reuniones | ✅ 4 | Conceptual, funcional, discovery, técnica |
| Checklist | ✅ 11 items | El más extenso — correcto para la fase más densa |
| Decisiones clave | ✅ 3 | IDP, pagos, equipo digitalización |
| Errores comunes | ✅ 4 | |
| Principio rector | ✅ "Aprender haciendo" | Bien posicionado |
| Preparación partner | ✅ Tip sobre KB | |

**Gap identificado — Capacitación funcional (Reunión 2):** La agenda menciona "Landing y guía de trámites", "Catálogos y configuración", "Módulo de trámites", etc. pero no tiene detalle operativo. El KB tiene contenido extenso y detallado para cada uno de estos temas (apariencia.md, catalogos.md, modulo-de-tramites/, modulo-de-pagos/, etc.) que podría enriquecer lo que el partner debe saber ANTES de capacitar al gobierno. Ver sección 2.

### Fase C — Modelado y Testing ✅ Completa (con gaps de KB)

| Elemento | Estado | Notas |
|----------|--------|-------|
| Actividades | ✅ 3 | Modelado, integraciones, testing e2e |
| Checklist | ✅ 9 items | |
| Decisiones clave | ✅ 3 | |
| Errores comunes | ✅ 3 | |
| Protocolo testing | ✅ 7 pasos | Bien definido |

**Gap principal — Modelado sin operativa:** La actividad 1 dice "Modelar formularios, etapas y flujos por trámite" pero no da ningún contexto de cómo funciona esto en la plataforma. El KB tiene:
- `modulo-de-tramites/formulario-del-tramite/` — tipos de preguntas, secciones, validaciones
- `modulo-de-tramites/etapas/` — configuración de etapas, flujos
- `modulo-de-tramites/documento-final/` — documento de salida
- `modulo-de-tramites/configuracion-general-del-tramite.md` — settings del trámite
- `modulo-de-tramites/configuracion-ficha-del-tramite.md` — ficha pública

El partner que lea Fase C sabrá QUÉ hacer pero no CÓMO se ve en la plataforma. Este es el gap más importante del portal.

**Gap — Imagen institucional:** Menciona "Aplicar imagen institucional (logo, colores, landing)" pero el KB de `apariencia.md` tiene un sistema completo de 9 secciones de tema + 6 secciones de home + header + footer. Una referencia al menos a las secciones clave ayudaría al partner a saber qué preparar.

### Fase D — Pre-lanzamiento ✅ Completa

| Elemento | Estado | Notas |
|----------|--------|-------|
| Reuniones | ✅ 4 | Operadores, soporte, ejecutiva, comunicación |
| Checklist | ✅ 9 items | |
| Testing pre-launch | ✅ 10 casos | Excelente — interactivo con persistencia |
| Decisiones clave | ✅ 3 | |
| Errores comunes | ✅ 3 | |
| Modelo reuniones | ✅ | Frecuencia aumentada |

**Observación positiva:** Los 10 casos de testing pre-producción son excelentes y prácticos. El criterio de éxito es claro: "10/10 casos pasados, 0 bugs críticos, al menos 1 persona externa".

**Gap menor — Gestión de accesos operadores:** Menciona "Accesos de operadores gestionados y confirmados" pero no referencia cómo se hace en la plataforma. El KB de `modulo-de-usuarios.md` tiene el flujo completo: Usuarios > Funcionarios > Añadir > asignar módulos y roles. Una nota operativa aquí ayudaría.

### Fase E — Post-lanzamiento ✅ Completa

| Elemento | Estado | Notas |
|----------|--------|-------|
| Actividades | ✅ 3 | Monitoreo, lecciones, cierre |
| Checklist | ✅ 7 items | |
| Métricas | ✅ 3 categorías (9 métricas) | Adopción, operación, calidad |
| Decisiones clave | ✅ 2 | |
| Errores comunes | ✅ 3 | |

**Observación positiva:** El tip sobre métricas de impacto vs métricas operativas es excelente para el partner: "Las métricas más poderosas son de impacto: Ahorramos X horas de fila al ciudadano."

**Gap menor — Métricas sin fuente:** Las 9 métricas están bien definidas pero no dicen de dónde sacarlas en la plataforma. Ejemplo: "Trámites iniciados/semana" — ¿de qué dashboard? ¿del registro de cambios? El partner necesita saber dónde mirar.

### Takeover ✅ Completa

| Elemento | Estado | Notas |
|----------|--------|-------|
| 3 fases (T1-T3) | ✅ | Transferencia, presentación, operación |
| Checklists por fase | ✅ 5+3+4 items | |
| Decisiones por fase | ✅ 3 | |
| Errores comunes | ✅ 3 | |

**Observación positiva:** "Nunca criticar al equipo anterior frente al gobierno" es un error real que se comete. Bien incluido.

---

## 2. Gaps de enriquecimiento desde KB

Mapeo de dónde el KB puede enriquecer el contenido del portal:

| Fase | Sección del portal | Archivo KB | Tipo de enriquecimiento |
|------|-------------------|------------|------------------------|
| B | Capacitación funcional — "Catálogos y configuración" | `catalogos.md` | Agregar nota: el partner debe entender creación, carga CSV, vinculación y sincronización antes de capacitar |
| B | Capacitación funcional — "Landing y guía de trámites" | `apariencia.md` | Agregar nota: 9 secciones de tema + 6 secciones de home editables. Partner debe conocer header/footer/secciones |
| B | Reunión técnica — "Seguridad y backups" | `configuracion.md` | Agregar referencia a configuración general: idioma, módulos, identificadores, días inhábiles |
| C | Modelado — "Modelar formularios, etapas y flujos" | `modulo-de-tramites/` | **GAP CRÍTICO.** Agregar sección "Qué vas a modelar" con referencia a: formulario (tipos de preguntas), etapas (flujo), documento de salida, ficha del trámite |
| C | Modelado — "Configurar catálogos" | `catalogos.md` | Agregar nota operativa: catálogos se crean una vez y se vinculan a múltiples trámites. Carga manual vs CSV |
| C | Modelado — "Aplicar imagen institucional" | `apariencia.md` | Agregar referencia a sub-pestañas Tema (colores) y Página de inicio (header, 6 secciones, footer) |
| D | Capacitación operadores — "vista operador" | `modulo-de-tramites/gestion-de-un-tramite/` | Agregar referencia a flujo de gestión: bandeja de entrada, etapas, prevención, resolución |
| D | Gestión de accesos | `modulo-de-usuarios.md` | Agregar referencia a: Usuarios > Funcionarios > Añadir > módulos + roles |
| D | Modelo de soporte — "3 niveles" | `registro-de-cambios.md` | Nota: el registro de cambios es herramienta de auditoría para Nivel 1 |
| E | Métricas — fuentes | Varios | Agregar de dónde sacar cada métrica en la plataforma |

**Priorización:**
1. 🔴 **Fase C modelado** — es el gap más grande. El partner no tiene contexto de qué herramientas tiene la plataforma para modelar
2. 🟡 **Fase B capacitación funcional** — el partner necesita saber qué estudiar del KB antes de capacitar
3. 🟢 **Fase D accesos y operadores** — mejora menor, el flujo es intuitivo

---

## 3. Verificación de tono partner-facing

### Resultado general: ✅ 95% correcto

El contenido está consistentemente escrito para el partner. Usa "tú" directo, habla desde la perspectiva de quien implementa, y posiciona a Sovra como soporte, no como jefe.

### 3 instancias donde el tono se desliza:

1. **`products.ts` línea 34** — "Diseño del sistema educativo (interno)" — la palabra "(interno)" es lenguaje Sovra, no del partner. El partner no necesita saber que el pensum es interno. **Fix sugerido:** "Diseño del plan de estudios + plan de certificación."

2. **`products.ts` línea 79** — "54 páginas de manuales como base de conocimiento (RAG)" — "RAG" es terminología técnica interna. El partner no sabe qué es RAG. **Fix sugerido:** "54 páginas de manuales de la plataforma como base de conocimiento."

3. **`faseBContent.ts` línea 123** — `faseBPartnerPrep.text` menciona "sovra.io/es/knowledge, manuales técnicos" — la URL está bien, pero "manuales técnicos" suena interno. El partner necesita saber que son los **manuales de la plataforma** que ellos mismos deberían dominar. **Fix sugerido:** "...fuentes de conocimiento: sovra.io/es/knowledge, manuales de la plataforma."

### Patrones de tono que están bien:

- ✅ "Tú" consistente — nunca "usted" ni tercera persona
- ✅ Errores comunes escritos como experiencias reales ("El gobierno dice que tiene equipo pero no asigna nombres")
- ✅ Fixes directos y accionables ("No avances a Fase B. Pide reunión con el dueño del proyecto.")
- ✅ Warnings honestos sin ser paternalistas
- ✅ Sovra posicionado como recurso ("escala a Sovra — para eso estamos")
- ✅ Gobierno posicionado como socio, no como cliente pasivo ("Modela junto con el gobierno, no para ellos")

---

## 4. Verificación de funcionalidades fabricadas

### Resultado: ✅ No se detectaron funcionalidades fabricadas

El contenido del portal es **metodológico**, no operativo. No documenta funcionalidades de la plataforma en detalle — documenta el proceso de implementación. Esto es una fortaleza (no se puede fabricar algo que no se describe) pero también un gap (ver sección 2).

Verificación cruzada con KB:

| Mención en portal | ¿Existe en KB? | Status |
|-------------------|----------------|--------|
| "Guía de trámites pública" | ✅ Secciones 3 y 4 de home en apariencia.md | OK |
| "Formularios, etapas y flujos" | ✅ modulo-de-tramites/ completo | OK |
| "Catálogos y validaciones" | ✅ catalogos.md | OK |
| "Imagen institucional (logo, colores, landing)" | ✅ apariencia.md — Tema + Página de inicio | OK |
| "IDP integrado" | No es funcionalidad de la plataforma en KB — es integración externa | OK (correcto, no es feature del producto) |
| "Documento de salida" | ✅ modulo-de-tramites/documento-final/ | OK |
| "Módulo de pagos" | ✅ modulo-de-pagos/ | OK |
| "Inspecciones y citas" | ✅ modulo-de-inspectores/, modulo-de-citas/ | OK |
| "Registro e identidad" | ✅ modulo-de-usuarios.md (ciudadanos se registran desde portal público) | OK |
| "Sistema de Tickets" (products.ts) | No verificable en KB (es producto separado: sovra-tickets) | OK — es producto real, repo existe |
| "Agente IA de Soporte" (products.ts) | No verificable en KB (es producto separado) | OK — knowledge-base repo existe |
| "Dashboard + Métricas" (products.ts) | No verificable en KB | ⚠️ **Posible riesgo** — no hay evidencia de que el dashboard exista como producto listo. La descripción dice "Métricas por gobierno: adopción, operación, SLA compliance, tickets resueltos por IA vs humano" — esto suena aspiracional. Verificar si el producto está construido |

---

## 5. Mejoras concretas propuestas

### Prioridad Alta

**5.1 — Agregar sección "Qué vas a modelar" en Fase C**
Antes de la actividad de modelado, agregar un bloque que referencie los componentes de la plataforma que el partner va a usar:
- **Formulario del trámite** — tipos de preguntas, secciones, documentos adjuntos
- **Etapas** — flujo de gestión, prevención, aprobación/rechazo
- **Documento de salida** — template del documento final
- **Ficha del trámite** — lo que ve el ciudadano en la guía
- **Catálogos** — listas reutilizables vinculadas a formularios

No necesita reproducir el KB — solo un "map" de qué existe y dónde estudiarlo.

**5.2 — Agregar errores comunes a Fase 0**
3-4 errores del tipo:
- "Arrancar sin 3/4 señales verdes" → Fix: pre-discovery
- "No validar IDP operativo" → Fix: Preguntar en semana 0, no en semana 6
- "Asumir que los roles se autoasignan" → Fix: Exigir nombres en la primera semana

### Prioridad Media

**5.3 — Agregar "Qué estudiar del KB" en Fase B**
Antes de la capacitación funcional (Reunión 2), incluir checklist del partner:
- [ ] Leí apariencia.md (tema + página de inicio)
- [ ] Leí catalogos.md (creación, carga, vinculación, sincronización)
- [ ] Leí modulo-de-tramites/index.md (overview del módulo)
- [ ] Leí modulo-de-usuarios.md (roles y permisos)
- [ ] Tengo acceso a la instancia sandbox

**5.4 — Vincular métricas a fuentes en Fase E**
Para cada métrica, agregar de dónde se obtiene:
- "Usuarios registrados" → Usuarios > Ciudadanos > Total
- "Trámites iniciados/semana" → Dashboard (si existe) o conteo manual
- "Tiempo resolución" → Registro de cambios (auditoría)

### Prioridad Baja

**5.5 — Corregir 3 deslices de tono** (ver sección 3)

**5.6 — Verificar existencia del Dashboard de Métricas**
`products.ts` lista "Dashboard + Métricas" como producto — verificar si está construido o es aspiracional. Si es aspiracional, cambiar la descripción a futuro o marcar como "en desarrollo".

**5.7 — Consistencia de interfaces TypeScript**
Las interfaces `ChecklistItem`, `Attendee`, `MeetingSection`, `Deliverable`, `Decision`, `ErrorItem` se repiten en cada archivo de fase. Podrían extraerse a un archivo compartido `types.ts`. No es contenido pero mejora mantenibilidad.

---

## 6. Resumen de hallazgos

| Categoría | Hallazgos | Severidad |
|-----------|-----------|-----------|
| Completitud contenido | Todas las fases tienen reuniones/actividades, checklists, decisiones, errores comunes | ✅ |
| Gap: Fase 0 sin errores | Única fase sin ErrorItem[] | 🟡 Media |
| Gap: Fase C sin contexto plataforma | Modelado mencionado pero sin referencia a herramientas de la plataforma | 🔴 Alta |
| Gap: Fase B sin KB prep | Partner capacita sin saber qué estudiar primero | 🟡 Media |
| Gap: Fase E métricas sin fuente | 9 métricas sin indicar de dónde sacarlas | 🟢 Baja |
| Tono partner-facing | 95% correcto, 3 deslices menores | 🟢 Baja |
| Funcionalidades fabricadas | No detectadas, 1 producto posiblemente aspiracional | 🟡 Media |
| Consistencia estructural | Excelente — todas las fases siguen el mismo patrón | ✅ |

---

*Reporte generado por agente instructional-designer. No se modificó código.*
