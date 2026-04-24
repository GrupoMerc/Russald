// Figma node: 2298:1011 — Section/Home-Procedures (Desktop) · 2330:1367 (Tablet) · 2337:2003 (Mobile)

type Procedure = { name: string; subtitle: string; featured?: boolean }
type SpecialtyGroup = { emoji: string; name: string; procedures: Procedure[] }

const specialties: SpecialtyGroup[] = [
  {
    emoji: '⚖️',
    name: 'Weight Loss Surgery',
    procedures: [
      { name: 'Gastric Sleeve',      subtitle: 'Weight Loss & Metabolic Surgery' },
      { name: 'Gastric Bypass',      subtitle: 'Weight Loss & Metabolic Surgery' },
      { name: 'Mini Gastric Bypass', subtitle: 'Weight Loss & Metabolic Surgery' },
      { name: 'Lap-Band',            subtitle: 'Weight Loss & Metabolic Surgery' },
      { name: 'Bariatric Revision',  subtitle: 'Weight Loss & Metabolic Surgery' },
    ],
  },
  {
    emoji: '✨',
    name: 'Plastic Surgery',
    procedures: [
      { name: 'Mommy Makeover',             subtitle: 'Plastic & Reconstructive Surgery' },
      { name: 'Tummy Tuck',                 subtitle: 'Plastic & Reconstructive Surgery' },
      { name: 'Circular Tummy Tuck',        subtitle: 'Plastic & Reconstructive Surgery' },
      { name: 'Liposuction',                subtitle: 'Plastic & Reconstructive Surgery' },
      { name: 'Brazilian Butt Lift (BBL)',   subtitle: 'Plastic & Reconstructive Surgery' },
      { name: 'Breast Augmentation',        subtitle: 'Plastic & Reconstructive Surgery' },
      { name: 'Rhinoplasty',                subtitle: 'Plastic & Reconstructive Surgery' },
      { name: 'Facelift',                   subtitle: 'Plastic & Reconstructive Surgery' },
      { name: 'Arm Lift',                   subtitle: 'Plastic & Reconstructive Surgery' },
      { name: 'Thigh Lift',                 subtitle: 'Plastic & Reconstructive Surgery' },
    ],
  },
  {
    emoji: '💆',
    name: 'Hair Restoration',
    procedures: [
      { name: 'FUE Hair Transplant', subtitle: 'Hair Restoration' },
      { name: 'DHI Hair Transplant', subtitle: 'Hair Restoration' },
      { name: 'Hair PRP',            subtitle: 'Hair Restoration' },
    ],
  },
  {
    emoji: '💪',
    name: "Men's Health",
    procedures: [
      { name: 'Male Enhancement Implant',       subtitle: "Men's Health & Urology",                   featured: true },
      { name: 'Erectile Dysfunction Treatment', subtitle: "Men's Health & Urology" },
      { name: 'Testosterone Replacement Therapy', subtitle: 'Bio Optimization & Performance Medicine' },
    ],
  },
  {
    emoji: '🩸',
    name: 'Vascular Care',
    procedures: [
      { name: 'EVLA (Varicose Veins)', subtitle: 'Vascular Care' },
      { name: 'Sclerotherapy',         subtitle: 'Vascular Care' },
    ],
  },
  {
    emoji: '⚗️',
    name: 'Bio Optimization',
    procedures: [
      { name: 'HGH Therapy',      subtitle: 'Bio Optimization & Performance Medicine' },
      { name: 'BHRT',             subtitle: 'Bio Optimization & Performance Medicine' },
      { name: 'Myers Cocktail IV', subtitle: 'Bio Optimization & Performance Medicine' },
    ],
  },
]

function ProcedureCard({ proc, emoji }: { proc: Procedure; emoji: string }) {
  if (proc.featured) {
    return (
      <div
        className="overflow-hidden rounded-[8px] shadow-[0px_1px_3px_0px_rgba(15,28,63,0.08)]"
        style={{
          backgroundImage:
            'linear-gradient(15.79deg, rgb(13,27,53) 39.675%, rgb(7,30,22) 110.4%)',
          border: '1px solid rgba(181,134,42,0.28)',
        }}
      >
        {/* Gold → blue accent */}
        <div
          className="h-[2px] w-full"
          style={{ backgroundImage: 'linear-gradient(to right, #b5862a, #2563eb)' }}
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
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3 rounded-[8px] border border-[var(--color-border)] bg-[var(--color-white)] p-4 shadow-[0px_1px_3px_0px_rgba(15,28,63,0.08)]">
      <span className="shrink-0 text-[1.25rem]" aria-hidden="true">{emoji}</span>
      <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
        <span className="font-['Nunito_Sans',sans-serif] text-[0.84375rem] font-bold leading-[1.3] text-[var(--color-navy)]">
          {proc.name}
        </span>
        <span className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-normal text-[var(--color-muted)]">
          {proc.subtitle}
        </span>
      </div>
    </div>
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
          <p className="text-center font-['Nunito_Sans',sans-serif] text-[0.656rem] font-bold uppercase tracking-[1.89px] text-[var(--color-blue-action)]">
            Browse All Procedures
          </p>
          <div className="h-[10px]" />
          <h2
            id="procedures-heading"
            className="text-center font-['Rethink_Sans',sans-serif] text-[1.5rem] font-bold leading-normal tracking-[-0.005em] sm:text-[1.875rem]"
          >
            <span className="text-[var(--color-charcoal)]">Find Your </span>
            <span className="italic text-[var(--color-blue-action)]">Procedure</span>
          </h2>
          <div className="h-3 sm:h-[14px]" />
          <div className="h-[3px] w-9 rounded-[2px] bg-[var(--color-blue-action)]" />
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
              <h3 className="font-['Rethink_Sans',sans-serif] text-[1.25rem] font-bold text-[var(--color-navy)] sm:text-[1.5rem]">
                {group.name}
              </h3>
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
