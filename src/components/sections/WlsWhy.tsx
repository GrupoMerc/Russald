// Figma node: 2143:325 — Section/Spec-Why · 2208:483 Tablet · 2169:93 Mobile

const WHY_ITEMS = [
  {
    icon: '🏥',
    title: 'Fellowship-Trained Surgeons',
    body: 'Our bariatric team includes surgeons with postgraduate fellowship training in bariatric and metabolic surgery — the same credential required by leading US centers.',
  },
  {
    icon: '🔬',
    title: 'Full Pre-Op Workup Required',
    body: 'Blood work, cardiac clearance, and nutritional assessment are completed before surgery is scheduled. We do not skip steps — your safety is the baseline.',
  },
  {
    icon: '💰',
    title: '65–75% Less Than US Pricing',
    body: 'The average gastric sleeve costs $15,000–$25,000 in the United States without insurance. At Russald Medical Center, the same procedure costs a fraction of that — no hidden fees.',
  },
  {
    icon: '🛫',
    title: 'Accessible from the US Southwest',
    body: 'No flights. No long travel. The San Diego border is approximately 20 minutes away. Most US patients drive across and return home within a week.',
  },
  {
    icon: '📋',
    title: 'Structured Post-Op Protocol',
    body: 'Written discharge instructions, dietary progression guidelines, supplement protocols, and scheduled remote follow-up are included with every procedure.',
  },
  {
    icon: '🌐',
    title: 'English-Speaking Coordination',
    body: 'Your assigned coordinator manages your case entirely in English — from first contact through post-operative follow-up. You will never navigate the system alone.',
  },
] as const

export default function WlsWhy() {
  return (
    <section
      id="wls-why"
      aria-labelledby="wls-why-heading"
      className="w-full bg-[var(--color-ice)] px-4 py-10 sm:px-8 sm:py-14 lg:py-[56px]"
    >
      <div className="w-full sm:max-w-[770px] lg:max-w-[980px] mx-auto">

        {/* section header */}
        <div className="flex flex-col items-start gap-0">
          <p className="font-['Rethink_Sans',sans-serif] font-bold text-[var(--color-blue)] text-[0.65625rem] tracking-[1.89px] uppercase">
            Why Russald Medical Center
          </p>
          <div className="h-2" aria-hidden="true" />
          <h2
            id="wls-why-heading"
            className="font-['Rethink_Sans',sans-serif] font-extrabold leading-[1.15] text-[var(--color-navy)] text-[1.375rem] sm:text-[1.625rem] lg:text-[2rem] tracking-[-0.02em]"
          >
            Why Choose Us for Weight Loss Surgery?
          </h2>
          <div className="h-3" aria-hidden="true" />
          <div className="w-9 h-[3px] rounded-[2px] bg-[var(--color-blue)]" aria-hidden="true" />
        </div>

        <div className="h-7" aria-hidden="true" />

        {/* cards grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY_ITEMS.map((item) => (
            <div
              key={item.title}
              className="bg-[var(--color-white)] border border-[var(--color-border)] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(15,28,63,0.08)] px-5 py-[22px] flex flex-col gap-2"
            >
              <span className="text-[1.375rem]" aria-hidden="true">{item.icon}</span>
              <p className="font-['Rethink_Sans',sans-serif] font-bold text-[var(--color-navy)] text-[0.875rem] leading-[1.3]">
                {item.title}
              </p>
              <p className="font-['Nunito_Sans',sans-serif] font-normal text-[var(--color-muted)] text-[0.78125rem] leading-[1.7]">
                {item.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
