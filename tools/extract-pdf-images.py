#!/usr/bin/env python3
"""Dump the JPEG photographs embedded in the source PDFs.

The Company Profile and Catalogue carry Encik Beku's own photography. Rather
than source stock for the website, pull the originals straight out: a
/DCTDecode image XObject *is* a JPEG file, so the stream bytes are written
out verbatim. Nothing to install — stdlib only.

usage: extract-pdf-images.py <out-dir> <file.pdf> [...]
"""
import re, sys, zlib, pathlib

def images(pdf: bytes):
    for m in re.finditer(rb'<<([^<>]*(?:<<[^>]*>>[^<>]*)*)>>\s*stream\r?\n', pdf):
        d = m.group(1)
        if b'/Image' not in d or b'/DCTDecode' not in d:
            continue
        start = m.end()
        end = pdf.find(b'endstream', start)
        if end == -1:
            continue
        w = re.search(rb'/Width\s+(\d+)', d)
        h = re.search(rb'/Height\s+(\d+)', d)
        blob = pdf[start:end].rstrip(b'\r\n')
        # The Catalogue stacks [/FlateDecode /DCTDecode]; unzip to reach the JPEG.
        if not blob.startswith(b'\xff\xd8'):
            try:
                blob = zlib.decompress(blob)
            except zlib.error:
                continue
        if not blob.startswith(b'\xff\xd8'):
            continue
        yield (int(w.group(1)) if w else 0,
               int(h.group(1)) if h else 0, blob)

out = pathlib.Path(sys.argv[1]); out.mkdir(parents=True, exist_ok=True)
for src in sys.argv[2:]:
    stem = pathlib.Path(src).stem
    data = pathlib.Path(src).read_bytes()
    n = 0
    for w, h, blob in images(data):
        if w * h < 200 * 200:          # skip icons and rules
            continue
        n += 1
        (out / f'{stem}-{n:02d}-{w}x{h}.jpg').write_bytes(blob)
    print(f'{stem}: {n} images')
