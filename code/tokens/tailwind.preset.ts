/* ─────────────────────────────────────────────────────────────
 * ENCIK BEKU — design tokens (Tailwind preset)
 * v1.0.0 · locked 2026-08-19 · Encik Beku Aircond Sdn Bhd
 *
 * GENERATED FILE — do not edit by hand.
 * Source: tokens/tokens.source.mjs · rebuild: node tools/build-tokens.mjs
 * ─────────────────────────────────────────────────────────────
 */

import type { Config } from 'tailwindcss';

/**
 * Usage:
 *   import encikBeku from './tailwind.preset';
 *   export default { presets: [encikBeku], content: ['./src/**' + '/*.{ts,tsx}'] };
 *
 * Gives you: bg-tech-blue, text-french-blue, bg-pumpkin, text-fg-2,
 * font-display, rounded-card, shadow-brand, ease-eb, etc.
 */
const preset: Config = {
  content: [],
  theme: {
    extend: {
      colors: {
        'tech-blue':   '#035CC2',
        'french-blue': '#1B3F83',
        'fresh-sky':   '#00B0FC',
        'frozen-lake': '#7BD2F6',
        'pumpkin':     '#F47F30',
        'pumpkin-ink': '#B84E06',
        ink: {
      "navy": "#24366F",
      "orange": "#F67F31",
      "sky": "#7BD3F7",
      "white": "#FFFFFF"
  },
        blue: {
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
  },
        neutral: {
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
  },
        'success': '#0D8149',
        'warning': '#B54708',
        'danger': '#B42318',
        'info': '#1B3F83',
        'whatsapp': '#25D366',
        // semantic aliases resolve through the CSS variables, so they follow the theme
        'fg-1': 'var(--eb-fg-1)', 'fg-2': 'var(--eb-fg-2)', 'fg-3': 'var(--eb-fg-3)',
        'bg-1': 'var(--eb-bg-1)', 'bg-2': 'var(--eb-bg-2)', 'bg-3': 'var(--eb-bg-3)',
        'border-1': 'var(--eb-border-1)', 'border-2': 'var(--eb-border-2)',
      },
      fontFamily: {
        sans: ['Satoshi', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Satoshi', 'system-ui', 'sans-serif'],
      },
      fontSize: {
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
      fontWeight: {
      "light": 300,
      "regular": 400,
      "medium": 500,
      "bold": 700,
      "black": 900
  },
      lineHeight: {
      "tight": "1.02",
      "snug": "1.18",
      "normal": "1.5",
      "relaxed": "1.65"
  },
      letterSpacing: {
      "tight": "-0.02em",
      "snug": "-0.01em",
      "normal": "0",
      "wide": "0.08em"
  },
      spacing: {
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
  },
      borderRadius: {
      "xs": "4px",
      "sm": "8px",
      "md": "12px",
      "lg": "18px",
      "xl": "26px",
      "pill": "999px"
  },
      boxShadow: {
      "xs": "0 1px 2px rgba(13, 31, 66, 0.06)",
      "sm": "0 2px 6px rgba(13, 31, 66, 0.08)",
      "md": "0 8px 20px rgba(13, 31, 66, 0.10)",
      "lg": "0 18px 40px rgba(13, 31, 66, 0.14)",
      "brand": "0 10px 28px rgba(3, 92, 194, 0.30)",
      "accent": "0 8px 20px rgba(244, 127, 48, 0.32)"
  },
      transitionTimingFunction: {
        eb: 'cubic-bezier(0.22, 1, 0.36, 1)',
        'eb-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        fast: '140',
        DEFAULT: '220',
        slow: '420',
      },
    },
  },
  plugins: [],
};

export default preset;
