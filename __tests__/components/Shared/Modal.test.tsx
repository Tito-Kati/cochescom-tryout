import { fireEvent, render, screen } from '@testing-library/react'
import { Modal } from '@/components/Shared/Modal'

describe('src/components/Shared/Modal.tsx', () => {
  describe('when is close', () => {
    it('should not be visible', () => {
      render(<Modal
        isOpen={ false }
        onClose={ () => { /**/ } }
      >
        Content
      </Modal>)

      expect(screen.getByTestId('backdrop')).not.toHaveClass('modal__backdrop--open')
    })
  })

  describe('when is open', () => {
    it('should be visible', async () => {
      render(<Modal
        isOpen={ true }
        onClose={ () => { /**/ } }
      >
        Content
      </Modal>)

      expect(screen.getByTestId('backdrop')).toHaveClass('modal__backdrop--open')
    })
  })

  it('should call onClose when the backdrop is clicked', () => {
    const onClose = jest.fn()

    render(<Modal
      isOpen={ true }
      onClose={ onClose }
    >
      Content
    </Modal>)

    fireEvent.click(screen.getByTestId('backdrop'))

    expect(onClose).toHaveBeenCalled()
  })

  it('should call onClose when the close button is clicked', () => {
    const onClose = jest.fn()

    render(<Modal
      isOpen={ true }
      onClose={ onClose }
    >
      Content
    </Modal>)

    fireEvent.click(screen.getByTestId('close-button'))

    expect(onClose).toHaveBeenCalled()
  })

  it('should not call onClose when the modal is clicked', () => {
    const onClose = jest.fn()

    render(<Modal
      isOpen={ true }
      onClose={ onClose }
    >
      Content
    </Modal>)

    fireEvent.click(screen.getByTestId('modal'))

    expect(onClose).not.toHaveBeenCalled()
  })
})
