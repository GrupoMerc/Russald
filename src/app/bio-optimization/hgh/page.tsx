import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { hghData }        from '@/lib/pages/procedures/bioOptimization'
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
  title: 'HGH Therapy in Tijuana, Mexico',
  description:
    'HGH therapy in Tijuana — physician-supervised, lab-confirmed growth hormone deficiency, IGF-1 evaluated protocol. ' +
    'Significantly less than US hormone clinics, 20 min from San Diego. Russald Medical Center.',
  alternates: { canonical: '/bio-optimization/hgh' },
  openGraph: {
    title:       'HGH Therapy in Tijuana | Russald Medical Center',
    description: 'HGH therapy — physician-supervised, lab-confirmed protocol. Significantly less than US. 20 min from San Diego.',
    url:         '/bio-optimization/hgh',
  },
}

const d = hghData
const jsonLd      = procedureSchema('HGH Therapy', d.intro.paragraphs[0], '/bio-optimization/hgh')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',              url: SITE.url },
  { name: 'Bio Optimization',  url: `${SITE.url}/bio-optimization` },
  { name: 'HGH Therapy',       url: `${SITE.url}/bio-optimization/hgh` },
])
const webPage = medicalWebPageSchema({
  name:        'HGH Therapy in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/bio-optimization/hgh',
  specialty:   'Bio Optimization',
})
const faqLd = faqSchema(d.faq.items)

export default function HghPage() {
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
