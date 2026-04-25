import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Rethink_Sans, Nunito_Sans } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { organizationSchema } from '@/lib/schema'

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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://russaldmedical.com'
const TITLE    = 'Russald Medical Center — World-Class Surgery in Tijuana'
const DESC     = 'Board-certified surgeons in Tijuana, Mexico. 60–75% less than US prices. Minutes from San Diego. Weight loss, plastic surgery, hair restoration & more.'

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: '%s | Russald Medical Center',
  },
  description: DESC,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         SITE_URL,
    siteName:    'Russald Medical Center',
    title:       TITLE,
    description: DESC,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Russald Medical Center — World-Class Surgery in Tijuana, Mexico' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       TITLE,
    description: DESC,
    images:      ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${rethinkSans.variable} ${nunitoSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        {/* Geo meta tags — ayudan a crawlers locales y a Google Maps a ubicar el centro */}
        {/* TODO: Actualizar con coordenadas exactas del Google Business Profile */}
        <meta name="geo.region"    content="MX-BCN" />
        <meta name="geo.placename" content="Tijuana, Baja California, Mexico" />
      </head>
      <body suppressHydrationWarning>
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
