// Figma node: 2143:291 — Section/Spec-Intro · 2284:902 Tablet · 2169:61 Mobile

const CANDIDATES = [
  'BMI of 35 or higher, or BMI 30+ with obesity-related conditions such as type 2 diabetes, hypertension, or sleep apnea',
  'Adults who have not achieved sustainable results through diet and exercise',
  'Patients without active untreated eating disorders or specific contraindicated conditions',
  'Non-smokers, or patients willing to stop at least 4–6 weeks prior to surgery',
  'Commitment to dietary and lifestyle changes post-surgery — surgery is a tool, not a cure',
] as const

export default function WlsIntro() {
  return (
    <section
      id="wls-intro"
      aria-labelledby="wls-intro-heading"
      className="w-full bg-[var(--color-white)] px-4 py-10 sm:px-8 sm:py-12 lg:py-16"
    >
      <div className="w-full sm:max-w-[770px] lg:max-w-[980px] mx-auto flex flex-col lg:flex-row lg:gap-14 lg:items-start gap-6">

        {/* left col — text */}
        <div className="flex flex-col flex-1 min-w-0">
          <p className="font-['Rethink_Sans',sans-serif] font-bold text-[var(--color-blue)] text-[0.65625rem] tracking-[1.89px] uppercase">
            Weight Loss Surgery
          </p>
          <div className="h-2" aria-hidden="true" />
          <h2
            id="wls-intro-heading"
            className="font-['Rethink_Sans',sans-serif] font-extrabold leading-[1.15] text-[var(--color-navy)] text-[1.5rem] sm:text-[2rem] tracking-[-0.02em]"
          >
            A Surgical Solution: When Everything Else Has Failed
          </h2>
          <div className="h-3" aria-hidden="true" />
          <div className="w-9 h-[3px] rounded-[2px] bg-[var(--color-blue)]" aria-hidden="true" />
          <div className="h-4" aria-hidden="true" />
          <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-muted)] text-[0.84375rem] leading-[1.75]">
            Bariatric surgery is not cosmetic and it is not a last resort — it is a medically established
            intervention for patients whose weight poses documented risks to their health. At Russald Medical
            Center, every bariatric patient undergoes a full pre-operative evaluation including bloodwork,
            cardiac clearance, and a nutritional consultation before a procedure date is ever scheduled.
          </p>
          <div className="h-3" aria-hidden="true" />
          <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-muted)] text-[0.84375rem] leading-[1.75]">
            We perform gastric sleeve (VSG), Roux-en-Y gastric bypass, mini gastric bypass, Lap-Band, and
            revision surgery for patients whose prior procedure has not delivered the expected result. Our
            bariatric team includes fellowship-trained surgeons who perform these procedures laparoscopically,
            minimizing incision size, recovery time, and complication risk.
          </p>
          <div className="h-3" aria-hidden="true" />
          <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-muted)] text-[0.84375rem] leading-[1.75]">
            For US patients, Tijuana represents one of the most accessible destinations for bariatric care
            in the world — approximately 20 minutes from the San Diego border crossing. You can complete the
            full procedure and return home within a week.
          </p>
        </div>

        {/* right col — info + warning boxes */}
        <div className="flex flex-col gap-4 flex-1 min-w-0 lg:max-w-[440px]">

          {/* candidate criteria */}
          <div className="bg-[var(--color-white)] border border-[#eef1ff] rounded-[8px] p-5 flex flex-col gap-3">
            <p className="font-['Rethink_Sans',sans-serif] font-bold text-[var(--color-navy)] text-[0.875rem]">
              📋&nbsp; Who Is a Candidate?
            </p>
            <ul className="flex flex-col gap-2.5" role="list">
              {CANDIDATES.map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <span className="font-['Rethink_Sans',sans-serif] font-bold text-[var(--color-blue)] text-[0.75rem] shrink-0 mt-0.5" aria-hidden="true">✓</span>
                  <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-muted)] text-[0.78125rem] leading-[1.65]">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* disclaimer */}
          <div
            className="bg-[#fbf4e6] border border-[rgba(181,134,42,0.4)] rounded-[6px] px-[14px] py-3"
            role="note"
            aria-label="Medical disclaimer"
          >
            <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-gold)] text-[0.75rem] leading-[1.65]">
              ⚠️&nbsp; All procedures require a medical evaluation to determine candidacy. The information
              on this page is for educational purposes only and does not constitute medical advice.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
