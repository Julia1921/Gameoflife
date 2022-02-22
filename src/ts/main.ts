export let canvas = <HTMLCanvasElement>document.getElementById('tutorial')
export let figures: any = []

//Базовый класс
export default class basicClass {
  x: number
  y: number
  width: number
  height: number
  context: any

  constructor(context: any, x: number, y: number, width: number, height: number) {
    this.context = context
    this.x = x
    this.y = y 
    this.width = width
    this.height = height
  }
  movePosition(num1: number, num2: number){
    this.x= this.x + num1
    this.y= this.y + num2
  }
}

 function requestAnimation(): void {
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
  for(let item of figures){
    item.drawCircle()
    item.movePosition(0,0.1)
  }
  window.requestAnimationFrame(requestAnimation)
}

// requestAnimation()
console.log(figures)