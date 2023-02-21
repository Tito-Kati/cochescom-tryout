export class Car {
  constructor(
    readonly id: string,
    readonly makeAndModel: string,
    readonly version: string,
    readonly price: number,
    readonly fuel: 'diesel' | 'hybrid' | 'gasoline' | 'electric',
    readonly location: string,
    readonly registrationYear: number,
    readonly kilometres: number,
    readonly isFavorite: boolean,
  ) {}

  get humanFuel () {
    switch (this.fuel) {
      case "diesel":
        return 'Diésel'
      case "hybrid":
        return 'Híbrido'
      case "gasoline":
        return 'Gasolina'
      case "electric":
        return 'Eléctrico'
    }
  }
}





