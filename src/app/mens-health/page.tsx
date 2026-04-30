import type { Metadata }    from 'next'
import dynamic              from 'next/dynamic'
import { mensHealthData }   from '@/lib/pages/mensHealth'
import { procedureSchema, breadcrumbSchema, medicalWebPageSchema, faqSchema } from '@/lib/schema'
import { JsonLd }           from '@/components/JsonLd'
import { SITE }             from '@/config/site'

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
  title: "Men's Health Treatment in Tijuana, Mexico",
  description:
    "Male Enhancement Implant, erectile dysfunction treatment & testosterone replacement therapy — " +
    "60–75% less than US prices, 20 minutes from San Diego. Confidential. Russald Medical Center.",
  alternates: { canonical: '/mens-health' },
  openGraph: {
    title:       "Men's Health Treatment in Tijuana | Russald Medical Center",
    description: "Male Enhancement Implant, erectile dysfunction treatment & testosterone replacement therapy — 60–75% less than US prices, 20 minutes from San Diego.",
    url:         '/mens-health',
  },
}

const jsonLd      = procedureSchema("Men's Health Procedures", mensHealthData.intro.paragraphs[0], '/mens-health')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',          url: SITE.url },
  { name: "Men's Health",  url: `${SITE.url}/mens-health` },
])
const webPage     = medicalWebPageSchema({
  name:        "Men's Health Treatment in Tijuana, Mexico",
  description: mensHealthData.intro.paragraphs[0],
  path:        '/mens-health',
  specialty:   "Men's Health & Urology",
})
const faqLd       = faqSchema(mensHealthData.faq.items)

export default function MensHealthPage() {
  return (
    <>
      <JsonLd data={jsonLd as Record<string, unknown>} />
      <JsonLd data={breadcrumbs as Record<string, unknown>} />
      <JsonLd data={webPage as Record<string, unknown>} />
      <JsonLd data={faqLd as Record<string, unknown>} />
      <SpecHero       data={mensHealthData.hero}   />
      <SpecFactsStrip facts={mensHealthData.facts} />
      <SpecIntro      data={mensHealthData.intro}  />
      <SpecWhy        data={mensHealthData.why}    />
      <SpecProc       data={mensHealthData.proc}   />
      <SpecFaq        data={mensHealthData.faq}    />
      <EvalFormSection />
      <SpecFloatCta />
    </>
  )
}
