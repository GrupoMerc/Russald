// Figma node: 2298:721 — Section/Home-Who · 2330:1076 Tablet · 2337:1721 Mobile
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { altText } from '@/lib/altText'
import clinicInterior from './clinic-interior.webp'

const STATS = [
  { value: '25+',     label: 'PROCEDURES AVAILABLE' },
  { value: '~20 min', label: 'FROM SAN DIEGO' },
  { value: '60–75%',  label: 'LESS THAN US PRICES' },
  { value: '100%',    label: 'ENGLISH-SPEAKING TEAM' },
  { value: '7',       label: 'MEDICAL SPECIALTIES' },
  { value: 'Board',   label: 'CERTIFIED PHYSICIANS' },
] as const

export default function HomeWho() {
  return (
    <section
      id="who-we-are"
      aria-labelledby="who-heading"
      className="w-full bg-[var(--color-white)] flex flex-col items-center px-4 py-10 sm:px-6 sm:py-[80px]"
    >
      <div className="w-full sm:max-w-[786px] lg:max-w-[980px] flex flex-col gap-8 sm:gap-7">

        {/* Section header */}
        <div className="flex flex-col items-center gap-[10px]">
          <p className="font-['Nunito_Sans',sans-serif] font-semibold text-[var(--color-navy)] text-[0.65625rem] tracking-[1.89px] uppercase text-center">
            WHO WE ARE
          </p>
          <h2
            id="who-heading"
            className="font-['Rethink_Sans',sans-serif] font-bold text-[var(--color-blue)] text-center text-[1.5rem] leading-[1.75rem] sm:text-[1.875rem] sm:leading-[2.125rem]"
          >
            A Different Kind of Medical Center
          </h2>
          <div className="w-9 h-[3px] rounded-[2px] bg-[var(--color-navy)]" aria-hidden="true" />
        </div>

        {/* Stats bar — vertical on mobile, horizontal on sm+ */}
        <div
          className="border border-[var(--color-border)] rounded-[12px] sm:rounded-[16px] overflow-hidden flex flex-col sm:flex-row text-center"
          role="list"
          aria-label="Key statistics"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              role="listitem"
              className={[
                'flex-1 flex flex-col items-center gap-1 px-4 py-4 sm:py-5 bg-[var(--color-white)]',
                i < STATS.length - 1
                  ? 'border-b sm:border-b-0 sm:border-r border-[var(--color-border)]'
                  : '',
              ].join(' ')}
            >
              <span className="font-['Rethink_Sans',sans-serif] font-bold text-[var(--color-blue)] text-[1.375rem] sm:text-[1.75rem] leading-snug">
                {stat.value}
              </span>
              <span className="font-['Nunito_Sans',sans-serif] font-semibold text-[var(--color-muted)] text-[0.625rem] tracking-[0.8px] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Content — stacked on mobile/tablet, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row lg:gap-16 lg:items-center gap-7">

          {/* Copy */}
          <div className="flex flex-col gap-[14px] sm:gap-4 flex-1 min-w-0">
            <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-muted)] text-[0.875rem] sm:text-[0.9375rem] leading-6 sm:leading-7">
              Russald Medical Center was built on a straightforward idea: high-quality surgical and
              medical care should not require a six-figure price tag or a six-month waitlist. Located
              in Tijuana, Baja California — within minutes of the San Diego border crossing — we serve
              patients from across the United States and internationally who are looking for clinical
              excellence without the premium US cost.
            </p>
            <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-muted)] text-[0.875rem] sm:text-[0.9375rem] leading-6 sm:leading-7">
              We are a multi-specialty center. Our team of board-certified physicians covers weight
              loss surgery, plastic and reconstructive surgery, hair restoration, men&apos;s health,
              vascular care, and bio-optimization — all under one roof, with a single coordinated
              patient experience designed around you.
            </p>
            <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-muted)] text-[0.875rem] sm:text-[0.9375rem] leading-6 sm:leading-7">
              Every patient is assigned an English-speaking coordinator who manages your case from
              first contact through post-treatment follow-up. You will never be handed off to a call
              center or navigate a system alone.
            </p>
            <div className="mt-2">
              <Button variant="primary" size="md" href="/team">
                Meet Our Medical Team →
              </Button>
            </div>
          </div>

          {/* Clinic interior photo */}
          <div className="shrink-0 w-full lg:w-[458px] h-[269px] sm:h-[344px] rounded-[12px] sm:rounded-[16px] overflow-hidden relative">
            <Image
              src={clinicInterior}
              alt={altText.clinicInteriorCm3}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 458px"
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
