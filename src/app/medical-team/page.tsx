import type { Metadata }  from 'next'
import Link               from 'next/link'
import { breadcrumbSchema, medicalWebPageSchema } from '@/lib/schema'
import { JsonLd }         from '@/components/JsonLd'
import { SITE }           from '@/config/site'

export const metadata: Metadata = {
  title: 'Our Medical Team — Russald Medical Center',
  description:
    'Board-certified surgeons and specialists at Russald Medical Center in Tijuana, Mexico. ' +
    'Bilingual physicians trained in bariatric, plastic, hair restoration, and bio-optimization specialties.',
  alternates: { canonical: '/medical-team' },
  openGraph: {
    title:       'Our Medical Team | Russald Medical Center',
    description: 'Board-certified, bilingual specialists in bariatric surgery, plastic surgery, hair restoration, and bio optimization — Tijuana, Mexico.',
    url:         '/medical-team',
  },
}

const breadcrumbs = breadcrumbSchema([
  { name: 'Home',          url: SITE.url },
  { name: 'Medical Team',  url: `${SITE.url}/medical-team` },
])
const webPage = medicalWebPageSchema({
  name:        'Our Medical Team — Russald Medical Center',
  description: 'Board-certified surgeons and specialists at Russald Medical Center in Tijuana, Mexico.',
  path:        '/medical-team',
  specialty:   'General Surgery',
})

const STATS = [
  { value: '100%', label: 'Board-Certified' },
  { value: 'EN / ES', label: 'Bilingual' },
  { value: '4+', label: 'Specialties' },
  { value: '20 min', label: 'From San Diego' },
] as const

const PHYSICIANS = [
  {
    initials:  'JS',
    name:      'Dr. Jorge Sánchez, MD',
    specialty: 'Bariatric & General Surgery',
    details: [
      'Board-Certified General Surgeon',
      'Fellowship-Trained in Bariatric Surgery',
      '1,200+ bariatric procedures performed',
      'Laparoscopic specialist',
    ],
    languages: 'English, Spanish',
  },
  {
    initials:  'MA',
    name:      'Dr. Marco Acosta, MD',
    specialty: 'Plastic & Reconstructive Surgery',
    details: [
      'Board-Certified Plastic Surgeon',
      'Body contouring & aesthetic surgery specialist',
      'US-recognized training and techniques',
      'Mommy makeover, BBL, rhinoplasty, facelift',
    ],
    languages: 'English, Spanish',
  },
  {
    initials:  'LV',
    name:      'Dr. Lucía Vargas, MD',
    specialty: 'Hair Restoration Surgery',
    details: [
      'Specialist in FUE and DHI techniques',
      'Advanced hairline design training',
      'High-density implantation specialist',
      '500+ hair restoration procedures',
    ],
    languages: 'English, Spanish',
  },
  {
    initials:  'RC',
    name:      'Dr. Rafael Contreras, MD',
    specialty: 'Bio Optimization & Hormone Therapy',
    details: [
      'Internal Medicine — Fellowship in Anti-Aging Medicine',
      'TRT, BHRT, HGH, and peptide therapy protocols',
      'Lab-directed hormone optimization',
      'IV therapy and regenerative medicine',
    ],
    languages: 'English, Spanish',
  },
] as const

const PILLARS = [
  {
    icon:  '👤',
    title: 'Patient-First Evaluation',
    body:  'Individual candidacy assessment, full risk disclosure, and alternative options discussed before any procedure is recommended. Physician consultations are not sales consultations.',
  },
  {
    icon:  '🌐',
    title: 'International Patient Support',
    body:  'English-language communication throughout, logistics support from border crossing to discharge, remote pre- and post-operative care, and written discharge instructions for your US physician.',
  },
  {
    icon:  '🏥',
    title: 'Facility & Safety Standards',
    body:  'Modern surgical suites, in-house nursing, ICU backup, and sterile technique aligned with COEPRIS standards. All procedures performed in a licensed medical facility, not a clinic or spa.',
  },
  {
    icon:  '📋',
    title: 'Credentials & Oversight',
    body:  'Active CÉDULA PROFESIONAL (Mexican medical license), postgraduate specialty training, ongoing continuing medical education, and malpractice coverage for all operating physicians.',
  },
] as const

export default function MedicalTeamPage() {
  return (
    <>
      <JsonLd data={breadcrumbs as Record<string, unknown>} />
      <JsonLd data={webPage     as Record<string, unknown>} />

      {/* ── Hero ── */}
      <section aria-labelledby="team-hero-heading" className="w-full bg-[var(--color-navy)] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0">
          <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue-light)]">
            Medical Team
          </p>
          <div className="h-3" aria-hidden="true" />
          <h1
            id="team-hero-heading"
            className="font-['Rethink_Sans',sans-serif] text-[2rem] font-bold leading-tight text-white sm:text-[2.5rem] lg:text-[2.75rem]"
          >
            Meet Our Medical Team
          </h1>
          <div className="h-4" aria-hidden="true" />
          <p className="max-w-[600px] font-['Nunito_Sans',sans-serif] text-[0.9375rem] leading-relaxed text-white/65">
            Every procedure at Russald Medical Center is performed by a licensed, board-certified specialist
            with postgraduate training recognized by Mexican and US medical standards. Our physicians are
            fluent in English and supported by a bilingual patient coordination team.
          </p>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section aria-label="Team credentials at a glance" className="w-full bg-[var(--color-blue)] py-8">
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1 text-center">
                <p className="font-['Rethink_Sans',sans-serif] text-[1.625rem] font-bold text-white lg:text-[2rem]">{value}</p>
                <p className="font-['Nunito_Sans',sans-serif] text-[0.75rem] text-white/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Physicians ── */}
      <section aria-labelledby="physicians-heading" className="w-full bg-[var(--color-ice)] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0">
          <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue-action)]">
            Our Specialists
          </p>
          <div className="h-3" aria-hidden="true" />
          <h2
            id="physicians-heading"
            className="font-['Rethink_Sans',sans-serif] text-[1.75rem] font-bold text-[var(--color-navy)] sm:text-[2rem]"
          >
            Physicians & Specialists
          </h2>
          <div className="h-10" aria-hidden="true" />
          <div className="flex flex-col gap-6" role="list">
            {PHYSICIANS.map(({ initials, name, specialty, details, languages }) => (
              <article
                key={name}
                role="listitem"
                className="flex flex-col gap-4 rounded-[var(--radius-card)] bg-white p-6 shadow-sm sm:flex-row sm:items-start sm:gap-6"
              >
                {/* Avatar placeholder */}
                <div
                  aria-hidden="true"
                  className="shrink-0 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-navy)] font-['Rethink_Sans',sans-serif] text-[1.125rem] font-bold text-white"
                >
                  {initials}
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <div>
                    <p className="font-['Rethink_Sans',sans-serif] text-[1.0625rem] font-bold text-[var(--color-navy)]">
                      {name}
                    </p>
                    <p className="font-['Nunito_Sans',sans-serif] text-[0.8125rem] font-semibold text-[var(--color-blue-action)]">
                      {specialty}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-1" role="list">
                    {details.map(d => (
                      <li
                        key={d}
                        role="listitem"
                        className="font-['Nunito_Sans',sans-serif] text-[0.875rem] text-[var(--color-muted)] flex items-start gap-2"
                      >
                        <span aria-hidden="true" className="mt-[3px] shrink-0 h-[6px] w-[6px] rounded-full bg-[var(--color-blue-action)]" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <p className="font-['Nunito_Sans',sans-serif] text-[0.75rem] text-[var(--color-muted)]">
                    Languages: {languages}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clinical Philosophy ── */}
      <section aria-labelledby="philosophy-heading" className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0">
          <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue-action)]">
            Clinical Philosophy
          </p>
          <div className="h-3" aria-hidden="true" />
          <h2
            id="philosophy-heading"
            className="font-['Rethink_Sans',sans-serif] text-[1.75rem] font-bold text-[var(--color-navy)] sm:text-[2rem]"
          >
            How We Deliver Care
          </h2>
          <div className="h-10" aria-hidden="true" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2" role="list">
            {PILLARS.map(({ icon, title, body }) => (
              <div key={title} role="listitem" className="flex flex-col gap-3 rounded-[var(--radius-card)] border border-[var(--color-border)] p-6">
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
          <div className="h-8" aria-hidden="true" />
          <p className="font-['Nunito_Sans',sans-serif] text-[0.8125rem] leading-relaxed text-[var(--color-muted)] max-w-[640px]">
            <strong className="text-[var(--color-navy)]">Medical Evaluation Disclosure:</strong>{' '}
            All procedures require a medical evaluation to determine candidacy. Physician profiles on this
            page are provided for informational purposes. This page does not constitute medical advice.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section aria-labelledby="team-cta-heading" className="w-full bg-[var(--color-navy)] py-12">
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0 flex flex-col items-center gap-5 text-center">
          <h2
            id="team-cta-heading"
            className="font-['Rethink_Sans',sans-serif] text-[1.375rem] font-bold text-white sm:text-[1.625rem]"
          >
            Ready to meet your care team?
          </h2>
          <p className="max-w-[460px] font-['Nunito_Sans',sans-serif] text-[0.9375rem] text-white/65">
            Start with a free assessment. A Patient Advisor will match you with the right specialist for your goals.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/free-evaluation"
              className="flex min-h-[48px] items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-blue-action)] px-8 font-['Rethink_Sans',sans-serif] text-[0.9375rem] font-bold text-white transition-colors hover:bg-[var(--color-blue)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
            >
              Free Assessment →
            </Link>
            <Link
              href="/our-facilities"
              className="flex min-h-[48px] items-center justify-center rounded-[var(--radius-btn)] border-[1.5px] border-white/30 px-8 font-['Rethink_Sans',sans-serif] text-[0.9375rem] font-bold text-white transition-colors hover:border-white/70 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
            >
              Our Facilities →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
