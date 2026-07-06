import { colors, fonts } from '../theme'
import { Container, Eyebrow, ArrowLink } from '../components/ui'
import { LiftCard, Zoom } from '../components/motion'
import SubHero from '../components/SubHero'

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
      <section>
        <Container style={{ padding: 'clamp(52px,8vw,80px) 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 18 }}>
            {SERVICES.map((s, i) => (
              <LiftCard
                key={s.n}
                delay={Math.min(i, 6) * 0.05}
                style={{
                  background: colors.white,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 16,
                  padding: '34px 32px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                  <span
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 11,
                      background: colors.navy,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: fonts.mono,
                      fontSize: 15,
                      fontWeight: 600,
                      color: colors.lime,
                      flexShrink: 0,
                    }}
                  >
                    {s.n}
                  </span>
                  <h3 style={{ margin: 0, fontFamily: fonts.heading, fontWeight: 700, fontSize: 21, color: colors.ink }}>
                    {s.t}
                  </h3>
                </div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: colors.muted }}>{s.d}</p>
              </LiftCard>
            ))}
          </div>
        </Container>
      </section>

      {/* IMAGE BAND */}
      <section style={{ background: colors.white, borderTop: `1px solid ${colors.border}`, borderBottom: `1px solid ${colors.border}` }}>
        <Container style={{ padding: 'clamp(56px,9vw,86px) 0' }}>
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
