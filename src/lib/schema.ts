export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Russald Medical Center',
    description: 'Board-certified surgical center in Tijuana, Mexico',
    url: 'https://russaldmedical.com',
    telephone: '+526649069268',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tijuana',
      addressRegion: 'Baja California',
      addressCountry: 'MX',
    },
    sameAs: [
      'https://maps.google.com/?q=Russald+Medical+Center+Tijuana+Mexico',
      'https://russaldclinic.com',
    ],
  }
}

export function procedureSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description,
    url,
    performedBy: {
      '@type': 'MedicalOrganization',
      name: 'Russald Medical Center',
    },
  }
}
