import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { hairData }       from '@/lib/pages/hairRestoration'
import { procedureSchema, breadcrumbSchema, medicalWebPageSchema } from '@/lib/schema'
import { JsonLd }         from '@/components/JsonLd'
import { SITE }           from '@/config/site'

// Static — above the fold (LCP)
import SpecHero        from '@/components/sections/spec/SpecHero'
import SpecFactsStrip  from '@/components/sections/spec/SpecFactsStrip'

// Dynamic — below the fold
const SpecIntro       = dynamic(() => import('@/components/sections/spec/SpecIntro'))
const SpecWhy         = dynamic(() => import('@/components/sections/spec/SpecWhy'))
const SpecProc        = dynamic(() => import('@/components/sections/spec/SpecProc'))
const EvalFormSection = dynamic(() => import('@/components/sections/EvalFormSection'))
const SpecFloatCta    = dynamic(() => import('@/components/sections/spec/SpecFloatCta'))

export const metadata: Metadata = {
  title: 'Hair Restoration in Tijuana, Mexico',
  description:
    'FUE & DHI hair transplant surgery in Tijuana — 60–70% less than US prices, 20 minutes from San Diego. ' +
    'No linear scar, permanent results. Certified hair restoration specialists at Russald Medical Center.',
  alternates: { canonical: '/hair-restoration' },
  openGraph: {
    title:       'Hair Restoration in Tijuana | Russald Medical Center',
    description: 'FUE & DHI hair transplant surgery in Tijuana — 60–70% less than US prices, 20 minutes from San Diego.',
    url:         '/hair-restoration',
  },
}

const jsonLd      = procedureSchema('Hair Restoration Surgery', hairData.intro.paragraphs[0], '/hair-restoration')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',             url: SITE.url },
  { name: 'Hair Restoration', url: `${SITE.url}/hair-restoration` },
])
const webPage     = medicalWebPageSchema({
  name:        'Hair Restoration in Tijuana, Mexico',
  description: hairData.intro.paragraphs[0],
  path:        '/hair-restoration',
  specialty:   'Hair Restoration',
})

export default function HairRestorationPage() {
  return (
    <>
      <JsonLd data={jsonLd as Record<string, unknown>} />
      <JsonLd data={breadcrumbs as Record<string, unknown>} />
      <JsonLd data={webPage as Record<string, unknown>} />
      <SpecHero       data={hairData.hero}   />
      <SpecFactsStrip facts={hairData.facts} />
      <SpecIntro      data={hairData.intro}  />
      <SpecWhy        data={hairData.why}    />
      <SpecProc       data={hairData.proc}   />
      <EvalFormSection />
      <SpecFloatCta />
    </>
  )
}
