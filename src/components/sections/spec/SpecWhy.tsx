// Figma node: 2143:325 — Section/Spec-Why · 2208:483 Tablet · 2169:93 Mobile

import type { SpecWhyData } from '@/types/spec'

interface Props {
  data: SpecWhyData
}

export default function SpecWhy({ data }: Props) {
  return (
    <section
      id="spec-why"
      aria-labelledby="spec-why-heading"
      className="w-full bg-[var(--color-ice)] px-4 py-10 sm:px-8 sm:py-14 lg:py-[56px]"
    >
      <div className="w-full sm:max-w-[770px] lg:max-w-[980px] mx-auto">

        <div className="flex flex-col items-start">
          <p className="font-['Rethink_Sans',sans-serif] font-bold text-[var(--color-blue)] text-[0.65625rem] tracking-[1.89px] uppercase">
            {data.eyebrow}
          </p>
          <div className="h-2" aria-hidden="true" />
          <h2
            id="spec-why-heading"
            className="font-['Rethink_Sans',sans-serif] font-extrabold leading-[1.15] text-[var(--color-navy)] text-[1.375rem] sm:text-[1.625rem] lg:text-[2rem] tracking-[-0.02em]"
          >
            {data.heading}
          </h2>
          <div className="h-3" aria-hidden="true" />
          <div className="w-9 h-[3px] rounded-[2px] bg-[var(--color-blue)]" aria-hidden="true" />
        </div>

        <div className="h-7" aria-hidden="true" />

        {/* 1 col mobile · 2 col tablet · 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.items.map((item) => (
            <div
              key={item.title}
              className="bg-[var(--color-white)] border border-[var(--color-border)] rounded-[10px] shadow-[var(--shadow-card-rest)] px-5 py-[22px] flex flex-col gap-2"
            >
              <span className="text-[1.375rem]" aria-hidden="true">{item.icon}</span>
              <p className="font-['Rethink_Sans',sans-serif] font-bold text-[var(--color-navy)] text-[0.875rem] leading-[1.3]">{item.title}</p>
              <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-muted)] text-[0.78125rem] leading-[1.7]">{item.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
