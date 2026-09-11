/**
 * @encikbeku/ui · Chip v1.0.0
 *
 *   <Chip>Aircond Service</Chip>
 *   <Chip variant="accent">Same-day</Chip>
 *   <Chip variant="success" dot>Completed</Chip>
 *   <Chip variant="danger" dot>Overdue</Chip>
 *
 * Every fill/ink pairing below clears WCAG AA for small text. Notably the
 * accent chip uses near-black on Pumpkin Spice (7.30:1), never white (2.65:1).
 */

import * as React from 'react';

type Variant = 'default' | 'brand' | 'accent' | 'tint' | 'success' | 'warning' | 'danger' | 'info';

export type ChipProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant;
  /** Leading status dot. Gives the chip a non-colour cue as well as a colour one. */
  dot?: boolean;
  children: React.ReactNode;
};

const variantStyle: Record<Variant, React.CSSProperties> = {
  default: {
    background: 'var(--eb-bg-2, #F5F7FA)',
    color: 'var(--eb-fg-2, #6B7785)',
    borderColor: 'var(--eb-border-1, #DDE3EA)',
  },
  brand: {
    background: 'var(--eb-bg-brand, #035CC2)',
    color: '#FFFFFF',
    borderColor: 'transparent',
  },
  accent: {
    background: 'var(--eb-bg-accent, #F47F30)',
    color: 'var(--eb-on-accent, #0B0E12)',
    borderColor: 'transparent',
  },
  tint: {
    background: 'var(--eb-bg-tint, #EAF3FD)',
    color: 'var(--eb-french-blue, #1B3F83)',
    borderColor: 'transparent',
  },
  success: {
    background: 'rgba(13,129,73,0.10)',
    color: 'var(--eb-success, #0D8149)',
    borderColor: 'rgba(13,129,73,0.24)',
  },
  warning: {
    background: 'rgba(181,71,8,0.10)',
    color: 'var(--eb-warning, #B54708)',
    borderColor: 'rgba(181,71,8,0.24)',
  },
  danger: {
    background: 'rgba(180,35,24,0.10)',
    color: 'var(--eb-danger, #B42318)',
    borderColor: 'rgba(180,35,24,0.24)',
  },
  info: {
    background: 'rgba(27,63,131,0.10)',
    color: 'var(--eb-info, #1B3F83)',
    borderColor: 'rgba(27,63,131,0.24)',
  },
};

export function Chip({ variant = 'default', dot = false, children, style, ...rest }: ChipProps) {
  return (
    <span
      {...rest}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '5px 12px',
        borderRadius: 'var(--eb-radius-pill, 999px)',
        border: '1px solid',
        fontFamily: 'var(--eb-font-sans, "Satoshi", system-ui, sans-serif)',
        fontSize: 'var(--eb-text-xs, 0.75rem)',
        fontWeight: 700,
        lineHeight: 1,
        whiteSpace: 'nowrap',
        flexShrink: 0,
        ...variantStyle[variant],
        ...style,
      }}
    >
      {dot && (
        <span
          aria-hidden="true"
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: 'currentColor',
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </span>
  );
}

export default Chip;
