import { colors, fonts } from '../theme'
import { Container } from './ui'
import { Hero } from './motion'

// Shared inner-page hero (dark navy banner with accent eyebrow)
export default function SubHero({ eyebrow, title, subtitle, titleMax = 760, subtitleMax = 680 }) {
  return (
    <section style={{ background: colors.navy, position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          background:
            'linear-gradient(135deg,transparent 0%,transparent 50%,rgba(164,206,78,0.08) 100%)',
        }}
      />
      <Container style={{ position: 'relative', paddingBlock: 'clamp(52px,7vw,72px) clamp(56px,8vw,76px)' }}>
        <Hero>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
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
              {eyebrow}
            </span>
          </div>
          <h1
            style={{
              margin: 0,
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 'clamp(32px,4.6vw,50px)',
              lineHeight: 1.06,
              letterSpacing: '-0.01em',
              color: colors.white,
              maxWidth: titleMax,
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                margin: '24px 0 0',
                fontSize: 'clamp(16px,1.6vw,18px)',
                lineHeight: 1.65,
                color: colors.lightText,
                maxWidth: subtitleMax,
              }}
            >
              {subtitle}
            </p>
          )}
        </Hero>
      </Container>
    </section>
  )
}
