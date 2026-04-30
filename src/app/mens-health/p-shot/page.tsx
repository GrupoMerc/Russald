import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { pShotData }      from '@/lib/pages/procedures/mensHealth'
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
  title: 'P-Shot (Priapus Shot) in Tijuana, Mexico',
  description:
    'P-Shot in Tijuana — platelet-rich plasma for erectile function, sensitivity, and performance. ' +
    'Significantly less than US clinics, same-day outpatient, complete privacy, 20 min from San Diego. Russald Medical Center.',
  alternates: { canonical: '/mens-health/p-shot' },
  openGraph: {
    title:       'P-Shot in Tijuana | Russald Medical Center',
    description: 'P-Shot (Priapus Shot) — PRP for erectile function and sensitivity. Complete privacy. 20 min from San Diego.',
    url:         '/mens-health/p-shot',
  },
}

const d = pShotData
const jsonLd      = procedureSchema('P-Shot (Priapus Shot)', d.intro.paragraphs[0], '/mens-health/p-shot')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',        url: SITE.url },
  { name: "Men's Health", url: `${SITE.url}/mens-health` },
  { name: 'P-Shot',      url: `${SITE.url}/mens-health/p-shot` },
])
const webPage = medicalWebPageSchema({
  name:        'P-Shot (Priapus Shot) in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/mens-health/p-shot',
  specialty:   "Men's Health",
})
const faqLd = faqSchema(d.faq.items)

export default function PShotPage() {
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
