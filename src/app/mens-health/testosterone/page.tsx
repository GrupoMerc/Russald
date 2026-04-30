import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { testosteroneData } from '@/lib/pages/procedures/mensHealth'
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
  title: 'Testosterone Replacement Therapy in Tijuana, Mexico',
  description:
    'TRT in Tijuana — lab-confirmed low testosterone, physician-managed protocol, injectable and pellet options. ' +
    '60–75% less than US men\'s health clinics, complete privacy, 20 min from San Diego. Russald Medical Center.',
  alternates: { canonical: '/mens-health/testosterone' },
  openGraph: {
    title:       'Testosterone Replacement Therapy in Tijuana | Russald Medical Center',
    description: 'TRT — lab-confirmed protocol, injectable & pellet options, complete privacy. 60–75% less than US.',
    url:         '/mens-health/testosterone',
  },
}

const d = testosteroneData
const jsonLd      = procedureSchema('Testosterone Replacement Therapy', d.intro.paragraphs[0], '/mens-health/testosterone')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',        url: SITE.url },
  { name: "Men's Health", url: `${SITE.url}/mens-health` },
  { name: 'Testosterone Therapy', url: `${SITE.url}/mens-health/testosterone` },
])
const webPage = medicalWebPageSchema({
  name:        'Testosterone Replacement Therapy in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/mens-health/testosterone',
  specialty:   "Men's Health",
})
const faqLd = faqSchema(d.faq.items)

export default function TestosteronePage() {
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
