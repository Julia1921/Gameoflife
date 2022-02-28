import { EllipseShape } from "./EllipseShape";
import { RectangleShape } from "./RectangleShape";

export let canvas = <HTMLCanvasElement>document.getElementById('tutorial')
let figures: ( EllipseShape | RectangleShape )[] = []


function requestAnimation(): void {
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    for(let item of figures){
        item.draw(75, 0, Math.PI*2, true)
        item.movePosition(0,0.1)
    }
    window.requestAnimationFrame(requestAnimation)
  }
  


const CIRCLE_1 = new EllipseShape(100, 100, 10, 10)
CIRCLE_1.draw(75, 0, Math.PI*2, true)

const SQUARE_1 = new RectangleShape(200, 25, 150, 150)
SQUARE_1.draw()
figures.push(CIRCLE_1)
figures.push(SQUARE_1)

requestAnimation()