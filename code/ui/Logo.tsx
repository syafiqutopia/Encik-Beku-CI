/**
 * @encikbeku/ui · Logo v1.0.0
 *
 *   <Logo variant="primary" theme="light" width={220} />
 *   <Logo variant="secondary" theme="dark" width={320} />
 *   <Logo variant="single" tone="navy" width={80} />
 *
 * Serves the locked SVG masters from `svg/logo/`. It never redraws the
 * artwork — Guidelines p.16 forbids recreating or manipulating the logo.
 *
 * Minimum widths are enforced (Guidelines p.14): 50px primary, 120px
 * secondary. Below the primary minimum, use the icon-only mark in
 * `svg/mark/` instead of shrinking the logo further.
 */

import * as React from 'react';

type Variant = 'primary' | 'secondary' | 'single';
type Theme = 'light' | 'dark';
type Tone = 'navy' | 'white';

/** Intrinsic aspect ratios of the locked masters (width ÷ height). */
const RATIO: Record<Variant, number> = {
  primary: 1080 / 1080,
  secondary: 1080 / 214,
  single: 1080 / 1080,
};

/** Guidelines p.14 — minimum reproduction width on screen, in px. */
export const MIN_WIDTH_PX: Record<Variant, number> = {
  primary: 50,
  secondary: 120,
  single: 50,
};

export type LogoProps = {
  variant?: Variant;
  /** Which background the logo sits on. Ignored when variant="single". */
  theme?: Theme;
  /** Ink for the one-colour master. Only used when variant="single". */
  tone?: Tone;
  width?: number;
  /** Base path to the kit's `svg/` directory, if not served at the site root. */
  basePath?: string;
  className?: string;
  style?: React.CSSProperties;
  /** Set only if the logo is decorative and the name is already in the text. */
  decorative?: boolean;
};

function fileFor(variant: Variant, theme: Theme, tone: Tone): string {
  if (variant === 'single') return `encik-beku-single-${tone}.svg`;
  return `encik-beku-${variant}-${theme}.svg`;
}

export function Logo({
  variant = 'primary',
  theme = 'light',
  tone = 'navy',
  width = 220,
  basePath = '/svg/logo',
  className,
  style,
  decorative = false,
}: LogoProps) {
  const min = MIN_WIDTH_PX[variant];

  if (process.env.NODE_ENV !== 'production' && width < min) {
    console.warn(
      `[Encik Beku] Logo variant "${variant}" rendered at ${width}px, below the ` +
        `${min}px minimum from Brand Guidelines p.14. Use the icon-only mark ` +
        `(svg/mark/) for sizes under ${MIN_WIDTH_PX.primary}px.`,
    );
  }

  const src = `${basePath.replace(/\/$/, '')}/${fileFor(variant, theme, tone)}`;

  return (
    <img
      src={src}
      width={width}
      height={Math.round(width / RATIO[variant])}
      alt={decorative ? '' : 'Encik Beku'}
      aria-hidden={decorative || undefined}
      className={className}
      style={{ display: 'block', ...style }}
    />
  );
}

export default Logo;
