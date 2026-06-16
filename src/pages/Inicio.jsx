import { colors, fonts, layout } from '../theme'
import { Container, Eyebrow, ArrowLink, Button, PulseDot, WHATSAPP_URL } from '../components/ui'
import { Reveal, Hero, LiftCard, Zoom } from '../components/motion'

const VALUE_POINTS = [
  'Apoyo técnico para empresas que requieren ordenar su gestión preventiva.',
  'Documentación editable, clara y ajustada al rubro de cada cliente.',
  'Capacitaciones prácticas, con registros y evaluaciones de respaldo.',
  'Acompañamiento frente a auditorías, fiscalizaciones y requerimientos de mutualidad.',
  'Informes de terreno con hallazgos, recomendaciones, responsables y plazos.',
]

const SERVICES = [
  { n: '01', t: 'Asesoría en prevención', d: 'Visitas a terreno, acompañamiento técnico, informes y seguimiento de medidas correctivas.' },
  { n: '02', t: 'Documentación legal y técnica', d: 'RIOHS, MIPER/IPER, procedimientos de trabajo seguro, obligaciones de informar y planes de acción.' },
  { n: '03', t: 'Implementación DS 44', d: 'Diagnóstico inicial, programa preventivo, matriz de peligros y planificación anual.' },
  { n: '04', t: 'Capacitaciones SST', d: 'Charlas y evaluaciones: EPP, Ley Karin, TMERT, MMC, PREXOR, emergencias y riesgos por cargo.' },
  { n: '05', t: 'Planes de emergencia', d: 'Planos de evacuación, simulacros, evaluación de respuesta, brigadas y coordinación interna.' },
  { n: '06', t: 'Inspecciones y auditorías', d: 'Listas de chequeo, informes técnicos, identificación de brechas y control de cumplimiento.' },
]

const METHOD = [
  { n: '01', t: 'Diagnóstico inicial', d: 'Revisión documental, visita a terreno e identificación de brechas legales y de riesgos.', active: true },
  { n: '02', t: 'Plan de acción', d: 'Priorización de medidas, responsables, fechas de cumplimiento e indicadores de avance.' },
  { n: '03', t: 'Implementación', d: 'Elaboración de documentos, capacitaciones, registros, procedimientos y apoyo técnico.' },
  { n: '04', t: 'Seguimiento', d: 'Informes periódicos, verificación de medidas correctivas y mejora continua.' },
]

const RUBROS = [
  'Construcción y obras viales',
  'Comercio y retail',
  'Gastronomía',
  'Logística y transporte',
  'Empresas contratistas',
  'Agrícola y forestal',
  'Oficinas y centros médicos',
]

const NORMS = ['Ley 16.744', 'DS 44', 'DS 594', 'Ley Karin', 'Protocolos MINSAL / SUSESO']

const h2 = {
  margin: 0,
  fontFamily: fonts.heading,
  fontWeight: 800,
  fontSize: 'clamp(28px,3.6vw,40px)',
  lineHeight: 1.1,
  letterSpacing: '-0.01em',
}

export default function Inicio() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', background: colors.navy }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('/assets/hero-terreno.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(95deg,#0B1F33 0%,#0B1F33 34%,rgba(11,31,51,0.86) 48%,rgba(11,31,51,0.15) 70%,rgba(11,31,51,0) 100%)',
          }}
        />
        <Container style={{ position: 'relative', padding: 'clamp(56px,8vw,84px) 0 clamp(64px,9vw,92px)' }}>
          <Hero style={{ maxWidth: 580 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <span style={{ width: 30, height: 2, background: colors.lime }} />
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  letterSpacing: '0.22em',
                  color: colors.lime,
                  textTransform: 'uppercase',
                }}
              >
                Prevención de riesgos · Chile
              </span>
            </div>
            <h1
              style={{
                margin: 0,
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 'clamp(34px,5vw,54px)',
                lineHeight: 1.04,
                letterSpacing: '-0.01em',
                color: colors.white,
              }}
            >
              Cumple, protege y mejora la seguridad de tu empresa
            </h1>
            <p
              style={{
                margin: '24px 0 0',
                fontSize: 'clamp(16px,1.6vw,18.5px)',
                lineHeight: 1.6,
                color: colors.lightText,
                maxWidth: 520,
              }}
            >
              Asesoría profesional en prevención de riesgos laborales. Apoyo técnico en terreno,
              documentación, capacitaciones y seguimiento preventivo, con enfoque en el cumplimiento
              de la normativa chilena.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 34 }}>
              <Button to="/contacto" variant="lime">Solicitar evaluación inicial</Button>
              <Button href={WHATSAPP_URL} variant="ghostLight">
                <PulseDot />
                Escríbenos por WhatsApp
              </Button>
            </div>
          </Hero>
        </Container>
      </section>

      {/* TRUST STRIP */}
      <section style={{ background: colors.navyDark, borderTop: '1px solid rgba(164,206,78,0.16)' }}>
        <Container
          style={{
            padding: '22px 0',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '14px 28px',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 11.5,
              letterSpacing: '0.16em',
              color: '#7C8B99',
              textTransform: 'uppercase',
            }}
          >
            Marco normativo que dominamos
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {NORMS.map((n) => (
              <span
                key={n}
                style={{
                  padding: '8px 14px',
                  border: '1px solid rgba(174,182,191,0.22)',
                  borderRadius: 999,
                  color: '#D7E0E8',
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                {n}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* PROPUESTA DE VALOR */}
      <section>
        <Container style={{ padding: 'clamp(56px,9vw,86px) 0' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
              gap: '48px 56px',
              alignItems: 'start',
            }}
          >
            <div>
              <Eyebrow>Propuesta de valor</Eyebrow>
              <h2 style={{ ...h2, color: colors.ink }}>
                Prevención convertida en un sistema ordenado y aplicable
              </h2>
              <p style={{ margin: '22px 0 0', fontSize: 16.5, lineHeight: 1.68, color: colors.muted }}>
                PrevenCore combina asesoría técnica, elaboración documental, capacitaciones, visitas,
                informes y seguimiento de medidas correctivas. Un servicio práctico, documentado y
                aplicable en terreno.
              </p>
              <ArrowLink to="/servicios" style={{ marginTop: 28 }}>Conocer los servicios</ArrowLink>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {VALUE_POINTS.map((text, i) => (
                <Reveal
                  key={i}
                  delay={Math.min(i, 6) * 0.07}
                  style={{
                    display: 'flex',
                    gap: 16,
                    background: colors.white,
                    border: `1px solid ${colors.border}`,
                    borderRadius: 12,
                    padding: '20px 22px',
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 600, color: colors.limeDark, paddingTop: 2 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.55, color: colors.slate }}>{text}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICIOS PREVIEW */}
      <section style={{ background: colors.white, borderTop: `1px solid ${colors.border}`, borderBottom: `1px solid ${colors.border}` }}>
        <Container style={{ padding: 'clamp(56px,9vw,86px) 0' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 18,
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: 46,
            }}
          >
            <div>
              <Eyebrow>Servicios</Eyebrow>
              <h2 style={{ ...h2, color: colors.ink, maxWidth: 620 }}>
                Soluciones técnicas para cada etapa de la gestión preventiva
              </h2>
            </div>
            <ArrowLink to="/servicios" style={{ whiteSpace: 'nowrap' }}>Ver todos</ArrowLink>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 18 }}>
            {SERVICES.map((s, i) => (
              <LiftCard
                key={s.n}
                delay={Math.min(i, 6) * 0.06}
                style={{
                  background: colors.card,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 14,
                  padding: '28px 26px',
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: colors.navy,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    fontWeight: 600,
                    color: colors.lime,
                    marginBottom: 18,
                  }}
                >
                  {s.n}
                </div>
                <h3 style={{ margin: '0 0 9px', fontFamily: fonts.heading, fontWeight: 700, fontSize: 18.5, color: colors.ink }}>
                  {s.t}
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: colors.muted }}>{s.d}</p>
              </LiftCard>
            ))}
          </div>
        </Container>
      </section>

      {/* METODOLOGÍA */}
      <section style={{ background: colors.navy, position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '38%',
            height: '100%',
            background: 'linear-gradient(135deg,transparent 0%,transparent 55%,rgba(164,206,78,0.07) 100%)',
          }}
        />
        <Container style={{ position: 'relative', padding: 'clamp(56px,9vw,86px) 0' }}>
          <Eyebrow color={colors.lime}>Metodología</Eyebrow>
          <h2 style={{ ...h2, color: colors.white, maxWidth: 560, margin: '0 0 50px' }}>
            Cómo trabajamos contigo
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 20 }}>
            {METHOD.map((m, i) => (
              <Reveal
                key={m.n}
                delay={Math.min(i, 6) * 0.07}
                style={{ borderTop: `2px solid ${m.active ? colors.lime : 'rgba(164,206,78,0.35)'}`, paddingTop: 22 }}
              >
                <span style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.lime, fontWeight: 600 }}>{m.n}</span>
                <h3 style={{ margin: '12px 0 10px', fontFamily: fonts.heading, fontWeight: 700, fontSize: 19, color: colors.white }}>
                  {m.t}
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: '#9DACBA' }}>{m.d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* RUBROS PREVIEW */}
      <section>
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
              src="/assets/capacitacion.png"
              alt="Capacitación en seguridad laboral"
              style={{ position: 'relative', borderRadius: 16, minHeight: 300 }}
            />
            <div>
              <Eyebrow>Rubros</Eyebrow>
              <h2 style={{ ...h2, color: colors.ink, fontSize: 'clamp(26px,3.4vw,36px)', margin: '0 0 22px' }}>
                Acompañamos a empresas de distintos sectores
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {RUBROS.map((r) => (
                  <span
                    key={r}
                    style={{
                      padding: '9px 15px',
                      background: colors.white,
                      border: `1px solid ${colors.border}`,
                      borderRadius: 999,
                      fontSize: 14,
                      color: colors.slate,
                    }}
                  >
                    {r}
                  </span>
                ))}
              </div>
              <ArrowLink to="/rubros" style={{ marginTop: 28 }}>Ver rubros atendidos</ArrowLink>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ background: colors.lime }}>
        <Container
          style={{
            padding: 'clamp(48px,7vw,64px) 0',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 28,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ maxWidth: 640 }}>
            <h2 style={{ ...h2, color: colors.navy, fontSize: 'clamp(26px,3.4vw,38px)', lineHeight: 1.12 }}>
              Solicita una evaluación inicial para tu empresa
            </h2>
            <p style={{ margin: '16px 0 0', fontSize: 16.5, lineHeight: 1.6, color: '#1E3A1B' }}>
              Recibe orientación para ordenar la gestión preventiva, prepararte ante una fiscalización
              y proteger a tus trabajadores.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <Button to="/contacto" variant="navy" style={{ height: 54 }}>Solicitar asesoría</Button>
            <Button href={WHATSAPP_URL} variant="outlineNavy" style={{ height: 54 }}>WhatsApp</Button>
          </div>
        </Container>
      </section>
    </>
  )
}
