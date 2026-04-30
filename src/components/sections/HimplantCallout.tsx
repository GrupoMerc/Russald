// Figma node: 2298:939 — Section/HIMPLANT-Callout (Desktop) · 2330:1297 (Tablet) · 2337:1934 (Mobile)

export default function HimplantCallout() {
  return (
    <section aria-labelledby="himplant-heading" className="flex flex-col items-center bg-[var(--color-white)] px-6 pt-8 pb-[3.25rem] sm:px-0">
      {/* Card — full-width on mobile, max-w constrained on sm/lg */}
      <div
        className="w-full overflow-hidden rounded-[14px] sm:max-w-[786px] lg:max-w-[980px]"
        style={{
          backgroundImage:
            'linear-gradient(14.09deg, rgb(6,12,26) 39.675%, rgb(13,27,53) 82.107%, rgb(7,30,22) 110.4%)',
          border: '1px solid rgba(181,134,42,0.18)',
        }}
      >
        {/* Gold → Blue accent line */}
        <div
          className="h-[2px] w-full shrink-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #b5862a 0%, #1d56c4 50%, rgba(29,86,196,0) 100%)',
          }}
        />

        {/* Content — stacked on mobile, side-by-side on sm+ */}
        <div className="flex flex-col gap-5 p-7 sm:flex-row sm:items-center sm:gap-9 sm:px-10 sm:py-9">

          {/* Left: pill + heading + body */}
          <div className="flex flex-col gap-3">
            {/* Featured pill */}
            <div
              className="inline-flex shrink-0 items-center gap-[7px] self-start rounded-[20px] px-[0.875rem] py-[0.375rem]"
              style={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.35)',
              }}
            >
              <span
                className="size-[6px] shrink-0 rounded-full bg-white"
                aria-hidden="true"
              />
              <span className="whitespace-nowrap font-['Nunito_Sans',sans-serif] text-[0.594rem] font-extrabold uppercase tracking-[1.52px] text-white sm:text-[0.656rem] sm:tracking-[1.89px]">
                Featured Procedure · Men&apos;s Health
              </span>
            </div>

            <h2 id="himplant-heading" className="font-['Rethink_Sans',sans-serif] text-[1.1875rem] font-bold leading-[1.25] text-[var(--color-white)] sm:text-[1.3125rem] sm:leading-[1.2]">
              Male Enhancement Implant: Permanent, FDA-Cleared Girth Enhancement
            </h2>

            <p className="font-['Nunito_Sans',sans-serif] text-[0.8125rem] font-normal leading-[1.7] text-[rgba(255,255,255,0.55)] sm:text-[0.84375rem] sm:leading-[1.75]">
              Subcutaneous silicone sleeve, no pump, no inflation. Natural erections preserved.
              FDA-cleared. $18,000 to $22,000 all-inclusive at Russald Medical Center in Tijuana,
              20 minutes from San Diego. Complete privacy from first contact to discharge.
            </p>
          </div>

          {/* Gold CTA — full-width mobile, shrink-0 auto-width on sm+ */}
          <a
            href="#eval-form"
            className="flex min-h-[48px] w-full shrink-0 items-center justify-center rounded-[6px] bg-[var(--color-blue)] px-[1.375rem] py-[0.875rem] font-['Nunito_Sans',sans-serif] text-[0.8125rem] font-bold tracking-[0.39px] text-[var(--color-white)] whitespace-nowrap shadow-[var(--shadow-gold-btn)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-action)] sm:w-auto"
          >
            Learn About HIMPLANT →
          </a>

        </div>
      </div>
    </section>
  )
}
