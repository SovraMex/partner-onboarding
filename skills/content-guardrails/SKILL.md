# Content Guardrails

Reglas de integridad para generación de contenido en el portal de certificación. Aplica a TODO agente que escriba o modifique contenido de módulos.

## Regla #1: No fabricar funcionalidades

**NUNCA documentar una funcionalidad que no exista en el Knowledge Base.**

El KB (`sovrahq/knowledge-base`) es la fuente de verdad de lo que la plataforma puede hacer. Si una funcionalidad no está documentada en el KB, NO EXISTE para efectos de la certificación.

Antes de escribir cualquier paso operativo:
1. Buscar la funcionalidad en el KB: `grep -r "{término}" ~/code/sovrahq/knowledge-base/`
2. Si existe → documentar con referencia al archivo KB
3. Si NO existe → NO incluir. Agregar un `<!-- KB-GAP: {funcionalidad} no documentada en KB -->` y abrir issue

**Ejemplo de violación:** Documentar "configurar mail de contacto en el footer" cuando el KB de apariencia no menciona esa funcionalidad. Esto confunde al partner y genera tickets de soporte por features que no existen.

## Regla #2: Verificación cruzada obligatoria

Para cada módulo, antes de commit:
1. Identificar qué archivos del KB corresponden al módulo
2. Leer esos archivos
3. Verificar que cada paso documentado en el módulo tiene respaldo en el KB
4. Si el módulo menciona algo que el KB no cubre → eliminar o marcar como gap

Mapeo módulo → KB:
| Módulo | Archivos KB principales |
|--------|------------------------|
| M1.1 Vision general | KB: index general |
| M1.2 Apariencia | KB: `apariencia.md` |
| M1.3 Modelado | KB: `modulo-de-tramites/` (formulario, etapas, documento-salida) |
| M1.4 Catálogos | KB: `catalogos/`, `modulo-de-tramites/formulario-del-tramite/tipos-de-preguntas.md` |
| M1.5 Operación | KB: `modulo-de-tramites/etapas/` |
| M1.6 Inspecciones | KB: `modulo-de-inspectores/`, `modulo-de-citas/` |
| M1.7 Pagos | KB: `modulo-de-pagos/` |

## Regla #3: Lenguaje del partner, no del desarrollador

El partner no es técnico. El contenido debe:
- Usar lenguaje de operador ("configura", "activa", "verifica") no de desarrollador ("implementa", "despliega", "integra")
- Describir rutas de navegación como las vería en pantalla
- Evitar jerga interna de Sovra sin explicación

## Regla #4: No inventar datos de ejemplo

Si un paso requiere datos de ejemplo (nombres de trámites, catálogos, etc.), usar los que ya existen en el KB o en los diccionarios de datos. No inventar nombres de trámites, dependencias, o configuraciones que no existan en ninguna instancia real.

## Auditoría post-generación

Después de que un agente genera o modifica contenido, SIEMPRE correr esta checklist:
- [ ] Toda funcionalidad mencionada existe en KB
- [ ] Toda ruta de navegación es verificable
- [ ] No hay datos inventados
- [ ] No hay features fantasma
- [ ] Lenguaje es de operador, no de developer
