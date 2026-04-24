// Figma node: 2298:951 — Section/Location-Strip (Desktop) · 2330:1309 (Tablet) · 2337:1946 (Mobile)
import { Fragment } from 'react'

const blocks = [
  {
    emoji: '📍',
    heading: 'Tijuana, B.C.',
    subtitle: 'Agua Caliente Boulevard 4558 · Grand Medical Tower',
  },
  {
    emoji: '🚗',
    heading: '~20 min',
    subtitle: 'From the San Diego border crossing: no flights required',
  },
  {
    emoji: '📞',
    heading: 'Two Lines',
    subtitle: 'MX: +52 (664) 906-9268 · US: +1 (800) 560-6733',
  },
] as const

export default function LocationStrip() {
  return (
    <section
      className="flex flex-col items-center px-5 py-10 sm:px-6 lg:py-[3.25rem]"
      style={{
        backgroundImage:
          'linear-gradient(7.83deg, rgb(15,23,42) 39.675%, rgb(13,42,80) 110.4%)',
      }}
    >
      <div className="flex w-full max-w-[980px] flex-col items-center gap-5 sm:gap-6 lg:flex-row lg:gap-8">
        {blocks.map((block, i) => (
          <Fragment key={block.heading}>
            {i > 0 && (
              <>
                {/* Horizontal divider — mobile only */}
                <div
                  className="h-px w-20 shrink-0 sm:hidden"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  aria-hidden="true"
                />
                {/* Vertical divider — desktop only */}
                <div
                  className="hidden h-[60px] w-px shrink-0 lg:block"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  aria-hidden="true"
                />
              </>
            )}

            <div className="flex flex-1 flex-col items-center gap-2 text-center lg:gap-[10px]">
              <span className="text-[1.625rem] leading-none lg:text-[1.75rem]" aria-hidden="true">
                {block.emoji}
              </span>
              <div className="flex flex-col items-center gap-1">
                <p className="font-['Rethink_Sans',sans-serif] text-[1.25rem] font-bold leading-[1.1] text-[var(--color-white)] lg:text-[1.375rem]">
                  {block.heading}
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-normal tracking-[0.66px] text-[rgba(255,255,255,0.5)] lg:text-[0.71875rem] lg:tracking-[0.69px]">
                  {block.subtitle}
                </p>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  )
}
