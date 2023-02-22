import { Hero } from '@/components/Hero/Hero'
import { getCars } from '@/services/Cars'
import { CarList } from '@/components/CarList/CarList'
import { GetServerSideProps, NextPage } from 'next'
import { Car } from '@/dtos/Car'

interface HomePageProps {
  cars: Car[]
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const cars = await getCars()

  return {
    props: {
      cars,
    },
  }
}


const Home: NextPage<HomePageProps> = ({ cars }) => {
  return (
    <>
      <Hero />
      <CarList cars={ cars } />
    </>
  )
}

export default Home
