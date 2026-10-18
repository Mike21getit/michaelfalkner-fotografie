#!/usr/bin/env python3
"""Erzeugt Web-Versionen für die Galerie.

Aufruf:  python3 tools/optimize.py <kategorie> bild1.jpg [bild2.jpg ...]
Beispiel: python3 tools/optimize.py travel ~/Bilder/lissabon-01.jpg

Legt img/full/<kategorie>-<name>.webp (max. 2000 px) und
img/thumb/<kategorie>-<name>.webp (max. 800 px) an und gibt die Zeile
aus, die in js/gallery-data.js eingetragen werden muss. Benötigt Pillow.
"""
import os, re, sys
from PIL import Image, ImageOps

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
cat, files = sys.argv[1], sys.argv[2:]
for f in files:
    im = ImageOps.exif_transpose(Image.open(f)).convert("RGB")
    slug = re.sub(r"[^a-z0-9]+", "-", os.path.splitext(os.path.basename(f))[0].lower()).strip("-")
    base = f"{cat}-{slug}"
    sizes = {}
    for folder, edge, q in (("full", 2000, 82), ("thumb", 800, 78)):
        c = im.copy(); c.thumbnail((edge, edge), Image.LANCZOS)
        c.save(os.path.join(root, "img", folder, base + ".webp"), "WEBP", quality=q, method=6)
        sizes[folder] = c.size
    w, h = sizes["full"]
    print(f'      {{ file: "{base}", name: "", w: {w}, h: {h} }},')
