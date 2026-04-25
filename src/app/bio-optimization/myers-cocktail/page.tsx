import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { myersData }      from '@/lib/pages/procedures/bioOptimization'
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
  title: 'Myers Cocktail IV in Tijuana, Mexico',
  description:
    'Myers Cocktail IV in Tijuana — B vitamins, vitamin C, magnesium, and calcium infusion for energy, immune support, and recovery. ' +
    'Significantly less than US IV therapy clinics, same-day outpatient, 20 min from San Diego. Russald Medical Center.',
  alternates: { canonical: '/bio-optimization/myers-cocktail' },
  openGraph: {
    title:       'Myers Cocktail IV in Tijuana | Russald Medical Center',
    description: 'Myers Cocktail IV — vitamins and minerals infusion, same-day outpatient. Significantly less than US. 20 min from San Diego.',
    url:         '/bio-optimization/myers-cocktail',
  },
}

const d = myersData
const jsonLd      = procedureSchema('Myers Cocktail IV', d.intro.paragraphs[0], '/bio-optimization/myers-cocktail')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',              url: SITE.url },
  { name: 'Bio Optimization',  url: `${SITE.url}/bio-optimization` },
  { name: 'Myers Cocktail IV', url: `${SITE.url}/bio-optimization/myers-cocktail` },
])
const webPage = medicalWebPageSchema({
  name:        'Myers Cocktail IV in Tijuana, Mexico',
  description: d.intro.paragraphs[0],
  path:        '/bio-optimization/myers-cocktail',
  specialty:   'Bio Optimization',
})
const faqLd = faqSchema(d.faq.items)

export default function MyersPage() {
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
