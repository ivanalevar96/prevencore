import { Link } from 'react-router-dom'
import { colors, fonts, layout } from '../theme'

// Centered max-width container with fluid gutters
export function Container({ children, style, maxWidth = layout.maxWidth }) {
  return (
    <div
      style={{
        maxWidth,
        margin: '0 auto',
        padding: `0 ${layout.gutter}`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// Eyebrow label: accent dash + mono uppercase text
export function Eyebrow({ children, color = colors.limeText, dash = colors.lime, style }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 16,
        ...style,
      }}
    >
      <span style={{ width: 26, height: 2, background: dash }} />
      <span
        style={{
          fontFamily: fonts.mono,
          fontSize: 12,
          letterSpacing: '0.2em',
          color,
          textTransform: 'uppercase',
        }}
      >
        {children}
      </span>
    </div>
  )
}

// Internal arrow link ("Ver todos →")
export function ArrowLink({ to, children, color = colors.navyMid, arrow = colors.limeDark, style }) {
  return (
    <Link
      to={to}
      className="link-arrow"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 9,
        color,
        fontWeight: 700,
        fontSize: 15.5,
        textDecoration: 'none',
        ...style,
      }}
    >
      {children} <span style={{ color: arrow }}>→</span>
    </Link>
  )
}

// Solid / outline button. Accepts internal `to`, external `href`, or `type="submit"`.
export function Button({
  children,
  to,
  href,
  type,
  onClick,
  variant = 'lime',
  style,
  className = '',
}) {
  const base = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    height: 52,
    padding: '0 26px',
    borderRadius: 9,
    fontWeight: 700,
    fontSize: 16,
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  }
  const variants = {
    lime: { background: colors.lime, color: colors.navy },
    navy: { background: colors.navy, color: colors.white },
    outlineNavy: {
      background: 'transparent',
      border: `1.5px solid ${colors.navy}`,
      color: colors.navy,
    },
    ghostLight: {
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(201,212,222,0.35)',
      color: '#EAF1F6',
      fontWeight: 600,
    },
  }
  const variantClass = {
    lime: 'btn-lime',
    navy: 'btn-navy',
    outlineNavy: 'btn-outline-navy',
    ghostLight: 'btn-ghost-light',
  }[variant]

  const merged = { ...base, ...variants[variant], ...style }
  const cls = `${variantClass} ${className}`.trim()

  if (to) return <Link to={to} className={cls} style={merged}>{children}</Link>
  if (href)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={merged}>
        {children}
      </a>
    )
  return (
    <button type={type || 'button'} onClick={onClick} className={cls} style={merged}>
      {children}
    </button>
  )
}

// WhatsApp pulse dot
export function PulseDot({ size = 9, color = colors.lime }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        boxShadow: `0 0 8px ${color}`,
      }}
    />
  )
}

export const WHATSAPP_URL = 'https://wa.me/56983100293'
