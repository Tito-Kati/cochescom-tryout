import {FC} from "react";
import styles from "./Hero.module.scss";

export const Hero: FC = () => {
  return (
    <header className={ styles.hero__hero }>
      <div className={ styles.hero__container }>
        <img
          className={ styles.hero__image }
          src="/hero-img.png"
          alt=""
        />
        <h1 className={ styles.hero__title }>
          Coches de segunda mano
          <small className={ styles.hero__subtitle }>
            Dale una segunda vida a los 80.000 coches de segunda mano o de ocasión que tenemos para ti
          </small>
        </h1>
      </div>
    </header>
  )
}
