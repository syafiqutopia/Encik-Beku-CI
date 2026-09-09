#!/usr/bin/env node
/**
 * Generates every shipped token format from tokens/tokens.source.mjs.
 *
 *   node tools/build-tokens.mjs
 *
 * Outputs:
 *   tokens/tokens.css               zero-build CSS drop-in
 *   code/tokens/tokens.css          identical copy for code consumers
 *   code/tokens/tokens.ts           typed exports for JS / charts / canvas
 *   code/tokens/tailwind.preset.ts  Tailwind 3.4 / 4 preset
 *
 * Because all four come from one source, they cannot drift.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as T from '../tokens/tokens.source.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const write = (rel, body) => {
  const p = resolve(ROOT, rel);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, body);
  console.log(`  ${rel.padEnd(34)} ${String(body.length).padStart(7)} bytes`);
};

const banner = (fmt) => `/* ─────────────────────────────────────────────────────────────
 * ENCIK BEKU — design tokens (${fmt})
 * v${T.meta.version} · locked ${T.meta.locked} · ${T.meta.owner}
 *
 * GENERATED FILE — do not edit by hand.
 * Source: tokens/tokens.source.mjs · rebuild: node tools/build-tokens.mjs
 * ─────────────────────────────────────────────────────────────
 */\n`;

/* ── CSS ──────────────────────────────────────────────────── */
function css() {
  const L = [];
  L.push(banner('CSS custom properties'));

  L.push(`\n:root {`);
  L.push(`\n  /* ── Brand palette · 60/30/10 (Guidelines p.19) ───────── */`);
  for (const [k, v] of Object.entries(T.brand)) L.push(`  --eb-${k}: ${v.hex};${' '.repeat(Math.max(1, 12 - k.length))}/* ${v.role} */`);

  L.push(`\n  /* ── Logo inks · reproduction ONLY, never for layout ──── */`);
  for (const [k, v] of Object.entries(T.ink)) L.push(`  --eb-ink-${k}: ${v.hex};`);

  L.push(`\n  /* ── Blue scale ──────────────────────────────────────── */`);
  for (const [k, v] of Object.entries(T.blue)) L.push(`  --eb-blue-${k}: ${v};`);

  L.push(`\n  /* ── Neutral scale ───────────────────────────────────── */`);
  for (const [k, v] of Object.entries(T.neutral)) L.push(`  --eb-neutral-${k}: ${v};`);

  L.push(`\n  /* ── Accessibility-derived (CI.md §9) ─────────────────── */`);
  for (const [k, v] of Object.entries(T.a11y)) L.push(`  --eb-${k}: ${v.hex};`);

  L.push(`\n  /* ── Status · outside the brand palette by design ─────── */`);
  for (const [k, v] of Object.entries(T.status)) L.push(`  --eb-${k}: ${v.hex};`);

  L.push(`\n  /* ── Typography (Guidelines p.21–22) ──────────────────── */`);
  L.push(`  --eb-font-sans: ${T.type.families.sans};`);
  L.push(`  --eb-font-display: ${T.type.families.display};`);
  for (const [k, v] of Object.entries(T.type.weights)) L.push(`  --eb-fw-${k}: ${v};`);
  for (const [k, v] of Object.entries(T.type.scale)) L.push(`  --eb-text-${k}: ${v};`);
  for (const [k, v] of Object.entries(T.type.leading)) L.push(`  --eb-leading-${k}: ${v};`);
  for (const [k, v] of Object.entries(T.type.tracking)) L.push(`  --eb-tracking-${k}: ${v};`);

  L.push(`\n  /* ── Space · radius · shadow · motion ─────────────────── */`);
  for (const [k, v] of Object.entries(T.space)) L.push(`  --eb-space-${k}: ${v};`);
  for (const [k, v] of Object.entries(T.radius)) L.push(`  --eb-radius-${k}: ${v};`);
  for (const [k, v] of Object.entries(T.shadow)) L.push(`  --eb-shadow-${k}: ${v};`);
  for (const [k, v] of Object.entries(T.motion)) L.push(`  --eb-${k}: ${v};`);

  L.push(`\n  /* ── Semantic · light theme (consume these) ───────────── */`);
  for (const [k, v] of Object.entries(T.semantic.light)) L.push(`  --eb-${k}: ${v};`);
  L.push(`}`);

  const darkBody = Object.entries(T.semantic.dark).map(([k, v]) => `    --eb-${k}: ${v};`).join('\n');
  L.push(`\n/* ── Dark theme ───────────────────────────────────────────── */`);
  L.push(`:root[data-theme="dark"] {\n${darkBody.replace(/^ {4}/gm, '  ')}\n}`);
  L.push(`\n@media (prefers-color-scheme: dark) {\n  :root:not([data-theme="light"]) {\n${darkBody}\n  }\n}`);

  L.push(`\n/* ── Reduced motion ───────────────────────────────────────── */`);
  L.push(`@media (prefers-reduced-motion: reduce) {\n  :root {\n    --eb-dur-fast: 0ms;\n    --eb-dur: 0ms;\n    --eb-dur-slow: 0ms;\n  }\n}`);

  L.push(`\n/* ── Semantic type classes ────────────────────────────────── */`);
  const t = (n, w, s, lh, tr, c, extra = '') =>
    `.eb-${n} {\n  font-family: var(--eb-font-${n === 'display' || n === 'h1' ? 'display' : 'sans'});\n  font-weight: var(--eb-fw-${w});\n  font-size: var(--eb-text-${s});\n  line-height: var(--eb-leading-${lh});\n  letter-spacing: var(--eb-tracking-${tr});\n  color: var(--eb-${c});${extra}\n}`;
  L.push(t('display', 'black', '5xl', 'tight', 'tight', 'fg-1', '\n  text-transform: uppercase;'));
  L.push(t('h1', 'black', '3xl', 'tight', 'tight', 'fg-1'));
  L.push(t('h2', 'black', '2xl', 'snug', 'snug', 'fg-1'));
  L.push(t('h3', 'bold', 'xl', 'snug', 'snug', 'fg-1'));
  L.push(t('h4', 'bold', 'lg', 'snug', 'normal', 'fg-1'));
  L.push(t('body', 'medium', 'base', 'relaxed', 'normal', 'fg-1'));
  L.push(t('body-sm', 'medium', 'sm', 'normal', 'normal', 'fg-2'));
  L.push(t('caption', 'medium', 'xs', 'normal', 'normal', 'fg-3'));
  L.push(t('eyebrow', 'bold', 'sm', 'normal', 'wide', 'fg-brand', '\n  text-transform: uppercase;'));
  L.push(t('price', 'black', '2xl', 'tight', 'tight', 'fg-brand'));

  return L.join('\n') + '\n';
}

/* ── TypeScript ───────────────────────────────────────────── */
function ts() {
  const flat = (o, f = (v) => v) => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, f(v)]));
  const j = (o) => JSON.stringify(o, null, 2).replace(/\n/g, '\n');
  return `${banner('TypeScript')}
export const meta = ${j(T.meta)} as const;

/** Brand palette — 60% primary / 30% secondary / 10% accent. */
export const brand = ${j(flat(T.brand, (v) => v.hex))} as const;

/** Full print-ready records: HEX, RGB, CMYK, Pantone, usage role. */
export const brandDetail = ${j(T.brand)} as const;

/** Logo reproduction inks. Never use these for layout or UI. */
export const ink = ${j(flat(T.ink, (v) => v.hex))} as const;

export const blue = ${j(T.blue)} as const;
export const neutral = ${j(T.neutral)} as const;

/** Accessibility-derived variants — see CI.md §9. */
export const a11y = ${j(flat(T.a11y, (v) => v.hex))} as const;

/** Status colours, deliberately outside the brand palette. */
export const status = ${j(flat(T.status, (v) => v.hex))} as const;

export const type = ${j(T.type)} as const;
export const space = ${j(T.space)} as const;
export const radius = ${j(T.radius)} as const;
export const shadow = ${j(T.shadow)} as const;
export const motion = ${j(T.motion)} as const;

/** Minimum reproduction sizes — Guidelines p.14. */
export const logo = ${j(T.logo)} as const;

export const semantic = ${j(T.semantic)} as const;

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
`;
}

/* ── Tailwind preset ──────────────────────────────────────── */
function tailwind() {
  const px = (o) => JSON.stringify(o, null, 4).replace(/\n/g, '\n  ');
  return `${banner('Tailwind preset')}
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
        'tech-blue':   '${T.brand['tech-blue'].hex}',
        'french-blue': '${T.brand['french-blue'].hex}',
        'fresh-sky':   '${T.brand['fresh-sky'].hex}',
        'frozen-lake': '${T.brand['frozen-lake'].hex}',
        'pumpkin':     '${T.brand.pumpkin.hex}',
        'pumpkin-ink': '${T.a11y['pumpkin-ink'].hex}',
        ink: ${px(Object.fromEntries(Object.entries(T.ink).map(([k, v]) => [k, v.hex])))},
        blue: ${px(T.blue)},
        neutral: ${px(T.neutral)},
        ${Object.entries(T.status).map(([k, v]) => `'${k}': '${v.hex}'`).join(',\n        ')},
        // semantic aliases resolve through the CSS variables, so they follow the theme
        'fg-1': 'var(--eb-fg-1)', 'fg-2': 'var(--eb-fg-2)', 'fg-3': 'var(--eb-fg-3)',
        'bg-1': 'var(--eb-bg-1)', 'bg-2': 'var(--eb-bg-2)', 'bg-3': 'var(--eb-bg-3)',
        'border-1': 'var(--eb-border-1)', 'border-2': 'var(--eb-border-2)',
      },
      fontFamily: {
        sans: [${T.type.families.sans.split(', ').map((s) => `'${s.replace(/'/g, '')}'`).join(', ')}],
        display: [${T.type.families.display.split(', ').map((s) => `'${s.replace(/'/g, '')}'`).join(', ')}],
      },
      fontSize: ${px(T.type.scale)},
      fontWeight: ${px(T.type.weights)},
      lineHeight: ${px(T.type.leading)},
      letterSpacing: ${px(T.type.tracking)},
      spacing: ${px(T.space)},
      borderRadius: ${px(T.radius)},
      boxShadow: ${px(T.shadow)},
      transitionTimingFunction: {
        eb: '${T.motion.ease}',
        'eb-in-out': '${T.motion['ease-in-out']}',
      },
      transitionDuration: {
        fast: '${T.motion['dur-fast'].replace('ms', '')}',
        DEFAULT: '${T.motion.dur.replace('ms', '')}',
        slow: '${T.motion['dur-slow'].replace('ms', '')}',
      },
    },
  },
  plugins: [],
};

export default preset;
`;
}

console.log(`Encik Beku tokens v${T.meta.version} — building:`);
const cssBody = css();
write('tokens/tokens.css', cssBody);
write('code/tokens/tokens.css', cssBody);
write('code/tokens/tokens.ts', ts());
write('code/tokens/tailwind.preset.ts', tailwind());
console.log('Done.');
