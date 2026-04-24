import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Rethink_Sans, Nunito_Sans } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const rethinkSans = Rethink_Sans({
  subsets: ['latin'],
  variable: '--font-rethink',
  weight: ['400', '700', '800'],
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Russald Medical Center — World-Class Surgery in Tijuana',
    template: '%s | Russald Medical Center',
  },
  description:
    'Board-certified surgeons in Tijuana, Mexico. 60–75% less than US prices. Minutes from San Diego.',
  metadataBase: new URL('https://russaldmedical.com'),
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${rethinkSans.variable} ${nunitoSans.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:top-0 focus:left-0 focus:px-4 focus:py-2 focus:bg-[var(--color-blue-action)] focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
