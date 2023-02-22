import { getCars } from '@/services/Cars';
import { expect } from '@jest/globals';
import fetch from 'jest-fetch-mock';
import { DefaultApiCar } from "../../__fixtures__/services/Cars";
import { Default } from "../../__fixtures__/entities/Car";

describe('src/services/Cars.ts', () => {
  describe('getCars', () => {
    it('should transform the raw data to a Car properly', async () => {
      fetch.mockResponseOnce(JSON.stringify([DefaultApiCar()]));

      expect(await getCars()).toStrictEqual([Default()])
    })
  })
})
