import type { Metadata }  from 'next'
import Link               from 'next/link'
import { breadcrumbSchema, medicalWebPageSchema } from '@/lib/schema'
import { JsonLd }         from '@/components/JsonLd'
import { SITE }           from '@/config/site'

export const metadata: Metadata = {
  title: 'Our Patients — Russald Medical Center',
  description:
    'Real outcomes from real patients. Weight loss, plastic surgery, hair restoration, and bio optimization ' +
    'stories from patients who chose Russald Medical Center in Tijuana, Mexico.',
  alternates: { canonical: '/our-patients' },
  openGraph: {
    title:       'Our Patients | Russald Medical Center',
    description: 'Real patient outcomes — weight loss surgery, plastic surgery, hair transplant, and bio optimization at Russald Medical Center, Tijuana.',
    url:         '/our-patients',
  },
}

const breadcrumbs = breadcrumbSchema([
  { name: 'Home',         url: SITE.url },
  { name: 'Our Patients', url: `${SITE.url}/our-patients` },
])
const webPage = medicalWebPageSchema({
  name:        'Our Patients — Russald Medical Center',
  description: 'Real outcomes from real patients at Russald Medical Center in Tijuana, Mexico.',
  path:        '/our-patients',
  specialty:   'General Surgery',
})

const STATS = [
  { value: '95%',    label: 'Patient Satisfaction Rate' },
  { value: '20 min', label: 'Average Drive from San Diego' },
  { value: '60–75%', label: 'Average Savings vs. US' },
  { value: '25+',    label: 'Procedures Available' },
] as const

const TESTIMONIALS = [
  {
    name:      'Maria C.',
    location:  'San Diego, CA',
    procedure: 'Gastric Sleeve',
    quote:
      'I drove across the border not knowing what to expect. Three months later I\'ve lost 45 lbs and feel like myself again. The team made the entire process feel safe and completely manageable.',
  },
  {
    name:      'Robert H.',
    location:  'Phoenix, AZ',
    procedure: 'TRT + Bio Optimization Protocol',
    quote:
      'I was skeptical about hormone therapy until a friend referred me. Six months in — energy, focus, and body composition are all measurably improved. The lab-based approach made all the difference.',
  },
  {
    name:      'Jennifer M.',
    location:  'Los Angeles, CA',
    procedure: 'Mommy Makeover',
    quote:
      'Two kids and I thought I\'d never feel confident again. Recovery was well-managed and the results at six months are beyond what I imagined. Communication from my coordinator was excellent throughout.',
  },
  {
    name:      'David T.',
    location:  'Austin, TX',
    procedure: 'FUE Hair Transplant',
    quote:
      'I\'d researched clinics in the US and internationally. At month 9 I have full hairline coverage. The procedure itself was more comfortable than I expected and the results speak for themselves.',
  },
  {
    name:      'Sandra F.',
    location:  'Tucson, AZ',
    procedure: 'BHRT — Menopause Protocol',
    quote:
      'My doctor at home kept dismissing my symptoms. Within six weeks of starting the protocol, my sleep and energy had completely changed. I wish I\'d done this two years earlier.',
  },
  {
    name:      'Andrew L.',
    location:  'Las Vegas, NV',
    procedure: 'Bariatric Revision',
    quote:
      'I was quoted an 8-month wait and $55,000 at a US hospital. I was at Russald within three weeks at a fraction of that cost. The clinical quality was exactly what I expected from a board-certified surgeon.',
  },
] as const

const STORIES = [
  {
    label:     'Weight Loss',
    heading:   'San Diego → Tijuana in 20 Minutes',
    body:
      'Maria had tried every program available before bariatric surgery. At 14 months post-op she\'d lost 112 lbs and her type 2 diabetes was in full remission — confirmed by her US physician at her annual checkup.',
    href:  '/weight-loss',
    cta:   'Weight Loss Surgery →',
  },
  {
    label:     'Plastic Surgery',
    heading:   'A Plan, Not a Package',
    body:
      'Jennifer\'s mommy makeover was designed around her body, not a pre-set menu. Her coordinator worked with the surgeon to sequence the procedures correctly. At four months, she describes the results as life-changing.',
    href:  '/plastic-surgery',
    cta:   'Plastic Surgery →',
  },
  {
    label:     'Hair Restoration',
    heading:   '2,800 Grafts. One Day.',
    body:
      'David\'s FUE procedure took one full day at the clinic. The transplanted grafts shed as expected at week 4 and new growth began at month 3. By month 10 he had a natural, full hairline.',
    href:  '/hair-restoration',
    cta:   'Hair Restoration →',
  },
  {
    label:     'Bio Optimization',
    heading:   'What a Complete Panel Reveals',
    body:
      'Robert\'s initial testosterone was 187 ng/dL — well below clinical range. After TRT combined with a NAD IV protocol, his numbers normalized within three months and remain stable with quarterly monitoring.',
    href:  '/bio-optimization',
    cta:   'Bio Optimization →',
  },
] as const

const REASONS = [
  {
    icon:  '📍',
    title: 'Geographic Convenience',
    body:  'For San Diego-area patients, Russald is closer than most US hospitals. No flights, no multi-night hotel stays — a day trip is enough for many procedures.',
  },
  {
    icon:  '💰',
    title: 'Financial Accessibility',
    body:  'Procedures that were financially out of reach in the US become accessible without compromising clinical quality or physician credentials.',
  },
  {
    icon:  '🗣️',
    title: 'English-First Care',
    body:  'All communication is in English from first contact through discharge. Every patient is assigned a dedicated English-speaking Patient Advisor — not a call center or chatbot.',
  },
  {
    icon:  '🏥',
    title: 'Clinical Credibility',
    body:  'Board-certified specialists, modern surgical suites, and the same diagnostic and procedural standards as US facilities — at a fraction of the cost.',
  },
  {
    icon:  '👤',
    title: 'Personal Coordination',
    body:  'A dedicated coordinator manages every detail: pre-operative requirements, scheduling, border crossing guidance, and post-operative follow-up.',
  },
  {
    icon:  '📋',
    title: 'Complete Transparency',
    body:  'All-inclusive pricing provided before any commitment. No hidden surgical fees, no surprise add-ons. What you\'re quoted is what you pay.',
  },
] as const

export default function OurPatientsPage() {
  return (
    <>
      <JsonLd data={breadcrumbs as Record<string, unknown>} />
      <JsonLd data={webPage     as Record<string, unknown>} />

      {/* ── Hero ── */}
      <section aria-labelledby="patients-hero-heading" className="w-full bg-[var(--color-navy)] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0">
          <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue-light)]">
            Our Patients
          </p>
          <div className="h-3" aria-hidden="true" />
          <h1
            id="patients-hero-heading"
            className="font-['Rethink_Sans',sans-serif] text-[2rem] font-bold leading-tight text-white sm:text-[2.5rem] lg:text-[2.75rem]"
          >
            Real Outcomes from Real Patients
          </h1>
          <div className="h-4" aria-hidden="true" />
          <p className="max-w-[580px] font-['Nunito_Sans',sans-serif] text-[0.9375rem] leading-relaxed text-white/65">
            These are the stories of people who chose Russald Medical Center — and what happened after they did.
          </p>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section aria-label="Key statistics" className="w-full bg-[var(--color-blue)] py-8">
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1 text-center">
                <p className="font-['Rethink_Sans',sans-serif] text-[1.625rem] font-bold text-white lg:text-[2rem]">
                  {value}
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[0.75rem] text-white/70">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section aria-labelledby="testimonials-heading" className="w-full bg-[var(--color-ice)] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0">
          <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue-action)]">
            Patient Reviews
          </p>
          <div className="h-3" aria-hidden="true" />
          <h2
            id="testimonials-heading"
            className="font-['Rethink_Sans',sans-serif] text-[1.75rem] font-bold text-[var(--color-navy)] sm:text-[2rem]"
          >
            What Patients Say
          </h2>
          <div className="h-10" aria-hidden="true" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {TESTIMONIALS.map(({ name, location, procedure, quote }) => (
              <article
                key={name}
                role="listitem"
                className="flex flex-col gap-4 rounded-[var(--radius-card)] bg-white p-6 shadow-sm"
              >
                {/* 5 stars */}
                <div aria-label="5 out of 5 stars" className="flex gap-[3px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M7 1l1.545 3.13 3.455.502-2.5 2.437.59 3.44L7 8.885 3.91 10.51l.59-3.44L2 4.632l3.455-.502L7 1z" fill="#B5862A" />
                    </svg>
                  ))}
                </div>
                <blockquote className="font-['Nunito_Sans',sans-serif] text-[0.875rem] leading-relaxed text-[var(--color-muted)] flex-1">
                  "{quote}"
                </blockquote>
                <footer className="flex flex-col gap-0.5">
                  <p className="font-['Rethink_Sans',sans-serif] text-[0.875rem] font-bold text-[var(--color-navy)]">
                    {name}
                  </p>
                  <p className="font-['Nunito_Sans',sans-serif] text-[0.75rem] text-[var(--color-muted)]">
                    {location} · {procedure}
                  </p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Patient Stories ── */}
      <section aria-labelledby="stories-heading" className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0">
          <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue-action)]">
            Patient Journeys
          </p>
          <div className="h-3" aria-hidden="true" />
          <h2
            id="stories-heading"
            className="font-['Rethink_Sans',sans-serif] text-[1.75rem] font-bold text-[var(--color-navy)] sm:text-[2rem]"
          >
            Behind the Results
          </h2>
          <div className="h-10" aria-hidden="true" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {STORIES.map(({ label, heading, body, href, cta }) => (
              <div
                key={heading}
                className="flex flex-col gap-3 rounded-[var(--radius-card)] border border-[var(--color-border)] p-6"
              >
                <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.4px] text-[var(--color-blue-action)]">
                  {label}
                </p>
                <h3 className="font-['Rethink_Sans',sans-serif] text-[1.125rem] font-bold text-[var(--color-navy)]">
                  {heading}
                </h3>
                <p className="font-['Nunito_Sans',sans-serif] text-[0.875rem] leading-relaxed text-[var(--color-muted)] flex-1">
                  {body}
                </p>
                <Link
                  href={href}
                  className="font-['Nunito_Sans',sans-serif] text-[0.8125rem] font-semibold text-[var(--color-blue-action)] hover:underline focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
                >
                  {cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why patients choose Russald ── */}
      <section aria-labelledby="why-choose-heading" className="w-full bg-[var(--color-ice)] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0">
          <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue-action)]">
            Why Russald
          </p>
          <div className="h-3" aria-hidden="true" />
          <h2
            id="why-choose-heading"
            className="font-['Rethink_Sans',sans-serif] text-[1.75rem] font-bold text-[var(--color-navy)] sm:text-[2rem]"
          >
            Why Patients Choose Russald Medical Center
          </h2>
          <div className="h-10" aria-hidden="true" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {REASONS.map(({ icon, title, body }) => (
              <div key={title} role="listitem" className="flex flex-col gap-3 rounded-[var(--radius-card)] bg-white p-6 shadow-sm">
                <span role="img" aria-hidden="true" className="text-[1.5rem] leading-none">{icon}</span>
                <h3 className="font-['Rethink_Sans',sans-serif] text-[1rem] font-bold text-[var(--color-navy)]">
                  {title}
                </h3>
                <p className="font-['Nunito_Sans',sans-serif] text-[0.875rem] leading-relaxed text-[var(--color-muted)]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section aria-labelledby="patients-cta-heading" className="w-full bg-[var(--color-navy)] py-12">
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0 flex flex-col items-center gap-5 text-center">
          <h2
            id="patients-cta-heading"
            className="font-['Rethink_Sans',sans-serif] text-[1.375rem] font-bold text-white sm:text-[1.625rem]"
          >
            Ready to start your own story?
          </h2>
          <p className="max-w-[460px] font-['Nunito_Sans',sans-serif] text-[0.9375rem] text-white/65">
            Submit a free assessment and a Patient Advisor will reach out within one business day.
          </p>
          <Link
            href="/free-evaluation"
            className="flex min-h-[48px] items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-blue-action)] px-8 font-['Rethink_Sans',sans-serif] text-[0.9375rem] font-bold text-white transition-colors hover:bg-[var(--color-blue)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
          >
            Free Assessment →
          </Link>
        </div>
      </section>
    </>
  )
}
