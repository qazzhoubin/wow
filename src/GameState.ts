export default class GameState<TElement extends ISerialize, TInput extends ISerialize> implements IState<TElement, TInput> {
  element: TElement
  input: TInput

  constructor (element:TElement, input:TInput) {
    this.element = element
    this.input = input
  }

  serialize (): string {
    return [
      this.element.serialize(),
      this.input.serialize()
    ].join("\r\n")
  }

  unserialize (serialized: string): void {
    const values = serialized.split("\r\n")
    this.element.unserialize(values[0])
    this.input.unserialize(values[1])
  }
}
