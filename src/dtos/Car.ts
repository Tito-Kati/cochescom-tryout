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
