'use client'

import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import Image from 'next/image'
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/raihanulislam00/',
    icon: FaLinkedin,
    tone: 'tone-linkedin',
  },
  {
    id: 2,
    name: 'Facebook',
    url: 'https://www.facebook.com/raihanulislam00',
    icon: FaFacebook,
    tone: 'tone-facebook',
  },
  {
    id: 3,
    name: 'Instagram',
    url: 'https://www.instagram.com/raihanulislam0/',
    icon: FaInstagram,
    tone: 'tone-instagram',
  },
  {
    id: 4,
    name: 'WhatsApp',
    url: 'https://wa.me/qr/XJ2XP6VE27Z4M1',
    icon: FaWhatsapp,
    tone: 'tone-whatsapp',
  },
  {
    id: 5,
    name: 'GitHub',
    url: 'https://github.com/raihanulislam00',
    icon: FaGithub,
    tone: 'tone-github',
  },
  {
    id: 6,
    name: 'Email',
    url: 'mailto:raihanulislamnahid22@gmail.com',
    icon: FaEnvelope,
    tone: 'tone-email',
  },
]

export default function Home() {
  const [activeLinkId, setActiveLinkId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSending, setIsSending] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleLinkClick = (id: number) => {
    setActiveLinkId(id)
    window.setTimeout(() => setActiveLinkId((current) => (current === id ? null : current)), 520)
  }

  const handleFormChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitMessage('')
    setIsSending(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = (await response.json()) as { message?: string }

      if (!response.ok) {
        throw new Error(result.message || 'Could not send your message. Please try again.')
      }

      setSubmitMessage('Message sent successfully. I will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Could not send your message.'
      setSubmitMessage(message)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.16),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(115,245,225,0.14),transparent_40%)]" />
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-[var(--blob-sky)] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-6 h-80 w-80 rounded-full bg-[var(--blob-gold)] blur-3xl" />

      <section className="scene relative mx-auto w-full max-w-3xl">
        <div className="card-3d card-glow rounded-[2rem] border border-white/30 bg-white/12 p-6 backdrop-blur-2xl sm:p-10">
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(125deg,rgba(255,255,255,0.32),rgba(255,255,255,0.08)_40%,rgba(255,255,255,0.03)_100%)]" />

          <div className="relative z-10 text-center mb-10">
            <div className="mb-6 reveal" style={{ animationDelay: '90ms' }}>
              <Image
                src="/img.jpg"
                alt="Profile"
                width={128}
                height={128}
                className="avatar-3d mx-auto h-32 w-32 rounded-full border-4 border-white/80 object-cover shadow-2xl"
              />
            </div>
            <p className="reveal mb-3 text-xs font-semibold uppercase tracking-[0.38em] text-[var(--text-soft)]" style={{ animationDelay: '150ms' }}>
              Raihanul Islam
            </p>
            <h1 className="reveal mb-2 text-4xl text-[var(--text-main)] sm:text-6xl [font-family:var(--font-display)]" style={{ animationDelay: '220ms' }}>
              Software Engineer
            </h1>
            <p className="reveal mx-auto max-w-xl text-sm text-[var(--text-muted)] sm:text-base" style={{ animationDelay: '280ms' }}>
              Building thoughtful digital products and clean user experiences.
            </p>
          </div>

          <div className="relative z-10 mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkClick(link.id)}
                className={`social-link reveal ${link.tone} group w-full rounded-xl px-4 py-4 text-white shadow-lg ${
                  activeLinkId === link.id ? 'is-clicked' : ''
                }`}
              >
                <span className="click-wave" aria-hidden="true" />
                <span className="flex items-center justify-center gap-3">
                  <span className="icon-badge">
                    <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />
                  </span>
                  <span className="text-sm font-semibold tracking-wide">{link.name}</span>
                </span>
                <span className="text-xs opacity-70 transition-all duration-300 group-hover:translate-x-1">
                  Visit
                </span>
              </a>
            )
          })}
          </div>

          <div className="relative z-10 mb-8 rounded-2xl border border-white/25 bg-white/10 p-5 sm:p-6">
            <h2 className="mb-1 text-xl text-[var(--text-main)] [font-family:var(--font-display)] sm:text-2xl">
              Write to me
            </h2>
            <p className="mb-4 text-sm text-[var(--text-muted)]">
              Send a message and it will be delivered directly to my email.
            </p>

            <form className="grid gap-3" onSubmit={handleFormSubmit}>
              <label className="field-label" htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleFormChange}
                className="contact-field"
                placeholder="Enter your name"
                required
              />

              <label className="field-label" htmlFor="email">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleFormChange}
                className="contact-field"
                placeholder="name@example.com"
                required
              />

              <label className="field-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                className="contact-field contact-area"
                placeholder="Write your message here..."
                required
                minLength={8}
              />

              <button
                type="submit"
                disabled={isSending}
                className="send-button"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {submitMessage && (
              <p className="mt-3 text-sm text-[var(--text-soft)]">{submitMessage}</p>
            )}
          </div>

          <div className="relative z-10 reveal text-center text-xs text-[var(--text-fade)]" style={{ animationDelay: '420ms' }}>
            <p>© 2026 Raihanul Islam. Crafted with intention.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
