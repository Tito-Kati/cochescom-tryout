import fetch from 'node-fetch'
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

export async function getCars() {
  const response = await fetch('https://623b12c746a692bd844dea44.mockapi.io/coolCar')

  const rawCars: ApiCar[] = await response.json()

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
