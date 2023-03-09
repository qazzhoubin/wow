export default class Game {
  private ctx:CanvasRenderingContext2D
  private states:IGameState[]
  constructor (ctx:CanvasRenderingContext2D) {
    this.ctx = ctx
    this.states = []
  }

  update (states:IGameState[]) {
    this.states = states
  }

  private redraw () {
    this.states.forEach(state => {
      const element = state.element
      console.log(state)
      this.ctx.save()
      this.ctx.beginPath()
      this.ctx.fillText(element.name, element.x, element.y)
      this.ctx.fillStyle = `rgb(${element.color[0]},${element.color[1]},${element.color[2]})`
      this.ctx.fillRect(element.x, element.y, element.width, element.height)
      this.ctx.restore()
    })
  }

  loop (timestamp:number) {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    this.redraw()
    window.requestAnimationFrame(this.loop.bind(this))
  }

  run () {
    window.requestAnimationFrame(this.loop.bind(this))
  }
}
