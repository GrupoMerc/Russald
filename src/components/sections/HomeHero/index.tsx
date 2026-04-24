// Figma node: 2300:705 — Section/Home-Hero · 2323:975 Tablet · 2334:1555 Mobile
import Image from 'next/image'
import { altText } from '@/lib/altText'
import heroClinic from './hero-clinic.jpg'

const SUBTITLE_FULL =
  'A multi-specialty medical center serving international patients in Tijuana, Baja California: ' +
  'minutes from San Diego. Board-certified physicians. Transparent pricing. A team that speaks your language.'

const SUBTITLE_SHORT =
  'A multi-specialty medical center in Tijuana, minutes from San Diego. ' +
  'Board-certified physicians. Transparent pricing.'

const ctaBase =
  'flex items-center justify-center min-h-[48px] w-full sm:w-auto ' +
  "font-['Rethink_Sans',sans-serif] font-bold text-[0.9375rem] whitespace-nowrap " +
  'px-6 sm:px-8 rounded-[8px] sm:rounded-[50px] ' +
  'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 ' +
  'focus-visible:outline-[var(--color-blue-action)]'

export default function HomeHero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Background clinic photo at 30% opacity */}
      <Image
        src={heroClinic}
        alt={altText.heroClinic}
        fill
        priority
        className="object-cover opacity-30"
      />

      {/* Content layer */}
      <div
        className={[
          'relative z-10 flex w-full flex-col items-start lg:items-center',
          'pt-[70px] pb-[50px] px-4',
          'sm:pt-[100px] sm:pb-[80px] sm:px-6',
          'lg:min-h-[547px] lg:justify-center',
        ].join(' ')}
      >
        <div className="w-full lg:w-[980px] flex flex-col items-start">

          {/* Eyebrow */}
          <p
            className={[
              "font-['Rethink_Sans',sans-serif] font-bold uppercase tracking-[1.76px]",
              'text-[0.625rem] text-[var(--color-navy)]',
              'sm:text-[0.6875rem]',
            ].join(' ')}
          >
            RUSSALD MEDICAL CENTER
            <span className="sm:hidden"> · TIJUANA</span>
            <span className="hidden sm:inline"> · TIJUANA, MEXICO</span>
          </p>

          <div className="h-[14px] sm:h-[16px]" aria-hidden="true" />

          {/* H1 */}
          <h1
            id="hero-heading"
            className={[
              "font-['Rethink_Sans',sans-serif] font-bold leading-tight",
              'text-[1.75rem]',
              'sm:text-[2.375rem]',
              'lg:text-[4.25rem] lg:leading-[4.5rem]',
            ].join(' ')}
          >
            <span className="block text-[var(--color-navy)]">Where World-Class Medicine</span>
            <span className="block text-[var(--color-blue)]">Meets Accessibility</span>
          </h1>

          <div className="h-[16px] sm:h-[20px]" aria-hidden="true" />

          {/* Subtitle */}
          <p
            className={[
              "font-['Nunito_Sans',sans-serif] font-normal leading-relaxed",
              'text-[0.8125rem] text-[var(--color-navy)]',
              'sm:text-[0.9375rem]',
              'lg:text-[1rem] lg:leading-[1.8125rem] lg:max-w-[560px]',
            ].join(' ')}
          >
            <span className="sm:hidden">{SUBTITLE_SHORT}</span>
            <span className="hidden sm:inline">{SUBTITLE_FULL}</span>
          </p>

          <div className="h-[28px] sm:h-[36px]" aria-hidden="true" />

          {/* CTAs:
              Mobile  → stacked, full-width, rounded-[8px]
              Tablet+ → side-by-side, auto-width, pill rounded-[50px] */}
          <div className="flex flex-col w-full gap-[10px] sm:flex-row sm:w-auto sm:gap-[14px]">
            <a
              href="#eval-form"
              aria-label="Request a free medical assessment"
              className={`${ctaBase} bg-[var(--color-blue)] text-white transition-opacity hover:opacity-90`}
            >
              🩺 Free Assessment
            </a>
            <a
              href="#who-we-are"
              className={`${ctaBase} border-[1.5px] border-[var(--color-navy)] text-[var(--color-navy)] transition-colors hover:border-[var(--color-blue)] hover:text-[var(--color-blue)]`}
            >
              Who We Are
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
