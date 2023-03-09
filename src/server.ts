import GameElement from "./GameElement"
import GameInput from "./GameInput"
import GameState from "./GameState"
import Vector from "./Vector"
import { random } from "./utils"

let states:IGameState[] = []

onmessage = function (e:MessageEvent<any[]>) {
  const data = e.data
  const command = data[0]
  switch (command) {
    case "start":
      StartGame()
      break
    case "update":
      UpdateGame(data[1])
      break
  }
  boardcast()
}

function boardcast () {
  const response = states.map(state => state.serialize())
  postMessage(response)
}

function AI () {
  states.forEach((state, i) => {
    if (state.element.id !== 1) {
      const key = ["w", "d", "s", "a"][Math.floor(i % 4)]
      state.input.setKey(key, true)
      UpdateState(state)
    }
  })
  boardcast()
  requestAnimationFrame(AI)
}

function StartGame () {
  for (let i = 1; i <= 10; i++) {
    const ele = new GameElement(i)
    const input = new GameInput()
    ele.name = `name-${i}`
    ele.hp = random(0, 100)
    ele.mp = random(0, 100)
    ele.power = random(0, 100)
    ele.defence = random(0, 100)
    ele.speed = random(0, 100)
    ele.x = random(100, 500)
    ele.y = random(100, 500)
    ele.width = random(5, 20)
    ele.height = random(5, 20)
    ele.color = [random(0, 255), random(0, 255), random(0, 255)]
    const state = new GameState(
      ele,
      input
    )
    states.push(state)
  }
  AI()
}

function UpdateGame (data:string[]) {
  states = data.map(d => {
    const state = new GameState(
      new GameElement(0),
      new GameInput()
    )
    state.unserialize(d)
    return state
  })
  const player = states.find(state => state.element.id === 1)
  if (player) {
    UpdateState(player)
  }
}

function UpdateState (state:IGameState) {
  const input = state.input
  const baseSpeed = new Vector(5, 0)
  let position = new Vector(state.element.x, state.element.y)
  if (input.hasKey(["w"])) {
    position = position.subtract(baseSpeed.reverse())
  }
  if (input.hasKey(["d"])) {
    position = position.add(baseSpeed)
  }
  if (input.hasKey(["s"])) {
    position = position.add(baseSpeed.reverse())
  }
  if (input.hasKey(["a"])) {
    position = position.subtract(baseSpeed)
  }
  state.element.x = position.components[0]
  state.element.y = position.components[1]
}
