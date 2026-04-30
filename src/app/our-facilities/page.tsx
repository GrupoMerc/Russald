import type { Metadata }  from 'next'
import Link               from 'next/link'
import { breadcrumbSchema, medicalWebPageSchema } from '@/lib/schema'
import { JsonLd }         from '@/components/JsonLd'
import { SITE }           from '@/config/site'

export const metadata: Metadata = {
  title: 'Our Facilities — Russald Medical Center',
  description:
    'Russald Medical Center is a modern, multi-specialty medical facility in Tijuana, Baja California — ' +
    '20 minutes from San Diego. Surgical suites, recovery rooms, IV therapy, and bio optimization suite.',
  alternates: { canonical: '/our-facilities' },
  openGraph: {
    title:       'Our Facilities | Russald Medical Center — Tijuana, Mexico',
    description: 'Modern multi-specialty facility — surgical suites, recovery rooms, IV therapy suite, bio optimization. C2 level, Grand Medical Tower, Tijuana. 20 min from San Diego.',
    url:         '/our-facilities',
  },
}

const breadcrumbs = breadcrumbSchema([
  { name: 'Home',           url: SITE.url },
  { name: 'Our Facilities', url: `${SITE.url}/our-facilities` },
])
const webPage = medicalWebPageSchema({
  name:        'Our Facilities — Russald Medical Center',
  description: 'Russald Medical Center is a modern, multi-specialty medical facility in Tijuana, Baja California.',
  path:        '/our-facilities',
  specialty:   'General Surgery',
})

const STATS = [
  { value: 'C2 Level',   label: 'Grand Medical Tower' },
  { value: '~20 min',    label: 'From San Diego' },
  { value: '7',          label: 'Specialties' },
  { value: 'Parking',    label: 'On-Site Available' },
] as const

const SPACES = [
  {
    icon:  '🏥',
    title: 'Surgical Suites',
    body:
      'Fully equipped laparoscopic and open surgical suites with modern anesthesia systems, sterile instrument management, and emergency backup. All surgical procedures are performed in a licensed operating room, not a clinic or spa.',
  },
  {
    icon:  '🛏️',
    title: 'Recovery Rooms',
    body:
      'Private and semi-private recovery rooms with continuous nursing monitoring, IV access, and post-operative pain management. Patients are monitored until clinically cleared for discharge or transfer.',
  },
  {
    icon:  '🔬',
    title: 'Pre-Op & Consultation',
    body:
      'Dedicated consultation rooms for pre-operative workup, surgical planning, and physician evaluations conducted entirely in English. Pre-op labs and clearances are reviewed before any procedure proceeds.',
  },
  {
    icon:  '💉',
    title: 'IV Therapy & Bio Optimization Suite',
    body:
      'A dedicated suite for IV therapy sessions (NAD+, Myers Cocktail, Glutathione), PRP procedures, hormone injection protocols, and bio-optimization treatments. Designed for outpatient visits with same-day discharge.',
  },
  {
    icon:  '✨',
    title: 'Aesthetic Treatment Rooms',
    body:
      'Private treatment rooms for Botox, dermal fillers, Hollywood Peel, lip augmentation, and PRP facial procedures. Aesthetic treatments are administered by trained medical staff, not aestheticians.',
  },
  {
    icon:  '🏨',
    title: 'Facility Overview',
    body:
      'Russald Medical Center occupies the C2 level of Grand Medical Tower on Agua Caliente Boulevard — one of Tijuana\'s most recognized medical buildings. On-site parking is available for patients driving from San Diego.',
  },
] as const

export default function OurFacilitiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbs as Record<string, unknown>} />
      <JsonLd data={webPage     as Record<string, unknown>} />

      {/* ── Hero ── */}
      <section aria-labelledby="facilities-hero-heading" className="w-full bg-[var(--color-navy)] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0">
          <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue-light)]">
            Our Facilities
          </p>
          <div className="h-3" aria-hidden="true" />
          <h1
            id="facilities-hero-heading"
            className="font-['Rethink_Sans',sans-serif] text-[2rem] font-bold leading-tight text-white sm:text-[2.5rem] lg:text-[2.75rem]"
          >
            Built for International Patients
          </h1>
          <div className="h-4" aria-hidden="true" />
          <p className="max-w-[600px] font-['Nunito_Sans',sans-serif] text-[0.9375rem] leading-relaxed text-white/65">
            Russald Medical Center is a modern, multi-specialty medical facility in Tijuana, Baja California —
            approximately 20 minutes from the San Diego border crossing. Our spaces are designed around the
            clinical and logistical needs of international patients.
          </p>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section aria-label="Facility facts" className="w-full bg-[var(--color-blue)] py-8">
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1 text-center">
                <p className="font-['Rethink_Sans',sans-serif] text-[1.5rem] font-bold text-white lg:text-[1.875rem]">{value}</p>
                <p className="font-['Nunito_Sans',sans-serif] text-[0.75rem] text-white/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Facility spaces ── */}
      <section aria-labelledby="spaces-heading" className="w-full bg-[var(--color-ice)] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0">
          <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue-action)]">
            Facility Tour
          </p>
          <div className="h-3" aria-hidden="true" />
          <h2
            id="spaces-heading"
            className="font-['Rethink_Sans',sans-serif] text-[1.75rem] font-bold text-[var(--color-navy)] sm:text-[2rem]"
          >
            Spaces & Capabilities
          </h2>
          <div className="h-10" aria-hidden="true" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {SPACES.map(({ icon, title, body }) => (
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

      {/* ── Location & Contact ── */}
      <section aria-labelledby="location-heading" className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0 flex flex-col gap-8 lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-4 flex-1">
            <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue-action)]">
              Location
            </p>
            <h2
              id="location-heading"
              className="font-['Rethink_Sans',sans-serif] text-[1.75rem] font-bold text-[var(--color-navy)]"
            >
              Find Us
            </h2>
            <div className="flex flex-col gap-2">
              <p className="font-['Nunito_Sans',sans-serif] text-[0.9375rem] font-semibold text-[var(--color-navy)]">
                Russald Medical Center
              </p>
              <p className="font-['Nunito_Sans',sans-serif] text-[0.875rem] text-[var(--color-muted)]">
                Agua Caliente Boulevard 4558<br />
                C2 Level, Grand Medical Tower<br />
                Tijuana, Baja California, Mexico 22014
              </p>
            </div>
            <div className="flex flex-col gap-1">
              {SITE.phoneLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="font-['Nunito_Sans',sans-serif] text-[0.875rem] text-[var(--color-blue-action)] hover:underline focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
                >
                  {label}
                </a>
              ))}
              <a
                href="mailto:info@russaldmedical.com"
                className="font-['Nunito_Sans',sans-serif] text-[0.875rem] text-[var(--color-blue-action)] hover:underline focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
              >
                info@russaldmedical.com
              </a>
            </div>
            <div className="h-px bg-[var(--color-border)]" aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <p className="font-['Nunito_Sans',sans-serif] text-[0.8125rem] font-semibold text-[var(--color-navy)]">
                Hours
              </p>
              <p className="font-['Nunito_Sans',sans-serif] text-[0.875rem] text-[var(--color-muted)]">
                Monday – Saturday: 9:00 AM – 8:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="flex-1 rounded-[var(--radius-card)] bg-[var(--color-ice)] flex flex-col items-center justify-center gap-3 min-h-[220px] border border-[var(--color-border)]">
            <span aria-hidden="true" className="text-[2rem]">📍</span>
            <p className="font-['Nunito_Sans',sans-serif] text-[0.8125rem] text-[var(--color-muted)] text-center px-6">
              Grand Medical Tower, C2 Level<br />
              Agua Caliente Blvd 4558, Tijuana
            </p>
            <a
              href="https://maps.google.com/?q=Agua+Caliente+Boulevard+4558+Tijuana+Baja+California+Mexico"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Nunito_Sans',sans-serif] text-[0.8125rem] font-semibold text-[var(--color-blue-action)] hover:underline focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section aria-labelledby="facilities-cta-heading" className="w-full bg-[var(--color-navy)] py-12">
        <div className="mx-auto w-full max-w-[980px] px-4 sm:px-8 lg:px-0 flex flex-col items-center gap-5 text-center">
          <h2
            id="facilities-cta-heading"
            className="font-['Rethink_Sans',sans-serif] text-[1.375rem] font-bold text-white sm:text-[1.625rem]"
          >
            Come see us — 20 minutes from San Diego
          </h2>
          <p className="max-w-[460px] font-['Nunito_Sans',sans-serif] text-[0.9375rem] text-white/65">
            Begin with a free assessment and your coordinator will handle all logistics from border crossing to discharge.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/free-evaluation"
              className="flex min-h-[48px] items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-blue-action)] px-8 font-['Rethink_Sans',sans-serif] text-[0.9375rem] font-bold text-white transition-colors hover:bg-[var(--color-blue)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
            >
              Free Assessment →
            </Link>
            <Link
              href="/medical-team"
              className="flex min-h-[48px] items-center justify-center rounded-[var(--radius-btn)] border-[1.5px] border-white/30 px-8 font-['Rethink_Sans',sans-serif] text-[0.9375rem] font-bold text-white transition-colors hover:border-white/70 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
            >
              Meet Our Team →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
