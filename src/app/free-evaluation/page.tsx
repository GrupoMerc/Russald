import type { Metadata } from 'next'
import EvaluationForm from '@/components/EvaluationForm'
import { JsonLd } from '@/components/JsonLd'
import { contactPageSchema } from '@/lib/schema'

const jsonLd = contactPageSchema()

export const metadata: Metadata = {
  title: 'Free Clinical Evaluation | Russald Medical Center',
  description:
    'Request a free, no-commitment clinical evaluation with our English-speaking team. Fellowship-trained surgeons in Tijuana, 20 minutes from San Diego.',
  alternates: { canonical: '/free-evaluation' },
  openGraph: {
    title:       'Free Clinical Evaluation | Russald Medical Center',
    description: 'Request a free clinical evaluation — no commitment, English-speaking team, Tijuana Mexico.',
    url:         '/free-evaluation',
  },
}

export default function FreeEvaluationPage() {
  return (
    <>
      <JsonLd data={jsonLd as Record<string, unknown>} />
      <div className="min-h-screen w-full bg-[var(--color-ice)] px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto w-full max-w-[580px]">
          <EvaluationForm showHeader />
        </div>
      </div>
    </>
  )
}
