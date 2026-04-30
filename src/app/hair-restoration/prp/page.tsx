import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { hairPrpData }    from '@/lib/pages/procedures/hairRestoration'
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
  title: 'Hair PRP Therapy in Tijuana, Mexico',
  description:
    'Hair PRP therapy in Tijuana — platelet-rich plasma to stimulate follicle activity and slow hair loss. ' +
    'Significantly less than US clinics, same-day outpatient, 20 min from San Diego. Russald Medical Center.',
  alternates: { canonical: '/hair-restoration/prp' },
  openGraph: {
    title:       'Hair PRP Therapy in Tijuana | Russald Medical Center',
    description: 'Hair PRP — growth factors to slow hair loss and improve density. Significantly less than US. 20 min from San Diego.',
    url:         '/hair-restoration/prp',
  },
}

const d = hairPrpData
const jsonLd      = procedureSchema('Hair PRP Therapy', d.intro.paragraphs[0], '/hair-restoration/prp')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',             url: SITE.url },
  { name: 'Hair Restoration', url: `${SITE.url}/hair-restoration` },
  { name: 'Hair PRP',         url: `${SITE.url}/hair-restoration/prp` },
])
const webPage = medicalWebPageSchema({
  name:        'Hair PRP Therapy in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/hair-restoration/prp',
  specialty:   'Hair Restoration',
})
const faqLd = faqSchema(d.faq.items)

export default function HairPrpPage() {
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
