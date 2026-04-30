import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { gastricBypassData } from '@/lib/pages/procedures/weightLoss'
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
  title: 'Gastric Bypass Surgery in Tijuana, Mexico',
  description:
    'Gastric bypass (Roux-en-Y) in Tijuana — 65–75% less than US hospitals, board-certified bariatric surgeons, ' +
    'type 2 diabetes improvement, 20 minutes from San Diego. Russald Medical Center.',
  alternates: { canonical: '/weight-loss/gastric-bypass' },
  openGraph: {
    title:       'Gastric Bypass Surgery in Tijuana | Russald Medical Center',
    description: 'Gastric bypass (Roux-en-Y) — 65–75% less than US hospitals, strongest metabolic results, 20 min from San Diego.',
    url:         '/weight-loss/gastric-bypass',
  },
}

const d = gastricBypassData

const jsonLd      = procedureSchema('Gastric Bypass Surgery', d.intro.paragraphs[0], '/weight-loss/gastric-bypass')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',                url: SITE.url },
  { name: 'Weight Loss Surgery', url: `${SITE.url}/weight-loss` },
  { name: 'Gastric Bypass',      url: `${SITE.url}/weight-loss/gastric-bypass` },
])
const webPage = medicalWebPageSchema({
  name:        'Gastric Bypass Surgery in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/weight-loss/gastric-bypass',
  specialty:   'Bariatric Surgery',
})
const faqLd = faqSchema(d.faq.items)

export default function GastricBypassPage() {
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
