// Figma node: 2298:1011 — Section/Home-Procedures (Desktop) · 2330:1367 (Tablet) · 2337:2003 (Mobile)
import Link from 'next/link'

type Procedure = { name: string; subtitle: string; href: string; featured?: boolean }
type SpecialtyGroup = { emoji: string; name: string; href: string; procedures: Procedure[] }

const specialties: SpecialtyGroup[] = [
  {
    emoji: '⚖️',
    name:  'Weight Loss Surgery',
    href:  '/weight-loss',
    procedures: [
      { name: 'Gastric Sleeve',      subtitle: 'Weight Loss & Metabolic Surgery', href: '/weight-loss/gastric-sleeve' },
      { name: 'Gastric Bypass',      subtitle: 'Weight Loss & Metabolic Surgery', href: '/weight-loss/gastric-bypass' },
      { name: 'Mini Gastric Bypass', subtitle: 'Weight Loss & Metabolic Surgery', href: '/weight-loss/mini-gastric-bypass' },
      { name: 'Lap-Band',            subtitle: 'Weight Loss & Metabolic Surgery', href: '/weight-loss/lap-band' },
      { name: 'Bariatric Revision',  subtitle: 'Weight Loss & Metabolic Surgery', href: '/weight-loss/bariatric-revision' },
    ],
  },
  {
    emoji: '✨',
    name:  'Plastic Surgery',
    href:  '/plastic-surgery',
    procedures: [
      { name: 'Mommy Makeover',            subtitle: 'Plastic & Reconstructive Surgery', href: '/plastic-surgery/mommy-makeover' },
      { name: 'Tummy Tuck',                subtitle: 'Plastic & Reconstructive Surgery', href: '/plastic-surgery/tummy-tuck' },
      { name: 'Circular Tummy Tuck',       subtitle: 'Plastic & Reconstructive Surgery', href: '/plastic-surgery/circular-tummy-tuck' },
      { name: 'Liposuction',               subtitle: 'Plastic & Reconstructive Surgery', href: '/plastic-surgery/liposuction' },
      { name: 'Brazilian Butt Lift (BBL)', subtitle: 'Plastic & Reconstructive Surgery', href: '/plastic-surgery/bbl' },
      { name: 'Breast Augmentation',       subtitle: 'Plastic & Reconstructive Surgery', href: '/plastic-surgery/breast-augmentation' },
      { name: 'Rhinoplasty',               subtitle: 'Plastic & Reconstructive Surgery', href: '/plastic-surgery/rhinoplasty' },
      { name: 'Facelift',                  subtitle: 'Plastic & Reconstructive Surgery', href: '/plastic-surgery/facelift' },
      { name: 'Arm Lift',                  subtitle: 'Plastic & Reconstructive Surgery', href: '/plastic-surgery/arm-lift' },
      { name: 'Thigh Lift',                subtitle: 'Plastic & Reconstructive Surgery', href: '/plastic-surgery/thigh-lift' },
    ],
  },
  {
    emoji: '💆',
    name:  'Hair Restoration',
    href:  '/hair-restoration',
    procedures: [
      { name: 'FUE Hair Transplant', subtitle: 'Hair Restoration', href: '/hair-restoration/fue' },
      { name: 'DHI Hair Transplant', subtitle: 'Hair Restoration', href: '/hair-restoration/dhi' },
      { name: 'Hair PRP',            subtitle: 'Hair Restoration', href: '/hair-restoration/prp' },
    ],
  },
  {
    emoji: '💪',
    name:  "Men's Health",
    href:  '/mens-health',
    procedures: [
      { name: 'Male Enhancement Implant',        subtitle: "Men's Health & Urology",                   href: '/mens-health/implant',             featured: true },
      { name: 'Erectile Dysfunction Treatment',  subtitle: "Men's Health & Urology",                   href: '/mens-health/erectile-dysfunction' },
      { name: 'Testosterone Replacement Therapy', subtitle: 'Bio Optimization & Performance Medicine', href: '/mens-health/testosterone' },
    ],
  },
  {
    emoji: '🩸',
    name:  'Vascular Care',
    href:  '/vascular-care',
    procedures: [
      { name: 'EVLA (Varicose Veins)', subtitle: 'Vascular Care', href: '/vascular-care/evla' },
      { name: 'Sclerotherapy',         subtitle: 'Vascular Care', href: '/vascular-care/sclerotherapy' },
    ],
  },
  {
    emoji: '⚗️',
    name:  'Bio Optimization',
    href:  '/bio-optimization',
    procedures: [
      { name: 'HGH Therapy',       subtitle: 'Bio Optimization & Performance Medicine', href: '/bio-optimization/hgh' },
      { name: 'BHRT',              subtitle: 'Bio Optimization & Performance Medicine', href: '/bio-optimization/bhrt' },
      { name: 'Myers Cocktail IV', subtitle: 'Bio Optimization & Performance Medicine', href: '/bio-optimization/myers-cocktail' },
    ],
  },
]

const cardBase =
  'flex items-center gap-3 rounded-[8px] border border-[var(--color-border)] bg-[var(--color-white)] p-4 shadow-[var(--shadow-card-rest)] ' +
  'transition-shadow hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--color-blue)]/30 ' +
  'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]'

function ProcedureCard({ proc, emoji }: { proc: Procedure; emoji: string }) {
  if (proc.featured) {
    return (
      <Link
        href={proc.href}
        className={
          'overflow-hidden rounded-[8px] shadow-[var(--shadow-card-rest)] block ' +
          'transition-shadow hover:shadow-[0px_4px_16px_0px_rgba(181,134,42,0.25)] ' +
          'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]'
        }
        style={{
          backgroundImage:
            'linear-gradient(15.79deg, rgb(13,27,53) 39.675%, rgb(7,30,22) 110.4%)',
          border: '1px solid rgba(181,134,42,0.28)',
        }}
      >
        {/* Gold → blue accent */}
        <div
          className="h-[2px] w-full"
          style={{ backgroundImage: 'linear-gradient(to right, #b5862a, var(--color-blue))' }}
          aria-hidden="true"
        />
        <div className="flex items-center gap-3 px-4 py-[0.875rem]">
          <span className="shrink-0 text-[1.25rem]" aria-hidden="true">🔒</span>
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <div className="flex flex-wrap items-center gap-[6px]">
              <span className="whitespace-nowrap font-['Nunito_Sans',sans-serif] text-[0.84375rem] font-bold leading-[1.3] text-[var(--color-white)]">
                {proc.name}
              </span>
              <span
                className="shrink-0 rounded-[4px] border px-[6px] py-[2px] font-['Nunito_Sans',sans-serif] text-[0.5625rem] font-extrabold uppercase tracking-[0.9px]"
                style={{
                  backgroundImage:
                    'linear-gradient(13.06deg, rgb(251,244,230) 39.675%, rgb(255,248,231) 110.4%)',
                  borderColor: 'var(--color-gold)',
                  color: 'rgb(201,151,58)',
                }}
              >
                Featured
              </span>
            </div>
            <span className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-normal text-[rgba(255,255,255,0.45)]">
              {proc.subtitle}
            </span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={proc.href} className={cardBase}>
      <span className="shrink-0 text-[1.25rem]" aria-hidden="true">{emoji}</span>
      <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
        <span className="font-['Nunito_Sans',sans-serif] text-[0.84375rem] font-bold leading-[1.3] text-[var(--color-navy)]">
          {proc.name}
        </span>
        <span className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-normal text-[var(--color-muted)]">
          {proc.subtitle}
        </span>
      </div>
    </Link>
  )
}

export default function HomeProcedures() {
  return (
    <section
      aria-labelledby="procedures-heading"
      className="flex flex-col items-center bg-[var(--color-ice)] px-5 py-[3.25rem] sm:px-6 lg:py-20"
    >
      <div className="flex w-full max-w-[980px] flex-col gap-9 sm:gap-[44px]">

        {/* ── Header ── */}
        <div className="flex flex-col items-center">
          <p className="text-center font-['Nunito_Sans',sans-serif] text-[0.656rem] font-bold uppercase tracking-[1.89px] text-[var(--color-blue)]">
            Browse All Procedures
          </p>
          <div className="h-[10px]" />
          <h2
            id="procedures-heading"
            className="text-center font-['Rethink_Sans',sans-serif] text-[1.5rem] font-bold leading-normal tracking-[-0.005em] sm:text-[1.875rem]"
          >
            <span className="text-[var(--color-charcoal)]">Find Your </span>
            <span className="italic text-[var(--color-blue)]">Procedure</span>
          </h2>
          <div className="h-3 sm:h-[14px]" />
          <div className="h-[3px] w-9 rounded-[2px] bg-[var(--color-navy)]" />
          <div className="h-4 sm:h-5" />
          <p className="max-w-[600px] text-center font-['Nunito_Sans',sans-serif] text-[0.875rem] font-normal leading-[1.75] text-[var(--color-muted)] sm:text-[0.9375rem]">
            Every procedure page includes full clinical information, candidacy criteria, the
            step-by-step process, recovery expectations, pricing context, and answers to the most
            common patient questions.
          </p>
        </div>

        {/* ── Specialty groups ── */}
        {specialties.map((group) => (
          <div key={group.name} className="flex flex-col gap-[18px]">
            {/* Group header */}
            <div className="flex items-center gap-3 border-b-2 border-[var(--color-border)] pb-3">
              <span className="text-[1.375rem]" aria-hidden="true">{group.emoji}</span>
              <Link
                href={group.href}
                className="font-['Rethink_Sans',sans-serif] text-[1.25rem] font-bold text-[var(--color-navy)] hover:text-[var(--color-blue)] transition-colors sm:text-[1.5rem] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
              >
                {group.name}
              </Link>
            </div>
            {/* Procedure cards — 1 col mobile · 2 col tablet · 4 col desktop */}
            <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-4">
              {group.procedures.map((proc) => (
                <ProcedureCard key={proc.name} proc={proc} emoji={group.emoji} />
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}
