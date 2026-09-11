#!/bin/bash
# Home page hero — two parallax layers.
#
# The client supplied a background plate (rooftop and sky, people removed) and
# the five technicians cut out on transparency. Both are 1788x1006 and register
# exactly, so the layers need no alignment — only web-sized encoding.
#
# The sky plate is fully opaque, so it ships as JPEG. The cut-out needs its
# alpha, and sips can write AVIF with the alpha intact (verified: 53.0%
# transparent in, 53.0% out) at a twentieth of the PNG's weight. A reduced PNG
# rides along for anything that cannot decode AVIF.
set -euo pipefail
cd "$(dirname "$0")/.."

OUT=website/img
mkdir -p "$OUT"

sips -Z 1920 -s format jpeg -s formatOptions 80 \
     _source/encik-beku-hero-sky.png  --out "$OUT/hero-sky.jpg"  >/dev/null
sips        -s format avif -s formatOptions 60 \
     _source/encik-beku-hero-crew.png --out "$OUT/hero-crew.avif" >/dev/null
sips -Z 1024 -s format png \
     _source/encik-beku-hero-crew.png --out "$OUT/hero-crew.png"  >/dev/null

printf 'hero layers:\n'
for f in hero-sky.jpg hero-crew.avif hero-crew.png; do
  printf '  %-16s %s\n' "$f" "$(du -h "$OUT/$f" | cut -f1)"
done
printf '  %-16s %s\n' "combined" "$(du -ch "$OUT"/hero-sky.jpg "$OUT"/hero-crew.avif | tail -1 | cut -f1)"
