# Vendor logo originals — do not edit

The **untouched master artwork** as supplied. These six files are the ultimate
source of truth for the Encik Beku logo. Everything in `svg/`, `distribution/`
and the templates is derived from them.

| File | Ink | Canvas |
|---|---|---|
| `Primary Logo For Light Background.svg` | full colour | 1080×1080 |
| `Primary Logo For Dark Background.svg` | full colour, white wordmark | 1080×1080 |
| `Secondary Logo For Light Background.svg` | full colour | 1080×1080 |
| `Secondary Logo For Dark Background.svg` | full colour, white wordmark | 1080×1080 |
| `Single Colour Logo.svg` | navy `#24366F` | 1080×1080 |
| `Single Colour Logo 2.svg` | white `#FFFFFF` | 1080×1080 |

Verified byte-identical to the originals in
`~/Desktop/Utopia Group Of Companies/Encik Beku/Logo Encik Beku/`.

## Rules

- **Never edit these files.** They are the archival record.
- Never recolour, redraw, or re-export them — see the eight misuse rules in
  [`../CI.md`](../CI.md) §2.9.
- To change anything downstream, edit the build step, not the original.

## Regenerating the kit from these

```bash
./tools/build-logos.sh          # optimize + apply viewBox crops → svg/
./tools/build-distribution.sh   # rasters + vector print PDFs → distribution/
node tools/build-manifest.mjs
node tools/verify.mjs
```

`tools/optimize-svg.py` strips the Adobe Illustrator PGF `<metadata>` blob
(~96% of each file) and asserts that every `path`, `polygon`, `rect` and `g`
survives. Geometry out is byte-identical to geometry in.

## The one deliberate deviation

All four primary/secondary originals are drawn on the **same 1080×1080 square
canvas**. For the *secondary* (horizontal) lockup that leaves roughly 66% of
the canvas empty above and below the artwork, so placing it in a letterhead or
site header renders the logo far smaller than the slot allows.

`build-logos.sh` therefore crops the secondary to `viewBox="0 432 1080 214"` —
its ink band. This is a **window change only**: no path, polygon or rect is
altered, and the file still contains the identical artwork. It does not breach
misuse rule 4 (“do not crop or remove any part of the logo”), because nothing
is removed from the logo — only the empty canvas around it.

If you need the original square framing, use these files directly.
