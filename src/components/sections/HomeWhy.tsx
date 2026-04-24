// Figma node: 2298:755 — Section/Home-Why · 2330:1110 Tablet · 2337:1755 Mobile

const BOTTOM_CARDS = [
  {
    icon: '💰',
    title: 'Transparent Pricing',
    body: 'Most procedures cost 60–75% less than equivalent care in the United States. There are no hidden fees, no surprise charges. You receive a full cost breakdown before committing to anything.',
  },
  {
    icon: '🌐',
    title: 'English-First Experience',
    body: 'Your coordinator, your pre-op consultations, your discharge instructions, your post-operative follow-up: all in English. You will never need to navigate a language barrier at any stage of your care.',
  },
  {
    icon: '🔬',
    title: 'Multi-Specialty Under One Roof',
    body: 'Seven distinct specialties. Whether you are here for bariatric surgery, a mommy makeover, joint replacement, hair restoration, or a bio-optimization protocol: your care is coordinated between specialists as needed.',
  },
  {
    icon: '🛡️',
    title: 'Clinical Accountability',
    body: 'A medical evaluation is required before any procedure is scheduled. Our physicians do not perform procedures they would not recommend: candidacy is determined clinically, not commercially.',
  },
] as const

export default function HomeWhy() {
  return (
    <section
      aria-labelledby="why-heading"
      className="w-full bg-[var(--color-white)] flex flex-col items-center px-4 py-10 sm:px-6 sm:py-[72px]"
    >
      <div className="w-full sm:max-w-[786px] lg:max-w-[980px] flex flex-col gap-4 sm:gap-6">

        {/* Top row — stacked on mobile, 2-col on sm+ */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">

          {/* Blue hero card */}
          <div
            className="flex-1 flex flex-col gap-4 sm:justify-between sm:gap-3 px-5 py-7 sm:px-10 sm:py-11 rounded-[16px]"
            style={{
              backgroundImage:
                'linear-gradient(36deg, rgb(48,137,226) 39.645%, rgb(255,255,255) 110.36%)',
            }}
          >
            {/* Label */}
            <div className="flex items-center gap-2">
              <span className="w-4 sm:w-5 h-[2px] rounded-[1px] bg-[var(--color-gold)]" aria-hidden="true" />
              <p className="font-['Nunito_Sans',sans-serif] font-semibold text-[var(--color-gold)] text-[0.625rem] sm:text-[0.65625rem] tracking-[0.84px] whitespace-nowrap">
                Why Patients Choose Us
              </p>
            </div>

            {/* Heading */}
            <h2
              id="why-heading"
              className="font-['Rethink_Sans',sans-serif] font-extrabold text-white text-[1.5rem] sm:text-[2.125rem] leading-[1.1]"
            >
              What Sets<br />Russald Apart
            </h2>

            {/* Body */}
            <p className="font-['Nunito_Sans',sans-serif] font-normal text-white/[0.68] text-[0.8125rem] sm:text-[0.84375rem] leading-[1.75]">
              There are many medical facilities in Tijuana. What defines Russald Medical Center is not
              just pricing: it is the combination of clinical rigor, patient coordination
              infrastructure, and a genuine commitment to outcomes that keeps international patients
              choosing us over and over.
            </p>
          </div>

          {/* Right cards — Board-Certified + Accessibility */}
          <div className="flex-1 flex flex-col gap-4 sm:gap-5">

            {/* Board-Certified Specialists */}
            <div className="bg-[var(--color-white)] border border-[var(--color-border)] rounded-[12px] flex flex-col gap-3 sm:gap-[14px] px-5 sm:px-6 py-6 sm:py-7">
              <span className="text-[1.5rem] sm:text-[1.625rem]" aria-hidden="true">🏅</span>
              <div className="flex flex-col gap-[6px] sm:gap-2">
                <p className="font-['Rethink_Sans',sans-serif] font-extrabold text-[var(--color-charcoal)] text-[0.9375rem] sm:text-[1rem]">
                  Board-Certified Specialists
                </p>
                <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-muted)] text-[0.8125rem] leading-[1.75]">
                  Every physician on our team holds active licensure in Mexico and postgraduate board
                  certification in their specialty. You are treated by specialists, not generalists.
                </p>
              </div>
            </div>

            {/* Unmatched Accessibility — featured accent card */}
            <div className="bg-[var(--color-white)] border border-[var(--color-blue)] border-t-[3px] rounded-[12px] flex flex-col gap-2 px-5 sm:px-6 py-6 sm:py-7">
              <p className="font-['Rethink_Sans',sans-serif] font-extrabold text-[var(--color-blue)] text-[0.9375rem] sm:text-[1rem]">
                Unmatched Accessibility
              </p>
              <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-muted)] text-[0.8125rem] leading-[1.7]">
                Located at the Grand Medical Tower on Agua Caliente Boulevard in Tijuana,
                approximately 20 minutes from the San Diego border crossing. No flights, no long
                travel.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom grid — 1 col mobile, 2×2 tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BOTTOM_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-[var(--color-white)] border border-[var(--color-border)] rounded-[10px] flex flex-col gap-3 sm:gap-[14px] px-5 py-6"
            >
              <span className="text-[1.5rem] sm:text-[1.625rem]" aria-hidden="true">{card.icon}</span>
              <div className="flex flex-col gap-[6px] sm:gap-2">
                <p className="font-['Rethink_Sans',sans-serif] font-extrabold text-[var(--color-charcoal)] text-[0.9375rem] sm:text-[1rem]">
                  {card.title}
                </p>
                <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-muted)] text-[0.8125rem] leading-[1.75]">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
