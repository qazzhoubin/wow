export default class GameElement implements IGameElement, ISerialize {
  id:number
  name: string
  hp: number
  mp: number
  speed: number
  power: number
  defence: number
  width: number
  height: number
  x:number
  y:number
  color: number[]

  constructor (id:number) {
    this.id = id
    this.name = ""
    this.hp = 0
    this.mp = 0
    this.speed = 0
    this.power = 0
    this.defence = 0
    this.width = 0
    this.height = 0
    this.x = 0
    this.y = 0
    this.color = [0, 0, 0]
  }

  serialize (): string {
    return [
      this.id,
      this.name,
      this.hp,
      this.mp,
      this.speed,
      this.power,
      this.defence,
      this.x,
      this.y,
      this.width,
      this.height,
      this.color.join(",")
    ].join("|")
  }

  unserialize (serialized: string): void {
    const values = serialized.split("|")
    this.id = Number(values[0])
    this.name = values[1]
    this.hp = Number(values[2])
    this.mp = Number(values[3])
    this.speed = Number(values[4])
    this.power = Number(values[5])
    this.defence = Number(values[6])
    this.x = Number(values[7])
    this.y = Number(values[8])
    this.width = Number(values[9])
    this.height = Number(values[10])
    this.color = values[11].split(",").map(c => Number(c))
  }
}
