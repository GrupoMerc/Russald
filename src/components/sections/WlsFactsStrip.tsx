// Figma node: 2143:277 — Section/Facts-Strip · 2284:888 Tablet · 2169:46 Mobile

const FACTS = [
  { value: '65–75%',       label: 'Less Than US Cost'   },
  { value: '2–4 hrs',      label: 'Typical Procedure'  },
  { value: '2–5 days',     label: 'Stay in Tijuana'    },
  { value: 'Laparoscopic', label: 'Minimally Invasive' },
] as const

export default function WlsFactsStrip() {
  return (
    <div
      className="w-full bg-[var(--color-navy)]"
      role="list"
      aria-label="Surgery statistics"
    >
      {/* Desktop / Tablet: single horizontal row */}
      <div className="hidden sm:flex w-full px-8 lg:px-0 lg:w-[980px] lg:mx-auto text-center">
        {FACTS.map((fact, i) => (
          <div
            key={fact.label}
            role="listitem"
            className={[
              'flex-1 flex flex-col items-center justify-center gap-1 px-3 py-6',
              i < FACTS.length - 1 ? 'border-r border-white/[0.08]' : '',
            ].join(' ')}
          >
            <span className="font-['Rethink_Sans',sans-serif] font-bold text-white text-[1.625rem] leading-7">
              {fact.value}
            </span>
            <span className="font-['Nunito_Sans',sans-serif] font-semibold text-white/55 text-[0.625rem] tracking-[0.8px] uppercase">
              {fact.label}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile: 2×2 grid */}
      <div className="sm:hidden flex flex-col w-full text-center">
        <div className="flex border-b border-white/[0.08]">
          {FACTS.slice(0, 2).map((fact, i) => (
            <div
              key={fact.label}
              role="listitem"
              className={[
                'flex-1 flex flex-col items-center gap-1 px-3 py-5',
                i === 0 ? 'border-r border-white/[0.1]' : '',
              ].join(' ')}
            >
              <span className="font-['Rethink_Sans',sans-serif] font-bold text-white text-[1.25rem]">
                {fact.value}
              </span>
              <span className="font-['Nunito_Sans',sans-serif] font-semibold text-white/55 text-[0.625rem] tracking-[0.8px]">
                {fact.label}
              </span>
            </div>
          ))}
        </div>
        <div className="flex">
          {FACTS.slice(2).map((fact, i) => (
            <div
              key={fact.label}
              role="listitem"
              className={[
                'flex-1 flex flex-col items-center gap-1 px-3 py-5',
                i === 0 ? 'border-r border-white/[0.1]' : '',
              ].join(' ')}
            >
              <span className="font-['Rethink_Sans',sans-serif] font-bold text-white text-[1.25rem]">
                {fact.value}
              </span>
              <span className="font-['Nunito_Sans',sans-serif] font-semibold text-white/55 text-[0.625rem] tracking-[0.8px]">
                {fact.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
