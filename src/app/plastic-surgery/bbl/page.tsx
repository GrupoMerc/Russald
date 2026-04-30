import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { bblData }        from '@/lib/pages/procedures/plasticSurgery'
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
  title: 'Brazilian Butt Lift (BBL) in Tijuana, Mexico',
  description:
    'Brazilian Butt Lift (BBL) in Tijuana — own-fat transfer, natural results, current safety protocols. ' +
    '60–75% less than US clinics, board-certified plastic surgeons, 20 min from San Diego. Russald Medical Center.',
  alternates: { canonical: '/plastic-surgery/bbl' },
  openGraph: {
    title:       'Brazilian Butt Lift (BBL) in Tijuana | Russald Medical Center',
    description: 'BBL — own-fat transfer for natural results. 60–75% less than US clinics, current safety protocols. 20 min from San Diego.',
    url:         '/plastic-surgery/bbl',
  },
}

const d = bblData
const jsonLd      = procedureSchema('Brazilian Butt Lift', d.intro.paragraphs[0], '/plastic-surgery/bbl')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',                  url: SITE.url },
  { name: 'Plastic Surgery',       url: `${SITE.url}/plastic-surgery` },
  { name: 'Brazilian Butt Lift',   url: `${SITE.url}/plastic-surgery/bbl` },
])
const webPage = medicalWebPageSchema({
  name:        'Brazilian Butt Lift (BBL) in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/plastic-surgery/bbl',
  specialty:   'Plastic Surgery',
})
const faqLd = faqSchema(d.faq.items)

export default function BblPage() {
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
