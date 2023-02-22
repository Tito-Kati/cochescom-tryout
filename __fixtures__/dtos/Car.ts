import { Car } from '@/dtos/Car'

export function DefaultCar (): Car {
  return {
    id: '3',
    makeAndModel: 'Skoda Octavia',
    version: 'Ambition Plus, 1.5 TSI',
    price: 12000,
    fuel: 'gasoline',
    location: 'Orihuela',
    registrationYear: 2009,
    kilometres: 40000,
    isFavorite: true,
  }
}

export function NotFavoriteCar (): Car {
  return {
    id: '2',
    makeAndModel: 'Smart Roadster',
    version: 'Cabrio 82cv',
    price: 5200,
    fuel: 'gasoline',
    location: 'Murcia',
    registrationYear: 2003,
    kilometres: 90000,
    isFavorite: false,
  }
}
