import { Link } from 'react-router-dom'
import { colors, fonts } from '../theme'
import { Container } from '../components/ui'
import { LiftCard } from '../components/motion'
import SubHero from '../components/SubHero'

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
        <Container style={{ padding: 'clamp(52px,8vw,80px) 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18 }}>
            {RUBROS.map((r, i) => (
              <LiftCard
                key={r.n}
                delay={Math.min(i, 6) * 0.05}
                style={{
                  background: colors.white,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 16,
                  padding: '30px 28px',
                }}
              >
                <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 600, color: colors.limeDark }}>{r.n}</span>
                <h3 style={{ margin: '10px 0 10px', fontFamily: fonts.heading, fontWeight: 700, fontSize: 19.5, color: colors.ink }}>
                  {r.t}
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: colors.muted }}>{r.d}</p>
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
