import { Hero } from '@/components/Hero/Hero'
import { getCars } from '@/services/Cars'

const cars = getCars()

export default function Home() {
  return (
    <>
      <Hero />
      Soon!
    </>
  )
}
