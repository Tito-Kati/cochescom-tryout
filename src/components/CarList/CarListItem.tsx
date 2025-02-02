import { Car, formatKilometers, formatPrice, translateFuel } from '@/dtos/Car'
import { FC, useState } from 'react'
import styles from './CarListItem.module.scss'
import { FuelIcon } from '@/components/CarList/FuelIcon'
import { FavoriteButton } from '@/components/CarList/FavoriteButton'
import { Modal } from '@/components/Shared/Modal'
import { CarModal } from '@/components/CarList/CarModal'

export type CarListItemProps = Car & {
  setFavorite: () => void
}

export const CarListItem: FC<CarListItemProps> = ({ setFavorite, ...car }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return <div className={ styles['car-list-item__card'] }>
    <button
      className={ styles['car-list-item__open-modal-button'] }
      onClick={ () => setModalIsOpen(true) }
      data-testid="car-image-button"
    >
      <img
        className={ styles['car-list-item__image'] }
        src={ `/cars/${car.id}.webp` }
        alt={ `Fotografía del vehículo ${car.makeAndModel} en venta.` }
      />
    </button>

    <div className={ styles['car-list-item__price-and-favorite'] }>
      <span className={ styles['car-list-item__price'] }>
        { formatPrice(car.price) }
      </span>

      <span className={ styles['car-list-item__favorite'] }>
        <FavoriteButton
          isFavorite={ car.isFavorite }
          onClick={ setFavorite }
        />
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
        <FuelIcon fuel={ car.fuel } />
        { translateFuel(car.fuel) }
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
        { formatKilometers(car.kilometres) }
      </span>
    </div>

    <Modal
      isOpen={ modalIsOpen }
      onClose={ () => setModalIsOpen(false) }
    >
      <CarModal { ...car } />
    </Modal>
  </div>
}
