// Figma node: TBD — Section/Spec-Faq (pendiente diseño en Figma)

import type { SpecFaqData } from '@/types/spec'

interface Props {
  data: SpecFaqData
}

export default function SpecFaq({ data }: Props) {
  return (
    <section
      id="spec-faq"
      aria-labelledby="spec-faq-heading"
      className="w-full bg-[var(--color-ice)] px-4 py-10 sm:px-8 sm:py-14 lg:py-[56px]"
    >
      <div className="w-full sm:max-w-[770px] lg:max-w-[980px] mx-auto">

        <div className="flex flex-col items-start">
          <p className="font-['Rethink_Sans',sans-serif] font-bold text-[var(--color-blue)] text-[0.65625rem] tracking-[1.89px] uppercase">
            {data.eyebrow}
          </p>
          <div className="h-2" aria-hidden="true" />
          <h2
            id="spec-faq-heading"
            className="font-['Rethink_Sans',sans-serif] font-extrabold leading-[1.15] text-[var(--color-navy)] text-[1.375rem] sm:text-[1.625rem] lg:text-[2rem] tracking-[-0.02em]"
          >
            {data.heading}
          </h2>
          <div className="h-3" aria-hidden="true" />
          <div className="w-9 h-[3px] rounded-[2px] bg-[var(--color-blue)]" aria-hidden="true" />
        </div>

        <div className="h-8" aria-hidden="true" />

        <div className="divide-y divide-[var(--color-border)]">
          {data.items.map((item, i) => (
            <details key={i} className="py-1">
              <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden min-h-[48px]">
                <span className="font-['Rethink_Sans',sans-serif] font-semibold text-[var(--color-navy)] text-[0.9375rem] leading-snug">
                  {item.q}
                </span>
                <span
                  className="shrink-0 w-[22px] h-[22px] rounded-full border border-[var(--color-border)] bg-[var(--color-white)] [[open]_&]:bg-[var(--color-blue)] [[open]_&]:border-[var(--color-blue)] text-[var(--color-blue)] [[open]_&]:text-[var(--color-white)] flex items-center justify-center transition-all duration-200 [[open]_&]:rotate-45"
                  aria-hidden="true"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <line x1="5" y1="1" x2="5" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="1" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <div className="pb-5 pr-8">
                <p className="font-['Nunito_Sans',sans-serif] text-[var(--color-muted)] text-[0.84375rem] leading-[1.75]">
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  )
}
