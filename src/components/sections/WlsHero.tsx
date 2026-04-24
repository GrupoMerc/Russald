// Figma node: 2143:243 — Section/Spec-Hero · 2201:378 Tablet · 2156:222 Mobile

import Link from 'next/link'

const STATS = [
  { icon: '⚖️', value: '65–75%',        label: 'Less Than US Cost'    },
  { icon: '🕐', value: '2–4 hrs',        label: 'Typical Procedure'   },
  { icon: '🏨', value: '2–5 days',       label: 'Stay in Tijuana'     },
  { icon: '🔬', value: 'Laparoscopic',   label: 'Minimally Invasive'  },
] as const

export default function WlsHero() {
  return (
    <section
      aria-labelledby="wls-hero-heading"
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(18.43deg, rgb(10,22,40) 39.675%, rgb(13,42,80) 82.107%, rgb(16,32,64) 110.4%)',
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-[var(--color-navy)]/50 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 w-full px-4 py-12 sm:px-8 sm:py-14 lg:py-[80px] lg:w-[980px] lg:mx-auto">

        {/* breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 font-['Nunito_Sans',sans-serif] text-[0.75rem]">
          <Link href="/" className="text-white/85 hover:text-white transition-colors">Home</Link>
          <span className="text-white/55" aria-hidden="true">›</span>
          <span className="font-bold text-white">Weight Loss Surgery</span>
        </nav>

        {/* 2-col on sm+; stacked on mobile */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 lg:gap-12">

          {/* copy col */}
          <div className="flex flex-col gap-4 flex-1 min-w-0">

            {/* eyebrow tag */}
            <div className="self-start bg-[rgba(10,152,130,0.2)] border border-[rgba(10,152,130,0.35)] rounded-[20px] px-[14px] py-[5px]">
              <p className="font-['Rethink_Sans',sans-serif] font-bold text-[0.65625rem] text-white/90 tracking-[1.47px] uppercase whitespace-nowrap">
                Bariatric Surgery · Tijuana, Mexico
              </p>
            </div>

            <h1
              id="wls-hero-heading"
              className="font-['Rethink_Sans',sans-serif] font-extrabold leading-[1.15] text-white text-[1.625rem] sm:text-[2.125rem] lg:text-[2.5rem] tracking-[-0.025em]"
            >
              Life-Changing Weight Loss Surgery: Minutes from San Diego
            </h1>

            <p className="font-['Nunito_Sans',sans-serif] font-normal text-white/85 text-[0.875rem] leading-[1.85]">
              Russald Medical Center performs the full spectrum of bariatric procedures: gastric sleeve,
              gastric bypass, mini bypass, Lap-Band, and revision surgery — at a fraction of US costs,
              with the same surgical standards and a coordinated international patient experience.
            </p>

            {/* CTAs — visible sm+ only; side-by-side */}
            <div className="hidden sm:flex items-center gap-3 mt-2">
              <a
                href="#wls-procedures"
                className="min-h-[48px] flex items-center justify-center px-7 py-3 rounded-[var(--radius-btn)] bg-[var(--color-blue-action)] font-['Rethink_Sans',sans-serif] font-bold text-[0.875rem] text-white tracking-[0.02em] hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
              >
                View Procedures
              </a>
              <a
                href="#eval-form"
                className="min-h-[48px] flex items-center justify-center px-7 py-3 rounded-[4px] border-[1.5px] border-white/60 font-['Nunito_Sans',sans-serif] font-semibold text-[0.875rem] text-white tracking-[0.02em] hover:border-white transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Free Evaluation
              </a>
            </div>
          </div>

          {/* stat card */}
          <div
            className="mt-5 sm:mt-0 sm:w-[276px] lg:w-[300px] shrink-0 bg-white/[0.07] border border-white/[0.12] rounded-[var(--radius-card)] p-5"
            role="list"
            aria-label="Key statistics"
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                role="listitem"
                className={[
                  'flex items-center gap-3 py-3 px-1',
                  i < STATS.length - 1 ? 'border-b border-white/[0.08]' : '',
                ].join(' ')}
              >
                <span className="text-[1.125rem] shrink-0" aria-hidden="true">{stat.icon}</span>
                <div className="flex flex-col gap-0.5">
                  <span className="font-['Rethink_Sans',sans-serif] font-bold text-white text-[1rem] lg:text-[1.125rem] leading-snug">{stat.value}</span>
                  <span className="font-['Nunito_Sans',sans-serif] font-normal text-white/55 text-[0.6875rem] tracking-[0.99px] uppercase">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs — mobile only; stacked full-width; below stat card */}
        <div className="sm:hidden flex flex-col gap-2.5 mt-5 w-full">
          <a
            href="#wls-procedures"
            className="min-h-[48px] flex items-center justify-center w-full px-7 py-3 rounded-[var(--radius-btn)] bg-[var(--color-blue-action)] font-['Rethink_Sans',sans-serif] font-bold text-[0.875rem] text-white tracking-[0.02em] hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
          >
            View Procedures
          </a>
          <a
            href="#eval-form"
            className="min-h-[48px] flex items-center justify-center w-full px-7 py-3 rounded-[4px] border-[1.5px] border-white/60 font-['Nunito_Sans',sans-serif] font-semibold text-[0.875rem] text-white tracking-[0.02em] hover:border-white transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Free Evaluation
          </a>
        </div>

      </div>
    </section>
  )
}
