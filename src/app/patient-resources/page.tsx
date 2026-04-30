import type { Metadata } from 'next'
import Link from 'next/link'
import { breadcrumbSchema, medicalWebPageSchema } from '@/lib/schema'
import { JsonLd } from '@/components/JsonLd'
import { SITE } from '@/config/site'

export const metadata: Metadata = {
  title: 'Patient Resources — Clinical Guides & Procedure Information',
  description:
    'Clinical guides, procedure comparisons, cost breakdowns, and patient education for people considering medical care at Russald Medical Center in Tijuana, Mexico.',
  alternates: { canonical: '/patient-resources' },
  openGraph: {
    title:       'Patient Resources | Russald Medical Center',
    description: 'Clinical guides, procedure comparisons, and patient education — Russald Medical Center, Tijuana.',
    url:         '/patient-resources',
  },
}

const breadcrumbs = breadcrumbSchema([
  { name: 'Home',              url: SITE.url },
  { name: 'Patient Resources', url: `${SITE.url}/patient-resources` },
])
const webPage = medicalWebPageSchema({
  name:        'Patient Resources — Clinical Guides & Procedure Information',
  description: 'Clinical guides, procedure comparisons, cost breakdowns, and patient education for people considering medical care at Russald Medical Center in Tijuana, Mexico.',
  path:        '/patient-resources',
  specialty:   'Patient Education',
})

const ARTICLES = [
  {
    category: 'Weight Loss Surgery',
    categoryColor: 'text-[var(--color-blue)]',
    badgeBg: 'bg-blue-50',
    readTime: '7 min read',
    date: 'March 2025',
    title: 'How Much Does Gastric Sleeve Surgery Cost in Tijuana, Mexico?',
    excerpt: "A complete cost breakdown for gastric sleeve surgery in Tijuana: what's included, what's not, how it compares to US pricing, and what to look for when evaluating your options.",
    href: '/weight-loss/gastric-sleeve',
  },
  {
    category: 'Weight Loss Surgery',
    categoryColor: 'text-[var(--color-blue)]',
    badgeBg: 'bg-blue-50',
    readTime: '8 min read',
    date: 'November 2024',
    title: 'Gastric Bypass vs. Gastric Sleeve: Which Is Right for You?',
    excerpt: 'The two most performed bariatric procedures compared side by side: mechanism, weight loss outcomes, metabolic effects, risks, and how surgeons decide which to recommend.',
    href: '/weight-loss/gastric-bypass',
  },
  {
    category: 'Plastic Surgery',
    categoryColor: 'text-[var(--color-gold)]',
    badgeBg: 'bg-amber-50',
    readTime: '8 min read',
    date: 'March 2025',
    title: 'Mommy Makeover in Tijuana: What to Expect, Cost, and Recovery',
    excerpt: 'Everything you need to know about getting a mommy makeover in Tijuana: what procedures are included, realistic recovery expectations, and how to choose the right surgeon.',
    href: '/plastic-surgery/mommy-makeover',
  },
  {
    category: 'Plastic Surgery',
    categoryColor: 'text-[var(--color-gold)]',
    badgeBg: 'bg-amber-50',
    readTime: '7 min read',
    date: 'February 2025',
    title: 'Tummy Tuck in Tijuana: Full vs. Mini, Cost, and Recovery',
    excerpt: 'Full tummy tuck vs. mini tummy tuck: which is right for you? This guide covers everything about abdominoplasty in Tijuana, including cost, candidacy, and realistic recovery.',
    href: '/plastic-surgery/tummy-tuck',
  },
  {
    category: 'Plastic Surgery',
    categoryColor: 'text-[var(--color-gold)]',
    badgeBg: 'bg-amber-50',
    readTime: '8 min read',
    date: 'January 2025',
    title: 'Brazilian Butt Lift (BBL) in Tijuana: Safety, Cost, and Results',
    excerpt: 'A medically accurate guide to BBL surgery in Tijuana: how fat transfer works, what makes it safe when done correctly, realistic results, and recovery requirements.',
    href: '/plastic-surgery/bbl',
  },
  {
    category: 'Plastic Surgery',
    categoryColor: 'text-[var(--color-gold)]',
    badgeBg: 'bg-amber-50',
    readTime: '7 min read',
    date: 'December 2024',
    title: 'Rhinoplasty in Tijuana: What to Know Before Choosing a Surgeon',
    excerpt: 'Rhinoplasty is one of the most technically demanding plastic surgery procedures. This guide covers candidacy, types of rhinoplasty, and how to choose your surgeon wisely.',
    href: '/plastic-surgery/rhinoplasty',
  },
  {
    category: 'Hair Restoration',
    categoryColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-50',
    readTime: '9 min read',
    date: 'February 2025',
    title: 'FUE Hair Transplant in Tijuana: Complete Patient Guide 2025',
    excerpt: 'A complete guide to FUE hair transplant in Tijuana: how the procedure works, what results to expect, realistic cost comparisons, and how to choose the right clinic.',
    href: '/hair-restoration/fue',
  },
  {
    category: 'Bio Optimization',
    categoryColor: 'text-violet-700',
    badgeBg: 'bg-violet-50',
    readTime: '7 min read',
    date: 'December 2024',
    title: 'Testosterone Replacement Therapy (TRT) in Tijuana: What Men Need to Know',
    excerpt: 'TRT in Tijuana is a cost-effective, clinically supervised option for men with confirmed low testosterone. This guide covers candidacy, protocols, safety, and what to expect.',
    href: '/bio-optimization/trt',
  },
  {
    category: 'Patient Guide',
    categoryColor: 'text-[var(--color-muted)]',
    badgeBg: 'bg-slate-100',
    readTime: '10 min read',
    date: 'November 2024',
    title: 'Medical Tourism in Tijuana: The Complete Patient Guide for US Patients',
    excerpt: 'Everything US patients need to know about medical tourism in Tijuana: how to choose a facility, what the border crossing involves, what to pack, safety, and logistics.',
    href: '/free-evaluation',
  },
] as const

export default function PatientResourcesPage() {
  return (
    <main id="main-content" role="main">
      {/* JSON-LD */}
      <JsonLd data={breadcrumbs as Record<string, unknown>} />
      <JsonLd data={webPage     as Record<string, unknown>} />

      {/* Hero */}
      <section
        aria-labelledby="resources-heading"
        className="w-full bg-[var(--color-navy)] py-16 sm:py-20"
      >
        <div className="w-full px-4 sm:px-8 lg:mx-auto lg:w-[980px]">
          <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue-light)]">
            Educational Content · Russald Medical Center
          </p>
          <div className="h-3" aria-hidden="true" />
          <h1
            id="resources-heading"
            className="font-['Rethink_Sans',sans-serif] text-[2rem] font-bold leading-tight text-[var(--color-white)] sm:text-[2.75rem]"
          >
            Patient Resources
          </h1>
          <div className="h-4" aria-hidden="true" />
          <p className="max-w-[580px] font-['Nunito_Sans',sans-serif] text-[0.9375rem] leading-relaxed text-[var(--color-blue-light)]">
            Clinical guides, procedure comparisons, cost breakdowns, and patient education
            for people considering medical care at Russald Medical Center in Tijuana, Mexico.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section
        aria-labelledby="articles-heading"
        className="w-full bg-[var(--color-ice)] py-16 sm:py-20"
      >
        <div className="w-full px-4 sm:px-8 lg:mx-auto lg:w-[980px]">
          <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue)]">
            All Articles
          </p>
          <div className="h-3" aria-hidden="true" />
          <h2
            id="articles-heading"
            className="font-['Rethink_Sans',sans-serif] text-[1.75rem] font-bold leading-tight text-[var(--color-navy)] sm:text-[2.25rem]"
          >
            Guides &amp; Clinical Information
          </h2>
          <div className="h-3" aria-hidden="true" />
          <p className="max-w-[580px] font-['Nunito_Sans',sans-serif] text-[0.9375rem] leading-relaxed text-[var(--color-muted)]">
            Written by our medical coordination team. All content is for educational purposes
            only and does not constitute medical advice. A medical evaluation is required for
            all procedures.
          </p>
          <div className="h-10" aria-hidden="true" />

          <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((article) => (
              <li key={article.href} role="listitem">
                <Link
                  href={article.href}
                  className="group flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-white)] p-6 transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={`rounded-full px-3 py-1 font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.4px] ${article.badgeBg} ${article.categoryColor}`}>
                      {article.category}
                    </span>
                    <span className="font-['Nunito_Sans',sans-serif] text-[0.75rem] text-[var(--color-muted)]">
                      {article.readTime}
                    </span>
                  </div>
                  <div className="h-4" aria-hidden="true" />
                  <h3 className="font-['Rethink_Sans',sans-serif] text-[1rem] font-bold leading-snug text-[var(--color-navy)] group-hover:text-[var(--color-blue-action)]">
                    {article.title}
                  </h3>
                  <div className="h-3" aria-hidden="true" />
                  <p className="flex-1 font-['Nunito_Sans',sans-serif] text-[0.875rem] leading-relaxed text-[var(--color-muted)]">
                    {article.excerpt}
                  </p>
                  <div className="h-4" aria-hidden="true" />
                  <div className="flex items-center justify-between">
                    <span className="font-['Nunito_Sans',sans-serif] text-[0.75rem] text-[var(--color-muted)]">
                      {article.date}
                    </span>
                    <span className="font-['Nunito_Sans',sans-serif] text-[0.8125rem] font-semibold text-[var(--color-blue-action)] group-hover:underline">
                      Read guide →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="resources-cta-heading"
        className="w-full bg-[var(--color-white)] py-16"
      >
        <div className="w-full px-4 text-center sm:px-8 lg:mx-auto lg:w-[980px]">
          <h2
            id="resources-cta-heading"
            className="font-['Rethink_Sans',sans-serif] text-[1.5rem] font-bold text-[var(--color-navy)] sm:text-[1.875rem]"
          >
            Ready to take the next step?
          </h2>
          <div className="h-4" aria-hidden="true" />
          <p className="mx-auto max-w-[480px] font-['Nunito_Sans',sans-serif] text-[0.9375rem] leading-relaxed text-[var(--color-muted)]">
            Our medical coordination team is available to answer questions and guide you
            through your options — before you commit to anything.
          </p>
          <div className="h-8" aria-hidden="true" />
          <Link
            href="/free-evaluation"
            className="inline-flex min-h-[48px] items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-blue-action)] px-10 font-['Rethink_Sans',sans-serif] text-[0.9375rem] font-bold text-[var(--color-white)] transition-colors hover:bg-[var(--color-blue)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
          >
            Request Free Evaluation →
          </Link>
        </div>
      </section>
    </main>
  )
}
