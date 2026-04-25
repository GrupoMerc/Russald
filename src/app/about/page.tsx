import type { Metadata } from 'next'
import Link from 'next/link'
import { breadcrumbSchema, medicalWebPageSchema } from '@/lib/schema'
import { JsonLd } from '@/components/JsonLd'
import { SITE } from '@/config/site'

export const metadata: Metadata = {
  title: 'About Russald Medical Center — Tijuana, Mexico',
  description:
    'Russald Medical Center is a multi-specialty medical facility in Tijuana, Mexico, serving US patients with board-certified surgeons, international-standard facilities, and 60–75% cost savings versus US clinics.',
  alternates: { canonical: '/about' },
  openGraph: {
    title:       'About Russald Medical Center | Tijuana, Mexico',
    description: 'Board-certified surgeons, international-standard facilities, 20 min from San Diego. Learn about Russald Medical Center.',
    url:         '/about',
  },
}

const breadcrumbs = breadcrumbSchema([
  { name: 'Home',  url: SITE.url },
  { name: 'About', url: `${SITE.url}/about` },
])
const webPage = medicalWebPageSchema({
  name:        'About Russald Medical Center',
  description: 'Russald Medical Center is a multi-specialty medical facility in Tijuana, Mexico, serving US patients with board-certified surgeons, international-standard facilities, and 60–75% cost savings.',
  path:        '/about',
  specialty:   'Multi-Specialty',
})

const STATS = [
  { value: '25+',      label: 'Procedures Offered'      },
  { value: '20 min',   label: 'from San Diego'           },
  { value: '60–75%',   label: 'Cost Savings vs. US'      },
  { value: '95%',      label: 'Patient Satisfaction'     },
] as const

const PILLARS = [
  {
    icon: '🔬',
    heading: 'Clinical Standards Without Compromise',
    body: 'Every procedure at Russald is performed using the same techniques and equipment applied in leading US and European medical centers. Board certification, postgraduate training, and active licensure are baseline requirements for every physician on our team — not differentiators.',
  },
  {
    icon: '🌎',
    heading: 'Built for the International Patient',
    body: 'Russald Medical Center was designed to serve patients traveling from the United States, Canada, and beyond. English-first coordination, remote consultation, pre-travel case review, and border logistics support are standard — not add-ons.',
  },
  {
    icon: '💰',
    heading: 'Transparent, All-Inclusive Pricing',
    body: 'Pricing at Russald covers the procedure, anesthesia, hospital stay where applicable, and post-operative follow-up. We provide written quotes before you travel. There are no hidden fees, no surprise charges, and no ambiguity about what you are paying for.',
  },
  {
    icon: '🏥',
    heading: 'One Facility — Multiple Specialties',
    body: 'Russald Medical Center offers weight loss surgery, plastic surgery, hair restoration, men\'s health, vascular care, and bio optimization under one roof, with a consistent coordination team across specialties. Patients combining procedures benefit from shared logistics and a single point of contact.',
  },
] as const

const SPECIALTIES = [
  { label: 'Weight Loss Surgery',  href: '/weight-loss'       },
  { label: 'Plastic Surgery',      href: '/plastic-surgery'   },
  { label: 'Hair Restoration',     href: '/hair-restoration'  },
  { label: "Men's Health",         href: '/mens-health'       },
  { label: 'Vascular Care',        href: '/vascular-care'     },
  { label: 'Bio Optimization',     href: '/bio-optimization'  },
] as const

export default function AboutPage() {
  return (
    <main id="main-content" role="main">
      <JsonLd data={breadcrumbs as Record<string, unknown>} />
      <JsonLd data={webPage     as Record<string, unknown>} />

      {/* Hero */}
      <section
        aria-labelledby="about-heading"
        className="w-full bg-[var(--color-navy)] py-16 sm:py-20"
      >
        <div className="w-full px-4 sm:px-8 lg:mx-auto lg:w-[980px]">
          <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue-light)]">
            Russald Medical Center · Tijuana, Mexico
          </p>
          <div className="h-3" aria-hidden="true" />
          <h1
            id="about-heading"
            className="font-['Rethink_Sans',sans-serif] text-[2rem] font-bold leading-tight text-[var(--color-white)] sm:text-[2.75rem]"
          >
            About Russald Medical Center
          </h1>
          <div className="h-4" aria-hidden="true" />
          <p className="max-w-[600px] font-['Nunito_Sans',sans-serif] text-[0.9375rem] leading-relaxed text-[var(--color-blue-light)]">
            A multi-specialty medical facility in Tijuana, Mexico — 20 minutes from the San Diego
            border — serving US and international patients with board-certified physicians,
            international-standard facilities, and cost savings of 60–75% versus leading
            US clinics.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section
        aria-label="Key statistics"
        className="w-full border-b border-[var(--color-border)] bg-[var(--color-white)] py-10"
      >
        <div className="w-full px-4 sm:px-8 lg:mx-auto lg:w-[980px]">
          <ul
            role="list"
            className="grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {STATS.map((s) => (
              <li key={s.label} role="listitem" className="text-center">
                <p className="font-['Rethink_Sans',sans-serif] text-[2rem] font-bold text-[var(--color-blue-action)] sm:text-[2.5rem]">
                  {s.value}
                </p>
                <p className="mt-1 font-['Nunito_Sans',sans-serif] text-[0.8125rem] text-[var(--color-muted)]">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we are */}
      <section
        aria-labelledby="who-heading"
        className="w-full bg-[var(--color-white)] py-16 sm:py-20"
      >
        <div className="w-full px-4 sm:px-8 lg:mx-auto lg:w-[980px]">
          <div className="max-w-[680px]">
            <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue)]">
              Who We Are
            </p>
            <div className="h-3" aria-hidden="true" />
            <h2
              id="who-heading"
              className="font-['Rethink_Sans',sans-serif] text-[1.75rem] font-bold leading-tight text-[var(--color-navy)] sm:text-[2.25rem]"
            >
              World-Class Medical Care — Minutes from San Diego
            </h2>
            <div className="h-6" aria-hidden="true" />
            <div className="space-y-5 font-['Nunito_Sans',sans-serif] text-[0.9375rem] leading-relaxed text-[var(--color-muted)]">
              <p>
                Russald Medical Center is a multi-specialty surgical and wellness facility located
                in Tijuana, Mexico, approximately 20 minutes from the San Diego border crossing.
                We serve patients from the United States, Canada, and internationally who are
                seeking high-quality medical procedures at a fraction of US and European prices.
              </p>
              <p>
                Our team includes board-certified surgeons and physicians in bariatric surgery,
                plastic surgery, hair restoration, urology, vascular medicine, and integrative
                medicine. Every physician holds postgraduate specialty training and active licensure.
                Procedures are performed in our accredited surgical facility using the same
                techniques and equipment standards applied at leading US centers.
              </p>
              <p>
                Russald was built around a single premise: access to high-quality surgical care
                should not be determined by what country a patient was born in or what their
                insurance covers. Geographic proximity to San Diego makes Tijuana uniquely
                positioned to offer US patients the same clinical outcomes at 60–75% less than
                what they would pay domestically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical pillars */}
      <section
        aria-labelledby="pillars-heading"
        className="w-full bg-[var(--color-ice)] py-16 sm:py-20"
      >
        <div className="w-full px-4 sm:px-8 lg:mx-auto lg:w-[980px]">
          <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue)]">
            Our Approach
          </p>
          <div className="h-3" aria-hidden="true" />
          <h2
            id="pillars-heading"
            className="font-['Rethink_Sans',sans-serif] text-[1.75rem] font-bold leading-tight text-[var(--color-navy)] sm:text-[2.25rem]"
          >
            How We Work
          </h2>
          <div className="h-10" aria-hidden="true" />
          <ul role="list" className="grid gap-6 sm:grid-cols-2">
            {PILLARS.map((p) => (
              <li
                key={p.heading}
                role="listitem"
                className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-white)] p-6"
              >
                <p className="text-[1.75rem]" aria-hidden="true">{p.icon}</p>
                <div className="h-3" aria-hidden="true" />
                <h3 className="font-['Rethink_Sans',sans-serif] text-[1rem] font-bold text-[var(--color-navy)]">
                  {p.heading}
                </h3>
                <div className="h-2" aria-hidden="true" />
                <p className="font-['Nunito_Sans',sans-serif] text-[0.875rem] leading-relaxed text-[var(--color-muted)]">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Specialties */}
      <section
        aria-labelledby="specialties-heading"
        className="w-full bg-[var(--color-white)] py-16 sm:py-20"
      >
        <div className="w-full px-4 sm:px-8 lg:mx-auto lg:w-[980px]">
          <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue)]">
            Specialties
          </p>
          <div className="h-3" aria-hidden="true" />
          <h2
            id="specialties-heading"
            className="font-['Rethink_Sans',sans-serif] text-[1.75rem] font-bold leading-tight text-[var(--color-navy)] sm:text-[2.25rem]"
          >
            What We Treat
          </h2>
          <div className="h-10" aria-hidden="true" />
          <ul role="list" className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {SPECIALTIES.map((s) => (
              <li key={s.href} role="listitem">
                <Link
                  href={s.href}
                  className="flex min-h-[48px] items-center justify-center rounded-[var(--radius-card)] border border-[var(--color-border)] px-4 py-3 text-center font-['Rethink_Sans',sans-serif] text-[0.9375rem] font-semibold text-[var(--color-navy)] transition-colors hover:border-[var(--color-blue-action)] hover:text-[var(--color-blue-action)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Location */}
      <section
        aria-labelledby="location-heading"
        className="w-full bg-[var(--color-ice)] py-16 sm:py-20"
      >
        <div className="w-full px-4 sm:px-8 lg:mx-auto lg:w-[980px]">
          <div className="max-w-[580px]">
            <p className="font-['Nunito_Sans',sans-serif] text-[0.6875rem] font-semibold uppercase tracking-[1.8px] text-[var(--color-blue)]">
              Location
            </p>
            <div className="h-3" aria-hidden="true" />
            <h2
              id="location-heading"
              className="font-['Rethink_Sans',sans-serif] text-[1.75rem] font-bold leading-tight text-[var(--color-navy)] sm:text-[2.25rem]"
            >
              20 Minutes from San Diego
            </h2>
            <div className="h-6" aria-hidden="true" />
            <p className="font-['Nunito_Sans',sans-serif] text-[0.9375rem] leading-relaxed text-[var(--color-muted)]">
              Russald Medical Center is located in the Grand Medical Tower on Agua Caliente
              Boulevard in Tijuana, Baja California — one of the premier medical office
              buildings in the city. The facility is approximately 20 minutes from the
              San Diego / Tijuana border crossing (San Ysidro).
            </p>
            <div className="h-6" aria-hidden="true" />
            <dl className="space-y-3 font-['Nunito_Sans',sans-serif] text-[0.9375rem]">
              <div className="flex gap-3">
                <dt className="font-semibold text-[var(--color-navy)]">Address</dt>
                <dd className="text-[var(--color-muted)]">Agua Caliente Blvd 4558, Grand Medical Tower, Tijuana, BC 22014, Mexico</dd>
              </div>
              <div className="flex gap-3">
                <dt className="font-semibold text-[var(--color-navy)]">Hours</dt>
                <dd className="text-[var(--color-muted)]">Monday – Saturday, 9:00 AM – 8:00 PM</dd>
              </div>
              <div className="flex gap-3">
                <dt className="font-semibold text-[var(--color-navy)]">Phone (US)</dt>
                <dd><a href="tel:+18582644121" className="text-[var(--color-blue-action)] hover:underline">+1 (858) 264-4121</a></dd>
              </div>
              <div className="flex gap-3">
                <dt className="font-semibold text-[var(--color-navy)]">Phone (MEX)</dt>
                <dd><a href="tel:+526649069268" className="text-[var(--color-blue-action)] hover:underline">+52 (664) 906-92-68</a></dd>
              </div>
            </dl>
            <div className="h-8" aria-hidden="true" />
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[var(--radius-btn)] border-[1.5px] border-[var(--color-blue-action)] px-8 font-['Rethink_Sans',sans-serif] text-[0.9375rem] font-bold text-[var(--color-blue-action)] transition-colors hover:bg-[var(--color-blue-action)] hover:text-[var(--color-white)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* Team & links */}
      <section
        aria-labelledby="team-links-heading"
        className="w-full bg-[var(--color-white)] py-16 sm:py-20"
      >
        <div className="w-full px-4 sm:px-8 lg:mx-auto lg:w-[980px]">
          <h2
            id="team-links-heading"
            className="font-['Rethink_Sans',sans-serif] text-[1.75rem] font-bold leading-tight text-[var(--color-navy)] sm:text-[2.25rem]"
          >
            Learn More About Russald
          </h2>
          <div className="h-8" aria-hidden="true" />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Our Medical Team',  sub: 'Meet our board-certified physicians',     href: '/medical-team'  },
              { label: 'Our Patients',      sub: 'Patient stories and outcome statistics',  href: '/our-patients'  },
              { label: 'Our Facilities',    sub: 'Surgical suites, recovery rooms, clinic', href: '/our-facilities' },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col rounded-[var(--radius-card)] border border-[var(--color-border)] p-6 transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
              >
                <p className="font-['Rethink_Sans',sans-serif] text-[1rem] font-bold text-[var(--color-navy)] group-hover:text-[var(--color-blue-action)]">
                  {card.label}
                </p>
                <div className="h-1" aria-hidden="true" />
                <p className="font-['Nunito_Sans',sans-serif] text-[0.875rem] text-[var(--color-muted)]">
                  {card.sub}
                </p>
                <div className="h-4" aria-hidden="true" />
                <span className="mt-auto font-['Nunito_Sans',sans-serif] text-[0.8125rem] font-semibold text-[var(--color-blue-action)] group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="about-cta-heading"
        className="w-full bg-[var(--color-navy)] py-16"
      >
        <div className="w-full px-4 text-center sm:px-8 lg:mx-auto lg:w-[980px]">
          <h2
            id="about-cta-heading"
            className="font-['Rethink_Sans',sans-serif] text-[1.75rem] font-bold text-[var(--color-white)] sm:text-[2.25rem]"
          >
            Ready to Start?
          </h2>
          <div className="h-4" aria-hidden="true" />
          <p className="mx-auto max-w-[480px] font-['Nunito_Sans',sans-serif] text-[0.9375rem] leading-relaxed text-[var(--color-blue-light)]">
            Our team is available to answer questions and walk you through your options.
            No commitment required.
          </p>
          <div className="h-8" aria-hidden="true" />
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/free-evaluation"
              className="flex min-h-[48px] items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-blue-action)] px-10 font-['Rethink_Sans',sans-serif] text-[0.9375rem] font-bold text-[var(--color-white)] transition-colors hover:bg-[var(--color-blue)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
            >
              Request Free Evaluation →
            </Link>
            <a
              href="tel:+18582644121"
              className="flex min-h-[48px] items-center justify-center rounded-[var(--radius-btn)] border-[1.5px] border-[var(--color-blue-light)] px-10 font-['Rethink_Sans',sans-serif] text-[0.9375rem] font-bold text-[var(--color-white)] transition-colors hover:border-[var(--color-white)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]"
            >
              +1 (858) 264-4121
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
