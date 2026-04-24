import type { Metadata } from 'next'
import WlsHero        from '@/components/sections/WlsHero'
import WlsFactsStrip  from '@/components/sections/WlsFactsStrip'
import WlsIntro       from '@/components/sections/WlsIntro'
import WlsWhy         from '@/components/sections/WlsWhy'
import WlsProc        from '@/components/sections/WlsProc'
import EvalFormSection from '@/components/sections/EvalFormSection'
import WlsFloatCta    from '@/components/WlsFloatCta'

export const metadata: Metadata = {
  title: 'Weight Loss Surgery in Tijuana, Mexico',
  description:
    'Gastric sleeve, gastric bypass, mini bypass, Lap-Band & revision surgery — 65–75% less than US prices, 20 minutes from San Diego. Fellowship-trained bariatric surgeons at Russald Medical Center.',
  alternates: { canonical: '/weight-loss-surgery' },
  openGraph: {
    title:       'Weight Loss Surgery in Tijuana | Russald Medical Center',
    description: 'Gastric sleeve, gastric bypass, mini bypass, Lap-Band & revision surgery — 65–75% less than US prices, 20 minutes from San Diego.',
    url:         '/weight-loss-surgery',
  },
}

export default function WeightLossSurgeryPage() {
  return (
    <>
      <WlsHero />
      <WlsFactsStrip />
      <WlsIntro />
      <WlsWhy />
      <WlsProc />
      <EvalFormSection />
      <WlsFloatCta />
    </>
  )
}
