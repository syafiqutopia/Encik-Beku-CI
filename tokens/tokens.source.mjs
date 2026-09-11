/* ─────────────────────────────────────────────────────────────
 * ENCIK BEKU — design token source of truth
 *
 * This file is the ONLY place a brand value is authored. Every shipped
 * token format is generated from it by `node tools/build-tokens.mjs`:
 *
 *   tokens/tokens.css              zero-build CSS drop-in
 *   code/tokens/tokens.css         same file, for code consumers
 *   code/tokens/tokens.ts          typed exports for JS / charts / canvas
 *   code/tokens/tailwind.preset.ts Tailwind 3.4 / 4 preset
 *
 * Never hand-edit a generated file — the next build overwrites it.
 * Page references below point at "Encik Beku Brand Guidelines.pdf".
 * ─────────────────────────────────────────────────────────────
 */

export const meta = {
  brand: 'Encik Beku',
  version: '1.0.0',
  locked: '2026-08-19',
  owner: 'Encik Beku Aircond Sdn Bhd',
  source: 'Encik Beku Brand Guidelines.pdf (2026) · Encik Beku Company Profile.pdf (2026)',
};

/* ── Brand palette — Guidelines p.19 ──────────────────────────
 * Usage ratio: Primary 60% · Secondary 30% · Accent 10%.
 * Pantone/CMYK values are carried here so print and screen never diverge.
 */
export const brand = {
  'tech-blue':   { hex: '#035CC2', rgb: '3, 92, 194',    cmyk: '98, 53, 0, 24', pantone: '285 C',  role: 'Primary · 60% · dominant brand colour' },
  'french-blue': { hex: '#1B3F83', rgb: '27, 63, 131',   cmyk: '79, 52, 0, 49', pantone: '294 C',  role: 'Secondary · 30% · deep headlines, dark surfaces' },
  'fresh-sky':   { hex: '#00B0FC', rgb: '0, 176, 252',   cmyk: '100, 30, 0, 1', pantone: '2995 C', role: 'Secondary · 30% · bright highlight, fills only' },
  'frozen-lake': { hex: '#7BD2F6', rgb: '123, 210, 246', cmyk: '50, 15, 0, 4',  pantone: '297 C',  role: 'Accent · 10% · soft tint, callout fills' },
  'pumpkin':     { hex: '#F47F30', rgb: '244, 127, 48',  cmyk: '0, 48, 80, 4',  pantone: '1585 C', role: 'Accent · 10% · the only warm accent, CTAs' },
};

/* ── Logo inks — as-built in the master artwork ───────────────
 * These are NOT the brand palette. The approved logo artwork was drawn
 * with these values and Guidelines p.16 forbids recolouring it, so they
 * are locked separately and used for logo reproduction ONLY.
 * Never use an ink token for layout, type, or UI.
 */
export const ink = {
  navy:   { hex: '#24366F', note: 'shield, wordmark, linework. Differs from French Blue #1B3F83 by design-as-built' },
  orange: { hex: '#F67F31', note: 'radiating lines. 1-digit drift from Pumpkin Spice #F47F30' },
  sky:    { hex: '#7BD3F7', note: 'uniform, cap. 1-digit drift from Frozen Lake #7BD2F6' },
  white:  { hex: '#FFFFFF', note: 'knockout / negative space' },
};

/* ── Derived blue scale, harmonized around Tech Blue ────────── */
export const blue = {
  50: '#EAF3FD', 100: '#D2E6FB', 200: '#A9CFF6', 300: '#7BD2F6', 400: '#2D86E0',
  500: '#035CC2', 600: '#024A9E', 700: '#1B3F83', 800: '#142F62', 900: '#0D1F42',
};

/* ── Neutral scale ───────────────────────────────────────────── */
export const neutral = {
  0: '#FFFFFF', 50: '#F5F7FA', 100: '#ECEFF3', 200: '#DDE3EA', 300: '#C3CCD7',
  400: '#9AA6B4', 500: '#6B7785', 600: '#4B5563', 700: '#333B45', 800: '#1C222A',
  900: '#0B0E12',
};

/* ── Accessibility-derived variants ──────────────────────────
 * Measured with the WCAG 2.1 relative-luminance formula; see CI.md §9.
 */
export const a11y = {
  'pumpkin-ink': { hex: '#B84E06', note: 'orange TEXT/links on light. Pumpkin Spice itself is 2.65:1 on white and must never carry body text' },
  'on-accent':   { hex: '#0B0E12', note: 'ink to place ON pumpkin / fresh-sky / frozen-lake fills. White on pumpkin is 2.65:1 and fails' },
};

/* ── Status — deliberately outside the brand palette ─────────
 * The brand palette cannot express state: it has one warm colour, so
 * "warning" and "error" would be identical. See CI.md decisions log.
 */
export const status = {
  success:  { hex: '#0D8149', ratio: 4.94 },
  warning:  { hex: '#B54708', ratio: 5.43 },
  danger:   { hex: '#B42318', ratio: 6.57 },
  info:     { hex: '#1B3F83', ratio: 10.07 },
  whatsapp: { hex: '#25D366', ratio: null, note: 'WhatsApp brand green — "Chat on WhatsApp" CTAs only, always with the glyph' },
};

/* ── Typography — Guidelines p.21–22 ─────────────────────────
 * Satoshi only. Black 900 = headline · Bold 700 = subheadline ·
 * Medium 500 = body. No second family.
 */
export const type = {
  families: {
    sans:    "'Satoshi', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    display: "'Satoshi', system-ui, sans-serif",
  },
  weights: { light: 300, regular: 400, medium: 500, bold: 700, black: 900 },
  scale: {
    xs: '0.75rem', sm: '0.875rem', base: '1rem', md: '1.125rem', lg: '1.375rem',
    xl: '1.75rem', '2xl': '2.25rem', '3xl': '3rem', '4xl': '4rem', '5xl': '5.25rem',
  },
  leading: { tight: '1.02', snug: '1.18', normal: '1.5', relaxed: '1.65' },
  tracking: { tight: '-0.02em', snug: '-0.01em', normal: '0', wide: '0.08em' },
};

export const space = {
  1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '24px',
  6: '32px', 7: '48px', 8: '64px', 9: '96px', 10: '128px',
};

export const radius = {
  xs: '4px', sm: '8px', md: '12px', lg: '18px', xl: '26px', pill: '999px',
};

export const shadow = {
  xs:     '0 1px 2px rgba(13, 31, 66, 0.06)',
  sm:     '0 2px 6px rgba(13, 31, 66, 0.08)',
  md:     '0 8px 20px rgba(13, 31, 66, 0.10)',
  lg:     '0 18px 40px rgba(13, 31, 66, 0.14)',
  brand:  '0 10px 28px rgba(3, 92, 194, 0.30)',
  accent: '0 8px 20px rgba(244, 127, 48, 0.32)',
};

export const motion = {
  'dur-fast': '140ms',
  'dur':      '220ms',
  'dur-slow': '420ms',
  'ease':     'cubic-bezier(0.22, 1, 0.36, 1)',
  'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
};

/* ── Logo reproduction limits — Guidelines p.14 ─────────────── */
export const logo = {
  minWidthPx:   { primary: 50,  secondary: 120 },
  minWidthMm:   { primary: 12,  secondary: 24 },
  clearSpace:   '1× the cap-height of the wordmark on all four sides',
};

/* ── Semantic mapping ────────────────────────────────────────
 * Components should consume THESE, not raw palette values.
 */
export const semantic = {
  light: {
    'fg-1': neutral[900], 'fg-2': neutral[500], 'fg-3': neutral[400],
    'fg-brand': brand['tech-blue'].hex, 'fg-on-brand': '#FFFFFF',
    /* Ink and hairlines for use ON a brand-blue field (hero, CTA band,
       quotation cover). Without these, every author invents their own
       rgba(255,255,255,…) and the surfaces drift apart. */
    'fg-on-brand-muted': 'rgba(255, 255, 255, 0.86)',
    'fg-on-brand-subtle': 'rgba(255, 255, 255, 0.72)',
    'border-on-brand': 'rgba(255, 255, 255, 0.22)',
    'border-on-brand-strong': 'rgba(255, 255, 255, 0.45)',
    'bg-on-brand-hover': 'rgba(255, 255, 255, 0.12)',
    'fg-on-accent': a11y['on-accent'].hex, 'fg-accent': a11y['pumpkin-ink'].hex,
    'bg-1': '#FFFFFF', 'bg-2': neutral[50], 'bg-3': neutral[100],
    'bg-brand': brand['tech-blue'].hex, 'bg-brand-deep': brand['french-blue'].hex,
    'bg-accent': brand.pumpkin.hex, 'bg-tint': blue[50],
    'border-1': neutral[200], 'border-2': neutral[300],
    'border-brand': brand['tech-blue'].hex,
    'brand-hover': '#024FA8', 'brand-press': '#024089',
    'accent-hover': '#E06F1C', 'accent-press': '#D2600F',
    'focus-ring': 'rgba(3, 92, 194, 0.35)',
  },
  dark: {
    'fg-1': neutral[50], 'fg-2': neutral[300], 'fg-3': neutral[400],
    'fg-brand': blue[300], 'fg-on-brand': '#FFFFFF',
    'fg-on-brand-muted': 'rgba(255, 255, 255, 0.86)',
    'fg-on-brand-subtle': 'rgba(255, 255, 255, 0.72)',
    'border-on-brand': 'rgba(255, 255, 255, 0.22)',
    'border-on-brand-strong': 'rgba(255, 255, 255, 0.45)',
    'bg-on-brand-hover': 'rgba(255, 255, 255, 0.12)',
    'fg-on-accent': a11y['on-accent'].hex, 'fg-accent': brand.pumpkin.hex,
    'bg-1': '#0D1F42', 'bg-2': '#0A1730', 'bg-3': '#142F62',
    'bg-brand': brand['tech-blue'].hex, 'bg-brand-deep': brand['french-blue'].hex,
    'bg-accent': brand.pumpkin.hex, 'bg-tint': 'rgba(123, 210, 246, 0.12)',
    'border-1': 'rgba(255, 255, 255, 0.14)', 'border-2': 'rgba(255, 255, 255, 0.24)',
    'border-brand': blue[300],
    'brand-hover': '#2D86E0', 'brand-press': '#035CC2',
    'accent-hover': '#F79A5C', 'accent-press': '#F47F30',
    'focus-ring': 'rgba(123, 210, 246, 0.45)',
  },
};
