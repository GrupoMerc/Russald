import type { MetadataRoute } from 'next'

const BASE   = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://russaldmedical.com'
const IS_PROD = BASE === 'https://russaldmedical.com'

export default function robots(): MetadataRoute.Robots {
  if (!IS_PROD) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${BASE}/sitemap.xml`,
  }
}
