import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { miniBypassData } from '@/lib/pages/procedures/weightLoss'
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
  title: 'Mini Gastric Bypass in Tijuana, Mexico',
  description:
    'Mini gastric bypass (single anastomosis) in Tijuana — 65–75% less than US hospitals, shorter operative time than standard bypass, ' +
    '20 minutes from San Diego. Russald Medical Center.',
  alternates: { canonical: '/weight-loss/mini-gastric-bypass' },
  openGraph: {
    title:       'Mini Gastric Bypass in Tijuana | Russald Medical Center',
    description: 'Mini gastric bypass (single anastomosis) — 65–75% less than US hospitals, bypass-level results, 20 min from San Diego.',
    url:         '/weight-loss/mini-gastric-bypass',
  },
}

const d = miniBypassData

const jsonLd      = procedureSchema('Mini Gastric Bypass', d.intro.paragraphs[0], '/weight-loss/mini-gastric-bypass')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',                url: SITE.url },
  { name: 'Weight Loss Surgery', url: `${SITE.url}/weight-loss` },
  { name: 'Mini Gastric Bypass', url: `${SITE.url}/weight-loss/mini-gastric-bypass` },
])
const webPage = medicalWebPageSchema({
  name:        'Mini Gastric Bypass in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/weight-loss/mini-gastric-bypass',
  specialty:   'Bariatric Surgery',
})
const faqLd = faqSchema(d.faq.items)

export default function MiniGastricBypassPage() {
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
