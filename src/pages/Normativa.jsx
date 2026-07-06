import { colors, fonts } from '../theme'
import { Container } from '../components/ui'
import { Reveal } from '../components/motion'
import SubHero from '../components/SubHero'

const NORMS = [
  { tag: 'Ley 16.744', d: 'Seguro social contra riesgos de accidentes del trabajo y enfermedades profesionales.' },
  { tag: 'DS 44', d: 'Gestión preventiva, programa de trabajo y enfoque de mejora continua en seguridad y salud en el trabajo.' },
  { tag: 'DS 594', d: 'Condiciones sanitarias y ambientales básicas en los lugares de trabajo.' },
  { tag: 'Código del Trabajo', small: true, d: 'Obligaciones del empleador, reglamento interno y condiciones laborales.' },
  { tag: 'Ley 21.643\nLey Karin', small: true, d: 'Prevención del acoso laboral, acoso sexual y violencia en el trabajo.' },
  { tag: 'Protocolos MINSAL / SUSESO', small: true, d: 'Gestión de riesgos específicos como psicosocial, TMERT, PREXOR, MMC y otros según exposición.' },
]

export default function Normativa() {
  return (
    <>
      <SubHero
        eyebrow="Normativa chilena"
        title="Marco legal aplicable a la prevención de riesgos"
        subtitle="Vinculamos cada servicio a la normativa vigente. Te ayudamos a entenderla y aplicarla, sin convertir el cumplimiento en un trámite incomprensible."
        titleMax={780}
        subtitleMax={700}
      />

      {/* LIST */}
      <section>
        <Container maxWidth="1040px" style={{ padding: 'clamp(52px,8vw,80px) 0 40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {NORMS.map((n, i) => (
              <Reveal
                key={n.tag}
                delay={Math.min(i, 6) * 0.05}
                style={{
                  background: colors.white,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 14,
                  padding: '26px 28px',
                  display: 'grid',
                  gridTemplateColumns: '160px 1fr',
                  gap: 20,
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: n.small ? '10px 14px' : '10px 0',
                    background: colors.navy,
                    borderRadius: 9,
                    fontFamily: fonts.heading,
                    fontWeight: 700,
                    fontSize: n.small ? 14 : 16,
                    color: colors.lime,
                    textAlign: 'center',
                    lineHeight: 1.25,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {n.tag}
                </span>
                <span style={{ fontSize: 15.5, lineHeight: 1.6, color: '#3A4754' }}>{n.d}</span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* DISCLAIMER */}
      <section>
        <Container maxWidth="1040px" style={{ padding: '0 0 clamp(56px,9vw,86px)' }}>
          <div
            style={{
              background: '#EEF4E2',
              border: '1px solid #D2E3AE',
              borderLeft: `4px solid ${colors.lime}`,
              borderRadius: 12,
              padding: '28px 30px',
            }}
          >
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                letterSpacing: '0.18em',
                color: colors.limeText,
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Nuestro compromiso
            </div>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: '#2E3D22' }}>
              Nuestro trabajo es apoyar el cumplimiento legal y la gestión preventiva.{' '}
              <strong style={{ color: '#1E3A1B' }}>No prometemos eliminar multas</strong>: entregamos
              respaldo técnico, documentación ordenada y planes de acción para que tu empresa esté
              preparada ante auditorías y fiscalizaciones.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
