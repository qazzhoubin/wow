import Game from "./Game"
import GameElement from "./GameElement"
import GameInput from "./GameInput"
import GameState from "./GameState"
import { make } from "./utils"

const worker = new Worker("server.js")
let states:IGameState[] = []

function start () {
  worker.postMessage(make("start", states))
}

function update () {
  worker.postMessage(make("update", states))
  // window.requestAnimationFrame(update)
}

function listen (game:Game) {
  worker.addEventListener("message", function (e:MessageEvent<string[]>) {
    const data = e.data
    states = data.map(d => {
      const state = new GameState(
        new GameElement(0),
        new GameInput()
      )
      state.unserialize(d)
      return state
    })
    game.update(states)
  })
}

function listenKeyorad () {
  document.addEventListener("keydown", function (e:KeyboardEvent) {
    const player = states.find(state => state.element.id === 1)
    if (!player) {
      throw new Error("No player")
    }
    player.input.setKey(e.key, true)
    update()
  })
  document.addEventListener("keyup", function (e:KeyboardEvent) {
    const player = states.find(state => state.element.id === 1)
    if (!player) {
      throw new Error("No player")
    }
    player.input.setKey(e.key, false)
    update()
  })
}

function main () {
  const app = document.getElementById("app")
  if (!app) {
    throw new Error("app container does not exist")
  }
  const canvas = document.createElement("canvas")
  canvas.width = app.clientWidth
  canvas.height = app.clientHeight
  const context = canvas.getContext("2d")
  if (!context) {
    throw new Error("Your browser does not support canvas,please use chrome of latest version")
  }

  app.appendChild(canvas)

  const game = new Game(context)
  game.run()

  listen(game)
  listenKeyorad()
  start()
}

main()
