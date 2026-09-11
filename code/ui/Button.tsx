/**
 * @encikbeku/ui · Button v1.0.0
 *
 * Four variants × three sizes.
 *
 *   <Button variant="primary" size="md">Book a service</Button>
 *   <Button variant="accent" size="lg">Get a free quote</Button>
 *   <Button variant="whatsapp" href="https://wa.me/60189294628">Chat on WhatsApp</Button>
 *   <Button variant="ghost" size="sm">Cancel</Button>
 *
 * Requires tokens.css + Satoshi loaded. See code/README.md.
 *
 * Accessibility note — `accent` uses near-black ink, not white. White on
 * Pumpkin Spice measures 2.65:1 and fails WCAG AA at every size; near-black
 * on Pumpkin Spice is 7.30:1. Do not "fix" this to white. See CI.md §9.
 */

import * as React from 'react';

type Variant = 'primary' | 'accent' | 'ghost' | 'whatsapp';
type Size = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
};

type ButtonProps =
  | (CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

/**
 * Dimensional, not em-based — fixed px so text can never wrap and the icon
 * never scales with the font size.
 */
const SIZE: Record<Size, { h: number; px: number; fz: number; icon: number; gap: number }> = {
  sm: { h: 34, px: 14, fz: 13, icon: 14, gap: 6 },
  md: { h: 44, px: 22, fz: 15, icon: 18, gap: 8 },
  lg: { h: 54, px: 30, fz: 17, icon: 20, gap: 10 },
};

const base: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'var(--eb-radius-sm, 8px)',
  fontFamily: 'var(--eb-font-sans, "Satoshi", system-ui, sans-serif)',
  fontWeight: 700,
  letterSpacing: 'var(--eb-tracking-snug, -0.01em)',
  whiteSpace: 'nowrap',  // text never wraps
  flexShrink: 0,         // button never compresses
  cursor: 'pointer',
  textDecoration: 'none',
  border: '1px solid transparent',
  transition:
    'transform var(--eb-dur-fast, 140ms) var(--eb-ease, cubic-bezier(0.22,1,0.36,1)),' +
    ' box-shadow var(--eb-dur-fast, 140ms) var(--eb-ease, cubic-bezier(0.22,1,0.36,1))',
};

const variantStyle: Record<Variant, React.CSSProperties> = {
  primary: {
    background: 'var(--eb-bg-brand, #035CC2)',
    color: '#FFFFFF',
    boxShadow: 'var(--eb-shadow-brand, 0 10px 28px rgba(3,92,194,0.30))',
  },
  accent: {
    background: 'var(--eb-bg-accent, #F47F30)',
    color: 'var(--eb-on-accent, #0B0E12)',
    boxShadow: 'var(--eb-shadow-accent, 0 8px 20px rgba(244,127,48,0.32))',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--eb-fg-brand, #035CC2)',
    borderColor: 'var(--eb-border-2, #C3CCD7)',
  },
  whatsapp: {
    background: 'var(--eb-whatsapp, #25D366)',
    color: 'var(--eb-on-accent, #0B0E12)',
    boxShadow: '0 8px 20px rgba(37,211,102,0.28)',
  },
};

export function WhatsAppGlyph({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    loading,
    fullWidth,
    iconLeft,
    iconRight,
    children,
    ...rest
  } = props;
  const s = SIZE[size];

  const style: React.CSSProperties = {
    ...base,
    ...variantStyle[variant],
    height: s.h,
    padding: `0 ${s.px}px`,
    fontSize: s.fz,
    gap: s.gap,
    width: fullWidth ? '100%' : undefined,
    opacity: loading ? 0.6 : 1,
    pointerEvents: loading ? 'none' : undefined,
  };

  const content = (
    <>
      {variant === 'whatsapp' && !iconLeft ? <WhatsAppGlyph size={s.icon} /> : iconLeft}
      {children}
      {iconRight}
    </>
  );

  if ('href' in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <a href={href} style={style} {...anchorRest}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled={loading}
      style={style}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}

export default Button;
