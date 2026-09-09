# Encik Beku — handoff brief for designers and print vendors

## Copy-paste message

> Hi — here is the locked Encik Beku brand kit (v1.0.0).
>
> Please use the supplied artwork exactly as provided. Place the SVG directly
> in Figma or Illustrator; do not redraw, recolour, stretch, compress, rotate,
> outline, or rearrange it.
>
> - Use **`encik-beku-primary-light.svg`** on white, light or neutral grounds.
> - Use **`encik-beku-primary-dark.svg`** on dark grounds and photography.
> - Use the **secondary (horizontal)** lockup where the space is wide but short —
>   letterheads, website headers, email signatures, banners.
> - Use the **single-colour** files for embroidery, one-ink print and stamps.
>
> Minimum sizes: primary **50px / 12mm** wide, secondary **120px / 24mm** wide.
> Keep clear space of **1× the wordmark cap-height** on all four sides.
>
> Brand colours: Tech Blue `#035CC2` (Pantone 285 C) is primary and should
> occupy about 60% of a layout. French Blue `#1B3F83` (294 C) and Fresh Sky
> `#00B0FC` (2995 C) support at 30%. Frozen Lake `#7BD2F6` (297 C) and Pumpkin
> Spice `#F47F30` (1585 C) accent at 10%.
>
> Typeface is **Satoshi** — Black for headlines, Bold for subheads, Medium for
> body. Font files are in `fonts/`.
>
> Two things that look like mistakes but are not: the logo artwork uses its own
> navy/orange inks that differ slightly from the palette (leave them alone), and
> orange buttons take near-black text rather than white (white fails contrast).
>
> Please flag any existing asset you are unsure about before it goes to print.

---

## Which file do I use?

| Situation | File |
|---|---|
| White / light / neutral ground | `svg/logo/encik-beku-primary-light.svg` |
| Dark ground or photography | `svg/logo/encik-beku-primary-dark.svg` |
| Wide, short space (letterhead, header, banner) | `svg/logo/encik-beku-secondary-light.svg` |
| Wide, short space on dark | `svg/logo/encik-beku-secondary-dark.svg` |
| Embroidery, one-ink print, stamp, engraving | `svg/logo/encik-beku-single-navy.svg` |
| One-ink knockout on a dark ground | `svg/logo/encik-beku-single-white.svg` |
| Favicon, app icon, small avatar (≥24px) | `svg/mark/encik-beku-mark-*.svg` |
| Software that cannot take SVG | `distribution/encik-beku/*.png` (512–3840px) |
| Print vendor wanting vector PDF | `distribution/encik-beku/*-print.pdf` |

**SVG is the master.** The PNGs are conveniences for software that cannot place
vector artwork. Never upscale a PNG.

---

## Non-negotiables

1. **Do not use unapproved colours in the logo.**
2. **Do not place the logo on a background that reduces legibility.**
3. **Do not change the typeface, or recreate or manipulate the wordmark or icon.**
4. **Do not crop or remove any part of the logo.**
5. **Do not outline or create a keyline around the logo.**
6. **Do not rotate the logo.**
7. **Do not distort or warp the logo in any way.**
8. **Do not add a drop shadow or any other effect.**

*(Brand Guidelines p.16 — reproduced verbatim.)*

---

## Colour reference for print

| Name | HEX | CMYK | Pantone | Share |
|---|---|---|---|---|
| Tech Blue | `#035CC2` | 98, 53, 0, 24 | **285 C** | 60% |
| French Blue | `#1B3F83` | 79, 52, 0, 49 | **294 C** | 30% |
| Fresh Sky | `#00B0FC` | 100, 30, 0, 1 | **2995 C** | 30% |
| Frozen Lake | `#7BD2F6` | 50, 15, 0, 4 | **297 C** | 10% |
| Pumpkin Spice | `#F47F30` | 0, 48, 80, 4 | **1585 C** | 10% |

Match to Pantone for spot work. The CMYK values are the documented builds for
process work.

**The logo artwork itself** is drawn in navy `#24366F`, orange `#F67F31` and
sky `#7BD3F7` — slightly different from the palette above, and deliberately so.
When reproducing the logo, match the artwork. When designing the layout around
it, use the palette. Do not reconcile the two.

---

## Before releasing artwork

1. Correct light or dark master for the background it sits on?
2. Logo at or above the minimum size — 50px/12mm primary, 120px/24mm secondary?
3. Clear space of 1× cap-height kept free on all four sides?
4. Nothing recoloured, rotated, stretched, outlined or shadowed?
5. Colours matched to Pantone or the documented CMYK builds?
6. Satoshi used throughout — Black headline, Bold subhead, Medium body?
7. Tech Blue carrying roughly 60% of the composition, orange no more than 10%?
8. Any text on orange, Fresh Sky or Frozen Lake set in near-black, not white?
9. Correct legal entity and registration number on anything statutory?

---

## Questions

Encik Beku Aircond Sdn Bhd (1561739-D)
+6018 929 4628 · encikbekuaircondmy@gmail.com

For anything not covered here, the full specification is in [`CI.md`](CI.md).
