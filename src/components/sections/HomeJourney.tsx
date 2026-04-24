// Figma node: 2298:970 — Section/Home-Journey (Desktop) · 2330:1326 (Tablet) · 2337:1964 (Mobile)

const steps = [
  {
    num: '01',
    title: 'Free Evaluation Request',
    body: 'Submit your information and goals. An English-speaking coordinator contacts you within 1 business day to review your case.',
  },
  {
    num: '02',
    title: 'Medical Consultation',
    body: 'Your case is reviewed by the appropriate specialist. Candidacy, options, and a transparent cost breakdown are provided.',
  },
  {
    num: '03',
    title: 'Travel & Procedure',
    body: 'Your team coordinates logistics. Procedures are performed at our facility in Tijuana: minutes from the San Diego border.',
  },
  {
    num: '04',
    title: 'Recovery & Follow-Up',
    body: 'Discharge instructions in English. Remote follow-up included. Your coordinator remains available throughout your recovery.',
  },
] as const

export default function HomeJourney() {
  return (
    <section
      aria-labelledby="journey-heading"
      className="flex flex-col items-center bg-[var(--color-white)] px-4 py-10 sm:px-6 sm:py-[88px]"
    >
      <div className="flex w-full max-w-[980px] flex-col gap-9 sm:gap-[52px]">

        {/* ── Header ── */}
        <div className="flex flex-col items-center">
          <p className="text-center font-['Nunito_Sans',sans-serif] text-[0.656rem] font-bold uppercase tracking-[1.89px] text-[var(--color-blue-action)]">
            How It Works
          </p>
          <div className="h-[10px]" />
          <h2
            id="journey-heading"
            className="text-center font-['Rethink_Sans',sans-serif] text-[1.5rem] font-bold leading-[1.15] tracking-[-0.005em] sm:text-[1.875rem]"
          >
            <span className="block text-[var(--color-charcoal)]">Your Path from First</span>
            <span className="block text-[var(--color-blue-action)]">Contact to Recovery</span>
          </h2>
          <div className="h-3 sm:h-[14px]" />
          <div className="h-[3px] w-9 rounded-[2px] bg-[var(--color-blue-action)]" />
          <div className="h-4 sm:h-5" />
          <p className="max-w-[640px] text-center font-['Nunito_Sans',sans-serif] text-[0.875rem] font-normal leading-[1.75] text-[var(--color-muted)] sm:text-[0.9375rem]">
            We have structured the international patient experience so that every step: from your
            first message to your post-operative follow-up: is clear, coordinated, and supported
            in English.
          </p>
        </div>

        {/* ── Steps ── */}
        <div className="relative w-full">
          {/* Connecting line — desktop only, sits behind the numbered circles */}
          <div
            className="absolute top-[27px] z-0 hidden h-[2px] lg:block"
            style={{
              left: '12.5%',
              right: '12.5%',
              backgroundColor: 'var(--color-border)',
            }}
            aria-hidden="true"
          />

          {/* 1-col mobile · 2-col tablet · 4-col desktop */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-0">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex flex-col items-center px-2 sm:px-[14px]"
              >
                {/* Number badge */}
                <div
                  className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border-[3px] border-[var(--color-white)] bg-[var(--color-blue-action)]"
                  style={{
                    boxShadow:
                      '0px 4px 16px 0px rgba(29,86,196,0.2), 0px 0px 0px 6px rgba(238,241,255,1)',
                  }}
                >
                  <span className="font-['Rethink_Sans',sans-serif] text-[1.125rem] font-extrabold leading-none text-[var(--color-white)]">
                    {step.num}
                  </span>
                </div>

                <div className="h-[14px] sm:h-[18px]" />

                <p className="text-center font-['Rethink_Sans',sans-serif] text-[0.844rem] font-bold text-[var(--color-blue-action)]">
                  {step.title}
                </p>

                <div className="h-[5px]" />

                <p className="text-center font-['Nunito_Sans',sans-serif] text-[0.781rem] font-normal leading-[1.65] text-[var(--color-muted)]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
