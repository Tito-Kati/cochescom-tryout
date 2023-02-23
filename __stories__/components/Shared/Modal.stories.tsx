import { Meta, StoryObj } from '@storybook/react'
import { Modal } from '@/components/Shared/Modal'

const meta: Meta<typeof Modal> = {
  component: Modal,
  args: {
    children: 'Contenido del Modal',
  },
}

export default meta

type Story = StoryObj<typeof Modal>

export const Open: Story = {
  args: {
    isOpen: true,
  },
}

export const Close: Story = {
  args: {
    isOpen: false,
  },
}
