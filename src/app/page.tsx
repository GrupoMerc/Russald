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

export const metadata: Metadata = {
  title: 'World-Class Surgery in Tijuana, Mexico — 20 Min from San Diego',
  description:
    'Board-certified surgeons in Tijuana. Weight loss surgery, plastic surgery, hair restoration & more — 60–75% less than US prices. Free clinical evaluation.',
  alternates: { canonical: '/' },
  openGraph: {
    title:       'Russald Medical Center — World-Class Surgery in Tijuana, Mexico',
    description: 'Board-certified surgeons in Tijuana. Weight loss surgery, plastic surgery, hair restoration & more — 60–75% less than US prices.',
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
