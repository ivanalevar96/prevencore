import nodemailer from 'nodemailer'

const CONTACT_TO = process.env.CONTACT_TO || 'contacto@nexopreventivo.cl'
const SMTP_FROM = process.env.SMTP_FROM || CONTACT_TO

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Método no permitido.' })
  }

  const { nombre, empresa, email, telefono, rubro, mensaje } = req.body || {}

  if (!nombre?.trim() || (!email?.trim() && !telefono?.trim()) || !mensaje?.trim()) {
    return res.status(400).json({
      error: 'Completa tu nombre, un medio de contacto (correo o teléfono) y tu mensaje.',
    })
  }

  const { SMTP_USER, SMTP_PASS, SMTP_PORT } = process.env

  if (!SMTP_USER || !SMTP_PASS) {
    return res.status(503).json({
      error:
        'El envío de correos aún no está disponible: la casilla de Google Workspace está en configuración. Por favor contáctanos por WhatsApp mientras tanto.',
    })
  }

  const port = Number(SMTP_PORT) || 465

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })

    await transporter.sendMail({
      from: `"Formulario NexoPreventivo" <${SMTP_FROM}>`,
      to: CONTACT_TO,
      replyTo: email?.trim() || undefined,
      subject: `Nueva solicitud de contacto — ${nombre}`,
      text: [
        `Nombre: ${nombre}`,
        empresa ? `Empresa: ${empresa}` : null,
        email ? `Correo: ${email}` : null,
        telefono ? `Teléfono: ${telefono}` : null,
        rubro ? `Rubro: ${rubro}` : null,
        '',
        'Mensaje:',
        mensaje,
      ]
        .filter(Boolean)
        .join('\n'),
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Error enviando correo de contacto:', err)
    return res.status(500).json({
      error: 'No pudimos enviar tu solicitud en este momento. Intenta de nuevo o escríbenos por WhatsApp.',
    })
  }
}
