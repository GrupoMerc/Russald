import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { evlaData }       from '@/lib/pages/procedures/vascularCare'
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
  title: 'EVLA Varicose Vein Treatment in Tijuana, Mexico',
  description:
    'EVLA (Endovenous Laser Ablation) in Tijuana — ultrasound-guided laser treatment for varicose veins, local anesthesia, same-day return. ' +
    '60–75% less than US vein clinics, 20 min from San Diego. Russald Medical Center.',
  alternates: { canonical: '/vascular-care/evla' },
  openGraph: {
    title:       'EVLA Varicose Vein Treatment in Tijuana | Russald Medical Center',
    description: 'EVLA — laser vein ablation, same-day procedure, no hospitalization. 60–75% less than US. 20 min from San Diego.',
    url:         '/vascular-care/evla',
  },
}

const d = evlaData
const jsonLd      = procedureSchema('EVLA Varicose Vein Treatment', d.intro.paragraphs[0], '/vascular-care/evla')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',          url: SITE.url },
  { name: 'Vascular Care', url: `${SITE.url}/vascular-care` },
  { name: 'EVLA',          url: `${SITE.url}/vascular-care/evla` },
])
const webPage = medicalWebPageSchema({
  name:        'EVLA Varicose Vein Treatment in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/vascular-care/evla',
  specialty:   'Vascular Care',
})
const faqLd = faqSchema(d.faq.items)

export default function EvlaPage() {
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
