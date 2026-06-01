"""Combine per-video matching JSONs into matchings.json + verify integrity."""
import json
from pathlib import Path

MATCHINGS_DIR = Path(r'C:/Users/giuli/AppData/Local/Temp/matchings_per_video')
MANIFEST = Path(r'C:/Users/giuli/AppData/Local/Temp/matching_manifest.json')
OUT = Path(r'C:/Users/giuli/AppData/Local/Temp/guiones/matchings.json')

manifest = {v['video_key']: v for v in json.loads(MANIFEST.read_text(encoding='utf-8'))}

combined = {}
errors = []
warnings = []

for f in sorted(MATCHINGS_DIR.glob('*.json')):
    video_key = f.stem
    try:
        chunks = json.loads(f.read_text(encoding='utf-8'))
    except Exception as e:
        errors.append(f'{video_key}: invalid JSON ({e})')
        continue
    if not isinstance(chunks, list):
        errors.append(f'{video_key}: not a list ({type(chunks).__name__})')
        continue
    expected_n = manifest[video_key]['num_slides']
    if len(chunks) != expected_n:
        errors.append(f'{video_key}: {len(chunks)} chunks, expected {expected_n}')
        continue
    # Verify reconstruction (allow whitespace flexibility)
    expected_script = manifest[video_key]['script']
    actual = ' '.join(c.strip() for c in chunks).replace('  ', ' ')
    expected_norm = ' '.join(expected_script.split())
    actual_norm = ' '.join(actual.split())
    if actual_norm != expected_norm:
        # Check if just close (allow small drift)
        if len(set(actual_norm.split()) ^ set(expected_norm.split())) > 5:
            warnings.append(f'{video_key}: reconstruction differs significantly ({len(actual_norm)} vs {len(expected_norm)} chars)')
    combined[video_key] = chunks

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(combined, ensure_ascii=False, indent=2), encoding='utf-8')

print(f'Combined: {len(combined)} entries -> {OUT}')
print(f'Errors: {len(errors)}')
for e in errors: print(f'  ERROR {e}')
print(f'Warnings: {len(warnings)}')
for w in warnings[:10]: print(f'  WARN {w}')
