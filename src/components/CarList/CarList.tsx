import { FC } from 'react'
import { Car } from '@/dtos/Car'
import { CarListItem } from '@/components/CarList/CarListItem'
import styles from './CarList.module.scss'

interface CarListProps {
  cars: Car[]
}

export const CarList: FC<CarListProps> = ({ cars }) => {
  return <div className={ styles['car-list__container'] }>
    { cars.map(car => <CarListItem
      key={ car.id }
      { ...car }
    />) }
  </div>
}
