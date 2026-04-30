import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { implantData }    from '@/lib/pages/procedures/mensHealth'
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
  title: 'Penile Implant Surgery in Tijuana, Mexico',
  description:
    'Penile implant surgery in Tijuana — FDA-cleared inflatable prosthesis, board-certified urologist, complete privacy. ' +
    '60–75% less than US clinics, 2-night stay, 20 min from San Diego. Russald Medical Center.',
  alternates: { canonical: '/mens-health/implant' },
  openGraph: {
    title:       'Penile Implant Surgery in Tijuana | Russald Medical Center',
    description: 'Penile implant — FDA-cleared prosthesis, board-certified urologist, complete privacy. 60–75% less than US.',
    url:         '/mens-health/implant',
  },
}

const d = implantData
const jsonLd      = procedureSchema('Penile Implant Surgery', d.intro.paragraphs[0], '/mens-health/implant')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',        url: SITE.url },
  { name: "Men's Health", url: `${SITE.url}/mens-health` },
  { name: 'Penile Implant', url: `${SITE.url}/mens-health/implant` },
])
const webPage = medicalWebPageSchema({
  name:        'Penile Implant Surgery in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/mens-health/implant',
  specialty:   "Men's Health",
})
const faqLd = faqSchema(d.faq.items)

export default function ImplantPage() {
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
