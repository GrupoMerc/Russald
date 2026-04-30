import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { sclerotherapyData } from '@/lib/pages/procedures/vascularCare'
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
  title: 'Sclerotherapy for Spider Veins in Tijuana, Mexico',
  description:
    'Sclerotherapy in Tijuana — spider vein and small varicose vein treatment, same-day outpatient, no anesthesia needed. ' +
    'Significantly less than US clinics, 20 min from San Diego. Russald Medical Center.',
  alternates: { canonical: '/vascular-care/sclerotherapy' },
  openGraph: {
    title:       'Sclerotherapy for Spider Veins in Tijuana | Russald Medical Center',
    description: 'Sclerotherapy — spider vein treatment, same-day outpatient, no downtime. Significantly less than US. 20 min from San Diego.',
    url:         '/vascular-care/sclerotherapy',
  },
}

const d = sclerotherapyData
const jsonLd      = procedureSchema('Sclerotherapy', d.intro.paragraphs[0], '/vascular-care/sclerotherapy')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',            url: SITE.url },
  { name: 'Vascular Care',   url: `${SITE.url}/vascular-care` },
  { name: 'Sclerotherapy',   url: `${SITE.url}/vascular-care/sclerotherapy` },
])
const webPage = medicalWebPageSchema({
  name:        'Sclerotherapy for Spider Veins in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/vascular-care/sclerotherapy',
  specialty:   'Vascular Care',
})
const faqLd = faqSchema(d.faq.items)

export default function SclerotherapyPage() {
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
