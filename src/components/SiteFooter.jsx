import { Link } from 'react-router-dom'
import { colors, fonts, layout } from '../theme'
import { WHATSAPP_URL } from './ui'

const shield = '/assets/shield.png'

const NAV = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Rubros', to: '/rubros' },
  { label: 'Normativa', to: '/normativa' },
  { label: 'Contacto', to: '/contacto' },
]

const SERVICIOS = [
  'Asesoría en prevención',
  'Documentación legal',
  'Implementación DS 44',
  'Capacitaciones SST',
  'Planes de emergencia',
]

const colTitle = {
  fontFamily: fonts.mono,
  fontSize: 11,
  letterSpacing: '0.18em',
  color: colors.lime,
  textTransform: 'uppercase',
  marginBottom: 18,
}
const footLink = {
  color: colors.footText,
  textDecoration: 'none',
  fontSize: 14.5,
}

export default function SiteFooter() {
  return (
    <footer
      style={{ background: colors.navyDark, color: colors.footText, fontFamily: fonts.body }}
    >
      <div
        style={{
          maxWidth: layout.maxWidth,
          margin: '0 auto',
          padding: `60px ${layout.gutter} 0`,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
            gap: '40px 32px',
          }}
        >
          <div style={{ gridColumn: '1 / -1', maxWidth: 380 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span
                style={{
                  position: 'relative',
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  background: 'linear-gradient(150deg,#0e2740 0%,#08182a 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'visible',
                  boxShadow: 'inset 0 0 0 1px rgba(164,206,78,0.20)',
                  flexShrink: 0,
                }}
              >
                <img
                  src={shield}
                  alt="NexoPreventivo"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    height: 56,
                    width: 'auto',
                    transform: 'translate(-50%,-54%)',
                    filter: 'drop-shadow(0 5px 9px rgba(0,0,0,0.45))',
                  }}
                />
              </span>
              <span
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 800,
                  fontSize: 20,
                  letterSpacing: '0.02em',
                  color: colors.white,
                }}
              >
                NEXO<span style={{ color: colors.lime }}>PREVENTIVO</span>
              </span>
            </div>
            <p style={{ margin: '18px 0 0', fontSize: 14.5, lineHeight: 1.65, color: colors.footMuted }}>
              Asesoría profesional en prevención de riesgos laborales: cumplimiento normativo,
              gestión preventiva, capacitación y apoyo técnico en terreno en todo Chile.
            </p>
          </div>

          <div>
            <div style={colTitle}>Navegación</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} className="foot-link" style={footLink}>
                  {n.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div style={colTitle}>Servicios</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {SERVICIOS.map((s) => (
                <Link key={s} to="/servicios" className="foot-link" style={footLink}>
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div style={colTitle}>Contacto</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13, fontSize: 14.5 }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="foot-link" style={footLink}>
                WhatsApp +56 9 8310 0293
              </a>
              <a href="mailto:dv.prevencion@gmail.com" className="foot-link" style={footLink}>
                dv.prevencion@gmail.com
              </a>
              <span style={{ color: colors.footMuted }}>Valdivia, Región de Los Ríos</span>
              <span style={{ color: colors.footMuted }}>Lunes a Sábado</span>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              {[
                { label: 'Instagram', href: 'https://instagram.com/nexopreventivo' },
                { label: 'Facebook', href: 'https://facebook.com/nexopreventivo' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-chip"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 7,
                    padding: '8px 13px',
                    border: '1px solid rgba(201,212,222,0.22)',
                    borderRadius: 7,
                    color: colors.footText,
                    textDecoration: 'none',
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  <span style={{ width: 7, height: 7, borderRadius: 2, background: colors.lime }} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 54,
            padding: '22px 0',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px 28px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontSize: 13, color: '#6F7E8C' }}>
            © 2026 NexoPreventivo · Valdivia, Los Ríos, Chile
          </span>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 11.5,
              color: '#5E6E7C',
              letterSpacing: '0.04em',
            }}
          >
            Apoyo al cumplimiento y a la gestión preventiva — no garantizamos la eliminación de multas.
          </span>
        </div>
      </div>
    </footer>
  )
}
