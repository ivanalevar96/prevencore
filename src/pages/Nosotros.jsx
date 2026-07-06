import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import { colors, fonts } from '../theme'
import { Container, Eyebrow } from '../components/ui'
import { Reveal, Zoom } from '../components/motion'
import SubHero from '../components/SubHero'

const PURPOSE = [
  {
    label: 'Misión',
    bg: colors.navy,
    labelColor: colors.lime,
    textColor: '#D2DCE4',
    text: 'Entregar asesoría profesional en prevención de riesgos laborales, ayudando a las empresas a identificar peligros, controlar riesgos, cumplir la normativa chilena vigente y fortalecer una cultura preventiva práctica, cercana y medible.',
  },
  {
    label: 'Visión',
    bg: colors.navy,
    labelColor: colors.lime,
    textColor: '#D2DCE4',
    text: 'Ser reconocidos como una consultora confiable y moderna en seguridad y salud en el trabajo, destacando por la calidad técnica, la respuesta oportuna, la documentación ordenada y el acompañamiento permanente a empresas de distintos rubros.',
  },
  {
    label: 'Propósito',
    bg: colors.lime,
    labelColor: '#1E3A1B',
    textColor: '#16321A',
    weight: 500,
    text: 'Proteger vidas, apoyar a las empresas y transformar la prevención en una herramienta real de gestión, cumplimiento y mejora continua.',
  },
]

const VALUES = [
  { t: 'Responsabilidad', d: 'Trabajamos con criterio técnico, compromiso y respeto por la vida y salud de las personas.' },
  { t: 'Cumplimiento', d: 'Orientamos cada servicio al cumplimiento legal, documental y operacional que requiere la empresa.' },
  { t: 'Claridad', d: 'Entregamos información comprensible, aplicable y útil para trabajadores, jefaturas y representantes legales.' },
  { t: 'Mejora continua', d: 'Promovemos planes de acción, seguimiento y control permanente de las condiciones de seguridad.' },
  { t: 'Confianza', d: 'Mantenemos una relación profesional, transparente y orientada a resultados verificables.' },
]

const sectionH2 = {
  margin: 0,
  fontFamily: fonts.heading,
  fontWeight: 800,
  fontSize: 'clamp(28px,3.6vw,40px)',
  lineHeight: 1.1,
  letterSpacing: '-0.01em',
  color: colors.ink,
}

export default function Nosotros() {
  return (
    <>
      <SubHero
        eyebrow="Nosotros"
        title="Seguridad, control, cumplimiento y confianza"
        subtitle="Somos una empresa dedicada a entregar soluciones en seguridad y salud laboral, con un enfoque práctico, técnico y orientado al cumplimiento de la normativa chilena."
      />

      {/* IDENTIDAD */}
      <section>
        <Container style={{ paddingBlock: 'clamp(56px,9vw,86px)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
              gap: '48px 56px',
              alignItems: 'center',
            }}
          >
            <div>
              <Eyebrow>Identidad corporativa</Eyebrow>
              <h2 style={{ ...sectionH2, fontSize: 'clamp(26px,3.4vw,38px)', lineHeight: 1.12, margin: '0 0 22px' }}>
                Prevención técnica, cercana y medible
              </h2>
              <p style={{ margin: '0 0 18px', fontSize: 16, lineHeight: 1.7, color: colors.muted }}>
                NexoPreventivo es una empresa orientada a entregar asesorías técnicas en prevención de
                riesgos laborales, apoyando a organizaciones que necesitan ordenar su gestión
                preventiva, cumplir con la normativa vigente y proteger la seguridad y salud de sus
                trabajadores.
              </p>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: colors.muted }}>
                Nuestra identidad visual proyecta seguridad, control, cumplimiento y confianza. El
                escudo representa protección; el check, verificación y respaldo técnico; los colores
                azul oscuro, verde lima y plata transmiten profesionalismo, modernidad y enfoque
                preventivo.
              </p>
            </div>
            <Zoom
              src="/assets/documentacion.png"
              alt="Documentación técnica y seguimiento de indicadores"
              style={{ position: 'relative', borderRadius: 16, minHeight: 340 }}
            />
          </div>
        </Container>
      </section>

      {/* MISION VISION PROPOSITO */}
      <section style={{ background: colors.white, borderTop: `1px solid ${colors.border}`, borderBottom: `1px solid ${colors.border}` }}>
        <Container style={{ paddingBlock: 'clamp(56px,9vw,86px)' }}>
          <Eyebrow>Propósito</Eyebrow>
          <h2 style={{ ...sectionH2, margin: '0 0 46px' }}>Misión, visión y propósito</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 18 }}>
            {PURPOSE.map((p, i) => (
              <Reveal
                key={p.label}
                delay={Math.min(i, 6) * 0.07}
                style={{ background: p.bg, borderRadius: 16, padding: '34px 30px' }}
              >
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 12,
                    letterSpacing: '0.18em',
                    color: p.labelColor,
                    textTransform: 'uppercase',
                    marginBottom: 18,
                  }}
                >
                  {p.label}
                </div>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: p.textColor, fontWeight: p.weight || 400 }}>
                  {p.text}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* VALORES */}
      <section>
        <Container style={{ paddingBlock: 'clamp(56px,9vw,86px)' }}>
          <Eyebrow>Valores corporativos</Eyebrow>
          <h2 style={{ ...sectionH2, margin: '0 0 46px' }}>Lo que guía cada asesoría</h2>
          <Swiper
            className="values-swiper"
            modules={[EffectCoverflow, Navigation]}
            effect="coverflow"
            grabCursor
            centeredSlides
            initialSlide={2}
            navigation
            slidesPerView="auto"
            coverflowEffect={{ rotate: 30, stretch: 0, depth: 130, modifier: 1, slideShadows: false }}
            style={{ padding: '10px 0 54px' }}
          >
            {VALUES.map((v) => (
              <SwiperSlide key={v.t} style={{ width: 280, height: 240 }}>
                <div
                  style={{
                    height: '100%',
                    background: colors.white,
                    border: `1px solid ${colors.border}`,
                    borderRadius: 14,
                    padding: '28px 26px',
                    borderTop: `3px solid ${colors.lime}`,
                    boxShadow: '0 18px 40px -22px rgba(11,31,51,0.35)',
                  }}
                >
                  <h3 style={{ margin: '0 0 10px', fontFamily: fonts.heading, fontWeight: 700, fontSize: 19, color: colors.navyMid }}>
                    {v.t}
                  </h3>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: colors.muted }}>{v.d}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
    </>
  )
}
