// Figma node: 2143:291 — Section/Spec-Intro · 2284:902 Tablet · 2169:61 Mobile

import type { SpecIntroData } from '@/types/spec'

interface Props {
  data: SpecIntroData
}

export default function SpecIntro({ data }: Props) {
  return (
    <section
      id="spec-intro"
      aria-labelledby="spec-intro-heading"
      className="w-full bg-[var(--color-white)] px-4 py-10 sm:px-8 sm:py-12 lg:py-16"
    >
      <div className="w-full sm:max-w-[770px] lg:max-w-[980px] mx-auto flex flex-col lg:flex-row lg:gap-14 lg:items-start gap-6">

        {/* left col */}
        <div className="flex flex-col flex-1 min-w-0">
          <p className="font-['Rethink_Sans',sans-serif] font-bold text-[var(--color-blue)] text-[0.65625rem] tracking-[1.89px] uppercase">
            {data.eyebrow}
          </p>
          <div className="h-2" aria-hidden="true" />
          <h2
            id="spec-intro-heading"
            className="font-['Rethink_Sans',sans-serif] font-extrabold leading-[1.15] text-[var(--color-navy)] text-[1.5rem] sm:text-[2rem] tracking-[-0.02em]"
          >
            {data.heading}
          </h2>
          <div className="h-3" aria-hidden="true" />
          <div className="w-9 h-[3px] rounded-[2px] bg-[var(--color-blue)]" aria-hidden="true" />
          <div className="h-4" aria-hidden="true" />
          {data.paragraphs.map((p, i) => (
            <p
              key={i}
              className={[
                'font-[\'Nunito_Sans\',sans-serif] font-normal text-[var(--color-muted)] text-[0.84375rem] leading-[1.75]',
                i < data.paragraphs.length - 1 ? 'mb-3' : '',
              ].join(' ')}
            >
              {p}
            </p>
          ))}
        </div>

        {/* right col */}
        <div className="flex flex-col gap-4 flex-1 min-w-0 lg:max-w-[440px]">
          <div className="bg-[var(--color-white)] border border-[#eef1ff] rounded-[8px] p-5 flex flex-col gap-3">
            <p className="font-['Rethink_Sans',sans-serif] font-bold text-[var(--color-navy)] text-[0.875rem]">
              {data.candidatesHeading}
            </p>
            <ul className="flex flex-col gap-2.5" role="list">
              {data.candidates.map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <span className="font-['Rethink_Sans',sans-serif] font-bold text-[var(--color-blue)] text-[0.75rem] shrink-0 mt-0.5" aria-hidden="true">✓</span>
                  <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-muted)] text-[0.78125rem] leading-[1.65]">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#fbf4e6] border border-[rgba(181,134,42,0.4)] rounded-[6px] px-[14px] py-3" role="note" aria-label="Medical disclaimer">
            <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-gold)] text-[0.75rem] leading-[1.65]">
              {data.disclaimer}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
