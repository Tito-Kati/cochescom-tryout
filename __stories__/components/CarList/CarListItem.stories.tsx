import { Meta, StoryObj } from '@storybook/react'
import { CarListItem, CarListItemProps } from '@/components/CarList/CarListItem'
import { DefaultCar } from '../../../__fixtures__/dtos/Car'

const meta: Meta<typeof CarListItem> = {
  component: CarListItem,
}

export default meta

type Story = StoryObj<typeof CarListItem>

export const Default: Story = (args: CarListItemProps) => {
  return <div style={ {
    width: '290px',
  } }>
    <CarListItem { ...args } />
  </div>
}
Default.args = DefaultCar()
