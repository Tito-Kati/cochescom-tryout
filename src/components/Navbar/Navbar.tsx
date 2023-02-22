import { FC } from 'react'
import styles from './Navbar.module.scss'

export const Navbar: FC = () => {
  return (
    <nav className={ styles.navbar__navbar }>
      <div className={ styles.navbar__container }>
        <img
          className={ styles.navbar__logo }
          src="/logo-cochescom.png"
          alt="Coches.com"
        />
      </div>
    </nav>
  )
}
