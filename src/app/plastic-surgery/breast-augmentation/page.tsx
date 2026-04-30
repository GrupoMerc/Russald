import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { breastAugmentationData } from '@/lib/pages/procedures/plasticSurgery'
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
  title: 'Breast Augmentation in Tijuana, Mexico',
  description:
    'Breast augmentation in Tijuana — silicone & saline implants, personalized sizing. ' +
    '60–75% less than US clinics, board-certified plastic surgeons, 20 min from San Diego. Russald Medical Center.',
  alternates: { canonical: '/plastic-surgery/breast-augmentation' },
  openGraph: {
    title:       'Breast Augmentation in Tijuana | Russald Medical Center',
    description: 'Breast augmentation — silicone & saline implants, personalized plan. 60–75% less than US. 20 min from San Diego.',
    url:         '/plastic-surgery/breast-augmentation',
  },
}

const d = breastAugmentationData
const jsonLd      = procedureSchema('Breast Augmentation', d.intro.paragraphs[0], '/plastic-surgery/breast-augmentation')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',                 url: SITE.url },
  { name: 'Plastic Surgery',      url: `${SITE.url}/plastic-surgery` },
  { name: 'Breast Augmentation',  url: `${SITE.url}/plastic-surgery/breast-augmentation` },
])
const webPage = medicalWebPageSchema({
  name:        'Breast Augmentation in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/plastic-surgery/breast-augmentation',
  specialty:   'Plastic Surgery',
})
const faqLd = faqSchema(d.faq.items)

export default function BreastAugmentationPage() {
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
