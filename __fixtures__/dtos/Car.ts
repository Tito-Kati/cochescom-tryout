import { Car } from '@/dtos/Car'

export function Default (): Car {
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
