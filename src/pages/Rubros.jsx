import { Link } from 'react-router-dom'
import { colors, fonts } from '../theme'
import { Container } from '../components/ui'
import { LiftCard } from '../components/motion'
import SubHero from '../components/SubHero'

const ICON_PROPS = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

const ICONS = {
  '01': (
    <svg {...ICON_PROPS}>
      <path d="M3 16h18" />
      <path d="M5 16a7 7 0 0 1 14 0" />
      <path d="M12 9V6" />
    </svg>
  ),
  '02': (
    <svg {...ICON_PROPS}>
      <path d="M6 8h12l-1 12H7L6 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  ),
  '03': (
    <svg {...ICON_PROPS}>
      <path d="M8 10a4 4 0 0 1 8 0c1.7 0 3 1.3 3 3s-1.3 3-3 3H8c-1.7 0-3-1.3-3-3s1.3-3 3-3z" />
      <path d="M8 16v4h8v-4" />
    </svg>
  ),
  '04': (
    <svg {...ICON_PROPS}>
      <rect x="2" y="10" width="11" height="7" rx="1" />
      <path d="M13 12h4l3 3v2h-7z" />
      <circle cx="6.5" cy="19" r="1.4" />
      <circle cx="16.5" cy="19" r="1.4" />
    </svg>
  ),
  '05': (
    <svg {...ICON_PROPS}>
      <path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2-2 2.1-2.1z" />
    </svg>
  ),
  '06': (
    <svg {...ICON_PROPS}>
      <path d="M5 19c0-7 4-13 13-14 1 9-5 13-13 14z" />
      <path d="M5 19c2-4 4-6 8-8" />
    </svg>
  ),
  '07': (
    <svg {...ICON_PROPS}>
      <rect x="5" y="4" width="14" height="17" rx="1" />
      <path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2" />
    </svg>
  ),
}

const RUBROS = [
  { n: '01', t: 'Construcción y obras viales', d: 'Trabajos en altura, excavaciones, maquinaria pesada y faenas en vía pública.' },
  { n: '02', t: 'Comercio y retail', d: 'Manejo manual de carga, orden y aseo, prevención de caídas y atención de público.' },
  { n: '03', t: 'Gastronomía y alimentación', d: 'Riesgos térmicos, cortes, superficies resbaladizas y manipulación de alimentos.' },
  { n: '04', t: 'Bodegas, logística y transporte', d: 'Movimiento de cargas, grúas horquilla, tránsito interno y gestión de la fatiga.' },
  { n: '05', t: 'Empresas contratistas', d: 'Coordinación con mandantes, documentación de subcontratación y trabajos esporádicos.' },
  { n: '06', t: 'Agrícola, forestal y terreno', d: 'Exposición a radiación UV, maquinaria, plaguicidas y faenas en zonas aisladas.' },
  { n: '07', t: 'Oficinas, colegios y centros médicos', d: 'Riesgos psicosociales, ergonómicos, eléctricos y planes de emergencia.' },
]

export default function Rubros() {
  return (
    <>
      <SubHero
        eyebrow="Rubros"
        title="Conocemos los riesgos de tu sector"
        subtitle="Ajustamos la documentación, las capacitaciones y la asesoría a la realidad operacional de cada rubro, en cualquier región de Chile."
      />

      {/* GRID */}
      <section>
        <Container style={{ paddingBlock: 'clamp(52px,8vw,80px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18 }}>
            {RUBROS.map((r, i) => (
              <LiftCard
                key={r.n}
                delay={Math.min(i, 6) * 0.05}
                style={{
                  background: colors.white,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 16,
                  overflow: 'hidden',
                }}
              >
                <div className="rubro-card__banner">
                  <div className="rubro-card__icon">{ICONS[r.n]}</div>
                </div>
                <div style={{ padding: '24px 26px 28px' }}>
                  <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 600, color: colors.limeDark }}>{r.n}</span>
                  <h3 style={{ margin: '10px 0 10px', fontFamily: fonts.heading, fontWeight: 700, fontSize: 19.5, color: colors.ink }}>
                    {r.t}
                  </h3>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: colors.muted }}>{r.d}</p>
                </div>
              </LiftCard>
            ))}

            {/* Final highlight card */}
            <div
              style={{
                background: colors.navy,
                borderRadius: 16,
                padding: '30px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <h3 style={{ margin: '0 0 10px', fontFamily: fonts.heading, fontWeight: 700, fontSize: 19.5, color: colors.white }}>
                ¿Tu rubro no aparece?
              </h3>
              <p style={{ margin: '0 0 18px', fontSize: 14.5, lineHeight: 1.6, color: '#9DACBA' }}>
                Atendemos empresas de distintos tamaños y actividades. Cuéntanos tu caso.
              </p>
              <Link
                to="/contacto"
                className="link-arrow"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 9,
                  color: colors.lime,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: 'none',
                }}
              >
                Escríbenos <span>→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
