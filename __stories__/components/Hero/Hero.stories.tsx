import { Meta, StoryObj } from '@storybook/react'
import { Hero } from '@/components/Hero/Hero'

const meta: Meta<typeof Hero> = {
  component: Hero,
}

export default meta

type Story = StoryObj<typeof Hero>

export const Default: Story = {}
