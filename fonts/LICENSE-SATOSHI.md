# Satoshi — licence notice

**Satoshi** is the Encik Beku brand typeface, specified in *Encik Beku Brand
Guidelines* p.21–22. It is designed and released by the **Indian Type Foundry
(ITF)** and distributed through **Fontshare**.

- Foundry: Indian Type Foundry
- Distributor: <https://www.fontshare.com/fonts/satoshi>
- Bundled here: 10 OTF files (Light/Regular/Medium/Bold/Black + matching italics)

## Before you redistribute this folder

The font files in `fonts/` are bundled so the kit works offline and so staff and
vendors never substitute a lookalike. That convenience carries an obligation:

1. **Read the current Fontshare licence** at the link above before publishing
   this repository, mirroring it, or handing the folder to an external vendor.
   Licence terms change; this note is not a substitute for reading them.
2. Fontshare fonts are free for personal and commercial *use*. Redistribution —
   which is what a public repository or a vendor handoff is — is governed by the
   licence text, not by this file.
3. If this repository is ever made public, confirm the redistribution terms
   first. If they do not permit it, delete `fonts/*.otf`, add them to
   `.gitignore`, and point people at the Fontshare download instead. The
   `@font-face` rules in `tokens/tokens.css` keep working either way.
4. Do not modify, rename, subset, or re-sell the font files.

## Weight mapping used by the brand

| Guidelines role | Satoshi weight | CSS `font-weight` |
|---|---|---|
| Headline | Black | 900 |
| Subheadline | Bold | 700 |
| Body text | Medium | 500 |

Light (300) and Regular (400) are bundled for completeness but are **not** part
of the specified hierarchy — see CI.md §6.
