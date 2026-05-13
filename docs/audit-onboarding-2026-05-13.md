# Auditoría QA — Portal Partner Onboarding

**Fecha:** 2026-05-13
**Auditor:** sovra-qa (agente automatizado)
**Scope:** Todo el contenido en `src/data/` — 15 archivos TypeScript
**Criterio:** Skills `certification-conventions`, `content-guardrails`, `kb-image-enforcement`

---

## Resumen ejecutivo

| Categoría | Hallazgos | Severidad máxima |
|-----------|-----------|-----------------|
| Terminología de fases | 3 issues | Alta |
| Consistencia entre páginas | 2 issues | Media |
| KB alignment (fabricaciones) | 2 issues | Alta |
| Imágenes | 1 issue sistémico | Alta |
| Errores de contenido | 3 issues | Media |

**Veredicto:** El portal tiene contenido sólido y bien estructurado. Los problemas principales son: (1) terminología "Fase 0" que no es canónica, (2) Fase C usa nombre diferente al canónico, (3) cero imágenes en todo el portal, y (4) IDP se menciona extensamente sin respaldo en el KB.

---

## 1. Terminología de fases

El skill `certification-conventions` define nombres canónicos. Se auditan todas las referencias.

### 1.1 — "Fase 0" no existe en la convención canónica (ALTA)

**Skill dice:** La fase pre-inicio se llama **"Pre-A: Readiness Assessment"**.
**Portal usa:** "Fase 0 — Preparación" en múltiples lugares:

| Archivo | Línea | Texto |
|---------|-------|-------|
| `phases.ts` | 17-25 | `id: 'fase-0', name: 'Preparación', badgeLabel: 'FASE 0'` |
| `fase-0-content.ts` | 132 | `'Fase 0 — Preparación'` |
| `fase-0-content.ts` | 160 | `title: 'Fase 0 — Preparación'` |
| `landing.ts` | 12 | `'Empezar Fase 0: Preparación →'` |
| `fase-a-content.ts` | 55 | `'ver en Fase 0'` |

**El skill dice explícitamente:** "Nunca usar: 'Fase 0'"

**Decisión necesaria:** ¿Se renombra a "Pre-A (Readiness Assessment)" o se acepta "Fase 0" como variación del portal de onboarding (distinto del portal de certificación)? El skill fue escrito para `portal-certification/`, pero se aplica a este repo también.

### 1.2 — Fase C: nombre canónico vs nombre en portal (ALTA)

| Fuente | Nombre |
|--------|--------|
| **Skill (canónico)** | Fase C — Carga de trámites e integraciones |
| **Portal (phases.ts)** | Fase C — Modelado |
| **Portal (fase-c-content.ts)** | Fase C — Modelado y Testing |

Hay **tres variantes** de nombre para la misma fase:
- `phases.ts:49` → `name: 'Modelado'`
- `fase-c-content.ts:50` → `title: 'Modelado y Testing'`
- Sidebars en todos los archivos → `'Fase C — Modelado'`
- Header component → `'Fase C'`

Ninguno coincide con el nombre canónico: **"Carga de trámites e integraciones"**.

### 1.3 — Fase B: nombre inconsistente (MEDIA)

| Fuente | Nombre |
|--------|--------|
| **Skill (canónico)** | Fase B — Preparación |
| **Portal (phases.ts)** | Fase B — Preparación |
| **Fase 0 sidebar** | Fase 0 — Preparación |

La Fase 0 y la Fase B **comparten el mismo nombre "Preparación"**, lo que puede confundir. El skill resuelve esto: Fase 0 debería ser "Pre-A (Readiness Assessment)".

---

## 2. Consistencia entre páginas

### 2.1 — "5 fases" vs "5 etapas" (MEDIA)

El portal usa ambos términos indistintamente:
- `editions.ts:45` → "las 5 etapas (A-E)"
- `products.ts:48` → "5 fases"
- `fase-a-content.ts:214` → "las 5 fases"
- `roles.ts:39` → "fases (A–E)"

**Recomendación:** Estandarizar en "5 fases" (el término dominante en el portal).

### 2.2 — Conteo de reuniones en `products.ts` (BAJA)

`products.ts:48` dice "14 reuniones en 5 fases". Conteo real:
- Fase A: 4 reuniones (sesión 0 + 3 obligatorias)
- Fase B: 4 reuniones
- Fase C: 3 actividades
- Fase D: 4 reuniones
- Fase E: 3 actividades
- **Total: 18** (o 17 sin sesión 0)

El número 14 parece desactualizado o no incluye las "actividades" de Fases C y E.

---

## 3. KB alignment (fabricaciones)

### 3.1 — IDP (Identity Provider) no existe en el KB (ALTA)

El portal menciona IDP extensamente como funcionalidad central:

| Archivo | Referencia |
|---------|-----------|
| `readiness.ts:118` | "IDP operativo" como señal de readiness |
| `fase-b-content.ts:252` | "IDP del gobierno" como decisión |
| `fase-b-content.ts:278` | "Autenticación propia o IDP del gobierno" |
| `fase-c-content.ts:84` | "Integraciones funcionando (IDP, pagos)" |
| `fase-c-content.ts:157` | "Implementar integración IDP (prioridad #1)" |

**El KB no contiene NINGUNA referencia a IDP, OAuth, SAML, SSO, ni "proveedor de identidad".** Los archivos de ciudadano (`iniciar-sesion.md`, etc.) documentan el registro/login propio de la plataforma, pero no la integración con IDPs externos.

**Veredicto:** No es fabricación — IDP es una funcionalidad real que se ofrece a gobiernos. Pero **es un KB-GAP**: la funcionalidad existe en la plataforma pero no está documentada en el KB. Debe marcarse con `<!-- KB-GAP: Integración IDP no documentada en KB -->` según el skill `content-guardrails`.

### 3.2 — "Notificaciones" como módulo (MEDIA)

`fase-b-content.ts:180` lista "Pagos y notificaciones" como tema de capacitación funcional. El KB **no tiene un módulo de notificaciones**. El término aparece de forma incidental en otros archivos, pero no hay manual dedicado.

**Veredicto:** KB-GAP. Las notificaciones son funcionalidad real pero no documentada como módulo independiente.

### 3.3 — Funcionalidades verificadas OK

Las siguientes funcionalidades del portal tienen respaldo en el KB:
- Catálogos → `catalogos.md`
- Apariencia → `apariencia.md`
- Trámites (formularios, etapas, flujos) → `modulo-de-tramites/`
- Inspecciones y citas → `modulo-de-inspectores/`, `modulo-de-citas/`
- Pagos → `modulo-de-pagos/`
- Subetapas → `modulo-de-tramites/etapas/subetapas.md`
- Documento de salida → `modulo-de-tramites/documento-final/`
- Registro ciudadano → `ciudadano/`
- Filtros / guía de trámites → `filtros.md`
- Módulo de usuarios → `modulo-de-usuarios.md`
- Configuración → `configuracion.md`

---

## 4. Imágenes

### 4.1 — Cero imágenes en todo el portal (ALTA)

El directorio `public/images/` **no existe**. Los únicos archivos en `public/` son SVGs default de Next.js:
```
file.svg, globe.svg, next.svg, vercel.svg, window.svg
```

**No hay un solo screenshot, diagrama, ni imagen de referencia en todo el portal.**

El skill `kb-image-enforcement` es explícito:
> "Todo paso operativo en la certificación DEBE tener una imagen de referencia. Un paso sin imagen es un paso incompleto."
> "Módulos sin imágenes = incompletos"

**Sin embargo**, este portal (partner-onboarding) no es el portal de certificación (portal-certification). El contenido aquí es una guía de implementación — no tiene pasos operativos de plataforma con rutas de navegación que necesiten screenshots.

**Veredicto:** Las imágenes no son estrictamente requeridas para el tipo de contenido de este portal (metodológico, no operativo). Pero sí serían valiosas para:
- Diagramas de flujo del ciclo de 90 días
- Diagrama visual del modelo de soporte (3 niveles)
- Diagrama de roles (partner + gobierno)
- Timeline visual de las fases

**Recomendación:** No es blocker, pero agregar diagramas mejoraría significativamente la experiencia.

### 4.2 — No hay referencias a imágenes rotas

No se encontraron `<img>`, `.png`, `.jpg` ni rutas de imagen en los archivos de datos. La única `<img>` está en `Header.tsx:64` (logo de Sovra). No hay links rotos.

---

## 5. Errores de contenido

### 5.1 — `dangerouslySetInnerHTML` en EditionCompare (MEDIA)

`src/components/EditionCompare.tsx:51` usa `dangerouslySetInnerHTML` para renderizar features de las ediciones. Los datos en `editions.ts` contienen Markdown bold (`**texto**`) que se inyecta como HTML.

**El skill dice:** "No hay HTML tags visibles en texto plano"

**Problema:** El contenido en `editions.ts` usa `**negrita**` (Markdown), pero se renderiza con `dangerouslySetInnerHTML` que espera HTML. Si no hay un parser MD→HTML intermedio, los `**` se mostrarían literales.

**Verificar:** ¿El componente parsea Markdown a HTML antes de inyectar? Si no, los features de ediciones se verían con asteriscos.

### 5.2 — Tildes faltantes en títulos (BAJA)

| Archivo | Línea | Texto | Corrección |
|---------|-------|-------|-----------|
| `fase-c-content.ts:144` | title | "Integraciones tecnicas" | "Integraciones técnicas" |
| `fase-e-content.ts:145` | title | "Documentacion de lecciones aprendidas" | "Documentación de lecciones aprendidas" |
| `fase-e-content.ts:207` | tip | "Las metricas mas poderosas" | "Las métricas más poderosas" |

### 5.3 — Secciones vacías en roles (BAJA)

`roles.ts` — Los roles de partner tienen `content: ''` en la sección "Qué hace":
- Línea 29: Líder de implementación → `content: ''` (tiene items, no es visible)
- Línea 48: Especialista técnico → `content: ''`
- Línea 73: Soporte/capacitador → `content: ''`

No es un error visual si el componente solo muestra items, pero es inconsistente con los roles de gobierno que sí tienen content.

---

## 6. Checklist de conformidad con skills

### certification-conventions

| Criterio | Estado | Detalle |
|----------|--------|---------|
| Fases usan nombre canónico | **FALLA** | Fase 0, Fase C |
| Steps tienen ruta + acción + screenshot + resultado | **N/A** | Este portal no tiene steps operativos |
| Tips usan ícono de foco | **N/A** | Los tips se renderizan como componentes, no como HTML directo |
| Errores comunes en formato acordeón | **OK** | Componente Accordion.tsx |
| No hay HTML tags visibles en texto plano | **VERIFICAR** | dangerouslySetInnerHTML en EditionCompare |
| Imágenes renderizan correctamente | **N/A** | No hay imágenes |

### content-guardrails

| Criterio | Estado | Detalle |
|----------|--------|---------|
| Toda funcionalidad mencionada existe en KB | **FALLA** | IDP, Notificaciones (KB-GAPs) |
| Toda ruta de navegación es verificable | **N/A** | No hay rutas de plataforma |
| No hay datos inventados | **OK** | |
| No hay features fantasma | **FALLA** | IDP sin documentación KB |
| Lenguaje es de operador, no developer | **OK** | Lenguaje consistentemente orientado a partner |

### kb-image-enforcement

| Criterio | Estado | Detalle |
|----------|--------|---------|
| Cada paso tiene imagen | **N/A** | No hay pasos operativos |
| Imágenes cargan correctamente | **OK** | No hay imágenes referenciadas (no hay rotas) |
| Imágenes tienen alt text | **N/A** | |

---

## 7. Acciones recomendadas

### Prioridad alta
1. **Decidir nomenclatura Fase 0 vs Pre-A** — el skill dice Pre-A, el portal dice Fase 0. Estandarizar.
2. **Renombrar Fase C** — unificar a nombre canónico "Carga de trámites e integraciones" o actualizar el skill si el nombre cambió.
3. **Marcar KB-GAPs** — agregar comentarios `<!-- KB-GAP -->` para IDP y Notificaciones. Abrir issues en `sovrahq/knowledge-base` para documentar ambas funcionalidades.

### Prioridad media
4. **Corregir tildes** — 3 títulos sin acentos en Fase C y Fase E.
5. **Verificar rendering de Markdown** en EditionCompare — confirmar que `**negrita**` se parsea correctamente.
6. **Estandarizar "fases" vs "etapas"** — usar "fases" consistentemente.
7. **Corregir "14 reuniones"** en products.ts — actualizar al conteo real.

### Prioridad baja
8. **Agregar diagramas** — timeline visual, modelo de soporte, mapa de roles. No blocker pero mejora UX.
9. **Content en roles de partner** — agregar `content` a secciones "Qué hace" por consistencia.
