# KB Image Enforcement

Reglas para manejo de imágenes del Knowledge Base en el portal de certificación. Todo agente de contenido o código DEBE seguir estas reglas.

## Principio

Todo paso operativo en la certificación DEBE tener una imagen de referencia. Un paso sin imagen es un paso incompleto. Los agentes NO pueden tomar el camino corto de omitir imágenes.

## Flujo de imágenes

```
KB (sovrahq/knowledge-base) → portal-certification/assets/screenshots/ → HTML módulo
```

1. **Buscar en KB:** `find ~/code/sovrahq/knowledge-base/ -name "*.png" -path "*{módulo}*"`
2. **Si existe:** copiar a `portal-certification/assets/screenshots/` con naming: `m{S}-{M}-step{N}-{descripcion}.png`
3. **Si NO existe en KB:** crear `PLACEHOLDER.txt` con descripción exacta de qué captura se necesita + abrir issue para Gi
4. **Insertar en HTML:** `<img src="assets/screenshots/{filename}" alt="{descripción paso}" class="step-screenshot" />`

## Naming convention

```
m{semana}-{modulo}-step{numero}-{descripcion-kebab}.png
```

Ejemplos:
- `m1-6-step1-etapa-inspeccion-en-flujo.png`
- `m1-7-step3-etapa-pago-en-flujo.png`

## Tamaño y estilo

- Max width: 800px en CSS (no dejar que tomen 100% del ancho)
- Agregar class `step-screenshot` para styling consistente:
```css
.step-screenshot {
  max-width: 800px;
  width: 100%;
  border: 1px solid var(--border-color, #e0e0e0);
  border-radius: 8px;
  margin: 12px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```
- En responsive (<768px), las imágenes deben escalar proporcionalmente

## Auditoría de imágenes

Antes de commitear un módulo, verificar:
- [ ] Cada paso del ejercicio práctico tiene imagen
- [ ] Cada configuración descrita tiene screenshot de referencia
- [ ] Imágenes cargan correctamente (no links rotos)
- [ ] Imágenes tienen alt text descriptivo
- [ ] Imágenes no exceden 800px de ancho visual

## Cuando KB tiene imágenes rotas

Si un archivo del KB tiene referencias a imágenes que no existen (links rotos):
1. Documentar el issue: archivo KB, línea, imagen faltante
2. Crear issue en GitHub `sovrahq/knowledge-base`
3. Enviar mensaje a Gi por Slack con el listado
4. En el portal de certificación, dejar PLACEHOLDER hasta que Gi resuelva

## Módulos sin imágenes = incompletos

Si un módulo no tiene NINGUNA imagen del KB, el módulo se considera **incompleto** para review. No se puede enviar a QA o a producción sin al menos las imágenes de los pasos principales del ejercicio práctico.
