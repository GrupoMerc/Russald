import type { Metadata }  from 'next'
import Link              from 'next/link'
import { faqHero, faqCategories } from '@/lib/pages/faq'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import { JsonLd }        from '@/components/JsonLd'
import { SITE }          from '@/config/site'

export const metadata: Metadata = {
  title: 'FAQ — Russald Medical Center',
  description:
    'Answers to the most common questions about weight loss surgery, plastic surgery, hair restoration, ' +
    'bio optimization, logistics, and costs at Russald Medical Center in Tijuana, Mexico.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title:       'FAQ | Russald Medical Center — Tijuana, Mexico',
    description: 'Common questions about procedures, preparation, recovery, and logistics at Russald Medical Center — 20 minutes from San Diego.',
    url:         '/faq',
  },
}

const allItems = faqCategories.flatMap(c => c.items)

const faqLd      = faqSchema(allItems)
const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: SITE.url },
  { name: 'FAQ',  url: `${SITE.url}/faq` },
])

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqLd      as Record<string, unknown>} />
      <JsonLd data={breadcrumbs as Record<string, unknown>} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="faq-hero-heading"
        className="w-full bg-[var(--color-navy)] py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0">
          <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue-light)]">
            {faqHero.eyebrow}
          </p>
          <div className="h-3" aria-hidden="true" />
          <h1
            id="faq-hero-heading"
            className="font-['Rethink_Sans',sans-serif] text-[2rem] font-bold leading-tight text-white sm:text-[2.5rem] lg:text-[2.75rem]"
          >
            {faqHero.heading}
          </h1>
          <div className="h-4" aria-hidden="true" />
          <p className="max-w-[600px] font-['Nunito_Sans',sans-serif] text-[0.9375rem] leading-relaxed text-white/65">
            {faqHero.description}
          </p>
        </div>
      </section>

      {/* ── FAQ Categories ── */}
      <section
        aria-labelledby="faq-main-heading"
        className="w-full bg-[var(--color-ice)] py-14 sm:py-16 lg:py-20"
      >
        <h2 id="faq-main-heading" className="sr-only">All FAQ Categories</h2>
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0 flex flex-col gap-12">
          {faqCategories.map(cat => (
            <div key={cat.heading}>
              {/* Category heading */}
              <div className="flex items-center gap-3 mb-6">
                <span role="img" aria-hidden="true" className="text-[1.5rem] leading-none">
                  {cat.icon}
                </span>
                <h2 className="font-['Rethink_Sans',sans-serif] text-[1.25rem] font-bold text-[var(--color-navy)]">
                  {cat.heading}
                </h2>
              </div>

              {/* Accordion items */}
              <div className="flex flex-col divide-y divide-[var(--color-border)] rounded-[var(--radius-card)] bg-white overflow-hidden shadow-sm">
                {cat.items.map((item, i) => (
                  <details key={i} className="group px-6">
                    <summary className="flex cursor-pointer select-none list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden min-h-[48px]">
                      <span className="font-['Rethink_Sans',sans-serif] text-[0.9375rem] font-semibold text-[var(--color-navy)]">
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className={
                          'shrink-0 flex items-center justify-center w-[22px] h-[22px] rounded-full ' +
                          'border border-[var(--color-border)] text-[var(--color-navy)] ' +
                          '[[open]_&]:bg-[var(--color-blue)] [[open]_&]:border-[var(--color-blue)] ' +
                          '[[open]_&]:text-white [[open]_&]:rotate-45 transition-all duration-200'
                        }
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                          <line x1="5" y1="1" x2="5" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <line x1="1" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </summary>
                    <div className="pb-5 pr-8">
                      <p className="font-['Nunito_Sans',sans-serif] text-[0.875rem] leading-relaxed text-[var(--color-muted)]">
                        {item.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section
        aria-labelledby="faq-cta-heading"
        className="w-full bg-[var(--color-navy)] py-12"
      >
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0 flex flex-col items-center gap-5 text-center">
          <h2
            id="faq-cta-heading"
            className="font-['Rethink_Sans',sans-serif] text-[1.375rem] font-bold text-white sm:text-[1.625rem]"
          >
            Still have questions?
          </h2>
          <p className="max-w-[460px] font-['Nunito_Sans',sans-serif] text-[0.9375rem] text-white/65">
            Your Patient Advisor can answer any question specific to your case — no commitment required.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/free-evaluation"
              className="flex min-h-[48px] items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-blue-action)] px-8 font-['Rethink_Sans',sans-serif] text-[0.9375rem] font-bold text-white transition-colors hover:bg-[var(--color-blue)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
            >
              Free Assessment →
            </Link>
            <a
              href={SITE.phoneLinks[0].href}
              className="flex min-h-[48px] items-center justify-center rounded-[var(--radius-btn)] border-[1.5px] border-white/30 px-8 font-['Rethink_Sans',sans-serif] text-[0.9375rem] font-bold text-white transition-colors hover:border-white/70 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
            >
              {SITE.phoneLinks[0].label}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
