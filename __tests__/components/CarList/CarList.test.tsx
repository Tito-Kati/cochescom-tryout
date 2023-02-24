import { fireEvent, render, screen } from '@testing-library/react'
import { CarList } from '@/components/CarList/CarList'
import { DefaultCar } from '../../../__fixtures__/dtos/Car'

describe('src/components/CarList/CarList.tsx', () => {
  it('should pass the proper car.id when favorite button is clicked', () => {
    const setFavorite = jest.fn()
    const car = DefaultCar()

    render(<CarList
      cars={ [car] }
      setFavorite={ setFavorite }
    />)

    fireEvent.click(screen.getByTestId('favorite-button'))

    expect(setFavorite).toHaveBeenCalledWith(car.id)
  })
})
