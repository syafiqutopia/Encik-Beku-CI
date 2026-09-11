# SVG masters

Locked vector artwork. **These are the authoritative logo files** — everything
in `distribution/` is rendered from them.

## `logo/`

| File | Aspect | Use |
|---|---|---|
| `encik-beku-primary-light.svg` | 1:1 | Stacked logo on light/neutral grounds |
| `encik-beku-primary-dark.svg` | 1:1 | Stacked logo on dark grounds |
| `encik-beku-secondary-light.svg` | 5:1 | Horizontal lockup, light grounds |
| `encik-beku-secondary-dark.svg` | 5:1 | Horizontal lockup, dark grounds |
| `encik-beku-single-navy.svg` | 1:1 | One-ink reproduction |
| `encik-beku-single-white.svg` | 1:1 | One-ink knockout |

All six vendor originals are drawn on the same `0 0 1080 1080` canvas. The
primary and single masters keep it. The secondary masters are re-cropped by
`tools/build-logos.sh` to `viewBox="0 432 1080 214"` — the ink band of the
horizontal lockup.

**That crop is a decision made by this kit, not by the original designer.** In
the vendor files the horizontal lockup floats in the square canvas with ~66%
empty space above and below, which renders it far too small in any letterhead
or site header. The crop changes only the visible window — every path is
untouched — so it does not breach misuse rule 4. Do not renormalize it to the
origin; regenerate with `./tools/build-logos.sh` instead.

## `mark/`

Icon-only shield, cropped from the primary master to `viewBox="0 48 1080 774"`.
**The geometry is untouched** — only the visible window changes, so this is not
a redraw and does not breach misuse rule 4.

For favicons, app icons, and avatars where the Encik Beku name is already
visible. Minimum **24px**; at 16px use `encik-beku-mark-navy.svg`. It never
replaces the full logo where the name has to be legible.

## Colours in these files

The artwork is drawn in `#24366F` (navy), `#F67F31` (orange) and `#7BD3F7`
(sky). These are **logo inks**, not the brand palette, and they must not be
changed — see [CI.md §3](../CI.md).

## Why these files are small

The supplied masters were ~825KB each, almost entirely an Adobe Illustrator PGF
`<metadata>` blob — editor round-trip data with no rendering effect.
`tools/optimize-svg.py` strips it, giving 15–42KB files with **byte-identical
geometry**, verified by an element-count assertion that aborts the build if any
shape is lost.

Everything here is generated from the vendor originals in
[`../Logo-Encik-Beku/`](../Logo-Encik-Beku/). Do not hand-edit these files —
rebuild instead:

```bash
./tools/build-logos.sh
```

Do not "optimise" further by merging same-fill shapes into single paths. Subpath
winding direction is not consistent across elements in this artwork, and merging
punches holes in it — an early attempt silently deleted the `I` in ENCIK.
