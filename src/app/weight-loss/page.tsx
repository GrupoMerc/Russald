import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { wlsData }        from '@/lib/pages/weightLoss'
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

const jsonLd      = procedureSchema('Weight Loss Surgery', wlsData.intro.paragraphs[0], '/weight-loss')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',                url: SITE.url },
  { name: 'Weight Loss Surgery', url: `${SITE.url}/weight-loss` },
])
const webPage     = medicalWebPageSchema({
  name:        'Weight Loss Surgery in Tijuana, Mexico',
  description: wlsData.intro.paragraphs[0],
  path:        '/weight-loss',
  specialty:   'Bariatric Surgery',
})
const faqLd       = faqSchema(wlsData.faq.items)

export default function WeightLossSurgeryPage() {
  return (
    <>
      <JsonLd data={jsonLd as Record<string, unknown>} />
      <JsonLd data={breadcrumbs as Record<string, unknown>} />
      <JsonLd data={webPage as Record<string, unknown>} />
      <JsonLd data={faqLd as Record<string, unknown>} />
      <SpecHero       data={wlsData.hero}   />
      <SpecFactsStrip facts={wlsData.facts} />
      <SpecIntro      data={wlsData.intro}  />
      <SpecWhy        data={wlsData.why}    />
      <SpecProc       data={wlsData.proc}   />
      <SpecFaq        data={wlsData.faq}    />
      <EvalFormSection />
      <SpecFloatCta />
    </>
  )
}
