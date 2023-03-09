export function random (min:number, max:number) {
  return Math.floor((max - min) * Math.random() + min)
}

export function make (command:string, states:IGameState[]) {
  const data = states.map(state => state.serialize())
  return [command, data]
}
