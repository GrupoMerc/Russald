import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { wlsData }        from '@/lib/pages/weightLoss'
import { procedureSchema, breadcrumbSchema, medicalWebPageSchema } from '@/lib/schema'

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
  title: 'Weight Loss Surgery in Tijuana, Mexico',
  description:
    'Gastric sleeve, gastric bypass, mini bypass, Lap-Band & revision surgery — 65–75% less than US prices, 20 minutes from San Diego. Fellowship-trained bariatric surgeons at Russald Medical Center.',
  alternates: { canonical: '/weight-loss' },
  openGraph: {
    title:       'Weight Loss Surgery in Tijuana | Russald Medical Center',
    description: 'Gastric sleeve, gastric bypass, mini bypass, Lap-Band & revision surgery — 65–75% less than US prices, 20 minutes from San Diego.',
    url:         '/weight-loss',
  },
}

const jsonLd       = procedureSchema('Weight Loss Surgery', wlsData.intro.paragraphs[0], '/weight-loss')
const breadcrumbs  = breadcrumbSchema([
  { name: 'Home',                url: 'https://russaldmedical.com' },
  { name: 'Weight Loss Surgery', url: 'https://russaldmedical.com/weight-loss' },
])
const webPage      = medicalWebPageSchema({
  name:        'Weight Loss Surgery in Tijuana, Mexico',
  description: wlsData.intro.paragraphs[0],
  path:        '/weight-loss',
  specialty:   'Bariatric Surgery',
})

export default function WeightLossSurgeryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <SpecHero       data={wlsData.hero}   />
      <SpecFactsStrip facts={wlsData.facts} />
      <SpecIntro      data={wlsData.intro}  />
      <SpecWhy        data={wlsData.why}    />
      <SpecProc       data={wlsData.proc}   />
      <EvalFormSection />
      <SpecFloatCta />
    </>
  )
}
