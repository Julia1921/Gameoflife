import { canvas } from "./main"

//Базовый класс
export abstract class ABaseObject {
  protected x: number
  protected y: number
  protected width: number
  protected height: number
  protected context = canvas.getContext('2d')

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x
    this.y = y 
    this.width = width
    this.height = height
  }
  abstract draw(): void

  public movePosition(num1: number, num2: number){
    this.x= this.x + num1
    this.y= this.y + num2
  }
  public setSize(x: number, y: number, width: number, height:number): void {
    this.width = width
    this.height = height
  }
}

