# Certification Conventions

Convenciones obligatorias para todo contenido del portal de certificación de partners (`portal-certification/`). Aplicar ANTES de escribir o modificar cualquier módulo.

## Terminología de fases

Usar SIEMPRE el nombre canónico de la guía de 90 días. Sin excepciones.

| Fase | Nombre canónico | Semanas | Descripción corta |
|------|----------------|---------|-------------------|
| Pre-A | Readiness Assessment | Pre-inicio | Evaluación de condiciones mínimas |
| A | Inicio | 1 | Kickoff, equipos, roles |
| B | Preparación | 2-5 | Capacitación, discovery trámites |
| C | Carga de trámites e integraciones | 6-8 | Modelado, configuración, testing |
| D | Pre-lanzamiento | 9-10 | Testing final, capacitación operadores |
| E | Post-lanzamiento | 11-12 | Estabilización, soporte, métricas |

**Formato en HTML:** `<strong>Fase X (Nombre)</strong>` — ejemplo: `<strong>Fase B (Preparación)</strong>`

**Formato en MD:** `**Fase X (Nombre)**` — ejemplo: `**Fase B (Preparación)**`

**Nunca usar:** "Fase 0", "Fase B — Configuración visual" (descripciones ad-hoc), ni fases sin nombre canónico.

## Formato paso a paso (step-by-step)

Todo ejercicio práctico y toda instrucción operativa sigue este formato:

```
Ruta: Módulo > Sección > Botón/Acción
```

Ejemplo:
```
Ruta: Trámites > Formulario > Agregar pregunta > Tipo: Texto corto
```

Cada paso DEBE incluir:
1. **Ruta de navegación** — dónde está en la plataforma
2. **Acción** — qué hacer (click, configurar, activar)
3. **Screenshot del KB** — imagen que muestra el estado esperado
4. **Resultado esperado** — qué debe verse después de la acción

Si el KB no tiene screenshot para un paso, crear un PLACEHOLDER y abrir issue para Gi.

## Tips y notas

**Tips valiosos** (consejos prácticos, trucos, mejores prácticas):
- Usar ícono de foco: `<div class="tip-box">💡 <strong>Tip:</strong> {contenido}</div>`
- Consistente en TODOS los módulos y semanas

**Notas operativas** (cosas que Sovra debe preparar por cada partner):
- Marcar con: `<!-- NOTA-OPERATIVA: {descripción} -->`
- No mostrar al partner — son para el equipo interno
- Ejemplo: `<!-- NOTA-OPERATIVA: Instructor debe dar URL del sandbox antes de este ejercicio -->`

**Hilo conductor** (conexiones entre módulos):
- ELIMINAR las notas sueltas tipo "📍 Hilo conductor: ..."
- Si la conexión es valiosa, integrarla como tip o como texto natural dentro del párrafo

## Secciones de errores comunes

- Implementar como **acordeones colapsables** (HTML `<details><summary>`)
- Cada error es un acordeón individual
- Cerrados por default — el partner abre solo los que necesita
- Formato:
```html
<details class="error-accordion">
  <summary>❌ {Título del error}</summary>
  <p>{Descripción + cómo resolverlo}</p>
</details>
```

## Quiz

- Un quiz por semana, al final de todos los módulos de esa semana
- El quiz es **gate** — conceptualmente debe completarse antes de avanzar (implementación técnica futura)
- Las preguntas deben ser sobre situaciones reales, no trivia
- Evitar preguntas sobre funcionalidades oscuras o edge cases
- Cada pregunta debe tener una respuesta claramente correcta

## Módulos de contenido

Estructura obligatoria de cada módulo detail page:
1. Breadcrumb + navegación lateral
2. Título + duración + tipo + prerequisito
3. Objetivo (1-2 oraciones)
4. Conexión con la implementación (fase canónica)
5. Contenido principal con step-by-step + screenshots
6. Ejercicio práctico (step-by-step con screenshots)
7. Errores comunes (acordeones)
8. Criterios de evaluación
9. Recursos

## Revisión pre-commit

Antes de commitear cambios a cualquier módulo, verificar:
- [ ] Fases usan nombre canónico
- [ ] Steps tienen ruta + acción + screenshot + resultado
- [ ] Tips usan ícono de foco
- [ ] Errores comunes en formato acordeón
- [ ] No hay HTML tags visibles en texto plano
- [ ] Imágenes renderizan correctamente
