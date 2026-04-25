import type { MetadataRoute } from 'next'
import { SITE } from '@/config/site'

const IS_PROD = process.env.VERCEL_ENV === 'production'

export default function robots(): MetadataRoute.Robots {
  if (!IS_PROD) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${SITE.url}/sitemap.xml`,
  }
}
