import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { colors, fonts, layout } from '../theme'
import { useIsMobile } from '../hooks/useMediaQuery'
import { PulseDot, WHATSAPP_URL } from './ui'

const shield = '/assets/shield.png'

const NAV_ITEMS = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Rubros', to: '/rubros' },
  { label: 'Normativa', to: '/normativa' },
  { label: 'Contacto', to: '/contacto' },
]

// Logo that visually breaks out of its encapsulating badge
function Logo() {
  return (
    <Link
      to="/"
      style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', flexShrink: 0 }}
    >
      <motion.span
        whileHover={{ rotate: -4, scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        style={{
          position: 'relative',
          width: 44,
          height: 44,
          borderRadius: 13,
          background: 'linear-gradient(150deg,#0e2740 0%,#08182a 100%)',
          boxShadow: 'inset 0 0 0 1px rgba(164,206,78,0.22), 0 6px 18px -8px rgba(0,0,0,0.6)',
          // overflow intentionally visible so the shield escapes the square
          overflow: 'visible',
          flexShrink: 0,
        }}
      >
        <img
          src={shield}
          alt="PrevenCore"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            height: 60,
            width: 'auto',
            transform: 'translate(-50%,-54%)',
            filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.45))',
          }}
        />
      </motion.span>
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span
          style={{
            fontFamily: fonts.heading,
            fontWeight: 800,
            fontSize: 21,
            letterSpacing: '-0.01em',
            color: colors.white,
          }}
        >
          PREVEN<span style={{ color: colors.lime }}>CORE</span>
        </span>
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 8.5,
            letterSpacing: '0.24em',
            color: '#7C8B99',
            marginTop: 6,
          }}
        >
          ASESORÍAS EN PREVENCIÓN DE RIESGOS
        </span>
      </span>
    </Link>
  )
}

export default function SiteNav() {
  const isMobile = useIsMobile()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(null)

  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => {
    if (!isMobile) setOpen(false)
  }, [isMobile])

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  const activeKey = NAV_ITEMS.find((i) => isActive(i.to))?.to ?? '/'
  // The pill sits under the hovered item, or the active one when nothing is hovered
  const highlightKey = hovered ?? activeKey

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        // Same navy as the logo badge so the header and logo match exactly
        background: 'linear-gradient(150deg,#0e2740 0%,#08182a 100%)',
        borderBottom: '1px solid rgba(164,206,78,0.14)',
        boxShadow: '0 8px 30px -16px rgba(0,0,0,0.55)',
      }}
    >
      <div
        style={{
          maxWidth: layout.maxWidth,
          margin: '0 auto',
          padding: `0 ${layout.gutter}`,
          height: 74,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <Logo />

        {!isMobile && (
          <>
            <nav
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                padding: 5,
                borderRadius: 14,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.to)
                const highlighted = highlightKey === item.to
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onMouseEnter={() => setHovered(item.to)}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '9px 15px',
                      borderRadius: 10,
                      color: active || highlighted ? colors.lime : '#C9D4DE',
                      fontFamily: fonts.body,
                      fontWeight: active ? 700 : 500,
                      fontSize: 14.5,
                      textDecoration: 'none',
                      letterSpacing: '0.01em',
                      transition: 'color 0.2s ease',
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    {highlighted && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: 10,
                          background: 'rgba(164,206,78,0.14)',
                          border: '1px solid rgba(164,206,78,0.30)',
                          boxShadow: '0 0 18px -6px rgba(164,206,78,0.45)',
                        }}
                      />
                    )}
                    <span style={{ position: 'relative', zIndex: 1 }}>{item.label}</span>
                  </Link>
                )
              })}
            </nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '0 16px',
                  height: 42,
                  border: '1px solid rgba(164,206,78,0.45)',
                  borderRadius: 999,
                  color: '#D7E6BD',
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: 'none',
                }}
              >
                <PulseDot size={8} />
                WhatsApp
              </a>
              <Link
                to="/contacto"
                className="btn-lime"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 22px',
                  height: 42,
                  background: 'linear-gradient(135deg,#B6DA66 0%,#A4CE4E 100%)',
                  borderRadius: 999,
                  color: colors.navy,
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: 'none',
                  boxShadow: '0 8px 20px -8px rgba(164,206,78,0.6)',
                }}
              >
                Solicitar asesoría
              </Link>
            </div>
          </>
        )}

        {isMobile && (
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menú"
            aria-expanded={open}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 5,
              width: 46,
              height: 46,
              padding: '0 11px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(174,182,191,0.3)',
              borderRadius: 12,
              cursor: 'pointer',
            }}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              style={{ height: 2, background: '#E8EEF3', borderRadius: 2 }}
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              style={{ height: 2, background: '#E8EEF3', borderRadius: 2 }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              style={{ height: 2, background: colors.lime, borderRadius: 2 }}
            />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isMobile && open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
            style={{ overflow: 'hidden', background: '#08182a' }}
          >
            <div
              style={{
                borderTop: '1px solid rgba(164,206,78,0.15)',
                padding: `10px ${layout.gutter} 22px`,
              }}
            >
              <nav style={{ display: 'flex', flexDirection: 'column' }}>
                {NAV_ITEMS.map((item, i) => {
                  const active = isActive(item.to)
                  return (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                    >
                      <Link
                        to={item.to}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '14px 4px',
                          color: active ? colors.lime : '#C9D4DE',
                          fontWeight: active ? 700 : 500,
                          fontSize: 16,
                          textDecoration: 'none',
                          borderBottom: '1px solid rgba(255,255,255,0.06)',
                        }}
                      >
                        {item.label}
                        <span
                          style={{
                            width: 7,
                            height: 7,
                            borderRadius: '50%',
                            background: colors.lime,
                            opacity: active ? 1 : 0,
                          }}
                        />
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>
              <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    height: 46,
                    border: '1px solid rgba(164,206,78,0.45)',
                    borderRadius: 999,
                    color: '#D7E6BD',
                    fontWeight: 600,
                    fontSize: 15,
                    textDecoration: 'none',
                  }}
                >
                  WhatsApp
                </a>
                <Link
                  to="/contacto"
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 46,
                    background: 'linear-gradient(135deg,#B6DA66 0%,#A4CE4E 100%)',
                    borderRadius: 999,
                    color: colors.navy,
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: 'none',
                  }}
                >
                  Solicitar asesoría
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
