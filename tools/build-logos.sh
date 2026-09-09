#!/usr/bin/env bash
# Rebuilds svg/logo/ and svg/mark/ from the untouched vendor originals in
# Logo-Encik-Beku/.
#
#   ./tools/build-logos.sh
#
# Geometry is never altered — optimize-svg.py asserts element counts survive.
# The only deliberate change is the secondary crop, explained below.
set -euo pipefail
cd "$(dirname "$0")/.."

SRC=Logo-Encik-Beku
OPT="python3 tools/optimize-svg.py"

echo "Rebuilding svg/logo/ from $SRC/"
$OPT "$SRC/Primary Logo For Light Background.svg"   svg/logo/encik-beku-primary-light.svg
$OPT "$SRC/Primary Logo For Dark Background.svg"    svg/logo/encik-beku-primary-dark.svg
$OPT "$SRC/Secondary Logo For Light Background.svg" svg/logo/encik-beku-secondary-light.svg
$OPT "$SRC/Secondary Logo For Dark Background.svg"  svg/logo/encik-beku-secondary-dark.svg
$OPT "$SRC/Single Colour Logo.svg"                  svg/logo/encik-beku-single-navy.svg
$OPT "$SRC/Single Colour Logo 2.svg"                svg/logo/encik-beku-single-white.svg

echo "Applying viewBox crops (window only — no geometry change)"
python3 - <<'PY'
import re

def recrop(path, x, y, w, h, why):
    s = open(path).read()
    s = re.sub(r'viewBox="[^"]*"', f'viewBox="{x} {y} {w} {h}"', s, count=1)
    s = re.sub(r'width="[\d.]+" height="[\d.]+"', f'width="{w}" height="{h}"', s, count=1)
    open(path, 'w').write(s)
    print(f'  {path:44s} viewBox="{x} {y} {w} {h}"  {why}')

# Secondary: the vendor originals draw the horizontal lockup inside the same
# 1080x1080 square as the primary, leaving ~66% of the canvas empty above and
# below. Placed in a real letterhead or site header that renders the logo
# tiny. Cropping to the ink band is a WINDOW change only — every path is
# untouched — and it is what makes the secondary usable at its intended sizes.
for v in ('light', 'dark'):
    recrop(f'svg/logo/encik-beku-secondary-{v}.svg', 0, 432, 1080, 214, '5:1 lockup band')

# Mark: the shield alone, for favicons and app icons below the 50px primary
# minimum. Measured ink bounds of the shield are y 49.2–820.1, full width.
MARK = [('primary-light', 'mark-light'), ('primary-dark', 'mark-dark'),
        ('single-navy', 'mark-navy'), ('single-white', 'mark-white')]
for src, dst in MARK:
    s = open(f'svg/logo/encik-beku-{src}.svg').read()
    s = re.sub(r'viewBox="[^"]*"', 'viewBox="0 48 1080 774"', s, count=1)
    s = re.sub(r'width="[\d.]+" height="[\d.]+"', 'width="1080" height="774"', s, count=1)
    open(f'svg/mark/encik-beku-{dst}.svg', 'w').write(s)
    print(f'  svg/mark/encik-beku-{dst}.svg'.ljust(46) + 'viewBox="0 48 1080 774"  shield crop')
PY

echo "Done. Next: ./tools/build-distribution.sh && node tools/build-manifest.mjs && node tools/verify.mjs"
