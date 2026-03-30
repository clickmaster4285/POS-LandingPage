import nodemailer from "nodemailer"

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SECURE,
  SMTP_USER,
  SMTP_PASSWORD,
  SMTP_FROM_EMAIL,
  SMTP_FROM_NAME,
} = process.env

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export function createTransport() {
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !SMTP_FROM_EMAIL) {
    throw new Error("SMTP environment variables are not fully configured")
  }

  const port = Number(SMTP_PORT)
  const secure = SMTP_SECURE === "true" || port === 465

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  })
}

export async function sendContactEmail(payload: {
  name: string
  email: string
  company?: string
  phone?: string
  budget?: string
  message: string
}) {
  const transporter = createTransport()

  const fromName = SMTP_FROM_NAME || "ClickMasters POS"
  const subject = `New POS website enquiry — ${payload.name}`
  const preview = "New lead from the ClickMasters POS contact form."

  const rows: { label: string; value: string }[] = [
    { label: "Name", value: payload.name },
    { label: "Email", value: payload.email },
    ...(payload.company ? [{ label: "Company", value: payload.company }] : []),
    ...(payload.phone ? [{ label: "Phone", value: payload.phone }] : []),
    ...(payload.budget ? [{ label: "Budget", value: payload.budget }] : []),
  ]

  const textLines = [
    ...rows.map((r) => `${r.label}: ${r.value}`),
    "",
    payload.message,
  ]
    .filter(Boolean)
    .join("\n")

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0;padding:0;background:#0b0b12;color:#111827;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      ${escapeHtml(preview)}
    </div>

    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#0b0b12;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:680px;">
            <tr>
              <td style="padding:0 6px 14px 6px;">
                <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,Helvetica,sans-serif;">
                  <div style="display:inline-block;padding:10px 14px;border-radius:14px;background:rgba(124,58,237,0.14);border:1px solid rgba(167,139,250,0.25);color:#e9d5ff;font-weight:700;letter-spacing:0.2px;">
                    ClickMasters POS
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:0 6px;">
                <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,Helvetica,sans-serif;background:#ffffff;border-radius:18px;border:1px solid rgba(148,163,184,0.35);overflow:hidden;">
                  <div style="padding:18px 18px 0 18px;">
                    <div style="font-size:12px;letter-spacing:0.22em;text-transform:uppercase;color:#6b7280;font-weight:700;">
                      New enquiry
                    </div>
                    <div style="font-size:24px;line-height:1.25;margin-top:6px;font-weight:800;color:#111827;">
                      ${escapeHtml(payload.name)}
                    </div>
                    <div style="margin-top:10px;height:4px;width:72px;border-radius:999px;background:linear-gradient(90deg,#7c3aed,#d946ef);"></div>
                  </div>

                  <div style="padding:18px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:separate;border-spacing:0 10px;">
                      ${rows
                        .map((r) => {
                          return `<tr>
                            <td style="width:140px;padding:10px 12px;background:#f8fafc;border:1px solid rgba(148,163,184,0.35);border-right:none;border-radius:12px 0 0 12px;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,Helvetica,sans-serif;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.14em;color:#64748b;">
                              ${escapeHtml(r.label)}
                            </td>
                            <td style="padding:10px 12px;background:#ffffff;border:1px solid rgba(148,163,184,0.35);border-left:none;border-radius:0 12px 12px 0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,Helvetica,sans-serif;font-size:14px;color:#0f172a;font-weight:700;">
                              ${escapeHtml(r.value)}
                            </td>
                          </tr>`
                        })
                        .join("")}
                    </table>

                    <div style="margin-top:14px;padding:14px 14px;border-radius:14px;background:linear-gradient(180deg,rgba(124,58,237,0.08),rgba(217,70,239,0.05));border:1px solid rgba(124,58,237,0.18);">
                      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,Helvetica,sans-serif;font-size:12px;font-weight:800;letter-spacing:0.22em;text-transform:uppercase;color:#6b7280;">
                        Message
                      </div>
                      <div style="margin-top:8px;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,Helvetica,sans-serif;font-size:14px;line-height:1.55;color:#0f172a;white-space:pre-wrap;">
                        ${escapeHtml(payload.message)}
                      </div>
                    </div>

                    <div style="margin-top:14px;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,Helvetica,sans-serif;font-size:12px;color:#64748b;">
                      Tip: reply directly to this email to respond to <strong style="color:#334155;">${escapeHtml(payload.email)}</strong>.
                    </div>
                  </div>
                </div>

                <div style="padding:14px 6px 0 6px;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,Helvetica,sans-serif;font-size:12px;color:#94a3b8;line-height:1.6;">
                  You received this because the ClickMasters POS contact form was submitted.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`

  await transporter.sendMail({
    from: `${fromName} <${SMTP_FROM_EMAIL}>`,
    to: SMTP_FROM_EMAIL,
    replyTo: payload.email,
    subject,
    text: textLines,
    html,
  })
}

