export interface Car {
  id: string,
  makeAndModel: string,
  version: string,
  price: number,
  fuel: 'diesel' | 'hybrid' | 'gasoline' | 'electric',
  location: string,
  registrationYear: number,
  kilometres: number,
  isFavorite: boolean
}

export function formatPrice(price: Car['price']): string {
  return `${price.toLocaleString()} €`
}

export function formatKilometers(kilometres: Car['kilometres']): string {
  return `${kilometres.toLocaleString()} km`
}

export function translateFuel(fuel: Car['fuel']): string {
  switch (fuel) {
    case 'diesel':
      return 'Diésel'
    case 'hybrid':
      return 'Híbrido'
    case 'gasoline':
      return 'Gasolina'
    case 'electric':
      return 'Eléctrico'
  }
}
