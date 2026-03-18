import type { Metadata } from 'next'
import { Space_Grotesk, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const sans = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
})

const display = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Personal Link Hub',
  description: 'A stylish place to find all of my social profiles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${sans.variable} ${display.variable} min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
