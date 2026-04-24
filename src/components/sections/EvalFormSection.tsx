// Figma node: 2300:720 — Section/Eval-Form (Desktop) · 2323:988 (Tablet) · 2334:1568 (Mobile)
import EvaluationForm from '@/components/EvaluationForm'

interface Props {
  defaultProcedure?: string
}

const bullets = [
  { emoji: '🩺', bold: 'Pre-approval path',                rest: ': submit your profile and receive a pre-approval decision' },
  { emoji: '⏱',  bold: 'Response within 1 business day',  rest: ': often same day' },
  { emoji: '🔒', bold: 'Fully confidential',               rest: ': your information is never shared' },
  { emoji: '📍', bold: 'Minutes from San Diego',           rest: ': no flights, no long trips' },
  { emoji: '💬', bold: 'English-speaking team',            rest: ' handles your case from start to finish' },
  { emoji: '💰', bold: 'Transparent pricing',              rest: ': receive a personalized cost breakdown' },
] as const

export default function EvalFormSection({ defaultProcedure }: Props) {
  return (
    <section
      id="eval-form"
      aria-labelledby="eval-heading"
      className="flex flex-col items-center px-4 py-12 sm:px-8 sm:py-14 lg:py-[72px]"
      style={{
        backgroundImage:
          'linear-gradient(12.29deg, rgb(13,42,80) 47.66%, rgb(15,28,63) 78.86%, rgb(10,61,74) 125.66%)',
      }}
    >
      <div className="flex w-full max-w-[900px] flex-col gap-8 sm:gap-10 lg:flex-row lg:items-start lg:gap-14">

        {/* ── Copy column ── */}
        <div className="flex flex-1 flex-col">
          <p className="font-['Nunito_Sans',sans-serif] text-[0.656rem] font-bold uppercase tracking-[1.89px] text-[rgba(255,255,255,0.45)]">
            No Commitment Required
          </p>
          <div className="h-[10px]" />
          <h2
            id="eval-heading"
            className="font-['Rethink_Sans',sans-serif] text-[2.5rem] font-bold leading-[1.1] text-[var(--color-white)]"
          >
            Request Your Free Medical Evaluation
          </h2>
          <div className="h-4" />
          <div
            className="h-[2.5px] w-9 rounded-[2px]"
            style={{ backgroundColor: 'rgba(255,255,255,0.35)' }}
          />
          <div className="h-[22px]" />
          <p className="font-['Nunito_Sans',sans-serif] text-[0.9375rem] font-normal leading-[1.85] text-[rgba(255,255,255,0.72)]">
            Our team reviews your case individually: connecting you with the right specialist at no
            cost and with no obligation to proceed.
          </p>
          <div className="h-6" />
          <ul className="flex flex-col" role="list">
            {bullets.map((b) => (
              <li key={b.bold} className="flex gap-[10px] py-[6px]">
                <span className="shrink-0 text-[1rem] leading-[1.6] text-[var(--color-white)]" aria-hidden="true">
                  {b.emoji}
                </span>
                <p className="text-[0.875rem] leading-[1.6] text-[rgba(255,255,255,0.78)]">
                  <strong className="font-['Nunito_Sans',sans-serif] font-bold">{b.bold}</strong>
                  <span className="font-['Nunito_Sans',sans-serif] font-normal">{b.rest}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Interactive form card ── */}
        <div className="w-full lg:w-[440px] lg:shrink-0">
          <EvaluationForm defaultProcedure={defaultProcedure} />
        </div>

      </div>
    </section>
  )
}
