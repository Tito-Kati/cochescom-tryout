import { ApiCar } from '@/services/Cars';

export function DefaultApiCar (): ApiCar {
  return {
    id: '42',
    makeAndModel: 'Skoda Octavia',
    version: 'Ambition Plus, 1.5 TSI',
    price: 12000,
    fuel: 'Gasolina',
    location: 'Orihuela',
    year: 2009,
    km: 40000,
    isFavorite: true
  }
}
