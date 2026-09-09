---
name: Encik Beku Corporate CI (Brand Identity Spec)
description: Single source of truth for the Encik Beku brand identity — logo, colour, typography, components, voice, accessibility. Locked v1.0.0 2026-08-19.
type: reference
version: 1.0.0
locked: 2026-08-19
owner: Encik Beku Aircond Sdn Bhd (1561739-D)
sources:
  - Encik Beku Brand Guidelines.pdf (2026) — 22pp
  - Encik Beku Company Profile.pdf (2026) — 10pp
---

# Encik Beku Brand Identity

> One technician. One shield. One promise: fast, reliable, affordable.
>
> This document is the canonical reference. Where it disagrees with a slide deck,
> a vendor mockup, or an old file on someone's desktop, **this document wins**.

Every rule below is traceable to a page of the source PDFs, archived in
[`_source/`](_source/). Page references appear as *(BG p.n)* for the Brand
Guidelines and *(CP p.n)* for the Company Profile.

---

## 0 · Quick reference card

| Element | Value |
|---|---|
| **Company** | Encik Beku — air conditioning & technical services, Malaysia |
| **Primary logo** | Technician-in-shield + `ENCIK BEKU` wordmark, stacked |
| **Secondary logo** | Same elements, horizontal lockup |
| **Primary colour** | Tech Blue `#035CC2` — 60% of any layout |
| **Secondary** | French Blue `#1B3F83` · Fresh Sky `#00B0FC` — 30% |
| **Accent** | Frozen Lake `#7BD2F6` · Pumpkin Spice `#F47F30` — 10% |
| **Typeface** | Satoshi — Black 900 headline · Bold 700 subhead · Medium 500 body |
| **Border radius** | 8 / 12 / 999 (button / card / pill) |
| **Minimum logo width** | 50px primary · 120px secondary (screen) · 12mm / 24mm (print) |
| **Clear space** | 1× wordmark cap-height on all four sides |
| **Voice** | Fast · Practical · Trustworthy |
| **Languages** | EN · BM — one language per page |
| **Never** | Recolour, redraw, rotate, distort, outline, or add effects to the logo |

---

## 1 · Brand overview

### 1.1 About *(BG p.5 · CP p.3)*

Encik Beku is an established Malaysian service company specialising in air
conditioning, with a presence across Kuala Lumpur / Shah Alam (HQ), Negeri
Sembilan, Johor Bahru, Melaka and Penang. It provides complete aircond
solutions — installation, repair, maintenance and supply — for residential and
commercial clients.

Beyond air conditioning, Encik Beku offers technical and renovation services
under dedicated sub-brands, forming a one-stop solution for homes and
businesses. It is supported by dedicated service websites and digital
marketing.

> **Note on the name.** *Beku* means "frozen" in Malay, and *Encik* is a
> courtesy title — "Mr". The name reads as "Mr Freeze" and refers to **cooling**,
> not frozen food. Anyone briefing a designer or an AI on this brand should say
> so explicitly; it is the single most common misreading.

### 1.2 Vision *(BG p.6 · CP p.4)*

> To become a leading one-stop air conditioning and technical service provider
> in Malaysia, recognized for fast response, reliable service, and practical
> solutions for homes and businesses.

### 1.3 Mission *(BG p.6 · CP p.4)*

> To deliver affordable and high-quality services supported by skilled
> workmanship, professional service standards, and a smooth customer experience
> across every project and touchpoint.

### 1.4 Brand values *(BG p.7)*

| Value | Means |
|---|---|
| **Reliability** | Consistent, dependable service — every job completed with professionalism and care |
| **Speed & efficiency** | Fast response, efficient execution, minimum waiting |
| **Affordability** | Competitive and fair pricing, quality service accessible to more customers |
| **Quality workmanship** | High standards on every service, long-lasting results |
| **Customer-focused** | Understand the need, deliver a practical solution, keep it hassle-free |

### 1.5 Proof points *(CP p.7)*

These are the claims the brand is entitled to make. Do not invent new ones.

| Claim | Detail |
|---|---|
| **24 hours** | Response within 5 minutes; same-day service; installation completed within 24 hours |
| **12 years** | Experience in technical and maintenance solutions, residential and commercial |
| **4.9 stars** | Google rating across more than 1.3k reviews |
| **17+** | Dedicated service websites |
| **6 branches** | Shah Alam (HQ) · Sepang · George Town · Butterworth · Melaka · Johor Bahru |

### 1.6 Services *(CP p.6)*

Air conditioning solutions · Electrical & wiring · CCTV installation ·
Plumbing & water pump · Cabinet installation · Painting services ·
Plaster ceiling & partition · Invisible grille installation · Wall panel &
decking · Epoxy flakes & waterproofing.

### 1.7 Legal entities *(CP p.9)*

Statutory correspondence must carry the sending entity's registration number.

| Entity | Registration | Covers |
|---|---|---|
| Encik Beku Aircond Sdn Bhd | 1561739-D | HQ Shah Alam, Selangor; also Penang and Melaka branches |
| Encik Beku Aircond N9 Sdn Bhd | 1611987-U | Negeri Sembilan branch (Sepang, Selangor) |
| Encik Beku Aircond Selatan Sdn Bhd | 1611766-A | Johor branch (Johor Bahru) |

Main line **+6018 929 4628** · **encikbekuaircondmy@gmail.com**

### 1.8 Sub-brands — out of scope for v1.0

Encik Beku operates roughly twelve service sub-brands, each with its own logo,
website and phone number *(CP p.8)*: Wiring Rumah Anda, Bang Guard, Epoxy
Flakes, Cabiné, Cat Rumah, Mr Ceiling, Encik Paip, Partition, InvisiGuard, Wall
Panel, Decking, and the plumbing line.

**This CI covers the Encik Beku parent brand only.** The sub-brand logos vary
widely in construction and colour and none of them currently follow this spec.
Bringing them into a coherent endorsement system is a phase-2 exercise and
should not be improvised in the meantime. Until then, do not apply Encik Beku
colours or type to a sub-brand asset, and do not lock a sub-brand logo up with
the Encik Beku logo without a decision recorded here.

---

## 2 · Logo system

### 2.1 Rationale *(BG p.9)*

The logo carries four elements, each with a fixed meaning:

| Element | Meaning |
|---|---|
| **Technician figure** | Skilled · Professional |
| **Radiating lines** | Energy · Performance |
| **Shield** | Trust · Protection |
| **Bold typography** | Confidence · Clarity |

The composition reads as skilled workmanship and dependable service, and its
structured, modular shape reflects the brand's ability to operate across many
service areas under dedicated sub-brands.

### 2.2 Primary logo *(BG p.10)*

The stacked technician-in-shield above the `ENCIK BEKU` wordmark. **This is the
default.** Use it for the majority of applications — signage, uniforms,
vehicles, social avatars, documents, anywhere the brand needs full presence.

### 2.3 Secondary logo *(BG p.11)*

The horizontal lockup — shield at left, wordmark at right. Use it where the
primary is too tall: letterheads, email signatures, website headers, banners,
and any wide-but-short space.

### 2.4 Variations *(BG p.12)*

| Background | File |
|---|---|
| Light / neutral | `*-light.svg` — navy wordmark |
| Dark / low contrast | `*-dark.svg` — white wordmark and white outline |

### 2.5 Single-colour logo *(BG p.15)*

For visibility or reproduction limits — embroidery, one-ink print, engraving,
stamps, or over busy photography. Only neutral black/white or an approved
palette colour may be used. Files: `encik-beku-single-navy.svg`,
`encik-beku-single-white.svg`.

### 2.6 Icon-only mark — extension to the source guidelines

The source guidelines define no mark for sizes below the 50px primary minimum,
which leaves favicons, app icons and small avatars unspecified. This kit adds
`svg/mark/` — the shield cropped from the primary master via `viewBox`, with
**no change to the artwork itself**. Measured ink bounds of the shield are
y 49.2–820.1 on the 1080 canvas, full width.

- Use only where the Encik Beku name is already visible or unambiguous.
- Minimum **24px**. Below that the technician's linework fills in; at 16px use
  `encik-beku-mark-navy.svg`, which survives best.
- It does **not** replace the primary logo. If the name must be legible, use
  the full logo.

### 2.7 Clear space *(BG p.13)*

Keep clear space equal to **1× the cap-height of the wordmark** on all four
sides. No text, graphic, rule, or photograph edge may enter it.

### 2.8 Minimum size *(BG p.14)*

| | Screen | Print |
|---|---|---|
| Primary logo | 50 px wide | 12 mm wide |
| Secondary logo | 120 px wide | 24 mm wide |

`code/ui/Logo.tsx` warns in development when either minimum is breached.

### 2.9 Misuse — the eight prohibitions *(BG p.16)*

1. Do not use unapproved colours in the logo
2. Do not place the logo on a background that reduces legibility
3. Do not change the typeface, or recreate or manipulate the wordmark or icon
4. Do not crop or remove any part of the logo
5. Do not outline or create a keyline around the logo
6. Do not rotate the logo
7. Do not distort or warp the logo in any way
8. Do not add a drop shadow or any other effect

Always place the supplied file. Never redraw it, and never rebuild it from a
screenshot.

---

## 3 · Logo inks vs. brand palette — read this before touching colour

**The approved logo artwork is not drawn in the documented brand palette.** This
is a real, measured discrepancy, and it is locked as-is rather than corrected,
because misuse rule 1 forbids recolouring the logo.

| As built in the artwork | Nearest documented palette colour | Status |
|---|---|---|
| navy `#24366F` | French Blue `#1B3F83` | **Genuinely different** — not a rounding artefact |
| orange `#F67F31` | Pumpkin Spice `#F47F30` | 1-digit drift, visually identical |
| sky `#7BD3F7` | Frozen Lake `#7BD2F6` | 1-digit drift, visually identical |
| *(absent)* | Tech Blue `#035CC2` | **Tech Blue does not appear in the logo at all** |

### The rule

- **Logo inks** (`--eb-ink-*`) reproduce the logo. Use them only when
  reconstructing logo artwork — for example specifying a vinyl or embroidery
  colour. Never for layout, type, backgrounds, or UI.
- **Brand palette** (`--eb-tech-blue` and friends) drives everything else.
- Never substitute one for the other, and never "harmonise" the logo to the
  palette. If the two ever need to reconcile, that is a new logo release with a
  version bump and a decision recorded in §11 — not a quiet edit.

The master artwork also contained two near-identical navies, `#24366F` and
`#23376F`. These are normalised to `#24366F` in the shipped SVGs; the
difference is invisible and was an export artefact.

---

## 4 · Colour system

### 4.1 Philosophy *(BG p.18)*

The system is built around shades of blue, complemented by a bold orange
accent. Blue — from Tech Blue and French Blue through Fresh Sky and Frozen Lake
— represents cooling, reliability and performance, reinforcing expertise in
delivering effective and consistent solutions. Pumpkin Spice is used
strategically to highlight key actions and important information, adding
contrast and energy.

### 4.2 Palette *(BG p.19)*

| Role | Name | HEX | RGB | CMYK | Pantone | Share |
|---|---|---|---|---|---|---|
| **Primary** | Tech Blue | `#035CC2` | 3, 92, 194 | 98, 53, 0, 24 | 285 C | **60%** |
| Secondary | French Blue | `#1B3F83` | 27, 63, 131 | 79, 52, 0, 49 | 294 C | 30% |
| Secondary | Fresh Sky | `#00B0FC` | 0, 176, 252 | 100, 30, 0, 1 | 2995 C | 30% |
| Accent | Frozen Lake | `#7BD2F6` | 123, 210, 246 | 50, 15, 0, 4 | 297 C | 10% |
| Accent | Pumpkin Spice | `#F47F30` | 244, 127, 48 | 0, 48, 80, 4 | 1585 C | 10% |
| Neutral | White | `#FFFFFF` | — | — | — | text & callout grounds |
| Neutral | Black | `#0B0E12` | 11, 14, 18 | — | — | text & callout grounds |

### 4.3 The 60/30/10 ratio

Tech Blue dominates. French Blue and Fresh Sky support and add depth. Frozen
Lake and Pumpkin Spice highlight calls to action and important information
*sparingly* — a layout where orange competes with blue is off-brand.

Pumpkin Spice is the **only** warm colour in the system. Spend it deliberately.

### 4.4 Colours that may not carry text

Three palette colours are too light to hold body text on white. This is
measured, not stylistic — see §9.

| Colour | On white | Verdict |
|---|---|---|
| Fresh Sky `#00B0FC` | 2.44:1 | Fills, graphics and rules only — never text on white |
| Frozen Lake `#7BD2F6` | 1.69:1 | Fills and tints only |
| Pumpkin Spice `#F47F30` | 2.65:1 | Fills and CTA grounds only — never text on white |

For orange **text** or links on a light ground, use `--eb-pumpkin-ink`
`#B84E06` (5.08:1). It is a darkened Pumpkin Spice, not a new brand colour, and
it exists solely so orange text can be accessible.

### 4.5 Status colours — outside the brand palette by design

The brand palette contains exactly one warm colour, so "warning" and "error"
would be the same swatch and a customer could not tell a caution from a
failure. A service business issuing invoices, job statuses and booking
confirmations needs that distinction. These four are therefore **functional**
colours, not brand colours — use them only for state, never for decoration.

| Token | HEX | On white | Use |
|---|---|---|---|
| `--eb-success` | `#0D8149` | 4.94:1 | Completed, paid, confirmed |
| `--eb-warning` | `#B54708` | 5.43:1 | Pending, unpaid, needs attention |
| `--eb-danger` | `#B42318` | 6.57:1 | Failed, overdue, destructive actions |
| `--eb-info` | `#1B3F83` | 10.07:1 | Neutral information (reuses French Blue) |
| `--eb-whatsapp` | `#25D366` | — | "Chat on WhatsApp" CTAs only, always with the glyph |

---

## 5 · Typography *(BG p.21–22)*

### 5.1 Typeface

**Satoshi**, by the Indian Type Foundry, distributed via Fontshare. A modern
geometric sans with clean structure and high readability across digital and
print. There is **no second family** — Satoshi does headlines, body and
numerals alike.

### 5.2 Hierarchy

| Role | Weight | Guidance |
|---|---|---|
| **Headline** | Satoshi **Black 900** | Commands attention; the primary entry point to the content |
| **Subheadline** | Satoshi **Bold 700** | Supports the main idea, guides the reader through the layout |
| **Body text** | Satoshi **Medium 500** | All body copy — clarity and comfort in longer text |

Light 300 and Regular 400 ship in `fonts/` for completeness but are **not**
part of the specified hierarchy. Body copy is Medium 500, not Regular 400 —
this is a deliberate choice in the source guidelines and it is what gives the
brand its solid, confident texture. Do not substitute Regular.

### 5.3 Scale

| Token | Size | Typical use |
|---|---|---|
| `--eb-text-5xl` | 84px | Display / hero |
| `--eb-text-4xl` | 64px | Page headline |
| `--eb-text-3xl` | 48px | H1 |
| `--eb-text-2xl` | 36px | H2 |
| `--eb-text-xl` | 28px | H3 |
| `--eb-text-lg` | 22px | H4 / lead |
| `--eb-text-md` | 18px | Large body |
| `--eb-text-base` | 16px | Body |
| `--eb-text-sm` | 14px | Small / captions |
| `--eb-text-xs` | 12px | Legal, footnotes, chips |

### 5.4 Letter-spacing and line-height

| Context | Tracking | Leading |
|---|---|---|
| Display / headline | `-0.02em` | 1.02 |
| H2 / H3 | `-0.01em` | 1.18 |
| Body | `0` | 1.65 |
| Eyebrow / overline (UPPERCASE) | `0.08em` | 1.5 |

### 5.5 Fallback

`system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`. Satoshi will not
load in email clients — that is expected and the signature template accounts
for it. Everywhere else, load the font.

---

## 6 · Components

### 6.1 Radius

| Token | Value | Use |
|---|---|---|
| `--eb-radius-xs` | 4px | Chips on dense tables |
| `--eb-radius-sm` | 8px | Buttons, inputs |
| `--eb-radius-md` | 12px | Cards, panels, modals |
| `--eb-radius-lg` | 18px | Feature panels |
| `--eb-radius-xl` | 26px | Hero blocks |
| `--eb-radius-pill` | 999px | Badges, chips, tags |

### 6.2 Buttons

Three sizes, fixed in px so text cannot wrap and icons cannot scale with the
font size.

| Size | Height | Padding-x | Font | Icon | Use |
|---|---|---|---|---|---|
| SM | 34px | 14px | 13px | 14px | Table and inline actions |
| **MD** ★ | 44px | 22px | 15px | 18px | Default — most cases |
| LG | 54px | 30px | 17px | 20px | Hero, landing pages, quotations |

| Variant | Ground | Ink | Use |
|---|---|---|---|
| **Primary** | Tech Blue `#035CC2` | White | The main action on a surface |
| **Accent** | Pumpkin Spice `#F47F30` | **Near-black `#0B0E12`** | The one high-urgency CTA per view |
| **Ghost** | Transparent + border | Tech Blue | Secondary action |
| **WhatsApp** | `#25D366` | Near-black | "Chat on WhatsApp" only, with the glyph |

Anti-wrap rules are mandatory:

```css
.btn { display:inline-flex; align-items:center; justify-content:center;
       white-space:nowrap; flex-shrink:0; border-radius:8px; }
.btn .icon { flex-shrink:0; }
```

### 6.3 Accent and WhatsApp buttons take near-black ink, never white

White on Pumpkin Spice is **2.65:1** and fails WCAG AA at every text size.
Near-black on Pumpkin Spice is **7.30:1**. This looks unusual next to the
white-on-blue primary button and is corrected back to white by well-meaning
designers roughly every time. It is not a mistake. Leave it.

### 6.4 Chips

Pill radius, 12px Bold, 5px × 12px padding, 1px border. An optional 6px leading
dot gives a non-colour cue alongside the colour one. Status chips use the §4.5
status colours at 10% tint with a 24% border.

### 6.5 Inputs

8px radius, 1px `--eb-border-2` border, white fill, 16px Medium. Focus: 1px
Tech Blue border plus a 3px `rgba(3,92,194,0.35)` ring.

### 6.6 Never tint Pumpkin Spice over a blue field

Orange at reduced opacity over Tech Blue desaturates to a grey-brown that reads
as a printing fault, not as a brand motif. This was hit twice independently —
once on the quotation cover band, once on the landing-page hero.

- Motifs and textures on a blue field: **Frozen Lake or white**.
- Pumpkin Spice on blue is acceptable only at **full opacity in a solid
  shape** — a CTA button, a hard edge, a chip.

It also protects the 10% accent budget: if orange is spent on background
texture, it can no longer make the CTA the loudest thing on the surface.

### 6.7 Elevation

Shadows are cool-tinted — the brand sits on light, blue-leaning surfaces, so
neutral grey shadows look muddy against it.

`--eb-shadow-xs` → `sm` → `md` → `lg`, plus `--eb-shadow-brand` and
`--eb-shadow-accent` for coloured lift under brand-filled elements.

---

## 7 · Motion

| Aspect | Value |
|---|---|
| Hover | 140ms |
| Standard transition | 220ms |
| Layout / page | 420ms |
| Easing | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Hover state | `translateY(-2px)` + shadow steps up |
| Reduced motion | Honoured — all durations collapse to 0ms |

Motion should feel quick and mechanical. The brand promise is *speed*; slow,
bouncy, decorative animation contradicts it.

---

## 8 · Voice

### 8.1 Three principles

| Principle | Means |
|---|---|
| **Fast** | Lead with the answer. Time, price, availability — up front, not buried |
| **Practical** | Plain words. A homeowner with a broken aircond in 34°C heat is not reading marketing copy |
| **Trustworthy** | Concrete and verifiable. Real numbers, real warranties, no vague superlatives |

### 8.2 Examples

| Principle | Say this | Not this |
|---|---|---|
| Fast | "Same-day service. We'll confirm your slot in 5 minutes." | "We endeavour to respond to all enquiries in a timely manner." |
| Practical | "Chemical wash for a 1.0HP wall unit — RM80 per unit." | "Comprehensive maintenance solutions tailored to your requirements." |
| Trustworthy | "12 months workmanship warranty. 4.9 stars from 1,300+ reviews." | "Industry-leading quality you can trust." |

### 8.3 Language

- **One language per page** — English or Bahasa Malaysia, never mixed mid-page.
- Malay is correct and expected for customer-facing service copy; several
  sub-brands are Malay-named already.
- Keep company names, entity numbers and addresses exactly as registered,
  in any language.

---

## 9 · Accessibility

All ratios below are measured with the WCAG 2.1 relative-luminance formula.
WCAG AA requires **4.5:1** for body text, **3:1** for large text (18.66px bold
or 24px regular) and for UI component boundaries.

### 9.1 Verified pairs

| Foreground | Background | Ratio | Body | Large / UI |
|---|---|---|---|---|
| Tech Blue `#035CC2` | White | 6.34:1 | ✅ | ✅ |
| French Blue `#1B3F83` | White | 10.07:1 | ✅ | ✅ |
| Near-black `#0B0E12` | White | 19.34:1 | ✅ | ✅ |
| Grey `#6B7785` | White | 4.56:1 | ✅ | ✅ |
| White | Tech Blue | 6.34:1 | ✅ | ✅ |
| White | French Blue | 10.07:1 | ✅ | ✅ |
| Near-black | Pumpkin Spice | 7.30:1 | ✅ | ✅ |
| Near-black | Fresh Sky | 7.94:1 | ✅ | ✅ |
| Near-black | Frozen Lake | 11.41:1 | ✅ | ✅ |
| French Blue | Frozen Lake | 5.94:1 | ✅ | ✅ |
| **White** | **Pumpkin Spice** | **2.65:1** | ❌ | ❌ |
| **White** | **Fresh Sky** | **2.44:1** | ❌ | ❌ |
| **Fresh Sky** | **White** | **2.44:1** | ❌ | ❌ |
| **Pumpkin Spice** | **White** | **2.65:1** | ❌ | ❌ |
| **Frozen Lake** | **White** | **1.69:1** | ❌ | ❌ |

### 9.2 What this means in practice

1. **Never place white text on Pumpkin Spice or Fresh Sky.** Use near-black.
2. **Never set text in Pumpkin Spice, Fresh Sky or Frozen Lake on white.** For
   orange text use `--eb-pumpkin-ink` `#B84E06`.
3. Tech Blue and French Blue are the only brand colours safe for body text on
   white.
4. Grey `#6B7785` passes at 4.56:1 — but only just. Do not lighten it.

### 9.3 Checklist

- [ ] Body text meets 4.5:1; large text and UI borders meet 3:1
- [ ] Colour is never the sole carrier of meaning — status chips pair colour with a dot and a word
- [ ] Focus is visible: 1px Tech Blue border + 3px `rgba(3,92,194,0.35)` ring
- [ ] The logo has an accessible name (`alt="Encik Beku"`), or `alt=""` when the name is already in adjacent text
- [ ] Interactive targets are at least 44×44px (the MD button height is 44px for this reason)
- [ ] `prefers-reduced-motion` is honoured
- [ ] Text over photography sits on a solid or scrimmed plate, never bare

---

## 10 · Application matrix

| Surface | Logo | Theme | Notes |
|---|---|---|---|
| Letterhead | Secondary, light | Light | 60/30/10 rule bar at the head; entity numbers in the footer |
| Invoice / quotation | Secondary | Light | Status chips use §4.5 status colours |
| Email signature | Secondary PNG | Light | Arial fallback — Satoshi will not load in mail clients |
| Website header | Secondary, light | Light | Min 120px wide |
| Favicon / app icon | `svg/mark/` | Either | Min 24px; navy single-colour at 16px |
| Social avatar | Primary, or mark in a clearly-owned context | Either | Never crop the primary to fit a circle |
| Uniform / embroidery | Single colour | — | One ink; navy or white |
| Vehicle livery | Primary or secondary | Light on white body | Respect 1× cap-height clear space against body panel lines |
| Signage | Primary | Either | Check the 12mm print minimum at final viewing distance |
| Quotation cover band | Secondary, dark | Tech Blue field | The one place a full-bleed brand field is used |

---

## 11 · Decisions log

- **2026 (source, BG v1.0)** — Brand Guidelines issued: logo system (primary,
  secondary, variations, clear space, minimum size, single colour, 8 misuse
  rules), colour philosophy and 60/30/10 palette with HEX/RGB/CMYK/Pantone,
  Satoshi typography with a three-weight hierarchy.
- **2026 (source, CP v1.0)** — Company Profile issued: business facts, vision
  and mission, 6 branches, 10 service lines, 4 proof points, 12 sub-brands,
  3 registered entities.
- **2026-08-19 (v1.0.0 — CI kit built)** — Source PDFs converted into a
  machine-readable kit: token formats, SVG masters, React components, business
  templates, distribution exports. Decisions taken during that conversion:
  - **Vendor originals adopted as the build source.** The kit was first built
    from a third-party "Encik Beku Design System" zip. Those files were later
    hash-compared against the untouched vendor originals now in
    `Logo-Encik-Beku/`: the drawing geometry is **identical** and every ink
    matches, but the zip had pre-applied the secondary crop and differed in
    metadata. The build now runs from the vendor originals so provenance is
    unambiguous.
  - **Logo inks locked as-built, separate from the brand palette.** The artwork
    uses `#24366F` / `#F67F31` / `#7BD3F7` and contains no Tech Blue. Because
    misuse rule 1 forbids recolouring, the artwork was left untouched and the
    inks were given their own token namespace. See §3.
  - **`#23376F` normalised to `#24366F`.** The master carried two navies one
    digit apart; visually identical, an export artefact.
  - **Semantic status colours added outside the brand palette.** The palette has
    one warm colour, so warning and error were indistinguishable. Added
    success / warning / danger / info, all ≥4.5:1 on white. See §4.5.
  - **`--eb-pumpkin-ink` `#B84E06` added.** Pumpkin Spice cannot carry text on
    white at 2.65:1; a darkened variant makes orange text possible.
  - **Accent and WhatsApp buttons take near-black ink.** White fails on both
    grounds. See §6.3.
  - **Icon-only mark added** at `svg/mark/`, cropped from the primary by
    `viewBox` with no geometry change, to cover favicon and app-icon sizes the
    source guidelines leave undefined. See §2.6.
  - **Adobe PGF metadata stripped from the logo SVGs**, reducing them from
    ~825KB to ~15–42KB with byte-identical geometry, guarded by an
    element-count assertion in `tools/optimize-svg.py`.
  - **Secondary lockup cropped to its ink band.** The vendor originals draw all
    four primary/secondary variants on the same 1080×1080 square, leaving ~66%
    of the canvas empty above and below the horizontal lockup — which renders
    it far too small in a letterhead or site header. `tools/build-logos.sh`
    crops the secondary to `viewBox="0 432 1080 214"`. This is a **window
    change only**; no path is altered and nothing is removed from the logo, so
    misuse rule 4 is not breached. Use `Logo-Encik-Beku/` directly if the
    original square framing is wanted.
  - **On-brand surface tokens added.** Building `examples/landing/` showed the
    kit had white ink for brand fields but no muted ink or hairline borders, so
    a single page accumulated ten hand-rolled `rgba(255,255,255,…)` values.
    Added `--eb-fg-on-brand-muted` / `-subtle`, `--eb-border-on-brand` /
    `-strong`, and `--eb-bg-on-brand-hover` in both themes.
  - **"No Pumpkin Spice tint over blue" recorded as a rule.** See §6.6.
  - **Sub-brands deferred to phase 2.** See §1.8.
  - **WebP not shipped.** Neither `sips` nor ImageIO on macOS can encode WebP,
    and the kit does not ship a format it cannot verify. SVG plus PNG only.

---

## 12 · Governance

- **This file is the source of truth.** Update it before changing an asset, not
  after.
- **Never hand-edit a generated file.** `tokens/tokens.css`,
  `code/tokens/*` are built by `node tools/build-tokens.mjs` from
  `tokens/tokens.source.mjs`. Edit the source, rebuild, commit both.
- **Version bumps.** Major = new logo, new typeface, or a new colour path.
  Minor = new components or coverage. Patch = copy and spacing fixes.
- **Adding a colour requires a contrast measurement** recorded in §9 before it
  ships.
- **The logo artwork is frozen.** Any change to it is a major version and needs
  a new entry in §11.

---

## Related files

| Path | Contains |
|---|---|
| [`README.md`](README.md) | Folder index — read first |
| [`DESIGN-TEAM-HANDOFF.md`](DESIGN-TEAM-HANDOFF.md) | Copy-paste brief for designers and vendors |
| [`svg/`](svg/) | Logo masters and the icon-only mark |
| [`tokens/`](tokens/) | Token source of truth + zero-build CSS |
| [`code/`](code/) | React components, three token formats, business templates |
| [`fonts/`](fonts/) | Satoshi + licence notice |
| [`distribution/`](distribution/) | Raster and print exports |
| [`_source/`](_source/) | The two original PDFs |
