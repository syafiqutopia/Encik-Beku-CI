#!/usr/bin/env bash
# Rasterizes the locked SVG masters into the distribution PNG family.
#
#   ./tools/build-distribution.sh
#
# Rasters are rendered from svg/ through WebKit, so they are guaranteed to
# match the vector masters exactly. Requires macOS (swiftc + WebKit).
#
# WebP is NOT produced: neither `sips` nor ImageIO on macOS can encode WebP,
# and this kit does not ship a format it cannot verify. Serve the SVG to
# modern browsers and these PNGs as the fallback.
set -euo pipefail
cd "$(dirname "$0")/.."

BIN="$(mktemp -d)/render-html"
swiftc -O -o "$BIN" tools/render-html.swift

OUT=distribution/encik-beku
mkdir -p "$OUT"
STAGE="$(mktemp -d -p . .distbuild-XXXX)"
trap 'rm -rf "$STAGE"' EXIT

emit() {              # emit <svg-path> <basename> <aspect-h-per-w> <width>
  local svg=$1 name=$2 ratio=$3 w=$4
  local h; h=$(python3 -c "print(round($w*$ratio))")
  cat > "$STAGE/p.html" <<HTML
<!doctype html><meta charset="utf-8">
<style>html,body{margin:0;padding:0;background:transparent}
img{display:block;width:${w}px;height:${h}px}</style>
<img src="../$svg">
HTML
  "$BIN" "$STAGE/p.html" "$OUT/${name}-${w}w.png" "$w" "$h" >/dev/null
  printf '  %-42s %5dx%-5d\n' "${name}-${w}w.png" "$w" "$h"
}

echo "Rendering distribution rasters -> $OUT"
for w in 512 1024 2048 3840; do
  emit svg/logo/encik-beku-primary-light.svg   encik-beku-primary-light   1.0    $w
  emit svg/logo/encik-beku-primary-dark.svg    encik-beku-primary-dark    1.0    $w
  emit svg/logo/encik-beku-secondary-light.svg encik-beku-secondary-light 0.1981 $w
  emit svg/logo/encik-beku-secondary-dark.svg  encik-beku-secondary-dark  0.1981 $w
  emit svg/logo/encik-beku-single-navy.svg     encik-beku-single-navy     1.0    $w
  emit svg/logo/encik-beku-single-white.svg    encik-beku-single-white    1.0    $w
done
for w in 256 512 1024; do
  emit svg/mark/encik-beku-mark-light.svg encik-beku-mark-light 0.7167 $w
  emit svg/mark/encik-beku-mark-navy.svg  encik-beku-mark-navy  0.7167 $w
  emit svg/mark/encik-beku-mark-white.svg encik-beku-mark-white 0.7167 $w
done

# ── Vector print PDFs ────────────────────────────────────────────────
# Written by WebKit's PDF writer straight from the SVG, so each file holds
# ONLY the logo — no hidden page furniture, no embedded rasters. (Cropping
# the logo out of the brand-guidelines PDF was tried and rejected: the rest
# of the page survives outside the crop box and shows up in Illustrator.)
PDFBIN="$(mktemp -d)/svg-to-pdf"
swiftc -O -o "$PDFBIN" tools/svg-to-pdf.swift

echo "Rendering vector print PDFs"
"$PDFBIN" svg/logo/encik-beku-primary-light.svg   "$OUT/encik-beku-primary-light-print.pdf"   360 360
"$PDFBIN" svg/logo/encik-beku-secondary-light.svg "$OUT/encik-beku-secondary-light-print.pdf" 504 100
"$PDFBIN" svg/logo/encik-beku-single-navy.svg     "$OUT/encik-beku-single-navy-print.pdf"     360 360

# Guard: a print master containing a raster object defeats the purpose.
for f in "$OUT"/*-print.pdf; do
  if grep -qa "/Image" "$f"; then
    echo "  ERROR: $f contains raster image objects — expected pure vector" >&2
    exit 1
  fi
  printf '  %-42s %s (vector)\n' "$(basename "$f")" "$(du -h "$f" | cut -f1)"
done

echo "Done."
