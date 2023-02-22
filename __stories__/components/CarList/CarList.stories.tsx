import { Meta, StoryObj } from '@storybook/react'
import { CarList } from '@/components/CarList/CarList'
import { DefaultCar, NotFavoriteCar } from '../../../__fixtures__/dtos/Car'

const meta: Meta<typeof CarList> = {
  component: CarList,
}

export default meta

type Story = StoryObj<typeof CarList>

export const Default: Story = {
  args: {
    cars: [
      DefaultCar(),
      NotFavoriteCar(),
    ],
  },
}
