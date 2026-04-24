import type { Metadata } from 'next'
import { wlsData }        from '@/lib/pages/weightLoss'
import SpecHero           from '@/components/sections/spec/SpecHero'
import SpecFactsStrip     from '@/components/sections/spec/SpecFactsStrip'
import SpecIntro          from '@/components/sections/spec/SpecIntro'
import SpecWhy            from '@/components/sections/spec/SpecWhy'
import SpecProc           from '@/components/sections/spec/SpecProc'
import EvalFormSection    from '@/components/sections/EvalFormSection'
import SpecFloatCta       from '@/components/sections/spec/SpecFloatCta'

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

export default function WeightLossSurgeryPage() {
  return (
    <>
      <SpecHero       data={wlsData.hero}  />
      <SpecFactsStrip facts={wlsData.facts} />
      <SpecIntro      data={wlsData.intro}  />
      <SpecWhy        data={wlsData.why}    />
      <SpecProc       data={wlsData.proc}   />
      <EvalFormSection />
      <SpecFloatCta />
    </>
  )
}
