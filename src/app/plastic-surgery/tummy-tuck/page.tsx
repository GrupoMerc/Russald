import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { tummyTuckData } from '@/lib/pages/procedures/plasticSurgery'
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
  title: 'Tummy Tuck in Tijuana, Mexico',
  description:
    'Tummy tuck (abdominoplasty) in Tijuana — full, mini & extended options. ' +
    '60–75% less than US clinics, board-certified plastic surgeons, 20 min from San Diego. Russald Medical Center.',
  alternates: { canonical: '/plastic-surgery/tummy-tuck' },
  openGraph: {
    title:       'Tummy Tuck in Tijuana | Russald Medical Center',
    description: 'Tummy tuck (abdominoplasty) — full, mini & extended options. 60–75% less than US. 20 min from San Diego.',
    url:         '/plastic-surgery/tummy-tuck',
  },
}

const d = tummyTuckData
const jsonLd      = procedureSchema('Tummy Tuck', d.intro.paragraphs[0], '/plastic-surgery/tummy-tuck')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',            url: SITE.url },
  { name: 'Plastic Surgery', url: `${SITE.url}/plastic-surgery` },
  { name: 'Tummy Tuck',      url: `${SITE.url}/plastic-surgery/tummy-tuck` },
])
const webPage = medicalWebPageSchema({
  name:        'Tummy Tuck in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/plastic-surgery/tummy-tuck',
  specialty:   'Plastic Surgery',
})
const faqLd = faqSchema(d.faq.items)

export default function TummyTuckPage() {
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
