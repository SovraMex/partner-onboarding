"""Re-regenerate the 62 videos using the new matchings.json cache.
Cache hits => no Gemini, no embeddings, just the agent-computed matchings."""
import ctypes
import sys
import re
import time
import traceback
import json
from pathlib import Path

FONT_PATH = r'C:\Users\giuli\AppData\Local\Microsoft\Windows\Fonts\MaterialIcons-Regular.ttf'
result = ctypes.windll.gdi32.AddFontResourceExW(FONT_PATH, 0, 0)
print(f'[FONT] {result}', flush=True)

sys.path.insert(0, r'C:\Users\giuli\AppData\Local\Temp\guiones')
from video_pipeline import generate_video

# Load manifest to know which videos to regen
manifest = json.loads(Path(r'C:\Users\giuli\AppData\Local\Temp\matching_manifest.json').read_text(encoding='utf-8'))
VIDEOS_ROOT = Path(r'C:\Users\giuli\Documents\partner-certification\public\videos')
SCRIPTS_DIR = Path(r'C:\Users\giuli\AppData\Local\Temp\guiones\heygen-scripts')

# Each entry: {video_key, pptx, script (full), num_slides, ...}
total = len(manifest)
print(f'[PLAN] Re-generating {total} videos using matchings.json cache', flush=True)

ok, failed = 0, 0
t0 = time.time()
for i, m in enumerate(manifest, 1):
    key = m['video_key']
    week = int(key.split('-')[0][1:])
    mod = key.split('-')[1]
    vnum = key.split('-V')[1]
    out = VIDEOS_ROOT / f'semana-{week}' / f'{key}.mp4'
    elapsed = time.time() - t0
    eta = (elapsed / i) * (total - i) / 60 if i > 1 else 0
    print(f'[{i}/{total}] ({elapsed/60:.1f}m elapsed, ~{eta:.0f}m left) {key}.mp4', flush=True)
    try:
        out.parent.mkdir(parents=True, exist_ok=True)
        generate_video(pptx_path=m['pptx'], script_text=m['script'], output_path=str(out), voice='es-MX-DaliaNeural')
        ok += 1
    except Exception as e:
        failed += 1
        print(f'  FAILED: {e}', flush=True)
        traceback.print_exc()

print(f'\n=== DONE === OK: {ok} | FAILED: {failed} | Time: {(time.time()-t0)/60:.1f}m', flush=True)
