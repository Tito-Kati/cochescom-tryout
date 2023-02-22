import { Car } from '@/dtos/Car'
import { FC } from 'react'
import styles from './CarListItem.module.scss'

interface CarListItemProps {
  car: Car
}

export const CarListItem: FC<CarListItemProps> = ({ car }) => {
  return <div className={ styles['car-list-item__card'] }>
    <img
      className={ styles['car-list-item__image'] }
      src={ `/cars/${car.id}.webp` }
      alt={ `Fotografía del vehículo ${car.makeAndModel} en venta.` }
    />

    <div className={ styles['car-list-item__price-and-favorite'] }>
      <span className={ styles['car-list-item__price'] }>
        { car.price }
      </span>

      <span className={ styles['car-list-item__favorite'] }>
        { car.isFavorite ? '<3' : '</3' }
      </span>
    </div>

    <div className={ styles['car-list-item__make-and-model'] }>
      { car.makeAndModel }
    </div>

    <div className={ styles['car-list-item__version-and-fuel'] }>
      <span className={ styles['car-list-item__version'] }>
        { car.version }
      </span>

      <span className={ styles['car-list-item__fuel'] }>
        { car.fuel }
      </span>
    </div>

    <div className={ styles['car-list-item__footer'] }>
      <span className={ styles['car-list-item__location'] }>
        { car.location }
      </span>

      <span className={ styles['car-list-item__registration-year'] }>
        { car.registrationYear }
      </span>

      <span className={ styles['car-list-item__kilometres'] }>
        { car.kilometres }
      </span>
    </div>
  </div>
}
