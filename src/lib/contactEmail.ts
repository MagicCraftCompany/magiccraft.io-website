export const CONTACT_EMAIL = 'contact@magiccraft.io'

type ContactMailtoOptions = {
  email?: string
  message: string
  name?: string
  subject?: string
}

export function buildContactMailto({
  email,
  message,
  name,
  subject = 'MagicCraft website inquiry',
}: ContactMailtoOptions) {
  const params = new URLSearchParams()
  const body = [
    name ? `Name: ${name}` : '',
    email ? `Email: ${email}` : '',
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n')

  params.set('subject', subject)
  params.set('body', body)

  return `mailto:${CONTACT_EMAIL}?${params.toString()}`
}
