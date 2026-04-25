import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { bariatricRevisionData } from '@/lib/pages/procedures/weightLoss'
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
  title: 'Bariatric Revision Surgery in Tijuana, Mexico',
  description:
    'Bariatric revision surgery in Tijuana — sleeve to bypass conversion, band removal, pouch repair. ' +
    '65–75% less than US hospitals. Experienced revision team. 20 minutes from San Diego. Russald Medical Center.',
  alternates: { canonical: '/weight-loss/bariatric-revision' },
  openGraph: {
    title:       'Bariatric Revision Surgery in Tijuana | Russald Medical Center',
    description: 'Bariatric revision — sleeve to bypass, band removal, pouch repair. 65–75% less than US. 20 min from San Diego.',
    url:         '/weight-loss/bariatric-revision',
  },
}

const d = bariatricRevisionData

const jsonLd      = procedureSchema('Bariatric Revision Surgery', d.intro.paragraphs[0], '/weight-loss/bariatric-revision')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',                url: SITE.url },
  { name: 'Weight Loss Surgery', url: `${SITE.url}/weight-loss` },
  { name: 'Bariatric Revision',  url: `${SITE.url}/weight-loss/bariatric-revision` },
])
const webPage = medicalWebPageSchema({
  name:        'Bariatric Revision Surgery in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/weight-loss/bariatric-revision',
  specialty:   'Bariatric Surgery',
})
const faqLd = faqSchema(d.faq.items)

export default function BariatricRevisionPage() {
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
