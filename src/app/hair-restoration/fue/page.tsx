import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { fueData }        from '@/lib/pages/procedures/hairRestoration'
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
  title: 'FUE Hair Transplant in Tijuana, Mexico',
  description:
    'FUE hair transplant in Tijuana — individual follicle extraction, no linear scar, natural hairline design. ' +
    '50–70% less than US clinics, experienced hair restoration team, 20 min from San Diego. Russald Medical Center.',
  alternates: { canonical: '/hair-restoration/fue' },
  openGraph: {
    title:       'FUE Hair Transplant in Tijuana | Russald Medical Center',
    description: 'FUE hair transplant — no linear scar, natural hairline. 50–70% less than US. 20 min from San Diego.',
    url:         '/hair-restoration/fue',
  },
}

const d = fueData
const jsonLd      = procedureSchema('FUE Hair Transplant', d.intro.paragraphs[0], '/hair-restoration/fue')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',             url: SITE.url },
  { name: 'Hair Restoration', url: `${SITE.url}/hair-restoration` },
  { name: 'FUE Hair Transplant', url: `${SITE.url}/hair-restoration/fue` },
])
const webPage = medicalWebPageSchema({
  name:        'FUE Hair Transplant in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/hair-restoration/fue',
  specialty:   'Hair Restoration',
})
const faqLd = faqSchema(d.faq.items)

export default function FuePage() {
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
