# Source documents

The authoritative documents this kit was built from. **Everything in `CI.md` is
traceable to a page in one of these two files.**

| File | Pages | Contains |
|---|---|---|
| `encik-beku-brand-guidelines-2026.pdf` | 22 | Logo system, colour philosophy and palette, typography |
| `encik-beku-company-profile-2026.pdf` | 10 | Business facts, vision & mission, branches, services, proof points, sub-brands, registered entities |

Citations in `CI.md` use *(BG p.n)* and *(CP p.n)*.

## Page renders

`page-renders/` holds a PNG of every page plus the extracted text layer. It is
**gitignored** — it is derived, roughly 9MB, and regenerable:

```bash
swiftc -O -o /tmp/render-pdf tools/render-pdf.swift
/tmp/render-pdf _source/encik-beku-brand-guidelines-2026.pdf _source/page-renders 1.4
/tmp/render-pdf _source/encik-beku-company-profile-2026.pdf  _source/page-renders 1.4
```

macOS only — the tool uses PDFKit.

## If these documents are superseded

Add the new PDF here, do **not** delete the old one, and record the change in
the `CI.md` decisions log with what actually changed. The whole value of this
folder is that a disputed brand decision can be traced back to the page it came
from.
