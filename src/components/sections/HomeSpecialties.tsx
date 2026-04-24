// Figma node: 2298:795 — Section/Home-Specialties · 2330:1152 Tablet · 2337:1791 Mobile

const PHOTO_GRADIENT =
  'linear-gradient(37deg, rgb(200,216,240) 39.7%, rgb(216,230,248) 75%, rgb(192,212,238) 110.4%)'

const SPECIALTIES = [
  {
    name:     'Weight Loss Surgery',
    desc:     'Gastric sleeve, bypass, mini bypass, Lap-Band, and bariatric revision',
    badgeSm:  '5 PROC →',
    badgeLg:  '5 PROCEDURES →',
    href:     '/weight-loss-surgery',
  },
  {
    name:     'Plastic Surgery',
    desc:     'Body contouring, mommy makeover, rhinoplasty, facelift, breast surgery',
    badgeSm:  '10 PROC →',
    badgeLg:  '10 PROCEDURES →',
    href:     '/plastic-surgery',
  },
  {
    name:     'Hair Restoration',
    desc:     'FUE and DHI hair transplant, and hair PRP therapy',
    badgeSm:  '3 PROC →',
    badgeLg:  '3 PROCEDURES →',
    href:     '/hair-restoration',
  },
  {
    name:     "Men's Health",
    desc:     'Erectile dysfunction treatment and testosterone replacement therapy',
    badgeSm:  '2 PROC →',
    badgeLg:  '2 PROCEDURES →',
    href:     '/mens-health',
  },
  {
    name:     'Vascular Care',
    desc:     'EVLA vein treatment and sclerotherapy for varicose veins',
    badgeSm:  '2 PROC →',
    badgeLg:  '2 PROCEDURES →',
    href:     '/vascular-care',
  },
  {
    name:     'Bio Optimization',
    desc:     'Hormone therapy, IV therapy, PRP, stem cells, and aesthetic protocols',
    badgeSm:  'PROTOCOLS →',
    badgeLg:  'VIEW PROTOCOLS →',
    href:     '/bio-optimization',
  },
  {
    name:     'Free Assessment',
    desc:     '2-minute pre-screening to check if you may qualify for your procedure',
    badgeSm:  'START →',
    badgeLg:  'START NOW →',
    href:     '#eval-form',
  },
] as const

const LAST_CARD_NAME = 'Free Assessment'

export default function HomeSpecialties() {
  return (
    <section
      aria-labelledby="specialties-heading"
      className="w-full bg-[var(--color-white)] flex flex-col items-center px-5 py-[52px] sm:px-6 sm:py-[80px]"
    >
      <div className="w-full sm:max-w-[786px] lg:max-w-[980px] flex flex-col">

        {/* Header */}
        <div className="flex flex-col items-center gap-0 text-center">
          <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[var(--color-blue)] text-[0.65625rem] tracking-[1.89px] uppercase">
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
            <span className="block text-[var(--color-blue-action)] text-[1.75rem] sm:text-[2.5rem]">
              One Coordinated Experience.
            </span>
          </h2>

          <div className="h-[10px]" aria-hidden="true" />
          <div className="w-9 h-[3px] rounded-[2px] bg-[var(--color-blue)]" aria-hidden="true" />
          <div className="h-[18px] sm:h-[22px]" aria-hidden="true" />

          <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-muted)] text-[0.8125rem] sm:text-[0.875rem] leading-[1.65] sm:max-w-[680px]">
            From complex bariatric surgery to precision aesthetic procedures, from joint replacement
            to hormonal optimization: our team covers a wide spectrum of medical care under one roof.
          </p>
        </div>

        <div className="h-8 sm:h-10" aria-hidden="true" />

        {/* Cards grid — 2-col always, 3-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[14px] sm:gap-5">
          {SPECIALTIES.map((spec) => (
            <a
              key={spec.name}
              href={spec.href}
              className={[
                'group bg-[var(--color-white)] border border-[var(--color-border)] rounded-[10px] sm:rounded-[12px] overflow-hidden flex flex-col no-underline',
                // Free Assessment: full-width on mobile, 1-col on sm+
                spec.name === LAST_CARD_NAME ? 'col-span-2 sm:col-span-1' : '',
                'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)]',
              ].join(' ')}
            >
              {/* Photo placeholder */}
              <div
                className="h-[126px] sm:h-[235px] flex items-center justify-center shrink-0"
                style={{ backgroundImage: PHOTO_GRADIENT }}
                aria-hidden="true"
              >
                <span className="font-['Nunito_Sans',sans-serif] font-bold text-[rgba(122,156,196,0.7)] text-[0.53125rem] sm:text-[0.625rem] tracking-[1.2px] uppercase">
                  {spec.name}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col gap-[5px] px-3 pt-3 pb-[14px] sm:px-[18px] sm:pt-4 sm:pb-5">
                <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[var(--color-blue-action)] text-[0.8125rem] sm:text-[0.9375rem] leading-[1.3]">
                  {spec.name}
                </p>
                <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-muted)] text-[0.71875rem] sm:text-[0.78125rem] leading-[1.6]">
                  {spec.desc}
                </p>
                <div className="mt-1">
                  <span className="inline-flex bg-[var(--color-blue-action)] text-[var(--color-white)] font-['Nunito_Sans',sans-serif] font-bold text-[0.59375rem] sm:text-[0.65625rem] tracking-[0.525px] uppercase px-[11px] py-[6px] sm:px-[14px] sm:py-[7px] rounded-[50px] whitespace-nowrap">
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
