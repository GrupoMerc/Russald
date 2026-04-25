import type { Metadata }   from 'next'
import { notFound }        from 'next/navigation'
import Link                from 'next/link'
import { legalPages }      from '@/lib/pages/legal'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd }          from '@/components/JsonLd'
import { SITE }            from '@/config/site'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return legalPages.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = legalPages.find(p => p.slug === slug)
  if (!page) return {}
  return {
    title:      `${page.title} — Russald Medical Center`,
    description: `${page.title} for Russald Medical Center and MedicalMex. Last updated ${page.lastUpdated}.`,
    alternates: { canonical: `/legal/${slug}` },
    robots:     { index: true, follow: true },
    openGraph: {
      title: `${page.title} | Russald Medical Center`,
      url:   `/legal/${slug}`,
    },
  }
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params
  const page = legalPages.find(p => p.slug === slug)
  if (!page) notFound()

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home',       url: SITE.url },
    { name: 'Legal',      url: `${SITE.url}/legal` },
    { name: page.title,   url: `${SITE.url}/legal/${slug}` },
  ])

  return (
    <>
      <JsonLd data={breadcrumbs as Record<string, unknown>} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="legal-hero-heading"
        className="w-full bg-[var(--color-navy)] py-12 sm:py-14"
      >
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0">
          <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue-light)]">
            Legal
          </p>
          <div className="h-3" aria-hidden="true" />
          <h1
            id="legal-hero-heading"
            className="font-['Rethink_Sans',sans-serif] text-[1.875rem] font-bold leading-tight text-white sm:text-[2.25rem]"
          >
            {page.title}
          </h1>
          <div className="h-3" aria-hidden="true" />
          <p className="font-['Nunito_Sans',sans-serif] text-[0.8125rem] text-white/45">
            Last updated: {page.lastUpdated}
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section
        aria-labelledby="legal-hero-heading"
        className="w-full bg-[var(--color-ice)] py-12 sm:py-14 lg:py-16"
      >
        <div className="mx-auto w-full max-w-[720px] px-4 sm:px-8 lg:px-0 flex flex-col gap-8">
          {page.sections.map(sec => (
            <div key={sec.heading} className="flex flex-col gap-2">
              <h2 className="font-['Rethink_Sans',sans-serif] text-[1rem] font-bold text-[var(--color-navy)]">
                {sec.heading}
              </h2>
              <p className="font-['Nunito_Sans',sans-serif] text-[0.9375rem] leading-relaxed text-[var(--color-muted)]">
                {sec.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Other legal pages ── */}
      <section
        aria-labelledby="legal-nav-heading"
        className="w-full border-t border-[var(--color-border)] bg-white py-10"
      >
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0">
          <h2
            id="legal-nav-heading"
            className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-bold uppercase tracking-[1.5px] text-[var(--color-blue-action)] mb-4"
          >
            Other Legal Documents
          </h2>
          <div className="flex flex-wrap gap-3">
            {legalPages.filter(p => p.slug !== slug).map(p => (
              <Link
                key={p.slug}
                href={`/legal/${p.slug}`}
                className="font-['Nunito_Sans',sans-serif] text-[0.8125rem] text-[var(--color-muted)] underline underline-offset-2 hover:text-[var(--color-navy)] transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
              >
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
