import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { colors, fonts } from '../theme'
import { Container, WHATSAPP_URL } from '../components/ui'
import SubHero from '../components/SubHero'

const RUBRO_OPTIONS = [
  { value: '', label: 'Selecciona tu rubro' },
  { value: 'construccion', label: 'Construcción y obras viales' },
  { value: 'comercio', label: 'Comercio y retail' },
  { value: 'gastronomia', label: 'Gastronomía y alimentación' },
  { value: 'logistica', label: 'Bodegas, logística y transporte' },
  { value: 'contratista', label: 'Empresa contratista' },
  { value: 'agricola', label: 'Agrícola y forestal' },
  { value: 'servicios', label: 'Oficinas y servicios profesionales' },
  { value: 'otro', label: 'Otro' },
]

const labelStyle = {
  display: 'block',
  fontFamily: fonts.mono,
  fontSize: 11,
  letterSpacing: '0.14em',
  color: colors.muted,
  textTransform: 'uppercase',
  marginBottom: 9,
}
const fieldStyle = {
  width: '100%',
  height: 48,
  padding: '0 15px',
  background: colors.card,
  border: '1px solid #DCE3EA',
  borderRadius: 9,
  fontSize: 15,
  color: colors.ink,
  outline: 'none',
}

const EMPTY = { nombre: '', empresa: '', email: '', telefono: '', rubro: '', mensaje: '' }

export default function Contacto() {
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const set = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setError('')
  }

  const submit = (e) => {
    e.preventDefault()
    if (!form.nombre.trim() || (!form.email.trim() && !form.telefono.trim()) || !form.mensaje.trim()) {
      setError('Completa tu nombre, un medio de contacto (correo o teléfono) y tu mensaje.')
      return
    }
    setSent(true)
    setError('')
  }

  const reset = () => {
    setForm(EMPTY)
    setSent(false)
    setError('')
  }

  return (
    <>
      <SubHero
        eyebrow="Contacto"
        title="Solicita una evaluación inicial"
        subtitle="Cuéntanos sobre tu empresa y recibe orientación para ordenar tu gestión preventiva. Te respondemos a la brevedad."
        subtitleMax={660}
      />

      <section>
        <Container style={{ padding: 'clamp(48px,8vw,74px) 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 40 }}>
            {/* FORM */}
            <div
              style={{
                background: colors.white,
                border: `1px solid ${colors.border}`,
                borderRadius: 18,
                padding: 'clamp(28px,4vw,44px)',
              }}
            >
              <AnimatePresence mode="wait">
                {!sent ? (
                  <motion.form
                    key="form"
                    onSubmit={submit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h2 style={{ margin: '0 0 28px', fontFamily: fonts.heading, fontWeight: 800, fontSize: 24, color: colors.ink }}>
                      Escríbenos
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 18 }}>
                      <div>
                        <label style={labelStyle}>Nombre *</label>
                        <input className="field" value={form.nombre} onChange={set('nombre')} placeholder="Tu nombre" style={fieldStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Empresa</label>
                        <input className="field" value={form.empresa} onChange={set('empresa')} placeholder="Nombre de la empresa" style={fieldStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Correo</label>
                        <input className="field" type="email" value={form.email} onChange={set('email')} placeholder="correo@empresa.cl" style={fieldStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Teléfono</label>
                        <input className="field" value={form.telefono} onChange={set('telefono')} placeholder="+56 9 ..." style={fieldStyle} />
                      </div>
                    </div>
                    <div style={{ marginTop: 18 }}>
                      <label style={labelStyle}>Rubro</label>
                      <select className="field" value={form.rubro} onChange={set('rubro')} style={fieldStyle}>
                        {RUBRO_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                    </div>
                    <div style={{ marginTop: 18 }}>
                      <label style={labelStyle}>Mensaje *</label>
                      <textarea
                        className="field"
                        value={form.mensaje}
                        onChange={set('mensaje')}
                        placeholder="Cuéntanos qué necesitas: estado actual de tu gestión preventiva, fiscalización en curso, documentación pendiente, etc."
                        rows={5}
                        style={{ ...fieldStyle, height: 'auto', padding: '14px 15px', resize: 'vertical', lineHeight: 1.55 }}
                      />
                    </div>

                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          style={{
                            marginTop: 16,
                            padding: '12px 16px',
                            background: '#FBEAE9',
                            border: '1px solid #F0C5C1',
                            borderRadius: 9,
                            fontSize: 13.5,
                            color: '#9B3A33',
                            overflow: 'hidden',
                          }}
                        >
                          {error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      type="submit"
                      className="btn-lime"
                      style={{
                        marginTop: 24,
                        width: '100%',
                        height: 54,
                        background: colors.lime,
                        border: 'none',
                        borderRadius: 10,
                        color: colors.navy,
                        fontWeight: 700,
                        fontSize: 16,
                        cursor: 'pointer',
                      }}
                    >
                      Enviar solicitud
                    </button>
                    <p style={{ margin: '16px 0 0', fontSize: 12.5, lineHeight: 1.5, color: '#8693A0' }}>
                      * Indica al menos tu nombre, un medio de contacto y tu mensaje. Protegemos tus
                      datos y solo los usamos para responder tu consulta.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ textAlign: 'center', padding: '30px 10px' }}
                  >
                    <div
                      style={{
                        width: 62,
                        height: 62,
                        borderRadius: '50%',
                        background: '#EEF4E2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 22px',
                        fontSize: 30,
                        color: colors.limeText,
                      }}
                    >
                      ✓
                    </div>
                    <h2 style={{ margin: '0 0 12px', fontFamily: fonts.heading, fontWeight: 800, fontSize: 24, color: colors.ink }}>
                      ¡Gracias por escribirnos!
                    </h2>
                    <p style={{ margin: '0 auto 26px', fontSize: 15.5, lineHeight: 1.65, color: colors.muted, maxWidth: 380 }}>
                      Hemos recibido tu solicitud y te responderemos a la brevedad. Si necesitas
                      atención inmediata, escríbenos por WhatsApp.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 9,
                          padding: '0 24px',
                          height: 48,
                          background: colors.navy,
                          borderRadius: 9,
                          color: colors.white,
                          fontWeight: 700,
                          fontSize: 15,
                          textDecoration: 'none',
                        }}
                      >
                        Abrir WhatsApp
                      </a>
                      <button
                        onClick={reset}
                        style={{
                          padding: '0 24px',
                          height: 48,
                          background: 'transparent',
                          border: '1px solid #DCE3EA',
                          borderRadius: 9,
                          color: colors.navyMid,
                          fontWeight: 600,
                          fontSize: 15,
                          cursor: 'pointer',
                        }}
                      >
                        Enviar otra solicitud
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* INFO */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: colors.navy, borderRadius: 18, padding: 'clamp(28px,4vw,40px)' }}>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 11,
                    letterSpacing: '0.18em',
                    color: colors.lime,
                    textTransform: 'uppercase',
                    marginBottom: 24,
                  }}
                >
                  Datos de contacto
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                  <div>
                    <div style={{ fontSize: 12, color: '#7C8B99', marginBottom: 5 }}>WhatsApp</div>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                      style={{ fontFamily: fonts.heading, fontWeight: 700, fontSize: 19, color: colors.white, textDecoration: 'none' }}
                    >
                      +56 9 8310 0293
                    </a>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: '#7C8B99', marginBottom: 5 }}>Correo</div>
                    <a
                      href="mailto:dv.prevencion@gmail.com"
                      className="contact-link"
                      style={{ fontSize: 16, color: '#E4EAF0', textDecoration: 'none', wordBreak: 'break-all' }}
                    >
                      dv.prevencion@gmail.com
                    </a>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: '#7C8B99', marginBottom: 5 }}>Ciudad / Región</div>
                    <div style={{ fontSize: 16, color: '#E4EAF0' }}>Valdivia, Región de Los Ríos</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: '#7C8B99', marginBottom: 5 }}>Horario de atención</div>
                    <div style={{ fontSize: 16, color: '#E4EAF0' }}>Lunes a Sábado</div>
                  </div>
                </div>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '28px 0' }} />
                <div style={{ fontSize: 12, color: '#7C8B99', marginBottom: 13 }}>Síguenos</div>
                <div style={{ display: 'flex', gap: 10 }}>
                  {[
                    { label: 'Instagram', href: 'https://instagram.com/prevencore' },
                    { label: 'Facebook', href: 'https://facebook.com/prevencore' },
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
                        padding: '9px 15px',
                        border: '1px solid rgba(201,212,222,0.22)',
                        borderRadius: 8,
                        color: '#D7E0E8',
                        textDecoration: 'none',
                        fontSize: 13.5,
                        fontWeight: 500,
                      }}
                    >
                      <span style={{ width: 7, height: 7, borderRadius: 2, background: colors.lime }} />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  background: colors.lime,
                  borderRadius: 16,
                  padding: '24px 28px',
                  textDecoration: 'none',
                }}
              >
                <span>
                  <span style={{ display: 'block', fontFamily: fonts.heading, fontWeight: 800, fontSize: 18, color: colors.navy }}>
                    ¿Prefieres mensaje directo?
                  </span>
                  <span style={{ display: 'block', fontSize: 14, color: '#1E3A1B', marginTop: 4 }}>
                    Escríbenos por WhatsApp ahora
                  </span>
                </span>
                <span
                  style={{
                    flexShrink: 0,
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    background: colors.navy,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.lime,
                    fontSize: 20,
                  }}
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
