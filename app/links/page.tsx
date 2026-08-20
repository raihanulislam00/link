"use client"

import Image from "next/image"
import { FaWhatsapp, FaGlobe, FaBookOpen, FaTrophy, FaArrowLeft, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa"
import Link from "next/link"

const socialLinks = [
  {
    id: 1,
    name: "WhatsApp",
    url: "https://wa.me/qr/XJ2XP6VE27Z4M1",
    icon: FaWhatsapp,
    tone: "whatsapp",
  },
  {
    id: 5,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/raihanulislam00/",
    icon: FaLinkedin,
    tone: "linkedin",
  },
  {
    id: 6,
    name: "GitHub",
    url: "https://github.com/raihanulislam00",
    icon: FaGithub,
    tone: "github",
  },
  {
    id: 7,
    name: "Facebook",
    url: "https://www.facebook.com/raihanulislam00",
    icon: FaFacebook,
    tone: "facebook",
  },
  {
    id: 2,
    name: "Website",
    url: "https://raihanulislam0.vercel.app/",
    icon: FaGlobe,
    tone: "website",
  },
  {
    id: 3,
    name: "Blog",
    url: "https://raihanulislam00.github.io/",
    icon: FaBookOpen,
    tone: "blog",
  },
  {
    id: 4,
    name: "Competitive Programming",
    url: "https://clist.by/coder/Roll_Num_44/",
    icon: FaTrophy,
    tone: "competitive",
  },
]

export default function LinksPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07090d] px-4 py-16 text-slate-100 sm:px-6 lg:px-8">
      <div className="grid-tex" aria-hidden />
      <div className="bg-decor" aria-hidden="true" />

      <div className="wrap mx-auto">
        <Link href="/" className="back inline-flex items-center gap-2">
          <FaArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <div className="profile text-center mt-10 mb-10">
          <div className="avatar-wrap mx-auto mb-6">
            <div className="avatar">
              <Image
                src="/img.jpg"
                alt="Raihanul Islam"
                fill
                className="avatar-img rounded-full object-cover"
              />
            </div>
            <div className="status-dot" />
          </div>
          <div className="status-text">Online</div>
          <h1>Raihanul Islam</h1>
          <p>Software Engineer</p>
        </div>

        <div className="links">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`link-row ${link.tone}`}
              >
                <div className="link-icon">
                  <Icon />
                </div>
                <div className="link-body">
                  <div className="title">{link.name}</div>
                  <div className="sub">Tap to open</div>
                </div>
                <div className="visit">
                  Visit
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </div>
              </a>
            )
          })}
        </div>

        <footer className="mt-12 text-center text-xs text-slate-500">
          Crafted with care · <span className="text-sky-300">Raihanul Islam</span>
        </footer>
      </div>
    </main>
  )
}
