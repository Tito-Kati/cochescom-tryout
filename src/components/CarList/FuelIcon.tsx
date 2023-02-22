import { FC } from 'react'
import { Car } from '@/dtos/Car'
import styles from './FuelIcon.module.scss'

interface FuelIconProps {
  fuel: Car['fuel']
}

export const FuelIcon: FC<FuelIconProps> = ({ fuel }) => {
  let icon: string

  switch (fuel) {
    case 'diesel':
    case 'gasoline':
      icon = '/icons/gas-pump-solid.svg'
      break
    case 'hybrid':
      icon = '/icons/plug-solid.svg'
      break
    case 'electric':
      icon = '/icons/bolt-solid.svg'
      break
  }

  return <img
    className={ styles['fuel-icon__icon'] }
    src={ icon }
    alt=""
  />
}
