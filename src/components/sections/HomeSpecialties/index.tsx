// Figma node: 2298:795 — Section/Home-Specialties · 2330:1152 Tablet · 2337:1791 Mobile
import Image, { StaticImageData } from 'next/image'
import imgWeightLoss    from './weight-loss.webp'
import imgPlastic       from './plastic-surgery.webp'
import imgHair          from './hair-restoration.webp'
import imgMens          from './mens-health.webp'
import imgVascular      from './vascular-care.webp'
import imgBioOpt        from './bio-optimization.webp'
import imgAssessment    from './free-assessment.webp'

const SPECIALTIES: {
  name:    string
  desc:    string
  badgeSm: string
  badgeLg: string
  href:    string
  img:     StaticImageData
  alt:     string
}[] = [
  {
    name:    'Weight Loss Surgery',
    desc:    'Gastric sleeve, bypass, mini bypass, Lap-Band, and bariatric revision',
    badgeSm: '5 PROC →',
    badgeLg: '5 PROCEDURES →',
    href:    '/weight-loss-surgery',
    img:     imgWeightLoss,
    alt:     'Weight loss surgery patient',
  },
  {
    name:    'Plastic Surgery',
    desc:    'Body contouring, mommy makeover, rhinoplasty, facelift, breast surgery',
    badgeSm: '10 PROC →',
    badgeLg: '10 PROCEDURES →',
    href:    '/plastic-surgery',
    img:     imgPlastic,
    alt:     'Plastic surgery procedure',
  },
  {
    name:    'Hair Restoration',
    desc:    'FUE and DHI hair transplant, and hair PRP therapy',
    badgeSm: '3 PROC →',
    badgeLg: '3 PROCEDURES →',
    href:    '/hair-restoration',
    img:     imgHair,
    alt:     'Hair restoration treatment',
  },
  {
    name:    "Men's Health",
    desc:    'Erectile dysfunction treatment and testosterone replacement therapy',
    badgeSm: '2 PROC →',
    badgeLg: '2 PROCEDURES →',
    href:    '/mens-health',
    img:     imgMens,
    alt:     "Men's health consultation",
  },
  {
    name:    'Vascular Care',
    desc:    'EVLA vein treatment and sclerotherapy for varicose veins',
    badgeSm: '2 PROC →',
    badgeLg: '2 PROCEDURES →',
    href:    '/vascular-care',
    img:     imgVascular,
    alt:     'Vascular care treatment',
  },
  {
    name:    'Bio Optimization',
    desc:    'Hormone therapy, IV therapy, PRP, stem cells, and aesthetic protocols',
    badgeSm: 'PROTOCOLS →',
    badgeLg: 'VIEW PROTOCOLS →',
    href:    '/bio-optimization',
    img:     imgBioOpt,
    alt:     'Bio optimization IV therapy',
  },
  {
    name:    'Free Assessment',
    desc:    '2-minute pre-screening to check if you may qualify for your procedure',
    badgeSm: 'START →',
    badgeLg: 'START NOW →',
    href:    '#eval-form',
    img:     imgAssessment,
    alt:     'Request a free medical assessment',
  },
]

const LAST = 'Free Assessment'

export default function HomeSpecialties() {
  return (
    <section
      aria-labelledby="specialties-heading"
      className="w-full bg-[var(--color-white)] flex flex-col items-center px-5 py-[52px] sm:px-6 sm:py-[80px]"
    >
      <div className="w-full sm:max-w-[786px] lg:max-w-[980px] flex flex-col">

        {/* Header */}
        <div className="flex flex-col items-center gap-0 text-center">
          <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[var(--color-navy)] text-[0.65625rem] tracking-[1.89px] uppercase">
            What We Treat
          </p>

          <div className="h-[10px]" aria-hidden="true" />

          <h2
            id="specialties-heading"
            className="font-['Rethink_Sans',sans-serif] font-bold leading-[1.15]"
          >
            <span className="block text-[var(--color-charcoal)] text-[1.75rem] sm:text-[2.5rem]">
              Seven Specialties.
            </span>
            <span className="block text-[var(--color-blue)] text-[1.75rem] sm:text-[2.5rem]">
              One Coordinated Experience.
            </span>
          </h2>

          <div className="h-[10px]" aria-hidden="true" />
          <div className="w-9 h-[3px] rounded-[2px] bg-[var(--color-navy)]" aria-hidden="true" />
          <div className="h-[18px] sm:h-[22px]" aria-hidden="true" />

          <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-muted)] text-[0.8125rem] sm:text-[0.875rem] leading-[1.65] sm:max-w-[680px]">
            From complex bariatric surgery to precision aesthetic procedures, from joint replacement
            to hormonal optimization: our team covers a wide spectrum of medical care under one roof.
          </p>
        </div>

        <div className="h-8 sm:h-10" aria-hidden="true" />

        {/* Cards grid — 2-col mobile/tablet, 3-col desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[14px] sm:gap-5">
          {SPECIALTIES.map((spec) => (
            <a
              key={spec.name}
              href={spec.href}
              className={[
                'group bg-[var(--color-white)] border border-[var(--color-border)] rounded-[10px] sm:rounded-[12px] overflow-hidden flex flex-col no-underline',
                spec.name === LAST ? 'col-span-2 sm:col-span-1' : '',
                'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]',
              ].join(' ')}
            >
              {/* Photo */}
              <div className="relative h-[126px] sm:h-[235px] shrink-0 overflow-hidden">
                <Image
                  src={spec.img}
                  alt={spec.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="flex flex-col gap-[5px] px-3 pt-3 pb-[14px] sm:px-[18px] sm:pt-4 sm:pb-5">
                <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[var(--color-blue)] text-[0.8125rem] sm:text-[0.9375rem] leading-[1.3]">
                  {spec.name}
                </p>
                <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-muted)] text-[0.71875rem] sm:text-[0.78125rem] leading-[1.6]">
                  {spec.desc}
                </p>
                <div className="mt-1">
                  <span className="inline-flex bg-[var(--color-blue)] text-[var(--color-white)] font-['Nunito_Sans',sans-serif] font-bold text-[0.59375rem] sm:text-[0.65625rem] tracking-[0.525px] uppercase px-[11px] py-[6px] sm:px-[14px] sm:py-[7px] rounded-[50px] whitespace-nowrap">
                    <span className="sm:hidden">{spec.badgeSm}</span>
                    <span className="hidden sm:inline">{spec.badgeLg}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
