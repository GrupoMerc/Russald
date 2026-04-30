import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { gastricSleeveData } from '@/lib/pages/procedures/weightLoss'
import { procedureSchema, breadcrumbSchema, medicalWebPageSchema, faqSchema } from '@/lib/schema'
import { JsonLd }         from '@/components/JsonLd'
import { SITE }           from '@/config/site'

import SpecHero        from '@/components/sections/spec/SpecHero'
import SpecFactsStrip  from '@/components/sections/spec/SpecFactsStrip'

const SpecIntro       = dynamic(() => import('@/components/sections/spec/SpecIntro'))
const SpecWhy         = dynamic(() => import('@/components/sections/spec/SpecWhy'))
const SpecFaq         = dynamic(() => import('@/components/sections/spec/SpecFaq'))
const EvalFormSection = dynamic(() => import('@/components/sections/EvalFormSection'))
const SpecFloatCta    = dynamic(() => import('@/components/sections/spec/SpecFloatCta'))

export const metadata: Metadata = {
  title: 'Gastric Sleeve Surgery in Tijuana, Mexico',
  description:
    'Gastric sleeve (VSG) surgery in Tijuana — 65–75% less than US hospitals, board-certified bariatric surgeons, ' +
    '20 minutes from San Diego. Russald Medical Center.',
  alternates: { canonical: '/weight-loss/gastric-sleeve' },
  openGraph: {
    title:       'Gastric Sleeve Surgery in Tijuana | Russald Medical Center',
    description: 'Gastric sleeve (VSG) — 65–75% less than US hospitals, fellowship-trained bariatric surgeons, 20 min from San Diego.',
    url:         '/weight-loss/gastric-sleeve',
  },
}

const d = gastricSleeveData

const jsonLd      = procedureSchema('Gastric Sleeve Surgery', d.intro.paragraphs[0], '/weight-loss/gastric-sleeve')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',                url: SITE.url },
  { name: 'Weight Loss Surgery', url: `${SITE.url}/weight-loss` },
  { name: 'Gastric Sleeve',      url: `${SITE.url}/weight-loss/gastric-sleeve` },
])
const webPage = medicalWebPageSchema({
  name:        'Gastric Sleeve Surgery in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/weight-loss/gastric-sleeve',
  specialty:   'Bariatric Surgery',
})
const faqLd = faqSchema(d.faq.items)

export default function GastricSleevePage() {
  return (
    <>
      <JsonLd data={jsonLd      as Record<string, unknown>} />
      <JsonLd data={breadcrumbs as Record<string, unknown>} />
      <JsonLd data={webPage     as Record<string, unknown>} />
      <JsonLd data={faqLd       as Record<string, unknown>} />
      <SpecHero       data={d.hero}   />
      <SpecFactsStrip facts={d.facts} />
      <SpecIntro      data={d.intro}  />
      <SpecWhy        data={d.why}    />
      <SpecFaq        data={d.faq}    />
      <EvalFormSection />
      <SpecFloatCta />
    </>
  )
}
