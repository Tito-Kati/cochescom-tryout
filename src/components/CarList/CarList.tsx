import { FC } from 'react'
import { Car } from '@/dtos/Car'
import { CarListItem } from '@/components/CarList/CarListItem'
import styles from './CarList.module.scss'

interface CarListProps {
  cars: Car[],
  setFavorite: (carId: Car['id']) => void
}

export const CarList: FC<CarListProps> = ({ cars, setFavorite }) => {
  return <div className={ styles['car-list__container'] }>
    <h2 className={ styles['car-list__title'] }>
      Coches que te pueden interesar
    </h2>

    <div className={ styles['car-list__list'] }>
      { cars.map(car => <CarListItem
        key={ car.id }
        { ...car }
        setFavorite={ () => setFavorite(car.id) }
      />) }
    </div>
  </div>
}
