// Figma node: 2298:875 — Section/Bio-Breaker (Desktop) · 2330:1233 (Tablet) · 2337:1871 (Mobile)
import Link from 'next/link'
import Button from '@/components/ui/Button'

const pills = [
  'NAD IV',
  'TRT · BRT · ERT',
  'PRP & Stem Cells',
  'HGH Therapy',
  'Aesthetic Medicine',
  '4-Visit Annual Timeline',
]

const GRADIENTS = {
  men:   'linear-gradient(22.55deg, rgb(29,58,138) 39.7%, rgb(29,86,196) 110.4%)',
  women: 'linear-gradient(22.55deg, rgb(139,28,92) 39.7%, rgb(194,24,91) 110.4%)',
  all:   'linear-gradient(22.55deg, rgb(22,101,52) 39.7%, rgb(22,163,74) 110.4%)',
} as const

const protocols: { code: string; title: string; subtitle: string; gradient: keyof typeof GRADIENTS }[] = [
  { code: 'M-40', title: 'Preserve',  subtitle: 'For men · Ages 40–45',       gradient: 'men'   },
  { code: 'W-35', title: 'Balance',   subtitle: 'For women · Ages 35–42',     gradient: 'women' },
  { code: 'M-45', title: 'Restore',   subtitle: 'For men · Ages 45–50',       gradient: 'men'   },
  { code: 'W-42', title: 'Navigate',  subtitle: 'For women · Ages 42–48',     gradient: 'women' },
  { code: 'M-20', title: 'Optimize',  subtitle: 'For men · Ages 20–40',       gradient: 'men'   },
  { code: 'A-18', title: 'Perform',   subtitle: 'Men & Women · Ages 18–45',   gradient: 'all'   },
]

export default function BioBreaker() {
  return (
    <section
      aria-labelledby="bio-breaker-heading"
      className="flex flex-col items-center px-4 py-10 sm:px-5 sm:py-[3.25rem] lg:px-6 lg:py-20"
      style={{ backgroundImage: 'linear-gradient(23.03deg, rgb(48,137,226) 39.645%, rgb(255,255,255) 110.36%)' }}
    >
      <div className="flex w-full max-w-[980px] flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">

        {/* ── Copy column ── */}
        <div className="flex flex-col items-start lg:w-1/2">
          <p className="font-['Nunito_Sans',sans-serif] text-[0.656rem] font-bold uppercase tracking-[1.89px] text-[rgba(255,255,255,0.5)]">
            Bio Optimization
          </p>

          <div className="h-[0.625rem] sm:h-3" />

          <h2
            id="bio-breaker-heading"
            className="font-['Rethink_Sans',sans-serif] text-[1.75rem] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-white)] sm:text-[2.625rem]"
          >
            Optimize Your Biology.<br />
            Elevate Your Performance.
          </h2>

          <div className="h-[0.875rem] sm:h-4" />

          <p className="font-['Nunito_Sans',sans-serif] text-[0.875rem] font-normal leading-[1.85] text-[rgba(255,255,255,0.7)] sm:text-[0.9375rem]">
            Beyond surgery and procedures, Russald Medical Center offers a complete medical wellness
            system: Structured medical optimization programs for men and women, built around IV therapy,
            hormone optimization, regenerative medicine, and aesthetic treatments.
          </p>

          <div className="h-5 sm:h-6" />

          {/* Pills */}
          <div className="flex flex-wrap gap-2">
            {pills.map((pill) => (
              <span
                key={pill}
                className="whitespace-nowrap rounded-[1.25rem] px-[0.875rem] py-[0.3125rem] font-['Nunito_Sans',sans-serif] text-[0.75rem] font-semibold tracking-[0.48px] text-[rgba(255,255,255,0.85)]"
                style={{
                  backgroundColor: 'rgba(29,86,196,0.2)',
                  border: '1px solid rgba(29,86,196,0.35)',
                }}
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="h-7" />

          <Button href="#eval-form" variant="primary" size="md">
            Explore Protocols →
          </Button>
        </div>

        {/* ── Protocols column ── */}
        <div className="flex flex-col gap-3 lg:w-1/2">
          <div className="grid grid-cols-1 gap-[0.625rem] sm:grid-cols-2">
            {protocols.map((p) => (
              <div
                key={p.code}
                className="flex flex-col rounded-[var(--radius-card)] px-5 py-4 sm:py-[1.125rem]"
                style={{ backgroundImage: GRADIENTS[p.gradient] }}
              >
                <span className="font-['Rethink_Sans',sans-serif] text-[0.594rem] font-extrabold uppercase tracking-[1.9px] text-[rgba(255,255,255,0.6)]">
                  {p.code}
                </span>
                <div className="h-1" />
                <span className="font-['Rethink_Sans',sans-serif] text-[1.125rem] font-extrabold leading-[1.1] text-[var(--color-white)] sm:text-[1.25rem]">
                  {p.title}
                </span>
                <div className="h-[0.1875rem]" />
                <span className="font-['Nunito_Sans',sans-serif] text-[0.75rem] font-normal text-[rgba(255,255,255,0.65)]">
                  {p.subtitle}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/bio-optimization"
            className="text-right font-['Nunito_Sans',sans-serif] text-[0.719rem] font-normal text-[rgba(255,255,255,0.35)] hover:text-[rgba(255,255,255,0.65)] transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
          >
            + 5 more protocols · View all →
          </Link>
        </div>

      </div>
    </section>
  )
}
