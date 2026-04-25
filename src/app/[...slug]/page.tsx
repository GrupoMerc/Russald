import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

const CATEGORY_LABELS: Record<string, string> = {
  'weight-loss':       'Weight Loss Surgery',
  'plastic-surgery':   'Plastic Surgery',
  'hair-restoration':  'Hair Restoration',
  'mens-health':       "Men's Health",
  'vascular-care':     'Vascular Care',
  'bio-optimization':  'Bio Optimization',
  'orthopedics':       'Orthopedics',
}

const PROCEDURE_LABELS: Record<string, string> = {
  'gastric-sleeve':         'Gastric Sleeve',
  'gastric-bypass':         'Gastric Bypass',
  'mini-gastric-bypass':    'Mini Gastric Bypass',
  'lap-band':               'Lap-Band',
  'bariatric-revision':     'Bariatric Revision',
  'mommy-makeover':         'Mommy Makeover',
  'tummy-tuck':             'Tummy Tuck',
  'circular-tummy-tuck':    'Circular Tummy Tuck',
  'liposuction':            'Liposuction',
  'bbl':                    'Brazilian Butt Lift (BBL)',
  'breast-augmentation':    'Breast Augmentation',
  'rhinoplasty':            'Rhinoplasty',
  'facelift':               'Facelift',
  'arm-lift':               'Arm Lift',
  'thigh-lift':             'Thigh Lift',
  'fue':                    'FUE Hair Transplant',
  'dhi':                    'DHI Hair Transplant',
  'prp':                    'Hair PRP Therapy',
  'implant':                'Male Enhancement Implant',
  'erectile-dysfunction':   'Erectile Dysfunction Treatment',
  'testosterone':           'Testosterone Replacement Therapy',
  'evla':                   'EVLA (Varicose Veins)',
  'sclerotherapy':          'Sclerotherapy',
  'hgh':                    'HGH Therapy',
  'bhrt':                   'BHRT',
  'myers-cocktail':         'Myers Cocktail IV',
}

type Props = { params: Promise<{ slug: string[] }> }

function resolveTitle(segments: string[]): { title: string; parentTitle?: string; parentHref?: string } | null {
  const [cat, proc] = segments
  const catLabel = CATEGORY_LABELS[cat]
  if (!catLabel) return null

  if (!proc) {
    return { title: catLabel }
  }

  const procLabel = PROCEDURE_LABELS[proc]
  if (!procLabel) return null

  return { title: procLabel, parentTitle: catLabel, parentHref: `/${cat}` }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const resolved = resolveTitle(slug)
  if (!resolved) return { title: 'Not Found' }
  const suffix = resolved.parentTitle ? ` — ${resolved.parentTitle}` : ''
  return {
    title: `${resolved.title}${suffix}`,
    description: `Learn about ${resolved.title} at Russald Medical Center in Tijuana, Mexico. Board-certified specialists, 60–75% less than US prices, minutes from San Diego.`,
  }
}

export default async function NestedSlugPage({ params }: Props) {
  const { slug } = await params
  const resolved = resolveTitle(slug)
  if (!resolved) notFound()

  return (
    <section className="flex min-h-[60vh] w-full flex-col items-center justify-center px-6 py-20 text-center">
      {resolved.parentTitle && (
        <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue)]">
          <Link href={resolved.parentHref!} className="hover:underline">{resolved.parentTitle}</Link>
        </p>
      )}
      {!resolved.parentTitle && (
        <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue)]">
          Coming Soon
        </p>
      )}
      <div className="h-3" aria-hidden="true" />
      <h1 className="font-['Rethink_Sans',sans-serif] text-[2rem] font-bold leading-tight text-[var(--color-navy)] sm:text-[2.75rem]">
        {resolved.title}
      </h1>
      <div className="h-4" aria-hidden="true" />
      <p className="max-w-[480px] font-['Nunito_Sans',sans-serif] text-[0.9375rem] leading-relaxed text-[var(--color-muted)]">
        Detailed clinical information, candidacy criteria, pricing, and recovery guide coming soon.
        Our team can answer all your questions directly.
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
