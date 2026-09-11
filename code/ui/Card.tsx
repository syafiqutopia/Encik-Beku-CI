/**
 * @encikbeku/ui · Card v1.0.0
 *
 *   <Card variant="elevated" hoverable>…</Card>
 *   <Card variant="tint">Callout on a soft blue wash</Card>
 *   <Card variant="brand">Inverted panel on Tech Blue</Card>
 */

import * as React from 'react';

type Variant = 'default' | 'elevated' | 'outline' | 'tint' | 'brand';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: Variant;
  hoverable?: boolean;
  padding?: number;
  children: React.ReactNode;
};

const variantStyle: Record<Variant, React.CSSProperties> = {
  default: {
    background: 'var(--eb-bg-1, #FFFFFF)',
    border: '1px solid var(--eb-border-1, #DDE3EA)',
    boxShadow: 'var(--eb-shadow-xs, 0 1px 2px rgba(13,31,66,0.06))',
  },
  elevated: {
    background: 'var(--eb-bg-1, #FFFFFF)',
    border: '1px solid transparent',
    boxShadow: 'var(--eb-shadow-md, 0 8px 20px rgba(13,31,66,0.10))',
  },
  outline: {
    background: 'transparent',
    border: '1px solid var(--eb-border-2, #C3CCD7)',
  },
  tint: {
    background: 'var(--eb-bg-tint, #EAF3FD)',
    border: '1px solid transparent',
  },
  brand: {
    background: 'var(--eb-bg-brand, #035CC2)',
    border: '1px solid transparent',
    color: '#FFFFFF',
    boxShadow: 'var(--eb-shadow-brand, 0 10px 28px rgba(3,92,194,0.30))',
  },
};

export function Card({
  variant = 'default',
  hoverable = false,
  padding = 24,
  children,
  style,
  ...rest
}: CardProps) {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      {...rest}
      onMouseEnter={(e) => {
        setHover(true);
        rest.onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        setHover(false);
        rest.onMouseLeave?.(e);
      }}
      style={{
        borderRadius: 'var(--eb-radius-md, 12px)',
        padding,
        fontFamily: 'var(--eb-font-sans, "Satoshi", system-ui, sans-serif)',
        transition:
          'transform var(--eb-dur, 220ms) var(--eb-ease, cubic-bezier(0.22,1,0.36,1)),' +
          ' box-shadow var(--eb-dur, 220ms) var(--eb-ease, cubic-bezier(0.22,1,0.36,1))',
        ...variantStyle[variant],
        ...(hoverable && hover
          ? {
              transform: 'translateY(-2px)',
              boxShadow: 'var(--eb-shadow-lg, 0 18px 40px rgba(13,31,66,0.14))',
            }
          : null),
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default Card;
