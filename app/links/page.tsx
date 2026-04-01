"use client"

import { useState } from "react"
import Image from "next/image"
import { FaWhatsapp, FaGlobe, FaBookOpen } from "react-icons/fa"
import Link from "next/link"

const socialLinks = [
  {
    id: 1,
    name: "WhatsApp",
    url: "https://wa.me/qr/XJ2XP6VE27Z4M1",
    icon: FaWhatsapp,
    tone: "tone-whatsapp",
  },
  {
    id: 2,
    name: "Website",
    url: "https://raihanulislam.vercel.app/",
    icon: FaGlobe,
    tone: "tone-website",
  },
  {
    id: 3,
    name: "Blog",
    url: "https://raihanulislam00.github.io/",
    icon: FaBookOpen,
    tone: "tone-blog",
  },
]

export default function LinksPage() {
  const [activeLinkId, setActiveLinkId] = useState<number | null>(null)

  const handleLinkClick = (id: number) => {
    setActiveLinkId(id)
    window.setTimeout(() => setActiveLinkId((current) => (current === id ? null : current)), 520)
  }

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="bg-grid" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.16),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(115,245,225,0.14),transparent_40%)]" />
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-[var(--blob-sky)] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-6 h-80 w-80 rounded-full bg-[var(--blob-gold)] blur-3xl" />

      <section className="scene relative mx-auto w-full max-w-4xl">
        <div className="card-3d card-glow rounded-[2rem] border border-white/30 bg-white/12 p-8 backdrop-blur-2xl sm:p-10">
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(125deg,rgba(255,255,255,0.32),rgba(255,255,255,0.08)_40%,rgba(255,255,255,0.03)_100%)]" />

          <div className="relative z-10 mb-4 flex justify-start">
            <Link href="/" className="pill-btn pill-btn-ghost" aria-label="Back to home">
              ← Back
            </Link>
          </div>

          <div className="profile-stack relative z-10 flex flex-col items-center gap-6">
            <div className="relative mx-auto flex w-full max-w-[220px] justify-center">
              <div className="avatar-ring" aria-hidden />
              <Image
                src="/img.jpg"
                alt="Profile"
                width={160}
                height={160}
                className="avatar-3d avatar-float h-40 w-40 rounded-[1.25rem] border-4 border-white/70 object-cover shadow-2xl"
              />
              <div className="badge-floating">Online</div>
            </div>

            <div className="hero-panel space-y-2 text-center text-white">
              <div className="name-role text-sm text-white/70 sm:text-base mx-auto">
                <span className="font-semibold text-white">Raihanul Islam</span> · Software Engineer
              </div>
            </div>
          </div>

          <div className="soft-divider" aria-hidden />

          <div className="links-grid relative z-10 mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLinkClick(link.id)}
                  className={`social-link ${link.tone} group w-full rounded-2xl p-[1px] shadow-lg ${
                    activeLinkId === link.id ? "is-clicked" : ""
                  }`}
                >
                  <span className="click-wave" aria-hidden="true" />
                  <div className="link-card flex h-full flex-col rounded-[1.1rem] bg-slate-900/80 p-5 transition-all duration-300 group-hover:bg-slate-900/60">
                    <div className="flex items-center gap-3">
                      <span className="icon-badge">
                        <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />
                      </span>
                      <div className="flex flex-col">
                        <span className="text-base font-semibold tracking-wide text-white">{link.name}</span>
                        <span className="link-meta text-xs text-white/70">Tap to open</span>
                      </div>
                    </div>
                    <span className="link-arrow mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/70 transition-all duration-300 group-hover:translate-x-1">
                      Visit
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
