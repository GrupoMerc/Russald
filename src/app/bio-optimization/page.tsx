import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { bioData }        from '@/lib/pages/bioOptimization'
import { procedureSchema, breadcrumbSchema, medicalWebPageSchema, faqSchema } from '@/lib/schema'
import { JsonLd }         from '@/components/JsonLd'
import { SITE }           from '@/config/site'

// Static — above the fold (LCP)
import SpecHero        from '@/components/sections/spec/SpecHero'
import SpecFactsStrip  from '@/components/sections/spec/SpecFactsStrip'

// Dynamic — below the fold
const SpecIntro       = dynamic(() => import('@/components/sections/spec/SpecIntro'))
const SpecWhy         = dynamic(() => import('@/components/sections/spec/SpecWhy'))
const SpecProc        = dynamic(() => import('@/components/sections/spec/SpecProc'))
const SpecFaq         = dynamic(() => import('@/components/sections/spec/SpecFaq'))
const EvalFormSection = dynamic(() => import('@/components/sections/EvalFormSection'))
const SpecFloatCta    = dynamic(() => import('@/components/sections/spec/SpecFloatCta'))

export const metadata: Metadata = {
  title: 'Bio Optimization in Tijuana, Mexico',
  description:
    'Personalized bio optimization protocols — hormone therapy, IV therapy, regenerative medicine & aesthetic treatments. ' +
    '60–75% less than US longevity clinics. 20 minutes from San Diego. Russald Medical Center.',
  alternates: { canonical: '/bio-optimization' },
  openGraph: {
    title:       'Bio Optimization in Tijuana | Russald Medical Center',
    description: 'Personalized bio optimization protocols — hormone therapy, IV therapy & regenerative medicine. 60–75% less than US longevity clinics, 20 minutes from San Diego.',
    url:         '/bio-optimization',
  },
}

const jsonLd      = procedureSchema('Bio Optimization', bioData.intro.paragraphs[0], '/bio-optimization')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',             url: SITE.url },
  { name: 'Bio Optimization', url: `${SITE.url}/bio-optimization` },
])
const webPage     = medicalWebPageSchema({
  name:        'Bio Optimization in Tijuana, Mexico',
  description: bioData.intro.paragraphs[0],
  path:        '/bio-optimization',
  specialty:   'Preventive Medicine',
})
const faqLd       = faqSchema(bioData.faq.items)

export default function BioOptimizationPage() {
  return (
    <>
      <JsonLd data={jsonLd as Record<string, unknown>} />
      <JsonLd data={breadcrumbs as Record<string, unknown>} />
      <JsonLd data={webPage as Record<string, unknown>} />
      <JsonLd data={faqLd as Record<string, unknown>} />
      <SpecHero       data={bioData.hero}   />
      <SpecFactsStrip facts={bioData.facts} />
      <SpecIntro      data={bioData.intro}  />
      <SpecWhy        data={bioData.why}    />
      <SpecProc       data={bioData.proc}   />
      <SpecFaq        data={bioData.faq}    />
      <EvalFormSection />
      <SpecFloatCta />
    </>
  )
}
