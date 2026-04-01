import Link from 'next/link'
import { FaLink, FaEnvelopeOpenText } from 'react-icons/fa'

const navigation = [
  {
    href: '/links',
    title: 'Links',
    description: 'View my latest social and web links.',
    icon: FaLink,
  },
  {
    href: '/write-to-me',
    title: 'Write to me',
    description: 'Send a direct message that lands in my inbox.',
    icon: FaEnvelopeOpenText,
  },
]

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="bg-grid" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.16),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(115,245,225,0.14),transparent_40%)]" />
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-[var(--blob-sky)] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-6 h-80 w-80 rounded-full bg-[var(--blob-gold)] blur-3xl" />

      <section className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-10 text-center">
        <div className="card-3d card-glow relative w-full rounded-[2rem] border border-white/30 bg-white/12 p-8 backdrop-blur-2xl sm:p-12">
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(125deg,rgba(255,255,255,0.32),rgba(255,255,255,0.08)_40%,rgba(255,255,255,0.03)_100%)]" />

          <div className="relative z-10 space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Welcome</p>
            <h1 className="text-4xl font-bold text-white sm:text-6xl">Choose your destination</h1>
            <p className="mx-auto max-w-2xl text-base text-white/70 sm:text-lg">
              I split the experience into two focused pages. Pick where you want to go.
            </p>
          </div>

          <div className="relative z-10 mt-10 grid w-full gap-4 sm:grid-cols-2">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-white/20 bg-white/10 p-6 text-left text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/15 hover:shadow-2xl"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon />
                  </span>
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold">{item.title}</h2>
                    <p className="text-sm text-white/70">{item.description}</p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-white/70 transition-all duration-300 group-hover:translate-x-1">
                    Go to {item.title}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
