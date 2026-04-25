import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Rethink_Sans, Nunito_Sans } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { JsonLd } from '@/components/JsonLd'
import { organizationSchema } from '@/lib/schema'
import { SITE } from '@/config/site'

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
  metadataBase: new URL(SITE.url),
  title: {
    default:  SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: { canonical: '/' },
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         SITE.url,
    siteName:    SITE.name,
    title:       SITE.title,
    description: SITE.description,
    images: [{
      url:    SITE.og.image,
      width:  SITE.og.width,
      height: SITE.og.height,
      alt:    SITE.og.imageAlt,
    }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       SITE.title,
    description: SITE.description,
    images:      [SITE.og.image],
  },
  robots: {
    index:     true,
    follow:    true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-image-preview': 'large',
      'max-snippet':       -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${rethinkSans.variable} ${nunitoSans.variable}`}>
      <head>
        <JsonLd data={organizationSchema() as Record<string, unknown>} />
        {/* Geo meta tags — ayudan a crawlers locales y a Google Maps */}
        {/* TODO: actualizar con coordenadas exactas del Google Business Profile */}
        <meta name="geo.region"    content="MX-BCN" />
        <meta name="geo.placename" content="Tijuana, Baja California, Mexico" />
        <meta name="geo.position"  content={`${SITE.geo.latitude};${SITE.geo.longitude}`} />
        <meta name="ICBM"          content={`${SITE.geo.latitude}, ${SITE.geo.longitude}`} />
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
