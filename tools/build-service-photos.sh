#!/bin/bash
# Encik Beku's own work photography lives inside the source PDFs. Pull the
# originals out and write web-sized copies for the website.
#
#   tools/extract-pdf-images.py  — dumps every embedded JPEG
#   this script                  — picks the ones we use, names them by
#                                  service, and resizes with sips (built in)
set -euo pipefail
cd "$(dirname "$0")/.."

RAW=$(mktemp -d)
python3 tools/extract-pdf-images.py "$RAW" _source/encik-beku-catalogue-2026.pdf >/dev/null
OUT=website/img/services
mkdir -p "$OUT"

# extracted-index → published name. Indexes are stable for a given source PDF;
# re-run tools/extract-pdf-images.py and re-check if the PDFs are ever reissued.
pick() {
  local src
  src=$(ls "$RAW"/encik-beku-catalogue-2026-"$1"-*.jpg)
  sips -Z 640 -s format jpeg -s formatOptions 72 "$src" --out "$OUT/$2.jpg" >/dev/null
}

# Named for what the frame actually shows, verified against a contact sheet —
# two were mislabelled on the first pass (30 is a cabinet install, not
# painting; 34 is plasterboard, not cabinetry).
pick 21 aircond            # wall-mounted split unit
pick 22 aircond-service    # ceiling cassette opened for servicing
pick 25 electrical         # wiring a socket box
pick 26 electrical-testing # multimeter on a distribution board
pick 29 plaster-ceiling    # skim-coating a ceiling
pick 30 cabinet            # fitting a kitchen wall cabinet
pick 32 waterproofing      # rendering an exterior ledge
pick 33 wall-finishing     # plastering an interior wall
pick 34 partition          # carrying plasterboard into a stud frame
pick 35 water-protection   # finishing a tiled wall by hand
pick 36 plumbing           # wrench on a basin trap
pick 37 cctv               # mounting a camera
pick 38 invisible-grille   # grille at a high-rise window
pick 39 wall-panel         # fixing fluted timber panelling
pick 40 decking            # laying decking boards

rm -rf "$RAW"
echo "$OUT — $(ls "$OUT" | wc -l | tr -d ' ') photographs, $(du -sh "$OUT" | cut -f1)"
