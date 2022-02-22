import { canvas, figures } from './main'
import basicClass from './main'

class circle extends basicClass {
    drawCircle(radius: number, startAngle: number, endAngle: number, anticlockwise: boolean ){
    this.context.beginPath();
    this.context.arc(this.x, this.y, radius, startAngle, endAngle, anticlockwise);
    this.context.stroke();
    }
  }
  
  const circle1 = new circle(canvas.getContext('2d'), 100, 100, 10, 10)
  circle1.drawCircle(75, 0, Math.PI*2, true)

  figures.push(circle1)
    
