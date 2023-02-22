import { Meta, StoryObj } from '@storybook/react'
import { CarListItem } from '@/components/CarList/CarListItem'
import { DefaultCar } from '../../../__fixtures__/dtos/Car'
import { Car } from '@/dtos/Car'

const meta: Meta<typeof CarListItem> = {
  component: CarListItem,
}

export default meta

type Story = StoryObj<typeof CarListItem>

export const Default: Story = (args: Car) => {
  return <div style={ {
    width: '290px',
  } }>
    <CarListItem { ...args } />
  </div>
}
Default.args = DefaultCar()
