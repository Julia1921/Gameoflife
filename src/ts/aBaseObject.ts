//Базовый класс
export abstract class aBaseObject {
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

