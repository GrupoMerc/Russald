// Figma node: 2143:358 — Section/Spec-Proc · 2208:517 Tablet · 2169:130 Mobile

const PROCEDURES = [
  { icon: '⚖️', title: 'Gastric Sleeve',          category: 'Weight Loss & Metabolic Surgery' },
  { icon: '⚖️', title: 'Gastric Bypass',           category: 'Weight Loss & Metabolic Surgery' },
  { icon: '⚖️', title: 'Mini Gastric Bypass',      category: 'Weight Loss & Metabolic Surgery' },
  { icon: '⚖️', title: 'Lap-Band',                 category: 'Weight Loss & Metabolic Surgery' },
  { icon: '⚖️', title: 'Bariatric Revision',       category: 'Weight Loss & Metabolic Surgery' },
] as const

export default function WlsProc() {
  return (
    <section
      id="wls-procedures"
      aria-labelledby="wls-proc-heading"
      className="w-full bg-[var(--color-white)] px-4 py-10 sm:px-8 sm:py-14 lg:py-[56px]"
    >
      <div className="w-full sm:max-w-[770px] lg:max-w-[980px] mx-auto">

        {/* section header */}
        <div className="flex flex-col items-start">
          <p className="font-['Rethink_Sans',sans-serif] font-bold text-[var(--color-blue)] text-[0.65625rem] tracking-[1.89px] uppercase">
            Weight Loss Surgery Procedures
          </p>
          <div className="h-2" aria-hidden="true" />
          <h2
            id="wls-proc-heading"
            className="font-['Rethink_Sans',sans-serif] font-extrabold leading-[1.15] text-[var(--color-navy)] text-[1.375rem] sm:text-[1.625rem] lg:text-[2rem] tracking-[-0.02em]"
          >
            Available Weight Loss Surgery Procedures
          </h2>
          <div className="h-3" aria-hidden="true" />
          <div className="w-9 h-[3px] rounded-[2px] bg-[var(--color-blue)]" aria-hidden="true" />
          <div className="h-5" aria-hidden="true" />
          <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-muted)] text-[0.84375rem] leading-[1.75]">
            Each procedure page includes full clinical information, candidacy criteria, the step-by-step
            process, recovery timeline, pricing context, and answers to the most common patient questions.
          </p>
        </div>

        <div className="h-6" aria-hidden="true" />

        {/* procedure cards: 1 col mobile, 2 col sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="list">
          {PROCEDURES.map((proc) => (
            <div
              key={proc.title}
              role="listitem"
              className="bg-[var(--color-white)] border border-[rgba(226,232,240,0.7)] rounded-[8px] flex items-center gap-3 p-4 h-[67px]"
            >
              <span className="text-[1.25rem] shrink-0" aria-hidden="true">{proc.icon}</span>
              <div className="flex flex-col gap-0.5 min-w-0">
                <p className="font-['Rethink_Sans',sans-serif] font-bold text-[var(--color-navy)] text-[0.84375rem] leading-snug truncate">
                  {proc.title}
                </p>
                <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-muted)] text-[0.6875rem] truncate">
                  {proc.category}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
