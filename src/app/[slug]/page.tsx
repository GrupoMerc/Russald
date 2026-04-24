import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

const PAGES: Record<string, { title: string; description: string }> = {
  'weight-loss':       { title: 'Weight Loss Surgery',  description: 'Gastric sleeve, bypass, mini bypass, Lap-Band, and bariatric revision — detailed information coming soon.' },
  'plastic-surgery':   { title: 'Plastic Surgery',      description: 'Body contouring, mommy makeover, rhinoplasty, facelift, breast surgery — detailed information coming soon.' },
  'orthopedics':       { title: 'Orthopedics',          description: 'Joint replacement and orthopedic procedures — detailed information coming soon.' },
  'hair-restoration':  { title: 'Hair Restoration',     description: 'FUE and DHI hair transplant, hair PRP therapy — detailed information coming soon.' },
  'bio-optimization':  { title: 'Bio Optimization',     description: 'Hormone therapy, IV therapy, PRP, stem cells, and aesthetic protocols — detailed information coming soon.' },
  'mens-health':       { title: "Men's Health",         description: 'Erectile dysfunction treatment and testosterone replacement therapy — detailed information coming soon.' },
  'vascular-care':     { title: 'Vascular Care',        description: 'EVLA vein treatment and sclerotherapy for varicose veins — detailed information coming soon.' },
  'our-patients':      { title: 'Our Patients',         description: 'Patient stories and outcomes from Russald Medical Center — coming soon.' },
  'patient-resources': { title: 'Patient Resources',    description: 'Pre-op and post-op guides, travel tips, and FAQs — coming soon.' },
  'faq':               { title: 'FAQ',                  description: 'Frequently asked questions about procedures, travel, and pricing — coming soon.' },
  'our-facilities':    { title: 'Our Facilities',       description: 'A tour of Russald Medical Center in Tijuana — coming soon.' },
  'team':              { title: 'Our Medical Team',     description: 'Meet the board-certified physicians at Russald Medical Center — coming soon.' },
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = PAGES[slug]
  if (!page) return { title: 'Not Found' }
  return {
    title: page.title,
    description: page.description,
  }
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params
  const page = PAGES[slug]
  if (!page) notFound()

  return (
    <section className="flex min-h-[60vh] w-full flex-col items-center justify-center px-6 py-20 text-center">
      <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue)]">
        Coming Soon
      </p>
      <div className="h-3" aria-hidden="true" />
      <h1 className="font-['Rethink_Sans',sans-serif] text-[2rem] font-bold leading-tight text-[var(--color-navy)] sm:text-[2.75rem]">
        {page.title}
      </h1>
      <div className="h-4" aria-hidden="true" />
      <p className="max-w-[480px] font-['Nunito_Sans',sans-serif] text-[0.9375rem] leading-relaxed text-[var(--color-muted)]">
        {page.description}
      </p>
      <div className="h-2" aria-hidden="true" />
      <p className="font-['Nunito_Sans',sans-serif] text-[0.875rem] text-[var(--color-muted)]">
        Meanwhile, you can request a free assessment and we&apos;ll answer all your questions directly.
      </p>
      <div className="h-8" aria-hidden="true" />
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/#eval-form"
          className="flex min-h-[48px] items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-blue-action)] px-8 font-['Rethink_Sans',sans-serif] text-[0.9375rem] font-bold text-[var(--color-white)] transition-colors hover:bg-[var(--color-blue)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
        >
          Free Assessment →
        </Link>
        <Link
          href="/"
          className="flex min-h-[48px] items-center justify-center rounded-[var(--radius-btn)] border-[1.5px] border-[var(--color-border)] px-8 font-['Rethink_Sans',sans-serif] text-[0.9375rem] font-bold text-[var(--color-navy)] transition-colors hover:border-[var(--color-blue)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
