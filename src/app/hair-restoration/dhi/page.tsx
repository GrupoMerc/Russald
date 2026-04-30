import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { dhiData }        from '@/lib/pages/procedures/hairRestoration'
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
  title: 'DHI Hair Transplant in Tijuana, Mexico',
  description:
    'DHI hair transplant in Tijuana — Choi pen direct implantation, precise angle and density control. ' +
    '50–70% less than US clinics, experienced hair restoration team, 20 min from San Diego. Russald Medical Center.',
  alternates: { canonical: '/hair-restoration/dhi' },
  openGraph: {
    title:       'DHI Hair Transplant in Tijuana | Russald Medical Center',
    description: 'DHI hair transplant — Choi pen precision, density between existing hair. 50–70% less than US. 20 min from San Diego.',
    url:         '/hair-restoration/dhi',
  },
}

const d = dhiData
const jsonLd      = procedureSchema('DHI Hair Transplant', d.intro.paragraphs[0], '/hair-restoration/dhi')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',             url: SITE.url },
  { name: 'Hair Restoration', url: `${SITE.url}/hair-restoration` },
  { name: 'DHI Hair Transplant', url: `${SITE.url}/hair-restoration/dhi` },
])
const webPage = medicalWebPageSchema({
  name:        'DHI Hair Transplant in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/hair-restoration/dhi',
  specialty:   'Hair Restoration',
})
const faqLd = faqSchema(d.faq.items)

export default function DhiPage() {
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
