export default class GameInput implements IGameInput, ISerialize {
  private keys: Map<string, boolean>

  constructor () {
    this.keys = new Map()
  }

  setKey (key: string, pressed: boolean): void {
    this.keys.set(key, pressed)
  }

  hasKey (keys: string | string[]): boolean {
    const d:string[] = []
    return d.concat(keys).every(key => this.keys.has(key) && this.keys.get(key))
  }

  serialize (): string {
    return Array.from(this.keys.keys()).filter(key => this.keys.has(key) && this.keys.get(key)).join("|")
  }

  unserialize (serialized: string): void {
    const values = serialized.split("|")
    values.forEach(key => {
      this.keys.set(key, true)
    })
  }
}
