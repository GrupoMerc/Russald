import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { mommyMakeoverData } from '@/lib/pages/procedures/plasticSurgery'
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
  title: 'Mommy Makeover in Tijuana, Mexico',
  description:
    'Mommy makeover surgery in Tijuana — tummy tuck, breast procedure & lipo combined. ' +
    '60–75% less than US clinics, board-certified plastic surgeons, 20 min from San Diego. Russald Medical Center.',
  alternates: { canonical: '/plastic-surgery/mommy-makeover' },
  openGraph: {
    title:       'Mommy Makeover in Tijuana | Russald Medical Center',
    description: 'Customized mommy makeover — tummy tuck, breast procedure & liposuction. 60–75% less than US clinics. 20 min from San Diego.',
    url:         '/plastic-surgery/mommy-makeover',
  },
}

const d = mommyMakeoverData
const jsonLd      = procedureSchema('Mommy Makeover', d.intro.paragraphs[0], '/plastic-surgery/mommy-makeover')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',            url: SITE.url },
  { name: 'Plastic Surgery', url: `${SITE.url}/plastic-surgery` },
  { name: 'Mommy Makeover',  url: `${SITE.url}/plastic-surgery/mommy-makeover` },
])
const webPage = medicalWebPageSchema({
  name:        'Mommy Makeover in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/plastic-surgery/mommy-makeover',
  specialty:   'Plastic Surgery',
})
const faqLd = faqSchema(d.faq.items)

export default function MommyMakeoverPage() {
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
