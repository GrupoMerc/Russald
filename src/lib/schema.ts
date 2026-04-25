// ─── lib/schema.ts ─────────────────────────────────────────────────────────
// Todos los helpers de JSON-LD del sitio.
// Regla: una función por tipo de schema. Cada page.tsx importa lo que necesita.
// NUNCA poner JSON-LD en layout.tsx excepto organizationSchema (global).

const SITE_URL = 'https://russaldmedical.com'
const MAPS_URL = 'https://maps.google.com/?q=Russald+Medical+Center+Tijuana+Mexico'

// ── 1. Organización (global — solo en layout.tsx) ────────────────────────────
// TODO antes de ir a producción:
//   - Reemplazar streetAddress y postalCode con dirección exacta del GBP
//   - Descomentar geo.latitude / geo.longitude con coordenadas del pin de Maps
//   - Verificar y descomentar openingHoursSpecification con horarios reales
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalOrganization', 'LocalBusiness'],
    name: 'Russald Medical Center',
    legalName: 'Russald Medical S.A. de C.V.',
    description:
      'Board-certified surgical center in Tijuana, Mexico — weight loss surgery, plastic surgery, ' +
      'hair restoration, men\'s health & bio-optimization. 60–75% less than US prices. 20 minutes from San Diego.',
    url: SITE_URL,
    telephone: ['+526649069268', '+18582644121'],
    hasMap: MAPS_URL,
    sameAs: [MAPS_URL, 'https://russaldclinic.com'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tijuana',
      addressRegion: 'Baja California',
      addressCountry: 'MX',
      // TODO: streetAddress: 'Ave. [confirmar dirección exacta]',
      // TODO: postalCode: '220XX',
    },
    // TODO: geo: { '@type': 'GeoCoordinates', latitude: '32.XXXX', longitude: '-117.XXXX' },
    areaServed: [
      { '@type': 'Place', name: 'San Diego County, California' },
      { '@type': 'Place', name: 'Southern California, United States' },
      { '@type': 'Place', name: 'Baja California, Mexico' },
      { '@type': 'Place', name: 'Tijuana, Mexico' },
    ],
    medicalSpecialty: [
      'Bariatric Surgery',
      'Plastic Surgery',
      'Hair Restoration',
      "Men's Health",
      'Bio-Optimization',
    ],
    availableLanguage: ['English', 'Spanish'],
    currenciesAccepted: 'USD, MXN',
    priceRange: 'USD$4,000–$35,000',
    // TODO: openingHoursSpecification: [
    //   { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' },
    //   { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '14:00' },
    // ],
  }
}

// ── 2. Procedimiento médico (weight-loss, plastic-surgery, etc.) ─────────────
export function procedureSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description,
    url: `${SITE_URL}${url}`,
    performedBy: {
      '@type': 'MedicalOrganization',
      name: 'Russald Medical Center',
    },
  }
}

// ── 3. Breadcrumb (requerido en toda página de especialidad) ─────────────────
// Uso: breadcrumbSchema([
//   { name: 'Home', url: SITE_URL },
//   { name: 'Weight Loss Surgery', url: `${SITE_URL}/weight-loss` },
// ])
export function breadcrumbSchema(
  crumbs: ReadonlyArray<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

// ── 4. MedicalWebPage (requerido en toda página de especialidad) ─────────────
// Señaliza a crawlers y LLMs que el contenido fue revisado médicamente.
export function medicalWebPageSchema(params: {
  name: string
  description: string
  path: string          // e.g. '/weight-loss'
  specialty: string     // e.g. 'Bariatric Surgery'
  lastReviewed?: string // ISO date — por defecto hoy
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: params.name,
    description: params.description,
    url: `${SITE_URL}${params.path}`,
    lastReviewed: params.lastReviewed ?? new Date().toISOString().split('T')[0],
    reviewedBy: {
      '@type': 'MedicalOrganization',
      name: 'Russald Medical Center',
      medicalSpecialty: params.specialty,
    },
    audience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
      geographicArea: {
        '@type': 'Place',
        name: 'United States, Mexico',
      },
    },
  }
}

// ── 5. Página de contacto / evaluación ──────────────────────────────────────
export function contactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Free Clinical Evaluation — Russald Medical Center',
    description:
      'Request a free, no-commitment clinical evaluation with our English-speaking surgical team in Tijuana, Mexico.',
    url: `${SITE_URL}/free-evaluation`,
    mainEntity: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'Spanish'],
      areaServed: ['US', 'MX'],
    },
  }
}
