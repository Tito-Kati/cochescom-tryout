import { getCars, storeFavoriteOnLocaleStorage, updateFavoriteWithLocaleStorage } from '@/services/Cars'
import { expect } from '@jest/globals'
import fetch from 'jest-fetch-mock'
import { DefaultApiCar } from '../../__fixtures__/services/Cars'
import { DefaultCar, NotFavoriteCar } from '../../__fixtures__/dtos/Car'

describe('src/services/Cars.ts', () => {
  describe('getCars', () => {
    it('should transform the raw data to a Car properly', async () => {
      fetch.mockResponseOnce(JSON.stringify([DefaultApiCar()]))

      expect(await getCars()).toStrictEqual([DefaultCar()])
    })
  })

  describe('storeFavoriteOnLocaleStorage', () => {
    it('should store locally if a car is favorite or not properly', () => {
      storeFavoriteOnLocaleStorage('42', true)

      expect(localStorage.getItem).toHaveBeenCalledWith('favoriteCars')
      expect(localStorage.setItem).toHaveBeenCalledWith('favoriteCars', '{"42":true}')
    })
  })

  describe('updateFavoriteWithLocaleStorage', () => {
    it('should override favorites values for those on stored locally', () => {
      const notFavoriteCar = NotFavoriteCar()

      storeFavoriteOnLocaleStorage(notFavoriteCar.id, true)

      const updatedCars = updateFavoriteWithLocaleStorage([notFavoriteCar])

      expect(updatedCars[0]).toMatchObject({
        id: notFavoriteCar.id,
        isFavorite: true,
      })
    })
  })
})
