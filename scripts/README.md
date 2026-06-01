# Scripts — partner-onboarding

Toolkit para regenerar los videos de partner-onboarding (6 fases: 0, A, B, C, D, E — 53 videos heygen).

## Pipeline base

- **`video_pipeline.py`** — pipeline mínimo: `pptx → PNG (PowerPoint COM) → audio Dalia (Edge TTS) → mp4 (ffmpeg)`. Cada slide dura exactamente lo que dura su chunk de audio. _Idéntico al de `partner-certification/scripts/` — los dos repos comparten el pipeline base._
- **`matchings.json`** — cache de matching script↔slide para los 53 videos. Generado vía agents Claude en paralelo (1 agent = 1 video) el 2026-05-29.
- **`material_icons_codepoints.txt`** — mapping nombre-ícono → caracter Unicode codepoint (descargado de google/material-design-icons).

## Helpers para fix de íconos (Material Icons en deploy)

- **`patch_all_pptx.py`** — patchea XMLs de los `decks/*.pptx` reemplazando texto del nombre de ícono (`person_off`) por el caracter Unicode codepoint correspondiente. Crea backup en `decks_backup_pre_iconfix/`.
- **`build_manifest.py`** — extrae slide_texts + script para cada video → manifest JSON listo para agents.
- **`combine_matchings.py`** — combina los outputs per-video de los agents en un único `matchings.json` + verifica integridad.
- **`regen_with_cache.py`** — re-regenera todos los videos usando `matchings.json` (sin tocar Gemini ni embeddings).

## 6 íconos no resueltos en partner-onboarding

Estos nombres NO están en el catálogo oficial Material Icons y quedan como texto literal en los videos. Editar pptx fuente si querés que se renderen como glifo:
- `dscr`
- `event_upcoming`
- `grups` (probablemente typo de `groups`)
- `laptop_off`
- `release_attendance`
- `shield_with_heart`

## Dependencias

```bash
pip install edge-tts imageio-ffmpeg python-pptx pywin32 fonttools
```

Requiere Windows + PowerPoint instalado (el pipeline usa COM para renderizar pptx → PNG).

## Fuente Material Icons en el render-host

PowerPoint COM renderiza el nombre del ícono como texto literal si la fuente no está instalada en Windows. Fix:
1. Descargar `MaterialSymbolsOutlined[FILL,GRAD,opsz,wght].ttf` desde Google Fonts.
2. Renombrarla a "Material Icons" usando `fonttools` (cambiar `name` table).
3. Instalar per-user en Windows (no requiere admin).
4. Cargar in-process via `ctypes.windll.gdi32.AddFontResourceExW(path, 0, 0)` antes de invocar PowerPoint COM.

## Origen del toolkit

Estos scripts vivían en `C:\Users\giuli\AppData\Local\Temp\guiones\` hasta el 2026-05-29 cuando Windows limpió silenciosamente el directorio Temp a mitad del regen de partner-onboarding y `video_pipeline.py` + `deck_builder.py` se perdieron. Movidos al repo desde entonces.
