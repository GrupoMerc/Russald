import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { bioPrpData }     from '@/lib/pages/procedures/bioOptimization'
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
  title: 'PRP Therapy in Tijuana, Mexico',
  description:
    'PRP (platelet-rich plasma) therapy in Tijuana — autologous growth factors for hair restoration, erectile support, and tissue regeneration. ' +
    'Significantly less than US clinics, same-day outpatient, 20 min from San Diego. Russald Medical Center.',
  alternates: { canonical: '/bio-optimization/prp' },
  openGraph: {
    title:       'PRP Therapy in Tijuana | Russald Medical Center',
    description: 'PRP therapy — autologous growth factors for tissue regeneration. Significantly less than US. 20 min from San Diego.',
    url:         '/bio-optimization/prp',
  },
}

const d = bioPrpData
const jsonLd      = procedureSchema('PRP Therapy', d.intro.paragraphs[0], '/bio-optimization/prp')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',             url: SITE.url },
  { name: 'Bio Optimization', url: `${SITE.url}/bio-optimization` },
  { name: 'PRP Therapy',      url: `${SITE.url}/bio-optimization/prp` },
])
const webPage = medicalWebPageSchema({
  name:        'PRP Therapy in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/bio-optimization/prp',
  specialty:   'Bio Optimization',
})
const faqLd = faqSchema(d.faq.items)

export default function BioPrpPage() {
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
