import { canvas, figures } from './main'
import basicClass from './main'

class square extends basicClass {
  drawSquare(){
    this.context.strokeRect(this.x,this.y,this.width, this.height);
  }
}
  
  const square1 = new square(canvas.getContext('2d'), 200, 25, 150, 150)
  square1.drawSquare()
  figures.push(square1)

