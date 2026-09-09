#!/usr/bin/env bash
# Produces the web-weight booklet PDFs in website/downloads/ from the
# originals in _source/. Originals are never modified.
#
# The source PDFs are 15MB / 5.5MB / 3.1MB — too heavy to hand a customer on
# mobile data. These are re-rendered at 2x and JPEG-72, which holds up on
# screen and at normal print sizes. Point print vendors at _source/ instead.
set -euo pipefail
cd "$(dirname "$0")/.."
BIN="$(mktemp -d)/compress-pdf"
swiftc -O -o "$BIN" tools/compress-pdf.swift
mkdir -p website/downloads
for pair in \
  "encik-beku-company-profile-2026.pdf:encik-beku-company-profile.pdf" \
  "encik-beku-brand-guidelines-2026.pdf:encik-beku-brand-guidelines.pdf" \
  "encik-beku-catalogue-2026.pdf:encik-beku-catalogue.pdf"
do
  src="_source/${pair%%:*}"; dst="website/downloads/${pair##*:}"
  tmp="$(mktemp -t ebpdf).pdf"
  "$BIN" "$src" "$tmp" 2.0 0.72 >/dev/null 2>&1

  # Re-rendering only helps when the source carries oversized embedded images.
  # A PDF that is already photo-compressed comes out LARGER, so keep whichever
  # file is actually smaller and say which one was used.
  if [ "$(stat -f%z "$tmp")" -lt "$(stat -f%z "$src")" ]; then
    cp "$tmp" "$dst"; note="recompressed"
  else
    cp "$src" "$dst"; note="original kept (already optimised)"
  fi
  rm -f "$tmp"
  printf '  %-38s %6s -> %-6s  %s\n' "$(basename "$dst")" \
    "$(du -h "$src" | cut -f1)" "$(du -h "$dst" | cut -f1)" "$note"
done
