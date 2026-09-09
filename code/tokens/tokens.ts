/* ─────────────────────────────────────────────────────────────
 * ENCIK BEKU — design tokens (TypeScript)
 * v1.0.0 · locked 2026-08-19 · Encik Beku Aircond Sdn Bhd
 *
 * GENERATED FILE — do not edit by hand.
 * Source: tokens/tokens.source.mjs · rebuild: node tools/build-tokens.mjs
 * ─────────────────────────────────────────────────────────────
 */

export const meta = {
  "brand": "Encik Beku",
  "version": "1.0.0",
  "locked": "2026-08-19",
  "owner": "Encik Beku Aircond Sdn Bhd",
  "source": "Encik Beku Brand Guidelines.pdf (2026) · Encik Beku Company Profile.pdf (2026)"
} as const;

/** Brand palette — 60% primary / 30% secondary / 10% accent. */
export const brand = {
  "tech-blue": "#035CC2",
  "french-blue": "#1B3F83",
  "fresh-sky": "#00B0FC",
  "frozen-lake": "#7BD2F6",
  "pumpkin": "#F47F30"
} as const;

/** Full print-ready records: HEX, RGB, CMYK, Pantone, usage role. */
export const brandDetail = {
  "tech-blue": {
    "hex": "#035CC2",
    "rgb": "3, 92, 194",
    "cmyk": "98, 53, 0, 24",
    "pantone": "285 C",
    "role": "Primary · 60% · dominant brand colour"
  },
  "french-blue": {
    "hex": "#1B3F83",
    "rgb": "27, 63, 131",
    "cmyk": "79, 52, 0, 49",
    "pantone": "294 C",
    "role": "Secondary · 30% · deep headlines, dark surfaces"
  },
  "fresh-sky": {
    "hex": "#00B0FC",
    "rgb": "0, 176, 252",
    "cmyk": "100, 30, 0, 1",
    "pantone": "2995 C",
    "role": "Secondary · 30% · bright highlight, fills only"
  },
  "frozen-lake": {
    "hex": "#7BD2F6",
    "rgb": "123, 210, 246",
    "cmyk": "50, 15, 0, 4",
    "pantone": "297 C",
    "role": "Accent · 10% · soft tint, callout fills"
  },
  "pumpkin": {
    "hex": "#F47F30",
    "rgb": "244, 127, 48",
    "cmyk": "0, 48, 80, 4",
    "pantone": "1585 C",
    "role": "Accent · 10% · the only warm accent, CTAs"
  }
} as const;

/** Logo reproduction inks. Never use these for layout or UI. */
export const ink = {
  "navy": "#24366F",
  "orange": "#F67F31",
  "sky": "#7BD3F7",
  "white": "#FFFFFF"
} as const;

export const blue = {
  "50": "#EAF3FD",
  "100": "#D2E6FB",
  "200": "#A9CFF6",
  "300": "#7BD2F6",
  "400": "#2D86E0",
  "500": "#035CC2",
  "600": "#024A9E",
  "700": "#1B3F83",
  "800": "#142F62",
  "900": "#0D1F42"
} as const;
export const neutral = {
  "0": "#FFFFFF",
  "50": "#F5F7FA",
  "100": "#ECEFF3",
  "200": "#DDE3EA",
  "300": "#C3CCD7",
  "400": "#9AA6B4",
  "500": "#6B7785",
  "600": "#4B5563",
  "700": "#333B45",
  "800": "#1C222A",
  "900": "#0B0E12"
} as const;

/** Accessibility-derived variants — see CI.md §9. */
export const a11y = {
  "pumpkin-ink": "#B84E06",
  "on-accent": "#0B0E12"
} as const;

/** Status colours, deliberately outside the brand palette. */
export const status = {
  "success": "#0D8149",
  "warning": "#B54708",
  "danger": "#B42318",
  "info": "#1B3F83",
  "whatsapp": "#25D366"
} as const;

export const type = {
  "families": {
    "sans": "'Satoshi', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    "display": "'Satoshi', system-ui, sans-serif"
  },
  "weights": {
    "light": 300,
    "regular": 400,
    "medium": 500,
    "bold": 700,
    "black": 900
  },
  "scale": {
    "xs": "0.75rem",
    "sm": "0.875rem",
    "base": "1rem",
    "md": "1.125rem",
    "lg": "1.375rem",
    "xl": "1.75rem",
    "2xl": "2.25rem",
    "3xl": "3rem",
    "4xl": "4rem",
    "5xl": "5.25rem"
  },
  "leading": {
    "tight": "1.02",
    "snug": "1.18",
    "normal": "1.5",
    "relaxed": "1.65"
  },
  "tracking": {
    "tight": "-0.02em",
    "snug": "-0.01em",
    "normal": "0",
    "wide": "0.08em"
  }
} as const;
export const space = {
  "1": "4px",
  "2": "8px",
  "3": "12px",
  "4": "16px",
  "5": "24px",
  "6": "32px",
  "7": "48px",
  "8": "64px",
  "9": "96px",
  "10": "128px"
} as const;
export const radius = {
  "xs": "4px",
  "sm": "8px",
  "md": "12px",
  "lg": "18px",
  "xl": "26px",
  "pill": "999px"
} as const;
export const shadow = {
  "xs": "0 1px 2px rgba(13, 31, 66, 0.06)",
  "sm": "0 2px 6px rgba(13, 31, 66, 0.08)",
  "md": "0 8px 20px rgba(13, 31, 66, 0.10)",
  "lg": "0 18px 40px rgba(13, 31, 66, 0.14)",
  "brand": "0 10px 28px rgba(3, 92, 194, 0.30)",
  "accent": "0 8px 20px rgba(244, 127, 48, 0.32)"
} as const;
export const motion = {
  "dur-fast": "140ms",
  "dur": "220ms",
  "dur-slow": "420ms",
  "ease": "cubic-bezier(0.22, 1, 0.36, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
} as const;

/** Minimum reproduction sizes — Guidelines p.14. */
export const logo = {
  "minWidthPx": {
    "primary": 50,
    "secondary": 120
  },
  "minWidthMm": {
    "primary": 12,
    "secondary": 24
  },
  "clearSpace": "1× the cap-height of the wordmark on all four sides"
} as const;

export const semantic = {
  "light": {
    "fg-1": "#0B0E12",
    "fg-2": "#6B7785",
    "fg-3": "#9AA6B4",
    "fg-brand": "#035CC2",
    "fg-on-brand": "#FFFFFF",
    "fg-on-brand-muted": "rgba(255, 255, 255, 0.86)",
    "fg-on-brand-subtle": "rgba(255, 255, 255, 0.72)",
    "border-on-brand": "rgba(255, 255, 255, 0.22)",
    "border-on-brand-strong": "rgba(255, 255, 255, 0.45)",
    "bg-on-brand-hover": "rgba(255, 255, 255, 0.12)",
    "fg-on-accent": "#0B0E12",
    "fg-accent": "#B84E06",
    "bg-1": "#FFFFFF",
    "bg-2": "#F5F7FA",
    "bg-3": "#ECEFF3",
    "bg-brand": "#035CC2",
    "bg-brand-deep": "#1B3F83",
    "bg-accent": "#F47F30",
    "bg-tint": "#EAF3FD",
    "border-1": "#DDE3EA",
    "border-2": "#C3CCD7",
    "border-brand": "#035CC2",
    "brand-hover": "#024FA8",
    "brand-press": "#024089",
    "accent-hover": "#E06F1C",
    "accent-press": "#D2600F",
    "focus-ring": "rgba(3, 92, 194, 0.35)"
  },
  "dark": {
    "fg-1": "#F5F7FA",
    "fg-2": "#C3CCD7",
    "fg-3": "#9AA6B4",
    "fg-brand": "#7BD2F6",
    "fg-on-brand": "#FFFFFF",
    "fg-on-brand-muted": "rgba(255, 255, 255, 0.86)",
    "fg-on-brand-subtle": "rgba(255, 255, 255, 0.72)",
    "border-on-brand": "rgba(255, 255, 255, 0.22)",
    "border-on-brand-strong": "rgba(255, 255, 255, 0.45)",
    "bg-on-brand-hover": "rgba(255, 255, 255, 0.12)",
    "fg-on-accent": "#0B0E12",
    "fg-accent": "#F47F30",
    "bg-1": "#0D1F42",
    "bg-2": "#0A1730",
    "bg-3": "#142F62",
    "bg-brand": "#035CC2",
    "bg-brand-deep": "#1B3F83",
    "bg-accent": "#F47F30",
    "bg-tint": "rgba(123, 210, 246, 0.12)",
    "border-1": "rgba(255, 255, 255, 0.14)",
    "border-2": "rgba(255, 255, 255, 0.24)",
    "border-brand": "#7BD2F6",
    "brand-hover": "#2D86E0",
    "brand-press": "#035CC2",
    "accent-hover": "#F79A5C",
    "accent-press": "#F47F30",
    "focus-ring": "rgba(123, 210, 246, 0.45)"
  }
} as const;

/**
 * Ordered categorical series for charts. Starts on the brand primary,
 * then moves away in hue/luminance so adjacent series stay distinct.
 */
export const dataviz = [
  brand['tech-blue'],
  brand.pumpkin,
  brand['fresh-sky'],
  brand['french-blue'],
  status.success,
  brand['frozen-lake'],
  neutral[500],
] as const;

/** Single-hue sequential ramp for magnitude encodings. */
export const sequential = [blue[100], blue[300], blue[400], blue[500], blue[700], blue[900]] as const;

export type BrandColor = keyof typeof brand;
export type StatusColor = keyof typeof status;
