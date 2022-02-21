let canvas = <HTMLCanvasElement>document.getElementById('tutorial')
let square: any = []

class RectangleShape {
  x: number
  y: number
  width: number
  height: number
  context: any

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x
    this.y = y 
    this.width = width
    this.height = height
  }

  setContext(context: any)  {
    this.context = context
  }
  draw(){
    this.context.strokeRect(this.x,this.y,this.width, this.height);
  }

  movePosition(num1: number, num2: number){
    this.x= this.x + num1
    this.y= this.y + num2
  }
  clear(){
    this.context.clearRect(0, 0, canvas.width, canvas.height)
  }
}

function requestAnimation(): void {
  for(let i=0; i<=square.length; i++){
    rect.clear()
    rect.draw()
    rect.movePosition(0,0.1)
  }
  window.requestAnimationFrame(requestAnimation)
}

const rect = new RectangleShape(25, 25, 1, 1)
rect.setContext(canvas.getContext('2d'))
square.push(rect)

requestAnimation()

console.log(square)
