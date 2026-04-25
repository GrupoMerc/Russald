import type { Metadata } from 'next'
import HomeHero from '@/components/sections/HomeHero'
import HomeWho from '@/components/sections/HomeWho'
import HomeWhy from '@/components/sections/HomeWhy'
import HomeSpecialties from '@/components/sections/HomeSpecialties'
import BioBreaker from '@/components/sections/BioBreaker'
import HimplantCallout from '@/components/sections/HimplantCallout'
import LocationStrip from '@/components/sections/LocationStrip'
import HomeJourney from '@/components/sections/HomeJourney'
import HomeProcedures from '@/components/sections/HomeProcedures'
import EvalFormSection from '@/components/sections/EvalFormSection'

// Absolute title — evita el template '%s | Russald Medical Center' en home
// para no duplicar el nombre de marca en la misma línea
export const metadata: Metadata = {
  title: {
    absolute: 'Russald Medical Center | World-Class Surgery in Tijuana, Mexico',
  },
  description:
    'Board-certified surgeons in Tijuana, 20 min from San Diego. ' +
    'Weight loss, plastic surgery & hair restoration. ' +
    '60–75% less than US prices. Free evaluation.',
  alternates: { canonical: '/' },
  openGraph: {
    title:       'Russald Medical Center | World-Class Surgery in Tijuana, Mexico',
    description: 'Board-certified surgeons in Tijuana. 60–75% less than US prices. Free evaluation.',
    url:         '/',
  },
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeWho />
      <HomeWhy />
      <HomeSpecialties />
      <BioBreaker />
      <HimplantCallout />
      <LocationStrip />
      <HomeJourney />
      <HomeProcedures />
      <EvalFormSection />
    </>
  )
}
