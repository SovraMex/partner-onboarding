"""Patch ALL pptx in decks/: replace Material Icons names with Unicode codepoints.
In-place (overwrites originals). Backup goes to decks_backup_pre_iconfix/."""
import re
import shutil
import zipfile
from pathlib import Path

CODEPOINTS = Path(r'C:\Users\giuli\AppData\Local\Temp\material_icons_codepoints.txt')
DECKS = Path(r'C:\Users\giuli\AppData\Local\Temp\guiones\decks')
BACKUP = Path(r'C:\Users\giuli\AppData\Local\Temp\guiones\decks_backup_pre_iconfix')

# Build name -> unicode char map
mapping = {}
for line in CODEPOINTS.read_text(encoding='utf-8').splitlines():
    if not line.strip():
        continue
    name, hex_code = line.split()
    mapping[name] = chr(int(hex_code, 16))

print(f'Loaded {len(mapping)} icon mappings')

RUN_PATTERN = re.compile(
    r'(<a:rPr[^/]*?>(?:(?!</a:rPr>).)*?typeface="Material Icons"(?:(?!</a:rPr>).)*?</a:rPr>\s*<a:t>)([^<]+)(</a:t>)',
    re.DOTALL
)

# 1. Backup
if not BACKUP.exists():
    print(f'Backing up {DECKS} -> {BACKUP}')
    shutil.copytree(DECKS, BACKUP)
    print('Backup done')
else:
    print(f'Backup already exists at {BACKUP} — skipping backup')

# 2. Patch all
total_files = 0
patched_files = 0
total_replacements = 0
unknown_names = set()

for pptx_path in sorted(DECKS.rglob('*.pptx')):
    total_files += 1
    counters = {'reps': 0}
    file_unknowns = []

    def replace(m):
        prefix, text, suffix = m.group(1), m.group(2), m.group(3)
        text_clean = text.strip()
        if text_clean in mapping:
            counters['reps'] += 1
            return prefix + mapping[text_clean] + suffix
        else:
            file_unknowns.append(text_clean)
            return m.group(0)

    # Read all entries
    with zipfile.ZipFile(pptx_path, 'r') as z_in:
        entries = []
        for name in z_in.namelist():
            data = z_in.read(name)
            if name.startswith('ppt/slides/') and name.endswith('.xml'):
                xml = data.decode('utf-8')
                xml_new = RUN_PATTERN.sub(replace, xml)
                entries.append((name, xml_new.encode('utf-8')))
            else:
                entries.append((name, data))

    if counters['reps'] > 0:
        # Rewrite zip in-place
        with zipfile.ZipFile(pptx_path, 'w', zipfile.ZIP_DEFLATED) as z_out:
            for name, data in entries:
                z_out.writestr(name, data)
        patched_files += 1
        total_replacements += counters['reps']
        for u in file_unknowns:
            unknown_names.add(u)

print()
print(f'=== Summary ===')
print(f'Total pptx scanned: {total_files}')
print(f'Files patched: {patched_files}')
print(f'Total icon replacements: {total_replacements}')
print(f'Unknown icon names: {len(unknown_names)}')
if unknown_names:
    print('  Unknowns:', sorted(unknown_names)[:20])
