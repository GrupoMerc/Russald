// Fuente única de verdad para datos de marca, NAP y URLs.
// Importar desde aquí — nunca hardcodear en componentes, schema o metadata.

export const SITE = {
  name:          'Russald Medical Center',
  alternateName: ['Russald Medical', 'Russald'],
  legalName:     'Russald Medical S.A. de C.V.',
  url:           process.env.NEXT_PUBLIC_SITE_URL ?? 'https://russaldmedical.com',
  logo:          '/logo.png',
  email:         'info@russaldmedical.com',

  // TODO: confirmar GBP short-link en producción
  mapsUrl: 'https://maps.app.goo.gl/XcHtSmXG86e888GP7',
  gbpUrl:  'https://maps.app.goo.gl/XcHtSmXG86e888GP7',

  title:       'Russald Medical Center — World-Class Surgery in Tijuana',
  description: 'Board-certified surgeons in Tijuana, Mexico. 60–75% less than US prices. Minutes from San Diego. Weight loss, plastic surgery, hair restoration & more.',

  address: {
    street:   'Agua Caliente Blvd 4558, Grand Medical Tower',
    locality: 'Tijuana',
    region:   'Baja California',
    postalCode: '22014',
    country:  'MX',
  },

  // Coordenadas del pin de Google Maps — verificar contra GBP
  geo: {
    latitude:  32.5027,
    longitude: -117.0038,
  },

  phones: ['+526649069268', '+18582644121'] as const,

  phoneLinks: [
    { href: 'tel:+526649069268', label: 'MEX: +52 (664) 906-92-68' },
    { href: 'tel:+18582644121',  label: 'US: +1 (858) 264-4121' },
  ] as const,

  social: {
    facebook:  'https://www.facebook.com/RussaldMedical/',
    instagram: 'https://www.instagram.com/russald_medical/',
    youtube:   'https://www.youtube.com/@RussaldMedical',
    tiktok:    'https://www.tiktok.com/@russaldmedical',
  } as const,

  sameAs: [
    'https://maps.app.goo.gl/XcHtSmXG86e888GP7',
    'https://www.facebook.com/RussaldMedical/',
    'https://www.instagram.com/russald_medical/',
    'https://www.youtube.com/@RussaldMedical',
    'https://www.tiktok.com/@russaldmedical',
    'https://russaldclinic.com',
  ] as const,

  // Display-ready "find us" links — para Footer
  sameAsLinks: [
    { label: 'Google Maps', href: 'https://maps.app.goo.gl/XcHtSmXG86e888GP7' },
  ] as const,

  specialties: [
    'Bariatric Surgery',
    'Plastic Surgery',
    'Hair Restoration',
    "Men's Health",
    'Bio-Optimization',
  ] as const,

  languages:   ['English', 'Spanish'] as const,
  currencies:  'USD, MXN',
  priceRange:  'USD$4,000–$35,000',

  areaServed: [
    { name: 'San Diego County, California' },
    { name: 'Southern California, United States' },
    { name: 'Baja California, Mexico' },
    { name: 'Tijuana, Mexico' },
    { name: 'Canada' },
  ] as const,

  // TODO: descomentar con horarios reales del GBP
  // openingHours: [
  //   { dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' },
  //   { dayOfWeek: ['Saturday'], opens: '09:00', closes: '14:00' },
  // ],

  og: {
    image:    '/og-image.jpg',
    imageAlt: 'Russald Medical Center — World-Class Surgery in Tijuana, Mexico',
    width:    1200,
    height:   630,
  },
} as const
