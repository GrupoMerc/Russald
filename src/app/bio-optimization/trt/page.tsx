import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { bioTrtData }     from '@/lib/pages/procedures/bioOptimization'
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
  title: 'Testosterone Replacement Therapy (TRT) in Tijuana, Mexico',
  description:
    'TRT in Tijuana — lab-confirmed low testosterone, physician-supervised protocol, injectable, gel, and pellet options. ' +
    'Significantly less than US hormone clinics, remote consult available, 20 min from San Diego. Russald Medical Center.',
  alternates: { canonical: '/bio-optimization/trt' },
  openGraph: {
    title:       'TRT in Tijuana | Russald Medical Center',
    description: 'TRT — lab-confirmed protocol, multiple delivery methods, remote consult. Significantly less than US.',
    url:         '/bio-optimization/trt',
  },
}

const d = bioTrtData
const jsonLd      = procedureSchema('Testosterone Replacement Therapy', d.intro.paragraphs[0], '/bio-optimization/trt')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',                          url: SITE.url },
  { name: 'Bio Optimization',              url: `${SITE.url}/bio-optimization` },
  { name: 'Testosterone Therapy (TRT)',    url: `${SITE.url}/bio-optimization/trt` },
])
const webPage = medicalWebPageSchema({
  name:        'Testosterone Replacement Therapy (TRT) in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/bio-optimization/trt',
  specialty:   'Bio Optimization',
})
const faqLd = faqSchema(d.faq.items)

export default function BioTrtPage() {
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
