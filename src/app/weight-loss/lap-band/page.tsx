import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { lapBandData }    from '@/lib/pages/procedures/weightLoss'
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
  title: 'Lap-Band Surgery in Tijuana, Mexico',
  description:
    'Adjustable Lap-Band surgery in Tijuana — reversible, 65–75% less than US costs, board-certified bariatric surgeons, ' +
    '20 minutes from San Diego. Russald Medical Center.',
  alternates: { canonical: '/weight-loss/lap-band' },
  openGraph: {
    title:       'Lap-Band Surgery in Tijuana | Russald Medical Center',
    description: 'Adjustable, reversible Lap-Band surgery — 65–75% less than US costs, 20 min from San Diego.',
    url:         '/weight-loss/lap-band',
  },
}

const d = lapBandData

const jsonLd      = procedureSchema('Lap-Band Surgery', d.intro.paragraphs[0], '/weight-loss/lap-band')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',                url: SITE.url },
  { name: 'Weight Loss Surgery', url: `${SITE.url}/weight-loss` },
  { name: 'Lap-Band',            url: `${SITE.url}/weight-loss/lap-band` },
])
const webPage = medicalWebPageSchema({
  name:        'Lap-Band Surgery in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/weight-loss/lap-band',
  specialty:   'Bariatric Surgery',
})
const faqLd = faqSchema(d.faq.items)

export default function LapBandPage() {
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
