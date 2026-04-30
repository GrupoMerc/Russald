import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { nadData }        from '@/lib/pages/procedures/bioOptimization'
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
  title: 'NAD IV Therapy in Tijuana, Mexico',
  description:
    'NAD IV therapy in Tijuana — restore mitochondrial function, cellular energy, and cognitive clarity with intravenous NAD⁺. ' +
    'Significantly less than US NAD clinics, same-day sessions, 20 min from San Diego. Russald Medical Center.',
  alternates: { canonical: '/bio-optimization/nad-iv' },
  openGraph: {
    title:       'NAD IV Therapy in Tijuana | Russald Medical Center',
    description: 'NAD IV — mitochondrial energy, DNA repair, sirtuin activation. Significantly less than US. 20 min from San Diego.',
    url:         '/bio-optimization/nad-iv',
  },
}

const d = nadData
const jsonLd      = procedureSchema('NAD IV Therapy', d.intro.paragraphs[0], '/bio-optimization/nad-iv')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',             url: SITE.url },
  { name: 'Bio Optimization', url: `${SITE.url}/bio-optimization` },
  { name: 'NAD IV Therapy',   url: `${SITE.url}/bio-optimization/nad-iv` },
])
const webPage = medicalWebPageSchema({
  name:        'NAD IV Therapy in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/bio-optimization/nad-iv',
  specialty:   'Bio Optimization',
})
const faqLd = faqSchema(d.faq.items)

export default function NadPage() {
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
