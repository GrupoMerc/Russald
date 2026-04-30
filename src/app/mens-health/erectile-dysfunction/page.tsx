import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { edData }         from '@/lib/pages/procedures/mensHealth'
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
  title: 'Erectile Dysfunction Treatment in Tijuana, Mexico',
  description:
    'ED treatment in Tijuana — shockwave therapy (ESWT), P-Shot, and oral protocols, board-certified physicians. ' +
    '60–75% less than US clinics, same-day outpatient, complete privacy, 20 min from San Diego. Russald Medical Center.',
  alternates: { canonical: '/mens-health/erectile-dysfunction' },
  openGraph: {
    title:       'Erectile Dysfunction Treatment in Tijuana | Russald Medical Center',
    description: 'ED treatment — shockwave, P-Shot, oral protocols, complete privacy. 60–75% less than US. 20 min from San Diego.',
    url:         '/mens-health/erectile-dysfunction',
  },
}

const d = edData
const jsonLd      = procedureSchema('Erectile Dysfunction Treatment', d.intro.paragraphs[0], '/mens-health/erectile-dysfunction')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',        url: SITE.url },
  { name: "Men's Health", url: `${SITE.url}/mens-health` },
  { name: 'Erectile Dysfunction', url: `${SITE.url}/mens-health/erectile-dysfunction` },
])
const webPage = medicalWebPageSchema({
  name:        'Erectile Dysfunction Treatment in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/mens-health/erectile-dysfunction',
  specialty:   "Men's Health",
})
const faqLd = faqSchema(d.faq.items)

export default function EdPage() {
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
