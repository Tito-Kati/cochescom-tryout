import { Meta, StoryObj } from '@storybook/react'
import { FavoriteButton } from '@/components/CarList/FavoriteButton'

const meta: Meta<typeof FavoriteButton> = {
  component: FavoriteButton,
}

export default meta

type Story = StoryObj<typeof FavoriteButton>

export const Favorite: Story = {
  args: {
    isFavorite: true,
  },
}

export const NotFavorite: Story = {
  args: {
    isFavorite: false,
  },
}
