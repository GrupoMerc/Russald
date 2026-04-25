// Figma node: 2300:810 — Footer Desktop · 2322:909 Tablet · 2334:1658 Mobile

import Link from 'next/link'

type ColLink = { label: string; href: string; highlight?: true }
type FooterCol = { heading: string; links: readonly ColLink[] }

const COLS: readonly FooterCol[] = [
  {
    heading: 'Weight Loss Surgery',
    links: [
      { label: 'Gastric Sleeve',      href: '/weight-loss/gastric-sleeve' },
      { label: 'Gastric Bypass',      href: '/weight-loss/gastric-bypass' },
      { label: 'Mini Gastric Bypass', href: '/weight-loss/mini-gastric-bypass' },
      { label: 'Lap-Band',            href: '/weight-loss/lap-band' },
      { label: 'Bariatric Revision',  href: '/weight-loss/bariatric-revision' },
    ],
  },
  {
    heading: 'Plastic Surgery',
    links: [
      { label: 'Mommy Makeover',      href: '/plastic-surgery/mommy-makeover' },
      { label: 'Tummy Tuck',          href: '/plastic-surgery/tummy-tuck' },
      { label: 'Liposuction',         href: '/plastic-surgery/liposuction' },
      { label: 'Brazilian Butt Lift', href: '/plastic-surgery/bbl' },
      { label: 'Breast Augmentation', href: '/plastic-surgery/breast-augmentation' },
      { label: 'Rhinoplasty',         href: '/plastic-surgery/rhinoplasty' },
      { label: 'Facelift',            href: '/plastic-surgery/facelift' },
    ],
  },
  {
    heading: 'Hair & Regenerative',
    links: [
      { label: 'FUE Hair Transplant', href: '/hair-restoration/fue' },
      { label: 'DHI Hair Transplant', href: '/hair-restoration/dhi' },
      { label: 'Hair PRP',            href: '/hair-restoration/prp' },
    ],
  },
  {
    heading: "Men's Health & Bio Opt",
    links: [
      { label: 'Male Enhancement Implant', href: '/mens-health/implant', highlight: true },
      { label: 'Erectile Dysfunction',     href: '/mens-health/erectile-dysfunction' },
      { label: 'Testosterone Therapy',     href: '/mens-health/testosterone' },
      { label: 'BHRT',                     href: '/bio-optimization/bhrt' },
      { label: 'HGH Therapy',              href: '/bio-optimization/hgh' },
      { label: 'Myers Cocktail IV',        href: '/bio-optimization/myers-cocktail' },
      { label: 'EVLA Vein Treatment',      href: '/mens-health/evla' },
      { label: 'Sclerotherapy',            href: '/mens-health/sclerotherapy' },
    ],
  },
  {
    heading: 'About Us',
    links: [
      { label: 'Our Patients',       href: '/our-patients' },
      { label: 'Our Medical Team',   href: '/medical-team' },
      { label: 'Our Facilities',     href: '/our-facilities' },
      { label: 'Patient Resources',  href: '/patient-resources' },
      { label: 'FAQ',                href: '/faq' },
      { label: 'Bio Optimization',   href: '/bio-optimization' },
      { label: 'Request Evaluation', href: '#eval-form' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Terms and Conditions',  href: '/legal/terms' },
      { label: 'Privacy Policy',        href: '/legal/privacy' },
      { label: 'Medical Disclaimer',    href: '/legal/medical-disclaimer' },
      { label: 'Booking & Cancellation', href: '/legal/booking' },
      { label: 'Dispute Resolution',    href: '/legal/disputes' },
      { label: 'Cross-Border Care',     href: '/legal/cross-border' },
      { label: 'Assessment Disclaimer', href: '/legal/assessment' },
    ],
  },
] as const

const SAME_AS = [
  {
    label: 'Google Maps',
    href: 'https://maps.google.com/?q=Russald+Medical+Center+Tijuana+Mexico',
  },
  { label: 'russaldclinic.com', href: 'https://russaldclinic.com' },
] as const

const MEDICAL_DISCLAIMER =
  'Medical Disclaimer: Information provided on this website, including assessments, messages, and tools, is for educational purposes only and does not constitute medical advice, diagnosis, or treatment. All medical procedures are performed by licensed physicians in Mexico within Russald Medical facilities. MedicalMex provides non-clinical coordination services only and does not practice medicine. Final medical decisions are made during in-person consultation.'

const linkBase =
  'font-["Nunito_Sans",sans-serif] font-normal text-[0.8125rem] leading-normal ' +
  'text-white/45 hover:text-white/80 transition-colors duration-150 ' +
  'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-[var(--color-charcoal)]">
      <div
        className={
          'max-w-[1100px] mx-auto w-full flex flex-col gap-7 ' +
          'px-4 sm:px-8 lg:px-0 ' +
          'py-10 lg:pt-[3.25rem] lg:pb-9'
        }
      >
        {/* ── Brand block ── */}
        <div className="flex flex-col gap-1 leading-normal">
          <p
            className={
              'font-["Rethink_Sans",sans-serif] font-extrabold text-[1rem] ' +
              'text-white tracking-[0.04em] whitespace-nowrap'
            }
          >
            RUSSALD MEDICAL CENTER
          </p>
          <p className="font-['Nunito_Sans',sans-serif] font-normal text-[0.6875rem] text-white/35 whitespace-nowrap">
            Tijuana, Mexico · Russald Medical S.A. de C.V.
          </p>
          <p className="font-['Nunito_Sans',sans-serif] font-normal text-[0.75rem] text-white/40">
            <a href="tel:+526649069268" className="hover:text-white/70 transition-colors">MEX: +52 (664) 906-92-68</a>
            {'  |  '}
            <a href="tel:+18582644121" className="hover:text-white/70 transition-colors">US: +1 (858) 264-4121</a>
          </p>
          <div className="flex gap-4 mt-1" aria-label="Find us online">
            {SAME_AS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (opens in new window)`}
                className={
                  'font-["Nunito_Sans",sans-serif] font-normal text-[0.6875rem] ' +
                  'text-[var(--color-blue-light)] hover:text-white transition-colors duration-150 ' +
                  'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]'
                }
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Nav grid ──
              Mobile:  1 column, gap-6
              Tablet:  2 columns, gap-7
              Desktop: 6 columns, gap-7  */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-6">
          {COLS.map(({ heading, links }) => (
            <div key={heading} className="flex flex-col gap-[7px]">
              <p
                className={
                  'font-["Nunito_Sans",sans-serif] font-bold text-[0.625rem] ' +
                  'text-[var(--color-blue-action)] tracking-[0.1125rem] uppercase'
                }
              >
                {heading}
              </p>
              {/* 5px spacer — matches Figma Frame spacer */}
              <div aria-hidden="true" className="h-[5px]" />
              {links.map(({ label, href, highlight }) => (
                <Link
                  key={href}
                  href={href}
                  className={
                    highlight
                      ? 'font-["Nunito_Sans",sans-serif] font-bold text-[0.8125rem] leading-normal ' +
                        'text-[var(--color-gold)] hover:opacity-80 transition-opacity duration-150 ' +
                        'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]'
                      : linkBase
                  }
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* ── Disclaimer ── */}
        <div className="flex flex-col gap-2">
          <div aria-hidden="true" className="h-px w-full bg-white/[0.12]" />
          <p
            className={
              'font-["Nunito_Sans",sans-serif] font-bold text-[0.625rem] ' +
              'text-[var(--color-blue-action)] tracking-[0.1rem] uppercase'
            }
          >
            Legal &amp; Medical Disclaimer
          </p>
          <p className="font-['Nunito_Sans',sans-serif] font-normal text-[0.71875rem] leading-[1.85] text-white/55">
            {MEDICAL_DISCLAIMER}
          </p>
          <p className="font-['Nunito_Sans',sans-serif] font-normal text-[0.71875rem] text-white/40">
            © {year} Russald Medical Center - Russald Medical S.A. de C.V. · Tijuana, Mexico. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
