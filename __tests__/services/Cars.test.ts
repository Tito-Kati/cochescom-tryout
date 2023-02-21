import {ApiCar, getCars} from '@/services/Cars';
import { expect } from '@jest/globals';
import { Car } from '@/entities/Car';
import fetch from 'jest-fetch-mock';

describe('src/services/Cars.ts', () => {
  describe('getCars', () => {
    it('should transform the raw data to a Car properly', async () => {
      fetch.mockResponseOnce(JSON.stringify(
        [{
          id: '42',
          makeAndModel: 'Skoda Octavia',
          version: 'Ambition Plus, 1.5 TSI',
          price: 12000,
          fuel: 'Gasolina',
          location: 'Orihuela',
          year: 2009,
          km: 40000,
          isFavorite: true
        }] as ApiCar[]
      ));

      expect(await getCars()).toStrictEqual([
        new Car(
          '42',
          'Skoda Octavia',
          'Ambition Plus, 1.5 TSI',
          12000,
          'gasoline',
          'Orihuela',
          2009,
          40000,
          true
        )
      ])
    })
  })
})
