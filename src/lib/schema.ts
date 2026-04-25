// ─── lib/schema.ts ─────────────────────────────────────────────────────────
// Todos los helpers de JSON-LD del sitio.
// Regla: una función por tipo de schema. Cada page.tsx importa lo que necesita.
// NUNCA poner JSON-LD en layout.tsx excepto organizationSchema (global).

import { SITE } from '@/config/site'

// ── 1. Global @graph (layout.tsx) ───────────────────────────────────────────
// WebSite + Organization + MedicalBusiness con @id para referencias cruzadas.
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // Site name disambiguation — sin SearchAction (feature retirada por Google)
      {
        '@type':         'WebSite',
        '@id':           `${SITE.url}/#website`,
        name:            SITE.name,
        alternateName:   SITE.alternateName,
        url:             `${SITE.url}/`,
      },
      // Entidad legal y presencia web
      {
        '@type':     'Organization',
        '@id':       `${SITE.url}/#organization`,
        name:        SITE.name,
        legalName:   SITE.legalName,
        url:         `${SITE.url}/`,
        logo: {
          '@type': 'ImageObject',
          url:     `${SITE.url}${SITE.logo}`,
        },
        sameAs: [
          ...Object.values(SITE.social),
          ...SITE.sameAs,
        ],
      },
      // Señal local SEO crítica — MedicalBusiness hereda de LocalBusiness
      {
        '@type':             'MedicalBusiness',
        '@id':               `${SITE.url}/#clinic`,
        name:                SITE.name,
        url:                 `${SITE.url}/`,
        telephone:           SITE.phones,
        email:               SITE.email,
        priceRange:          SITE.priceRange,
        currenciesAccepted:  SITE.currencies,
        paymentAccepted:     'Cash, Credit Card, Wire Transfer',
        medicalSpecialty:    SITE.specialties,
        availableLanguage:   SITE.languages,
        address: {
          '@type':           'PostalAddress',
          streetAddress:     SITE.address.street,
          addressLocality:   SITE.address.locality,
          addressRegion:     SITE.address.region,
          postalCode:        SITE.address.postalCode,
          addressCountry:    SITE.address.country,
        },
        geo: {
          '@type':    'GeoCoordinates',
          latitude:   SITE.geo.latitude,
          longitude:  SITE.geo.longitude,
        },
        hasMap:      SITE.mapsUrl,
        openingHoursSpecification: SITE.openingHours.map(h => ({
          '@type':    'OpeningHoursSpecification',
          dayOfWeek:  h.dayOfWeek,
          opens:      h.opens,
          closes:     h.closes,
        })),
        areaServed: [
          { '@type': 'Country',             name: 'United States' },
          { '@type': 'Country',             name: 'Canada' },
          { '@type': 'AdministrativeArea',  name: 'Baja California, Mexico' },
        ],
        parentOrganization: { '@id': `${SITE.url}/#organization` },
      },
    ],
  }
}

// ── 2. Procedimiento médico (weight-loss, plastic-surgery, etc.) ─────────────
// provider referencia al @id del clinic — no duplica datos
export function procedureSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type':    'MedicalProcedure',
    name,
    description,
    procedureType: 'Surgical',
    url: `${SITE.url}${path}`,
    provider: { '@id': `${SITE.url}/#clinic` },
  }
}

// ── 3. Breadcrumb (requerido en toda página de especialidad) ─────────────────
export function breadcrumbSchema(
  crumbs: ReadonlyArray<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type':  'ListItem',
      position: i + 1,
      name:     crumb.name,
      item:     crumb.url,
    })),
  }
}

// ── 4. MedicalWebPage (requerido en toda página de especialidad) ─────────────
// Señaliza a crawlers y LLMs que el contenido fue revisado médicamente.
export function medicalWebPageSchema(params: {
  name: string
  description: string
  path: string      // e.g. '/weight-loss'
  specialty: string // e.g. 'Bariatric Surgery'
  lastReviewed?: string // ISO date
}) {
  return {
    '@context':   'https://schema.org',
    '@type':      'MedicalWebPage',
    name:         params.name,
    description:  params.description,
    url:          `${SITE.url}${params.path}`,
    lastReviewed: params.lastReviewed ?? '2026-04-25',
    reviewedBy: {
      '@type':          'MedicalOrganization',
      name:             SITE.name,
      medicalSpecialty: params.specialty,
    },
    audience: {
      '@type':        'MedicalAudience',
      audienceType:   'Patient',
      geographicArea: { '@type': 'Place', name: 'United States, Mexico' },
    },
  }
}

// ── 5. FAQ (usar cuando exista contenido FAQ visible en la página) ───────────
// REGLA ESTRICTA: solo incluir Q&A que estén visibles en HTML — nunca ocultos.
// Soporta rich result de Google (muestra preguntas expandibles en SERP).
export function faqSchema(faqs: ReadonlyArray<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name:    q,
      acceptedAnswer: {
        '@type': 'Answer',
        text:    a,
      },
    })),
  }
}

// ── 6. Página de contacto / evaluación ──────────────────────────────────────
export function contactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type':    'ContactPage',
    name:        `Free Clinical Evaluation — ${SITE.name}`,
    description: 'Request a free, no-commitment clinical evaluation with our English-speaking surgical team in Tijuana, Mexico.',
    url:         `${SITE.url}/free-evaluation`,
    mainEntity: {
      '@type':           'ContactPoint',
      contactType:       'customer service',
      availableLanguage: SITE.languages,
      areaServed:        ['US', 'MX'],
    },
  }
}
