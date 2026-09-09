# Encik Beku — Brand CI Kit

Canonical brand identity for **Encik Beku**, Malaysia's air conditioning and
technical services company. One folder that a designer, a staff member, or an
AI agent can be pointed at to produce on-brand work without guessing.

> **Locked v1.0.0 · 2026-08-19 · Encik Beku Aircond Sdn Bhd (1561739-D)**
> Primary Tech Blue `#035CC2` · Typeface Satoshi · 60/30/10 colour ratio

**Read [`CI.md`](CI.md) first.** It is the source of truth; everything else in
this repository is an implementation of it.

---

## What's here

```
.
├── CI.md                       ← the canonical spec. Start here.
├── DESIGN-TEAM-HANDOFF.md      ← copy-paste brief for designers & print vendors
├── brand-kit-manifest.json     ← sha256 + size of every shipped file
│
├── svg/
│   ├── logo/                   6 locked masters (primary/secondary/single × light/dark)
│   └── mark/                   icon-only shield for favicons & app icons
│
├── tokens/
│   ├── tokens.source.mjs       ← the ONLY place a brand value is authored
│   └── tokens.css              zero-build CSS drop-in
│
├── code/
│   ├── tokens/                 tokens.css · tokens.ts · tailwind.preset.ts
│   ├── ui/                     Button · Card · Chip · Logo (React, no deps)
│   ├── templates/              letterhead · invoice · quotation (A4, print-ready)
│   └── email/signature.html    Outlook-safe email signature
│
├── fonts/                      Satoshi (10 weights) + @font-face + licence notice
├── distribution/encik-beku/    PNG exports 512–3840px + vector print PDFs
│
├── website/                    ← the live site: hub + 3 sections + booklets
│   ├── index · about · brand · catalog
│   └── downloads/              the three PDF booklets
│
├── tools/                      token builder, SVG optimizer, renderers, site build
└── _source/                    original Brand Guidelines, Company Profile & Catalogue PDFs
```

## The website

Three sections, each also a downloadable booklet — see
[`website/README.md`](website/README.md).

| Section | For | Booklet |
|---|---|---|
| About us | Customers, partners | Company Profile · 10pp |
| Brand guideline | Designers, freelancers, print vendors | Brand Guideline · 22pp |
| Catalogue &amp; pricelist | Customers | Catalogue · 34pp |

```bash
python3 -m http.server 8080     # then open http://localhost:8080/website/
```

---

## Three ways to adopt

### 1. CSS only — no build step

```html
<link rel="stylesheet" href="fonts/fonts.css">
<link rel="stylesheet" href="tokens/tokens.css">
```

```css
.cta {
  background: var(--eb-bg-accent);
  color: var(--eb-on-accent);        /* near-black — NOT white. See CI.md §6.3 */
  border-radius: var(--eb-radius-sm);
  font-family: var(--eb-font-sans);
  font-weight: var(--eb-fw-bold);
}
```

Ready-made type classes ship too: `.eb-display`, `.eb-h1` … `.eb-h4`,
`.eb-body`, `.eb-body-sm`, `.eb-caption`, `.eb-eyebrow`, `.eb-price`.

### 2. Tailwind preset

```ts
// tailwind.config.ts
import encikBeku from './code/tokens/tailwind.preset';
export default { presets: [encikBeku], content: ['./src/**/*.{ts,tsx}'] };
```

Then `bg-tech-blue`, `text-french-blue`, `bg-pumpkin`, `font-display`,
`rounded-md`, `shadow-brand` all work.

### 3. React components

```tsx
import { Button, Card, Chip, Logo } from './code';

<Logo variant="secondary" theme="light" width={220} />

<Card variant="elevated" hoverable>
  <Chip variant="success" dot>Completed</Chip>
  <Button variant="whatsapp" href="https://wa.me/60189294628">
    Chat on WhatsApp
  </Button>
</Card>
```

Components have no runtime dependencies beyond React 18+. Load `tokens.css` and
Satoshi, or the identity drifts to system fonts.

---

## The five things people get wrong

1. **"Beku" means frozen — this is not a frozen-food company.** It is air
   conditioning. The name means "Mr Freeze" and refers to cooling.
2. **The logo's colours are not the brand palette.** The artwork uses its own
   inks and contains no Tech Blue. Never recolour the logo to "match". See
   [CI.md §3](CI.md).
3. **White text on orange fails accessibility.** Pumpkin Spice CTAs take
   near-black ink. This looks wrong and is right. See [CI.md §6.3](CI.md).
4. **Body copy is Satoshi Medium 500**, not Regular 400.
5. **Tech Blue is 60% of a layout.** Orange is 10%, and it is the only warm
   colour in the system.

---

## Rebuilding

```bash
node tools/build-tokens.mjs          # regenerate all token formats from source
./tools/build-logos.sh               # re-optimize logo SVGs from Logo-Encik-Beku/
./tools/build-distribution.sh        # re-render PNG/PDF exports from the SVG masters
./tools/build-downloads.sh           # web-weight booklet PDFs from _source/
node tools/build-site-preview.mjs    # single-file site preview
node tools/build-manifest.mjs        # refresh sha256 manifest (run last)
node tools/verify.mjs                # 92 checks — contrast, parity, assets, manifest
```

`verify.mjs` exits non-zero on failure, so it can gate a commit. It does **not**
type-check the React components — no TypeScript compiler is installed here. It
does verify that every name `code/index.ts` re-exports actually exists.

Never hand-edit `tokens/tokens.css` or anything in `code/tokens/` — they are
generated, and the next build overwrites them. Edit
[`tokens/tokens.source.mjs`](tokens/tokens.source.mjs) instead.

macOS only for the render tools (they use `swiftc` and WebKit).

---

## Contact

Encik Beku Aircond Sdn Bhd (1561739-D)
5, Jln Bukit Badong 26/4, Hicom Industrial Estate, 40400 Shah Alam, Selangor
+6018 929 4628 · encikbekuaircondmy@gmail.com · www.serviceaircond.my
