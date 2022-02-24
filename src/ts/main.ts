import { ellipseShape } from "./ellipseShape";
import { rectangleShape } from "./rectangleShape";

let canvas = <HTMLCanvasElement>document.getElementById('tutorial')
let figures: any = []


function requestAnimation(): void {
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    for(let item of figures){
        item.draw(75, 0, Math.PI*2, true)
        item.movePosition(0,0.1)
    }
    window.requestAnimationFrame(requestAnimation)
  }
  


const circle1 = new ellipseShape(canvas.getContext('2d'), 100, 100, 10, 10)
circle1.draw(75, 0, Math.PI*2, true)

const square1 = new rectangleShape(canvas.getContext('2d'), 200, 25, 150, 150)
square1.draw()
figures.push(circle1)
figures.push(square1)

requestAnimation()