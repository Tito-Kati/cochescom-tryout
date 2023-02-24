import { fireEvent, render, screen } from '@testing-library/react'
import { FavoriteButton } from '@/components/CarList/FavoriteButton'

describe('src/components/CarList/FavoriteButton.tsx', () => {
  it('should call onClick when clicked', () => {
    const onClick = jest.fn()

    render(<FavoriteButton
      isFavorite={ true }
      onClick={ onClick }
    />)

    fireEvent.click(screen.getByTestId('favorite-button'))

    expect(onClick).toHaveBeenCalled()
  })
})
