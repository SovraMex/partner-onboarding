"""Build manifest of (slide_texts, script) for the 63 videos that need re-matching."""
import sys, json, re
sys.path.insert(0, r'C:/Users/giuli/AppData/Local/Temp/guiones')
from video_pipeline import extract_slide_texts
from pathlib import Path

DECKS = Path(r'C:/Users/giuli/AppData/Local/Temp/guiones/decks')
SCRIPTS = Path(r'C:/Users/giuli/AppData/Local/Temp/guiones/heygen-scripts')

# 63 videos that used local embedding (from log)
log = open(r'C:/Users/giuli/AppData/Local/Temp/regen_resume.log').read()
pat = re.compile(r'\[(\d+)/124\] \([^)]+\) (m(\d+)-(\d+)-V(\d+)\.mp4)')
videos_to_fix = []
for m in pat.finditer(log):
    fn, week, mod, vnum = m.group(2), int(m.group(3)), m.group(4), int(m.group(5))
    videos_to_fix.append({'week': week, 'mod': mod, 'vnum': vnum, 'fn': fn})

manifest = []
for v in videos_to_fix:
    # Find pptx
    week_dir = DECKS / f'Semana_{v["week"]}'
    pptx_candidates = list(week_dir.glob(f'm{v["week"]}-{v["mod"]}-V{v["vnum"]}-*.pptx'))
    if not pptx_candidates:
        print(f'  SKIP {v["fn"]}: no pptx')
        continue
    pptx = pptx_candidates[0]
    slide_texts = extract_slide_texts(pptx)
    # Extract script
    md = SCRIPTS / f'm{v["week"]}-{v["mod"]}-heygen-scripts.md'
    text = md.read_text(encoding='utf-8')
    spat = re.compile(rf'## VIDEO {v["vnum"]}\s*[—\-]\s*[^\n]+\n_[^\n]+_\n\n(.+?)(?=\n---\n|\n## VIDEO|\Z)', re.DOTALL)
    sm = spat.search(text)
    if not sm:
        print(f'  SKIP {v["fn"]}: no script section')
        continue
    script = sm.group(1).strip()
    video_key = f'm{v["week"]}-{v["mod"]}-V{v["vnum"]}'
    manifest.append({
        'video_key': video_key,
        'pptx': str(pptx),
        'slide_texts': slide_texts,
        'script': script,
        'num_slides': len(slide_texts)
    })

out = Path(r'C:/Users/giuli/AppData/Local/Temp/matching_manifest.json')
out.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'Manifest: {len(manifest)} videos -> {out}')
print(f'Total slides to match: {sum(m["num_slides"] for m in manifest)}')
