import Link from 'next/link'
import { FaEnvelopeOpenText, FaLink } from 'react-icons/fa'

const navigation = [
  {
    href: '/links',
    title: 'Links',
    description: 'View my latest social and web links, all gathered in one place.',
    icon: FaLink,
    label: 'Explore',
  },
  {
    href: '/write-to-me',
    title: 'Write to me',
    description: 'Send a direct message that lands straight in my inbox.',
    icon: FaEnvelopeOpenText,
    label: 'Connect',
  },
]

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07090d] px-4 py-16 text-slate-100 sm:px-6 lg:px-8">
      <div className="grid-tex" aria-hidden />

      <div className="mx-auto w-full max-w-5xl">
        <div className="destination-shell rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
          <header className="text-center mb-16">
            <div className="mark mx-auto mb-7 inline-flex items-center gap-3">
              <span className="dot" />
              RAIHANUL ISLAM
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
              Choose your
              <span className="block emphasized">destination.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400">
              I split the experience into two focused pages — pick where you want to go.
            </p>
          </header>

          <div className="network mx-auto mb-12 h-16 max-w-3xl">
            <svg viewBox="0 0 640 64" preserveAspectRatio="none" className="h-full w-full">
              <path className="line" d="M40,32 C220,32 420,32 600,32" />
              <path className="pulse" d="M40,32 C220,32 420,32 600,32" />
              <circle className="node-dot" cx="40" cy="32" r="6" />
              <circle className="node-dot" cx="600" cy="32" r="6" />
            </svg>
          </div>

          <div className="destinations grid gap-1 overflow-hidden rounded-[1.5rem] border border-white/10 bg-transparent md:grid-cols-2">
            {navigation.map((item, index) => {
              const Icon = item.icon
              return (
                <Link key={item.href} href={item.href} className={`dest ${index === 1 ? 'alt' : ''}`}>
                  <span className="idx">0{index + 1} — {item.label}</span>
                  <div className="icon-row">
                    <div className="icon-circle">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14" />
                        <path d="M13 6l6 6-6 6" />
                      </svg>
                    </div>
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </Link>
              )
            })}
          </div>

          <footer className="mt-12 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
            Crafted with care · <span className="text-sky-300">Raihanul Islam</span>
          </footer>
        </div>
      </div>
    </main>
  )
}
