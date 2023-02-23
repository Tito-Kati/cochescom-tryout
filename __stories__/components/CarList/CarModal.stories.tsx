import { Meta, StoryObj } from '@storybook/react'
import { DefaultCar } from '../../../__fixtures__/dtos/Car'
import { CarModal } from '@/components/CarList/CarModal'
import { Car } from '@/dtos/Car'
import { Modal } from '@/components/Shared/Modal'

const meta: Meta<typeof CarModal> = {
  component: CarModal,
}

export default meta

type Story = StoryObj<typeof CarModal>

export const Default: Story = (args: Car) => {
  return <Modal
    isOpen={ true }
    onClose={ () => { /**/ } }
  >
    <CarModal { ...args } />
  </Modal>
}
Default.args = DefaultCar()
