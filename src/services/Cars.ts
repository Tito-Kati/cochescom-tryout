import { Car } from '@/dtos/Car'

export interface ApiCar {
  id: string
  makeAndModel: string
  version: string
  price: number
  fuel: 'Diesel' | 'Diésel' | 'Eléctrico' | 'Gasolina' | 'Híbrido'
  location: string
  year: number
  km: number
  isFavorite: boolean
}

type LocalFavoriteList = Record<Car['id'], Car['isFavorite']>

export async function getCars() {
  let rawCars: ApiCar[]

  try {
    const response = await fetch('https://623b12c746a692bd844dea44.mockapi.io/coolCar')

    rawCars = await response.json()
  } catch (_) {
    return []
  }

  return rawCars.map(transformApiCarToDomainCar)
}

function transformApiCarToDomainCar(rawCar: ApiCar): Car {
  let fuel: Car['fuel']

  switch (rawCar.fuel) {
    case 'Diesel':
    case 'Diésel':
      fuel = 'diesel'
      break
    case 'Eléctrico':
      fuel = 'electric'
      break
    case 'Gasolina':
      fuel = 'gasoline'
      break
    case 'Híbrido':
      fuel = 'hybrid'
      break
  }

  return {
    id: rawCar.id,
    makeAndModel: rawCar.makeAndModel,
    version: rawCar.version,
    price: rawCar.price,
    fuel: fuel,
    location: rawCar.location,
    registrationYear: rawCar.year,
    kilometres: rawCar.km,
    isFavorite: rawCar.isFavorite,
  }
}

export function updateFavoriteWithLocaleStorage(cars: Car[]): Car[] {
  const localFavoriteList: LocalFavoriteList = JSON.parse(localStorage.getItem('favoriteCars') ?? '{}')

  return cars.map((car) => {
    car.isFavorite = localFavoriteList[car.id] ?? car.isFavorite

    return car
  })
}

export function storeFavoriteOnLocaleStorage(carId: Car['id'], isFavorite: Car['isFavorite']) {
  const favoriteCars = JSON.parse(localStorage.getItem('favoriteCars') ?? '{}')

  favoriteCars[carId] = isFavorite

  localStorage.setItem('favoriteCars', JSON.stringify(favoriteCars))
}
