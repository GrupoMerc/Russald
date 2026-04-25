import type { Metadata }  from 'next'
import dynamic            from 'next/dynamic'
import { plasticData }    from '@/lib/pages/plasticSurgery'
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
  title: 'Plastic Surgery in Tijuana, Mexico',
  description:
    'Rhinoplasty, breast augmentation, liposuction, tummy tuck, BBL & facelift — 50–70% less than US prices, 20 minutes from San Diego. Board-certified plastic surgeons at Russald Medical Center.',
  alternates: { canonical: '/plastic-surgery' },
  openGraph: {
    title:       'Plastic Surgery in Tijuana | Russald Medical Center',
    description: 'Rhinoplasty, breast augmentation, liposuction, tummy tuck, BBL & facelift — 50–70% less than US prices, 20 minutes from San Diego.',
    url:         '/plastic-surgery',
  },
}

const jsonLd      = procedureSchema('Plastic Surgery', plasticData.intro.paragraphs[0], '/plastic-surgery')
const breadcrumbs = breadcrumbSchema([
  { name: 'Home',            url: 'https://russaldmedical.com' },
  { name: 'Plastic Surgery', url: 'https://russaldmedical.com/plastic-surgery' },
])
const webPage     = medicalWebPageSchema({
  name:        'Plastic Surgery in Tijuana, Mexico',
  description: plasticData.intro.paragraphs[0],
  path:        '/plastic-surgery',
  specialty:   'Plastic Surgery',
})

export default function PlasticSurgeryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <SpecHero       data={plasticData.hero}   />
      <SpecFactsStrip facts={plasticData.facts} />
      <SpecIntro      data={plasticData.intro}  />
      <SpecWhy        data={plasticData.why}    />
      <SpecProc       data={plasticData.proc}   />
      <EvalFormSection />
      <SpecFloatCta />
    </>
  )
}
