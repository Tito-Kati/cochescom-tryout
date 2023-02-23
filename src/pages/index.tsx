import { Hero } from '@/components/Hero/Hero'
import { getCars, storeFavoriteOnLocaleStorage, updateFavoriteWithLocaleStorage } from '@/services/Cars'
import { CarList } from '@/components/CarList/CarList'
import { GetServerSideProps, NextPage } from 'next'
import { Car } from '@/dtos/Car'
import { useEffect, useState } from 'react'

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
  const [carList, setCarList] = useState<Car[]>([])

  useEffect(() => {
    setCarList(updateFavoriteWithLocaleStorage(cars))
  }, [cars])

  const setFavorite = (carId: Car['id']) => {
    const carIndex = carList.findIndex(car => car.id === carId)

    if (carIndex < 0) {
      return
    }

    const newCar = { ...carList[carIndex] }
    const newCarList = [...carList]

    storeFavoriteOnLocaleStorage(carId, !newCar.isFavorite)
    newCar.isFavorite = !newCar.isFavorite

    newCarList[carIndex] = newCar
    setCarList(newCarList)
  }

  return (
    <>
      <Hero />
      <CarList cars={ carList } setFavorite={ setFavorite }/>
    </>
  )
}

export default Home
