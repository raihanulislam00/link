'use client'

import { useState } from 'react'
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/raihanulislam00/',
    icon: FaLinkedin,
    color: 'hover:bg-blue-600',
    bgColor: 'bg-blue-500',
  },
  {
    id: 2,
    name: 'Facebook',
    url: 'https://www.facebook.com/raihanulislam00',
    icon: FaFacebook,
    color: 'hover:bg-blue-700',
    bgColor: 'bg-blue-600',
  },
  {
    id: 3,
    name: 'Instagram',
    url: 'https://www.instagram.com/raihanulislam0/',
    icon: FaInstagram,
    color: 'hover:bg-pink-600',
    bgColor: 'bg-pink-500',
  },
  {
    id: 4,
    name: 'WhatsApp',
    url: 'https://wa.me/qr/XJ2XP6VE27Z4M1',
    icon: FaWhatsapp,
    color: 'hover:bg-green-600',
    bgColor: 'bg-green-500',
  },
  {
    id: 5,
    name: 'GitHub',
    url: 'https://github.com/raihanulislam00',
    icon: FaGithub,
    color: 'hover:bg-gray-700',
    bgColor: 'bg-gray-600',
  },
  {
    id: 6,
    name: 'Email',
    url: 'mailto:raihanulislamnahid22@gmail.com',
    icon: FaEnvelope,
    color: 'hover:bg-red-600',
    bgColor: 'bg-red-500',
  },
]

export default function Home() {
  const [activeLinkId, setActiveLinkId] = useState<number | null>(null)

  const handleLinkClick = (id: number) => {
    setActiveLinkId(id)
    window.setTimeout(() => setActiveLinkId((current) => (current === id ? null : current)), 520)
  }

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.12),transparent_34%),radial-gradient(circle_at_83%_70%,rgba(111,234,255,0.18),transparent_36%)]" />
      <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-[var(--blob-orange)] blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-[var(--blob-teal)] blur-3xl" />
      <div className="pointer-events-none absolute left-8 top-24 h-24 w-24 rounded-2xl border border-white/30 bg-white/10 shadow-2xl floating-cube" />
      <div className="pointer-events-none absolute bottom-20 right-10 h-20 w-20 rounded-full border border-cyan-100/40 bg-cyan-100/10 shadow-2xl floating-orb" />

      <section className="scene relative mx-auto w-full max-w-2xl">
        <div className="card-3d card-glow rounded-[2rem] border border-white/20 bg-white/10 p-6 backdrop-blur-xl sm:p-10">
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(130deg,rgba(255,255,255,0.22),rgba(255,255,255,0.04)_40%,rgba(255,255,255,0.02)_100%)]" />
          <div className="pointer-events-none absolute -right-8 top-8 h-24 w-24 rounded-full border border-white/20 bg-white/5" />
          <div className="pointer-events-none absolute -left-10 bottom-12 h-16 w-16 rounded-md border border-cyan-100/30 bg-cyan-50/10" />

          <div className="relative z-10 text-center mb-10">
            <div className="mb-6 reveal" style={{ animationDelay: '90ms' }}>
              <img
                src="/img.jpg"
                alt="Profile"
                className="avatar-3d mx-auto h-28 w-28 rounded-full border-4 border-white/80 object-cover shadow-2xl"
              />
            </div>
            <p className="reveal mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-soft)]" style={{ animationDelay: '150ms' }}>
              Personal Hub
            </p>
            <h1 className="reveal mb-2 text-4xl text-[var(--text-main)] sm:text-5xl [font-family:var(--font-display)]" style={{ animationDelay: '220ms' }}>
              Raihanul Islam
            </h1>
            <p className="reveal text-base text-[var(--text-soft)] sm:text-lg" style={{ animationDelay: '280ms' }}>
              Software Engineer
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
                className={`social-link reveal ${link.bgColor} ${link.color} group w-full rounded-xl px-4 py-4 text-white shadow-lg ${
                  activeLinkId === link.id ? 'is-clicked' : ''
                }`}
              >
                <span className="click-wave" aria-hidden="true" />
                <span className="flex items-center justify-center gap-3">
                  <Icon className="text-xl transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-sm font-semibold tracking-wide">{link.name}</span>
                </span>
                <span className="text-xs opacity-80 transition-all duration-300 group-hover:translate-x-1">
                  Visit
                </span>
              </a>
            )
          })}
          </div>

          <div className="relative z-10 reveal text-center text-xs text-[var(--text-fade)]" style={{ animationDelay: '420ms' }}>
            <p>© 2026 Raihanul Islam. Crafted with intention.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
