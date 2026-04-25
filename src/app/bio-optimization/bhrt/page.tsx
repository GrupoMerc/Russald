import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { bhrtData }       from '@/lib/pages/procedures/bioOptimization'
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
  title: 'Bioidentical Hormone Replacement Therapy (BHRT) in Tijuana, Mexico',
  description:
    'BHRT in Tijuana — bioidentical estrogen, progesterone, and testosterone protocols based on comprehensive lab evaluation. ' +
    'Significantly less than US hormone clinics, remote consult available, 20 min from San Diego. Russald Medical Center.',
  alternates: { canonical: '/bio-optimization/bhrt' },
  openGraph: {
    title:       'BHRT in Tijuana | Russald Medical Center',
    description: 'BHRT — bioidentical hormones, lab-confirmed protocol, remote consult available. Significantly less than US.',
    url:         '/bio-optimization/bhrt',
  },
}

const d = bhrtData
const jsonLd      = procedureSchema('Bioidentical Hormone Replacement Therapy', d.intro.paragraphs[0], '/bio-optimization/bhrt')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',             url: SITE.url },
  { name: 'Bio Optimization', url: `${SITE.url}/bio-optimization` },
  { name: 'BHRT',             url: `${SITE.url}/bio-optimization/bhrt` },
])
const webPage = medicalWebPageSchema({
  name:        'Bioidentical Hormone Replacement Therapy (BHRT) in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/bio-optimization/bhrt',
  specialty:   'Bio Optimization',
})
const faqLd = faqSchema(d.faq.items)

export default function BhrtPage() {
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
