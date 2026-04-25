import type { Metadata }   from 'next'
import dynamic             from 'next/dynamic'
import { vascularData }    from '@/lib/pages/vascularCare'
import { procedureSchema, breadcrumbSchema, medicalWebPageSchema, faqSchema } from '@/lib/schema'
import { JsonLd }          from '@/components/JsonLd'
import { SITE }            from '@/config/site'

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
  title: 'Vascular Care in Tijuana, Mexico',
  description:
    'EVLA & sclerotherapy for varicose veins and spider veins — 60–75% less than US vascular clinics, ' +
    '20 minutes from San Diego. Outpatient, same-day ambulation. Russald Medical Center.',
  alternates: { canonical: '/vascular-care' },
  openGraph: {
    title:       'Vascular Care in Tijuana | Russald Medical Center',
    description: 'EVLA & sclerotherapy for varicose veins and spider veins — 60–75% less than US vascular clinics, 20 minutes from San Diego.',
    url:         '/vascular-care',
  },
}

const jsonLd      = procedureSchema('Vascular Care', vascularData.intro.paragraphs[0], '/vascular-care')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',          url: SITE.url },
  { name: 'Vascular Care', url: `${SITE.url}/vascular-care` },
])
const webPage     = medicalWebPageSchema({
  name:        'Vascular Care in Tijuana, Mexico',
  description: vascularData.intro.paragraphs[0],
  path:        '/vascular-care',
  specialty:   'Vascular Surgery',
})
const faqLd       = faqSchema(vascularData.faq.items)

export default function VascularCarePage() {
  return (
    <>
      <JsonLd data={jsonLd as Record<string, unknown>} />
      <JsonLd data={breadcrumbs as Record<string, unknown>} />
      <JsonLd data={webPage as Record<string, unknown>} />
      <JsonLd data={faqLd as Record<string, unknown>} />
      <SpecHero       data={vascularData.hero}   />
      <SpecFactsStrip facts={vascularData.facts} />
      <SpecIntro      data={vascularData.intro}  />
      <SpecWhy        data={vascularData.why}    />
      <SpecProc       data={vascularData.proc}   />
      <SpecFaq        data={vascularData.faq}    />
      <EvalFormSection />
      <SpecFloatCta />
    </>
  )
}
