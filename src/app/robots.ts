import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { SITE } from '@/config/site'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers()
  const host = headersList.get('host') ?? ''
  const IS_PROD = host === 'russaldmedical.com' || host === 'www.russaldmedical.com'

  if (!IS_PROD) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${SITE.url}/sitemap.xml`,
  }
}
