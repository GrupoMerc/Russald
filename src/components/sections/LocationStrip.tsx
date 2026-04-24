// Figma node: 2298:951 — Section/Location-Strip (Desktop) · 2330:1309 (Tablet) · 2337:1946 (Mobile)
import { Fragment } from 'react'

const blocks = [
  {
    emoji: '📍',
    heading: 'Tijuana, B.C.',
    subtitle: 'Agua Caliente Boulevard 4558 · Grand Medical Tower',
    subtitleHref: 'https://maps.google.com/?q=Russald+Medical+Center+Tijuana+Mexico',
  },
  {
    emoji: '🚗',
    heading: '~20 min',
    subtitle: 'From the San Diego border crossing: no flights required',
    subtitleHref: null,
  },
  {
    emoji: '📞',
    heading: 'Two Lines',
    subtitle: null,
    subtitleHref: null,
  },
] as const

const subtitleClass = 'font-["Nunito_Sans",sans-serif] text-[0.6875rem] font-normal tracking-[0.66px] text-[rgba(255,255,255,0.5)] lg:text-[0.71875rem] lg:tracking-[0.69px]'
const linkClass = subtitleClass + ' underline-offset-2 hover:text-[rgba(255,255,255,0.8)] transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]'

export default function LocationStrip() {
  return (
    <section
      aria-label="Location and contact information"
      className="flex flex-col items-center px-5 py-10 sm:px-6 lg:py-[3.25rem]"
      style={{
        backgroundImage:
          'linear-gradient(7.83deg, rgb(15,23,42) 39.675%, rgb(13,42,80) 110.4%)',
      }}
    >
      <div className="flex w-full max-w-[980px] flex-col items-center gap-5 sm:gap-6 lg:flex-row lg:gap-8">

        {/* Tijuana address */}
        <Fragment>
          <div className="flex flex-1 flex-col items-center gap-2 text-center lg:gap-[10px]">
            <span className="text-[1.625rem] leading-none lg:text-[1.75rem]" aria-hidden="true">📍</span>
            <div className="flex flex-col items-center gap-1">
              <p className="font-['Rethink_Sans',sans-serif] text-[1.25rem] font-bold leading-[1.1] text-[var(--color-white)] lg:text-[1.375rem]">Tijuana, B.C.</p>
              <a
                href="https://maps.google.com/?q=Russald+Medical+Center+Tijuana+Mexico"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Russald Medical Center on Google Maps (opens in new window)"
                className={linkClass}
              >
                Agua Caliente Blvd 4558 · Grand Medical Tower
              </a>
            </div>
          </div>
        </Fragment>

        {/* Dividers */}
        <div className="h-px w-20 shrink-0 sm:hidden" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} aria-hidden="true" />
        <div className="hidden h-[60px] w-px shrink-0 lg:block" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} aria-hidden="true" />

        {/* Distance */}
        <div className="flex flex-1 flex-col items-center gap-2 text-center lg:gap-[10px]">
          <span className="text-[1.625rem] leading-none lg:text-[1.75rem]" aria-hidden="true">🚗</span>
          <div className="flex flex-col items-center gap-1">
            <p className="font-['Rethink_Sans',sans-serif] text-[1.25rem] font-bold leading-[1.1] text-[var(--color-white)] lg:text-[1.375rem]">~20 min</p>
            <p className={subtitleClass}>From the San Diego border crossing: no flights required</p>
          </div>
        </div>

        {/* Dividers */}
        <div className="h-px w-20 shrink-0 sm:hidden" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} aria-hidden="true" />
        <div className="hidden h-[60px] w-px shrink-0 lg:block" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} aria-hidden="true" />

        {/* Phone */}
        <div className="flex flex-1 flex-col items-center gap-2 text-center lg:gap-[10px]">
          <span className="text-[1.625rem] leading-none lg:text-[1.75rem]" aria-hidden="true">📞</span>
          <div className="flex flex-col items-center gap-1">
            <p className="font-['Rethink_Sans',sans-serif] text-[1.25rem] font-bold leading-[1.1] text-[var(--color-white)] lg:text-[1.375rem]">Two Lines</p>
            <p className={subtitleClass}>
              <a href="tel:+526649069268" className={linkClass} aria-label="Call Mexico line">MX: +52 (664) 906-9268</a>
              {' · '}
              <a href="tel:+18005606733" className={linkClass} aria-label="Call US toll-free line">US: +1 (800) 560-6733</a>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
