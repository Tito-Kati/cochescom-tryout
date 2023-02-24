import { FC, PropsWithChildren } from 'react'
import styles from './Modal.module.scss'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, isOpen, onClose }) => {
  return <div
    onClick={ onClose }
    className={ `
      ${ isOpen && styles['modal__backdrop--open'] }
      ${ styles['modal__backdrop'] }
    ` }
    data-testid="backdrop"
  >
    <div
      className={ styles['modal__modal'] }
      onClick={ (event) => event.stopPropagation() }
      data-testid="modal"
    >
      <button
        className={ styles['modal__close-button'] }
        onClick={ onClose }
        data-testid="close-button"
      >
        <img
          className={ styles['modal__close-icon'] }
          src="/icons/xmark-solid.svg"
          alt="Cerrar Modal"
        />
      </button>
      { children }
    </div>
  </div>
}
