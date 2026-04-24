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
