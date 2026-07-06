import { colors, fonts } from '../theme'
import { Container, Eyebrow, ArrowLink } from '../components/ui'
import { Reveal, Zoom } from '../components/motion'
import SubHero from '../components/SubHero'

const ICON_PROPS = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

const ICONS = {
  '01': (
    <svg {...ICON_PROPS}>
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  '02': (
    <svg {...ICON_PROPS}>
      <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v4h4" />
      <path d="M9 13h6M9 16.5h6M9 9.5h2" />
    </svg>
  ),
  '03': (
    <svg {...ICON_PROPS}>
      <rect x="6" y="4" width="12" height="17" rx="1.5" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M9 13l2 2 4-4" />
    </svg>
  ),
  '04': (
    <svg {...ICON_PROPS}>
      <path d="M12 3l10 5-10 5-10-5 10-5z" />
      <path d="M6 10.5V16c0 1.5 2.5 3 6 3s6-1.5 6-3v-5.5" />
    </svg>
  ),
  '05': (
    <svg {...ICON_PROPS}>
      <path d="M12 3l10 18H2L12 3z" />
      <path d="M12 10v4" />
      <circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  '06': (
    <svg {...ICON_PROPS}>
      <path d="M12 20s-7-4.5-9.5-9C1 7.5 3 4 6.5 4c2 0 3.3 1.2 4 2.2C11.2 5.2 12.5 4 14.5 4 18 4 20 7.5 18.5 11c-2.5 4.5-6.5 9-6.5 9z" />
      <path d="M5 12h3l1.5 3 2-6 1.5 3H18" />
    </svg>
  ),
  '07': (
    <svg {...ICON_PROPS}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5L21 21" />
    </svg>
  ),
}

const SERVICES = [
  { n: '01', t: 'Asesoría en prevención de riesgos', d: 'Visitas a terreno, acompañamiento técnico, informes, seguimiento de medidas correctivas y apoyo frente a fiscalizaciones.' },
  { n: '02', t: 'Documentación legal y técnica', d: 'RIOHS, MIPER/IPER, procedimientos de trabajo seguro, obligaciones de informar, registros de capacitación y planes de acción.' },
  { n: '03', t: 'Implementación DS 44', d: 'Diagnóstico inicial, programa preventivo, matriz de identificación de peligros, planificación anual y seguimiento documental.' },
  { n: '04', t: 'Capacitaciones SST', d: 'Charlas y evaluaciones en uso de extintores, EPP, Ley Karin, TMERT, MMC, PREXOR, emergencias y riesgos por cargo.' },
  { n: '05', t: 'Planes de emergencia', d: 'Elaboración de planes, planos de evacuación, simulacros, evaluación de respuesta, brigadas y coordinación interna.' },
  { n: '06', t: 'Protocolos MINSAL / SUSESO', d: 'Apoyo en gestión de protocolos psicosociales, TMERT, PREXOR, MMC, radiación UV y otros riesgos según exposición.' },
  { n: '07', t: 'Inspecciones y auditorías', d: 'Listas de chequeo, informes técnicos, identificación de brechas y control de cumplimiento normativo.' },
]

export default function Servicios() {
  return (
    <>
      <SubHero
        eyebrow="Servicios"
        title="Asesoría, documentación, capacitación y seguimiento"
        subtitle="Servicios pensados para que tu empresa cumpla la normativa chilena, ordene su documentación y mantenga una gestión preventiva activa y verificable."
        titleMax={780}
      />

      {/* GRID */}
      <section style={{ background: colors.navyDark }}>
        <Container style={{ paddingBlock: 'clamp(52px,8vw,80px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 22 }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.n} delay={Math.min(i, 6) * 0.06} style={{ height: '100%' }}>
                <div className="service-card">
                  <span className="service-card__num">{s.n}</span>
                  <div className="service-card__badge">{ICONS[s.n]}</div>
                  <h3 className="service-card__title">{s.t}</h3>
                  <p className="service-card__desc">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* IMAGE BAND */}
      <section style={{ background: colors.white, borderTop: `1px solid ${colors.border}`, borderBottom: `1px solid ${colors.border}` }}>
        <Container style={{ paddingBlock: 'clamp(56px,9vw,86px)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
              gap: '48px 56px',
              alignItems: 'center',
            }}
          >
            <Zoom
              src="/assets/emergencias.png"
              alt="Preparación y respuesta ante emergencias"
              style={{ position: 'relative', borderRadius: 16, minHeight: 320 }}
            />
            <div>
              <Eyebrow>Aplicable en terreno</Eyebrow>
              <h2
                style={{
                  margin: '0 0 18px',
                  fontFamily: fonts.heading,
                  fontWeight: 800,
                  fontSize: 'clamp(26px,3.4vw,36px)',
                  lineHeight: 1.12,
                  letterSpacing: '-0.01em',
                  color: colors.ink,
                }}
              >
                Evidencia útil para auditorías y fiscalizaciones
              </h2>
              <p style={{ margin: '0 0 16px', fontSize: 16, lineHeight: 1.7, color: colors.muted }}>
                Cada servicio entrega documentación ordenada, registros y planes de acción con
                responsables y plazos. Preparamos a tu empresa para responder ante una fiscalización
                con respaldo técnico.
              </p>
              <ArrowLink to="/contacto">Solicita una revisión documental</ArrowLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
