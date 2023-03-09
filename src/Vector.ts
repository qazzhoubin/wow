export default class Vector implements IVector {
  readonly components:number[]

  constructor (...components:number[]) {
    this.components = components
  }

  add ({ components }: IVector): IVector {
    return new Vector(
      ...this.components.map((component, index) => component + components[index])
    )
  }

  subtract ({ components }: IVector): IVector {
    return new Vector(
      ...this.components.map((component, index) => component - components[index])
    )
  }

  reverse (): IVector {
    return new Vector(
      ...this.components.reverse()
    )
  }
}
