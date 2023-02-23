import { Car, formatPrice } from '@/dtos/Car'
import { FC } from 'react'
import styles from './CarModal.module.scss'

export const CarModal: FC<Car> = (car) => {
  return <div
    className={ styles['car-modal__container'] }
  >
    <img
      className={ styles['car-modal__image'] }
      src={ `/cars/${car.id}.webp` }
      alt={ `Fotografía del vehículo ${car.makeAndModel} en venta.` }
    />

    <h1 className={ styles['car-modal__make-and-model'] }>
      { car.makeAndModel }
    </h1>

    <span className={ styles['car-modal__price'] }>
      { formatPrice(car.price) }
    </span>

    <button
      className={ styles['car-modal__buy-button'] }
    >
      Comprar
    </button>
  </div>
}
