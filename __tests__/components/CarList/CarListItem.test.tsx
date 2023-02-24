import { fireEvent, render, screen } from '@testing-library/react'
import { CarListItem } from '@/components/CarList/CarListItem'
import { DefaultCar } from '../../../__fixtures__/dtos/Car'

describe('src/components/CarList/CarListItem.tsx', () => {
  it('should call setFavorite when favorite button is clicked', () => {
    const setFavorite = jest.fn()

    render(<CarListItem
      { ...DefaultCar() }
      setFavorite={ setFavorite }
    />)

    fireEvent.click(screen.getByTestId('favorite-button'))

    expect(setFavorite).toHaveBeenCalled()
  })

  it('should open the car modal when the car image is clicked', () => {
    render(<CarListItem
      { ...DefaultCar() }
      setFavorite={ () => { /**/ } }
    />)

    const modal = screen.getByTestId('backdrop')

    expect(modal).not.toHaveClass('modal__backdrop--open')

    fireEvent.click(screen.getByTestId('car-image-button'))

    expect(modal).toHaveClass('modal__backdrop--open')
  })
})
