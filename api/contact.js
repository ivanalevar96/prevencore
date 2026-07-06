import nodemailer from 'nodemailer'

const CONTACT_TO = process.env.CONTACT_TO || 'contacto@nexopreventivo.cl'
const SMTP_FROM = process.env.SMTP_FROM || CONTACT_TO
const SITE_URL = process.env.SITE_URL || 'https://nexopreventivo.cl'
const WHATSAPP_URL = 'https://wa.me/56983100293'

const NAVY = '#0B1F33'
const NAVY_DARK = '#08182A'
const LIME = '#A4CE4E'

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// Shared branded wrapper: navy header with logo, white body, muted footer.
// Inline styles only — most email clients strip <style> blocks in <head>.
function emailLayout({ preheader = '', bodyHtml }) {
  return `<!doctype html>
<html lang="es">
  <body style="margin:0;padding:0;background:#F4F6F8;font-family:Arial,Helvetica,sans-serif;">
    <span style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F4F6F8;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#FFFFFF;border-radius:14px;overflow:hidden;border:1px solid #E5EAEF;">
            <tr>
              <td align="center" style="background:linear-gradient(150deg,${NAVY} 0%,${NAVY_DARK} 100%);padding:28px 24px;">
                <img src="${SITE_URL}/assets/logo.png" alt="NexoPreventivo" height="48" style="display:block;height:48px;width:auto;" />
              </td>
            </tr>
            <tr>
              <td style="padding:32px 28px;color:#11212F;font-size:15px;line-height:1.6;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:18px 28px;background:#F7F9FB;border-top:1px solid #E5EAEF;color:#8D9CAA;font-size:12px;text-align:center;">
                NexoPreventivo · Asesorías en Prevención de Riesgos · Valdivia, Chile
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

function notificationEmail({ nombre, empresa, email, telefono, rubro, mensaje }) {
  const rows = [
    ['Nombre', nombre],
    ['Empresa', empresa],
    ['Correo', email],
    ['Teléfono', telefono],
    ['Rubro', rubro],
  ]
    .filter(([, value]) => value)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:6px 0;color:#8D9CAA;font-size:12px;text-transform:uppercase;letter-spacing:0.06em;white-space:nowrap;vertical-align:top;">${label}</td>
          <td style="padding:6px 0 6px 16px;color:#11212F;font-size:14.5px;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join('')

  const bodyHtml = `
    <h1 style="margin:0 0 18px;font-size:19px;color:${NAVY};">Nueva solicitud de contacto</h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:22px;">${rows}</table>
    <div style="border-top:1px solid #E5EAEF;padding-top:16px;">
      <p style="margin:0 0 6px;color:#8D9CAA;font-size:12px;text-transform:uppercase;letter-spacing:0.06em;">Mensaje</p>
      <p style="margin:0;white-space:pre-line;">${escapeHtml(mensaje)}</p>
    </div>`

  return emailLayout({ preheader: `Nueva solicitud de ${nombre}`, bodyHtml })
}

function confirmationEmail({ nombre }) {
  const bodyHtml = `
    <h1 style="margin:0 0 14px;font-size:19px;color:${NAVY};">¡Gracias por escribirnos, ${escapeHtml(nombre)}!</h1>
    <p style="margin:0 0 18px;">
      Recibimos tu solicitud y la revisaremos a la brevedad. Te responderemos dentro de las
      próximas 24 horas o 1 día hábil.
    </p>
    <p style="margin:0 0 24px;">
      Si necesitas atención inmediata, también puedes escribirnos por WhatsApp.
    </p>
    <table role="presentation" cellpadding="0" cellspacing="0">
      <tr>
        <td style="border-radius:999px;background:${LIME};">
          <a href="${WHATSAPP_URL}" style="display:inline-block;padding:12px 24px;color:${NAVY};font-weight:bold;font-size:14.5px;text-decoration:none;">
            Escríbenos por WhatsApp
          </a>
        </td>
      </tr>
    </table>`

  return emailLayout({ preheader: 'Recibimos tu solicitud — te responderemos pronto', bodyHtml })
}

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

    const fields = { nombre, empresa, email, telefono, rubro, mensaje }

    const sends = [
      transporter.sendMail({
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
        html: notificationEmail(fields),
      }),
    ]

    if (email?.trim()) {
      sends.push(
        transporter.sendMail({
          from: `"NexoPreventivo" <${SMTP_FROM}>`,
          to: email.trim(),
          replyTo: CONTACT_TO,
          subject: 'Confirmamos tu solicitud — NexoPreventivo',
          text: `Hola ${nombre}, recibimos tu solicitud y te responderemos dentro de 24 horas o 1 día hábil. Si necesitas atención inmediata, escríbenos por WhatsApp: ${WHATSAPP_URL}`,
          html: confirmationEmail(fields),
        })
      )
    }

    await Promise.all(sends)

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Error enviando correo de contacto:', err)
    return res.status(500).json({
      error: 'No pudimos enviar tu solicitud en este momento. Intenta de nuevo o escríbenos por WhatsApp.',
    })
  }
}
