import { formatKilometers, formatPrice, translateFuel } from '@/dtos/Car'
import { DefaultCar } from '../../__fixtures__/dtos/Car'

describe('src/dtos/Car.ts', () => {
  describe('formatPrice', () => {
    it('should format a car price to be human readable', () => {
      expect(formatPrice(DefaultCar()['price'])).toBe('12.000 €')
    })
  })
  describe('formatKilometers', () => {
    it('should format a car kilometers to be human readable', () => {
      expect(formatKilometers(DefaultCar()['kilometres'])).toBe('40.000 km')
    })
  })
  describe('translateFuel', () => {
    it.each`
      key | translation
      ${'diesel'} | ${'Diésel'}
      ${'hybrid'} | ${'Híbrido'}
      ${'gasoline'} | ${'Gasolina'}
      ${'electric'} | ${'Eléctrico'}
    `('should translate fuel "$key" key to spanish word "$translation"', ({ key, translation }) => {
      expect(translateFuel(key)).toBe(translation)
    })
  })
})
