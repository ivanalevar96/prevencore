import { motion } from 'framer-motion'
import { colors } from '../theme'

/**
 * Motion primitives that recreate the original design's enhancement layer
 * (reveal.js) with Framer Motion:
 *   - Reveal  -> scroll-triggered fade-up (data-reveal)
 *   - Hero    -> entrance fade-up on mount (data-hero)
 *   - Lift    -> hover lift + shadow (data-lift)
 *   - Zoom    -> image zoom on hover (data-zoom)
 */

const EASE = [0.22, 0.61, 0.36, 1]

// Scroll reveal with stagger support via `delay`
export function Reveal({ children, delay = 0, y = 20, style, as = 'div', ...rest }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -7% 0px' }}
      transition={{ duration: 0.65, ease: EASE, delay }}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// Hero / heading entrance on mount
export function Hero({ children, style, delay = 0, ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: EASE, delay }}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

// Hover-lift card with optional scroll reveal and accent-border on hover
export function LiftCard({
  children,
  delay = 0,
  style,
  hoverBorder = colors.lime,
  reveal = true,
  ...rest
}) {
  const initial = reveal ? { opacity: 0, y: 20 } : false
  const inView = reveal ? { opacity: 1, y: 0 } : undefined
  return (
    <motion.div
      initial={initial}
      whileInView={inView}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{
        y: -5,
        boxShadow: '0 18px 38px -16px rgba(11,31,51,0.26)',
        borderColor: hoverBorder,
      }}
      transition={{ duration: 0.45, ease: EASE, delay }}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

// Image container that zooms its <img> on hover
export function Zoom({ src, alt, delay = 0, style, imgStyle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover="hover"
      transition={{ duration: 0.65, ease: EASE, delay }}
      style={{ overflow: 'hidden', ...style }}
    >
      <motion.img
        src={src}
        alt={alt}
        variants={{ hover: { scale: 1.045 } }}
        transition={{ duration: 0.5, ease: EASE }}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          ...imgStyle,
        }}
      />
    </motion.div>
  )
}
