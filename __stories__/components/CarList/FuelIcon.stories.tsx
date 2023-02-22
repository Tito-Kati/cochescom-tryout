import { Meta, StoryObj } from '@storybook/react'
import { FuelIcon } from '@/components/CarList/FuelIcon'

const meta: Meta<typeof FuelIcon> = {
  component: FuelIcon,
}

export default meta

type Story = StoryObj<typeof FuelIcon>

export const Diesel: Story = {
  args: {
    fuel: 'diesel',
  },
}

export const Gasoline: Story = {
  args: {
    fuel: 'gasoline',
  },
}

export const Hybrid: Story = {
  args: {
    fuel: 'hybrid',
  },
}

export const Electric: Story = {
  args: {
    fuel: 'electric',
  },
}
